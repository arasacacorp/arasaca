import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Мастер-планирование",
  description:
    "Мастер-планирование территорий от Арасака: комплексное развитие территорий, экономическое обоснование и инструменты управления инвестиционными программами.",
  path: "/services/urban/master-planning",
  keywords: [
    "мастер-планирование",
    "развитие территорий",
    "инвестиционные программы",
    "Арасака",
  ],
});

export default function MasterPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
