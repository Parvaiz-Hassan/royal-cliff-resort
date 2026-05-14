import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Travel guides, Kashmir culture, adventure tips and stories from Royal Cliff Resort, Pahalgam.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}