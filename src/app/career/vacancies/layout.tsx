import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Вакансии",
  description:
    "Открытые вакансии в Арасаке: консалтинг, аналитика, инжиниринг, технологии. Санкт-Петербург, Москва. Отправьте резюме на info@arasaca.ru.",
  path: "/career/vacancies",
  keywords: ["вакансии", "консалтинг", "аналитика", "инжиниринг", "Арасака", "работа"],
});

export default function VacanciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
