"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    type: "gradient" as const,
    gradient: "linear-gradient(135deg, #0a1a2a 0%, #1a3a4a 50%, #0a2030 100%)",
    label: "Valley Views",
  },
  {
    id: 2,
    type: "gradient" as const,
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3a1a10 50%, #2a1008 100%)",
    label: "Luxury Suites",
  },
  {
    id: 3,
    type: "gradient" as const,
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a20 100%)",
    label: "Kashmir Nature",
  },
  {
    id: 4,
    type: "video" as const,
    // Replace this URL with your actual MP4 video URL
    videoUrl: "/videos/your-hero-video.mp4",
    label: "Resort Video",
    // Placeholder gradient shown before video loads
    gradient: "linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 50%, #0a2010 100%)",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    // Don't auto-advance on video slide
    if (slides[current].type === "video") return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current]);

  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  const goTo = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(idx);
  };

  const currentSlide = slides[current];

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease",
            background: slide.gradient,
          }}
        >
          {slide.type === "video" && i === current && (
            <>
              {/* Video element */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: videoLoaded ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                <source src={slide.videoUrl} type="video/mp4" />
              </video>

              {/* Placeholder shown while video loads */}
              {!videoLoaded && (
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "1rem",
                }}>
                  <div style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "2px solid rgba(201,169,110,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <div style={{
                      width: "0",
                      height: "0",
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "18px solid rgba(201,169,110,0.6)",
                      marginLeft: "4px",
                    }} />
                  </div>
                  <p style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}>
                    Loading Video...
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      {/* Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,12,15,0.4) 0%, rgba(10,12,15,0.15) 40%, rgba(10,12,15,0.65) 100%)",
        zIndex: 1,
      }} />

      {/* Video badge */}
      {currentSlide.type === "video" && (
        <div style={{
          position: "absolute",
          top: "calc(var(--nav-h) + 1.5rem)",
          right: "2rem",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(201,169,110,0.3)",
          borderRadius: "2px",
          padding: "0.4rem 0.8rem",
          backdropFilter: "blur(6px)",
        }}>
          <span style={{ color: "var(--gold)", fontSize: "0.7rem" }}>▶</span>
          <span style={{
            fontFamily: "var(--font-label)",
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
          }}>
            Now Playing
          </span>
        </div>
      )}

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "calc(var(--nav-h) + 1rem) 2rem 2rem",
        color: "#fff",
        minHeight: "100vh",
      }}>
        <p style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "var(--gold-light)",
          marginBottom: "1rem",
        }}>
          Near BP Road · Pahalgam · Kashmir
        </p>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 4.5rem)",
          fontWeight: 400,
          lineHeight: 1.08,
          maxWidth: "1000px",
        }}>
          Where Kashmir{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Grandeur</em>
          {" "}Meets Refined Luxury
        </h1>

        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
          fontWeight: 300,
          color: "rgba(255,255,255,0.75)",
          maxWidth: "680px",
          margin: "1rem auto 0",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}>
          A cliff-side sanctuary in Pahalgam — breathtaking valley views, authentic Kashmiri warmth.
        </p>

        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "1.5rem",
        }}>
          <Link href="/rooms" className="btn-gold-solid">
            Explore Rooms
          </Link>
          <button
            className="btn-gold"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Dots */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
        zIndex: 3,
        alignItems: "center",
      }}>
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            title={slide.label}
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: i === current ? "4px" : "50%",
              background: i === current
                ? slide.type === "video" ? "#fff" : "var(--gold-light)"
                : "rgba(255,255,255,0.4)",
              border: slide.type === "video" ? "1px solid rgba(255,255,255,0.5)" : "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {slide.type === "video" && i !== current && (
              <span style={{ fontSize: "5px", color: "rgba(255,255,255,0.6)" }}>▶</span>
            )}
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
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
      }}>
        <span>Scroll</span>
        <div style={{
          width: "1px",
          height: "50px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
        }} />
      </div>
    </section>
  );
}