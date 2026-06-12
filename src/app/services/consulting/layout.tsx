import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Консалтинг",
  description:
    "Стратегический, финансовый и операционный консалтинг от Арасака. Разработка стратегий, бизнес-планирование, ТЭО, управление проектами и инвестиционное проектирование.",
  path: "/services/consulting",
  keywords: [
    "консалтинг",
    "стратегический консалтинг",
    "финансовый консалтинг",
    "бизнес-план",
    "ТЭО",
    "Арасака",
    "управление проектами",
  ],
});

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
