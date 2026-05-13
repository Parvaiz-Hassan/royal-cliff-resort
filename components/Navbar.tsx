"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: "var(--nav-h)",
          display: "flex",
          alignItems: "center",
          transition: "background 0.4s, box-shadow 0.4s",
          background: scrolled ? "rgba(10,12,15,0.97)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(201,169,110,0.15)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "#fff",
                letterSpacing: "0.03em",
                lineHeight: 1.1,
                transition: "color 0.4s",
              }}
            >
              Royal Cliff Resort
              <span
                style={{
                  display: "block",
                  fontSize: "0.55rem",
                  letterSpacing: "0.4em",
                  color: scrolled ? "var(--gold)" : "var(--gold-light)",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Pahalgam · Kashmir
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              listStyle: "none",
            }}
            className="nav-desktop"
          >
            {[
              { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Rooms", href: "/rooms" },
            { label: "Dining", href: "/dining" },
            { label: "Experiences", href: "/experiences" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.85)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = scrolled
                      ? "var(--dark)"
                      : "rgba(255,255,255,0.85)")
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <Link
            href="/rooms"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "#fff",
              padding: "0.7rem 1.8rem",
              borderRadius: "3px",
              transition: "background 0.3s",
            }}
            className="nav-book"
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--brown)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--gold)")
            }
          >
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="nav-hamburger"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            aria-label="Open menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: "24px",
                  height: "1.5px",
                  background: scrolled ? "var(--dark)" : "#fff",
                  display: "block",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1999,
            background: "var(--dark)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Rooms", href: "/rooms" },
            { label: "Dining", href: "/dining" },
            { label: "Experiences", href: "/experiences" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--cream)",
                fontWeight: 400,
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rooms"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "#fff",
              padding: "0.9rem 2.5rem",
              borderRadius: "3px",
              marginTop: "1rem",
            }}
          >
            Book Now
          </Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-book { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}