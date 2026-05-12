import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Royal Cliff Resort — a luxury cliff-side sanctuary in Pahalgam, Kashmir. Our story, values, and commitment to authentic Kashmiri hospitality.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}