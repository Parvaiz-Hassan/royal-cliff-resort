import HomeClient from "./HomeClient";
import { getRooms, getExperiences, getGallery, getTestimonials, getPosts } from "@/lib/data";

// Render on each request so content published in Sanity shows up immediately.
export const dynamic = "force-dynamic";

export default async function Home() {
  const [rooms, experiences, gallery, testimonials, posts] = await Promise.all([
    getRooms(),
    getExperiences(),
    getGallery(),
    getTestimonials(),
    getPosts(),
  ]);

  return (
    <HomeClient
      rooms={rooms}
      experiences={experiences}
      gallery={gallery}
      testimonials={testimonials}
      posts={posts}
    />
  );
}
