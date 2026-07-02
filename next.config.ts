import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production: standalone-сборка для деплоя на VPS (Cloud.ru)
  // Создаст .next/standalone с автономным server.js + минимальные node_modules
  output: "standalone",

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  async redirects() {
    return [
      // ── Orphan analytics routes → canonical ──
      {
        source: "/services/research",
        destination: "/services/analytics",
        permanent: true,
      },
      {
        source: "/services/data-analytics",
        destination: "/services/analytics/data-analytics",
        permanent: true,
      },
      {
        source: "/services/economic-research",
        destination: "/services/analytics/economic-research",
        permanent: true,
      },
      {
        source: "/services/market-research",
        destination: "/services/analytics/market-analytics",
        permanent: true,
      },
      // ── Orphan urban routes → canonical territorial-development ──
      {
        source: "/services/urban",
        destination: "/services/territorial-development",
        permanent: true,
      },
      {
        source: "/services/urban/master-planning",
        destination: "/services/territorial-development/spatial-strategic-planning",
        permanent: true,
      },
      {
        source: "/services/urban/territory-economics",
        destination: "/services/territorial-development/economic-modeling",
        permanent: true,
      },
      {
        source: "/services/urban/infrastructure",
        destination: "/services/territorial-development/implementation-mechanisms",
        permanent: true,
      },
      // ── Removed press-center sub-pages → /press-center ──
      {
        source: "/press-center/news",
        destination: "/press-center",
        permanent: true,
      },
      {
        source: "/press-center/articles",
        destination: "/press-center",
        permanent: true,
      },
      {
        source: "/press-center/insights",
        destination: "/press-center",
        permanent: true,
      },
    ];
  },
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
