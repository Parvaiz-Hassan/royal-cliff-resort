"use client";

import { useState } from "react";

const galleryItems = [
  { id: 1, gradient: "linear-gradient(135deg, #1a2a3a, #2a4a5a)", label: "Valley View" },
  { id: 2, gradient: "linear-gradient(135deg, #3a2010, #5a3820)", label: "Suite Interior" },
  { id: 3, gradient: "linear-gradient(135deg, #1a1a2a, #3a3050)", label: "Royal Suite" },
  { id: 4, gradient: "linear-gradient(135deg, #0a2a1a, #1a4a2a)", label: "Gardens" },
  { id: 5, gradient: "linear-gradient(135deg, #2a1a3a, #4a2a5a)", label: "Restaurant" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      style={{ padding: "60px 0", background: "#fff" }}
    >
      <div
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem" }}
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
            — Visual Stories —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--dark)",
            }}
          >
            The Resort in{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Frames
            </em>
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              margin: "1.5rem auto 0",
            }}
          />
        </div>

        {/* Mosaic Grid */}
        <div
          className="gallery-grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(2, 260px)",
            gap: "1rem",
          }}
        >
          {galleryItems.map((item, i) => {
            const styles: React.CSSProperties[] = [
              { gridColumn: "1 / 6", gridRow: "1 / 3" },
              { gridColumn: "6 / 9", gridRow: "1 / 2" },
              { gridColumn: "9 / 13", gridRow: "1 / 2" },
              { gridColumn: "6 / 10", gridRow: "2 / 3" },
              { gridColumn: "10 / 13", gridRow: "2 / 3" },
            ];

            return (
              <div
                key={item.id}
                onClick={() => setLightbox(item.id)}
                style={{
                  ...styles[i],
                  overflow: "hidden",
                  borderRadius: "4px",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".g-overlay") as HTMLElement;
                  const bg = e.currentTarget.querySelector(".g-bg") as HTMLElement;
                  if (overlay) overlay.style.background = "rgba(26,22,18,0.4)";
                  if (bg) bg.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".g-overlay") as HTMLElement;
                  const bg = e.currentTarget.querySelector(".g-bg") as HTMLElement;
                  if (overlay) overlay.style.background = "rgba(26,22,18,0)";
                  if (bg) bg.style.transform = "scale(1)";
                }}
              >
                <div
                  className="g-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: item.gradient,
                    transition: "transform 0.6s ease",
                  }}
                />
                <div
                  className="g-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(26,22,18,0)",
                    transition: "background 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.5rem",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    className="g-icon"
                  >
                    ⤢
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    color: "#fff",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <div
            style={{
              width: "80vw",
              height: "70vh",
              background:
                galleryItems.find((g) => g.id === lightbox)?.gradient || "",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {galleryItems.find((g) => g.id === lightbox)?.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}