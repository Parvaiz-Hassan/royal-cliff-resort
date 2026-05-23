"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const visible = 3;
  const max = blogPosts.length - visible;
  const mobileMax = blogPosts.length - 1;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section style={{ padding: "60px 0", background: "#fff" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "0.8rem" }}>
              — STORIES FROM KASHMIR —
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--dark)" }}>
              Latest from Our{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Journal</em>
            </h2>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginTop: "1.2rem" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.5rem" }} className="blog-arrows">
              <button
                onClick={prev}
                disabled={current === 0}
                style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "transparent", cursor: current === 0 ? "not-allowed" : "pointer", fontSize: "1rem", color: current === 0 ? "rgba(201,169,110,0.3)" : "var(--gold)", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
              >←</button>
              <button
                onClick={next}
                disabled={current >= max}
                style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "transparent", cursor: current >= max ? "not-allowed" : "pointer", fontSize: "1rem", color: current >= max ? "rgba(201,169,110,0.3)" : "var(--gold)", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
              >→</button>
            </div>
            <Link href="/blog" className="btn-gold" style={{ fontSize: "0.6rem", padding: "0.6rem 1.4rem" }}>
              View All
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div
          style={{ overflow: "hidden" }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 50) setCurrent((c) => Math.min(mobileMax, c + 1));
            if (diff < -50) setCurrent((c) => Math.max(0, c - 1));
          }}
        >
          <div
            className="blog-track"
            style={{
              display: "flex",
              gap: "2rem",
              transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
              transform: `translateX(calc(-${current} * (100% / ${visible} + 2rem / ${visible})))`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card-wrap"
                style={{ flex: `0 0 calc(${100 / visible}% - ${(2 * (visible - 1)) / visible}rem)` }}
              >
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid #f0ead8", background: "var(--cream)", height: "100%", transition: "all 0.35s" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 16px 50px rgba(26,22,18,0.1)"; el.style.borderColor = "rgba(201,169,110,0.3)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "#f0ead8"; }}
                  >
                    {/* Image */}
                    <div style={{ height: "200px", background: post.gradient, position: "relative" }}>
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.5))" }} />
                      <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--gold-light)", textTransform: "uppercase", background: "rgba(0,0,0,0.4)", padding: "0.25rem 0.6rem", borderRadius: "2px" }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "1.4rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, color: "var(--dark)", marginBottom: "0.6rem", lineHeight: 1.35 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                        {post.excerpt.substring(0, 90)}...
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f0ead8", paddingTop: "0.8rem" }}>
                        <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", color: "var(--text-muted)" }}>{post.readTime}</span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase" }}>Read →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "2rem" }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: i === current ? "4px" : "50%",
                background: i === current ? "var(--gold)" : "rgba(201,169,110,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-arrows { display: none !important; }

          .blog-track {
            gap: 1rem !important;
            transform: translateX(calc(-${current} * 80%)) !important;
          }

          .blog-card-wrap {
            flex: 0 0 78% !important;
          }
        }
      `}</style>
    </section>
  );
}