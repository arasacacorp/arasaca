import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { territorialDevelopmentSubDirections } from "@/data/territorialDevelopmentServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

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

export default function TerritorialDevelopmentPage() {
  return (
    <ServicePageTemplate
      subDirections={territorialDevelopmentSubDirections}
      fallbackIcon="Map"
      hero={{
        breadcrumb: "Развитие территорий и урбанистика",
        badgeText: "Специальное направление",
        title: "Развитие территорий и урбанистика",
        subtitle: "Комплексное развитие территорий: от мастер-планирования и стратегического проектирования до экономического обоснования и выбора механизмов реализации. Создаём устойчивую среду для жизни и бизнеса.",
        stats: [
          { number: "3", label: "практик", icon: "MapPin", accent: C.dna },
          { number: "30+", label: "отраслей", icon: "BarChart3", accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: "Users", accent: C.orange },
          { number: "500+", label: "проектов", icon: "ClipboardList", accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления развития территорий",
        subtitle: "Три ключевых направления для комплексного развития территорий",
        basePath: "/services/territorial-development",
      }}
      approach={{
        subtitle: "От концепции до реализации: создаём комплексные решения для развития территорий, учитывая экономические, социальные и пространственные факторы.",
        steps: [
          { icon: "Map", title: "Анализ и планирование", description: "Диагностика территории и разработка стратегических документов", step: "01" },
          { icon: "Calculator", title: "Экономическое обоснование", description: "Финансовое моделирование и расчёт эффектов", step: "02" },
          { icon: "Settings", title: "Реализация", description: "Выбор механизмов и сопровождение проектов", step: "03" },
        ],
      }}
    />
  );
}
