/**
 * Публикации по отраслям.
 * Статьи, обзоры рынков, исследования.
 */

export interface Publication {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  href: string;
  type: "article" | "research" | "insight";
  image?: string;
}

// Публикации по отраслям
export const industryPublications: Record<string, Publication[]> = {
  nuclear: [
    {
      id: "nuclear-1",
      title: "Атомная энергетика России: итоги 2025 года",
      category: "Обзор рынка",
      date: "15 декабря 2025",
      description: "Анализ ключевых событий в атомной отрасли: новые энергоблоки, экспортные контракты и развитие замкнутого топливного цикла.",
      href: "/media/articles/nuclear-2025-review",
      type: "research",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop",
    },
    {
      id: "nuclear-2",
      title: "Цифровизация в Росатоме: кейсы и тренды",
      category: "Технологии",
      date: "3 ноября 2025",
      description: "Как цифровые технологии трансформируют атомную отрасль: от проектирования до эксплуатации АЭС.",
      href: "/media/articles/rosatom-digital",
      type: "article",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: "nuclear-3",
      title: "Экспортный потенциал атомного машиностроения",
      category: "Инвестиции",
      date: "20 октября 2025",
      description: "Анализ возможностей для российских компаний в международных проектах атомной энергетики.",
      href: "/media/articles/nuclear-export",
      type: "insight",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
  ],

  construction: [
    {
      id: "const-1",
      title: "Рынок строительства России: прогноз 2026",
      category: "Обзор рынка",
      date: "10 декабря 2025",
      description: "Ключевые тренды строительной отрасли: инфраструктурные проекты, девелопмент и государственные программы.",
      href: "/media/articles/construction-2026",
      type: "research",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      id: "const-2",
      title: "Цифровые технологии в управлении стройкой",
      category: "Технологии",
      date: "28 ноября 2025",
      description: "BIM, цифровые двойники и системы управления проектами: как технологии меняют подход к строительству.",
      href: "/media/articles/digital-construction",
      type: "article",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
    },
    {
      id: "const-3",
      title: "Госпрограммы развития инфраструктуры",
      category: "Госсектор",
      date: "15 октября 2025",
      description: "Обзор федеральных и региональных программ финансирования инфраструктурных проектов.",
      href: "/media/articles/infrastructure-programs",
      type: "insight",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    },
  ],

  "oil-gas": [
    {
      id: "oil-1",
      title: "Нефтегазовый сектор: адаптация к новым условиям",
      category: "Обзор рынка",
      date: "12 декабря 2025",
      description: "Как российские нефтегазовые компании трансформируют бизнес-модели и развивают новые направления.",
      href: "/media/articles/oil-gas-adaptation",
      type: "research",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    },
    {
      id: "oil-2",
      title: "Газохимия: инвестиционные возможности",
      category: "Инвестиции",
      date: "5 ноября 2025",
      description: "Анализ перспектив развития газохимических производств и механизмов господдержки.",
      href: "/media/articles/gas-chemical-investments",
      type: "article",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    },
    {
      id: "oil-3",
      title: "ESG в нефтегазовой отрасли",
      category: "Стратегия",
      date: "20 сентября 2025",
      description: "Как нефтегазовые компании интегрируют принципы устойчивого развития в свою деятельность.",
      href: "/media/articles/oil-gas-esg",
      type: "insight",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
  ],

  it: [
    {
      id: "it-1",
      title: "ИТ-рынок России: рост и импортозамещение",
      category: "Обзор рынка",
      date: "18 декабря 2025",
      description: "Динамика российского ИТ-рынка, ключевые драйверы роста и приоритеты импортозамещения.",
      href: "/media/articles/it-market-2025",
      type: "research",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: "it-2",
      title: "Искусственный интеллект в корпоративном секторе",
      category: "Технологии",
      date: "10 ноября 2025",
      description: "Практические кейсы внедрения ИИ в российских компаниях: от пилотов до масштабирования.",
      href: "/media/articles/ai-corporate",
      type: "article",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      id: "it-3",
      title: "Кибербезопасность: тренды и решения",
      category: "Безопасность",
      date: "25 октября 2025",
      description: "Актуальные угрозы и подходы к построению защищённой ИТ-инфраструктуры.",
      href: "/media/articles/cybersecurity-trends",
      type: "insight",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    },
  ],

  manufacturing: [
    {
      id: "man-1",
      title: "Машиностроение России: точки роста",
      category: "Обзор рынка",
      date: "14 декабря 2025",
      description: "Какие сегменты машиностроения показывают рост и где сосредоточены инвестиции.",
      href: "/media/articles/manufacturing-growth",
      type: "research",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    },
    {
      id: "man-2",
      title: "Индустрия 4.0 на российских заводах",
      category: "Технологии",
      date: "2 ноября 2025",
      description: "Автоматизация, роботизация и цифровые двойники в производстве: практический опыт.",
      href: "/media/articles/industry-4-russia",
      type: "article",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
    },
    {
      id: "man-3",
      title: "Локализация производства: стратегии успеха",
      category: "Стратегия",
      date: "18 октября 2025",
      description: "Как компании успешно локализуют производство в текущих условиях.",
      href: "/media/articles/localization-strategies",
      type: "insight",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
  ],

  defense: [
    {
      id: "def-1",
      title: "ОПК: развитие кооперации",
      category: "Отрасль",
      date: "8 декабря 2025",
      description: "Тренды в организации производственной кооперации в оборонно-промышленном комплексе.",
      href: "/media/articles/opk-cooperation",
      type: "research",
      image: "https://images.unsplash.com/photo-1580745089072-a5b8e7e8c8c7?w=600&h=400&fit=crop",
    },
    {
      id: "def-2",
      title: "Цифровизация в ОПК",
      category: "Технологии",
      date: "25 ноября 2025",
      description: "Как цифровые технологии повышают эффективность предприятий оборонной промышленности.",
      href: "/media/articles/opk-digital",
      type: "article",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: "def-3",
      title: "Кадры для ОПК: вызовы и решения",
      category: "HR",
      date: "12 октября 2025",
      description: "Как предприятия решают задачу привлечения и развития квалифицированных кадров.",
      href: "/media/articles/opk-hr",
      type: "insight",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
  ],

  energy: [
    {
      id: "energy-1",
      title: "Энергетика России: структурные изменения",
      category: "Обзор рынка",
      date: "16 декабря 2025",
      description: "Как меняется структура энергетического баланса и какие технологии развиваются.",
      href: "/media/articles/energy-structure",
      type: "research",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
    {
      id: "energy-2",
      title: "Возобновляемая энергетика: возможности",
      category: "Инвестиции",
      date: "8 ноября 2025",
      description: "Перспективы развития ВИЭ в России: механизмы поддержки и инвестиционные проекты.",
      href: "/media/articles/renewable-energy",
      type: "article",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    },
    {
      id: "energy-3",
      title: "Умные сети и цифровизация энергетики",
      category: "Технологии",
      date: "22 сентября 2025",
      description: "Smart Grid и цифровые технологии в распределительной энергетике.",
      href: "/media/articles/smart-grid",
      type: "insight",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop",
    },
  ],

  urbanistics: [
    {
      id: "urb-1",
      title: "Мастер-планирование городов: тренды 2026",
      category: "Обзор рынка",
      date: "12 декабря 2025",
      description: "Современные подходы к развитию городских территорий и агломераций.",
      href: "/media/articles/master-planning-2026",
      type: "research",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
    },
    {
      id: "urb-2",
      title: "Цифровые двойники городов",
      category: "Технологии",
      date: "5 ноября 2025",
      description: "Как цифровые технологии помогают управлять городской инфраструктурой.",
      href: "/media/articles/city-digital-twins",
      type: "article",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
    },
    {
      id: "urb-3",
      title: "Государственное финансирование городской инфраструктуры",
      category: "Инвестиции",
      date: "20 октября 2025",
      description: "Механизмы привлечения средств для развития городской среды.",
      href: "/media/articles/urban-infrastructure-funding",
      type: "insight",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    },
  ],

  government: [
    {
      id: "gov-1",
      title: "Цифровая трансформация госсектора",
      category: "Технологии",
      date: "10 декабря 2025",
      description: "Как государственные органы внедряют цифровые сервисы для граждан.",
      href: "/media/articles/gov-digital-transformation",
      type: "research",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    },
    {
      id: "gov-2",
      title: "Госпрограммы: эффективность управления",
      category: "Управление",
      date: "28 ноября 2025",
      description: "Методологии оценки и повышения эффективности государственных программ.",
      href: "/media/articles/gov-programs-efficiency",
      type: "article",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      id: "gov-3",
      title: "Инвестиционные проекты с государственным участием",
      category: "Инвестиции",
      date: "15 октября 2025",
      description: "Особенности структурирования и реализации проектов с госфинсированием.",
      href: "/media/articles/gov-investment-projects",
      type: "insight",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ],

  shipbuilding: [
    {
      id: "ship-1",
      title: "Судостроение России: курс на обновление",
      category: "Обзор рынка",
      date: "8 декабря 2025",
      description: "Состояние и перспективы российской судостроительной отрасли.",
      href: "/media/articles/shipbuilding-outlook",
      type: "research",
      image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=400&fit=crop",
    },
    {
      id: "ship-2",
      title: "Цифровое проектирование судов",
      category: "Технологии",
      date: "25 ноября 2025",
      description: "Современные технологии проектирования и строительства морской техники.",
      href: "/media/articles/digital-ship-design",
      type: "article",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
    },
    {
      id: "ship-3",
      title: "Господдержка судостроения",
      category: "Инвестиции",
      date: "12 октября 2025",
      description: "Механизмы государственной поддержки судостроительных проектов.",
      href: "/media/articles/shipbuilding-support",
      type: "insight",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=400&fit=crop",
    },
  ],
};

// Публикации по умолчанию (для отраслей без специфических публикаций)
export const defaultPublications: Publication[] = [
  {
    id: "default-1",
    title: "Тренды цифровой трансформации 2026",
    category: "Технологии",
    date: "15 января 2026",
    description: "Ключевые направления цифровизации бизнеса: искусственный интеллект, автоматизация процессов.",
    href: "/media/articles/digital-transformation-2026",
    type: "research",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: "default-2",
    title: "Российский рынок M&A: итоги года",
    category: "Инвестиции",
    date: "10 января 2026",
    description: "Ежегодный обзор рынка слияний и поглощений: ключевые сделки и прогнозы.",
    href: "/media/articles/ma-review",
    type: "article",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "default-3",
    title: "ESG-трансформация бизнеса",
    category: "Стратегия",
    date: "5 января 2026",
    description: "Как интегрировать принципы устойчивого развития в бизнес-процессы.",
    href: "/media/articles/esg-transformation",
    type: "insight",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
];

// Функция для получения публикаций по slug отрасли
export function getPublicationsByIndustry(slug: string): Publication[] {
  return industryPublications[slug] || defaultPublications;
}
