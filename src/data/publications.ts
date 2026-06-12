/**
 * Единый источник данных для всех публикаций пресс-центра.
 * Новости, статьи, инсайты — всё здесь.
 */

export type PublicationType = "news" | "article" | "insight";

export interface Publication {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  type: PublicationType;
  image?: string;
  author?: string;
  readTime?: string;
  featured?: boolean;
  /** Полный текст публикации (для страницы [slug]) */
  content?: string[];
}

/* ═══════════════════════════════════════════════════════
   НОВОСТИ
   ═══════════════════════════════════════════════════════ */
export const newsPublications: Publication[] = [
  {
    id: "news-1",
    slug: "rebranding-2025",
    title: "Мы провели ребрендинг — и это отличная возможность заново представить себя",
    category: "Компания",
    date: "13 мая 2025",
    description:
      "АРАСАКА Консалтинг обновила фирменный стиль, чтобы точнее отразить, кто мы есть сегодня и куда движемся вместе с нашими клиентами. Новый облик подчеркивает нашу экспертизу, ответственность за результат и внимание к сути.",
    type: "news",
    featured: true,
    content: [
      "Новый облик — та же суть. Мы обновили фирменный стиль, чтобы точнее отражать, кто мы есть сегодня и куда идем вместе с нашими клиентами. За визуальными изменениями стоит всё то же, что всегда было в основе нашей работы: глубокая экспертиза, ответственность за результат и внимание к сути.",
      "АРАСАКА Консалтинг — это команда, которая помогает управлять сложными процессами, реализовывать важные проекты и достигать устойчивого роста. Мы работаем с крупными компаниями, государственными структурами и инфраструктурными инициативами, где особенно важны системный подход и точное исполнение.",
      "Мы специализируемся на трёх ключевых направлениях: повышении эффективности управления, цифровой трансформации и управлении инвестиционными программами и проектами. Мы проводим диагностику, настраиваем процессы, внедряем цифровые решения и сопровождаем проекты на всех этапах. Для нас это не просто консалтинг, а практическая реализация изменений, которые действительно работают.",
      "Ребрендинг — это не только про новый логотип и визуальный стиль. Это шаг, который помогает нам ещё яснее транслировать нашу позицию и ценности, говорить с клиентами на одном языке и строить коммуникацию, соответствующую масштабам задач, с которыми мы работаем.",
      "Спасибо, что вы с нами — давно или только знакомитесь. Мы открыты к диалогу и будем рады рассказать подробнее, чем можем быть полезны именно вам и вашему проекту. Новый этап для нас — это новые возможности для совместной работы.",
    ],
  },
  {
    id: "news-2",
    slug: "new-consulting-direction",
    title: "Арасака открывает новое направление консалтинга",
    category: "Компания",
    date: "20 января 2026",
    description:
      "Мы рады объявить об открытии нового направления, специализирующегося на цифровой трансформации и технологическом консалтинге. Это позволит нам предложить клиентам комплексные решения по модернизации бизнес-процессов.",
    type: "news",
  },
  {
    id: "news-3",
    slug: "digital-economy-conference",
    title: "Арасака — партнёр конференции «Цифровая экономика»",
    category: "События",
    date: "10 января 2026",
    description:
      "Компания стала официальным партнёром ежегодной конференции по цифровой трансформации бизнеса. Спикеры Арасаки представят кейсы успешной цифровизации в промышленном секторе.",
    type: "news",
  },
  {
    id: "news-4",
    slug: "year-results-2025",
    title: "Итоги года: ключевые достижения Арасаки",
    category: "Компания",
    date: "28 декабря 2025",
    description:
      "Подводим итоги 2025 года: реализовано более 50 проектов, открыто новое направление аналитики данных, команда выросла на 30%. Благодарим наших клиентов и партнёров за доверие.",
    type: "news",
  },
  {
    id: "news-5",
    slug: "consultant-of-the-year-award",
    title: "Арасака получила награду «Консультант года»",
    category: "Награды",
    date: "15 декабря 2025",
    description:
      "По итогам голосования профессионального сообщества компания Арасака признана «Консультантом года» в номинации «Стратегический консалтинг». Благодарим за признание нашей работы.",
    type: "news",
  },
  {
    id: "news-6",
    slug: "minsk-office-opening",
    title: "Открыт офис Арасаки в Минске",
    category: "Компания",
    date: "1 декабря 2025",
    description:
      "Расширяем географию присутствия — открыт офис в Минске, Беларусь. Теперь мы можем оперативно работать с проектами в Беларуси и странах СНГ.",
    type: "news",
  },
  {
    id: "news-7",
    slug: "invest-cloud-launch",
    title: "Запуск платформы Arasaca Invest Cloud",
    category: "Продукты",
    date: "20 ноября 2025",
    description:
      "Представляем собственную облачную платформу для управления инвестиционными проектами. Решение уже внедрено у ряда крупных клиентов из промышленного сектора.",
    type: "news",
  },
  {
    id: "news-8",
    slug: "consultants-association",
    title: "Арасака присоединилась к Ассоциации консультантов",
    category: "Компания",
    date: "5 ноября 2025",
    description:
      "Компания стала членом Национальной ассоциации консультантов по экономике и управлению. Это подтверждает наш профессиональный уровень и приверженность стандартам качества.",
    type: "news",
  },
  {
    id: "news-9",
    slug: "ma-review-2025",
    title: "Выпуск ежегодного обзора рынка M&A",
    category: "Исследования",
    date: "25 октября 2025",
    description:
      "Опубликован ежегодный обзор рынка слияний и поглощений в России. Исследование охватывает ключевые сделки, тренды и прогнозы развития рынка корпоративного контроля.",
    type: "news",
  },
  {
    id: "news-10",
    slug: "top-50-consulting-rating",
    title: "Арасака вошла в рейтинг ТОП-50 консалтинговых компаний России",
    category: "Награды",
    date: "20 января 2026",
    description:
      "Компания Арасака включена в ежегодный рейтинг ведущих консалтинговых компаний России по версии экспертного сообщества.",
    type: "news",
    featured: true,
  },
];

/* ═══════════════════════════════════════════════════════
   СТАТЬИ
   ═══════════════════════════════════════════════════════ */
export const articlePublications: Publication[] = [
  {
    id: "art-1",
    slug: "bi-system-selection",
    title: "Как выбрать BI-систему для вашего бизнеса",
    category: "Технологии",
    date: "18 января 2026",
    author: "Алексей Петров",
    readTime: "8 мин",
    description:
      "Сравнительный анализ популярных BI-платформ и рекомендации по выбору оптимального решения для вашего бизнеса.",
    type: "article",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "art-2",
    slug: "growth-strategy-uncertainty",
    title: "Интервью: стратегии роста в условиях неопределённости",
    category: "Стратегия",
    date: "12 января 2026",
    author: "Мария Иванова",
    readTime: "12 мин",
    description:
      "Экспертное мнение о том, как компаниям адаптироваться к изменениям и находить новые возможности для развития.",
    type: "article",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    id: "art-3",
    slug: "esg-transformation-guide",
    title: "ESG-трансформация: практическое руководство",
    category: "Устойчивое развитие",
    date: "5 января 2026",
    author: "Елена Сидорова",
    readTime: "15 мин",
    description:
      "Как интегрировать принципы устойчивого развития в бизнес-процессы компании. Практические шаги и кейсы.",
    type: "article",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
  {
    id: "art-4",
    slug: "digital-transformation-start",
    title: "Цифровая трансформация: с чего начать",
    category: "Технологии",
    date: "28 декабря 2025",
    author: "Дмитрий Козлов",
    readTime: "10 мин",
    description:
      "Пошаговое руководство по запуску цифровой трансформации в компании. Типичные ошибки и как их избежать.",
    type: "article",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: "art-5",
    slug: "change-management",
    title: "Управление изменениями в крупных организациях",
    category: "Управление",
    date: "20 декабря 2025",
    author: "Анна Михайлова",
    readTime: "14 мин",
    description:
      "Методологии и инструменты для эффективного управления организационными изменениями.",
    type: "article",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: "art-6",
    slug: "financial-modeling",
    title: "Финансовое моделирование: основы и продвинутые техники",
    category: "Финансы",
    date: "15 декабря 2025",
    author: "Сергей Волков",
    readTime: "20 мин",
    description:
      "Как строить финансовые модели для инвестиционных проектов и стратегического планирования.",
    type: "article",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "art-7",
    slug: "automation-roi",
    title: "Автоматизация бизнес-процессов: ROI и эффективность",
    category: "Технологии",
    date: "8 декабря 2025",
    author: "Алексей Петров",
    readTime: "11 мин",
    description:
      "Как оценить экономический эффект от автоматизации и правильно рассчитать ROI проектов цифровизации.",
    type: "article",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
  },
  {
    id: "art-8",
    slug: "hr-analytics",
    title: "HR-аналитика: от данных к решениям",
    category: "HR",
    date: "1 декабря 2025",
    author: "Ольга Новикова",
    readTime: "9 мин",
    description:
      "Использование данных для принятия управленческих решений в области управления персоналом.",
    type: "article",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
];

/* ═══════════════════════════════════════════════════════
   ИНСАЙТЫ И АНАЛИТИКА
   ═══════════════════════════════════════════════════════ */
export const insightPublications: Publication[] = [
  {
    id: "ins-1",
    slug: "digital-transformation-trends-2026",
    title: "Тренды цифровой трансформации 2026",
    category: "Технологии",
    date: "15 января 2026",
    description:
      "Ключевые направления цифровизации бизнеса в 2026 году: искусственный интеллект, автоматизация процессов и новые технологии управления данными.",
    type: "insight",
    featured: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: "ins-2",
    slug: "ma-market-review-2025",
    title: "Обзор рынка M&A в России 2025",
    category: "Инвестиции",
    date: "15 января 2026",
    description:
      "Ежегодный обзор рынка слияний и поглощений: ключевые сделки, тренды и прогнозы на 2026 год.",
    type: "insight",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "ins-3",
    slug: "cloud-technology-forecast",
    title: "Прогноз развития рынка облачных технологий",
    category: "IT",
    date: "8 января 2026",
    description:
      "Анализ текущего состояния и перспективы развития облачного рынка в России и мире.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop",
  },
  {
    id: "ins-4",
    slug: "it-investment-outlook",
    title: "Инвестиции в IT: куда движется рынок",
    category: "Инвестиции",
    date: "25 декабря 2025",
    description:
      "Обзор инвестиционной активности в технологическом секторе и прогнозы на ближайшие годы.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: "ins-5",
    slug: "industrial-automation-market",
    title: "Рынок промышленной автоматизации 2025",
    category: "Промышленность",
    date: "18 декабря 2025",
    description:
      "Состояние и тенденции рынка промышленной автоматизации в России. Ключевые игроки и технологии.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
  },
  {
    id: "ins-6",
    slug: "retail-year-review",
    title: "Российский ритейл: итоги года",
    category: "Ритейл",
    date: "12 декабря 2025",
    description:
      "Аналитический обзор российского рынка розничной торговли. Тренды, вызовы и возможности.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: "ins-7",
    slug: "hr-trends-2026",
    title: "HR-тренды 2026: чего ждать работодателям",
    category: "HR",
    date: "5 декабря 2025",
    description:
      "Ключевые тенденции на рынке труда и управлении персоналом. Прогнозы и рекомендации для работодателей.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
  {
    id: "ins-8",
    slug: "energy-transition-global",
    title: "Энергетический переход: глобальный контекст",
    category: "Энергетика",
    date: "28 ноября 2025",
    description:
      "Мировые тренды энергетического перехода и их влияние на российский рынок.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
  {
    id: "ins-9",
    slug: "financial-sector-digitalization",
    title: "Финансовый сектор: цифровизация продолжается",
    category: "Финансы",
    date: "20 ноября 2025",
    description:
      "Как банки и финансовые организации внедряют цифровые технологии для улучшения клиентского опыта.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

/* ═══════════════════════════════════════════════════════
   ОТРАСЛЕВЫЕ ПУБЛИКАЦИИ (для страниц отраслей)
   ═══════════════════════════════════════════════════════ */
export const industryPublications: Record<string, Publication[]> = {
  nuclear: [
    {
      id: "nuclear-1",
      slug: "nuclear-energy-2025-review",
      title: "Атомная энергетика России: итоги 2025 года",
      category: "Обзор рынка",
      date: "15 декабря 2025",
      description: "Анализ ключевых событий в атомной отрасли: новые энергоблоки, экспортные контракты и развитие замкнутого топливного цикла.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop",
    },
    {
      id: "nuclear-2",
      slug: "rosatom-digitalization",
      title: "Цифровизация в Росатоме: кейсы и тренды",
      category: "Технологии",
      date: "3 ноября 2025",
      description: "Как цифровые технологии трансформируют атомную отрасль: от проектирования до эксплуатации АЭС.",
      type: "article",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: "nuclear-3",
      slug: "nuclear-export-potential",
      title: "Экспортный потенциал атомного машиностроения",
      category: "Инвестиции",
      date: "20 октября 2025",
      description: "Анализ возможностей для российских компаний в международных проектах атомной энергетики.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
  ],
  construction: [
    {
      id: "const-1",
      slug: "construction-market-2026",
      title: "Рынок строительства России: прогноз 2026",
      category: "Обзор рынка",
      date: "10 декабря 2025",
      description: "Ключевые тренды строительной отрасли: инфраструктурные проекты, девелопмент и государственные программы.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      id: "const-2",
      slug: "digital-construction-management",
      title: "Цифровые технологии в управлении стройкой",
      category: "Технологии",
      date: "28 ноября 2025",
      description: "BIM, цифровые двойники и системы управления проектами: как технологии меняют подход к строительству.",
      type: "article",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
    },
    {
      id: "const-3",
      slug: "infrastructure-government-programs",
      title: "Госпрограммы развития инфраструктуры",
      category: "Госсектор",
      date: "15 октября 2025",
      description: "Обзор федеральных и региональных программ финансирования инфраструктурных проектов.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    },
  ],
  "oil-gas": [
    {
      id: "oil-1",
      slug: "oil-gas-adaptation",
      title: "Нефтегазовый сектор: адаптация к новым условиям",
      category: "Обзор рынка",
      date: "12 декабря 2025",
      description: "Как российские нефтегазовые компании трансформируют бизнес-модели и развивают новые направления.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    },
    {
      id: "oil-2",
      slug: "gas-chemistry-investments",
      title: "Газохимия: инвестиционные возможности",
      category: "Инвестиции",
      date: "5 ноября 2025",
      description: "Анализ перспектив развития газохимических производств и механизмов господдержки.",
      type: "article",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    },
    {
      id: "oil-3",
      slug: "oil-gas-esg",
      title: "ESG в нефтегазовой отрасли",
      category: "Стратегия",
      date: "20 сентября 2025",
      description: "Как нефтегазовые компании интегрируют принципы устойчивого развития в свою деятельность.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
  ],
  it: [
    {
      id: "it-1",
      slug: "it-market-2025",
      title: "ИТ-рынок России: рост и импортозамещение",
      category: "Обзор рынка",
      date: "18 декабря 2025",
      description: "Динамика российского ИТ-рынка, ключевые драйверы роста и приоритеты импортозамещения.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: "it-2",
      slug: "ai-corporate-sector",
      title: "Искусственный интеллект в корпоративном секторе",
      category: "Технологии",
      date: "10 ноября 2025",
      description: "Практические кейсы внедрения ИИ в российских компаниях: от пилотов до масштабирования.",
      type: "article",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      id: "it-3",
      slug: "cybersecurity-trends",
      title: "Кибербезопасность: тренды и решения",
      category: "Безопасность",
      date: "25 октября 2025",
      description: "Актуальные угрозы и подходы к построению защищённой ИТ-инфраструктуры.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    },
  ],
  manufacturing: [
    {
      id: "man-1",
      slug: "manufacturing-growth-points",
      title: "Машиностроение России: точки роста",
      category: "Обзор рынка",
      date: "14 декабря 2025",
      description: "Какие сегменты машиностроения показывают рост и где сосредоточены инвестиции.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    },
    {
      id: "man-2",
      slug: "industry-4-russian-plants",
      title: "Индустрия 4.0 на российских заводах",
      category: "Технологии",
      date: "2 ноября 2025",
      description: "Автоматизация, роботизация и цифровые двойники в производстве: практический опыт.",
      type: "article",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
    },
    {
      id: "man-3",
      slug: "localization-strategies",
      title: "Локализация производства: стратегии успеха",
      category: "Стратегия",
      date: "18 октября 2025",
      description: "Как компании успешно локализуют производство в текущих условиях.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
  ],
  defense: [
    {
      id: "def-1",
      slug: "opk-cooperation",
      title: "ОПК: развитие кооперации",
      category: "Отрасль",
      date: "8 декабря 2025",
      description: "Тренды в организации производственной кооперации в оборонно-промышленном комплексе.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1580745089072-a5b8e7e8c8c7?w=600&h=400&fit=crop",
    },
    {
      id: "def-2",
      slug: "opk-digitalization",
      title: "Цифровизация в ОПК",
      category: "Технологии",
      date: "25 ноября 2025",
      description: "Как цифровые технологии повышают эффективность предприятий оборонной промышленности.",
      type: "article",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: "def-3",
      slug: "opk-hr-challenges",
      title: "Кадры для ОПК: вызовы и решения",
      category: "HR",
      date: "12 октября 2025",
      description: "Как предприятия решают задачу привлечения и развития квалифицированных кадров.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
  ],
  energy: [
    {
      id: "energy-1",
      slug: "energy-structural-changes",
      title: "Энергетика России: структурные изменения",
      category: "Обзор рынка",
      date: "16 декабря 2025",
      description: "Как меняется структура энергетического баланса и какие технологии развиваются.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
    {
      id: "energy-2",
      slug: "renewable-energy-opportunities",
      title: "Возобновляемая энергетика: возможности",
      category: "Инвестиции",
      date: "8 ноября 2025",
      description: "Перспективы развития ВИЭ в России: механизмы поддержки и инвестиционные проекты.",
      type: "article",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    },
    {
      id: "energy-3",
      slug: "smart-grid-digitalization",
      title: "Умные сети и цифровизация энергетики",
      category: "Технологии",
      date: "22 сентября 2025",
      description: "Smart Grid и цифровые технологии в распределительной энергетике.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop",
    },
  ],
  urbanistics: [
    {
      id: "urb-1",
      slug: "master-planning-trends-2026",
      title: "Мастер-планирование городов: тренды 2026",
      category: "Обзор рынка",
      date: "12 декабря 2025",
      description: "Современные подходы к развитию городских территорий и агломераций.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
    },
    {
      id: "urb-2",
      slug: "city-digital-twins",
      title: "Цифровые двойники городов",
      category: "Технологии",
      date: "5 ноября 2025",
      description: "Как цифровые технологии помогают управлять городской инфраструктурой.",
      type: "article",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
    },
    {
      id: "urb-3",
      slug: "urban-infrastructure-funding",
      title: "Государственное финансирование городской инфраструктуры",
      category: "Инвестиции",
      date: "20 октября 2025",
      description: "Механизмы привлечения средств для развития городской среды.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    },
  ],
  government: [
    {
      id: "gov-1",
      slug: "gov-digital-transformation",
      title: "Цифровая трансформация госсектора",
      category: "Технологии",
      date: "10 декабря 2025",
      description: "Как государственные органы внедряют цифровые сервисы для граждан.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    },
    {
      id: "gov-2",
      slug: "gov-programs-efficiency",
      title: "Госпрограммы: эффективность управления",
      category: "Управление",
      date: "28 ноября 2025",
      description: "Методологии оценки и повышения эффективности государственных программ.",
      type: "article",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      id: "gov-3",
      slug: "gov-investment-projects",
      title: "Инвестиционные проекты с государственным участием",
      category: "Инвестиции",
      date: "15 октября 2025",
      description: "Особенности структурирования и реализации проектов с госфинсированием.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ],
  shipbuilding: [
    {
      id: "ship-1",
      slug: "shipbuilding-renewal",
      title: "Судостроение России: курс на обновление",
      category: "Обзор рынка",
      date: "8 декабря 2025",
      description: "Состояние и перспективы российской судостроительной отрасли.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=400&fit=crop",
    },
    {
      id: "ship-2",
      slug: "digital-ship-design",
      title: "Цифровое проектирование судов",
      category: "Технологии",
      date: "25 ноября 2025",
      description: "Современные технологии проектирования и строительства морской техники.",
      type: "article",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
    },
    {
      id: "ship-3",
      slug: "shipbuilding-state-support",
      title: "Господдержка судостроения",
      category: "Инвестиции",
      date: "12 октября 2025",
      description: "Механизмы государственной поддержки судостроительных проектов.",
      type: "insight",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=400&fit=crop",
    },
  ],
};

/* ═══════════════════════════════════════════════════════
   ALL PUBLICATIONS (combined)
   ═══════════════════════════════════════════════════════ */
export const allPublications: Publication[] = [
  ...newsPublications,
  ...articlePublications,
  ...insightPublications,
];

/* ═══════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════ */

/** Получить публикацию по slug */
export function getPublicationBySlug(slug: string): Publication | undefined {
  return allPublications.find((p) => p.slug === slug);
}

/** Получить все публикации данного типа */
export function getPublicationsByType(type: PublicationType): Publication[] {
  return allPublications.filter((p) => p.type === type);
}

/** Получить featured-публикации */
export function getFeaturedPublications(): Publication[] {
  return allPublications.filter((p) => p.featured);
}

/** Получить последние N публикаций (сортировка по дате) */
export function getLatestPublications(count: number = 6): Publication[] {
  return [...allPublications]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

/** Получить публикации по отрасли */
export function getPublicationsByIndustry(slug: string): Publication[] {
  return industryPublications[slug] || defaultPublications;
}

/** Публикации по умолчанию (для отраслей без специфических публикаций) */
export const defaultPublications: Publication[] = [
  {
    id: "default-1",
    slug: "digital-transformation-2026",
    title: "Тренды цифровой трансформации 2026",
    category: "Технологии",
    date: "15 января 2026",
    description: "Ключевые направления цифровизации бизнеса: искусственный интеллект, автоматизация процессов.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: "default-2",
    slug: "ma-review-2026",
    title: "Российский рынок M&A: итоги года",
    category: "Инвестиции",
    date: "10 января 2026",
    description: "Ежегодный обзор рынка слияний и поглощений: ключевые сделки и прогнозы.",
    type: "article",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "default-3",
    slug: "esg-business-transformation",
    title: "ESG-трансформация бизнеса",
    category: "Стратегия",
    date: "5 января 2026",
    description: "Как интегрировать принципы устойчивого развития в бизнес-процессы.",
    type: "insight",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
];

/** Тип лейбл для отображения */
export const typeLabels: Record<PublicationType, string> = {
  news: "Новости",
  article: "Статьи",
  insight: "Инсайты",
};

/** href для раздела по типу */
export const typeHrefs: Record<PublicationType, string> = {
  news: "/press-center",
  article: "/press-center",
  insight: "/press-center",
};
