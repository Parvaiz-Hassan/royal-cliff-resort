import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Cancellation and refund policy for Royal Cliff Resort, Pahalgam, Kashmir.",
};

const sections = [
  {
    title: "Standard Cancellation Policy",
    content: [
      "Cancellations made 48 hours or more before check-in: Full refund of the advance payment.",
      "Cancellations made 24–48 hours before check-in: 50% refund of the advance payment.",
      "Cancellations made less than 24 hours before check-in: No refund.",
      "No-show without prior notice: Full booking amount will be charged.",
    ],
  },
  {
    title: "Peak Season Policy (April–June, October, December–January)",
    content: [
      "Cancellations made 7 days or more before check-in: Full refund.",
      "Cancellations made 3–7 days before check-in: 50% refund.",
      "Cancellations made less than 3 days before check-in: No refund.",
      "Peak season bookings require a minimum 30% non-refundable deposit.",
    ],
  },
  {
    title: "How to Cancel",
    content: [
      "To cancel a booking, contact us via email at contact@royalcliffresort.com.",
      "Alternatively, call or WhatsApp us at +91 96222 99302.",
      "Please quote your booking reference number when cancelling.",
      "Cancellations are only confirmed upon receipt of a written acknowledgment from us.",
    ],
  },
  {
    title: "Refund Process",
    content: [
      "Refunds are processed within 5–7 business days of cancellation confirmation.",
      "Refunds are credited to the original payment method used at the time of booking.",
      "Bank transfer fees, if any, are borne by the guest.",
      "Razorpay payment gateway charges (if applicable) are non-refundable.",
    ],
  },
  {
    title: "Force Majeure",
    content: [
      "In case of natural disasters, government restrictions, or other force majeure events, we will offer a full credit note valid for 12 months.",
      "Refunds in force majeure situations are at the discretion of the resort management.",
      "We strongly recommend purchasing travel insurance for all bookings.",
    ],
  },
  {
    title: "Modifications",
    content: [
      "Date changes are subject to availability and may incur a modification fee of ₹500.",
      "Room upgrades at the time of modification are charged at the difference in rate.",
      "Modifications requested less than 24 hours before check-in may not be possible.",
    ],
  },
];

export default function CancellationPage() {
  return (
    <>
      <Navbar />
      <PolicyHero title="Cancellation Policy" subtitle="Our fair and transparent cancellation and refund policy" />
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