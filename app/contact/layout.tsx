import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Royal Cliff Resort, Pahalgam. Call, WhatsApp or email us for bookings, enquiries and reservations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}