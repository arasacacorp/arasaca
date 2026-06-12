import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ONREZA: полноценный SSR (не статический экспорт)

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  allowedDevOrigins: [
    "preview-chat-793ed5ca-2672-49f1-8246-c5fc1e61a3d0.space-z.ai",
    "preview-chat-74280eb4-f32a-4645-af28-3038f6a8b2fd.space-z.ai",
    "preview-chat-59c0d745-4391-41a8-9204-0d6a6f06a1f8.space-z.ai",
  ],
};

export default nextConfig;
