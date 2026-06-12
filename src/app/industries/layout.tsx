import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Отрасли",
  description:
    "Экспертиза Арасака в 20+ отраслях: атомная промышленность, нефтегаз, ОПК, машиностроение, ИТ, строительство, энергетика и другие.",
  path: "/industries",
  keywords: [
    "отрасли",
    "экспертиза",
    "атомная промышленность",
    "нефтегаз",
    "ОПК",
    "Арасака",
    "консалтинг",
  ],
});

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
