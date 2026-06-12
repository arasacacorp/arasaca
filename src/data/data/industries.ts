import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Building2,
  Map,
  Landmark,
  Laptop,
  Factory,
  Ship,
  Shield,
  Leaf,
  Plane,
  Zap,
  Fuel,
  Mountain,
  Briefcase,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Phone,
  FlaskConical,
  TreePine,
} from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Ключевая экспертиза — отрасль, в которой мы эксперты */
  isCore?: boolean;
}

/**
 * Отрасли АРАСАКА Консалтинг.
 * isCore: true — ключевая экспертиза компании.
 * Порядок: сначала ключевые (core), затем остальные по алфавиту названия.
 */
export const industries: Industry[] = [
  // —— Ключевые направления (экспертиза) ——
  {
    slug: "nuclear",
    name: "Атомная промышленность",
    description:
      "Стратегия, управление программами, инжиниринг и цифровая трансформация для организаций атомной отрасли.",
    icon: Atom,
    isCore: true,
  },
  {
    slug: "construction",
    name: "Строительство и девелопмент",
    description:
      "Оценка, проектирование, контроль и управление стройкой для надёжной реализации сложных объектов.",
    icon: Building2,
    isCore: true,
  },
  {
    slug: "urbanistics",
    name: "Урбанистика и градостроительство",
    description:
      "Мастер-планирование, сценарии развития территорий, экономика и сопровождение градостроительных проектов.",
    icon: Map,
    isCore: true,
  },
  {
    slug: "it",
    name: "IT и цифровые технологии",
    description:
      "Цифровая трансформация, разработка решений, внедрение технологий и импортозамещение.",
    icon: Laptop,
    isCore: true,
  },
  {
    slug: "government",
    name: "Государственный сектор",
    description:
      "Инвестиционный анализ, управление проектами и программами в государственных и муниципальных учреждениях.",
    icon: Landmark,
    isCore: true,
  },
  {
    slug: "manufacturing",
    name: "Машиностроение и производство",
    description:
      "Инвестиции, технико-экономическая оценка, цифровизация и локализация для промышленных компаний.",
    icon: Factory,
    isCore: true,
  },
  {
    slug: "shipbuilding",
    name: "Судостроение и морская техника",
    description:
      "Экономический анализ, проектирование, господдержка и цифровизация в судостроении.",
    icon: Ship,
    isCore: true,
  },
  {
    slug: "defense",
    name: "Оборонно-промышленный комплекс",
    description:
      "Стратегия, управление программами и проектами, инжиниринг и цифровизация для организаций ОПК.",
    icon: Shield,
    isCore: true,
  },
  {
    slug: "oil-gas",
    name: "Нефть, газ и нефтехимия",
    description:
      "Аудит, стратегическое и операционное консультирование, финансовое моделирование для нефтегазовых компаний.",
    icon: Fuel,
    isCore: true,
  },
  // —— Другие отрасли ——
  {
    slug: "agro",
    name: "АПК и пищевая промышленность",
    description:
      "Стратегия, исследования, инжиниринг и консалтинг для агробизнеса и пищевой промышленности.",
    icon: Leaf,
  },
  {
    slug: "aerospace",
    name: "Авиационная промышленность",
    description:
      "Стратегия, инжиниринг, цифровая трансформация и управление программами для авиакомпаний.",
    icon: Plane,
  },
  {
    slug: "energy",
    name: "Энергетика и ЖКХ",
    description:
      "Консалтинг и сопровождение инвестиционных проектов, финансовое моделирование, цифровизация.",
    icon: Zap,
  },
  {
    slug: "mining-metallurgy",
    name: "Металлургия и горнодобыча",
    description:
      "Сопровождение металлургических и горнодобывающих компаний: инвестиции, стратегия, операционная деятельность.",
    icon: Mountain,
  },
  {
    slug: "finance",
    name: "Финансовый сектор и банки",
    description:
      "Аудит, консалтинг для банков, страховых компаний и финансовых организаций.",
    icon: Briefcase,
  },
  {
    slug: "healthcare",
    name: "Медицина и фармацевтика",
    description:
      "Экономика, инфраструктура, стратегии и эффективность для медицинских и фармпроектов.",
    icon: HeartPulse,
  },
  {
    slug: "education",
    name: "Образование и наука",
    description:
      "Консалтинг, стратегия и цифровизация для образовательных и научных организаций.",
    icon: GraduationCap,
  },
  {
    slug: "retail",
    name: "Ритейл и торговля",
    description:
      "Цифровая трансформация, BI, логистика, финансовое моделирование для ритейла.",
    icon: ShoppingCart,
  },
  {
    slug: "logistics",
    name: "Транспорт и логистика",
    description:
      "Стратегия, оптимизация цепочек поставок и цифровизация в транспорте и логистике.",
    icon: Truck,
  },
  {
    slug: "telecom",
    name: "Связь и телеком",
    description:
      "Инфраструктура связи, мобильные и фиксированные сети, центры обработки данных.",
    icon: Phone,
  },
  {
    slug: "chemicals",
    name: "Химическая промышленность",
    description:
      "Финансовое моделирование, бизнес-планы, обоснование инвестиций в химической отрасли.",
    icon: FlaskConical,
  },
  {
    slug: "forestry",
    name: "Лесная и деревообрабатывающая промышленность",
    description:
      "Комплексные решения для лесного комплекса: заготовка, переработка, целлюлоза и бумага.",
    icon: TreePine,
  },
];

/** Только отрасли с ключевой экспертизой (для главной, меню и т.д.) */
export const coreIndustries = industries.filter((i) => i.isCore);

/** Slug всех отраслей */
export const industrySlugs = industries.map((i) => i.slug);
