import Link from "next/link";

export default function About() {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--cream)",
      }}
    >
      <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
        {/* Left — Visual */}
        <div style={{ position: "relative" }}>
          {/* Main image placeholder */}
          <div
            style={{
              width: "100%",
              aspectRatio: "4/5",
              backgroundImage:
        "url('https://res.cloudinary.com/dhnglltpo/image/upload/v1779265055/royal-cliff-resort-about-us-poster-2_abheh3.jpg')",
        backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Mountain illustration */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: "0",
              }}
            >
              <svg
                viewBox="0 0 400 300"
                style={{ width: "100%", opacity: 0.2 }}
              >
                <polygon
                  points="200,20 320,200 80,200"
                  fill="white"
                />
                <polygon
                  points="120,60 240,200 0,200"
                  fill="rgba(255,255,255,0.5)"
                />
                <polygon
                  points="300,80 400,200 200,200"
                  fill="rgba(255,255,255,0.4)"
                />
                <rect
                  x="0"
                  y="200"
                  width="400"
                  height="100"
                  fill="rgba(255,255,255,0.1)"
                />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(255,220,100,0.3)",
              }}
            />
          </div>

          {/* Floating card */}
           <div
            className="floating-card"
            style={{
              position: "absolute",
              bottom: "-1rem",
              right: "0.5rem",
              background: "#fff",
              padding: "1.5rem 2rem",
              borderRadius: "6px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              minWidth: "200px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--gold)",
                fontWeight: 400,
              }}
            >
              500+
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                fontFamily: "var(--font-ui)",
              }}
            >
              Happy Guests
            </div>
            <div
              style={{
                display: "flex",
                gap: "3px",
                marginTop: "6px",
                color: "var(--gold)",
                fontSize: "0.9rem",
              }}
            >
              ★★★★★
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div style={{ padding: "0 0.5rem" }}>
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
            — Our Story —
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--dark)",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            A Sanctuary Above
            <br />
            the{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Lidder Valley
            </em>
          </h2>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              marginBottom: "1.5rem",
            }}
          />

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "1.2rem",
              fontFamily: "var(--font-ui)",
            }}
          >
            Perched on the cliffs of Pahalgam, Royal Cliff Resort was born
            from a singular vision — to create a place where the untamed
            beauty of Kashmir becomes your daily backdrop.
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "2rem",
              fontFamily: "var(--font-ui)",
            }}
          >
            From hand-carved walnut furnishings to Kashmiri silk embroideries
            in every suite, every detail is a tribute to the valley legendary
            craftsmanship. We do not just offer rooms — we offer a piece of
            Kashmir soul.
          </p>

          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { value: "2 km", label: "From Betab Valley" },
              { value: "3 km", label: "From Town Centre" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    color: "var(--gold)",
                    fontWeight: 400,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <Link href="/rooms" className="btn-gold-solid">
            Discover Our Rooms
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}