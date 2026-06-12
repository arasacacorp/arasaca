import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Технологии",
  description:
    "Цифровая трансформация и ИТ-решения от Арасака. ИТ-стратегия, аудит, разработка систем, промышленная автоматизация и корпоративные инновации.",
  path: "/services/technologies",
  keywords: [
    "технологии",
    "цифровая трансформация",
    "ИТ-решения",
    "автоматизация",
    "инновации",
    "Арасака",
  ],
});

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
