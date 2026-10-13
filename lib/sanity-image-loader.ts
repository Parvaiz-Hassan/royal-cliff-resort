type LoaderProps = { src: string; width: number; quality?: number };

export default function sanityImageLoader({ src, width, quality }: LoaderProps) {
  // Local images from /public
  if (src.startsWith("/")) return `${src}?w=${width}`;

  const url = new URL(src);
  if (url.hostname === "cdn.sanity.io") {
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality || 75));
    url.searchParams.set("auto", "format"); // serves WebP/AVIF when supported
    url.searchParams.set("fit", "max");
    return url.toString();
  }
  return src;
}