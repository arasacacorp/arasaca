"use client";

import { Rocket, Lightbulb, Zap, BarChart3, Users, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { startupsSubDirections } from "@/data/startupsServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function StartupsPage() {
  return (
    <ServicePageTemplate
      subDirections={startupsSubDirections}
      iconMap={{ Rocket, Lightbulb, Zap }}
      fallbackIcon={Rocket}
      hero={{
        breadcrumb: "Стартапы и инновации",
        badgeText: "Экспертное направление",
        title: "Стартапы и инновации",
        subtitle: "Сопровождение стартапов от идеи до масштабирования, поддержка НИОКР и корпоративных инноваций для технологического развития бизнеса.",
        stats: [
          { number: "3", label: "практик", icon: Rocket, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления стартапов и инноваций",
        subtitle: "Три ключевых направления для развития технологического предпринимательства",
        basePath: "/services/startups",
      }}
      approach={{
        subtitle: "От идеи до масштабирования: сопровождаем стартапы, поддерживаем инновации и выстраиваем корпоративные программы.",
        steps: [
          { icon: Rocket, title: "Диагностика", description: "Оценка потенциала проекта и команды", step: "01" },
          { icon: Lightbulb, title: "Развитие", description: "Упаковка, MVP, инвестиции и партнёрства", step: "02" },
          { icon: Zap, title: "Масштабирование", description: "Внедрение, рост и выход на рынки", step: "03" },
        ],
      }}
    />
  );
}
