"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { rooms } from "@/lib/rooms";

const amenityIcons: Record<string, string> = {
  "Valley View": "🏔️",
  "King Bed": "🛏️",
  "Free WiFi": "📶",
  "Breakfast": "☕",
  "Rain Shower": "🚿",
  "Fireplace": "🔥",
  "Living Area": "🛋️",
  "Jacuzzi": "🛁",
  "Mini Bar": "🍷",
  "Balcony": "🌄",
  "Private Terrace": "🌿",
  "Butler": "🤵",
  "360° Views": "🔭",
  "All Inclusive": "⭐",
  "Private Cottage": "🏡",
  "Clawfoot Bath": "🛁",
  "Canopy Bed": "🛏️",
  "Dinner Included": "🍽️",
  "2 Bedrooms": "🛏️",
  "Living Room": "🛋️",
  "Kids Area": "🎮",
  "Forest View": "🌲",
  "Queen Bed": "🛏️",
  "Private Sit-out": "🌿",
};

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const room = rooms.find((r) => r.id === slug);
  if (!room) notFound();

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2 Guests");
  const [activePhoto, setActivePhoto] = useState(0);

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        86400000
    )
  );
  const total = room.price * nights;
  const tax = Math.round(total * 0.12);

  const photos = [
    { gradient: room.gradient, label: "Main View" },
    { gradient: "linear-gradient(135deg, #1a2a3a, #3a4a5a)", label: "Bedroom" },
    { gradient: "linear-gradient(135deg, #2a1a0a, #4a3020)", label: "Bathroom" },
    { gradient: "linear-gradient(135deg, #0a1a2a, #2a3a4a)", label: "Balcony" },
    { gradient: "linear-gradient(135deg, #1a1a2a, #3a3050)", label: "View" },
  ];

  const relatedRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "70vh",
          position: "relative",
          overflow: "hidden",
          marginTop: "var(--nav-h)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: photos[activePhoto].gradient,
            transition: "background 0.6s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 400 300" style={{ width: "40%", opacity: 0.1 }}>
            <polygon points="200,20 320,200 80,200" fill="white" />
            <polygon points="80,80 200,200 0,200" fill="rgba(255,255,255,0.5)" />
            <polygon points="300,60 400,200 200,200" fill="rgba(255,255,255,0.4)" />
            <circle cx="330" cy="50" r="25" fill="rgba(255,220,100,0.4)" />
          </svg>
        </div>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55))",
            display: "flex",
            alignItems: "flex-end",
            padding: "4rem",
          }}
        >
          <div style={{ color: "#fff" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-ui)",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold-light)",
                marginBottom: "0.8rem",
              }}
            >
              — Royal Cliff Resort —
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              {room.name}
            </h1>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginTop: "1rem",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-ui)",
              }}
            >
              <span>📐 {room.size}</span>
              <span>👤 Up to {room.guests} Guests</span>
              <span>🏔️ {room.view}</span>
            </div>
          </div>
        </div>

        {/* Photo thumbnails */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setActivePhoto(i)}
              style={{
                width: "60px",
                height: "45px",
                background: photo.gradient,
                border: i === activePhoto ? "2px solid var(--gold-light)" : "2px solid transparent",
                borderRadius: "3px",
                cursor: "pointer",
                opacity: i === activePhoto ? 1 : 0.6,
                transition: "all 0.3s",
                fontSize: "0.5rem",
                color: "#fff",
                fontFamily: "var(--font-ui)",
              }}
            >
              {photo.label}
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #f0ead8",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            gap: "0.5rem",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-ui)",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ color: "var(--gold)" }}>Home</Link>
          <span>›</span>
          <Link href="/rooms" style={{ color: "var(--gold)" }}>Rooms</Link>
          <span>›</span>
          <span>{room.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: "5rem 0 100px", background: "var(--cream)" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left — Content */}
          <div>
            {/* Description */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "1rem",
              }}
            >
              About this Room
            </h2>
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
                marginBottom: "1.5rem",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                lineHeight: 1.9,
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              {room.description}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                lineHeight: 1.9,
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
              }}
            >
              Every corner of this room has been thoughtfully designed to
              reflect the beauty of Kashmir — from the hand-embroidered
              cushions to the locally sourced wood finishes. Wake up to
              mountain air, step onto your private balcony, and let the
              valley do the rest.
            </p>

            {/* Amenities */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "1.2rem",
              }}
            >
              Room Amenities
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.8rem",
                marginBottom: "2.5rem",
              }}
            >
              {room.amenities.map((amenity) => (
                <div
                  key={amenity}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    fontSize: "0.82rem",
                    color: "var(--text)",
                    padding: "0.7rem 0.8rem",
                    background: "#fff",
                    borderRadius: "4px",
                    fontFamily: "var(--font-ui)",
                    border: "1px solid #f0ead8",
                  }}
                >
                  <span>{amenityIcons[amenity] || "✓"}</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>

            {/* Policies */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "1.2rem",
              }}
            >
              Policies
            </h2>
            <div
              style={{
                background: "#fff",
                borderRadius: "6px",
                padding: "1.5rem",
                border: "1px solid #f0ead8",
                marginBottom: "2.5rem",
              }}
            >
              {[
                { label: "Check-in", value: "2:00 PM onwards" },
                { label: "Check-out", value: "11:00 AM" },
                { label: "Cancellation", value: "Free cancellation up to 48 hours before check-in" },
                { label: "Children", value: "Children of all ages welcome" },
                { label: "Pets", value: "Pets not allowed" },
                { label: "Smoking", value: "Non-smoking room" },
              ].map((policy) => (
                <div
                  key={policy.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.7rem 0",
                    borderBottom: "1px solid #f0ead8",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>
                    {policy.label}
                  </span>
                  <span style={{ color: "var(--text)" }}>{policy.value}</span>
                </div>
              ))}
            </div>

            {/* Related Rooms */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "1.5rem",
              }}
            >
              You May Also Like
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              {relatedRooms.map((r) => (
                <Link
                  key={r.id}
                  href={`/rooms/${r.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      borderRadius: "6px",
                      overflow: "hidden",
                      border: "1px solid #f0ead8",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      background: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-4px)";
                      el.style.boxShadow = "0 12px 40px rgba(26,22,18,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        height: "120px",
                        background: r.gradient,
                      }}
                    />
                    <div style={{ padding: "1rem" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "var(--dark)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: "0.82rem",
                          color: "var(--gold)",
                          fontWeight: 600,
                        }}
                      >
                        {"₹"}{r.price.toLocaleString("en-IN")} / night
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Booking Card */}
          <div
            style={{
              position: "sticky",
              top: "calc(var(--nav-h) + 1.5rem)",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(26,22,18,0.18)",
              padding: "2rem",
              border: "1px solid var(--border)",
            }}
          >
            {/* Price */}
            <div style={{ marginBottom: "1.2rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 500,
                  color: "var(--gold)",
                }}
              >
                {"₹"}{room.price.toLocaleString("en-IN")}
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-ui)",
                    color: "var(--text-muted)",
                    fontWeight: 400,
                  }}
                >
                  {" "}/ night
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-ui)",
                  marginTop: "4px",
                }}
              >
                Taxes and fees not included
              </div>
            </div>

            <div
              style={{
                height: "1px",
                background: "#f0ead8",
                marginBottom: "1.2rem",
              }}
            />

            {/* Dates */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.8rem",
                marginBottom: "0.8rem",
              }}
            >
              <div
                style={{
                  border: "1.5px solid #e8e2da",
                  borderRadius: "4px",
                  padding: "0.7rem 1rem",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    marginBottom: "0.2rem",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.85rem",
                    color: "var(--text)",
                    background: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                style={{
                  border: "1.5px solid #e8e2da",
                  borderRadius: "4px",
                  padding: "0.7rem 1rem",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    marginBottom: "0.2rem",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.85rem",
                    color: "var(--text)",
                    background: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            {/* Guests */}
            <div
              style={{
                border: "1.5px solid #e8e2da",
                borderRadius: "4px",
                padding: "0.7rem 1rem",
                marginBottom: "1.2rem",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  marginBottom: "0.2rem",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  background: "none",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                {Array.from({ length: room.guests }, (_, i) => (
                  <option key={i + 1}>{i + 1} {i === 0 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>

            {/* Price breakdown */}
            <div
              style={{
                background: "var(--cream)",
                borderRadius: "4px",
                padding: "1rem",
                marginBottom: "1.2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-ui)",
                  color: "var(--text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                <span>{"₹"}{room.price.toLocaleString("en-IN")} x {nights} night{nights > 1 ? "s" : ""}</span>
                <span>{"₹"}{total.toLocaleString("en-IN")}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-ui)",
                  color: "var(--text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                <span>Taxes & fees (12%)</span>
                <span>{"₹"}{tax.toLocaleString("en-IN")}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.92rem",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  color: "var(--dark)",
                  borderTop: "1px solid #e8e2da",
                  paddingTop: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                <span>Total</span>
                <span style={{ color: "var(--gold)" }}>
                  {"₹"}{(total + tax).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Book button */}
            <button
              style={{
                width: "100%",
                fontFamily: "var(--font-ui)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "1.1rem",
                background: "var(--gold)",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "background 0.3s",
                marginBottom: "0.8rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--brown)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              }}
            >
              Book Now — {"₹"}{(total + tax).toLocaleString("en-IN")}
            </button>

            <a href="https://wa.me/919622299302" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "1rem", background: "#25D366", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer", textAlign: "center", marginBottom: "1rem" }}>
              💬 Enquire on WhatsApp
            </a>

            <p
              style={{
                textAlign: "center",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-ui)",
              }}
            >
              🔒 Free cancellation up to 48 hours before check-in
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}