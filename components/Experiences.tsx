const experiences = [
  {
    id: 1,
    category: "Adventure",
    name: "Mountain Trekking",
    description: "Guided treks to Tulian Lake, Sheshnag, and Kolahoi Glacier. All levels welcome.",
    gradient: "linear-gradient(135deg, #1a2a1a 0%, #2a4a3a 100%)",
  },
  {
    id: 2,
    category: "Leisure",
    name: "Shikara on Lidder",
    description: "Private shikara rides at sunrise along the crystal Lidder River. Truly unforgettable.",
    gradient: "linear-gradient(135deg, #0a1a3a 0%, #1a2a5a 100%)",
  },
  {
    id: 3,
    category: "Wellness",
    name: "Kashmiri Spa",
    description: "Traditional Kashmiri oil massages and herbal steam baths for total rejuvenation.",
    gradient: "linear-gradient(135deg, #2a1a0a 0%, #4a3010 100%)",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      style={{ padding: "100px 0", background: "var(--cream)" }}
    >
      <div
        style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            — Kashmir Awaits —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--dark)",
              lineHeight: 1.2,
            }}
          >
            Curated{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Experiences
            </em>
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              margin: "1.5rem auto",
            }}
          />
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontFamily: "var(--font-ui)",
            }}
          >
            Beyond your room, the entire valley is your playground.
            We arrange everything.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "6px",
                aspectRatio: "3/4",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector(".exp-bg") as HTMLElement;
                if (img) img.style.transform = "scale(1.06)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector(".exp-bg") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Background */}
              <div
                className="exp-bg"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: exp.gradient,
                  transition: "transform 0.6s ease",
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,22,18,0.9) 0%, rgba(26,22,18,0.1) 60%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "2rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--gold-light)",
                    fontWeight: 600,
                    fontFamily: "var(--font-ui)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {exp.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    color: "#fff",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                  }}
                >
                  {exp.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}