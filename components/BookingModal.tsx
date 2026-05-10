"use client";

import { useState, useEffect } from "react";
import { Room } from "@/lib/rooms";

interface BookingModalProps {
  room: Room | null;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4;

const handleRazorpay = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          roomName: room.name,
          checkIn,
          checkOut,
          guests,
        }),
      });
      const data = await res.json();

      if (data.error) {
        // Pay later fallback if Razorpay not configured
        handlePayLater();
        return;
      }

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: data.amount,
        currency: data.currency,
        name: "Royal Cliff Resort",
        description: `${room.name} — ${nights} night${nights > 1 ? "s" : ""}`,
        order_id: data.orderId,
        prefill: { name: guestName, email: guestEmail, contact: guestPhone },
        theme: { color: "#b8963e" },
        handler: (response: RazorpayResponse) => {
          setBookingRef(response.razorpay_payment_id);
          setStep(4);
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        handlePayLater();
      }
    } catch {
      handlePayLater();
    } finally {
      setLoading(false);
    }
  };

export default function BookingModal({ room, onClose }: BookingModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "pay-later">("razorpay");
  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  useEffect(() => {
    setCheckIn(today);
    setCheckOut(tomorrow);
    setStep(1);
  }, [room]);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  if (!room) return null;

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000
    )
  );
  const subtotal = room.price * nights;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + tax;

  const handleRazorpay = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          roomName: room.name,
          checkIn,
          checkOut,
          guests,
        }),
      });
      const data = await res.json();

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: data.amount,
        currency: data.currency,
        name: "Royal Cliff Resort",
        description: `${room.name} — ${nights} night${nights > 1 ? "s" : ""}`,
        order_id: data.orderId,
        prefill: { name: guestName, email: guestEmail, contact: guestPhone },
        theme: { color: "#b8963e" },
        handler: (response: RazorpayResponse) => {
          setBookingRef(response.razorpay_payment_id);
          setStep(4);
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayLater = () => {
    setBookingRef("RCR-" + Math.random().toString(36).substr(2, 8).toUpperCase());
    setStep(4);
  };

  const handleConfirm = () => {
    if (!guestName || !guestEmail || !guestPhone) {
      alert("Please fill in all guest details.");
      return;
    }
    if (paymentMethod === "razorpay") {
      handleRazorpay();
    } else {
      handlePayLater();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3000,
        background: "rgba(26,22,18,0.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          animation: "modalIn 0.35s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.8rem 2.5rem",
            background: "var(--dark)",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                color: "#fff",
                fontWeight: 400,
              }}
            >
              Book Your Stay
            </h2>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--gold-light)",
                fontFamily: "var(--font-ui)",
                marginTop: "2px",
              }}
            >
              {room.name}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.5rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Step tabs */}
        {step < 4 && (
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #f0ead8",
            }}
          >
            {["Dates", "Guest Details", "Payment"].map((label, i) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "1rem",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color:
                    step === i + 1
                      ? "var(--gold)"
                      : step > i + 1
                      ? "var(--text-muted)"
                      : "#ccc",
                  borderBottom:
                    step === i + 1 ? "2px solid var(--gold)" : "2px solid transparent",
                  transition: "all 0.3s",
                }}
              >
                {step > i + 1 ? "✓ " : `${i + 1}. `}{label}
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div style={{ padding: "2rem 2.5rem" }}>

          {/* Step 1 — Dates */}
          {step === 1 && (
            <div>
              <h3 style={stepTitleStyle}>Select Your Dates</h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Check-in Date *</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={today}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Check-out Date *</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={inputStyle}
                >
                  {Array.from({ length: room.guests }, (_, i) => (
                    <option key={i + 1}>{i + 1} {i === 0 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              <div style={summaryBoxStyle}>
                <div style={summaryRowStyle}>
                  <span>{room.name}</span>
                  <span>{nights} night{nights > 1 ? "s" : ""}</span>
                </div>
                <div style={summaryRowStyle}>
                  <span>{"₹"}{room.price.toLocaleString("en-IN")} x {nights} night{nights > 1 ? "s" : ""}</span>
                  <span>{"₹"}{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div style={summaryRowStyle}>
                  <span>Taxes (12%)</span>
                  <span>{"₹"}{tax.toLocaleString("en-IN")}</span>
                </div>
                <div style={{ ...summaryRowStyle, fontWeight: 600, color: "var(--dark)", borderTop: "1px solid #e8e2da", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                  <span>Total</span>
                  <span style={{ color: "var(--gold)" }}>{"₹"}{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button style={primaryBtnStyle} onClick={() => setStep(2)}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Guest Details */}
          {step === 2 && (
            <div>
              <h3 style={stepTitleStyle}>Guest Details</h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="As on ID proof"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="Confirmation sent here"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Phone / WhatsApp *</label>
                <input
                  type="tel"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button style={outlineBtnStyle} onClick={() => setStep(1)}>← Back</button>
                <button
                  style={primaryBtnStyle}
                  onClick={() => {
                    if (!guestName || !guestEmail || !guestPhone) {
                      alert("Please fill in all fields.");
                      return;
                    }
                    setStep(3);
                  }}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Payment */}
          {step === 3 && (
            <div>
              <h3 style={stepTitleStyle}>Payment</h3>

              {/* Summary */}
              <div style={summaryBoxStyle}>
                <div style={summaryRowStyle}>
                  <span style={{ fontWeight: 600 }}>{room.name}</span>
                  <span>{checkIn} → {checkOut}</span>
                </div>
                <div style={{ ...summaryRowStyle, fontWeight: 600, color: "var(--dark)", borderTop: "1px solid #e8e2da", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                  <span>Total Payable</span>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>{"₹"}{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Payment methods */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Payment Method</label>
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  {[
                    { value: "razorpay", label: "💳 Pay Online", sub: "Card, UPI, Net Banking" },
                    { value: "pay-later", label: "🏨 Pay at Hotel", sub: "Full payment on arrival" },
                  ].map((method) => (
                    <div
                      key={method.value}
                      onClick={() => setPaymentMethod(method.value as "razorpay" | "pay-later")}
                      style={{
                        flex: 1,
                        minWidth: "160px",
                        padding: "1rem",
                        border: "2px solid",
                        borderColor: paymentMethod === method.value ? "var(--gold)" : "#e8e2da",
                        borderRadius: "6px",
                        cursor: "pointer",
                        background: paymentMethod === method.value ? "var(--gold-pale)" : "#fff",
                        transition: "all 0.3s",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.9rem", fontWeight: 600, color: "var(--dark)" }}>
                        {method.label}
                      </div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "3px" }}>
                        {method.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {paymentMethod === "razorpay" && (
                <div
                  style={{
                    background: "var(--cream)",
                    borderRadius: "4px",
                    padding: "0.8rem 1rem",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-ui)",
                    marginBottom: "1.5rem",
                  }}
                >
                  🔒 Secured by Razorpay. Supports Credit/Debit Card, UPI, Net Banking, and Wallets.
                </div>
              )}

              {paymentMethod === "pay-later" && (
                <div
                  style={{
                    background: "var(--cream)",
                    borderRadius: "4px",
                    padding: "0.8rem 1rem",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-ui)",
                    marginBottom: "1.5rem",
                  }}
                >
                  📋 Your booking will be confirmed via WhatsApp. Full payment is due at check-in.
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button style={outlineBtnStyle} onClick={() => setStep(2)}>← Back</button>
                <button
                  style={{
                    ...primaryBtnStyle,
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  onClick={handleConfirm}
                  disabled={loading}
                >
                  {loading ? "Processing..." : `Confirm & Pay ₹${total.toLocaleString("en-IN")}`}
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Confirmation */}
          {step === 4 && (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "rgba(184,150,62,0.12)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "1.8rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "var(--dark)",
                  marginBottom: "0.8rem",
                }}
              >
                Booking Confirmed!
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-ui)",
                  lineHeight: 1.8,
                  maxWidth: "380px",
                  margin: "0 auto 1.5rem",
                }}
              >
                Your stay at Royal Cliff Resort has been confirmed.
                A confirmation has been sent to{" "}
                <strong>{guestEmail}</strong>.
              </p>

              <div
                style={{
                  background: "var(--cream)",
                  borderRadius: "6px",
                  padding: "1.2rem",
                  marginBottom: "1.5rem",
                  display: "inline-block",
                  minWidth: "260px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-ui)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Booking Reference
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "var(--gold)",
                  }}
                >
                  {bookingRef}
                </div>
              </div>

              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-ui)",
                  marginBottom: "2rem",
                  lineHeight: 1.8,
                }}
              >
                <div>📍 Near BP Road, Pahalgam, Kashmir</div>
                <div>📞 +91 96222 99302</div>
                <div>✉️ contact@royalcliffresort.com</div>
              </div>

              <button style={primaryBtnStyle} onClick={onClose}>
                Done
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const stepTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.3rem",
  fontWeight: 400,
  color: "var(--dark)",
  marginBottom: "1.5rem",
};

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
  marginBottom: "0.2rem",
};

const summaryBoxStyle: React.CSSProperties = {
  background: "var(--cream)",
  borderRadius: "6px",
  padding: "1.2rem",
  marginBottom: "1.5rem",
  fontSize: "0.85rem",
  fontFamily: "var(--font-ui)",
  color: "var(--text-muted)",
};

const summaryRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.3rem 0",
};

const primaryBtnStyle: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  padding: "0.9rem 2rem",
  background: "var(--gold)",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
  transition: "background 0.3s",
};

const outlineBtnStyle: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  padding: "0.9rem 2rem",
  background: "transparent",
  color: "var(--gold)",
  border: "1.5px solid var(--gold)",
  borderRadius: "3px",
  cursor: "pointer",
};