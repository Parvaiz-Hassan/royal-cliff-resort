import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "rgba(255,255,255,0.55)" }}>
      <div style={{ padding: "80px 0 60px" }}>
        <div
            className="footer-grid-container"
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
              gap: "4rem",
            }}
          >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "#fff",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Royal Cliff Resort
              <span
                style={{
                  display: "block",
                  fontSize: "0.55rem",
                  letterSpacing: "0.4em",
                  color: "var(--gold)",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Pahalgam · Kashmir
              </span>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.9,
                maxWidth: "280px",
                fontFamily: "var(--font-ui)",
              }}
            >
              A sanctuary of luxury and nature, perched on the cliffs of
              Pahalgam with breathtaking views of the Lidder Valley.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.5rem" }}>
              {[
                { label: "Instagram", href: "#", icon: "📸" },
                { label: "WhatsApp", href: "https://wa.me/919622299302", icon: "💬" },
                { label: "Email", href: "mailto:contact@royalcliffresort.com", icon: "✉️" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{ width: "38px", height: "38px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", transition: "all 0.3s" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={footerHeadStyle}>Quick Links</h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Rooms & Suites", href: "/rooms" },
                { label: "Experiences", href: "/#experiences" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "0.8rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-ui)",
                      transition: "color 0.3s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4 style={footerHeadStyle}>Rooms</h4>
            <ul style={{ listStyle: "none" }}>
              {[
                "Deluxe Valley View",
                "Premium Mountain Suite",
                "Royal Cliff Suite",
                "Honeymoon Cottage",
                "Grand Family Suite",
              ].map((room) => (
                <li key={room} style={{ marginBottom: "0.8rem" }}>
                  <Link
                    href="/rooms"
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {room}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={footerHeadStyle}>Stay Updated</h4>
            <p
              style={{
                fontSize: "0.8rem",
                marginBottom: "1.2rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                fontFamily: "var(--font-ui)",
              }}
            >
              Get seasonal offers and Kashmir travel updates.
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "3px",
                color: "#fff",
                fontFamily: "var(--font-ui)",
                fontSize: "0.85rem",
                outline: "none",
                marginBottom: "0.7rem",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "0.8rem",
                background: "var(--gold)",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                fontFamily: "var(--font-ui)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>

            <div
              style={{
                marginTop: "1.5rem",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-ui)",
                lineHeight: 1.8,
              }}
            >
              <div>+91 96222 99302</div>
              <div>contact@royalcliffresort.com</div>
              <div>Near BP Road, Pahalgam, J&K</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            fontSize: "0.75rem",
            fontFamily: "var(--font-ui)",
          }}
        >
          <p>© 2025 Royal Cliff Resort, Pahalgam. All rights reserved.</p>
          <p>
            <a href="#" style={{ color: "var(--gold-light)" }}>Privacy Policy</a>
            {" · "}
            <a href="#" style={{ color: "var(--gold-light)" }}>Terms</a>
            {" · "}
            <a href="#" style={{ color: "var(--gold-light)" }}>Cancellation Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: "0.6rem",
  fontWeight: 600,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "var(--gold)",
  marginBottom: "1.4rem",
};