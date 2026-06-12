import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Урбанистика и развитие территорий",
  description:
    "Мастер-планирование, экономика территорий, инфраструктура и градостроительные решения от Арасака.",
  path: "/services/urban",
  keywords: [
    "урбанистика",
    "мастер-планирование",
    "развитие территорий",
    "градостроительство",
    "Арасака",
  ],
});

export default function UrbanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
