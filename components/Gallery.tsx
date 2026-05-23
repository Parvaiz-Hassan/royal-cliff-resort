"use client";

import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";
import { galleryQuery } from "@/lib/queries";

interface GalleryItem {
  _id: string;
  title: string;
  image: any;
  category: string;
  order: number;
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    client.fetch(galleryQuery)
      .then((data) => {
        setItems(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const gridStyles: React.CSSProperties[] = [
    { gridColumn: "1 / 6", gridRow: "1 / 3" },
    { gridColumn: "6 / 9", gridRow: "1 / 2" },
    { gridColumn: "9 / 13", gridRow: "1 / 2" },
    { gridColumn: "6 / 10", gridRow: "2 / 3" },
    { gridColumn: "10 / 13", gridRow: "2 / 3" },
  ];

  return (
    <section id="gallery" style={{ padding: "60px 0", background: "#fff" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-ui)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
            — Visual Stories —
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--dark)" }}>
            The Resort in{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Frames</em>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", margin: "1.5rem auto 0" }} />
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <div style={{ width: "36px", height: "36px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto", animation: "spin 1s linear infinite" }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Mosaic Grid */}
        {!loading && items.length > 0 && (
          <div
            className="gallery-grid-container"
            style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "repeat(2, 260px)", gap: "1rem" }}
          >
            {items.slice(0, 5).map((item, i) => {
              const imageUrl = item.image ? urlFor(item.image).width(1200).url() : null;

              return (
                <div
                  key={item._id}
                  onClick={() => setLightbox(item)}
                  style={{
                    ...gridStyles[i],
                    overflow: "hidden",
                    borderRadius: "4px",
                    cursor: "pointer",
                    position: "relative",
                    background: "linear-gradient(135deg, #1a2a3a, #2a4a5a)",
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
                  {/* Image */}
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={item.title || item.category}
                      className="g-bg"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className="g-overlay"
                    style={{ position: "absolute", inset: 0, background: "rgba(26,22,18,0)", transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <span style={{ color: "#fff", fontSize: "1.5rem", opacity: 0.8 }}>⤢</span>
                  </div>

                  {/* Label */}
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.7 }}>
                    {item.title || item.category}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {!loading && items.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontFamily: "var(--font-ui)", fontSize: "0.85rem" }}>
            No gallery images yet. Add some in Sanity Studio.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "none", color: "#fff", fontSize: "2rem", cursor: "pointer" }}
          >✕</button>
          <div style={{ width: "80vw", height: "70vh", borderRadius: "6px", overflow: "hidden", position: "relative" }}>
            {lightbox.image && (
              <img
                src={urlFor(lightbox.image).width(1600).url()}
                alt={lightbox.title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}