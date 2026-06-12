import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "О компании",
  description:
    "Арасака — консалтинговая компания. Инсайты, которые двигают бизнес. Консалтинг и аутсорсинг инвестиционных проектов для среднего и крупного бизнеса.",
  path: "/about",
  keywords: ["о компании", "консалтинг", "команда", "миссия", "Арасака", "управление", "инвестиции"],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
