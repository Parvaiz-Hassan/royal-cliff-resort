"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BookingModal from "@/components/BookingModal";
import { rooms as staticRooms } from "@/lib/rooms";
import { client, urlFor } from "@/lib/sanity";
import { roomBySlugQuery } from "@/lib/queries";

type Tab = "overview" | "amenities" | "policies";

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("overview");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [activePhoto, setActivePhoto] = useState(0);
  const [showBooking, setShowBooking] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showAssistance, setShowAssistance] = useState(false);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState<string[]>([]);

  useEffect(() => {
    const staticRoom = staticRooms.find((r) => r.id === slug);
    if (staticRoom) {
      setRoom(staticRoom);
      setLoading(false);
      return;
    }
    client.fetch(roomBySlugQuery, { slug }).then((data) => {
      if (data) {
        setRoom({
          ...data,
          id: data.slug,
          guests: data.maxGuests || 2,
          gradient: "linear-gradient(135deg, #1a2a3a, #2a4a5a)",
          image: data.images?.[0] ? urlFor(data.images[0]).width(1200).url() : null,
          amenities: data.amenities || [],
        });
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000
    )
  );
  const total = room ? room.price * nights : 0;
  const tax = Math.round(total * 0.12);

  const guestSummary =
    children === 0
      ? `${adults} Adult${adults > 1 ? "s" : ""}`
      : `${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${children > 1 ? "ren" : ""}`;

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

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cream)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "40px", height: "40px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto 1rem", animation: "spin 1s linear infinite" }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)" }}>Loading room...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!room) return notFound();

  const photos: { type: string; gradient: string; label: string; videoUrl?: string; image?: string }[] = [
    { type: "image", gradient: room.gradient, label: "Main View", image: room.image || undefined },
    { type: "image", gradient: "linear-gradient(135deg, #111820, #1a2a35)", label: "Bedroom" },
    { type: "image", gradient: "linear-gradient(135deg, #1a1008, #2a2010)", label: "Bathroom" },
    { type: "image", gradient: "linear-gradient(135deg, #0a1020, #152030)", label: "Balcony" },
    { type: "image", gradient: "linear-gradient(135deg, #100a18, #201530)", label: "View" },
    { type: "video", gradient: "linear-gradient(135deg, #0a1a0a, #1a3a1a)", label: "Video", videoUrl: room.videoUrl || "/videos/room-placeholder.mp4" },
  ];

  const relatedRooms = staticRooms.filter((r) => r.id !== slug).slice(0, 3);

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
          {photos[activePhoto].type === "video" ? (
            <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}>
              <source src={photos[activePhoto].videoUrl || ""} type="video/mp4" />
            </video>
          ) : photos[activePhoto].image ? (
            <img
              src={photos[activePhoto].image}
              alt={room.name}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <svg viewBox="0 0 400 300" style={{ width: "30%", opacity: 0.07 }}>
              <polygon points="200,20 320,200 80,200" fill="white" />
              <polygon points="80,80 200,200 0,200" fill="rgba(255,255,255,0.5)" />
              <polygon points="300,60 400,200 200,200" fill="rgba(255,255,255,0.4)" />
              <circle cx="330" cy="50" r="25" fill="rgba(255,220,100,0.4)" />
            </svg>
          )}

          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,12,15,0.3) 0%, rgba(10,12,15,0.65) 100%)" }} />

          <div style={{ position: "absolute", bottom: "3rem", left: "4rem", color: "#fff", zIndex: 2 }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "0.6rem" }}>
              ROYAL CLIFF RESORT · PAHALGAM
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1 }}>
              {room.name}
            </h1>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-ui)", flexWrap: "wrap" }}>
              <span>📐 {room.size}</span>
              <span>👤 Up to {room.guests} Guests</span>
              <span>🏔️ {room.view}</span>
              <span style={{ color: "var(--gold-light)" }}>{"₹"}{room.price?.toLocaleString("en-IN")} / night</span>
            </div>
          </div>

          {/* Thumbnails */}
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
                  opacity: i === activePhoto ? 1 : 0.6,
                  transition: "all 0.3s",
                  fontSize: photo.type === "video" ? "1.1rem" : "0.45rem",
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "var(--font-ui)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                {photo.type === "video" ? (
                  <span>{"▶"}</span>
                ) : photo.image ? (
                  <img src={photo.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span>{photo.label}</span>
                )}
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
              <div style={{ display: "flex", borderBottom: "1px solid #f0ead8", marginBottom: "2.5rem" }}>
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
                        <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.9rem 1rem", background: "#fff", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "3px", fontSize: "0.82rem", color: "var(--text)", fontFamily: "var(--font-ui)" }}>
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
                    {(room.amenities || []).map((a: string) => (
                      <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "1rem", background: "#fff", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "3px", fontSize: "0.85rem", color: "var(--text)", fontFamily: "var(--font-ui)" }}>
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
                      <div key={p.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1.1rem 1.5rem", borderBottom: i < policies.length - 1 ? "1px solid #f0ead8" : "none", gap: "2rem" }}>
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
                        style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #f0ead8", transition: "all 0.3s", background: "#fff" }}
                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,169,110,0.4)"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 40px rgba(26,22,18,0.1)"; }}
                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#f0ead8"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
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
                overflow: "visible",
                boxShadow: "0 20px 60px rgba(26,22,18,0.12)",
              }}
            >
              {/* Dark price header */}
              <div style={{ padding: "1.8rem 2rem", borderBottom: "1px solid rgba(201,169,110,0.15)", textAlign: "center", background: "var(--dark)", borderRadius: "6px 6px 0 0" }}>
                <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
                  STARTING FROM
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 400, color: "#fff", lineHeight: 1 }}>
                  {"₹"}{room.price?.toLocaleString("en-IN")}
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}> per night</span>
                </div>
              </div>

              {/* Form body */}
              <div style={{ padding: "1.8rem 2rem" }}>
                {/* Dates */}
                <div style={{ marginBottom: "1.2rem" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-muted)", marginBottom: "0.8rem" }}>DATES</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Check-in</div>
                      <input type="date" value={checkIn} min={today} onChange={(e) => setCheckIn(e.target.value)} style={{ width: "100%", padding: "0.7rem 0.8rem", background: "var(--cream)", border: "1px solid #e8e2da", borderRadius: "3px", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "0.82rem", outline: "none" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Check-out</div>
                      <input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} style={{ width: "100%", padding: "0.7rem 0.8rem", background: "var(--cream)", border: "1px solid #e8e2da", borderRadius: "3px", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "0.82rem", outline: "none" }} />
                    </div>
                  </div>
                </div>

                {/* Guests selector */}
                <div style={{ marginBottom: "1.2rem", position: "relative" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-muted)", marginBottom: "0.8rem" }}>GUESTS</div>
                  <button
                    onClick={() => setShowGuestPicker(!showGuestPicker)}
                    style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--cream)", border: "1px solid #e8e2da", borderRadius: "3px", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "0.85rem", outline: "none", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <span>{guestSummary}</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{showGuestPicker ? "▲" : "▼"}</span>
                  </button>

                  {showGuestPicker && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "var(--dark)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "4px", padding: "1.2rem", zIndex: 100, boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }}>
                      {/* Adults */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "#fff", fontWeight: 500 }}>Adults</div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>Age 18+</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                          <button onClick={() => setAdults(Math.max(1, adults - 1))} style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "transparent", color: "var(--gold)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                          <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "#fff", minWidth: "20px", textAlign: "center" }}>{adults}</span>
                          <button onClick={() => setAdults(Math.min(room.guests || 6, adults + 1))} style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "transparent", color: "var(--gold)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                        </div>
                      </div>

                      {/* Children */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "#fff", fontWeight: 500 }}>Children</div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>Age 0-17</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                          <button onClick={() => { const n = Math.max(0, children - 1); setChildren(n); setChildrenAges(childrenAges.slice(0, n)); }} style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "transparent", color: "var(--gold)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                          <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "#fff", minWidth: "20px", textAlign: "center" }}>{children}</span>
                          <button onClick={() => { const n = Math.min(4, children + 1); setChildren(n); setChildrenAges([...childrenAges, "Age"]); }} style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "transparent", color: "var(--gold)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                        </div>
                      </div>

                      {/* Children ages */}
                      {children > 0 && (
                        <div style={{ marginBottom: "1rem" }}>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.6rem" }}>Children&apos;s Ages</div>
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {childrenAges.map((age, i) => (
                              <select key={i} value={age} onChange={(e) => { const u = [...childrenAges]; u[i] = e.target.value; setChildrenAges(u); }} style={{ padding: "0.4rem 0.6rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "3px", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.78rem", outline: "none", cursor: "pointer" }}>
                                <option value="Age">Age</option>
                                {Array.from({ length: 18 }, (_, j) => (
                                  <option key={j} value={j} style={{ background: "#1a1612" }}>{j === 0 ? "Under 1" : j}</option>
                                ))}
                              </select>
                            ))}
                          </div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)", marginTop: "0.5rem" }}>
                            Children above 5 years require a bed
                          </div>
                        </div>
                      )}

                      <button onClick={() => setShowGuestPicker(false)} style={{ width: "100%", padding: "0.75rem", background: "var(--gold)", color: "#0a0c0f", border: "none", borderRadius: "3px", fontFamily: "var(--font-label)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer" }}>
                        Done
                      </button>
                    </div>
                  )}
                </div>

                {/* Availability badge */}
                {availabilityChecked && (
                  <div style={{ marginBottom: "1.2rem", padding: "1rem", background: "rgba(34,139,34,0.08)", border: "1px solid rgba(34,139,34,0.25)", borderRadius: "3px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                      <span style={{ color: "#4caf50", fontSize: "0.9rem" }}>✓</span>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "#4caf50", fontWeight: 600 }}>Available</span>
                    </div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)" }}>4 room(s) available for your dates</div>
                  </div>
                )}

                {/* Price breakdown */}
                {nights > 0 && (
                  <div style={{ marginBottom: "1.2rem", padding: "1rem", background: "var(--cream)", borderRadius: "3px", border: "1px solid #f0ead8" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", marginBottom: "0.4rem" }}>
                      <span>1 x {room.name} · {nights} night{nights > 1 ? "s" : ""}</span>
                      <span>{"₹"}{total.toLocaleString("en-IN")}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", marginBottom: "0.4rem" }}>
                      <span>Taxes (12%) + Service fee</span>
                      <span>{"₹"}{tax.toLocaleString("en-IN")}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", fontFamily: "var(--font-ui)", fontWeight: 700, borderTop: "1px solid #e8e2da", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                      <span style={{ color: "var(--text)" }}>Total</span>
                      <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>{"₹"}{(total + tax).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                )}

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
                  onClick={() => { setAvailabilityChecked(false); setShowAvailability(true); }}
                  style={{ width: "100%", padding: "0.9rem", background: "transparent", color: "var(--text-muted)", border: "1px solid #e8e2da", borderRadius: "3px", fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s", marginBottom: "1.2rem" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#e8e2da"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  Check Availability
                </button>

                <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "0.82rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  No charge until confirmation
                </p>

                {/* Need assistance */}
                <div
                  onClick={() => setShowAssistance(true)}
                  style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "var(--cream)", borderRadius: "3px", border: "1px solid #f0ead8", cursor: "pointer" }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 600, color: "var(--dark)", marginBottom: "2px" }}>Need assistance?</div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)" }}>24/7 Concierge</div>
                  </div>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.2em", padding: "0.6rem 1rem", border: "1px solid rgba(201,169,110,0.3)", borderRadius: "2px", color: "var(--gold)" }}>
                    Contact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Modal */}
      {showAvailability && (
        <div onClick={() => setShowAvailability(false)} style={{ position: "fixed", inset: 0, zIndex: 3000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--dark)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "8px", padding: "2rem", width: "100%", maxWidth: "380px", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "#fff", fontWeight: 400 }}>Availability</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>Checking your dates</p>
              </div>
              <button onClick={() => setShowAvailability(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "1.3rem", cursor: "pointer" }}>✕</button>
            </div>
            {!availabilityChecked ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ width: "50px", height: "50px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto 1rem", animation: "spin 1s linear infinite" }} />
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>Checking availability...</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                {(setTimeout(() => setAvailabilityChecked(true), 1500) as unknown) as null}
              </div>
            ) : (
              <div>
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(76,175,80,0.15)", border: "2px solid rgba(76,175,80,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontSize: "1.3rem" }}>✓</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#fff", fontWeight: 400, marginBottom: "0.3rem" }}>Available</h4>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "rgba(76,175,80,0.8)" }}>4 rooms available</p>
                </div>
                {[
                  { label: "Check-in", value: checkIn },
                  { label: "Check-out", value: checkOut },
                  { label: "Guests", value: guestSummary },
                  { label: "Total", value: `₹${(total + tax).toLocaleString("en-IN")}` },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: item.label === "Total" ? "var(--gold)" : "#fff", fontWeight: item.label === "Total" ? 600 : 400 }}>{item.value}</span>
                  </div>
                ))}
                <button onClick={() => { setShowAvailability(false); setShowBooking(true); }} style={{ width: "100%", padding: "1rem", background: "var(--gold)", color: "#0a0c0f", border: "none", borderRadius: "3px", fontFamily: "var(--font-label)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                  Proceed to Reservation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Assistance Modal */}
      {showAssistance && (
        <div onClick={() => setShowAssistance(false)} style={{ position: "fixed", inset: 0, zIndex: 3000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--dark)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "8px", padding: "2rem", width: "100%", maxWidth: "360px", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.8rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "#fff", fontWeight: 400 }}>Get in Touch</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>We are here to assist</p>
              </div>
              <button onClick={() => setShowAssistance(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "1.3rem", cursor: "pointer" }}>✕</button>
            </div>
            {[
              { icon: "📞", label: "Call Us", value: "+91 96222 99302", href: "tel:+919622299302" },
              { icon: "✉️", label: "Email", value: "contact@royalcliffresort.com", href: "mailto:contact@royalcliffresort.com" },
              { icon: "💬", label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/919622299302" },
            ].map((item, i) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", textDecoration: "none" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />

      {showBooking && (
        <BookingModal room={room} onClose={() => setShowBooking(false)} />
      )}
    </>
  );
}
