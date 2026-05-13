import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Royal Cliff Resort, Pahalgam, Kashmir.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal identification information — name, email address, phone number, and postal address.",
      "Payment information — processed securely through Razorpay. We do not store card details.",
      "Booking information — check-in/out dates, room preferences, and special requests.",
      "Device and usage data — IP address, browser type, and pages visited on our website.",
      "Communication records — emails, WhatsApp messages, and enquiry form submissions.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To process and confirm your bookings and reservations.",
      "To communicate with you about your stay, special offers, and updates.",
      "To personalize your experience and remember your preferences.",
      "To process payments securely through our payment gateway.",
      "To comply with legal and regulatory requirements.",
      "To improve our services based on feedback and usage patterns.",
    ],
  },
  {
    title: "3. Data Protection",
    content: [
      "All data is stored on secure servers with industry-standard encryption.",
      "Payment transactions are processed through Razorpay's PCI-DSS compliant platform.",
      "We implement strict access controls — only authorized staff can access guest data.",
      "We do not sell, trade, or rent your personal information to third parties.",
    ],
  },
  {
    title: "4. Cookies",
    content: [
      "Our website uses cookies to enhance your browsing experience.",
      "Essential cookies are required for the website to function properly.",
      "Analytics cookies help us understand how visitors use our site.",
      "You can disable cookies in your browser settings, though this may affect site functionality.",
    ],
  },
  {
    title: "5. Your Rights",
    content: [
      "You have the right to access the personal data we hold about you.",
      "You may request correction of inaccurate or incomplete data.",
      "You may request deletion of your personal data, subject to legal obligations.",
      "You may opt out of marketing communications at any time.",
      "To exercise these rights, contact us at contact@royalcliffresort.com.",
    ],
  },
  {
    title: "6. Contact",
    content: [
      "For privacy-related queries, contact us at contact@royalcliffresort.com.",
      "Phone: +91 96222 99302",
      "Address: Near BP Road, Pahalgam, Jammu & Kashmir — 192125",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PolicyHero title="Privacy Policy" subtitle="How we collect, use and protect your personal information" />
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