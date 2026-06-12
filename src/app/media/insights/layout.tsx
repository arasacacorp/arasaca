import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Инсайты",
  description:
    "Аналитика и инсайты Арасака: тренды рынка, отраслевые обзоры и исследовательские отчёты для бизнеса.",
  path: "/media/insights",
  keywords: ["инсайты", "аналитика", "тренды", "исследования", "обзоры рынка", "Арасака"],
});

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
