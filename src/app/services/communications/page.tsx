import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { communicationsSubDirections } from "@/data/communicationsServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { COMPANY_STATS_SERVICE } from "@/data/companyStats";

export const metadata: Metadata = createMetadata({
  title: "Коммуникации и бренд",
  description:
    "Бренд-консалтинг и стратегические коммуникации от Арасака. Разработка бренд-стратегий, коммуникационных кампаний и управление репутацией.",
  path: "/services/communications",
  keywords: [
    "коммуникации",
    "бренд",
    "репутация",
    "PR",
    "бренд-стратегия",
    "Арасака",
  ],
});

export default function CommunicationsPage() {
  return (
    <ServicePageTemplate
      subDirections={communicationsSubDirections}
      fallbackIcon="Megaphone"
      hero={{
        breadcrumb: "Коммуникации и бренд",
        badgeText: "Экспертное направление",
        title: "Коммуникации и бренд",
        subtitle: "Разработка бренд-стратегий, коммуникационных кампаний, управление репутацией и корпоративной культурой для формирования сильного образа компании.",
        stats: [
          { number: "3", label: "практик", icon: "Megaphone", accent: C.dna },
          ...COMPANY_STATS_SERVICE,
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
          { icon: "Palette", title: "Исследование", description: "Аудит бренда, анализ аудитории и конкурентов", step: "01" },
          { icon: "Megaphone", title: "Стратегия", description: "Разработка платформы и коммуникаций", step: "02" },
          { icon: "Heart", title: "Реализация", description: "Внедрение, запуск и измерение результатов", step: "03" },
        ],
      }}
    />
  );
}
