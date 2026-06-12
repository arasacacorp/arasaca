import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Услуги",
  description:
    "9 направлений консалтинга Арасака: стратегический консалтинг, аналитика, технологии, инжиниринг, развитие территорий, HR, обучение, коммуникации и стартапы.",
  path: "/services",
  keywords: [
    "услуги",
    "консалтинг",
    "стратегия",
    "аналитика",
    "технологии",
    "инжиниринг",
    "Арасака",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
