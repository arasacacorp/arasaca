import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Стартапы и инновации",
  description:
    "Поддержка стартапов и инноваций от Арасака. Сопровождение от идеи до масштабирования, R&D, корпоративные инновации и привлечение инвестиций.",
  path: "/services/startups",
  keywords: [
    "стартапы",
    "инновации",
    "R&D",
    "венчур",
    "масштабирование",
    "Арасака",
  ],
});

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
