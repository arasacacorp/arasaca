"use client";

import { Search, TrendingUp, BarChart3, Users, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { analyticsSubDirections } from "@/data/analyticsServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function AnalyticsPage() {
  return (
    <ServicePageTemplate
      subDirections={analyticsSubDirections}
      iconMap={{ Search, TrendingUp, BarChart3 }}
      fallbackIcon={Search}
      hero={{
        breadcrumb: "Аналитика и исследования",
        badgeText: "Экспертное направление",
        title: "Аналитика и исследования",
        subtitle: "Рыночная аналитика, экономические исследования и аналитика данных для принятия обоснованных управленческих решений на основе доказательств.",
        stats: [
          { number: "3", label: "практик", icon: Search, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
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
          { icon: Search, title: "Исследование", description: "Сбор данных, анализ рынка и конкурентов", step: "01" },
          { icon: TrendingUp, title: "Моделирование", description: "Прогнозирование, сценарный анализ и оценка рисков", step: "02" },
          { icon: BarChart3, title: "Рекомендации", description: "Стратегические выводы и план действий", step: "03" },
        ],
      }}
    />
  );
}
