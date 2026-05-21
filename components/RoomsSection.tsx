"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RoomCard from "./RoomCard";
import { rooms as staticRooms, Room } from "@/lib/rooms";
import { client, urlFor } from "@/lib/sanity";
import { roomsQuery } from "@/lib/queries";

interface RoomsSectionProps {
  onBook: (room: Room) => void;
}

export default function RoomsSection({ onBook }: RoomsSectionProps) {
  const [view, setView] = useState<"grid" | "carousel">("grid");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [sanityRooms, setSanityRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(roomsQuery)
      .then((data: any[]) => {
        if (data?.length > 0) {
          const mapped: Room[] = data.map((r) => ({
            id: r.slug || r._id,
            name: r.name,
            description: r.description || "",
            price: r.price || 0,
            size: r.size || "",
            guests: r.maxGuests || 2,
            view: r.view || "",
            tag: r.tag || "",
            amenities: r.amenities || [],
            gradient: "linear-gradient(135deg, #1a2a3a, #2a4a5a)",
            image: r.images?.[0] ? urlFor(r.images[0]).width(800).url() : null,
          }));
          setSanityRooms(mapped);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Use Sanity rooms if available, fall back to static
  const allRooms = sanityRooms.length > 0 ? sanityRooms : staticRooms;
  const visibleRooms = allRooms.slice(0, 3);

  const prevSlide = () =>
    setCarouselIndex((prev) => (prev === 0 ? allRooms.length - 1 : prev - 1));

  const nextSlide = () =>
    setCarouselIndex((prev) => (prev === allRooms.length - 1 ? 0 : prev + 1));

  return (
    <section id="rooms" style={{ background: "#faf7f2", padding: "100px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-ui)",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              — Accommodation —
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--dark)",
                lineHeight: 1.2,
              }}
            >
              Our{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Rooms & Suites
              </em>
            </h2>
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
                marginTop: "1.5rem",
              }}
            />
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {(["grid", "carousel"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  title={v === "grid" ? "Grid view" : "Carousel view"}
                  style={{
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1.5px solid var(--border)",
                    background: view === v ? "var(--gold)" : "transparent",
                    cursor: "pointer",
                    borderRadius: "3px",
                    color: view === v ? "#fff" : "var(--text-muted)",
                    transition: "all 0.3s",
                  }}
                >
                  {v === "grid" ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M8 12h8" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            <Link href="/rooms" className="btn-gold">
              View All
            </Link>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                border: "2px solid rgba(201,169,110,0.2)",
                borderTop: "2px solid var(--gold)",
                borderRadius: "50%",
                margin: "0 auto",
                animation: "spin 1s linear infinite",
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Grid View */}
        {!loading && view === "grid" && (
          <div
            className="rooms-grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {visibleRooms.map((room) => (
              <RoomCard key={room.id} room={room} onBook={onBook} />
            ))}
          </div>
        )}

        {/* Carousel View */}
        {!loading && view === "carousel" && (
          <div style={{ position: "relative" }}>
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transform: `translateX(-${carouselIndex * 100}%)`,
                }}
              >
                {allRooms.map((room) => (
                  <div key={room.id} style={{ flex: "0 0 100%", padding: "0 0.5rem" }}>
                    <RoomCard room={room} onBook={onBook} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              style={{
                position: "absolute", top: "50%", left: "-25px",
                transform: "translateY(-50%)", width: "50px", height: "50px",
                background: "#fff", border: "none", borderRadius: "50%",
                boxShadow: "0 8px 40px rgba(26,22,18,0.12)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", color: "var(--dark)",
              }}
            >←</button>

            <button
              onClick={nextSlide}
              style={{
                position: "absolute", top: "50%", right: "-25px",
                transform: "translateY(-50%)", width: "50px", height: "50px",
                background: "#fff", border: "none", borderRadius: "50%",
                boxShadow: "0 8px 40px rgba(26,22,18,0.12)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", color: "var(--dark)",
              }}
            >→</button>

            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "2rem" }}>
              {allRooms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  style={{
                    width: i === carouselIndex ? "24px" : "8px",
                    height: "8px",
                    borderRadius: i === carouselIndex ? "4px" : "50%",
                    background: i === carouselIndex ? "var(--gold)" : "#d4af6a44",
                    border: "none", cursor: "pointer",
                    transition: "all 0.3s", padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}