"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BookingModal from "@/components/BookingModal";
import { rooms } from "@/lib/rooms";

type Tab = "overview" | "amenities" | "policies";

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

  const [tab, setTab] = useState<Tab>("overview");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2 Adults");
  const [activePhoto, setActivePhoto] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000
    )
  );
  const total = room.price * nights;
  const tax = Math.round(total * 0.12);

  const photos = [
    { gradient: room.gradient, label: "Main View" },
    { gradient: "linear-gradient(135deg, #111820, #1a2a35)", label: "Bedroom" },
    { gradient: "linear-gradient(135deg, #1a1008, #2a2010)", label: "Bathroom" },
    { gradient: "linear-gradient(135deg, #0a1020, #152030)", label: "Balcony" },
    { gradient: "linear-gradient(135deg, #100a18, #201530)", label: "View" },
  ];

  const highlights = [
    "King-size bed with premium linens",
    "Modern bathroom with rain shower",
    "Complimentary breakfast included",
    "Free WiFi connectivity & Cable TV",
    "Central Heating",
    "Table & Chairs",
    "Room service & House Keeping",
    "Tea/coffee maker",
    "Modern Washroom with Running Hot & Cold Water",
    "Basic toiletries (Soap, Shampoo, Personal Care, Towel)",
  ];

  const policies = [
    { label: "Check-in", value: "2:00 PM onwards" },
    { label: "Check-out", value: "11:00 AM" },
    { label: "Cancellation", value: "Free cancellation up to 48 hours before check-in" },
    { label: "Children", value: "Children of all ages welcome" },
    { label: "Pets", value: "Pets not allowed" },
    { label: "Smoking", value: "Non-smoking room" },
    { label: "Payment", value: "All major cards, UPI, Net Banking accepted" },
  ];

  const relatedRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ marginTop: "var(--nav-h)", position: "relative" }}>
        <div
          style={{
            height: "65vh",
            background: photos[activePhoto].gradient,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.6s ease",
          }}
        >
          <svg viewBox="0 0 400 300" style={{ width: "30%", opacity: 0.07 }}>
            <polygon points="200,20 320,200 80,200" fill="white" />
            <polygon points="80,80 200,200 0,200" fill="rgba(255,255,255,0.5)" />
            <polygon points="300,60 400,200 200,200" fill="rgba(255,255,255,0.4)" />
            <circle cx="330" cy="50" r="25" fill="rgba(255,220,100,0.4)" />
          </svg>

          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,12,15,0.3) 0%, rgba(10,12,15,0.65) 100%)" }} />

          <div style={{ position: "absolute", bottom: "3rem", left: "4rem", color: "#fff", zIndex: 2 }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "0.6rem" }}>
              ROYAL CLIFF RESORT · PAHALGAM
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1 }}>
              {room.name}
            </h1>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.8rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-ui)", flexWrap: "wrap" }}>
              <span>📐 {room.size}</span>
              <span>👤 Up to {room.guests} Guests</span>
              <span>🏔️ {room.view}</span>
              <span style={{ color: "var(--gold-light)" }}>{"₹"}{room.price.toLocaleString("en-IN")} / night</span>
            </div>
          </div>

          <div style={{ position: "absolute", bottom: "2rem", right: "2rem", display: "flex", gap: "0.5rem", zIndex: 2 }}>
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                style={{
                  width: "64px",
                  height: "48px",
                  background: photo.gradient,
                  border: i === activePhoto ? "2px solid var(--gold)" : "2px solid rgba(255,255,255,0.2)",
                  borderRadius: "3px",
                  cursor: "pointer",
                  opacity: i === activePhoto ? 1 : 0.55,
                  transition: "all 0.3s",
                  fontSize: "0.45rem",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.05em",
                }}
              >
                {photo.label}
              </button>
            ))}
          </div>
        </div>

        {/* Breadcrumb */}
        <div style={{ background: "#fff", borderBottom: "1px solid #f0ead8", padding: "0.9rem 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", alignItems: "center" }}>
            <Link href="/" style={{ color: "var(--gold)" }}>Home</Link>
            <span>›</span>
            <Link href="/rooms" style={{ color: "var(--gold)" }}>Rooms</Link>
            <span>›</span>
            <span>{room.name}</span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
          <div
            style={{ maxWidth: "1240px", margin: "0 auto", padding: "3rem 2rem 6rem", display: "grid", gridTemplateColumns: "1fr 380px", gap: "4rem", alignItems: "start" }}
            className="room-detail-grid"
          >
            {/* Left */}
            <div>
              {/* Tabs */}
              <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #f0ead8", marginBottom: "2.5rem" }}>
                {(["overview", "amenities", "policies"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      padding: "1rem 2rem",
                      background: "none",
                      border: "none",
                      borderBottom: tab === t ? "2px solid var(--gold)" : "2px solid transparent",
                      color: tab === t ? "var(--gold)" : "var(--text-muted)",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      marginBottom: "-1px",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Overview */}
              {tab === "overview" && (
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "1rem" }}>
                    {room.description}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "2.5rem" }}>
                    Every corner of this room has been thoughtfully designed to reflect the beauty of Kashmir — from the hand-embroidered cushions to the locally sourced wood finishes. Wake up to mountain air, step onto your private balcony, and let the valley do the rest.
                  </p>
                  <div style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-label)", fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                        Highlights
                      </h3>
                      <div style={{ flex: 1, height: "1px", background: "rgba(201,169,110,0.25)" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                      {highlights.map((h) => (
                        <div
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                            padding: "0.9rem 1rem",
                            background: "#fff",
                            border: "1px solid rgba(201,169,110,0.15)",
                            borderRadius: "3px",
                            fontSize: "0.82rem",
                            color: "var(--text)",
                            fontFamily: "var(--font-ui)",
                          }}
                        >
                          <span style={{ color: "var(--gold)", fontSize: "0.9rem", flexShrink: 0 }}>✓</span>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Amenities */}
              {tab === "amenities" && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-label)", fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      Room Amenities
                    </h3>
                    <div style={{ flex: 1, height: "1px", background: "rgba(201,169,110,0.25)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                    {room.amenities.map((a) => (
                      <div
                        key={a}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.8rem",
                          padding: "1rem",
                          background: "#fff",
                          border: "1px solid rgba(201,169,110,0.15)",
                          borderRadius: "3px",
                          fontSize: "0.85rem",
                          color: "var(--text)",
                          fontFamily: "var(--font-ui)",
                        }}
                      >
                        <span style={{ color: "var(--gold)", fontSize: "1rem", flexShrink: 0 }}>✓</span>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Policies */}
              {tab === "policies" && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-label)", fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      Hotel Policies
                    </h3>
                    <div style={{ flex: 1, height: "1px", background: "rgba(201,169,110,0.25)" }} />
                  </div>
                  <div style={{ background: "#fff", borderRadius: "6px", border: "1px solid #f0ead8", overflow: "hidden" }}>
                    {policies.map((p, i) => (
                      <div
                        key={p.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          padding: "1.1rem 1.5rem",
                          borderBottom: i < policies.length - 1 ? "1px solid #f0ead8" : "none",
                          gap: "2rem",
                        }}
                      >
                        <span style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", flexShrink: 0 }}>
                          {p.label}
                        </span>
                        <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "right" }}>
                          {p.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related rooms */}
              <div style={{ marginTop: "4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-label)", fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    You May Also Like
                  </h3>
                  <div style={{ flex: 1, height: "1px", background: "rgba(201,169,110,0.25)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  {relatedRooms.map((r) => (
                    <Link key={r.id} href={`/rooms/${r.id}`} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          borderRadius: "4px",
                          overflow: "hidden",
                          border: "1px solid #f0ead8",
                          transition: "all 0.3s",
                          background: "#fff",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,22,18,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "#f0ead8";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                      >
                        <div style={{ height: "100px", background: r.gradient }} />
                        <div style={{ padding: "0.9rem" }}>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--dark)", marginBottom: "0.3rem" }}>{r.name}</div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600 }}>{"₹"}{r.price.toLocaleString("en-IN")} / night</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Booking Card */}
            <div
              style={{
                position: "sticky",
                top: "calc(var(--nav-h) + 1.5rem)",
                background: "#fff",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(26,22,18,0.12)",
              }}
            >
              {/* Dark price header */}
              <div style={{ padding: "1.8rem 2rem", borderBottom: "1px solid rgba(201,169,110,0.15)", textAlign: "center", background: "var(--dark)" }}>
                <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
                  STARTING FROM
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 400, color: "#fff", lineHeight: 1 }}>
                  {"₹"}{room.price.toLocaleString("en-IN")}
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}> per night</span>
                </div>
              </div>

              {/* Warm form body */}
              <div style={{ padding: "1.8rem 2rem" }}>
                {/* Dates */}
                <div style={{ marginBottom: "1.2rem" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-muted)", marginBottom: "0.8rem" }}>
                    DATES
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Check-in</div>
                      <input
                        type="date"
                        value={checkIn}
                        min={today}
                        onChange={(e) => setCheckIn(e.target.value)}
                        style={{ width: "100%", padding: "0.7rem 0.8rem", background: "var(--cream)", border: "1px solid #e8e2da", borderRadius: "3px", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "0.82rem", outline: "none" }}
                      />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Check-out</div>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn}
                        onChange={(e) => setCheckOut(e.target.value)}
                        style={{ width: "100%", padding: "0.7rem 0.8rem", background: "var(--cream)", border: "1px solid #e8e2da", borderRadius: "3px", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "0.82rem", outline: "none" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-muted)", marginBottom: "0.8rem" }}>
                    GUESTS
                  </div>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--cream)", border: "1px solid #e8e2da", borderRadius: "3px", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "0.85rem", outline: "none", cursor: "pointer" }}
                  >
                    {Array.from({ length: room.guests }, (_, i) => (
                      <option key={i + 1}>{i + 1} {i === 0 ? "Adult" : "Adults"}</option>
                    ))}
                  </select>
                </div>

                {/* Reserve button */}
                <button
                  onClick={() => setShowBooking(true)}
                  style={{ width: "100%", padding: "1rem", background: "var(--gold)", color: "#0a0c0f", border: "none", borderRadius: "3px", fontFamily: "var(--font-label)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s", marginBottom: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold-light)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; }}
                >
                  Reserve Now
                </button>

                {/* Check availability */}
                <button
                  onClick={() => setShowBooking(true)}
                  style={{ width: "100%", padding: "0.9rem", background: "transparent", color: "var(--text-muted)", border: "1px solid #e8e2da", borderRadius: "3px", fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s", marginBottom: "1.2rem" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#e8e2da"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  Check Availability
                </button>

                <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.82rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  No charge until confirmation
                </p>

                {/* Price breakdown */}
                {nights > 1 && (
                  <div style={{ marginTop: "1.2rem", padding: "1rem", background: "var(--cream)", borderRadius: "3px", border: "1px solid #f0ead8" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", marginBottom: "0.4rem" }}>
                      <span>{"₹"}{room.price.toLocaleString("en-IN")} x {nights} nights</span>
                      <span>{"₹"}{total.toLocaleString("en-IN")}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", marginBottom: "0.4rem" }}>
                      <span>Taxes & fees (12%)</span>
                      <span>{"₹"}{tax.toLocaleString("en-IN")}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontFamily: "var(--font-ui)", fontWeight: 600, borderTop: "1px solid #e8e2da", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                      <span style={{ color: "var(--text)" }}>Total</span>
                      <span style={{ color: "var(--gold)" }}>{"₹"}{(total + tax).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                )}

                {/* Need assistance */}
                <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "var(--cream)", borderRadius: "3px", border: "1px solid #f0ead8" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 600, color: "var(--dark)", marginBottom: "2px" }}>Need assistance?</div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)" }}>24/7 Concierge</div>
                  </div>
                  <a href="tel:+919622299302" style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.2em", padding: "0.6rem 1rem", border: "1px solid rgba(201,169,110,0.3)", borderRadius: "2px", color: "var(--gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", transition: "all 0.3s" }}>
                    📞 Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />

      {showBooking && (
        <BookingModal room={room} onClose={() => setShowBooking(false)} />
      )}
    </>
  );
}
