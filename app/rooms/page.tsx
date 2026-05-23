"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RoomCard from "@/components/RoomCard";
import BookingModal from "@/components/BookingModal";
import { rooms as staticRooms, Room } from "@/lib/rooms";
import { client, urlFor } from "@/lib/sanity";
import { roomsQuery } from "@/lib/queries";

type FilterType = "all" | "valley" | "suite" | "romantic" | "family";
type SortType = "featured" | "price-asc" | "price-desc";

const filterMap: Record<FilterType, string[]> = {
  all: [],
  valley: ["deluxe-valley-view", "superior-forest-view"],
  suite: ["premium-mountain-suite", "royal-cliff-suite"],
  romantic: ["honeymoon-cottage"],
  family: ["grand-family-suite"],
};

export default function RoomsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("featured");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [sanityRooms, setSanityRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(roomsQuery).then((data) => {
      setSanityRooms(data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  // Use Sanity rooms if available, otherwise fall back to static
  const allRooms: Room[] = sanityRooms.length > 0
    ? sanityRooms.map((r: any) => ({
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
      }))
    : staticRooms;

  const filteredRooms = allRooms
    .filter((r) => {
      if (filter === "all") return true;
      return filterMap[filter].includes(r.id);
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Rooms", value: "all" },
    { label: "Valley View", value: "valley" },
    { label: "Suites", value: "suite" },
    { label: "Romantic", value: "romantic" },
    { label: "Family", value: "family" },
  ];

  return (
    <>
      <Navbar />

      {/* Page Hero */}
<div
  style={{
    height: "420px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "var(--nav-h)",
  }}
>
  {/* Background image */}
  <img
    src="https://res.cloudinary.com/dhnglltpo/image/upload/v1779533006/royal-cliff-resort-rooms-banner_an7hsu.webp"
    alt="Rooms & Suites at Royal Cliff Resort"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
  />

  {/* Dark overlay */}
  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,12,15,0.45) 0%, rgba(10,12,15,0.65) 100%)" }} />

  <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
    <span style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)" }}>— ACCOMMODATION —</span>
    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, marginTop: "0.5rem" }}>
      Our Rooms &{" "}
      <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Suites</em>
    </h1>
    <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", marginTop: "0.8rem", fontStyle: "italic" }}>
      Every room, a different window into Kashmir soul
    </p>
  </div>
</div>

      {/* Filter Bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0ead8", position: "sticky", top: "var(--nav-h)", zIndex: 50, padding: "1rem 0" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  padding: "0.5rem 1.2rem",
                  border: "1.5px solid",
                  borderColor: filter === f.value ? "var(--gold)" : "rgba(201,169,110,0.2)",
                  background: filter === f.value ? "rgba(201,169,110,0.12)" : "transparent",
                  color: filter === f.value ? "var(--gold)" : "var(--text-muted)",
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortType)}
              style={{ border: "1px solid #e8e2da", borderRadius: "3px", padding: "0.45rem 0.8rem", fontSize: "0.82rem", fontFamily: "var(--font-ui)", color: "var(--text)", outline: "none", cursor: "pointer" }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {(["grid", "list"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  style={{ width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid var(--border)", background: view === v ? "var(--gold)" : "transparent", color: view === v ? "#fff" : "var(--text-muted)", borderRadius: "3px", cursor: "pointer", transition: "all 0.3s" }}
                >
                  {v === "grid" ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <section style={{ padding: "4rem 0 100px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            {loading ? "Loading rooms..." : `Showing `}
            {!loading && <strong style={{ color: "var(--dark)" }}>{filteredRooms.length}</strong>}
            {!loading && ` ${filteredRooms.length === 1 ? "room" : "rooms"}`}
            {sanityRooms.length > 0 && !loading && (
              <span style={{ marginLeft: "0.5rem", color: "var(--gold)", fontSize: "0.72rem" }}>● Live from CMS</span>
            )}
          </p>

          {loading ? (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <div style={{ width: "40px", height: "40px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto 1rem", animation: "spin 1s linear infinite" }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)", fontSize: "0.85rem" }}>Loading rooms...</p>
            </div>
          ) : filteredRooms.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏔️</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--dark)", marginBottom: "0.5rem" }}>No rooms found</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Try a different filter</p>
              <button onClick={() => setFilter("all")} style={{ marginTop: "1.5rem", fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.8rem 1.8rem", background: "var(--gold)", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }}>
                View All Rooms
              </button>
            </div>
          ) : (
            <div
              style={{ display: "grid", gridTemplateColumns: view === "grid" ? "repeat(3, 1fr)" : "1fr", gap: "2rem" }}
              className="rooms-grid-container"
            >
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} onBook={(r) => setSelectedRoom(r)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      {selectedRoom && (
        <BookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </>
  );
}