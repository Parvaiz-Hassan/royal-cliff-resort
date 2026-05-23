"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { experiencesQuery } from "@/lib/queries";

interface Experience {
  _id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  difficulty: string;
  price: number;
  highlights: string[];
  image: any;
}

export default function ExperiencesPage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", ...Array.from(new Set(experiences.map((e) => e.category).filter(Boolean)))];

  const filtered = activeCategory === "All"
    ? experiences
    : experiences.filter((e) => e.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
<div
  style={{
    height: "50vh",
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
    src="https://res.cloudinary.com/dhnglltpo/image/upload/v1779533618/royal-cliff-resort-experiences-banner_c1auzs.webp"
    alt="Contact Royal Cliff Resort"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
  />

  {/* Dark overlay */}
  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,12,15,0.5) 0%, rgba(10,12,15,0.65) 100%)" }} />

  <div style={{ position: "relative", zIndex: 2 }}>
    <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>
      WE ARE HERE FOR YOU
    </p>
    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
      Get in <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Touch</em>
    </h1>
    <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
    <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>
      We respond within 2 hours during business hours
    </p>
  </div>
</div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: "center", padding: "6rem 0", background: "var(--cream)" }}>
          <div style={{ width: "40px", height: "40px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto 1rem", animation: "spin 1s linear infinite" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)", fontSize: "0.85rem" }}>Loading experiences...</p>
        </div>
      )}

      {!loading && (
        <section style={{ padding: "100px 0", background: "var(--cream)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

            {/* Header + Filter */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "1rem" }}>— ALL EXPERIENCES —</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--dark)" }}>
                What to <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Do & Explore</em>
              </h2>
              <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />

              {/* Category filters */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2rem" }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.5rem 1.2rem", border: "1px solid", borderColor: activeCategory === cat ? "var(--gold)" : "rgba(201,169,110,0.2)", background: activeCategory === cat ? "rgba(201,169,110,0.1)" : "transparent", color: activeCategory === cat ? "var(--gold)" : "var(--text-muted)", borderRadius: "2px", cursor: "pointer", transition: "all 0.3s" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards */}
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontFamily: "var(--font-ui)", fontSize: "0.85rem" }}>
                No experiences in this category yet.
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="rooms-grid-container">
                {filtered.map((exp) => {
                  const imageUrl = exp.image ? urlFor(exp.image).width(800).url() : null;
                  return (
                    <div
                      key={exp._id}
                      style={{ background: "#fff", borderRadius: "6px", overflow: "hidden", border: "1px solid #f0ead8", transition: "all 0.35s", boxShadow: "0 2px 20px rgba(26,22,18,0.05)" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(26,22,18,0.12)"; el.style.borderColor = "rgba(201,169,110,0.3)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 20px rgba(26,22,18,0.05)"; el.style.borderColor = "#f0ead8"; }}
                    >
                      {/* Image */}
                      <div style={{ height: "220px", background: "linear-gradient(135deg, #1a2a1a, #2a4a3a)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "1.5rem" }}>
                        {imageUrl && (
                          <img src={imageUrl} alt={exp.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                        )}
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
                          ].map((m) => m.value ? (
                            <div key={m.label} style={{ background: "var(--cream)", padding: "0.4rem 0.8rem", borderRadius: "2px", border: "1px solid rgba(201,169,110,0.2)" }}>
                              <div style={{ fontFamily: "var(--font-label)", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>{m.label}</div>
                              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text)", marginTop: "2px" }}>{m.value}</div>
                            </div>
                          ) : null)}
                        </div>

                        {/* Highlights */}
                        {exp.highlights?.length > 0 && (
                          <div style={{ marginBottom: "1.5rem" }}>
                            {exp.highlights.slice(0, 3).map((h) => (
                              <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", marginBottom: "0.3rem" }}>
                                <span style={{ color: "var(--gold)", fontSize: "0.7rem" }}>✓</span>
                                {h}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Footer */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0ead8", paddingTop: "1.2rem" }}>
                          <div>
                            <div style={{ fontFamily: "var(--font-label)", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase" }}>From</div>
                            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold)", fontWeight: 400 }}>
                              {exp.price ? `₹${exp.price.toLocaleString("en-IN")}` : "On Request"}
                            </div>
                          </div>
                          <a href="https://wa.me/919622299302" target="_blank" rel="noopener noreferrer" className="btn-gold-solid" style={{ fontSize: "0.58rem", padding: "0.6rem 1.2rem" }}>
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

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