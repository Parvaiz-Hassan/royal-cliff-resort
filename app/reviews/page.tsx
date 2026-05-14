"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Arjun Mehta",
    location: "Mumbai",
    date: "October 2024",
    rating: 5,
    room: "Royal Cliff Suite",
    title: "An experience beyond words",
    review: "Waking up to that view every morning felt like a dream. The valley below, the peaks above, and the silence of Kashmir all around. The staff anticipated our every need before we even asked. The Wazwan dinner was the highlight of our entire Kashmir trip.",
    avatar: "AM",
    verified: true,
    platform: "Direct Booking",
  },
  {
    id: 2,
    name: "Priya & Rohit Sharma",
    location: "Delhi",
    date: "September 2024",
    rating: 5,
    room: "Honeymoon Cottage",
    title: "Perfect honeymoon destination",
    review: "The staff arranged our entire trek itinerary, packed us a Kashmiri lunch, and had Kahwa ready when we returned. The honeymoon cottage was magical — private, romantic, and beautifully decorated. This is what true hospitality feels like.",
    avatar: "RS",
    verified: true,
    platform: "Direct Booking",
  },
  {
    id: 3,
    name: "Imran Khan",
    location: "Bangalore",
    date: "August 2024",
    rating: 5,
    room: "Grand Family Suite",
    title: "Best family vacation ever",
    review: "We brought our family of five and everyone was taken care of. The kids loved the garden and pony rides. We loved the views and the food. The staff went above and beyond to make our stay memorable. Will definitely be back.",
    avatar: "IK",
    verified: true,
    platform: "Direct Booking",
  },
  {
    id: 4,
    name: "Sarah & James Wilson",
    location: "London, UK",
    date: "July 2024",
    rating: 5,
    room: "Deluxe Valley View",
    title: "Kashmir's best kept secret",
    review: "We had heard Kashmir was beautiful but nothing prepared us for this. The resort perfectly balances luxury with authenticity. The team organized a sunrise shikara ride that we will remember for the rest of our lives. Truly world class.",
    avatar: "JW",
    verified: true,
    platform: "Direct Booking",
  },
  {
    id: 5,
    name: "Kavya Nair",
    location: "Chennai",
    date: "June 2024",
    rating: 5,
    room: "Premium Mountain Suite",
    title: "Exceeded every expectation",
    review: "The room was stunning, the food was incredible, and the team was exceptional. Every detail was thoughtful — from the Pashmina throw on the bed to the saffron Kahwa waiting on the balcony every morning. Five stars without hesitation.",
    avatar: "KN",
    verified: true,
    platform: "Direct Booking",
  },
  {
    id: 6,
    name: "Rahul & Anita Gupta",
    location: "Pune",
    date: "May 2024",
    rating: 5,
    room: "Deluxe Valley View",
    title: "A slice of paradise",
    review: "The location is unbeatable. Waking up to misty mountains and the sound of the Lidder River is something you cannot put a price on. The Kashmiri cuisine was authentic and delicious. The staff treated us like family throughout.",
    avatar: "RG",
    verified: true,
    platform: "Direct Booking",
  },
];

const stats = [
  { value: "4.9", label: "Overall Rating", sub: "out of 5" },
  { value: "500+", label: "Happy Guests", sub: "and counting" },
  { value: "98%", label: "Recommend Us", sub: "would return" },
  { value: "100%", label: "Verified Reviews", sub: "real guests only" },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState<number | "all">("all");

  const filtered = filter === "all" ? reviews : reviews.filter((r) => r.rating === filter);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "55vh",
          background: "linear-gradient(135deg, #0a0c0f 0%, #1a1a2a 50%, #0a0c0f 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "var(--nav-h)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
            <polygon points="0,500 200,150 400,280 600,80 800,220 1000,40 1200,180 1440,100 1440,500" fill="#c9a96e" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>
            GUEST STORIES
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
            What Our <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Guests Say</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <span style={{ color: "var(--gold)", fontSize: "1.5rem" }}>★★★★★</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#fff", fontWeight: 400 }}>4.9</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>/ 5 — 500+ reviews</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ padding: "60px 0", background: "var(--dark)", borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }} className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--gold)", fontWeight: 400, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginTop: "0.5rem" }}>{stat.label}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "0.2rem" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0ead8", padding: "1.2rem 0", position: "sticky", top: "var(--nav-h)", zIndex: 50 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase", marginRight: "0.5rem" }}>Filter:</span>
          {(["all", 5, 4, 3] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.58rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.5rem 1.2rem",
                border: "1px solid",
                borderColor: filter === f ? "var(--gold)" : "rgba(201,169,110,0.2)",
                background: filter === f ? "rgba(201,169,110,0.1)" : "transparent",
                color: filter === f ? "var(--gold)" : "var(--text-muted)",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {f === "all" ? "All Reviews" : `${"★".repeat(f)} ${f} Stars`}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <section style={{ padding: "60px 0 100px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
            Showing <strong style={{ color: "var(--dark)" }}>{filtered.length}</strong> reviews
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="contact-grid-container">
            {filtered.map((review) => (
              <div
                key={review.id}
                style={{
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "2rem",
                  border: "1px solid #f0ead8",
                  boxShadow: "0 2px 20px rgba(26,22,18,0.05)",
                  transition: "all 0.35s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,169,110,0.3)"; el.style.boxShadow = "0 12px 40px rgba(26,22,18,0.1)"; el.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#f0ead8"; el.style.boxShadow = "0 2px 20px rgba(26,22,18,0.05)"; el.style.transform = "translateY(0)"; }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {/* Avatar */}
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--gold)", flexShrink: 0 }}>
                      {review.avatar}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", fontWeight: 600, color: "var(--dark)" }}>{review.name}</div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "1px" }}>{review.location} · {review.date}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <span style={{ fontFamily: "var(--font-label)", fontSize: "0.5rem", letterSpacing: "0.15em", color: "var(--gold)", border: "1px solid rgba(201,169,110,0.3)", padding: "0.2rem 0.6rem", borderRadius: "2px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>{"★".repeat(review.rating)}</span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase" }}>{review.room}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "var(--dark)", marginBottom: "0.8rem" }}>
                  {review.title}
                </h3>

                {/* Review text */}
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.8 }}>
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Footer */}
                <div style={{ marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px solid #f0ead8", fontFamily: "var(--font-ui)", fontSize: "0.7rem", color: "rgba(201,169,110,0.6)" }}>
                  {review.platform}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section style={{ padding: "100px 0", background: "var(--dark)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>
            — SHARE YOUR EXPERIENCE —
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", marginBottom: "1rem" }}>
            Stayed With Us?<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Tell Your Story</em>
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
            Your feedback helps us improve and helps other travellers discover the magic of Royal Cliff Resort.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:contact@royalcliffresort.com?subject=My Review — Royal Cliff Resort" className="btn-gold-solid">
              Send Your Review
            </a>
            <a href="https://wa.me/919622299302" target="_blank" rel="noopener noreferrer" className="btn-gold">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section style={{ padding: "60px 0", background: "var(--cream)", textAlign: "center", borderTop: "1px solid #f0ead8" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
            Join 500+ happy guests who have experienced the magic of Royal Cliff Resort.
          </p>
          <Link href="/rooms" className="btn-gold-solid">
            Book Your Stay
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}