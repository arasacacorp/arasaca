import { C } from "@/lib/colors";
import { industries as allIndustries } from "@/data/industries";

/* ═══════════════════════════════════════════════════════
   NEWS DATA
   ═══════════════════════════════════════════════════════ */
export const newsItems = [
  {
    date: "07.05.2026",
    title: "Арасака запускает платформу мастер-планирования для управления инвестиционными программами",
    category: "Технологии",
    categoryColor: C.dna,
    href: "/press-center",
  },
  {
    date: "29.04.2026",
    title: "Арасака и Агентство «ЦЕНТР» представили совместное решение для развития территорий",
    category: "Партнёрство",
    categoryColor: C.mintDark,
    href: "/press-center",
  },
  {
    date: "15.04.2026",
    title: "Новый офис Арасаки в Москве: расширение географии консалтинга",
    category: "Компания",
    categoryColor: C.orange,
    href: "/press-center",
  },
];

/* ─── Section cards (6 colored cards for QuickLinks) ─── */
export const sectionCards = [
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    bg: C.dark,
    textColor: C.white,
    href: "/about",
    icon: "Building2" as const,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    bg: C.orange,
    textColor: C.white,
    href: "/services",
    icon: "Briefcase" as const,
  },
  {
    title: "Решения",
    description: "Цифровые продукты и платформы",
    bg: C.white,
    textColor: C.textDark,
    href: "/solutions/master-planning",
    icon: "Layers" as const,
  },
  {
    title: "Пресс-центр",
    description: "Новости, пресс-релизы, СМИ",
    bg: C.dna,
    textColor: C.white,
    href: "/press-center",
    icon: "Newspaper" as const,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: C.mintDark,
    textColor: C.white,
    href: "/career",
    icon: "Users" as const,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    bg: C.dark,
    textColor: C.white,
    href: "/contacts",
    icon: "Mail" as const,
  },
];

/* ─── Stats data ─── */
export const heroStats = [
  { number: "8", suffix: " лет", label: "работаем с бизнесом", icon: "Clock" as const, accent: C.dna },
  { number: "50+", suffix: "", label: "экспертов в команде", icon: "Users" as const, accent: C.orange },
  { number: "30+", suffix: "", label: "отраслей экспертизы", icon: "Compass" as const, accent: C.mintDark },
  { number: "9", suffix: "", label: "направлений консалтинга", icon: "Layers" as const, accent: C.dna },
];

/* ═══════════════════════════════════════════════════════
   BUSINESS DIRECTIONS DATA
   ═══════════════════════════════════════════════════════ */
export const businessCards = [
  {
    title: "Консалтинг",
    description: "Разработка стратегий развития, совершенствование финансовых моделей, оптимизация процессов и сопровождение инвестиционных проектов",
    bg: C.dark,
    textColor: C.white,
    href: "/services/consulting",
    icon: "Briefcase" as const,
    size: "large" as const,
  },
  {
    title: "Аналитика и исследования",
    description: "Глубокое понимание рынков, отраслей и данных, поддерживающее стратегические и операционные решения",
    bg: C.dna,
    textColor: C.white,
    href: "/services/analytics",
    icon: "BarChart3" as const,
    size: "large" as const,
  },
  {
    title: "Технологии",
    description: "Создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций, автоматизация",
    bg: C.orange,
    textColor: C.white,
    href: "/services/technologies",
    icon: "Cpu" as const,
    highlight: true,
    size: "small" as const,
  },
  {
    title: "Инжиниринг",
    description: "Предпроектный анализ, экспертиза капитальных затрат, управление строительством сложных проектов",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/engineering",
    icon: "Wrench" as const,
    size: "small" as const,
  },
  {
    title: "Развитие территорий и урбанистика",
    description: "Мастер-планирование, экономическое моделирование и механизмы реализации территориальных проектов",
    bg: C.mintDark,
    textColor: C.white,
    href: "/services/territorial-development",
    icon: "MapPin" as const,
    size: "small" as const,
  },
  {
    title: "HR и организационное развитие",
    description: "Управление человеческим капиталом, организационное проектирование и HR-аналитика",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/hr",
    icon: "Users" as const,
    size: "small" as const,
  },
  {
    title: "Обучение и развитие",
    description: "Корпоративные программы развития, бережливое производство, управление знаниями",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/learning",
    icon: "GraduationCap" as const,
    size: "small" as const,
  },
  {
    title: "Коммуникации и бренд",
    description: "Разработка бренд-стратегий, коммуникационных кампаний, управление репутацией",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/communications",
    icon: "Globe" as const,
    size: "small" as const,
  },
  {
    title: "Стартапы и инновации",
    description: "Сопровождение стартапов от идеи до масштабирования, поддержка НИОКР и корпоративных инноваций",
    bg: C.dark,
    textColor: C.white,
    href: "/services/startups",
    icon: "FlaskConical" as const,
    size: "large" as const,
  },
];

/* ═══════════════════════════════════════════════════════
   CASES DATA (Mission Section)
   ═══════════════════════════════════════════════════════ */
export const caseCards = [
  {
    category: "Консалтинг",
    title: "Цифровая трансформация промышленного холдинга",
    description: "Разработали ИТ-стратегию и дорожную карту цифровизации, внедрили систему управления производством",
    client: "Металлургический холдинг",
    result: "Сокращение операционных затрат на 15%",
    href: "/cases",
  },
  {
    category: "Развитие территорий",
    title: "Мастер-планирование территории",
    description: "Создали цифровую платформу для управления инвестиционными программами развития территорий",
    client: "Субъект РФ",
    result: "50+ инвестиционных проектов в системе",
    href: "/cases",
  },
  {
    category: "Стратегия",
    title: "Стратегия ESG-трансформации",
    description: "Разработали стратегию устойчивого развития и внедрили систему ESG-отчётности",
    client: "Нефтегазовая компания",
    result: "Рейтинг ESG повышен на 2 уровня",
    href: "/cases",
  },
];

/* ═══════════════════════════════════════════════════════
   INDUSTRIES DATA
   ═══════════════════════════════════════════════════════ */
export const keyIndustrySlugs = new Set(["oil-gas", "nuclear", "defense", "it"]);

/* Color map for key industries — each gets a unique accent from our palette */
export const keyIndustryColors: Record<string, string> = {
  nuclear: C.dark,
  "oil-gas": C.dna,
  it: C.mintDark,
  defense: C.orange,
};

/* Displayed industries: 9 core + 3 extra from "other" for a 12-card grid.
   Key industries are shuffled among regular ones for visual variety. */
export const displayedIndustrySlugs = [
  "nuclear",
  "construction",
  "oil-gas",
  "government",
  "manufacturing",
  "it",
  "shipbuilding",
  "defense",
  "urbanistics",
  "energy",
  "mining-metallurgy",
  "agro",
];

export const displayedIndustries = displayedIndustrySlugs
  .map((slug) => allIndustries.find((i) => i.slug === slug)!)
  .filter(Boolean);

export const otherIndustriesLocal = allIndustries.filter(
  (i) => !displayedIndustrySlugs.includes(i.slug),
);

/* ═══════════════════════════════════════════════════════
   INNOVATION / LAB DATA
   ═══════════════════════════════════════════════════════ */
export const labProducts = [
  {
    title: "CRM-системы",
    description: "Управление клиентами и продажами",
    icon: "Users" as const,
  },
  {
    title: "Автоматизация",
    description: "Рутинные процессы без ручного труда",
    icon: "Workflow" as const,
  },
  {
    title: "Интеграции",
    description: "Связываем системы между собой",
    icon: "Plug" as const,
  },
  {
    title: "LMS-платформы",
    description: "Корпоративное обучение",
    icon: "GraduationCap" as const,
  },
  {
    title: "HR-системы",
    description: "Учёт и мотивация персонала",
    icon: "Heart" as const,
  },
  {
    title: "Дашборды",
    description: "Аналитика в реальном времени",
    icon: "BarChart3" as const,
  },
];

export const labStats = [
  { number: "20+", label: "решений разработано", accent: C.dna },
  { number: "5+", label: "лет в разработке", accent: C.orange },
  { number: "100%", label: "индивидуальный подход", accent: C.mintDark },
];

/* ═══════════════════════════════════════════════════════
   PUBLICATIONS DATA
   ═══════════════════════════════════════════════════════ */
export const publicationItems = [
  {
    category: "Статья",
    categoryColor: C.dna,
    title: "Тренды цифровой трансформации 2026",
    description: "Ключевые направления цифровизации бизнеса: искусственный интеллект, автоматизация процессов и платформенные решения",
    date: "15.01.2026",
    href: "/press-center",
  },
  {
    category: "Инсайт",
    categoryColor: C.mintDark,
    title: "Российский рынок M&A: итоги года",
    description: "Ежегодный обзор рынка слияний и поглощений: ключевые сделки, драйверы роста и прогнозы на ближайшие годы",
    date: "10.01.2026",
    href: "/press-center",
  },
  {
    category: "Исследование",
    categoryColor: C.orange,
    title: "ESG-трансформация бизнеса",
    description: "Как интегрировать принципы устойчивого развития в бизнес-процессы и повысить инвестиционную привлекательность",
    date: "05.01.2026",
    href: "/press-center",
  },
  {
    category: "Статья",
    categoryColor: C.dna,
    title: "Мастер-планирование: новый подход к развитию территорий",
    description: "Опыт создания цифровых платформ для управления инвестиционными программами субъектов РФ",
    date: "28.12.2025",
    href: "/press-center",
  },
];
