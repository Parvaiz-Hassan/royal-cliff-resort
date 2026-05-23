"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  coverImage: any;
  publishedAt: string;
  featured: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    client.fetch(blogPostsQuery)
      .then((data) => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];

  const featured = posts.filter((p) => p.featured);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "55vh",
          background: "linear-gradient(135deg, #0a0c0f 0%, #1a1a2a 50%, #0a0c0f 100%)",
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
            STORIES FROM KASHMIR
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
            Our <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Journal</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.6)", maxWidth: "500px" }}>
            Travel guides, Kashmir culture, adventure stories and more
          </p>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: "center", padding: "6rem 0", background: "var(--cream)" }}>
          <div style={{ width: "40px", height: "40px", border: "2px solid rgba(201,169,110,0.2)", borderTop: "2px solid var(--gold)", borderRadius: "50%", margin: "0 auto 1rem", animation: "spin 1s linear infinite" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)", fontSize: "0.85rem" }}>Loading posts...</p>
        </div>
      )}

      {!loading && (
        <>
          {/* Featured Posts */}
          {featured.length > 0 && (
            <section style={{ padding: "80px 0", background: "var(--cream)" }}>
              <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
                <div style={{ marginBottom: "3rem" }}>
                  <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "0.8rem" }}>— FEATURED —</p>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "var(--dark)" }}>
                    Editor&apos;s <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Picks</em>
                  </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="contact-grid-container">
                  {featured.map((post) => {
                    const imageUrl = post.coverImage ? urlFor(post.coverImage).width(1200).url() : null;
                    return (
                      <Link key={post._id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                        <div
                          style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid #f0ead8", background: "#fff", transition: "all 0.35s" }}
                          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(26,22,18,0.12)"; el.style.borderColor = "rgba(201,169,110,0.3)"; }}
                          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "#f0ead8"; }}
                        >
                          <div style={{ height: "260px", background: "linear-gradient(135deg, #1a2a3a, #2a4a5a)", position: "relative", overflow: "hidden" }}>
                            {imageUrl && (
                              <img src={imageUrl} alt={post.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                            )}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))" }} />
                            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", zIndex: 2 }}>
                              <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "var(--gold-light)", textTransform: "uppercase", background: "rgba(0,0,0,0.3)", padding: "0.3rem 0.7rem", borderRadius: "2px" }}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div style={{ padding: "1.8rem" }}>
                            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, color: "var(--dark)", marginBottom: "0.8rem", lineHeight: 1.3 }}>
                              {post.title}
                            </h3>
                            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                              {post.excerpt}
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f0ead8", paddingTop: "1rem" }}>
                              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : ""} · {post.readTime}
                              </div>
                              <span style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}>
                                Read More →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* All Posts with Filter */}
          <section style={{ padding: featured.length > 0 ? "0 0 100px" : "80px 0 100px", background: "var(--cream)" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

              {/* Category Filter */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid #f0ead8" }}>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "0", marginRight: "0.5rem", alignSelf: "center" }}>— ALL POSTS —</p>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.5rem 1.2rem",
                      border: "1px solid",
                      borderColor: activeCategory === cat ? "var(--gold)" : "rgba(201,169,110,0.2)",
                      background: activeCategory === cat ? "rgba(201,169,110,0.1)" : "transparent",
                      color: activeCategory === cat ? "var(--gold)" : "var(--text-muted)",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Posts Grid */}
              {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontFamily: "var(--font-ui)", fontSize: "0.85rem" }}>
                  No posts in this category yet.
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="rooms-grid-container">
                  {filtered.map((post) => {
                    const imageUrl = post.coverImage ? urlFor(post.coverImage).width(800).url() : null;
                    return (
                      <Link key={post._id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                        <div
                          style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid #f0ead8", background: "#fff", height: "100%", transition: "all 0.35s" }}
                          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 40px rgba(26,22,18,0.1)"; el.style.borderColor = "rgba(201,169,110,0.3)"; }}
                          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "#f0ead8"; }}
                        >
                          <div style={{ height: "180px", background: "linear-gradient(135deg, #1a2a3a, #2a4a5a)", position: "relative", overflow: "hidden" }}>
                            {imageUrl && (
                              <img src={imageUrl} alt={post.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                            )}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))" }} />
                            <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                              <span style={{ fontFamily: "var(--font-label)", fontSize: "0.52rem", letterSpacing: "0.2em", color: "var(--gold-light)", textTransform: "uppercase" }}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div style={{ padding: "1.4rem" }}>
                            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, color: "var(--dark)", marginBottom: "0.6rem", lineHeight: 1.35 }}>
                              {post.title}
                            </h3>
                            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                              {post.excerpt?.substring(0, 100)}...
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f0ead8", paddingTop: "0.8rem" }}>
                              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", color: "var(--text-muted)" }}>{post.readTime}</span>
                              <span style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}>Read →</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <Footer />
      <WhatsAppFloat />
    </>
  );
}