"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { client, urlFor } from "@/lib/sanity";
import { galleryQuery } from "@/lib/queries";

interface GalleryItem {
  _id: string;
  title: string;
  image: any;
  category: string;
  order: number;
}

type Category = "all" | string;

const categories = [
  { label: "All", value: "all" },
  { label: "Rooms & Suites", value: "rooms" },
  { label: "Valley Views", value: "views" },
  { label: "Dining", value: "dining" },
  { label: "Experiences", value: "experiences" },
];

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    client.fetch(galleryQuery)
      .then((data) => {
        setItems(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = items.filter((g) =>
    active === "all" || g.category === active
  );

  const lightboxIndex = lightbox ? filtered.findIndex((g) => g._id === lightbox._id) : -1;

  const goLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex > 0) setLightbox(filtered[lightboxIndex - 1]);
  };

  const goLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex < filtered.length - 1) setLightbox(filtered[lightboxIndex + 1]);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "60vh",
          background: "linear-gradient(135deg, #0a0c0f 0%, #1a2030 50%, #0a0c0f 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", position: "relative", overflow: "hidden",
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
                fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.2em",
                textTransform: "uppercase", padding: "0.6rem 1.4rem", border: "1px solid",
                borderColor: active === cat.value ? "var(--gold)" : "rgba(201,169,110,0.2)",
                background: active === cat.value ? "rgba(201,169,110,0.1)" : "transparent",
                color: active === cat.value ? "var(--gold)" : "var(--text-muted)",
                borderRadius: "2px", cursor: "pointer", transition: "all 0.3s",
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

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <div style={{ width: "40px", height: "40px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto 1rem", animation: "spin 1s linear infinite" }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)", fontSize: "0.85rem" }}>Loading gallery...</p>
            </div>
          )}

          {/* Grid */}
          {!loading && filtered.length > 0 && (
            <div style={{ columns: "3 300px", gap: "1rem" }}>
              {filtered.map((item, i) => {
                const imageUrl = item.image ? urlFor(item.image).width(1200).url() : null;
                const isLarge = i % 5 === 0;

                return (
                  <div
                    key={item._id}
                    onClick={() => setLightbox(item)}
                    style={{
                      breakInside: "avoid",
                      marginBottom: "1rem",
                      borderRadius: "4px",
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                      height: isLarge ? "380px" : "240px",
                      background: "linear-gradient(135deg, #1a2a3a, #2a4a5a)",
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
                    {/* Image */}
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={item.title || item.category}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    )}

                    {/* Gradient overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.55))" }} />

                    {/* Hover overlay */}
                    <div
                      className="g-overlay"
                      style={{ position: "absolute", inset: 0, background: "rgba(201,169,110,0.15)", opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <span style={{ fontSize: "2rem", color: "#fff" }}>⤢</span>
                    </div>

                    {/* Label */}
                    <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", zIndex: 2 }}>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "var(--gold-light)", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                        {item.category}
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", fontWeight: 400 }}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty */}
          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)" }}>
                No images in this category yet. Add some in Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "none", color: "#fff", fontSize: "2rem", cursor: "pointer" }}
          >✕</button>

          {/* Prev */}
          <button
            onClick={goLightboxPrev}
            style={{ position: "absolute", left: "2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", cursor: lightboxIndex === 0 ? "not-allowed" : "pointer", fontSize: "1.2rem", opacity: lightboxIndex === 0 ? 0.3 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}
          >←</button>

          {/* Next */}
          <button
            onClick={goLightboxNext}
            style={{ position: "absolute", right: "2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", cursor: lightboxIndex === filtered.length - 1 ? "not-allowed" : "pointer", fontSize: "1.2rem", opacity: lightboxIndex === filtered.length - 1 ? 0.3 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}
          >→</button>

          {/* Image */}
          <div
            style={{ width: "80vw", height: "70vh", borderRadius: "6px", overflow: "hidden", position: "relative", background: "linear-gradient(135deg, #1a2a3a, #2a4a5a)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.image && (
              <img
                src={urlFor(lightbox.image).width(1600).url()}
                alt={lightbox.title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}
            <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff" }}>{lightbox.title}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontStyle: "italic", color: "rgba(255,255,255,0.4)", marginTop: "0.3rem" }}>Royal Cliff Resort · Pahalgam</div>
            </div>
          </div>

          {/* Counter */}
          <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em" }}>
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </>
  );
}