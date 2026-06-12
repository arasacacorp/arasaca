import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Экономические исследования",
  description:
    "Экономические исследования Арасака: отраслевые обзоры, макроэкономический анализ, оценка инвестиционной привлекательности и forecast-моделирование.",
  path: "/services/economic-research",
  keywords: [
    "экономические исследования",
    "отраслевые обзоры",
    "инвестиционный анализ",
    "Арасака",
  ],
});

export default function EconomicResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
