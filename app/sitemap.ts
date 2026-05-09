import { MetadataRoute } from "next";
import { rooms } from "@/lib/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const roomUrls = rooms.map((room) => ({
    url: `https://royalcliffresort.com/rooms/${room.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://royalcliffresort.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://royalcliffresort.com/rooms",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...roomUrls,
  ];
}