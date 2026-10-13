import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/sanity-image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Allow Sanity Studio to work
  transpilePackages: ["sanity", "next-sanity"],
};

export default nextConfig;

initOpenNextCloudflareForDev();