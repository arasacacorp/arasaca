"use client";

import { Wrench, FileSearch, Microscope, HardHat, BarChart3, Users, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { engineeringSubDirections } from "@/data/engineeringServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function EngineeringPage() {
  return (
    <ServicePageTemplate
      subDirections={engineeringSubDirections}
      iconMap={{ FileSearch, Microscope, HardHat }}
      fallbackIcon={Wrench}
      hero={{
        breadcrumb: "Инженерный консалтинг",
        badgeText: "Экспертное направление",
        title: "Инженерный консалтинг",
        subtitle: "Технический аудит, проектирование, обследование зданий и сооружений, а также строительный контроль для безопасной и эффективной реализации проектов.",
        stats: [
          { number: "3", label: "практик", icon: Wrench, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления инженерного консалтинга",
        subtitle: "Три ключевых направления для технического обеспечения проектов",
        basePath: "/services/engineering",
      }}
      approach={{
        subtitle: "От обследования до контроля качества: обеспечиваем техническую целостность и безопасность на каждом этапе проекта.",
        steps: [
          { icon: FileSearch, title: "Обследование", description: "Технический аудит и диагностика объекта", step: "01" },
          { icon: Microscope, title: "Проектирование", description: "Разработка технических решений и документации", step: "02" },
          { icon: HardHat, title: "Контроль", description: "Строительный надзор и контроль качества", step: "03" },
        ],
      }}
    />
  );
}
