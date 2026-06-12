import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Инжиниринг",
  description:
    "Инжиниринговые решения Арасака: предпроектная проработка, экспертиза капитальных проектов, управление строительством и инфраструктурные проекты.",
  path: "/services/engineering",
  keywords: [
    "инжиниринг",
    "строительство",
    "экспертиза проектов",
    "управление стройкой",
    "капитальные проекты",
    "Арасака",
  ],
});

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
