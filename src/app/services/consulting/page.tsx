import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { consultingSubDirections } from "@/data/consultingServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = createMetadata({
  title: "Консалтинг",
  description:
    "Стратегический, финансовый и операционный консалтинг от Арасака. Разработка стратегий, бизнес-планирование, ТЭО, управление проектами и инвестиционное проектирование.",
  path: "/services/consulting",
  keywords: [
    "консалтинг",
    "стратегический консалтинг",
    "финансовый консалтинг",
    "бизнес-план",
    "ТЭО",
    "Арасака",
    "управление проектами",
  ],
});

export default function ConsultingPage() {
  return (
    <ServicePageTemplate
      subDirections={consultingSubDirections}
      fallbackIcon="Target"
      hero={{
        breadcrumb: "Консалтинг",
        badgeText: "Экспертное направление",
        title: "Консалтинг",
        subtitle: "Стратегический и управленческий консалтинг, финансовое моделирование, инвестиционное проектирование и управление проектами для комплексного развития бизнеса.",
        stats: [
          { number: "7", label: "практик", icon: "Briefcase", accent: C.dna },
          { number: "80+", label: "услуг", icon: "ClipboardList", accent: C.mintDark },
          { number: "50+", label: "экспертов", icon: "Users", accent: C.orange },
          { number: "500+", label: "проектов", icon: "BarChart3", accent: C.dna },
        ],
      }}
      directions={{
        title: "Направления консалтинга",
        subtitle: "Семь ключевых направлений для комплексного развития вашего бизнеса",
        highlightSlug: "government-support",
        highlightBadge: "Актуально",
        wideIndices: [3, 6],
        basePath: "/services/consulting",
      }}
      approach={{
        subtitle: "От диагностики до внедрения — сопровождаем на каждом этапе. Комплексный подход позволяет достигать измеримых результатов и обеспечивать устойчивое развитие бизнеса.",
        steps: [
          { icon: "Target", title: "Стратегия", description: "От диагностики до дорожной карты и внедрения", step: "01" },
          { icon: "BarChart3", title: "Управление", description: "Проекты, портфели и трансформационные программы", step: "02" },
          { icon: "ClipboardList", title: "Реализация", description: "Сопровождение от идеи до измеримого результата", step: "03" },
        ],
      }}
    />
  );
}
