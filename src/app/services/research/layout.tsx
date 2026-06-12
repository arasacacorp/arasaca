import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Исследования и аналитика",
  description:
    "Комплексные исследования и аналитика от Арасака: отраслевые, рыночные и экономические исследования для обоснования стратегических решений.",
  path: "/services/research",
  keywords: [
    "исследования",
    "аналитика",
    "отраслевые исследования",
    "рыночные исследования",
    "Арасака",
  ],
});

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
