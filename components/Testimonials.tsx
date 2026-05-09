"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "The Royal Cliff Suite was beyond anything I had imagined. Waking up to that view every morning felt like a dream — the valley below, the peaks above, and the silence of Kashmir all around.",
    name: "Arjun Mehta",
    from: "Mumbai — Stayed 5 nights",
    stars: 5,
    gradient: "linear-gradient(135deg, #1a2a3a, #2a4a5a)",
  },
  {
    id: 2,
    quote:
      "The staff arranged our entire trek itinerary, packed us a Kashmiri lunch, and had Kahwa ready when we returned. This is what true hospitality feels like — thoughtful, warm, and absolutely genuine.",
    name: "Priya and Rohit Sharma",
    from: "Delhi — Honeymoon Package",
    stars: 5,
    gradient: "linear-gradient(135deg, #2a1a0a, #4a3020)",
  },
  {
    id: 3,
    quote:
      "We brought our family of five and everyone was taken care of. The kids loved the garden, we loved the views, and the Wazwan dinner was the highlight of our entire Kashmir trip.",
    name: "Imran and Fatima Khan",
    from: "Bangalore — Family Suite",
    stars: 5,
    gradient: "linear-gradient(135deg, #0a2a1a, #1a4a2a)",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () =>
    setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[current];

  return (
    <section
      style={{ background: "var(--cream)", padding: "100px 0" }}
    >
      <div
        style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            — Guest Stories —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--dark)",
            }}
          >
            Words from Our{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Guests
            </em>
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              background:
                "linear-gradient(90deg, var(--gold), var(--gold-light))",
              margin: "1.5rem auto 0",
            }}
          />
        </div>

        {/* Slide */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Quote */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "6rem",
                color: "var(--gold)",
                lineHeight: 0.5,
                marginBottom: "1.5rem",
                opacity: 0.4,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontStyle: "italic",
                lineHeight: 1.8,
                color: "var(--dark)",
                marginBottom: "2rem",
              }}
            >
              {t.quote}
            </p>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--dark)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                  fontFamily: "var(--font-ui)",
                }}
              >
                {t.from}
              </div>
              <div
                style={{
                  color: "var(--gold)",
                  fontSize: "0.85rem",
                  marginTop: "6px",
                }}
              >
                {"★".repeat(t.stars)}
              </div>
            </div>

            {/* Controls */}
            <div
              style={{
                display: "flex",
                gap: "0.8rem",
                marginTop: "2.5rem",
                alignItems: "center",
              }}
            >
              <button
                onClick={prev}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--border)",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold)";
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--gold)";
                }}
              >
                ←
              </button>

              <div style={{ display: "flex", gap: "6px" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      borderRadius: i === current ? "4px" : "50%",
                      background:
                        i === current ? "var(--gold)" : "rgba(184,150,62,0.3)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--border)",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold)";
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--gold)";
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            style={{
              aspectRatio: "4/5",
              borderRadius: "6px",
              overflow: "hidden",
              background: t.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.5s",
            }}
          >
            <svg
              viewBox="0 0 200 250"
              style={{ width: "60%", opacity: 0.15 }}
            >
              <circle cx="100" cy="80" r="45" fill="white" />
              <path
                d="M30 220 C30 160 170 160 170 220"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}