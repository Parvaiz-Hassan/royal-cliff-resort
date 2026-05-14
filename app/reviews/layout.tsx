import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description: "Read real guest reviews and testimonials for Royal Cliff Resort, Pahalgam, Kashmir.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}