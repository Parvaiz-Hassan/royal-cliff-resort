const partners = [
  { name: "Jammu & Kashmir Tourism", abbr: "J&K Tourism", icon: "🏔️" },
  { name: "Incredible India", abbr: "Incredible India", icon: "🇮🇳" },
  { name: "Ministry of Tourism", abbr: "Govt. of India", icon: "🏛️" },
  { name: "Razorpay Payments", abbr: "Razorpay", icon: "💳" },
  { name: "Google Travel", abbr: "Google Travel", icon: "🗺️" },
  { name: "Kashmir Trekkers", abbr: "Kashmir Trekkers", icon: "🥾" },
];

export default function Partners() {
  return (
    <section style={{ padding: "70px 0", background: "var(--cream)", borderTop: "1px solid #f0ead8" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "0.5rem" }}>
            — TRUSTED BY —
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--dark)" }}>
            Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Partners & Affiliates</em>
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.2rem auto" }} />
        </div>

        {/* Partner logos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.5rem",
            alignItems: "center",
          }}
          className="features-grid-container"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem 1rem",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "4px",
                background: "#fff",
                transition: "all 0.35s",
                cursor: "default",
                gap: "0.6rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.4)";
                el.style.boxShadow = "0 8px 30px rgba(26,22,18,0.08)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.15)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "2rem" }}>{partner.icon}</span>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.52rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {partner.abbr}
              </span>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🔒", text: "Secure Payments" },
            { icon: "✅", text: "Verified Property" },
            { icon: "⭐", text: "4.9 Star Rated" },
            { icon: "🛡️", text: "Best Price Guarantee" },
            { icon: "📞", text: "24/7 Support" },
          ].map((badge) => (
            <div
              key={badge.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-ui)",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}