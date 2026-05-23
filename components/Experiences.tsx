"use client";

import { useState, useEffect } from "react";
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
  order: number;
}

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayItems = experiences.slice(0, 3);

  return (
    <section id="experiences" style={{ padding: "60px 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-ui)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
            — Kashmir Awaits —
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--dark)", lineHeight: 1.2 }}>
            Curated{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Experiences</em>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", margin: "1.5rem auto" }} />
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8, fontFamily: "var(--font-ui)" }}>
            Beyond your room, the entire valley is your playground. We arrange everything.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <div style={{ width: "36px", height: "36px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto", animation: "spin 1s linear infinite" }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Cards */}
        {!loading && displayItems.length > 0 && (
          <div className="experiences-grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {displayItems.map((exp) => {
              const imageUrl = exp.image ? urlFor(exp.image).width(800).url() : null;
              return (
                <div
                  key={exp._id}
                  style={{ position: "relative", overflow: "hidden", borderRadius: "6px", aspectRatio: "3/4", cursor: "pointer" }}
                  onMouseEnter={(e) => { const img = e.currentTarget.querySelector(".exp-bg") as HTMLElement; if (img) img.style.transform = "scale(1.06)"; }}
                  onMouseLeave={(e) => { const img = e.currentTarget.querySelector(".exp-bg") as HTMLElement; if (img) img.style.transform = "scale(1)"; }}
                >
                  {/* Background */}
                  {imageUrl ? (
                    <img
                      className="exp-bg"
                      src={imageUrl}
                      alt={exp.name}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    />
                  ) : (
                    <div
                      className="exp-bg"
                      style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a2a1a, #2a4a3a)", transition: "transform 0.6s ease" }}
                    />
                  )}

                  {/* Overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,22,18,0.9) 0%, rgba(26,22,18,0.1) 60%)" }} />

                  {/* Content */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem" }}>
                    <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold-light)", fontWeight: 600, fontFamily: "var(--font-ui)", marginBottom: "0.4rem" }}>
                      {exp.category}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "#fff", fontWeight: 400, marginBottom: "0.5rem" }}>
                      {exp.name}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "var(--font-ui)" }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {!loading && displayItems.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontFamily: "var(--font-ui)", fontSize: "0.85rem" }}>
            No experiences yet. Add some in Sanity Studio.
          </div>
        )}
      </div>
    </section>
  );
}