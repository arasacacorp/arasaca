"use client";

import { RefreshCw, Shield, Code, Lightbulb, Cog, Cloud, BarChart3, Users, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { technologiesSubDirections } from "@/data/technologiesServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function TechnologiesPage() {
  return (
    <ServicePageTemplate
      subDirections={technologiesSubDirections}
      iconMap={{ RefreshCw, Shield, Code, Lightbulb, Cog, Cloud }}
      fallbackIcon={Code}
      hero={{
        breadcrumb: "Технологии и цифровизация",
        badgeText: "Экспертное направление",
        title: "Технологии и цифровизация",
        subtitle: "Цифровая трансформация, технологический консалтинг, разработка IT-решений и автоматизация бизнес-процессов для устойчивого развития.",
        stats: [
          { number: String(technologiesSubDirections.length), label: "практик", icon: Code, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления технологий и цифровизации",
        subtitle: "Шесть ключевых направлений цифровой трансформации бизнеса",
        basePath: "/services/technologies",
      }}
      approach={{
        subtitle: "От аудита до внедрения: проектируем IT-ландшафт, обеспечиваем кибербезопасность и автоматизируем процессы.",
        steps: [
          { icon: RefreshCw, title: "Аудит", description: "Диагностика текущего IT-ландшафта и процессов", step: "01" },
          { icon: Code, title: "Проектирование", description: "Разработка архитектуры решений и дорожной карты", step: "02" },
          { icon: Cloud, title: "Внедрение", description: "Разработка, интеграция и запуск IT-систем", step: "03" },
        ],
      }}
    />
  );
}
