"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ firstName: "", lastName: "", email: "", phone: "", checkIn: "", checkOut: "", roomType: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "50vh",
          background: "linear-gradient(135deg, #0a0c0f 0%, #1a1a2a 50%, #0a0c0f 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "var(--nav-h)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
            <polygon points="0,400 200,100 400,220 600,50 800,180 1000,30 1200,150 1440,80 1440,400" fill="#c9a96e" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>
            WE ARE HERE FOR YOU
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1 }}>
            Get in <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Touch</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>
            We respond within 2 hours during business hours
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section style={{ padding: "60px 0", background: "var(--dark)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="features-grid-container">
            {[
              { icon: "📞", label: "Phone & WhatsApp", value: "+91 96222 99302", href: "tel:+919622299302", sub: "Available 9AM - 9PM" },
              { icon: "✉️", label: "Email", value: "contact@royalcliffresort.com", href: "mailto:contact@royalcliffresort.com", sub: "We reply within 2 hours" },
              { icon: "💬", label: "WhatsApp", value: "Chat with us now", href: "https://wa.me/919622299302", sub: "Instant responses" },
              { icon: "📍", label: "Address", value: "Near BP Road, Pahalgam", href: null, sub: "Jammu & Kashmir — 192125" },
            ].map((item) => (
              <div
                key={item.label}
                style={{ padding: "2rem 1.5rem", border: "1px solid rgba(201,169,110,0.15)", borderRadius: "4px", textAlign: "center", transition: "all 0.35s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,169,110,0.4)"; el.style.background = "rgba(201,169,110,0.05)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,169,110,0.15)"; el.style.background = "transparent"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", display: "block", marginBottom: "0.3rem" }}>
                    {item.value}
                  </a>
                ) : (
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginBottom: "0.3rem" }}>
                    {item.value}
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid-container">

          {/* Form */}
          <div style={{ background: "#fff", borderRadius: "6px", padding: "2.5rem", boxShadow: "0 8px 40px rgba(26,22,18,0.08)", border: "1px solid rgba(201,169,110,0.15)" }}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", marginBottom: "0.8rem" }}>— SEND A MESSAGE —</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--dark)", marginBottom: "0.4rem" }}>
              Plan Your Stay
            </h2>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Fill in the form and our team will get back to you within 2 hours.
            </p>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--dark)", marginBottom: "0.5rem", fontWeight: 400 }}>Message Sent!</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>We will get back to you within 2 hours.</p>
                <button onClick={() => setStatus("idle")} className="btn-gold-solid">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your name" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Check-in Date</label>
                    <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Check-out Date</label>
                    <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} style={inputStyle}>
                    <option value="">Select a subject</option>
                    <option>Room Booking Enquiry</option>
                    <option>Special Occasion Package</option>
                    <option>Group Booking</option>
                    <option>Experience Booking</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Room Type</label>
                  <select name="roomType" value={form.roomType} onChange={handleChange} style={inputStyle}>
                    <option value="">Not sure yet</option>
                    <option>Deluxe Valley View</option>
                    <option>Premium Mountain Suite</option>
                    <option>Royal Cliff Suite</option>
                    <option>Honeymoon Cottage</option>
                    <option>Grand Family Suite</option>
                    <option>Superior Forest View</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your trip, special requirements, or any questions..." rows={4} style={{ ...inputStyle, resize: "vertical", minHeight: "110px" }} />
                </div>
                <button type="submit" disabled={status === "sending"} className="btn-gold-solid" style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}>
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", marginBottom: "0.8rem" }}>— FIND US —</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--dark)", marginBottom: "1.5rem" }}>
              Our Location
            </h2>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Nestled near BP Road in the heart of Pahalgam, Royal Cliff Resort is easily accessible from Srinagar Airport (95 km) and Jammu Railway Station (270 km).
            </p>

            {/* Map */}
            <div style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.2)", marginBottom: "2rem", boxShadow: "0 8px 30px rgba(26,22,18,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0!2d75.3162!3d34.0161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA1LjgiTiA3NcKwMTgnNTguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                title="Royal Cliff Resort Location"
              />
            </div>

            {/* Quick info */}
            {[
              { label: "Check-in", value: "2:00 PM onwards" },
              { label: "Check-out", value: "11:00 AM" },
              { label: "Reception", value: "Open 24/7" },
              { label: "Languages", value: "English, Hindi, Urdu, Kashmiri" },
            ].map((item, i) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0", borderBottom: i < 3 ? "1px solid #f0ead8" : "none" }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>{item.label}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-label)",
  fontSize: "0.58rem",
  fontWeight: 500,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.45rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  border: "1.5px solid #e8e2da",
  borderRadius: "3px",
  fontFamily: "var(--font-ui)",
  fontSize: "0.88rem",
  color: "var(--text)",
  background: "var(--cream)",
  outline: "none",
};