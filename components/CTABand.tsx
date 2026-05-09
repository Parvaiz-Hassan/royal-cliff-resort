"use client";

interface CTABandProps {
  onBook: () => void;
}

export default function CTABand({ onBook }: CTABandProps) {
  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--dark)",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
        }}
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%" }}
        >
          <polygon points="0,400 200,100 400,250 600,50 800,200 1000,20 1200,150 1440,80 1440,400" fill="var(--gold)" />
        </svg>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-ui)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold-light)",
            marginBottom: "1rem",
          }}
        >
          — Limited Availability —
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "1.2rem",
          }}
        >
          Ready for Your Kashmir{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
            Escape?
          </em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
        >
          Rooms fill quickly during peak season. Secure your dates now
          and begin planning the journey of a lifetime.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onBook}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "1rem 2.4rem",
              background: "var(--gold)",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--brown)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            }}
          >
            Book Your Stay
          </button>

          
            <a href="tel:+919622299302" style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", padding: "1rem 2.4rem", background: "#fff", color: "var(--dark)", border: "none", borderRadius: "3px", transition: "all 0.3s" }}>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}