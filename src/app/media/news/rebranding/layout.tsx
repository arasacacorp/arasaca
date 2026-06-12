import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ребрендинг Арасака",
  description:
    "Новый визуальный образ Арасака Консалтинг отражает эволюцию компании — от консалтинга к комплексным решениям в управлении, технологиях и развитии территорий.",
  path: "/media/news/rebranding",
  keywords: [
    "ребрендинг",
    "Арасака",
    "консалтинг",
    "фирменный стиль",
    "новый бренд",
  ],
  type: "article",
});

export default function RebrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
