import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { learningSubDirections } from "@/data/learningServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { COMPANY_STATS_SERVICE } from "@/data/companyStats";

export const metadata: Metadata = createMetadata({
  title: "Обучение и развитие",
  description:
    "Корпоративное обучение от Арасака: программы развития, бережливое производство, управление знаниями и корпоративная академия.",
  path: "/services/learning",
  keywords: [
    "обучение",
    "корпоративное обучение",
    "развитие персонала",
    "бережливое производство",
    "Арасака",
  ],
});

export default function LearningPage() {
  return (
    <ServicePageTemplate
      subDirections={learningSubDirections}
      fallbackIcon="GraduationCap"
      hero={{
        breadcrumb: "Обучение и развитие",
        badgeText: "Экспертное направление",
        title: "Обучение и развитие",
        subtitle: "Корпоративные программы развития, бережливое производство, управление знаниями и собственная Корпоративная академия Арасаки для непрерывного развития организации.",
        stats: [
          { number: "3", label: "практик", icon: "GraduationCap", accent: C.dna },
          ...COMPANY_STATS_SERVICE,
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
          { icon: "BookOpen", title: "Диагностика", description: "Оценка потребностей в обучении и текущей системы", step: "01" },
          { icon: "Settings", title: "Проектирование", description: "Разработка программ, платформ и процессов", step: "02" },
          { icon: "Award", title: "Реализация", description: "Проведение обучения и оценка эффективности", step: "03" },
        ],
      }}
    />
  );
}
