"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Filter,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getCases, getAllCaseTags } from "@/data/cases";
import { C } from "@/lib/colors";
import { quickLinks } from "@/data/quickLinks";

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
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const vp = { once: true, amount: 0.2 as const };

/* ─── Accent colors for case cards (cycling) ─── */
const accentColors = [C.dna, C.mint, C.orange];

export default function CasesPage() {
  const cases = getCases();
  const allTags = getAllCaseTags();
  const [selectedTagSlug, setSelectedTagSlug] = useState<string | null>(null);

  const filteredCases = useMemo(() => {
    if (!selectedTagSlug) return cases;
    return cases.filter((c) => c.tags.some((t) => t.slug === selectedTagSlug));
  }, [cases, selectedTagSlug]);

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark background (matching /services pattern)
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
        {/* Decorative diagonal lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
          }}
        />
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]"
          style={{ background: "rgba(224,78,57,0.10)" }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,140,149,0.08)" }}
        />

        <div className="container-kept relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
            {/* LEFT: Breadcrumb + Label + H1 + Subtitle + CTA buttons */}
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
                <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Главная
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Кейсы</span>
              </motion.nav>

              {/* Label */}
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.mint }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Наша миссия
              </motion.span>

              {/* H1 */}
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
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Раскрываем потенциал,
                <br />
                чтобы делать бизнес лучше
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Развиваем рынки и предлагаем клиентам не только консалтинг, но и комплексные решения
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link href="/feedback?type=proposals" className="sm:auto">
                  <motion.span
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white w-full sm:w-auto"
                    style={{ background: C.dna, borderRadius: "4px" }}
                    whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <Link href="/feedback?type=callback" className="sm:auto">
                  <motion.span
                    className="inline-flex items-center justify-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em] w-full sm:w-auto"
                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                    whileHover={{
                      borderColor: C.mint,
                      color: C.mint,
                      transition: { duration: 0.3 },
                    }}
                  >
                    Заказать звонок
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT: Stats — 2x2 grid in glassmorphism style */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {[
                { number: "7+", label: "реализованных кейсов", icon: Briefcase, accent: C.dna },
                { number: "6", label: "отраслей", icon: BarChart3, accent: C.mintDark },
                { number: "2017", label: "первый проект", icon: Calendar, accent: C.orange },
                { number: "100%", label: "довольных клиентов", icon: CheckCircle2, accent: C.dna },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative overflow-hidden rounded-lg p-5 md:p-6"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  custom={0.4 + index * 0.08}
                >
                  {/* Top accent */}
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
                  <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FILTERS + CASES GRID — White background
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          {/* Section header + filters */}
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                Портфолио
              </motion.span>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Реализованные проекты
              </h2>
            </div>
            {/* Filter buttons */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 max-w-2xl lg:justify-end">
                <button
                  onClick={() => setSelectedTagSlug(null)}
                  className={cn(
                    "px-4 py-2 text-[12px] font-medium rounded-md transition-all duration-200",
                    selectedTagSlug === null
                      ? "text-white"
                      : "hover:text-[#008C95]"
                  )}
                  style={{
                    background: selectedTagSlug === null ? C.dna : "rgba(0,140,149,0.08)",
                    color: selectedTagSlug === null ? "#ffffff" : C.textMuted,
                  }}
                >
                  Все
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag.slug}
                    onClick={() => setSelectedTagSlug(tag.slug)}
                    className={cn(
                      "px-4 py-2 text-[12px] font-medium rounded-md transition-all duration-200",
                      selectedTagSlug === tag.slug
                        ? "text-white"
                        : "hover:text-[#008C95]"
                    )}
                    style={{
                      background: selectedTagSlug === tag.slug ? C.dna : "rgba(0,140,149,0.08)",
                      color: selectedTagSlug === tag.slug ? "#ffffff" : C.textMuted,
                    }}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Cases grid — same layout as homepage "Mission" section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTagSlug ?? "all"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCases.length === 0 ? (
                <div className="col-span-full py-16 text-center">
                  <p className="text-[14px]" style={{ color: C.textMuted }}>
                    По выбранному фильтру кейсов пока нет.
                  </p>
                </div>
              ) : (
                filteredCases.map((c, index) => {
                  const accent = accentColors[index % accentColors.length];
                  // Pick the first tag as category label
                  const category = c.tags[0]?.label || "Проект";
                  // Try to extract a short result from the data
                  const result = c.structure === "task-solution-result"
                    ? c.result.split(".")[0]
                    : "";
                  const shortResult = result.length > 60 ? result.slice(0, 57) + "..." : result;

                  return (
                    <motion.div
                      key={c.slug}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={vp}
                      custom={index * 0.12}
                    >
                      <Link href={`/cases/${c.slug}`} className="group block h-full">
                        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border" style={{ borderColor: C.border }}>
                          {/* Top accent line */}
                          <div className="h-1" style={{ background: accent }} />

                          <div className="flex flex-1 flex-col p-6 md:p-7">
                            {/* Category badge */}
                            <span
                              className="mb-3 inline-block self-start px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                              style={{ background: C.light, color: C.dna, borderRadius: "3px" }}
                            >
                              {category}
                            </span>

                            {/* Title */}
                            <h3
                              className="text-[16px] md:text-[18px] font-bold mb-3 flex-1 leading-snug transition-colors group-hover:text-[#008C95]"
                              style={{ color: C.textDark }}
                            >
                              {c.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[12px] leading-relaxed mb-4" style={{ color: C.textMuted }}>
                              {c.excerpt.length > 140 ? c.excerpt.slice(0, 137) + "..." : c.excerpt}
                            </p>

                            {/* Client / Result footer */}
                            <div className="pt-4 border-t" style={{ borderColor: C.borderLight }}>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] uppercase tracking-wider" style={{ color: C.textMuted }}>Клиент</span>
                                <span className="text-[10px] uppercase tracking-wider" style={{ color: C.textMuted }}>Результат</span>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[12px] font-medium line-clamp-1" style={{ color: C.textMid }}>
                                  {c.client}
                                </span>
                                {shortResult && (
                                  <span className="text-[12px] font-semibold text-right line-clamp-1 flex-shrink-0" style={{ color: C.dna }}>
                                    {shortResult}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK LINKS — Navigation cards + CTA panel
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
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
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>
                Навигация
              </span>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Полезные ссылки
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании
            </p>
          </motion.div>

          {/* Cards + CTA row */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            {/* Left: 6 navigation cards */}
            <div className="flex-1 flex">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 w-full h-full auto-rows-fr">
                {quickLinks.map((card, index) => {
                  const isWhite = card.bg === C.white;
                  return (
                    <motion.div
                      key={card.title}
                      className="flex"
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={vp}
                      custom={index * 0.08}
                    >
                      <Link href={card.href} className="group block h-full w-full">
                        <motion.div
                          className={cn(
                            "relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full",
                            isWhite && "border shadow-sm group-hover:shadow-md",
                          )}
                          style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined, minHeight: "130px" }}
                          whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        >
                          {card.bg === C.dark && (
                            <div
                              className="pointer-events-none absolute inset-0 opacity-[0.06]"
                              style={{
                                backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.3) 75%)`,
                                backgroundSize: "20px 20px",
                              }}
                            />
                          )}
                          {isWhite && (
                            <div
                              className="pointer-events-none absolute inset-0 opacity-[0.1]"
                              style={{
                                backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`,
                                backgroundSize: "12px 12px",
                              }}
                            />
                          )}

                          {/* Colored accent bar on left */}
                          <div
                            className="pointer-events-none absolute left-0 top-0 h-full w-1"
                            style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2">
                              {card.icon && (
                                <card.icon className="h-4 w-4 opacity-60" />
                              )}
                              <span className="block text-sm font-semibold md:text-base">{card.title}</span>
                            </div>
                            <span className="mt-0.5 block text-[10px] font-normal opacity-60">{card.description}</span>
                          </div>

                          <div className="relative z-10 flex justify-end">
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              style={{ background: isWhite ? "rgba(0,140,149,0.1)" : "rgba(255,255,255,0.2)" }}
                            >
                              <ArrowRight className="h-4 w-4" style={{ color: isWhite ? C.dna : "#ffffff" }} />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: CTA panel */}
            <motion.div
              className="lg:w-[340px] flex-shrink-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.3}
            >
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8" style={{ background: C.dark }}>
                {/* Decorative pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Decorative line */}
                  <div className="h-px w-12 mb-5" style={{ background: C.mint }} />

                  <h3
                    className="text-xl font-bold leading-tight mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    Начните сотрудничество
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-md" style={{ background: C.dna }}>
                    <Mail className="h-4 w-4" />
                    Запросить КП
                  </Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider border transition-all duration-300 rounded-md" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                    <Phone className="h-4 w-4" />
                    Обратный звонок
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
