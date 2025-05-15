import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["www.notion.so", "notion.so", "images.unsplash.com", "prod-files-secure.s3.us-west-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
