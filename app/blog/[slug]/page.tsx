"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const paragraphs = post.content.trim().split("\n\n").filter(Boolean);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "65vh",
          background: post.gradient,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "var(--nav-h)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,12,15,0.3) 0%, rgba(10,12,15,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "4rem", maxWidth: "860px" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "var(--gold-light)", textTransform: "uppercase", background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)", padding: "0.3rem 0.8rem", borderRadius: "2px" }}>
              {post.category}
            </span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{post.date}</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>·</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "1rem" }}>
            {post.title}
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0ead8", padding: "0.9rem 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)", alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--gold)" }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: "var(--gold)" }}>Blog</Link>
          <span>›</span>
          <span>{post.title}</span>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "60px 0 100px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 280px", gap: "4rem", alignItems: "start" }} className="room-detail-grid">

          {/* Article */}
          <article>
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h2 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: "var(--dark)", margin: "2.5rem 0 1rem" }}>
                    {para.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              return (
                <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {para.replace(/\*\*/g, "")}
                </p>
              );
            })}

            {/* Author */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #f0ead8", display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--gold)" }}>RC</div>
              <div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", fontWeight: 600, color: "var(--dark)" }}>{post.author}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)" }}>Royal Cliff Resort, Pahalgam</div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "calc(var(--nav-h) + 1.5rem)" }}>
            {/* Book Now Card */}
            <div style={{ background: "var(--dark)", borderRadius: "6px", padding: "2rem", marginBottom: "2rem", border: "1px solid rgba(201,169,110,0.2)" }}>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--gold-light)", marginBottom: "0.8rem" }}>PLAN YOUR VISIT</p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, color: "#fff", marginBottom: "0.8rem" }}>
                Experience Kashmir First-Hand
              </h3>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Everything in this guide and more awaits you at Royal Cliff Resort.
              </p>
              <Link href="/rooms" className="btn-gold-solid" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                Book Your Stay
              </Link>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                  Related Posts
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                      <div
                        style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", padding: "0.8rem", background: "#fff", borderRadius: "4px", border: "1px solid #f0ead8", transition: "all 0.3s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.3)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#f0ead8"; }}
                      >
                        <div style={{ width: "60px", height: "50px", borderRadius: "3px", background: r.gradient, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 600, color: "var(--dark)", lineHeight: 1.3, marginBottom: "0.3rem" }}>{r.title}</div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", color: "var(--text-muted)" }}>{r.readTime}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}