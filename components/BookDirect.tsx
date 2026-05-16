const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
        <path d="M9 14l2 2 4-4" />
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      </svg>
    ),
    name: "Best Rates",
    desc: "Guaranteed lowest price when you book direct",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    name: "No Hidden Charges",
    desc: "Transparent pricing with no surprise fees",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    name: "Pay At Hotel",
    desc: "Reserve now and pay on arrival — no upfront cost",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
        <path d="M20 12V22H4V12" />
        <path d="M22 7H2v5h20V7z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
      </svg>
    ),
    name: "Exclusive Offers",
    desc: "Special packages and seasonal deals for direct guests",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
        <path d="M5 12.55a11 11 0 0114.08 0" />
        <path d="M1.42 9a16 16 0 0121.16 0" />
        <path d="M8.53 16.11a6 6 0 016.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    name: "Wifi Access",
    desc: "Complimentary high-speed WiFi throughout the resort",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    name: "We Care",
    desc: "24/7 concierge and personalized Kashmiri hospitality",
  },
];

export default function BookDirect() {
  return (
    <section style={{ background: "#fff", padding: "0", borderBottom: "1px solid #f0ead8" }}>
      {/* Top banner */}
      <div style={{
        background: "var(--cream)",
        borderBottom: "1px solid #f0ead8",
        padding: "0.8rem 2rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.95rem",
          fontStyle: "italic",
          color: "var(--gold)",
        }}>
          Book Direct &amp; Save — Enjoy exclusive benefits when you reserve directly with us
        </p>
      </div>

      {/* Features row */}
      <div style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        alignItems: "stretch",
      }}>
        {/* Left label */}
        <div
          className="book-direct-label"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2rem 2.5rem 2rem 0",
            borderRight: "1px solid #f0ead8",
            marginRight: "2rem",
            flexShrink: 0,
          }}
        >
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.8rem",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}>
            Book<br />Direct
          </h2>
        </div>

        {/* Feature boxes */}
        <div
          className="book-direct-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "0",
            flex: 1,
            padding: "1.5rem 0",
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "1.2rem 1rem",
                textAlign: "center",
                borderLeft: i > 0 ? "1px solid #f0ead8" : "none",
                background: "#fff",
                borderRadius: "0",
                transition: "all 0.3s",
                cursor: "default",
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--cream)";
                el.style.boxShadow = "inset 0 0 0 1px rgba(201,169,110,0.2), 0 4px 20px rgba(26,22,18,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#fff";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ color: "var(--gold)", marginBottom: "0.7rem" }}>
                {f.icon}
              </div>
              <div style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--dark)",
                marginBottom: "0.4rem",
                fontWeight: 500,
              }}>
                {f.name}
              </div>
              <div style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}