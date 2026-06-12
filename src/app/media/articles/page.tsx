"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Tag,
  Filter,
  User,
} from "lucide-react";

const articles = [
  {
    title: "Как выбрать BI-систему для вашего бизнеса",
    category: "Технологии",
    date: "18 января 2026",
    author: "Алексей Петров",
    description:
      "Сравнительный анализ популярных BI-платформ и рекомендации по выбору оптимального решения для вашего бизнеса.",
    readTime: "8 мин",
  },
  {
    title: "Интервью: стратегии роста в условиях неопределённости",
    category: "Стратегия",
    date: "12 января 2026",
    author: "Мария Иванова",
    description:
      "Экспертное мнение о том, как компаниям адаптироваться к изменениям и находить новые возможности для развития.",
    readTime: "12 мин",
  },
  {
    title: "ESG-трансформация: практическое руководство",
    category: "Устойчивое развитие",
    date: "5 января 2026",
    author: "Елена Сидорова",
    description:
      "Как интегрировать принципы устойчивого развития в бизнес-процессы компании. Практические шаги и кейсы.",
    readTime: "15 мин",
  },
  {
    title: "Цифровая трансформация: с чего начать",
    category: "Технологии",
    date: "28 декабря 2025",
    author: "Дмитрий Козлов",
    description:
      "Пошаговое руководство по запуску цифровой трансформации в компании. Типичные ошибки и как их избежать.",
    readTime: "10 мин",
  },
  {
    title: "Управление изменениями в крупных организациях",
    category: "Управление",
    date: "20 декабря 2025",
    author: "Анна Михайлова",
    description:
      "Методологии и инструменты для эффективного управления организационными изменениями.",
    readTime: "14 мин",
  },
  {
    title: "Финансовое моделирование: основы и продвинутые техники",
    category: "Финансы",
    date: "15 декабря 2025",
    author: "Сергей Волков",
    description:
      "Как строить финансовые модели для инвестиционных проектов и стратегического планирования.",
    readTime: "20 мин",
  },
  {
    title: "Автоматизация бизнес-процессов: ROI и эффективность",
    category: "Технологии",
    date: "8 декабря 2025",
    author: "Алексей Петров",
    description:
      "Как оценить экономический эффект от автоматизации и правильно рассчитать ROI проектов цифровизации.",
    readTime: "11 мин",
  },
  {
    title: "HR-аналитика: от данных к решениям",
    category: "HR",
    date: "1 декабря 2025",
    author: "Ольга Новикова",
    description:
      "Использование данных для принятия управленческих решений в области управления персоналом.",
    readTime: "9 мин",
  },
];

const categories = [
  "Все темы",
  "Технологии",
  "Стратегия",
  "Устойчивое развитие",
  "Управление",
  "Финансы",
  "HR",
  "Маркетинг",
];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("Все темы");
  const [showFilters, setShowFilters] = useState(false);

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
            <span className="text-[#008C95]">Статьи</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-[#008C95]" />
              <span className="text-sm font-medium text-[#008C95] uppercase tracking-wider">
                Экспертные материалы
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#008C95] mb-6">
              Статьи
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Экспертные статьи, колонки и интервью наших специалистов.
              Глубокий анализ актуальных тем и практические рекомендации.
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
            )}

            <div className="ml-auto text-sm text-gray-400">
              {articles.length} статей
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 hover:shadow-lg transition-shadow group"
              >
                <Link href="#" className="block p-6 lg:p-8">
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#008C95] transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
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

      {/* Other Categories */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-kept">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Другие разделы
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/media/news"
              className="p-6 bg-white border border-gray-200 hover:border-[#008C95] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 group-hover:text-[#008C95]">
                  Новости компании
                </span>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
            <Link
              href="/media/insights"
              className="p-6 bg-white border border-gray-200 hover:border-[#008C95] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 group-hover:text-[#008C95]">
                  Инсайты и аналитика
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
