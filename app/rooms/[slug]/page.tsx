import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetailClient from "./RoomDetailClient";
import { getRoom } from "@/lib/data";
import { urlFor } from "@/lib/sanity";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = await getRoom(slug);
  if (!room) return { title: "Room not found" };

  const description =
    (room.description || "").slice(0, 155) ||
    `${room.name} at Royal Cliff Resort, Pahalgam, Kashmir.`;
  const image = room.images?.[0] ? urlFor(room.images[0]).width(1200).height(630).url() : undefined;

  return {
    title: room.name,
    description,
    alternates: { canonical: `/rooms/${slug}` },
    openGraph: {
      title: `${room.name} | Royal Cliff Resort`,
      description,
      url: `/rooms/${slug}`,
      images: image ? [{ url: image, width: 1200, height: 630, alt: room.name }] : undefined,
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = await getRoom(slug);
  if (!room) notFound();
  return <RoomDetailClient slug={slug} initialRoom={room} />;
}
