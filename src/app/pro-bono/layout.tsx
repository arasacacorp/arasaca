import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pro Bono",
  description:
    "Арасака оказывает консалтинговые услуги pro bono для НКО и социальных проектов: стратегия, управление проектами, аналитика.",
  path: "/pro-bono",
  keywords: ["pro bono", "НКО", "социальные проекты", "консалтинг", "Арасака", "благотворительность"],
});

export default function ProBonoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
