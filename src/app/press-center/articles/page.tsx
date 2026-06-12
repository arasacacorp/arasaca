"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  BookOpen,
  User,
  Clock,
} from "lucide-react";
import { C } from "@/lib/colors";
import { articlePublications } from "@/data/publications";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12 },
  }),
};

const vp = { once: true, amount: 0.2 as const };

/* ─── Helpers ─── */
const ITEMS_PER_PAGE = 6;

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("Все темы");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredArticles = articlePublications.filter((item) => {
    if (activeCategory === "Все темы") return true;
    return item.category === activeCategory;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const allCategories = (() => {
    const cats = new Set(articlePublications.map((a) => a.category));
    return ["Все темы", ...Array.from(cats)];
  })();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ── Hero Section ── */}
      <section
        className="relative pt-16 lg:pt-[120px] pb-16"
        style={{ background: `linear-gradient(to bottom, ${C.light}, #ffffff)` }}
      >
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: C.textMuted }}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Link href="/" className="hover:underline" style={{ color: C.textMuted }}>
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/press-center" className="hover:underline" style={{ color: C.textMuted }}>
              Пресс-центр
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: C.dna }}>Статьи</span>
          </motion.nav>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" style={{ color: C.dna }} />
              <span
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
              >
                Экспертные материалы
              </span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: C.dna }}
            >
              Статьи
            </h1>
            <p
              className="text-lg max-w-3xl leading-relaxed"
              style={{ color: C.textMid }}
            >
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

      {/* ── Category Filter ── */}
      <section className="py-6 border-b" style={{ borderColor: C.border, background: C.muted }}>
        <div className="container-kept">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border text-sm transition-colors"
                style={{ borderColor: C.border, color: C.textMid }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.dna;
                  e.currentTarget.style.color = C.dna;
                }}
                onMouseLeave={(e) => {
                  if (!dropdownOpen) {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.textMid;
                  }
                }}
              >
                <BookOpen className="w-4 h-4" />
                {activeCategory}
                <ChevronRight
                  className="w-3 h-3 transition-transform"
                  style={{ transform: dropdownOpen ? "rotate(90deg)" : "rotate(0)" }}
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 z-10 border shadow-lg min-w-[200px]"
                  style={{ background: C.white, borderColor: C.border }}
                >
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setDropdownOpen(false);
                        setVisibleCount(ITEMS_PER_PAGE);
                      }}
                      className="block w-full px-6 py-2 text-sm text-left transition-colors"
                      style={{
                        color: cat === activeCategory ? C.dna : C.textMid,
                        background: cat === activeCategory ? C.light : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.light;
                        e.currentTarget.style.color = C.dna;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          cat === activeCategory ? C.light : "transparent";
                        e.currentTarget.style.color =
                          cat === activeCategory ? C.dna : C.textMid;
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-auto text-sm" style={{ color: C.textMuted }}>
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "статья"
                : filteredArticles.length < 5
                ? "статьи"
                : "статей"}
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="grid md:grid-cols-2 gap-6">
            {displayedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border transition-shadow hover:shadow-lg group"
                style={{ borderColor: C.border }}
              >
                <Link href={`/press-center/${article.slug}`} className="block p-6 lg:p-8">
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 text-xs font-medium"
                      style={{ background: C.light, color: C.dna }}
                    >
                      {article.category}
                    </span>
                    {article.readTime && (
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{ color: C.textMuted }}
                      >
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-3 transition-colors"
                    style={{ color: C.textDark }}
                  >
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: C.textMid }}
                  >
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm">
                    {article.author && (
                      <div
                        className="flex items-center gap-2"
                        style={{ color: C.textMuted }}
                      >
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    )}
                    <div
                      className="flex items-center gap-2"
                      style={{ color: C.textMuted }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="p-12 text-center" style={{ color: C.textMuted }}>
              Нет статей по выбранной категории
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="inline-flex items-center gap-2 px-8 py-4 border font-medium transition-colors"
                style={{ borderColor: C.dna, color: C.dna }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.dna;
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = C.dna;
                }}
              >
                Показать ещё
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Other Categories ── */}
      <section className="py-12 border-t" style={{ borderColor: C.border, background: C.muted }}>
        <div className="container-kept">
          <motion.h2
            className="text-xl font-bold mb-6"
            style={{ color: C.textDark }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            Другие разделы
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/press-center/news"
              className="p-6 border transition-colors group"
              style={{ borderColor: C.border, background: C.white }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.dna;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium" style={{ color: C.textDark }}>
                  Новости компании
                </span>
                <ArrowRight
                  className="w-5 h-5 transition-all"
                  style={{ color: C.borderLight }}
                />
              </div>
            </Link>
            <Link
              href="/press-center/insights"
              className="p-6 border transition-colors group"
              style={{ borderColor: C.border, background: C.white }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.dna;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium" style={{ color: C.textDark }}>
                  Инсайты и аналитика
                </span>
                <ArrowRight
                  className="w-5 h-5 transition-all"
                  style={{ color: C.borderLight }}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
