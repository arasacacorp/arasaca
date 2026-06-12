import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Инфраструктурные проекты",
  description:
    "Управление инфраструктурными проектами Арасака: ТЭО, проектирование, экспертиза и сопровождение строительства транспортной и инженерной инфраструктуры.",
  path: "/services/urban/infrastructure",
  keywords: [
    "инфраструктура",
    "строительство",
    "ТЭО",
    "инженерная инфраструктура",
    "Арасака",
  ],
});

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
