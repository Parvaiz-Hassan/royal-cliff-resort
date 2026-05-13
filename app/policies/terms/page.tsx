import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Royal Cliff Resort, Pahalgam, Kashmir.",
};

const sections = [
  {
    title: "1. Booking & Reservations",
    content: [
      "All bookings are subject to availability and confirmation by Royal Cliff Resort.",
      "A booking is confirmed only upon receipt of the required advance payment or booking confirmation email.",
      "The resort reserves the right to decline any booking without providing a reason.",
      "Guests must provide accurate personal information at the time of booking.",
      "Group bookings of 5 or more rooms require a separate group booking agreement.",
    ],
  },
  {
    title: "2. Check-in & Check-out",
    content: [
      "Standard check-in time is 2:00 PM and check-out time is 11:00 AM.",
      "Early check-in and late check-out are subject to availability and may incur additional charges.",
      "Guests must present valid government-issued photo ID at check-in.",
      "The resort reserves the right to refuse check-in to guests who cannot provide valid identification.",
    ],
  },
  {
    title: "3. Guest Conduct",
    content: [
      "Guests are expected to maintain decorum and respect fellow guests and staff at all times.",
      "Noise levels must be kept to a minimum between 10:00 PM and 8:00 AM.",
      "The resort is a non-smoking property. Smoking is only permitted in designated outdoor areas.",
      "Pets are not permitted on the premises.",
      "Any damage caused to resort property will be charged to the guest's account.",
    ],
  },
  {
    title: "4. Liability",
    content: [
      "Royal Cliff Resort is not liable for loss or damage to guest property.",
      "Guests are advised to use the in-room safe for valuables.",
      "The resort is not responsible for any injuries sustained during activities organized by third parties.",
      "Adventure activities are undertaken at the guest's own risk.",
    ],
  },
  {
    title: "5. Privacy",
    content: [
      "Guest information is collected solely for the purpose of providing resort services.",
      "We do not share guest data with third parties except as required by law.",
      "CCTV cameras are in operation in common areas for security purposes.",
    ],
  },
  {
    title: "6. Governing Law",
    content: [
      "These terms are governed by the laws of Jammu & Kashmir, India.",
      "Any disputes shall be subject to the jurisdiction of courts in Anantnag, Jammu & Kashmir.",
      "Royal Cliff Resort reserves the right to modify these terms at any time without prior notice.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PolicyHero title="Terms & Conditions" subtitle="Please read these terms carefully before making a reservation" />
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