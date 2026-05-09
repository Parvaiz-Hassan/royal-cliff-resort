"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  { id: 1, gradient: "linear-gradient(135deg, #0a1a2a 0%, #1a3a4a 50%, #0a2030 100%)" },
  { id: 2, gradient: "linear-gradient(135deg, #1a0a0a 0%, #3a1a10 50%, #2a1008 100%)" },
  { id: 3, gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a20 100%)" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            inset: 0,
            background: slide.gradient,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(26,22,18,0.4) 0%, rgba(26,22,18,0.15) 40%, rgba(26,22,18,0.65) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "calc(var(--nav-h) + 2rem) 2rem 8rem",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "var(--gold-light)",
            marginBottom: "1.5rem",
          }}
        >
          Near BP Road · Pahalgam · Kashmir
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            maxWidth: "900px",
          }}
        >
          Where Kashmir{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
            Grandeur
          </em>
          {" "}Meets Refined Luxury
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "560px",
            margin: "1.5rem auto 0",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          A cliff-side sanctuary curated for those who seek the extraordinary.
          Breathtaking valley views, authentic Kashmiri warmth, and timeless elegance.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "2.5rem",
          }}
        >
          <Link
            href="/rooms"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "1rem 2.4rem",
              background: "var(--gold)",
              color: "#fff",
              borderRadius: "3px",
              transition: "all 0.3s",
            }}
          >
            Explore Rooms
          </Link>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "1rem 2.4rem",
              background: "transparent",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.5)",
              borderRadius: "3px",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              borderRadius: i === current ? "3px" : "50%",
              background:
                i === current
                  ? "var(--gold-light)"
                  : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "3rem",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "var(--font-ui)",
          fontSize: "0.58rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: "1px",
            height: "50px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}