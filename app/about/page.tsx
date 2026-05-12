"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "60vh",
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
            <polygon points="0,500 150,350 350,400 550,320 750,370 950,300 1150,350 1350,290 1440,320 1440,500" fill="rgba(201,169,110,0.3)" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>
            OUR STORY
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
            About <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Royal Cliff</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.6)", maxWidth: "500px" }}>
            A sanctuary born from the soul of Kashmir
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="about-grid">
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "4/5", background: "linear-gradient(135deg, #1a2a3a 0%, #2d4a5a 60%, #3a5a6a 100%)", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 400 500" style={{ width: "70%", opacity: 0.15 }}>
                <polygon points="200,30 320,220 80,220" fill="white" />
                <polygon points="60,100 200,220 0,220" fill="rgba(255,255,255,0.5)" />
                <polygon points="300,80 400,220 200,220" fill="rgba(255,255,255,0.4)" />
                <rect x="0" y="220" width="400" height="280" fill="rgba(255,255,255,0.08)" />
                <circle cx="340" cy="60" r="30" fill="rgba(255,220,100,0.3)" />
              </svg>
            </div>
            {/* Floating stat */}
            <div style={{ position: "absolute", bottom: "-2rem", right: "-2rem", background: "#fff", padding: "1.5rem 2rem", borderRadius: "4px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", minWidth: "180px", border: "1px solid rgba(201,169,110,0.2)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--gold)", fontWeight: 400 }}>2025</div>
              <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-muted)", textTransform: "uppercase", marginTop: "4px" }}>Est. Pahalgam</div>
              <div style={{ display: "flex", gap: "3px", marginTop: "6px", color: "var(--gold)", fontSize: "0.85rem" }}>★★★★★</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", marginBottom: "1rem" }}>— WHO WE ARE —</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--dark)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              A Vision Born from<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Kashmir's Beauty</em>
            </h2>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              Royal Cliff Resort was born from a singular vision — to create a place where the untamed beauty of Kashmir becomes your daily backdrop. Perched on the cliffs of Pahalgam, overlooking the crystal waters of the Lidder River, we offer more than just a stay.
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              From hand-carved walnut furnishings to Kashmiri silk embroideries in every suite, every detail is a tribute to the valley's legendary craftsmanship. We don't just offer rooms — we offer a piece of Kashmir's soul.
            </p>
            <Link href="/rooms" className="btn-gold-solid">
              Explore Our Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 0", background: "var(--dark)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>— OUR VALUES —</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2 }}>
              What We <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Stand For</em>
            </h2>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="features-grid-container">
            {[
              { icon: "🏔️", title: "Authenticity", desc: "Every experience at Royal Cliff is rooted in genuine Kashmiri culture — from our Wazwan feasts to our hand-loomed textiles and local guiding team." },
              { icon: "✨", title: "Excellence", desc: "We obsess over the details. Whether it's the thread count of your sheets or the temperature of your Kahwa, nothing is left to chance." },
              { icon: "🌿", title: "Sustainability", desc: "We source locally, minimize waste, and work with Pahalgam's community to ensure our presence enriches rather than diminishes this paradise." },
              { icon: "❤️", title: "Warmth", desc: "Kashmiri hospitality is legendary. Our team treats every guest as family — with genuine care, attentiveness, and a smile that needs no translation." },
              { icon: "🔒", title: "Trust", desc: "From transparent pricing to flexible cancellation, we build relationships based on honesty. Your peace of mind is our priority." },
              { icon: "🎯", title: "Personalization", desc: "No two Kashmir journeys are the same. Our concierge team crafts experiences tailored to your interests, pace, and dreams." },
            ].map((v) => (
              <div
                key={v.title}
                style={{ padding: "2rem", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "4px", transition: "all 0.35s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.15)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold-pale)", marginBottom: "0.7rem", fontWeight: 400 }}>{v.title}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Location */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "1rem" }}>— WHERE WE ARE —</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--dark)", lineHeight: 1.2 }}>
              Find Us in the Heart of <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Pahalgam</em>
            </h2>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="about-grid">
            <div>
              {[
                { label: "Address", value: "Near BP Road, Pahalgam, Jammu & Kashmir — 192125" },
                { label: "Phone & WhatsApp", value: "+91 96222 99302" },
                { label: "Email", value: "contact@royalcliffresort.com" },
                { label: "Altitude", value: "7,800 feet above sea level" },
                { label: "Distance", value: "2 km from Betab Valley, 3 km from Town Centre" },
                { label: "Best Season", value: "April to October (Summer) | December to February (Snow)" },
              ].map((item, i) => (
                <div key={item.label} style={{ display: "flex", gap: "1.5rem", padding: "1rem 0", borderBottom: i < 5 ? "1px solid #f0ead8" : "none" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", minWidth: "120px", paddingTop: "2px" }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-muted)" }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.2)", boxShadow: "0 20px 60px rgba(26,22,18,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0!2d75.3162!3d34.0161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA1LjgiTiA3NcKwMTgnNTguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                title="Royal Cliff Resort Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 0", background: "var(--cream)", borderTop: "1px solid #f0ead8" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }} className="stats-grid">
            {[
              { value: "12+", label: "Luxury Rooms" },
              { value: "500+", label: "Happy Guests" },
              { value: "4.9★", label: "Average Rating" },
              { value: "24/7", label: "Concierge Service" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", color: "var(--gold)", fontWeight: 400, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-muted)", textTransform: "uppercase", marginTop: "0.5rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: "var(--dark)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>— COME STAY WITH US —</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", marginBottom: "1rem" }}>
            Your Kashmir Story<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Begins Here</em>
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
            Book your stay today and experience the magic of Pahalgam from the most breathtaking vantage point in the valley.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/rooms" className="btn-gold-solid">Book Your Stay</Link>
            <Link href="/contact" className="btn-gold">Get in Touch</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}