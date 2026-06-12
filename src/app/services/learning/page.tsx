"use client";

import { GraduationCap, Settings, BookOpen, Award, BarChart3, Users, ClipboardList } from "lucide-react";
import { C } from "@/lib/colors";
import { learningSubDirections } from "@/data/learningServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export default function LearningPage() {
  return (
    <ServicePageTemplate
      subDirections={learningSubDirections}
      iconMap={{ GraduationCap, Settings, BookOpen, Award }}
      fallbackIcon={GraduationCap}
      hero={{
        breadcrumb: "Обучение и развитие",
        badgeText: "Экспертное направление",
        title: "Обучение и развитие",
        subtitle: "Корпоративные программы развития, бережливое производство, управление знаниями и собственная Корпоративная академия Арасаки для непрерывного развития организации.",
        stats: [
          { number: "3", label: "практик", icon: GraduationCap, accent: C.dna },
          { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
          { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления обучения и развития",
        subtitle: "Четыре ключевых направления для развития компетенций организации",
        highlightSlug: "arasaca-academy",
        highlightBadge: "Академия",
        basePath: "/services/learning",
      }}
      approach={{
        subtitle: "От диагностики до внедрения: создаём системы обучения, развиваем компетенции и строим культуру непрерывного развития.",
        steps: [
          { icon: BookOpen, title: "Диагностика", description: "Оценка потребностей в обучении и текущей системы", step: "01" },
          { icon: Settings, title: "Проектирование", description: "Разработка программ, платформ и процессов", step: "02" },
          { icon: Award, title: "Реализация", description: "Проведение обучения и оценка эффективности", step: "03" },
        ],
      }}
    />
  );
}
