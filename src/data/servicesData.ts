/**
 * Услуги Арасака Консалтинг.
 * Единый источник данных для меню, страниц услуг и отраслей.
 *
 * Содержит сервисный реестр — маппинг categoryId → SubDirection[].
 * Позволяет получить поднаправления любой категории по её id.
 */

import type { SubDirection } from "@/data/types";
import { consultingSubDirections } from "./consultingServices";
import { engineeringSubDirections } from "./engineeringServices";
import { technologiesSubDirections } from "./technologiesServices";
import { analyticsSubDirections } from "./analyticsServices";
import { hrSubDirections } from "./hrServices";
import { learningSubDirections } from "./learningServices";
import { territorialDevelopmentSubDirections } from "./territorialDevelopmentServices";
import { communicationsSubDirections } from "./communicationsServices";
import { startupsSubDirections } from "./startupsServices";

export interface SubService {
  name: string;
  href: string;
  description?: string;
  /** Отображаемое имя в шапке (если отличается от name) */
  headerName?: string;
  /** Скрыть из меню шапки (по умолчанию visible) */
  showInHeader?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  href: string;
  description: string;
  subServices: SubService[];
  /** Подсветка в меню шапки (например, для «Технологии») */
  highlight?: boolean;
  /** Отображаемое имя в шапке (если отличается от name) */
  headerName?: string;
  /** Порядок в меню шапки (по умолчанию — порядок в массиве) */
  headerOrder?: number;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "consulting",
    name: "Консалтинг",
    href: "/services/consulting",
    description: "Стратегический консалтинг и управленческое консультирование для бизнеса",
    headerOrder: 1,
    subServices: [
      { name: "Стратегический консалтинг", href: "/services/consulting/strategic-consulting", headerName: "Стратегия и корпоративное управление" },
      { name: "Финансовый консалтинг и моделирование", href: "/services/consulting/financial-consulting", showInHeader: false },
      { name: "Операционный консалтинг", href: "/services/consulting/operational-consulting", showInHeader: false },
      { name: "Меры государственной поддержки", href: "/services/consulting/government-support", headerName: "Господдержка и сопровождение" },
      { name: "Инвестиционное проектирование", href: "/services/consulting/investment-design", headerName: "Инвестиционный консалтинг" },
      { name: "Управление проектами", href: "/services/consulting/project-management", headerName: "Управление проектами и программами" },
      { name: "Отчётность и раскрытие информации", href: "/services/consulting/reporting-disclosure", showInHeader: false },
    ],
  },
  {
    id: "engineering",
    name: "Инжиниринг",
    href: "/services/engineering",
    description: "Комплексные инжиниринговые решения для промышленных и инфраструктурных проектов",
    headerOrder: 4,
    subServices: [
      { name: "Предпроектная проработка", href: "/services/engineering/pre-project" },
      { name: "Экспертиза капитальных проектов", href: "/services/engineering/expertise" },
      { name: "Управление строительными проектами", href: "/services/engineering/construction-management" },
    ],
  },
  {
    id: "technologies",
    name: "Технологии",
    href: "/services/technologies",
    description: "Цифровая трансформация и внедрение современных технологий",
    highlight: true,
    headerOrder: 3,
    subServices: [
      { name: "Цифровая трансформация и стратегия", href: "/services/technologies/digital-transformation" },
      { name: "ИТ-аудит и Due Diligence", href: "/services/technologies/it-audit" },
      { name: "Разработка и внедрение ИТ-решений", href: "/services/technologies/development" },
      { name: "Корпоративные инновации и R&D", href: "/services/technologies/innovation" },
      { name: "Промышленная автоматизация и IIoT", href: "/services/technologies/industrial-automation" },
      { name: "Облачные решения и инфраструктура", href: "/services/technologies/cloud" },
    ],
  },
  {
    id: "analytics",
    name: "Аналитика и исследования",
    href: "/services/analytics",
    description: "Анализ рынков, экономические исследования и работа с данными",
    headerOrder: 2,
    subServices: [
      { name: "Рыночная аналитика", href: "/services/analytics/market-analytics", headerName: "Рыночная аналитика и исследования" },
      { name: "Экономические исследования", href: "/services/analytics/economic-research" },
      { name: "Аналитика данных", href: "/services/analytics/data-analytics", headerName: "Аналитика данных и моделирование" },
    ],
  },
  {
    id: "hr",
    name: "HR и организация",
    href: "/services/hr",
    description: "Управление человеческими ресурсами и организационное развитие",
    headerName: "HR и организационное развитие",
    headerOrder: 6,
    subServices: [
      { name: "Управление человеческим капиталом", href: "/services/hr/human-capital-management" },
      { name: "Организационное развитие", href: "/services/hr/organizational-development", headerName: "Организационное развитие и трансформация" },
      { name: "HR-аналитика и цифровизация", href: "/services/hr/hr-analytics" },
    ],
  },
  {
    id: "learning",
    name: "Обучение и развитие",
    href: "/services/learning",
    description: "Корпоративное обучение и программы развития персонала",
    headerOrder: 7,
    subServices: [
      { name: "Корпоративные программы развития", href: "/services/learning/corporate-development" },
      { name: "Lean и производственные практики", href: "/services/learning/lean-production", headerName: "Lean & 5С и производственные практики" },
      { name: "Управление знаниями", href: "/services/learning/knowledge-management" },
      { name: "Корпоративная академия", href: "/services/learning/arasaca-academy", headerName: "Корпоративная академия Арасаки" },
    ],
  },
  {
    id: "territorial-development",
    name: "Развитие территорий",
    href: "/services/territorial-development",
    description: "Мастер-планирование, экономическое моделирование и механизмы реализации территориальных проектов",
    headerOrder: 5,
    subServices: [
      { name: "Пространственное и стратегическое планирование", href: "/services/territorial-development/spatial-strategic-planning" },
      { name: "Экономическое моделирование", href: "/services/territorial-development/economic-modeling" },
      { name: "Механизмы реализации", href: "/services/territorial-development/implementation-mechanisms" },
    ],
  },
  {
    id: "communications",
    name: "Коммуникации",
    href: "/services/communications",
    description: "Стратегические коммуникации и управление репутацией",
    headerName: "Коммуникации и бренд",
    headerOrder: 8,
    subServices: [
      { name: "Бренд и позиционирование", href: "/services/communications/brand-positioning" },
      { name: "Коммуникационные стратегии", href: "/services/communications/communication-strategy" },
      { name: "Медийное присутствие и репутация", href: "/services/communications/media-reputation" },
      { name: "Корпоративная идентичность и культура", href: "/services/communications/corporate-culture" },
    ],
  },
  {
    id: "startups",
    name: "Стартапы и инновации",
    href: "/services/startups",
    description: "Развитие стартапов, R&D сопровождение и корпоративные инновации",
    headerOrder: 9,
    subServices: [
      { name: "Развитие стартапов", href: "/services/startups/startup-development" },
      { name: "Инновации и R&D сопровождение", href: "/services/startups/innovation-rd" },
      { name: "Корпоративные инновации", href: "/services/startups/corporate-innovation" },
    ],
  },
];

/* ─── Сервисный реестр ─── */

/**
 * Маппинг categoryId → массив поднаправлений (SubDirection[]).
 * Используется для универсального доступа к данным любого направления.
 */
export const serviceSubDirectionsMap: Record<string, SubDirection[]> = {
  consulting: consultingSubDirections,
  engineering: engineeringSubDirections,
  technologies: technologiesSubDirections,
  analytics: analyticsSubDirections,
  hr: hrSubDirections,
  learning: learningSubDirections,
  "territorial-development": territorialDevelopmentSubDirections,
  communications: communicationsSubDirections,
  startups: startupsSubDirections,
};

/**
 * Получить поднаправление по categoryId и slug.
 * Универсальная замена 9 индивидуальных getXxxSubDirectionBySlug().
 */
export function getSubDirectionBySlug(
  categoryId: string,
  slug: string,
): SubDirection | undefined {
  const directions = serviceSubDirectionsMap[categoryId];
  return directions?.find((d) => d.slug === slug);
}

/**
 * Получить все поднаправления категории по её categoryId.
 */
export function getSubDirectionsByCategory(categoryId: string): SubDirection[] {
  return serviceSubDirectionsMap[categoryId] ?? [];
}

/* ─── Генерация меню для шапки ─── */

/** Тип элемента подуслуги в меню шапки */
export interface HeaderMenuItem {
  name: string;
  href: string;
}

/** Тип категории услуг в меню шапки */
export interface HeaderMenuCategory {
  name: string;
  href: string;
  highlight?: boolean;
  services: HeaderMenuItem[];
}

/** Тип объекта servicesMenu для шапки */
export interface HeaderServicesMenu {
  name: "Услуги";
  href: "/services";
  inHeader: true;
  description: string;
  categories: HeaderMenuCategory[];
}

/**
 * Генерирует структуру меню услуг для шапки из servicesData.
 * Использует headerName/headerOrder/highlight/showInHeader
 * для кастомизации отображения.
 */
export function buildHeaderServicesMenu(): HeaderServicesMenu {
  const sorted = [...servicesData].sort(
    (a, b) => (a.headerOrder ?? 99) - (b.headerOrder ?? 99),
  );

  return {
    name: "Услуги",
    href: "/services",
    inHeader: true,
    description:
      "Консалтинг, аналитика и исследования, технологии, инжиниринг, развитие территорий, HR, обучение, коммуникации и стартапы.",
    categories: sorted.map((cat) => ({
      name: cat.headerName || cat.name,
      href: cat.href,
      ...(cat.highlight && { highlight: cat.highlight }),
      services: cat.subServices
        .filter((ss) => ss.showInHeader !== false)
        .map((ss) => ({
          name: ss.headerName || ss.name,
          href: ss.href,
        })),
    })),
  };
}
