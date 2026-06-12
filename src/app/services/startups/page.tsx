import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { startupsSubDirections } from "@/data/startupsServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { COMPANY_STATS_SERVICE } from "@/data/companyStats";

export const metadata: Metadata = createMetadata({
  title: "Стартапы и инновации",
  description:
    "Поддержка стартапов и инноваций от Арасака. Сопровождение от идеи до масштабирования, R&D, корпоративные инновации и привлечение инвестиций.",
  path: "/services/startups",
  keywords: [
    "стартапы",
    "инновации",
    "R&D",
    "венчур",
    "масштабирование",
    "Арасака",
  ],
});

export default function StartupsPage() {
  return (
    <ServicePageTemplate
      subDirections={startupsSubDirections}
      fallbackIcon="Rocket"
      hero={{
        breadcrumb: "Стартапы и инновации",
        badgeText: "Экспертное направление",
        title: "Стартапы и инновации",
        subtitle: "Сопровождение стартапов от идеи до масштабирования, поддержка НИОКР и корпоративных инноваций для технологического развития бизнеса.",
        stats: [
          { number: "3", label: "практик", icon: "Rocket", accent: C.dna },
          ...COMPANY_STATS_SERVICE,
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
          { icon: "Rocket", title: "Диагностика", description: "Оценка потенциала проекта и команды", step: "01" },
          { icon: "Lightbulb", title: "Развитие", description: "Упаковка, MVP, инвестиции и партнёрства", step: "02" },
          { icon: "Zap", title: "Масштабирование", description: "Внедрение, рост и выход на рынки", step: "03" },
        ],
      }}
    />
  );
}
