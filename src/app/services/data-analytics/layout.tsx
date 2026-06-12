import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Аналитика данных",
  description:
    "Аналитика данных от Арасака: BI-системы, визуализация, data engineering и машинное обучение для принятия управленческих решений.",
  path: "/services/data-analytics",
  keywords: [
    "аналитика данных",
    "BI",
    "data engineering",
    "машинное обучение",
    "визуализация данных",
    "Арасака",
  ],
});

export default function DataAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
