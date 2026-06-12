import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { analyticsSubDirections } from "@/data/analyticsServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { COMPANY_STATS_SERVICE } from "@/data/companyStats";

export const metadata: Metadata = createMetadata({
  title: "Аналитика и исследования",
  description:
    "Рыночная аналитика, экономические исследования и аналитика данных от Арасака. Глубокое понимание рынков и отраслей для стратегических решений.",
  path: "/services/analytics",
  keywords: [
    "аналитика",
    "исследования рынка",
    "экономические исследования",
    "анализ данных",
    "Арасака",
  ],
});

export default function AnalyticsPage() {
  return (
    <ServicePageTemplate
      subDirections={analyticsSubDirections}
      fallbackIcon="Search"
      hero={{
        breadcrumb: "Аналитика и исследования",
        badgeText: "Экспертное направление",
        title: "Аналитика и исследования",
        subtitle: "Рыночная аналитика, экономические исследования и аналитика данных для принятия обоснованных управленческих решений на основе доказательств.",
        stats: [
          { number: "3", label: "практик", icon: "Search", accent: C.dna },
          ...COMPANY_STATS_SERVICE,
        ],
      }}
      directions={{
        title: "Направления аналитики и исследований",
        subtitle: "Три ключевых направления для принятия решений на основе данных",
        basePath: "/services/analytics",
      }}
      approach={{
        subtitle: "От сбора данных до стратегических рекомендаций: обеспечиваем аналитическую поддержку на каждом этапе принятия управленческих решений.",
        steps: [
          { icon: "Search", title: "Исследование", description: "Сбор данных, анализ рынка и конкурентов", step: "01" },
          { icon: "TrendingUp", title: "Моделирование", description: "Прогнозирование, сценарный анализ и оценка рисков", step: "02" },
          { icon: "BarChart3", title: "Рекомендации", description: "Стратегические выводы и план действий", step: "03" },
        ],
      }}
    />
  );
}
