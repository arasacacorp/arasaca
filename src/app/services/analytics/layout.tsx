import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Аналитика и исследования",
  description:
    "Рыночная аналитика, экономические исследования и аналитика данных от Арасака. Глубокое понимание рынков и отраслей для стратегических решений.",
  path: "/services/analytics",
  keywords: [
    "аналитика",
    "исследования рынка",
    "экономические исследования",
    "анализ данных",
    "Арасака",
  ],
});

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
