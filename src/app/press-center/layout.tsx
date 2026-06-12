import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Пресс-центр",
  description:
    "Пресс-центр Арасака — новости компании, пресс-релизы, статьи, аналитика, медиакит и контакты для СМИ.",
  path: "/press-center",
  keywords: [
    "пресс-центр",
    "новости",
    "пресс-релизы",
    "медиа",
    "СМИ",
    "Арасака",
    "консалтинг",
    "статьи",
  ],
});

export default function PressCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
