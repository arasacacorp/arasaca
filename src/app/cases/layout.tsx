import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Кейсы",
  description:
    "Реализованные проекты Арасаки: консалтинг, финансовое моделирование, развитие территорий, мастер-планирование и цифровая трансформация.",
  path: "/cases",
  keywords: ["кейсы", "проекты", "консалтинг", "результаты", "Арасака", "финансовое моделирование", "мастер-планирование"],
});

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
