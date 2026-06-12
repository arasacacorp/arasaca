import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Рыночная аналитика",
  description:
    "Рыночная аналитика Арасака: анализ конкурентной среды, оценка ёмкости рынков, бенчмаркинг и исследования потребителей.",
  path: "/services/market-research",
  keywords: [
    "рыночная аналитика",
    "анализ конкурентов",
    "исследования рынка",
    "бенчмаркинг",
    "Арасака",
  ],
});

export default function MarketResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
