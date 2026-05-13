import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore Royal Cliff Resort through our photo gallery — rooms, views, experiences and the breathtaking landscape of Pahalgam, Kashmir.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}