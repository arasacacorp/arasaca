import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Пресс-центр",
  description:
    "Новости, статьи, исследования и аналитика от Арасака. Экспертные публикации по консалтингу, управлению и цифровой трансформации.",
  path: "/media",
  keywords: ["новости", "статьи", "публикации", "пресс-центр", "аналитика", "Арасака", "консалтинг"],
});

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
