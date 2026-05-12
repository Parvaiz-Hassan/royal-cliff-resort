export default function StatsStrip() {
  const stats = [
    { value: "12+", label: "Luxury Rooms" },
    { value: "4.9★", label: "Guest Rating" },
    { value: "7800ft", label: "Altitude" },
    { value: "24/7", label: "Concierge" },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "1px solid #f0ead8",
        padding: "2.5rem 0",
      }}
    >
      <div
      className="stats-grid"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "var(--gold)",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginTop: "0.5rem",
                fontFamily: "var(--font-ui)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}