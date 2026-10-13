import { MetadataRoute } from "next";
import { getRooms, getPosts } from "@/lib/data";

const BASE = "https://royalcliffresort.com";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [rooms, posts] = await Promise.all([getRooms(), getPosts()]);
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/rooms`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/experiences`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/dining`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/reviews`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ].map((p) => ({ ...p, lastModified: now })) as MetadataRoute.Sitemap;

  const roomUrls: MetadataRoute.Sitemap = rooms
    .filter((r: any) => r.slug)
    .map((r: any) => ({
      url: `${BASE}/rooms/${r.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const postUrls: MetadataRoute.Sitemap = posts
    .filter((p: any) => p.slug)
    .map((p: any) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticPages, ...roomUrls, ...postUrls];
}
