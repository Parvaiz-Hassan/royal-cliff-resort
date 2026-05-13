"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type Category = "all" | "rooms" | "views" | "dining" | "experiences";

const galleryItems = [
  { id: 1, category: "views", label: "Valley View", gradient: "linear-gradient(135deg, #1a2a3a, #2a4a5a)", span: "large" },
  { id: 2, category: "rooms", label: "Royal Suite", gradient: "linear-gradient(135deg, #3a2010, #5a3820)", span: "small" },
  { id: 3, category: "dining", label: "Restaurant", gradient: "linear-gradient(135deg, #1a1a2a, #3a3050)", span: "small" },
  { id: 4, category: "experiences", label: "Trekking", gradient: "linear-gradient(135deg, #0a2a1a, #1a4a2a)", span: "small" },
  { id: 5, category: "rooms", label: "Deluxe Room", gradient: "linear-gradient(135deg, #2a1a3a, #4a2a5a)", span: "small" },
  { id: 6, category: "views", label: "Mountain Peak", gradient: "linear-gradient(135deg, #0a1a2a, #1a3a4a)", span: "large" },
  { id: 7, category: "experiences", label: "Shikara Ride", gradient: "linear-gradient(135deg, #1a2a1a, #3a4a2a)", span: "small" },
  { id: 8, category: "dining", label: "Wazwan Feast", gradient: "linear-gradient(135deg, #2a1a0a, #4a3020)", span: "small" },
  { id: 9, category: "rooms", label: "Honeymoon Suite", gradient: "linear-gradient(135deg, #1a0a2a, #3a1a4a)", span: "small" },
  { id: 10, category: "views", label: "Lidder River", gradient: "linear-gradient(135deg, #0a1a3a, #1a2a5a)", span: "small" },
  { id: 11, category: "experiences", label: "Kashmiri Spa", gradient: "linear-gradient(135deg, #2a1a0a, #3a2a10)", span: "large" },
  { id: 12, category: "rooms", label: "Family Suite", gradient: "linear-gradient(135deg, #1a2a3a, #3a4a5a)", span: "small" },
];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Rooms & Suites", value: "rooms" },
  { label: "Valley Views", value: "views" },
  { label: "Dining", value: "dining" },
  { label: "Experiences", value: "experiences" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryItems.filter((g) => active === "all" || g.category === active);
  const lightboxItem = galleryItems.find((g) => g.id === lightbox);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "60vh",
          background: "linear-gradient(135deg, #0a0c0f 0%, #1a2030 50%, #0a0c0f 100%)",
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
            VISUAL STORIES
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
            The Resort in <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Frames</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.6)", maxWidth: "500px" }}>
            Every frame tells a story of Kashmir's timeless beauty
          </p>
        </div>
      </div>

      {/* Filter */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0ead8", padding: "1.2rem 0", position: "sticky", top: "var(--nav-h)", zIndex: 50 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.6rem 1.4rem",
                border: "1px solid",
                borderColor: active === cat.value ? "var(--gold)" : "rgba(201,169,110,0.2)",
                background: active === cat.value ? "rgba(201,169,110,0.1)" : "transparent",
                color: active === cat.value ? "var(--gold)" : "var(--text-muted)",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section style={{ padding: "60px 0 100px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ columns: "3 300px", gap: "1rem" }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item.id)}
                style={{
                  breakInside: "avoid",
                  marginBottom: "1rem",
                  borderRadius: "4px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  height: item.span === "large" ? "380px" : "240px",
                  background: item.gradient,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.5rem",
                  transition: "transform 0.35s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1.02)";
                  const overlay = el.querySelector(".g-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1)";
                  const overlay = el.querySelector(".g-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.55))" }} />
                <div
                  className="g-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(201,169,110,0.15)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "2rem", color: "#fff" }}>⤢</span>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "var(--gold-light)", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                    {item.category}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", fontWeight: 400 }}>
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)" }}>No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && lightboxItem && (
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
            padding: "2rem",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "none", color: "#fff", fontSize: "2rem", cursor: "pointer" }}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); const idx = filtered.findIndex(g => g.id === lightbox); if (idx > 0) setLightbox(filtered[idx - 1].id); }}
            style={{ position: "absolute", left: "2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem" }}
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); const idx = filtered.findIndex(g => g.id === lightbox); if (idx < filtered.length - 1) setLightbox(filtered[idx + 1].id); }}
            style={{ position: "absolute", right: "2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem" }}
          >
            →
          </button>

          <div
            style={{
              width: "80vw",
              height: "70vh",
              background: lightboxItem.gradient,
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--gold-light)", textTransform: "uppercase" }}>
              {lightboxItem.category}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", fontWeight: 400 }}>
              {lightboxItem.label}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              Royal Cliff Resort · Pahalgam
            </div>
          </div>

          {/* Counter */}
          <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em" }}>
            {filtered.findIndex(g => g.id === lightbox) + 1} / {filtered.length}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </>
  );
}