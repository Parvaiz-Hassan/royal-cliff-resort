import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Discover curated Kashmir experiences at Royal Cliff Resort — trekking, shikara rides, Kashmiri spa, local cuisine and more in Pahalgam.",
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}