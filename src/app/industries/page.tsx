"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Building2,
  Layers,
  Newspaper,
  Briefcase,
  Users,
  Wrench,
  BarChart3,
} from "lucide-react";
import { industries } from "@/data/industries";

/* ═══════════════════════════════════════════════════════
   COLOUR PALETTE
   ═══════════════════════════════════════════════════════ */
const C = {
  dna: "#008C95",
  dnaHover: "#007a82",
  dark: "#00313C",
  darkLighter: "#004452",
  mint: "#77e2c3",
  mintDark: "#4dc9a5",
  orange: "#E04E39",
  orangeHover: "#c94330",
  orangeDark: "#b83d2e",
  orangeLight: "#f06a58",
  light: "#e8f5f3",
  muted: "#f1f2f4",
  white: "#ffffff",
  textDark: "#1a1a1a",
  textMid: "#494a4a",
  textMuted: "#6b7280",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
};

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

/* ─── Key industry colors (same as main page) ─── */
const keyIndustrySlugs = new Set(["oil-gas", "nuclear", "defense", "it"]);

const keyIndustryColors: Record<string, string> = {
  nuclear: C.dark,       // тёмно-бирюзовый — атомная энергия
  "oil-gas": C.dna,      // бирюзовый — нефтегаз
  it: C.mintDark,        // мятный — цифровые технологии
  defense: C.orange,     // оранжевый — ОПК
};

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

/* ─── Quick Links cards ─── */
const sectionCards = [
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    bg: C.dark,
    textColor: "#ffffff",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    bg: C.orange,
    textColor: "#ffffff",
    href: "/services",
    icon: Briefcase,
  },
  {
    title: "Решения",
    description: "Цифровые продукты и платформы",
    bg: C.white,
    textColor: C.textDark,
    href: "/solutions/master-planning",
    icon: Layers,
  },
  {
    title: "Пресс-центр",
    description: "Новости, пресс-релизы, СМИ",
    bg: C.dna,
    textColor: "#ffffff",
    href: "/media",
    icon: Newspaper,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: C.mintDark,
    textColor: "#ffffff",
    href: "/career",
    icon: Users,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    bg: C.dark,
    textColor: "#ffffff",
    href: "/contacts",
    icon: Mail,
  },
];

const interestingArticles = [
  {
    title: "Цифровая трансформация в промышленности",
    category: "Аналитика",
    date: "15 января 2026",
  },
  {
    title: "Тренды развития энергетики в 2026 году",
    category: "Энергетика",
    date: "12 января 2026",
  },
  {
    title: "Господдержка судостроения: новые программы",
    category: "Судостроение",
    date: "10 января 2026",
  },
  {
    title: "Устойчивое развитие в АПК",
    category: "АПК",
    date: "8 января 2026",
  },
  {
    title: "Инвестиции в телеком-инфраструктуру",
    category: "Телеком",
    date: "5 января 2026",
  },
  {
    title: "Фармацевтический рынок: итоги года",
    category: "Здравоохранение",
    date: "3 января 2026",
  },
];

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function IndustriesPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark background with diagonal lines + stats grid
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
            {/* LEFT: Label + heading + text + buttons */}
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Отрасли</span>
              </motion.nav>

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
                Отрасли
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Российская экономика многогранна — от высокотехнологичной энергетики и&nbsp;атомной промышленности до&nbsp;агропромышленного комплекса и&nbsp;цифровых платформ. Мы имеем широкий практический опыт в&nbsp;различных областях экономики.
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
                    Запросить КП
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

            {/* RIGHT: Stats — 4 cards in 2x2 grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {[
                { number: "9", label: "ключевых отраслей", icon: Building2, accent: C.dna },
                { number: "22", label: "отрасли всего", icon: BarChart3, accent: C.mintDark },
                { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
                { number: "500+", label: "проектов", icon: Briefcase, accent: C.dna },
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
          INDUSTRIES — All industries in 4-col grid (same as main page)
          ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="container-kept">
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <SectionLabel>Отрасли</SectionLabel>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Экспертиза в ключевых отраслях
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Российская экономика многогранна — от<br />высокотехнологичной энергетики до<br />цифровых платформ
            </p>
          </motion.div>

          {/* Industries grid — all 22 industries, key ones highlighted */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 mb-10">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isKey = keyIndustrySlugs.has(industry.slug);
              const keyBg = isKey ? keyIndustryColors[industry.slug] : undefined;

              return (
                <motion.div
                  key={industry.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.05}
                >
                  <Link href={`/industries/${industry.slug}`} className="group block h-full">
                    <div
                      className={cn(
                        "relative flex flex-col h-full overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg border",
                        isKey
                          ? "border-transparent"
                          : "border-transparent group-hover:border-gray-100 bg-[#f8f9fa] group-hover:bg-white",
                      )}
                      style={isKey ? { background: keyBg, color: "#ffffff" } : undefined}
                    >
                      {/* Accent left line */}
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-1"
                        style={{ background: isKey ? "rgba(255,255,255,0.3)" : C.dna }}
                      />

                      {/* "Ключевая отрасль" badge — only for key industries */}
                      {isKey && (
                        <div className="mb-3">
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                            style={{
                              background: "rgba(255,255,255,0.2)",
                              color: "rgba(255,255,255,0.95)",
                              borderRadius: "2px",
                            }}
                          >
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                            Ключевая отрасль
                          </span>
                        </div>
                      )}

                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                          style={{ background: isKey ? "rgba(255,255,255,0.15)" : `${C.dna}10` }}
                        >
                          <Icon
                            className="h-5 w-5"
                            style={{ color: isKey ? "rgba(255,255,255,0.9)" : C.dna }}
                          />
                        </div>
                        <h3
                          className="text-[15px] font-semibold leading-tight transition-colors group-hover:text-[#008C95]"
                          style={{ color: isKey ? "#ffffff" : C.textDark }}
                        >
                          {industry.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[12px] leading-relaxed flex-1"
                        style={{ color: isKey ? "rgba(255,255,255,0.7)" : C.textMuted }}
                      >
                        {industry.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex justify-end mt-4">
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ background: isKey ? "rgba(255,255,255,0.2)" : `${C.dna}10` }}
                        >
                          <ArrowRight
                            className="h-3 w-3"
                            style={{ color: isKey ? "#ffffff" : C.dna }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Не нашли свою отрасль?
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
        {/* Decorative pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
          }}
        />
        <div className="container-kept relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div>
              <h2
                className="heading-section mb-4"
                style={{ color: C.white }}
              >
                Не нашли свою отрасль?
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Свяжитесь с нами для консультации. Мы работаем с широким
                спектром отраслей и готовы обсудить ваш проект.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 group"
                style={{ background: C.dna }}
              >
                Связаться с нами
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/feedback?type=proposals"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 border"
                style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.2)" }}
              >
                Запросить КП
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK LINKS — Navigation cards + CTA panel
          ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
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
              <SectionLabel>Навигация</SectionLabel>
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
                {sectionCards.map((card, index) => {
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
                    style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}
                  >
                    Начните сотрудничество
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: C.dna }}>
                    Запросить КП
                    <ArrowRight className="w-3.5 h-3.5 group-hover/kp:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 border" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.15)" }}>
                    Обратный звонок
                    <Phone className="w-3.5 h-3.5 group-hover/cb:translate-x-0.5 transition-transform" />
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
