const features = [
  {
    title: "Cliff-Side Location",
    description:
      "Perched above the Lidder River with unobstructed 270° views of the Pahalgam valley and snow-capped peaks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "26px", height: "26px" }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Kashmiri Luxury",
    description:
      "Hand-carved walnut furniture, pashmina throws, and locally crafted papier-mâché décor in every room.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "26px", height: "26px" }}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "24/7 Concierge",
    description:
      "Dedicated team available around the clock to arrange trekking, ponies, shikara rides, and local tours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "26px", height: "26px" }}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Authentic Cuisine",
    description:
      "Multi-course Wazwan feasts, Kashmiri Kahwa breakfasts, and a curated menu of local and international flavors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "26px", height: "26px" }}>
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      style={{
        background: "var(--dark)",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            — Why Choose Us —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            The Royal Cliff{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
              Experience
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

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                textAlign: "center",
                padding: "2.5rem 1.5rem",
                border: "1px solid rgba(184,150,62,0.2)",
                borderRadius: "6px",
                transition: "all 0.35s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--gold)";
                el.style.background = "rgba(184,150,62,0.07)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(184,150,62,0.2)";
                el.style.background = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto 1.5rem",
                  background: "rgba(184,150,62,0.12)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--gold-pale)",
                  marginBottom: "0.7rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-ui)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}