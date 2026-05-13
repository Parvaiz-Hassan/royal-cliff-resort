"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    category: "Adventure",
    name: "Mountain Trekking",
    description: "Guided treks to Tulian Lake, Sheshnag, and Kolahoi Glacier. All fitness levels welcome with experienced local guides who know every trail intimately.",
    duration: "Full Day",
    difficulty: "Moderate",
    price: "₹2,500 per person",
    gradient: "linear-gradient(135deg, #1a2a1a 0%, #2a4a3a 100%)",
    highlights: ["Tulian Lake Trek", "Sheshnag Lake", "Kolahoi Glacier", "Baisaran Valley", "Lidder Valley Walk"],
  },
  {
    id: 2,
    category: "Leisure",
    name: "Shikara on Lidder",
    description: "Private shikara rides at sunrise along the crystal-clear Lidder River. Watch the mountains reflect on still waters as Kashmir wakes up around you.",
    duration: "2 Hours",
    difficulty: "Easy",
    price: "₹1,500 per couple",
    gradient: "linear-gradient(135deg, #0a1a3a 0%, #1a2a5a 100%)",
    highlights: ["Sunrise ride", "River fishing", "Mountain views", "Private boat", "Photography spots"],
  },
  {
    id: 3,
    category: "Wellness",
    name: "Kashmiri Spa & Hammam",
    description: "Traditional Kashmiri oil massages using locally sourced saffron and almond oils. Followed by a herbal steam bath for total mind and body rejuvenation.",
    duration: "3 Hours",
    difficulty: "Relaxing",
    price: "₹3,500 per person",
    gradient: "linear-gradient(135deg, #2a1a0a 0%, #4a3010 100%)",
    highlights: ["Saffron oil massage", "Herbal steam bath", "Aromatherapy", "Head massage", "Kahwa ritual"],
  },
  {
    id: 4,
    category: "Culture",
    name: "Wazwan Dining Experience",
    description: "A ceremonial multi-course Kashmiri feast served in the traditional style. Over 20 dishes including Rogan Josh, Yakhni, and the legendary Gushtaba.",
    duration: "3 Hours",
    difficulty: "Easy",
    price: "₹3,000 per person",
    gradient: "linear-gradient(135deg, #2a0a0a 0%, #4a1a10 100%)",
    highlights: ["20+ dish feast", "Traditional copper platters", "Live Sufi music", "Kahwa & bread", "Chef's table option"],
  },
  {
    id: 5,
    category: "Adventure",
    name: "Horse Riding in Baisaran",
    description: "Explore the meadows of Baisaran — often called Mini Switzerland — on horseback. Stunning open meadows surrounded by dense pine forests and snow peaks.",
    duration: "Half Day",
    difficulty: "Easy",
    price: "₹2,000 per person",
    gradient: "linear-gradient(135deg, #1a2a0a 0%, #2a4a1a 100%)",
    highlights: ["Baisaran meadows", "Pine forest trails", "Snow peak views", "Guided ride", "Photography stops"],
  },
  {
    id: 6,
    category: "Culture",
    name: "Kashmiri Craft Workshop",
    description: "Learn the art of Kashmiri papier-mâché painting and pashmina weaving from master artisans. Take home a piece of Kashmir made by your own hands.",
    duration: "Half Day",
    difficulty: "Easy",
    price: "₹1,800 per person",
    gradient: "linear-gradient(135deg, #1a0a2a 0%, #3a1a4a 100%)",
    highlights: ["Papier-mâché art", "Pashmina weaving", "Master artisan", "Take home creation", "Cultural stories"],
  },
];

const categories = ["All", "Adventure", "Leisure", "Wellness", "Culture"];

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "60vh",
          background: "linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 50%, #0a0c0f 100%)",
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
            KASHMIR AWAITS
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
            Curated <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Experiences</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.6)", maxWidth: "500px" }}>
            Beyond your room, the entire valley is your playground
          </p>
        </div>
      </div>

      {/* Experiences Grid */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "1rem" }}>— ALL EXPERIENCES —</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--dark)" }}>
              What to <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Do & Explore</em>
            </h2>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              We arrange everything — all you have to do is show up and experience the magic.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="rooms-grid-container">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                style={{ background: "#fff", borderRadius: "6px", overflow: "hidden", border: "1px solid #f0ead8", transition: "all 0.35s", boxShadow: "0 2px 20px rgba(26,22,18,0.05)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(26,22,18,0.12)"; el.style.borderColor = "rgba(201,169,110,0.3)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 20px rgba(26,22,18,0.05)"; el.style.borderColor = "#f0ead8"; }}
              >
                {/* Image */}
                <div style={{ height: "220px", background: exp.gradient, position: "relative", display: "flex", alignItems: "flex-end", padding: "1.5rem" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))" }} />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--gold-light)", textTransform: "uppercase" }}>
                      {exp.category}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#fff", fontWeight: 400, marginTop: "0.3rem" }}>
                      {exp.name}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                    {exp.description}
                  </p>

                  {/* Meta */}
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem", flexWrap: "wrap" }}>
                    {[
                      { label: "Duration", value: exp.duration },
                      { label: "Level", value: exp.difficulty },
                    ].map((m) => (
                      <div key={m.label} style={{ background: "var(--cream)", padding: "0.4rem 0.8rem", borderRadius: "2px", border: "1px solid rgba(201,169,110,0.2)" }}>
                        <div style={{ fontFamily: "var(--font-label)", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>{m.label}</div>
                        <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text)", marginTop: "2px" }}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    {exp.highlights.slice(0, 3).map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", marginBottom: "0.3rem" }}>
                        <span style={{ color: "var(--gold)", fontSize: "0.7rem" }}>✓</span>
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0ead8", paddingTop: "1.2rem" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase" }}>From</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold)", fontWeight: 400 }}>{exp.price}</div>
                    </div>
                    <a href="https://wa.me/919622299302" target="_blank" rel="noopener noreferrer" className="btn-gold-solid" style={{ fontSize: "0.58rem", padding: "0.6rem 1.2rem" }}>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section style={{ padding: "100px 0", background: "var(--dark)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>— BESPOKE EXPERIENCES —</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", marginBottom: "1rem" }}>
            Want Something<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Truly Unique?</em>
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
            Our concierge team can craft a completely bespoke Kashmir experience tailored to your interests, group size, and pace.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold-solid">Plan My Experience</Link>
            <a href="https://wa.me/919622299302" target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}