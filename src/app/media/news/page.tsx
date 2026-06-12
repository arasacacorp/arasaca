"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Newspaper,
  Filter,
} from "lucide-react";

const newsItems = [
  {
    title: "Мы провели ребрендинг — и это отличная возможность заново представить себя",
    date: "13 мая 2025",
    description:
      "АРАСАКА Консалтинг обновила фирменный стиль, чтобы точнее отразить, кто мы есть сегодня и куда движемся вместе с нашими клиентами. Новый облик подчеркивает нашу экспертизу, ответственность за результат и внимание к сути.",
  },
  {
    title: "Арасака открывает новое направление консалтинга",
    date: "20 января 2026",
    description:
      "Мы рады объявить об открытии нового направления, специализирующегося на цифровой трансформации и технологическом консалтинге. Это позволит нам предложить клиентам комплексные решения по модернизации бизнес-процессов.",
  },
  {
    title: "Арасака — партнёр конференции «Цифровая экономика»",
    date: "10 января 2026",
    description:
      "Компания стала официальным партнёром ежегодной конференции по цифровой трансформации бизнеса. Спикеры Арасаки представят кейсы успешной цифровизации в промышленном секторе.",
  },
  {
    title: "Итоги года: ключевые достижения Арасаки",
    date: "28 декабря 2025",
    description:
      "Подводим итоги 2025 года: реализовано более 50 проектов, открыто новое направление аналитики данных, команда выросла на 30%. Благодарим наших клиентов и партнёров за доверие.",
  },
  {
    title: "Арасака получила награду «Консультант года»",
    date: "15 декабря 2025",
    description:
      "По итогам голосования профессионального сообщества компания Арасака признана «Консультантом года» в номинации «Стратегический консалтинг». Благодарим за признание нашей работы.",
  },
  {
    title: "Открыт офис Арасаки в Минске",
    date: "1 декабря 2025",
    description:
      "Расширяем географию присутствия — открыт офис в Минске, Беларусь. Теперь мы можем оперативно работать с проектами в Беларуси и странах СНГ.",
  },
  {
    title: "Запуск платформы Arasaca Invest Cloud",
    date: "20 ноября 2025",
    description:
      "Представляем собственную облачную платформу для управления инвестиционными проектами. Решение уже внедрено у ряда крупных клиентов из промышленного сектора.",
  },
  {
    title: "Арасака присоединилась к Ассоциации консультантов",
    date: "5 ноября 2025",
    description:
      "Компания стала членом Национальной ассоциации консультантов по экономике и управлению. Это подтверждает наш профессиональный уровень и приверженность стандартам качества.",
  },
  {
    title: "Выпуск ежегодного обзора рынка M&A",
    date: "25 октября 2025",
    description:
      "Опубликован ежегодный обзор рынка слияний и поглощений в России. Исследование охватывает ключевые сделки, тренды и прогнозы развития рынка корпоративного контроля.",
  },
];

const years = ["2026", "2025", "2024", "2023"];

export default function NewsPage() {
  const [activeYear, setActiveYear] = useState("2026");
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
            <span className="text-[#008C95]">Новости</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-6 h-6 text-[#008C95]" />
              <span className="text-sm font-medium text-[#008C95] uppercase tracking-wider">
                Раздел
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#008C95] mb-6">
              Новости компании
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Актуальные новости о деятельности компании, новых проектах,
              достижениях команды и важных событиях.
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
            )}

            <div className="ml-auto text-sm text-gray-400">
              {newsItems.length} новостей
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="space-y-0 border border-gray-200">
            {newsItems.map((news, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <Link
                  href={
                    index === 0
                      ? "/media/news/rebranding"
                      : "/media/news"
                  }
                  className="flex flex-col md:flex-row gap-6 p-6 lg:p-8 hover:bg-gray-50 transition-colors group"
                >
                  {/* Date */}
                  <div className="flex-shrink-0 md:w-40">
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#008C95] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {news.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center">
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-[#008C95] text-white text-sm font-medium">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 text-sm font-medium hover:border-[#008C95] hover:text-[#008C95] transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 text-sm font-medium hover:border-[#008C95] hover:text-[#008C95] transition-colors">
              3
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
              href="/media/articles"
              className="p-6 bg-white border border-gray-200 hover:border-[#008C95] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 group-hover:text-[#008C95]">
                  Статьи
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
