import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { technologiesSubDirections } from "@/data/technologiesServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { COMPANY_STATS_SERVICE } from "@/data/companyStats";

export const metadata: Metadata = createMetadata({
  title: "Технологии",
  description:
    "Цифровая трансформация и ИТ-решения от Арасака. ИТ-стратегия, аудит, разработка систем, промышленная автоматизация и корпоративные инновации.",
  path: "/services/technologies",
  keywords: [
    "технологии",
    "цифровая трансформация",
    "ИТ-решения",
    "автоматизация",
    "инновации",
    "Арасака",
  ],
});

export default function TechnologiesPage() {
  return (
    <ServicePageTemplate
      subDirections={technologiesSubDirections}
      fallbackIcon="Code"
      hero={{
        breadcrumb: "Технологии и цифровизация",
        badgeText: "Экспертное направление",
        title: "Технологии и цифровизация",
        subtitle: "Цифровая трансформация, технологический консалтинг, разработка IT-решений и автоматизация бизнес-процессов для устойчивого развития.",
        stats: [
          { number: String(technologiesSubDirections.length), label: "практик", icon: "Code", accent: C.dna },
          ...COMPANY_STATS_SERVICE,
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
          { icon: "RefreshCw", title: "Аудит", description: "Диагностика текущего IT-ландшафта и процессов", step: "01" },
          { icon: "Code", title: "Проектирование", description: "Разработка архитектуры решений и дорожной карты", step: "02" },
          { icon: "Cloud", title: "Внедрение", description: "Разработка, интеграция и запуск IT-систем", step: "03" },
        ],
      }}
    />
  );
}
