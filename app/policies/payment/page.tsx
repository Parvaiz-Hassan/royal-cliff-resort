import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Policy",
  description: "Payment methods, security and billing policy for Royal Cliff Resort, Pahalgam, Kashmir.",
};

const sections = [
  {
    title: "Accepted Payment Methods",
    content: [
      "Credit Cards — Visa, Mastercard, American Express, RuPay.",
      "Debit Cards — all major Indian bank debit cards.",
      "UPI — Google Pay, PhonePe, Paytm, BHIM and all UPI apps.",
      "Net Banking — all major Indian banks.",
      "Cash — accepted at the property for walk-in guests.",
      "Bank Transfer — available for corporate and group bookings.",
    ],
  },
  {
    title: "Online Payment Security",
    content: [
      "All online payments are processed through Razorpay — a PCI-DSS Level 1 certified payment gateway.",
      "We use 256-bit SSL encryption for all transactions.",
      "We do not store credit or debit card information on our servers.",
      "3D Secure authentication is enabled for all card transactions.",
      "In case of any suspicious transaction, contact us immediately at +91 96222 99302.",
    ],
  },
  {
    title: "Advance Payment",
    content: [
      "A 30% advance is required to confirm all bookings.",
      "During peak season (April–June, October, December–January), a 50% advance is required.",
      "Group bookings of 5 or more rooms require 50% advance at the time of booking.",
      "The remaining balance is due at check-in.",
    ],
  },
  {
    title: "Billing & Invoices",
    content: [
      "A GST invoice is provided for all bookings upon request.",
      "Our GSTIN is available on request — please mention this requirement at the time of booking.",
      "Corporate billing with credit terms is available for registered companies — contact us for details.",
      "All prices are inclusive of applicable taxes unless stated otherwise.",
    ],
  },
  {
    title: "Currency",
    content: [
      "All prices are quoted in Indian Rupees (INR).",
      "International guests may pay in foreign currency at the prevailing exchange rate.",
      "We accept USD, EUR, and GBP — exchange rates are updated daily.",
    ],
  },
  {
    title: "Failed Transactions",
    content: [
      "In case of a failed transaction, the amount will be automatically refunded within 5–7 business days.",
      "If your account is debited but booking is not confirmed, contact us immediately.",
      "We are not responsible for delays caused by your bank or payment processor.",
    ],
  },
];

export default function PaymentPage() {
  return (
    <>
      <Navbar />
      <PolicyHero title="Payment Policy" subtitle="Secure, transparent and flexible payment options" />
      <PolicyContent sections={sections} lastUpdated="January 2025" />
      <Footer />
    </>
  );
}

function PolicyHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ height: "40vh", background: "linear-gradient(135deg, #0a0c0f 0%, #1a1a2a 50%, #0a0c0f 100%)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", overflow: "hidden", paddingTop: "var(--nav-h)" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
          <polygon points="0,400 200,100 400,220 600,50 800,180 1000,30 1200,150 1440,80 1440,400" fill="#c9a96e" />
        </svg>
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <p style={{ fontFamily: "var(--font-label)", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold-light)", marginBottom: "1rem" }}>ROYAL CLIFF RESORT</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#fff" }}>{title}</h1>
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "1.2rem auto" }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>{subtitle}</p>
      </div>
    </div>
  );
}

function PolicyContent({ sections, lastUpdated }: { sections: { title: string; content: string[] }[]; lastUpdated: string }) {
  return (
    <section style={{ padding: "80px 0 100px", background: "var(--cream)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "3rem", paddingBottom: "1.5rem", borderBottom: "1px solid #f0ead8" }}>
          Last updated: {lastUpdated}
        </p>
        {sections.map((section) => (
          <div key={section.title} style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--dark)", marginBottom: "1.2rem" }}>
              {section.title}
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {section.content.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.8rem", fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "0.8rem" }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "0.1rem" }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}