"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
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
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        message: "",
      });
    }, 1500);
  };

  const contactDetails = [
    {
      label: "Phone & WhatsApp",
      value: "+91 96222 99302",
      href: "tel:+919622299302",
      icon: "📞",
    },
    {
      label: "Email Enquiries",
      value: "contact@royalcliffresort.com",
      href: "mailto:contact@royalcliffresort.com",
      icon: "✉️",
    },
    {
      label: "Address",
      value: "Near BP Road, Dalseer, Pahalgam, Jammu & Kashmir — 192125",
      href: null,
      icon: "📍",
    },
  ];

  return (
    <section
      id="contact"
      style={{ background: "#fff9f0", padding: "60px 0" }}
    >
      <div
        style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}
      >
        <div
            className="contact-grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "5rem",
              alignItems: "start",
            }}
          >
          {/* Left — Info */}
          <div>
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
              — Get in Touch —
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--dark)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Plan Your{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Kashmir
              </em>
              <br />
              Journey
            </h2>
            <div
              style={{
                width: "60px",
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--gold), var(--gold-light))",
                marginBottom: "1.5rem",
              }}
            />
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-muted)",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
                fontFamily: "var(--font-ui)",
              }}
            >
              Whether you are planning a romantic escape, a family vacation,
              or a corporate retreat — our team is here to make it
              extraordinary.
            </p>

            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "1.8rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: 0,
                    background: "var(--gold-pale)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {detail.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      marginBottom: "0.3rem",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {detail.label}
                  </div>
                  {detail.href ? (
                    <a href={detail.href} style={{ fontSize: "0.9rem", color: "var(--gold)", fontFamily: "var(--font-ui)" }}>
                      {detail.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: "0.9rem", color: "var(--text)", fontFamily: "var(--font-ui)" }}>
                      {detail.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                marginTop: "1rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.1034882784124!2d75.2628125!3d33.892666999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2153ec89d18a7%3A0x49c0f01f46d561ff!2sRoyal%20Cliff%20Resort!5e1!3m2!1sen!2sin!4v1779261524318!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                title="Royal Cliff Resort Location"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "2.5rem",
              boxShadow: "0 8px 40px rgba(26,22,18,0.10)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "0.4rem",
              }}
            >
              Send an Enquiry
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: "2rem",
                fontFamily: "var(--font-ui)",
              }}
            >
              We respond within 2 hours during business hours.
            </p>

            {status === "sent" ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  ✓
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    color: "var(--dark)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message Sent!
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  We will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "1.5rem",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.8rem 1.8rem",
                    background: "var(--gold)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    style={inputStyle}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Check-in Date</label>
                    <input
                      name="checkIn"
                      type="date"
                      value={form.checkIn}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Check-out Date</label>
                    <input
                      name="checkOut"
                      type="date"
                      value={form.checkOut}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Room Type</label>
                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    style={inputStyle}
                  >
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
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your trip, special requirements, or any questions..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "110px",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold-solid"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.65rem",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.45rem",
  fontFamily: "var(--font-ui)",
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