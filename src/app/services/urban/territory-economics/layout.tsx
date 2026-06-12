import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Экономика территорий",
  description:
    "Экономика территорий от Арасака: экономическое моделирование, оценка эффективности проектов развития и анализ социально-экономического потенциала территорий.",
  path: "/services/urban/territory-economics",
  keywords: [
    "экономика территорий",
    "экономическое моделирование",
    "социально-экономический анализ",
    "Арасака",
  ],
});

export default function TerritoryEconomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
