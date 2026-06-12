import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности ООО «Арасака»: обработка, хранение и защита персональных данных пользователей сайта.",
  path: "/privacy",
  keywords: ["политика конфиденциальности", "персональные данные", "обработка данных", "Арасака"],
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
