"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Tag,
  TrendingUp,
  Newspaper,
  Lightbulb,
  Filter,
} from "lucide-react";

// Sample publications data
const featuredArticle = {
  title: "Тренды цифровой трансформации 2026",
  category: "Аналитика",
  date: "15 января 2026",
  description:
    "Ключевые направления цифровизации бизнеса в 2026 году: искусственный интеллект, автоматизация процессов и новые технологии управления данными.",
  image: null,
  type: "insights",
};

const publications = [
  {
    title: "Арасака открывает новое направление консалтинга",
    category: "Новости",
    date: "20 января 2026",
    description:
      "Мы рады announce открытие нового направления, специализирующегося на цифровой трансформации и технологическом консалтинге.",
    type: "news",
  },
  {
    title: "Как выбрать BI-систему для вашего бизнеса",
    category: "Статьи",
    date: "18 января 2026",
    description:
      "Сравнительный анализ популярных BI-платформ и рекомендации по выбору оптимального решения.",
    type: "articles",
  },
  {
    title: "Обзор рынка M&A в России 2025",
    category: "Аналитика",
    date: "15 января 2026",
    description:
      "Ежегодный обзор рынка слияний и поглощений: ключевые сделки, тренды и прогнозы на 2026 год.",
    type: "insights",
  },
  {
    title: "Интервью: стратегии роста в условиях неопределённости",
    category: "Статьи",
    date: "12 января 2026",
    description:
      "Экспертное мнение о том, как компаниям адаптироваться к изменениям и находить новые возможности.",
    type: "articles",
  },
  {
    title: "Арасака — партнёр конференции «Цифровая экономика»",
    category: "Новости",
    date: "10 января 2026",
    description:
      "Компания стала официальным партнёром ежегодной конференции по цифровой трансформации бизнеса.",
    type: "news",
  },
  {
    title: "Прогноз развития рынка облачных технологий",
    category: "Аналитика",
    date: "8 января 2026",
    description:
      "Анализ текущего состояния и перспективы развития облачного рынка в России и мире.",
    type: "insights",
  },
  {
    title: "ESG-трансформация: практическое руководство",
    category: "Статьи",
    date: "5 января 2026",
    description:
      "Как интегрировать принципы устойчивого развития в бизнес-процессы компании.",
    type: "articles",
  },
  {
    title: "Итоги года: ключевые достижения Арасаки",
    category: "Новости",
    date: "28 декабря 2025",
    description:
      "Подводим итоги 2025 года: реализованные проекты, новые направления и достижения команды.",
    type: "news",
  },
  {
    title: "Инвестиции в IT: куда движется рынок",
    category: "Аналитика",
    date: "25 декабря 2025",
    description:
      "Обзор инвестиционной активности в технологическом секторе и прогнозы на ближайшие годы.",
    type: "insights",
  },
];

const categories = [
  { id: "all", name: "Все материалы", icon: Filter },
  { id: "news", name: "Новости компании", icon: Newspaper },
  { id: "articles", name: "Статьи", icon: Tag },
  { id: "insights", name: "Инсайты и аналитика", icon: TrendingUp },
];

const industries = [
  "Все отрасли",
  "Финансы",
  "Энергетика",
  "Промышленность",
  "Телеком",
  "Ритейл",
  "IT",
];

const years = ["2026", "2025", "2024"];

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("Все отрасли");
  const [activeYear, setActiveYear] = useState("2026");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPublications =
    activeCategory === "all"
      ? publications
      : publications.filter((p) => p.type === activeCategory);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-[120px] pb-12 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#008C95]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#008C95]">Медиацентр</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#008C95] mb-6">
              Медиацентр
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Единый доступ ко всем публикациям Арасака Консалтинг — статьи,
              аналитика, интервью, новости и исследования.
            </p>
          </motion.div>
        </div>

        {/* Decorative triangle */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[40px]"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,40 L600,0 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="container-kept">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#008C95] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === "all" && (
        <section className="py-12 bg-white">
          <div className="container-kept">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/media/insights/trends-2026"
                className="block group"
              >
                <div className="grid lg:grid-cols-2 gap-8 border border-gray-200 overflow-hidden">
                  {/* Image */}
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-[#008C95] to-[#00313C] flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-white/30" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#008C95] text-white text-xs font-medium">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#008C95] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {featuredArticle.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#008C95] font-medium">
                      Читать
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-6 bg-gray-50 border-y border-gray-200">
        <div className="container-kept">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm text-gray-600 hover:border-[#008C95] hover:text-[#008C95] transition-colors"
            >
              <Filter className="w-4 h-4" />
              Фильтры
            </button>

            {showFilters && (
              <div className="flex flex-wrap gap-4 mt-4 lg:mt-0 w-full lg:w-auto">
                {/* Industry Filter */}
                <select
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                  className="px-4 py-2 border border-gray-300 text-sm text-gray-600 bg-white focus:border-[#008C95] focus:outline-none"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>

                {/* Year Filter */}
                <select
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 text-sm text-gray-600 bg-white focus:border-[#008C95] focus:outline-none"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="ml-auto text-sm text-gray-400">
              {filteredPublications.length} материалов
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 hover:shadow-lg transition-shadow group"
              >
                <Link
                  href={`/media/${publication.type}/${
                    publication.title.toLowerCase().split(" ").slice(0, 3).join("-") ||
                    "article"
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {publication.type === "news" && (
                      <Newspaper className="w-12 h-12 text-gray-300" />
                    )}
                    {publication.type === "articles" && (
                      <Tag className="w-12 h-12 text-gray-300" />
                    )}
                    {publication.type === "insights" && (
                      <Lightbulb className="w-12 h-12 text-gray-300" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium ${
                          publication.type === "news"
                            ? "bg-blue-100 text-blue-700"
                            : publication.type === "articles"
                            ? "bg-green-100 text-green-700"
                            : "bg-[#e8f5f3] text-[#008C95]"
                        }`}
                      >
                        {publication.category}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 mb-2 block">
                      {publication.date}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#008C95] transition-colors line-clamp-2">
                      {publication.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {publication.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 border border-[#008C95] text-[#008C95] font-medium hover:bg-[#008C95] hover:text-white transition-colors">
              Показать ещё
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 bg-[#008C95] relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Подпишитесь на рассылку
            </h2>
            <p className="text-white/70 mb-8">
              Получайте свежие статьи, аналитику и новости компании прямо на
              вашу почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <button className="px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors">
                Подписаться
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl" />
        </div>
      </section>

    </main>
  );
}
