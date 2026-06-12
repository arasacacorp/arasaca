/**
 * Услуги Арасака Консалтинг.
 * Единый источник данных для меню, страниц услуг и отраслей.
 */

export interface SubService {
  name: string;
  href: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  href: string;
  description: string;
  subServices: SubService[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "consulting",
    name: "Консалтинг",
    href: "/services/consulting",
    description: "Стратегический консалтинг и управленческое консультирование для бизнеса",
    subServices: [
      { name: "Стратегический консалтинг", href: "/services/consulting/strategic-consulting" },
      { name: "Финансовый консалтинг и моделирование", href: "/services/consulting/financial-consulting" },
      { name: "Операционный консалтинг", href: "/services/consulting/operational-consulting" },
      { name: "Меры государственной поддержки", href: "/services/consulting/government-support" },
      { name: "Инвестиционное проектирование", href: "/services/consulting/investment-design" },
      { name: "Управление проектами", href: "/services/consulting/project-management" },
      { name: "Отчётность и раскрытие информации", href: "/services/consulting/reporting-disclosure" },
    ],
  },
  {
    id: "engineering",
    name: "Инжиниринг",
    href: "/services/engineering",
    description: "Комплексные инжиниринговые решения для промышленных и инфраструктурных проектов",
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
    subServices: [
      { name: "Рыночная аналитика", href: "/services/analytics/market-analytics" },
      { name: "Экономические исследования", href: "/services/analytics/economic-research" },
      { name: "Аналитика данных", href: "/services/analytics/data-analytics" },
    ],
  },
  {
    id: "hr",
    name: "HR и организация",
    href: "/services/hr",
    description: "Управление человеческими ресурсами и организационное развитие",
    subServices: [
      { name: "Управление человеческим капиталом", href: "/services/hr/human-capital-management" },
      { name: "Организационное развитие", href: "/services/hr/organizational-development" },
      { name: "HR-аналитика и цифровизация", href: "/services/hr/hr-analytics" },
    ],
  },
  {
    id: "learning",
    name: "Обучение и развитие",
    href: "/services/learning",
    description: "Корпоративное обучение и программы развития персонала",
    subServices: [
      { name: "Корпоративные программы развития", href: "/services/learning/corporate-development" },
      { name: "Lean и производственные практики", href: "/services/learning/lean-production" },
      { name: "Управление знаниями", href: "/services/learning/knowledge-management" },
      { name: "Корпоративная академия", href: "/services/learning/arasaca-academy" },
    ],
  },
  {
    id: "territorial-development",
    name: "Развитие территорий",
    href: "/services/territorial-development",
    description: "Мастер-планирование, экономическое моделирование и механизмы реализации территориальных проектов",
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
    subServices: [
      { name: "Развитие стартапов", href: "/services/startups/startup-development" },
      { name: "Инновации и R&D сопровождение", href: "/services/startups/innovation-rd" },
      { name: "Корпоративные инновации", href: "/services/startups/corporate-innovation" },
    ],
  },
];
