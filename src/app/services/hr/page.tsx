"use client";

import { Users as UsersIcon, Network, BarChart2, BarChart3, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { hrSubDirections } from "@/data/hrServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function HrPage() {
  return (
    <ServicePageTemplate
      subDirections={hrSubDirections}
      iconMap={{ Users: UsersIcon, Network, BarChart2 }}
      fallbackIcon={UsersIcon}
      hero={{
        breadcrumb: "HR-консалтинг",
        badgeText: "Экспертное направление",
        title: "HR-консалтинг",
        subtitle: "Стратегический HR-консалтинг, организационное развитие и аналитика персонала для формирования эффективной команды и устойчивого роста организации.",
        stats: [
          { number: "3", label: "практик", icon: UsersIcon, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: UsersIcon, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления HR-консалтинга",
        subtitle: "Три ключевых направления для развития человеческого капитала",
        basePath: "/services/hr",
      }}
      approach={{
        subtitle: "От диагностики до трансформации: выстраиваем HR-системы, которые работают на бизнес-результат.",
        steps: [
          { icon: UsersIcon, title: "Диагностика", description: "Аудит HR-процессов и организационной структуры", step: "01" },
          { icon: Network, title: "Проектирование", description: "Разработка HR-стратегии и целевой модели", step: "02" },
          { icon: BarChart2, title: "Реализация", description: "Внедрение изменений и оценка эффективности", step: "03" },
        ],
      }}
    />
  );
}
