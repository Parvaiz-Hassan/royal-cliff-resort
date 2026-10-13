import GalleryClient from "./GalleryClient";
import { getGallery } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const items = await getGallery();
  return <GalleryClient items={items} />;
}
