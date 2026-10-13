// Server-side Sanity data access. These run on the server (Cloudflare Worker / Vercel),
// never in the visitor's browser, so there are no CORS issues and the content
// is included in the HTML that Google and social previews receive.
import "server-only";
import { client } from "@/lib/sanity";
import {
  roomsQuery,
  roomBySlugQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  galleryQuery,
  testimonialsQuery,
  experiencesQuery,
} from "@/lib/queries";

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params);
    return (data ?? fallback) as T;
  } catch (err) {
    console.error("[sanity] fetch failed:", err);
    return fallback;
  }
}

export const getRooms = () => safeFetch<any[]>(roomsQuery, {}, []);
export const getRoom = (slug: string) => safeFetch<any | null>(roomBySlugQuery, { slug }, null);
export const getPosts = () => safeFetch<any[]>(blogPostsQuery, {}, []);
export const getPost = (slug: string) => safeFetch<any | null>(blogPostBySlugQuery, { slug }, null);
export const getGallery = () => safeFetch<any[]>(galleryQuery, {}, []);
export const getTestimonials = () => safeFetch<any[]>(testimonialsQuery, {}, []);
export const getExperiences = () => safeFetch<any[]>(experiencesQuery, {}, []);
