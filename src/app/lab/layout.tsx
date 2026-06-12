import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Арасака Лаб",
  description:
    "R&D и технологические эксперименты Арасака. Исследуем, прототипируем и создаём инновационные решения для бизнеса.",
  path: "/lab",
  keywords: ["лаборатория", "R&D", "исследования", "инновации", "прототипирование", "Арасака"],
});

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
