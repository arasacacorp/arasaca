import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { C } from "@/lib/colors";
import { hrSubDirections } from "@/data/hrServices";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { COMPANY_STATS_SERVICE } from "@/data/companyStats";

export const metadata: Metadata = createMetadata({
  title: "HR и организационное развитие",
  description:
    "HR-консалтинг от Арасака: управление человеческим капиталом, организационное проектирование, HR-аналитика и цифровизация HR-процессов.",
  path: "/services/hr",
  keywords: [
    "HR",
    "организационное развитие",
    "человеческий капитал",
    "HR-аналитика",
    "Арасака",
    "управление персоналом",
  ],
});

export default function HrPage() {
  return (
    <ServicePageTemplate
      subDirections={hrSubDirections}
      fallbackIcon="Users"
      hero={{
        breadcrumb: "HR-консалтинг",
        badgeText: "Экспертное направление",
        title: "HR-консалтинг",
        subtitle: "Стратегический HR-консалтинг, организационное развитие и аналитика персонала для формирования эффективной команды и устойчивого роста организации.",
        stats: [
          { number: "3", label: "практик", icon: "Users", accent: C.dna },
          ...COMPANY_STATS_SERVICE,
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
          { icon: "Users", title: "Диагностика", description: "Аудит HR-процессов и организационной структуры", step: "01" },
          { icon: "Network", title: "Проектирование", description: "Разработка HR-стратегии и целевой модели", step: "02" },
          { icon: "BarChart2", title: "Реализация", description: "Внедрение изменений и оценка эффективности", step: "03" },
        ],
      }}
    />
  );
}
