import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Развитие территорий",
  description:
    "Развитие территорий от Арасака: мастер-планирование, экономическое моделирование, пространственное планирование и механизмы реализации территориальных проектов.",
  path: "/services/territorial-development",
  keywords: [
    "развитие территорий",
    "мастер-планирование",
    "экономическое моделирование",
    "пространственное планирование",
    "Арасака",
  ],
});

export default function TerritorialDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
