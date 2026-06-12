"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  TrendingUp,
  Filter,
  Download,
  Eye,
} from "lucide-react";

const insights = [
  {
    title: "Тренды цифровой трансформации 2026",
    category: "Технологии",
    date: "15 января 2026",
    description:
      "Ключевые направления цифровизации бизнеса в 2026 году: искусственный интеллект, автоматизация процессов и новые технологии управления данными.",
    type: "Обзор",
    featured: true,
  },
  {
    title: "Обзор рынка M&A в России 2025",
    category: "Инвестиции",
    date: "15 января 2026",
    description:
      "Ежегодный обзор рынка слияний и поглощений: ключевые сделки, тренды и прогнозы на 2026 год.",
    type: "Отчёт",
    featured: true,
  },
  {
    title: "Прогноз развития рынка облачных технологий",
    category: "IT",
    date: "8 января 2026",
    description:
      "Анализ текущего состояния и перспективы развития облачного рынка в России и мире.",
    type: "Аналитика",
  },
  {
    title: "Инвестиции в IT: куда движется рынок",
    category: "Инвестиции",
    date: "25 декабря 2025",
    description:
      "Обзор инвестиционной активности в технологическом секторе и прогнозы на ближайшие годы.",
    type: "Обзор",
  },
  {
    title: "Рынок промышленной автоматизации 2025",
    category: "Промышленность",
    date: "18 декабря 2025",
    description:
      "Состояние и тенденции рынка промышленной автоматизации в России. Ключевые игроки и технологии.",
    type: "Отчёт",
  },
  {
    title: "Российский ритейл: итоги года",
    category: "Ритейл",
    date: "12 декабря 2025",
    description:
      "Аналитический обзор российского рынка розничной торговли. Тренды, вызовы и возможности.",
    type: "Аналитика",
  },
  {
    title: "HR-тренды 2026: чего ждать работодателям",
    category: "HR",
    date: "5 декабря 2025",
    description:
      "Ключевые тенденции на рынке труда и управлении персоналом. Прогнозы и рекомендации для работодателей.",
    type: "Обзор",
  },
  {
    title: "Энергетический переход: глобальный контекст",
    category: "Энергетика",
    date: "28 ноября 2025",
    description:
      "Мировые тренды энергетического перехода и их влияние на российский рынок.",
    type: "Аналитика",
  },
  {
    title: "Финансовый сектор: цифровизация продолжается",
    category: "Финансы",
    date: "20 ноября 2025",
    description:
      "Как банки и финансовые организации внедряют цифровые технологии для улучшения клиентского опыта.",
    type: "Обзор",
  },
];

const categories = [
  "Все направления",
  "Технологии",
  "Инвестиции",
  "IT",
  "Промышленность",
  "Ритейл",
  "HR",
  "Энергетика",
  "Финансы",
];

const types = ["Все типы", "Обзор", "Отчёт", "Аналитика", "Исследование"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Все направления");
  const [activeType, setActiveType] = useState("Все типы");
  const [showFilters, setShowFilters] = useState(false);

  const featuredInsights = insights.filter((i) => i.featured);
  const regularInsights = insights.filter((i) => !i.featured);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-[120px] pb-12 bg-gradient-to-b from-[#e8f5f3] to-white">
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#008C95]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/media" className="hover:text-[#008C95]">
              Медиацентр
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#008C95]">
              Инсайты и аналитика
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#008C95]" />
              <span className="text-sm font-medium text-[#008C95] uppercase tracking-wider">
                Аналитические материалы
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#008C95] mb-6">
              Инсайты и аналитика
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Обзоры рынков, отраслевые исследования, аналитические отчёты и
              прогнозы. Глубокий анализ трендов и данных для принятия решений.
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

      {/* Featured Insights */}
      <section className="py-12 bg-white">
        <div className="container-kept">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Рекомендуем
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {featuredInsights.map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 hover:shadow-lg transition-shadow group"
              >
                <Link href="#" className="block">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-[#008C95] to-[#00313C] flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-[#008C95] text-white text-xs font-medium">
                        {insight.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {insight.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#008C95] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {insight.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {insight.date}
                      </span>
                      <span className="text-[#008C95] text-sm font-medium flex items-center gap-1">
                        Читать
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
              <>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 text-sm text-gray-600 bg-white focus:border-[#008C95] focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <select
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 text-sm text-gray-600 bg-white focus:border-[#008C95] focus:outline-none"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </>
            )}

            <div className="ml-auto text-sm text-gray-400">
              {insights.length} материалов
            </div>
          </div>
        </div>
      </section>

      {/* Insights List */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="space-y-4">
            {regularInsights.map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 hover:border-[#008C95] transition-colors group"
              >
                <Link
                  href="#"
                  className="flex flex-col md:flex-row gap-6 p-6"
                >
                  {/* Image */}
                  <div className="flex-shrink-0 w-full md:w-48 aspect-video md:aspect-[4/3] bg-gray-100 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-gray-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-[#008C95]/10 text-[#008C95] text-xs font-medium">
                        {insight.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {insight.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {insight.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#008C95] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {insight.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-3 flex-shrink-0">
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-500 hover:text-[#008C95] transition-colors">
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">Читать</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-500 hover:text-[#008C95] transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">PDF</span>
                    </button>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 border border-[#008C95] text-[#008C95] font-medium hover:bg-[#008C95] hover:text-white transition-colors">
              Показать ещё
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-kept">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Получайте аналитику на почту
            </h2>
            <p className="text-gray-500 mb-6">
              Подпишитесь на рассылку и получайте новые обзоры и отчёты
              первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border border-gray-300 focus:border-[#008C95] focus:outline-none"
              />
              <button className="px-6 py-3 bg-[#008C95] text-white font-medium hover:bg-[#00313C] transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-kept">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Другие разделы
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/media/news"
              className="p-6 bg-gray-50 border border-gray-200 hover:border-[#008C95] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 group-hover:text-[#008C95]">
                  Новости компании
                </span>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
            <Link
              href="/media/articles"
              className="p-6 bg-gray-50 border border-gray-200 hover:border-[#008C95] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 group-hover:text-[#008C95]">
                  Статьи
                </span>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
