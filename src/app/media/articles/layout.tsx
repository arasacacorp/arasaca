import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Статьи",
  description:
    "Экспертные статьи Арасака по консалтингу, управлению, инвестициям и цифровой трансформации бизнеса.",
  path: "/media/articles",
  keywords: ["статьи", "экспертные публикации", "консалтинг", "управление", "Арасака"],
});

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
