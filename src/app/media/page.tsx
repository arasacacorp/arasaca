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
  BookOpen,
  Users,
  Layers,
  Sparkles,
  Mail,
} from "lucide-react";
import { C } from "@/lib/colors";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const vp = { once: true, amount: 0.15 as const };

/* ─── Section label component ─── */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.span
      className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
      style={{ color: light ? C.mint : C.dna }}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
    >
      {children}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

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

/* Category color map — using C tokens */
const categoryColorMap: Record<string, string> = {
  news: C.orange,
  articles: C.dna,
  insights: C.mintDark,
};

/* Stats */
const mediaStats = [
  { number: "9", label: "публикаций", icon: BookOpen, accent: C.dna },
  { number: "3", label: "направления", icon: Layers, accent: C.orange },
  { number: "30+", label: "экспертов-авторов", icon: Users, accent: C.mintDark },
  { number: "2026", label: "год основания", icon: Sparkles, accent: C.dna },
];

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
      {/* Decorative diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />
      {/* Decorative glow orbs */}
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{ background: "rgba(0,140,149,0.15)" }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{ background: "rgba(119,226,195,0.08)" }}
      />

      <div className="container-kept relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
          {/* LEFT: Breadcrumb + Label + Heading + Subtitle + CTA */}
          <motion.div
            className="flex-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-[12px] transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Главная
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>
                Медиацентр
              </span>
            </motion.nav>

            {/* Label badge */}
            <span
              className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              Медиа
            </span>

            {/* Main heading */}
            <motion.h1
              className="mb-4 max-w-lg"
              style={{
                fontFamily: "var(--font-russo)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: C.white,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Медиацентр
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Единый доступ ко всем публикациям Арасака Консалтинг&nbsp;— статьи,
              аналитика, интервью, новости и&nbsp;исследования.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a href="#publications">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                  style={{ background: C.dna, borderRadius: "4px" }}
                  whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                >
                  Все публикации
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </a>
              <a href="#newsletter">
                <motion.span
                  className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                  whileHover={{
                    borderColor: C.mint,
                    color: C.mint,
                    transition: { duration: 0.3 },
                  }}
                >
                  Подписаться
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Stats — 4 cards in 2x2 grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            {mediaStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative overflow-hidden rounded-lg p-5 md:p-6"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                custom={0.4 + index * 0.08}
              >
                {/* Top accent line */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}50)` }}
                />
                <stat.icon className="mb-3 h-5 w-5" style={{ color: stat.accent }} />
                <div
                  className="text-2xl font-bold leading-none md:text-3xl"
                  style={{ fontFamily: "var(--font-russo)", color: C.white }}
                >
                  {stat.number}
                </div>
                <div
                  className="mt-1.5 text-[11px] font-medium leading-tight"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — CATEGORY TABS
   ═══════════════════════════════════════════════════════ */
function CategoryTabsSection({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (v: string) => void;
}) {
  return (
    <section className="py-6 border-b" style={{ borderColor: C.border, background: C.white }}>
      <div className="container-kept">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat.id ? C.dna : `${C.dna}10`,
                color: activeCategory === cat.id ? C.white : C.dna,
                borderRadius: "4px",
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.06}
              whileHover={
                activeCategory !== cat.id
                  ? { background: `${C.dna}20`, transition: { duration: 0.2 } }
                  : undefined
              }
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — FEATURED ARTICLE
   ═══════════════════════════════════════════════════════ */
function FeaturedSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: C.muted }}>
      <div className="container-kept">
        <SectionLabel>Избранное</SectionLabel>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.1}
        >
          <Link href="/media/insights/trends-2026" className="block group">
            <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-xl" style={{ borderColor: C.border }}>
              {/* Image placeholder */}
              <div
                className="relative aspect-video lg:aspect-auto lg:h-full flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${C.dna}, ${C.dark})` }}
              >
                {/* Decorative dot pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: "16px 16px",
                  }}
                />
                <TrendingUp className="w-24 h-24 relative z-10" style={{ color: "rgba(255,255,255,0.2)" }} />
                {/* Accent corner */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1"
                  style={{ background: C.mint }}
                />
              </div>

              {/* Content */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 text-xs font-medium text-white"
                    style={{ background: C.dna, borderRadius: "4px" }}
                  >
                    {featuredArticle.category}
                  </span>
                  <span
                    className="flex items-center gap-1 text-sm"
                    style={{ color: C.textMuted }}
                  >
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                </div>
                <h2
                  className="heading-section mb-4 transition-colors duration-300 group-hover:translate-x-0.5"
                  style={{ color: C.textDark }}
                >
                  {featuredArticle.title}
                </h2>
                <p className="text-section-desc mb-6">
                  {featuredArticle.description}
                </p>
                <div
                  className="flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: C.dna }}
                >
                  Читать
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — FILTERS + PUBLICATIONS GRID
   ═══════════════════════════════════════════════════════ */
function PublicationsSection({
  activeCategory,
  activeIndustry,
  activeYear,
  showFilters,
  setShowFilters,
  setActiveIndustry,
  setActiveYear,
  filteredPublications,
}: {
  activeCategory: string;
  activeIndustry: string;
  activeYear: string;
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  setActiveIndustry: (v: string) => void;
  setActiveYear: (v: string) => void;
  filteredPublications: typeof publications;
}) {
  return (
    <section id="publications" className="py-20 md:py-28" style={{ background: C.white }}>
      <div className="container-kept">
        {/* Section header */}
        <motion.div
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Публикации</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Все материалы
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Фильтруйте по&nbsp;категории, отрасли<br />или&nbsp;году публикации
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-4 rounded-lg p-4"
          style={{ background: C.muted, borderRadius: "8px" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.2}
        >
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border text-sm font-medium transition-all duration-300"
            style={{
              borderColor: showFilters ? C.dna : C.border,
              color: showFilters ? C.dna : C.textMid,
              borderRadius: "4px",
              background: showFilters ? `${C.dna}10` : C.white,
            }}
          >
            <Filter className="w-4 h-4" />
            Фильтры
          </button>

          {showFilters && (
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              {/* Industry Filter */}
              <select
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="px-4 py-2 border text-sm focus:outline-none transition-colors"
                style={{
                  borderColor: C.border,
                  color: C.textMid,
                  borderRadius: "4px",
                  background: C.white,
                }}
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
                className="px-4 py-2 border text-sm focus:outline-none transition-colors"
                style={{
                  borderColor: C.border,
                  color: C.textMid,
                  borderRadius: "4px",
                  background: C.white,
                }}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="ml-auto text-sm font-medium" style={{ color: C.textMuted }}>
            {filteredPublications.length}{" "}
            {filteredPublications.length === 1
              ? "материал"
              : filteredPublications.length < 5
              ? "материала"
              : "материалов"}
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredPublications.map((publication, index) => {
            const catColor = categoryColorMap[publication.type] || C.dna;
            return (
              <motion.article
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
                style={{ border: `1px solid ${C.borderLight}` }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.06}
              >
                {/* Left accent line */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1"
                  style={{ background: catColor }}
                />
                {/* Subtle dot pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${catColor} 1px, transparent 1px)`,
                    backgroundSize: "16px 16px",
                  }}
                />

                <Link
                  href={`/media/${publication.type}/${
                    publication.title.toLowerCase().split(" ").slice(0, 3).join("-") || "article"
                  }`}
                  className="relative z-10 block"
                >
                  {/* Icon placeholder */}
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: `${catColor}14` }}
                  >
                    {publication.type === "news" && <Newspaper className="h-5 w-5" style={{ color: catColor }} />}
                    {publication.type === "articles" && <Tag className="h-5 w-5" style={{ color: catColor }} />}
                    {publication.type === "insights" && <Lightbulb className="h-5 w-5" style={{ color: catColor }} />}
                  </div>

                  {/* Category badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: `${catColor}14`, color: catColor, borderRadius: "4px" }}
                    >
                      {publication.category}
                    </span>
                  </div>

                  {/* Date */}
                  <span
                    className="text-[12px] mb-2 block"
                    style={{ color: C.textMuted }}
                  >
                    {publication.date}
                  </span>

                  {/* Title */}
                  <h3
                    className="heading-subsection mb-2 transition-colors duration-300"
                    style={{ color: C.textDark }}
                  >
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-300">
                      {publication.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-section-desc line-clamp-2">
                    {publication.description}
                  </p>

                  {/* Read link */}
                  <div
                    className="mt-4 flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: C.dna }}
                  >
                    Читать
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Load More Button */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 border text-sm font-semibold uppercase tracking-[0.05em] transition-all duration-300"
            style={{ borderColor: C.dna, color: C.dna, borderRadius: "4px" }}
            whileHover={{
              background: C.dna,
              color: C.white,
              transition: { duration: 0.3 },
            }}
          >
            Показать ещё
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — NEWSLETTER / CTA
   ═══════════════════════════════════════════════════════ */
function NewsletterSection() {
  return (
    <section id="newsletter" className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />
      {/* Glow orb */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{ background: "rgba(0,140,149,0.10)" }}
      />

      <div className="container-kept relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.1}
        >
          {/* Label */}
          <SectionLabel light>Рассылка</SectionLabel>

          {/* Heading */}
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-russo)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: C.white,
            }}
          >
            Подпишитесь на&nbsp;рассылку
          </h2>

          {/* Subtitle */}
          <p
            className="mb-8 text-[15px] font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Получайте свежие статьи, аналитику и&nbsp;новости компании прямо
            на&nbsp;вашу почту
          </p>

          {/* Email form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 border text-sm focus:outline-none transition-colors"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.15)",
                color: C.white,
                borderRadius: "4px",
              }}
            />
            <motion.button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
              style={{ background: C.orange, borderRadius: "4px" }}
              whileHover={{ background: C.orangeHover, transition: { duration: 0.3 } }}
            >
              <Mail className="w-4 h-4" />
              Подписаться
            </motion.button>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            Нажимая «Подписаться», вы соглашаетесь с&nbsp;политикой обработки персональных данных
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
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
    <main className="min-h-screen flex flex-col" style={{ background: C.white }}>
      <HeroSection />
      <CategoryTabsSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {activeCategory === "all" && <FeaturedSection />}
      <PublicationsSection
        activeCategory={activeCategory}
        activeIndustry={activeIndustry}
        activeYear={activeYear}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        setActiveIndustry={setActiveIndustry}
        setActiveYear={setActiveYear}
        filteredPublications={filteredPublications}
      />
      <NewsletterSection />
    </main>
  );
}
