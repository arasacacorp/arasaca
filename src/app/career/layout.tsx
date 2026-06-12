import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Карьера",
  description:
    "Твоя карьера начинается там, где ценят идеи. Присоединяйтесь к команде Арасаки — консалтинг, аналитика, технологии и инжиниринг.",
  path: "/career",
  keywords: ["карьера", "вакансии", "работа", "консалтинг", "Арасака", "команда", "развитие"],
});

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
