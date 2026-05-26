"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";

const menus = [
  {
    title: "Kashmiri Wazwan",
    category: "Signature Experience",
    description: "A ceremonial multi-course feast — the crown jewel of Kashmiri cuisine. Over 20 dishes served on traditional copper platters with live Sufi music.",
    price: "₹3,000 per person",
    gradient: "linear-gradient(135deg, #2a0a0a, #4a1a10)",
    image: "https://res.cloudinary.com/dhnglltpo/image/upload/v1779776248/royal-cliff-resort-wazwan_fa4zrt.webp",
    items: ["Rogan Josh", "Yakhni", "Gushtaba", "Tabak Maaz", "Dum Aloo", "Kashmiri Pulao", "Sheer Chai", "Phirni"],
    timing: "Dinner — 7:30 PM onwards",
    icon: "🍛",
  },
  {
    title: "Kashmir Breakfast",
    category: "Morning Ritual",
    description: "Start your day the Kashmiri way — with saffron Kahwa, fresh Girda bread, local honey, walnut chutney, and the finest Kashmiri cheeses.",
    price: "Complimentary for guests",
    gradient: "linear-gradient(135deg, #1a2a0a, #2a4a1a)",
    image: "https://res.cloudinary.com/dhnglltpo/image/upload/v1779776247/royal-cliff-resort-breakfast_r97xul.webp",
    items: ["Saffron Kahwa", "Girda & Lavasa bread", "Kashmiri Harissa", "Eggs your way", "Fresh fruit", "Local honey & jams", "Nun Chai", "Sheer Chai"],
    timing: "7:00 AM — 11:00 AM",
    icon: "☕",
  },
  {
    title: "All Day Dining",
    category: "Restaurant",
    description: "Our all-day restaurant serves a curated mix of Kashmiri, North Indian, and continental dishes prepared with locally sourced ingredients.",
    price: "À la carte",
    gradient: "linear-gradient(135deg, #0a1a2a, #1a3a4a)",
    image: "https://res.cloudinary.com/dhnglltpo/image/upload/v1779776248/royal-cliff-resort-all-day-dining_e5udvd.webp",
    items: ["Kashmiri Saag", "Mutton Seekh", "Dal Makhani", "Paneer dishes", "Grilled trout", "Pasta & pizzas", "Fresh salads", "Desserts"],
    timing: "12:00 PM — 10:00 PM",
    icon: "🍽️",
  },
  {
    title: "High Tea & Snacks",
    category: "Afternoon Retreat",
    description: "Join us for a leisurely afternoon tea on the cliff-side terrace. Watch the valley glow gold as you sip on premium Kashmiri teas and local pastries.",
    price: "₹800 per person",
    gradient: "linear-gradient(135deg, #1a1a0a, #3a3010)",
    image: "https://res.cloudinary.com/dhnglltpo/image/upload/v1779776247/royal-cliff-resort-high-tea-and-snacks_a0h3bp.webp",
    items: ["Kashmiri Kahwa", "Darjeeling teas", "Kashmiri cookies", "Walnut cake", "Saffron pastries", "Local snacks", "Fresh juices", "Seasonal fruits"],
    timing: "3:00 PM — 6:00 PM",
    icon: "🫖",
  },
];

const specialDiets = [
  { icon: "🌱", label: "Vegetarian", desc: "Full vegetarian menu available" },
  { icon: "🌿", label: "Vegan", desc: "Plant-based options on request" },
  { icon: "🌾", label: "Gluten Free", desc: "Gluten-free preparations available" },
  { icon: "🥜", label: "Nut Allergy", desc: "Allergen-free options on request" },
];

export default function DiningPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
<div
  style={{
    height: "320px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "var(--nav-h)",
  }}
>
  {/* Background image */}
  <img
    src="https://res.cloudinary.com/dhnglltpo/image/upload/v1779773455/royal-cliff-resort-dining-page-header-banner_izjo0v.webp"
    alt="Rooms & Suites at Royal Cliff Resort"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
  />

  {/* Dark overlay */}
  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,12,15,0.45) 0%, rgba(10,12,15,0.65) 100%)" }} />

  <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
    <span style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)" }}>— TASTE OF KASHMIR —</span>
    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, marginTop: "0.5rem" }}>
      Dining &{" "}
      <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Cuisine</em>
    </h1>
    <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", marginTop: "0.8rem", fontStyle: "italic" }}>
      Where every meal is a journey through Kashmir's legendary culinary heritage
    </p>
  </div>
</div>

      {/* Intro */}
      <section style={{ padding: "80px 0", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "1rem" }}>
            — OUR PHILOSOPHY —
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "var(--dark)", marginBottom: "1.5rem" }}>
            Food is the Soul of <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Kashmiri Culture</em>
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
            At Royal Cliff Resort, we believe food tells the story of a place. Every dish we serve is crafted using locally sourced ingredients, traditional recipes passed down through generations, and the finest Kashmiri spices — saffron, dry ginger, cardamom and fennel.
          </p>
        </div>
      </section>

      {/* Menu Cards */}
      <section style={{ padding: "0 0 100px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {menus.map((menu, i) => (
              <div
                key={menu.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                  gap: "4rem",
                  alignItems: "center",
                  direction: i % 2 === 0 ? "ltr" : "rtl",
                }}
                className="about-grid"
              >
                {/* Image */}
<div style={{ direction: "ltr" }}>
  <div
    style={{
      height: "380px",
      borderRadius: "4px",
      position: "relative",
      overflow: "hidden",
      background: menu.gradient,
    }}
  >
    <img
      src={menu.image}
      alt={menu.title}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    />
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.05))" }} />
  </div>
</div>

                {/* Content */}
                <div style={{ direction: "ltr" }}>
                  <p style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                    {menu.category}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "var(--dark)", marginBottom: "1rem" }}>
                    {menu.title}
                  </h2>
                  <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginBottom: "1.2rem" }} />
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                    {menu.description}
                  </p>

                  {/* Menu items */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem", marginBottom: "1.5rem" }}>
                    {menu.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-ui)" }}>
                        <span style={{ color: "var(--gold)", fontSize: "0.65rem" }}>◆</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "2rem", paddingTop: "1.2rem", borderTop: "1px solid #f0ead8" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: "0.52rem", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "3px" }}>Timing</div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--text)" }}>{menu.timing}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: "0.52rem", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "3px" }}>Price</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--gold)", fontWeight: 400 }}>{menu.price}</div>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-gold-solid">
                    Reserve a Table
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Diets */}
      <section style={{ padding: "80px 0", background: "var(--dark)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>
              — DIETARY REQUIREMENTS —
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#fff" }}>
              We Cater to <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>All Needs</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="features-grid-container">
            {specialDiets.map((diet) => (
              <div
                key={diet.label}
                style={{ padding: "2rem", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "4px", textAlign: "center", transition: "all 0.35s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,169,110,0.4)"; el.style.background = "rgba(201,169,110,0.05)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,169,110,0.15)"; el.style.background = "transparent"; }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{diet.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold-pale)", marginBottom: "0.5rem", fontWeight: 400 }}>{diet.label}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{diet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", marginBottom: "1rem" }}>
            — RESERVE YOUR TABLE —
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--dark)", marginBottom: "1rem" }}>
            A Feast Worthy of <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Kashmir</em>
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
            Book your dining experience in advance to secure your preferred timing and special arrangements.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold-solid">Reserve a Table</Link>
            <a href="https://wa.me/919622299302" target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}