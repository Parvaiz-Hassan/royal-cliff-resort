import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { getPosts } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogClient posts={posts} />;
}
