"use client";

import { Megaphone, Palette, Heart, BarChart3, Users, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { communicationsSubDirections } from "@/data/communicationsServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function CommunicationsPage() {
  return (
    <ServicePageTemplate
      subDirections={communicationsSubDirections}
      iconMap={{ Palette, Megaphone, Heart }}
      fallbackIcon={Megaphone}
      hero={{
        breadcrumb: "Коммуникации и бренд",
        badgeText: "Экспертное направление",
        title: "Коммуникации и бренд",
        subtitle: "Разработка бренд-стратегий, коммуникационных кампаний, управление репутацией и корпоративной культурой для формирования сильного образа компании.",
        stats: [
          { number: "3", label: "практик", icon: Megaphone, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления коммуникаций и бренда",
        subtitle: "Четыре ключевых направления для построения сильного бренда",
        basePath: "/services/communications",
      }}
      approach={{
        subtitle: "От исследования до реализации: создаём сильные бренды, выстраиваем коммуникации и формируем репутацию.",
        steps: [
          { icon: Palette, title: "Исследование", description: "Аудит бренда, анализ аудитории и конкурентов", step: "01" },
          { icon: Megaphone, title: "Стратегия", description: "Разработка платформы и коммуникаций", step: "02" },
          { icon: Heart, title: "Реализация", description: "Внедрение, запуск и измерение результатов", step: "03" },
        ],
      }}
    />
  );
}
