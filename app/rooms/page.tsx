import type { Metadata } from "next";
import RoomsClient from "./RoomsClient";
import { getRooms } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore valley-view rooms and luxury suites at Royal Cliff Resort, Pahalgam. Compare sizes, amenities and prices, and book direct for the best rate.",
  alternates: { canonical: "/rooms" },
};

export default async function RoomsPage() {
  const rooms = await getRooms();
  return <RoomsClient sanityRooms={rooms} />;
}
