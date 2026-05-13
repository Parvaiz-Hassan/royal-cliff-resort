import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dining & Meals",
  description: "Experience authentic Kashmiri cuisine at Royal Cliff Resort. From traditional Wazwan feasts to Kahwa breakfasts and international fare.",
};

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}