"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  TrendingUp,
  Mail,
} from "lucide-react";
import { C } from "@/lib/colors";
import { insightPublications } from "@/data/publications";

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
const featuredInsights = insightPublications.filter((i) => i.featured);
const regularInsights = insightPublications.filter((i) => !i.featured);

const allCategories = (() => {
  const cats = new Set(insightPublications.map((i) => i.category));
  return ["Все направления", ...Array.from(cats)];
})();

const allTypes = ["Все типы", "Обзор", "Отчёт", "Аналитика", "Исследование"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Все направления");
  const [activeType, setActiveType] = useState("Все типы");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredRegular = regularInsights.filter((item) => {
    const catMatch =
      activeCategory === "Все направления" || item.category === activeCategory;
    return catMatch;
  });

  const filteredFeatured = featuredInsights.filter((item) => {
    const catMatch =
      activeCategory === "Все направления" || item.category === activeCategory;
    return catMatch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ── Hero Section ── */}
      <section
        className="relative pt-16 lg:pt-[120px] pb-16"
        style={{ background: `linear-gradient(to bottom, ${C.muted}, #ffffff)` }}
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
            <span style={{ color: C.dna }}>Инсайты и аналитика</span>
          </motion.nav>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6" style={{ color: C.dna }} />
              <span
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
              >
                Аналитические материалы
              </span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: C.dna }}
            >
              Инсайты и аналитика
            </h1>
            <p
              className="text-lg max-w-3xl leading-relaxed"
              style={{ color: C.textMid }}
            >
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

      {/* ── Featured Insights ── */}
      {filteredFeatured.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container-kept">
            <motion.h2
              className="text-2xl font-bold mb-8"
              style={{ color: C.textDark }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              Рекомендуем
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredFeatured.map((insight, index) => (
                <motion.article
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border transition-shadow hover:shadow-lg group"
                  style={{ borderColor: C.border }}
                >
                  <Link href={`/press-center/${insight.slug}`} className="block">
                    {/* Image */}
                    <div
                      className="aspect-video relative overflow-hidden"
                      style={{
                        background: insight.image
                          ? "transparent"
                          : `linear-gradient(to bottom right, ${C.dna}, ${C.dark})`,
                      }}
                    >
                      {insight.image ? (
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <TrendingUp className="w-16 h-16 text-white/30" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="px-2 py-1 text-xs font-medium"
                          style={{ background: C.dna, color: C.white }}
                        >
                          {insight.category}
                        </span>
                        <span className="text-xs" style={{ color: C.textMuted }}>
                          {insight.category}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-semibold mb-3 transition-colors"
                        style={{ color: C.textDark }}
                      >
                        {insight.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-4 line-clamp-2"
                        style={{ color: C.textMid }}
                      >
                        {insight.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs flex items-center gap-1"
                          style={{ color: C.textMuted }}
                        >
                          <Calendar className="w-3 h-3" />
                          {insight.date}
                        </span>
                        <span
                          className="text-sm font-medium flex items-center gap-1"
                          style={{ color: C.dna }}
                        >
                          Читать
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Filters ── */}
      <section className="py-6 border-b" style={{ borderColor: C.border, background: C.muted }}>
        <div className="container-kept">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                  setTypeDropdownOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 border text-sm transition-colors"
                style={{ borderColor: C.border, color: C.textMid }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.dna;
                  e.currentTarget.style.color = C.dna;
                }}
                onMouseLeave={(e) => {
                  if (!categoryDropdownOpen) {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.textMid;
                  }
                }}
              >
                <TrendingUp className="w-4 h-4" />
                {activeCategory}
                <ChevronRight
                  className="w-3 h-3 transition-transform"
                  style={{ transform: categoryDropdownOpen ? "rotate(90deg)" : "rotate(0)" }}
                />
              </button>
              {categoryDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 z-10 border shadow-lg min-w-[220px]"
                  style={{ background: C.white, borderColor: C.border }}
                >
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setCategoryDropdownOpen(false);
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

            {/* Type dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setTypeDropdownOpen(!typeDropdownOpen);
                  setCategoryDropdownOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 border text-sm transition-colors"
                style={{ borderColor: C.border, color: C.textMid }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.dna;
                  e.currentTarget.style.color = C.dna;
                }}
                onMouseLeave={(e) => {
                  if (!typeDropdownOpen) {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.textMid;
                  }
                }}
              >
                {activeType}
                <ChevronRight
                  className="w-3 h-3 transition-transform"
                  style={{ transform: typeDropdownOpen ? "rotate(90deg)" : "rotate(0)" }}
                />
              </button>
              {typeDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 z-10 border shadow-lg min-w-[180px]"
                  style={{ background: C.white, borderColor: C.border }}
                >
                  {allTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setActiveType(type);
                        setTypeDropdownOpen(false);
                      }}
                      className="block w-full px-6 py-2 text-sm text-left transition-colors"
                      style={{
                        color: type === activeType ? C.dna : C.textMid,
                        background: type === activeType ? C.light : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.light;
                        e.currentTarget.style.color = C.dna;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          type === activeType ? C.light : "transparent";
                        e.currentTarget.style.color =
                          type === activeType ? C.dna : C.textMid;
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-auto text-sm" style={{ color: C.textMuted }}>
              {insightPublications.length} материалов
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights List ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <div className="space-y-4">
            {filteredRegular.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border transition-colors group"
                style={{ borderColor: C.border }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.dna;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                <Link
                  href={`/press-center/${insight.slug}`}
                  className="flex flex-col md:flex-row gap-6 p-6"
                >
                  {/* Image */}
                  <div
                    className="flex-shrink-0 w-full md:w-48 aspect-video md:aspect-[4/3] relative overflow-hidden"
                    style={{
                      background: insight.image
                        ? C.muted
                        : `linear-gradient(to bottom right, ${C.dna}, ${C.dark})`,
                    }}
                  >
                    {insight.image ? (
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <TrendingUp className="w-8 h-8 text-white/30" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="px-2 py-1 text-xs font-medium"
                        style={{ background: C.light, color: C.dna }}
                      >
                        {insight.category}
                      </span>
                      <span className="text-xs" style={{ color: C.textMuted }}>
                        {insight.category}
                      </span>
                      <span className="text-xs" style={{ color: C.textMuted }}>
                        {insight.date}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-semibold mb-2 transition-colors"
                      style={{ color: C.textDark }}
                    >
                      {insight.title}
                    </h3>
                    <p
                      className="text-sm line-clamp-2"
                      style={{ color: C.textMid }}
                    >
                      {insight.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center">
                    <ArrowRight
                      className="w-5 h-5 transition-all"
                      style={{ color: C.borderLight }}
                    />
                  </div>
                </Link>
              </motion.article>
            ))}

            {filteredRegular.length === 0 && (
              <div className="p-12 text-center" style={{ color: C.textMuted }}>
                Нет материалов по выбранным фильтрам
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Newsletter Subscription ── */}
      <section className="py-12 border-t" style={{ borderColor: C.border, background: C.muted }}>
        <div className="container-kept">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                style={{ background: C.dna, borderRadius: "50%" }}
              >
                <Mail className="w-6 h-6" style={{ color: C.white }} />
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: C.textDark }}
              >
                Получайте аналитику на почту
              </h2>
              <p className="mb-6" style={{ color: C.textMid }}>
                Подпишитесь на рассылку и получайте новые обзоры и отчёты
                первыми
              </p>
              {subscribed ? (
                <div
                  className="p-4 border"
                  style={{
                    background: C.light,
                    borderColor: C.dna,
                    color: C.dna,
                  }}
                >
                  Спасибо! Вы успешно подписались на рассылку.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    required
                    className="flex-1 px-4 py-3 border focus:outline-none transition-colors"
                    style={{ borderColor: C.border, background: C.white }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = C.dna;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = C.border;
                    }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 font-medium transition-colors"
                    style={{ background: C.dna, color: C.white }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.dark;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.dna;
                    }}
                  >
                    Подписаться
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Other Categories ── */}
      <section className="py-12 border-t" style={{ borderColor: C.border, background: C.white }}>
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
              style={{ borderColor: C.border, background: C.muted }}
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
              href="/press-center/articles"
              className="p-6 border transition-colors group"
              style={{ borderColor: C.border, background: C.muted }}
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
          </div>
        </div>
      </section>
    </main>
  );
}
