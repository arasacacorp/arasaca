"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Newspaper,
} from "lucide-react";
import { C } from "@/lib/colors";
import { newsPublications } from "@/data/publications";

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

/* ─── Data ─── */
const years = ["2026", "2025", "2024", "2023"];

export default function NewsPage() {
  const [activeYear, setActiveYear] = useState("2026");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredNews = newsPublications.filter((item) => {
    if (activeYear === "Все годы") return true;
    return item.date.includes(activeYear);
  });

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
            <span style={{ color: C.dna }}>Новости</span>
          </motion.nav>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-6 h-6" style={{ color: C.dna }} />
              <span
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
              >
                Раздел
              </span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: C.dna }}
            >
              Новости компании
            </h1>
            <p
              className="text-lg max-w-3xl leading-relaxed"
              style={{ color: C.textMid }}
            >
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

      {/* ── Year Filter ── */}
      <section className="py-6 border-b" style={{ borderColor: C.border, background: C.muted }}>
        <div className="container-kept">
          <div className="flex flex-wrap items-center gap-4">
            {/* Year dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border text-sm transition-colors"
                style={{
                  borderColor: C.border,
                  color: C.textMid,
                }}
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
                <Calendar className="w-4 h-4" />
                {activeYear}
                <ChevronRight
                  className="w-3 h-3 transition-transform"
                  style={{ transform: dropdownOpen ? "rotate(90deg)" : "rotate(0)" }}
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 z-10 border shadow-lg"
                  style={{ background: C.white, borderColor: C.border }}
                >
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setActiveYear(year);
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-6 py-2 text-sm text-left transition-colors"
                      style={{
                        color: year === activeYear ? C.dna : C.textMid,
                        background: year === activeYear ? C.light : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.light;
                        e.currentTarget.style.color = C.dna;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          year === activeYear ? C.light : "transparent";
                        e.currentTarget.style.color =
                          year === activeYear ? C.dna : C.textMid;
                      }}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-auto text-sm" style={{ color: C.textMuted }}>
              {filteredNews.length}{" "}
              {filteredNews.length === 1
                ? "новость"
                : filteredNews.length < 5
                ? "новости"
                : "новостей"}
            </div>
          </div>
        </div>
      </section>

      {/* ── News List ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="border" style={{ borderColor: C.border }}>
            {filteredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b last:border-b-0"
                style={{ borderColor: C.border }}
              >
                <Link
                  href={`/press-center/${news.slug}`}
                  className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 lg:p-8 transition-colors group"
                  style={{ background: "transparent" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = C.muted)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {/* Date */}
                  <div className="flex-shrink-0 md:w-44">
                    <span
                      className="flex items-center gap-2 text-sm"
                      style={{ color: C.textMuted }}
                    >
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-semibold mb-3 transition-colors"
                      style={{ color: C.textDark }}
                    >
                      <span
                        className="group-hover:underline"
                        style={{
                          color: "inherit",
                        }}
                      >
                        {news.title}
                      </span>
                    </h3>
                    <p className="leading-relaxed" style={{ color: C.textMid }}>
                      {news.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center">
                    <ArrowRight
                      className="w-5 h-5 transition-all"
                      style={{ color: C.border }}
                    />
                  </div>
                </Link>
              </motion.article>
            ))}

            {filteredNews.length === 0 && (
              <div className="p-12 text-center" style={{ color: C.textMuted }}>
                Нет новостей за выбранный год
              </div>
            )}
          </div>
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
              href="/press-center/articles"
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
                  Статьи
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
