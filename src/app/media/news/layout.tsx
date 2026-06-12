import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Новости",
  description:
    "Последние новости компании Арасака: новые проекты, направления, партнёрства и достижения в консалтинге.",
  path: "/media/news",
  keywords: ["новости компании", "Арасака", "пресс-релизы", "консалтинг", "события"],
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
