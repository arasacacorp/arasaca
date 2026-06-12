"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { industries as allIndustries } from "@/data/industries";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  Layers,
  Briefcase,
  Atom,
  Map,
  Landmark,
  Laptop,
  Factory,
  Ship,
  Shield,
  Fuel,
  TrendingUp,
  Clock,
  Compass,
  Cpu,
  BarChart3,
  Award,
  Globe,
  Heart,
  Target,
  Wrench,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  FlaskConical,
  Database,
  Workflow,
  Plug,
  PieChart,
  Newspaper,
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
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const vp = { once: true, amount: 0.2 as const };

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
   NEWS DATA
   ═══════════════════════════════════════════════════════ */
const newsItems = [
  {
    date: "07.05.2026",
    title: "Арасака запускает платформу мастер-планирования для управления инвестиционными программами",
    category: "Технологии",
    categoryColor: C.dna,
    href: "/media",
  },
  {
    date: "29.04.2026",
    title: "Арасака и Агентство «ЦЕНТР» представили совместное решение для развития территорий",
    category: "Партнёрство",
    categoryColor: C.mintDark,
    href: "/media",
  },
  {
    date: "15.04.2026",
    title: "Новый офис Арасаки в Москве: расширение географии консалтинга",
    category: "Компания",
    categoryColor: C.orange,
    href: "/media",
  },
];

/* ─── Section cards (5 colored cards) ─── */
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

/* ─── Stats data ─── */
const heroStats = [
  { number: "8", suffix: " лет", label: "работаем с бизнесом", icon: Clock, accent: C.dna },
  { number: "50+", suffix: "", label: "экспертов в команде", icon: Users, accent: C.orange },
  { number: "30+", suffix: "", label: "отраслей экспертизы", icon: Compass, accent: C.mintDark },
  { number: "9", suffix: "", label: "направлений консалтинга", icon: Layers, accent: C.dna },
];

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO (Banner + News + Stats + Cards)
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative pt-16 lg:pt-[120px]" style={{ background: C.muted }}>
      <div className="container-kept py-5">
        {/* Hero + Stats + News — two-column layout */}
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
          {/* LEFT COLUMN — Hero Banner + Stats */}
          <div className="flex-1 lg:max-w-[calc(75%-10px)]">
            {/* Hero Banner */}
            <motion.div
              className="relative overflow-hidden rounded-lg"
              style={{ minHeight: "480px" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {/* AI-generated bubbles background image */}
              <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bubbles.png')" }}
              />
              {/* Dark overlay — left side darker for text readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(105deg, rgba(0,31,44,0.88) 0%, rgba(0,49,60,0.6) 30%, rgba(0,31,44,0.2) 70%, rgba(0,49,60,0.1) 100%)`,
                }}
              />

              {/* Diagonal accent line */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(165deg, transparent 0%, transparent 48%, rgba(119,226,195,0.08) 48.5%, rgba(119,226,195,0.04) 49%, transparent 49.5%, transparent 100%)`,
                }}
              />

              {/* Corner brackets decoration */}
              <svg
                className="pointer-events-none absolute bottom-6 right-6 opacity-20"
                width="80" height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path d="M80 0v30h-4V4H50V0h30z" fill={C.mint} />
                <path d="M0 80V50h4v26h26v4H0z" fill={C.mint} />
              </svg>

              {/* Hero Text Content */}
              <div className="relative z-10 flex min-h-[480px] flex-col justify-center px-8 py-14 md:px-12 lg:px-16">
                {/* Label */}
                <motion.div
                  className="mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.1}
                >
                  <span
                    className="inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
                    style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                    Арасака
                  </span>
                </motion.div>

                {/* Main tagline */}
                <motion.h1
                  className="mb-5 max-w-lg leading-[1.08] tracking-tight"
                  style={{
                    fontFamily: "var(--font-russo)",
                    fontSize: "clamp(2rem, 4.8vw, 3.4rem)",
                    color: C.white,
                  }}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                >
                  Структурируем сложное,
                  <br />
                  <span style={{ color: C.mint }}>реализуем важное</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="mb-8 max-w-md text-[15px] font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.35}
                >
                  Повышение эффективности управления, цифровая трансформация и&nbsp;управление инвестиционными программами. Надёжный партнёр для&nbsp;тех, кто делает ставку на&nbsp;устойчивый рост.
                </motion.p>

                {/* CTA */}
                <motion.div
                  className="flex flex-wrap items-center gap-3"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <Link href="/services">
                    <motion.span
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                      style={{ background: C.dna, borderRadius: "4px" }}
                      whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                    >
                      Наши услуги
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                  <Link href="/about">
                    <motion.span
                      className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                      style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                      whileHover={{
                        borderColor: C.mint,
                        color: C.mint,
                        transition: { duration: 0.3 },
                      }}
                    >
                      О компании
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats cards — directly under hero banner */}
            <motion.div
              className="mt-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-lg bg-white p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    custom={0.4 + index * 0.08}
                  >
                    {/* Accent top stripe */}
                    <div
                      className="absolute left-0 top-0 h-1 w-full"
                      style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}80)` }}
                    />

                    {/* Icon */}
                    <div
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                      style={{ background: `${stat.accent}12` }}
                    >
                      <stat.icon className="h-5 w-5" style={{ color: stat.accent }} />
                    </div>

                    {/* Number */}
                    <div
                      className="text-3xl font-bold leading-none md:text-4xl"
                      style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                    >
                      {stat.number}
                      <span className="text-lg font-normal" style={{ color: stat.accent }}>{stat.suffix}</span>
                    </div>

                    {/* Label */}
                    <div
                      className="mt-2 text-[12px] font-medium leading-tight"
                      style={{ color: C.textMuted }}
                    >
                      {stat.label}
                    </div>

                    {/* Subtle decorative element */}
                    <div
                      className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-full opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1]"
                      style={{ background: stat.accent }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — News Sidebar (ends at same height as stats) */}
          <motion.div
            className="w-full lg:w-[330px] lg:flex-shrink-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white">
              {/* Header with accent */}
              <div className="px-5 pt-5 pb-4 md:px-6 md:pt-6 md:pb-5" style={{ borderBottom: `2px solid ${C.dna}` }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold" style={{ color: C.textDark }}>Новости</h3>
                  <div className="flex h-7 w-7 items-center justify-center rounded" style={{ background: C.light }}>
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke={C.dna} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* News items */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex flex-1 flex-col gap-5">
                  {newsItems.map((news, index) => (
                    <motion.div
                      key={index}
                      variants={slideInRight}
                      initial="hidden"
                      animate="visible"
                      custom={0.5 + index * 0.12}
                    >
                      <Link href={news.href} className="group block">
                        <span
                          className="mb-2 inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                          style={{ background: `${news.categoryColor}15`, color: news.categoryColor, borderRadius: "2px" }}
                        >
                          {news.category}
                        </span>
                        <h4
                          className="text-[13px] font-semibold leading-snug transition-colors group-hover:text-[#008C95]"
                          style={{ color: C.textDark }}
                        >
                          {news.title}
                        </h4>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-[11px]" style={{ color: C.textMuted }}>{news.date}</span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ color: C.textMuted }}
                          />
                        </div>
                        {index < newsItems.length - 1 && (
                          <div className="mt-5 h-px" style={{ background: C.borderLight }} />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/media"
                    className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: C.dna }}
                  >
                    Все новости
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — BUSINESS DIRECTIONS (Bento grid)
   ═══════════════════════════════════════════════════════ */
const businessCards = [
  {
    title: "Консалтинг",
    description: "Разработка стратегий развития, совершенствование финансовых моделей, оптимизация процессов и сопровождение инвестиционных проектов",
    bg: C.dark,
    textColor: "#ffffff",
    href: "/services/consulting",
    icon: Briefcase,
    size: "large" as const, // 2 cols
  },
  {
    title: "Аналитика и исследования",
    description: "Глубокое понимание рынков, отраслей и данных, поддерживающее стратегические и операционные решения",
    bg: C.dna,
    textColor: "#ffffff",
    href: "/services/analytics",
    icon: BarChart3,
    size: "large" as const, // 2 cols — balanced bento layout
  },
  {
    title: "Технологии",
    description: "Создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций, автоматизация",
    bg: C.orange,
    textColor: "#ffffff",
    href: "/services/technologies",
    icon: Cpu,
    highlight: true,
    size: "small" as const,
  },
  {
    title: "Инжиниринг",
    description: "Предпроектный анализ, экспертиза капитальных затрат, управление строительством сложных проектов",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/engineering",
    icon: Wrench,
    size: "small" as const,
  },
  {
    title: "Развитие территорий и урбанистика",
    description: "Мастер-планирование, экономическое моделирование и механизмы реализации территориальных проектов",
    bg: C.mintDark,
    textColor: "#ffffff",
    href: "/services/territorial-development",
    icon: MapPin,
    size: "small" as const,
  },
  {
    title: "HR и организационное развитие",
    description: "Управление человеческим капиталом, организационное проектирование и HR-аналитика",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/hr",
    icon: Users,
    size: "small" as const,
  },
  {
    title: "Обучение и развитие",
    description: "Корпоративные программы развития, бережливое производство, управление знаниями",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/learning",
    icon: GraduationCap,
    size: "small" as const,
  },
  {
    title: "Коммуникации и бренд",
    description: "Разработка бренд-стратегий, коммуникационных кампаний, управление репутацией",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/communications",
    icon: Globe,
    size: "small" as const,
  },
  {
    title: "Стартапы и инновации",
    description: "Сопровождение стартапов от идеи до масштабирования, поддержка НИОКР и корпоративных инноваций",
    bg: C.dark,
    textColor: "#ffffff",
    href: "/services/startups",
    icon: FlaskConical,
    size: "large" as const, // 2 cols
  },
];

function BusinessDirectionsSection() {
  return (
    <section className="relative bg-[#f1f2f4] py-20 md:py-28">
      <div className="container-kept">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Направления бизнеса</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Услуги и практики
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Комплексные решения для роста,<br />эффективности и трансформации бизнеса
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {businessCards.map((card, index) => {
            const isLarge = card.size === "large"
            const isDark = card.bg === C.dark || card.bg === C.dna || card.bg === C.orange || card.bg === C.mintDark

            return (
              <motion.div
                key={card.title}
                className={cn(
                  isLarge && "sm:col-span-2",
                )}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.06}
              >
                <Link href={card.href} className="group block h-full">
                  <motion.div
                    className={cn(
                      "relative flex flex-col justify-between overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg",
                      isLarge ? "min-h-[220px]" : "min-h-[170px]",
                    )}
                    style={{ background: card.bg, color: card.textColor }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  >
                    {/* Decorative patterns */}
                    {card.bg === C.dark && (
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)`,
                        }}
                      />
                    )}
                    {card.bg === C.white && (
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`,
                          backgroundSize: "14px 14px",
                        }}
                      />
                    )}

                    {/* Accent line on left */}
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-1"
                      style={{ background: isDark ? "rgba(255,255,255,0.25)" : C.dna }}
                    />

                    {/* Highlight dot for special cards */}
                    {"highlight" in card && card.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block h-2 w-2 rounded-full" style={{ background: C.mint }} />
                      </div>
                    )}

                    {/* Top: Icon + Title */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300"
                          style={{ background: isDark ? "rgba(255,255,255,0.1)" : `${C.dna}10` }}
                        >
                          <card.icon className="h-4.5 w-4.5" style={{ color: isDark ? "rgba(255,255,255,0.8)" : C.dna }} />
                        </div>
                        <span className={cn(
                          "font-semibold leading-tight",
                          isLarge ? "text-lg" : "text-[15px]",
                        )}>
                          {card.title}
                        </span>
                      </div>
                      <p className={cn(
                        "leading-relaxed opacity-70",
                        isLarge ? "text-[13px] max-w-md" : "text-[12px]",
                      )}>
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom: Arrow */}
                    <div className="relative z-10 flex justify-end mt-4">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ background: isDark ? "rgba(255,255,255,0.15)" : `${C.dna}10` }}
                      >
                        <ArrowRight className="h-3.5 w-3.5" style={{ color: isDark ? "#ffffff" : C.dna }} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — MISSION / CASES
   ═══════════════════════════════════════════════════════ */
const caseCards = [
  {
    category: "Консалтинг",
    title: "Цифровая трансформация промышленного холдинга",
    description: "Разработали ИТ-стратегию и дорожную карту цифровизации, внедрили систему управления производством",
    client: "Металлургический холдинг",
    result: "Сокращение операционных затрат на 15%",
    href: "/cases",
  },
  {
    category: "Развитие территорий",
    title: "Мастер-планирование территории",
    description: "Создали цифровую платформу для управления инвестиционными программами развития территорий",
    client: "Субъект РФ",
    result: "50+ инвестиционных проектов в системе",
    href: "/cases",
  },
  {
    category: "Стратегия",
    title: "Стратегия ESG-трансформации",
    description: "Разработали стратегию устойчивого развития и внедрили систему ESG-отчётности",
    client: "Нефтегазовая компания",
    result: "Рейтинг ESG повышен на 2 уровня",
    href: "/cases",
  },
];

function MissionSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{ background: "rgba(0,140,149,0.1)" }}
      />
      {/* Diagonal lines pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />

      <div className="container-kept relative z-10">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel light>Наша миссия</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Раскрываем потенциал,
              <br />
              <span style={{ color: C.mint }}>чтобы делать бизнес лучше</span>
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            Развиваем рынки и предлагаем<br />клиентам не только консалтинг,<br />но и комплексные решения
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.12}
            >
              <Link href={card.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div
                    className="h-1"
                    style={{ background: index === 0 ? C.dna : index === 1 ? C.mint : C.orange }}
                  />
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span
                      className="mb-3 inline-block self-start px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: C.light, color: C.dna, borderRadius: "3px" }}
                    >
                      {card.category}
                    </span>
                    <h3 className="heading-subsection mb-3 flex-1 transition-colors" style={{ color: C.textDark }}>
                      {card.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed mb-4" style={{ color: C.textMuted }}>
                      {card.description}
                    </p>
                    <div className="pt-4 border-t" style={{ borderColor: C.borderLight }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: C.textMuted }}>Клиент</span>
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: C.textMuted }}>Результат</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-medium" style={{ color: C.textMid }}>{card.client}</span>
                        <span className="text-[12px] font-semibold" style={{ color: C.dna }}>{card.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link to all cases */}
        <div className="mt-10">
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: C.mint }}
          >
            Все кейсы
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — INDUSTRIES
   ═══════════════════════════════════════════════════════ */
const keyIndustrySlugs = new Set(["oil-gas", "nuclear", "defense", "it"]);

/* Color map for key industries — each gets a unique accent from our palette */
const keyIndustryColors: Record<string, string> = {
  nuclear: C.dark,       // тёмно-бирюзовый — атомная энергия
  "oil-gas": C.dna,      // бирюзовый — нефтегаз
  it: C.mintDark,        // мятный — цифровые технологии
  defense: C.orange,     // оранжевый — ОПК
};

/* Displayed industries: 9 core + 3 extra from "other" for a 12-card grid.
   Key industries are shuffled among regular ones for visual variety. */
const displayedIndustrySlugs = [
  "nuclear",           // ключ  — row 1 col 1
  "construction",      // обычн — row 1 col 2
  "oil-gas",           // ключ  — row 1 col 3
  "government",        // обычн — row 1 col 4
  "manufacturing",     // обычн — row 2 col 1
  "it",                // ключ  — row 2 col 2
  "shipbuilding",      // обычн — row 2 col 3
  "defense",           // ключ  — row 2 col 4
  "urbanistics",       // обычн — row 3 col 1
  "energy",            // допол — row 3 col 2
  "mining-metallurgy", // допол — row 3 col 3
  "agro",              // допол — row 3 col 4
];

const displayedIndustries = displayedIndustrySlugs
  .map((slug) => allIndustries.find((i) => i.slug === slug)!)
  .filter(Boolean);

const otherIndustriesLocal = allIndustries.filter(
  (i) => !displayedIndustrySlugs.includes(i.slug),
);

function IndustriesSection() {
  return (
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

        {/* Industries grid — 12 cards, key ones highlighted */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 mb-10">
          {displayedIndustries.map((industry, index) => {
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

        {/* Other industries — compact tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{ background: C.border }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
              Также работаем
            </span>
            <div className="h-px flex-1" style={{ background: C.border }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {otherIndustriesLocal.map((industry) => {
              const Icon = industry.icon
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:border-[#008C95] hover:text-[#008C95] hover:bg-[#008C95]/5"
                  style={{ borderColor: C.border, color: C.textMid }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {industry.name}
                </Link>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom: all industries link + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: C.dna }}
            >
              Вся отраслевая экспертиза
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div>
              <p className="text-[15px] font-medium" style={{ color: C.textDark }}>
                Не нашли свою отрасль?
              </p>
              <p className="text-[13px]" style={{ color: C.textMuted }}>
                Свяжитесь с нами — мы работаем с широким спектром отраслей
              </p>
            </div>
          </div>
          <Link
            href="/contacts"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white transition-colors flex-shrink-0"
            style={{ background: C.dna, borderRadius: "4px" }}
          >
            Связаться
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — INNOVATION / АРАСАКА ЛАБ
   ═══════════════════════════════════════════════════════ */
const labProducts = [
  {
    title: "CRM-системы",
    description: "Управление клиентами и продажами",
    icon: Users,
  },
  {
    title: "Автоматизация",
    description: "Рутинные процессы без ручного труда",
    icon: Workflow,
  },
  {
    title: "Интеграции",
    description: "Связываем системы между собой",
    icon: Plug,
  },
  {
    title: "LMS-платформы",
    description: "Корпоративное обучение",
    icon: GraduationCap,
  },
  {
    title: "HR-системы",
    description: "Учёт и мотивация персонала",
    icon: Heart,
  },
  {
    title: "Дашборды",
    description: "Аналитика в реальном времени",
    icon: BarChart3,
  },
];

const labStats = [
  { number: "20+", label: "решений разработано", accent: C.dna },
  { number: "5+", label: "лет в разработке", accent: C.orange },
  { number: "100%", label: "индивидуальный подход", accent: C.mintDark },
];

function InnovationSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,140,149,0.08)" }}
      />
      {/* Diagonal lines pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />

      <div className="container-kept relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel light>Лаборатория цифровых решений</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Арасака Лаб
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            Разрабатываем IT-системы для внутренних<br />нужд и под запросы клиентов. Решения,<br />которые идеально подходят под ваши задачи
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 mb-10">
          {labProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.05}
              >
                <div
                  className="group relative flex items-start gap-4 overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 border border-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_4px_20px_rgba(0,140,149,0.12)]"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {/* Accent left line */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
                    style={{ background: C.mint }}
                  />
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(119,226,195,0.12)" }}
                  >
                    <Icon className="h-5 w-5 transition-colors duration-300" style={{ color: C.mint }} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-tight text-white mb-1 transition-colors duration-300 group-hover:text-[#77e2c3]">
                      {product.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed transition-colors duration-300 group-hover:text-white/70" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {product.description}
                    </p>
                  </div>
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats + CTA row */}
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {/* Stats — left-aligned */}
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {labStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.08}
              >
                <div
                  className="text-2xl font-bold md:text-3xl"
                  style={{ fontFamily: "var(--font-russo)", color: stat.accent }}
                >
                  {stat.number}
                </div>
                <div className="mt-1 text-[11px] md:text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Orange CTA button — right side */}
          <Link href="/lab">
            <motion.span
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
              style={{ background: C.orange, borderRadius: "4px" }}
              whileHover={{ background: C.orangeHover, transition: { duration: 0.3 } }}
            >
              Подробнее о лаборатории
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — SOLUTIONS / PRODUCTS
   ═══════════════════════════════════════════════════════ */
function SolutionsSection() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-kept">
        {/* Section header */}
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Продукты</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Наши решения и&nbsp;продукты
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Цифровые платформы, созданные<br />для решения задач бизнеса&nbsp;и&nbsp;государства
          </p>
        </motion.div>

        {/* Top row: ЕОСДО + ЕСУИП — two columns */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-5">
          {/* ── ЕОСДО ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0}
          >
            <Link href="/solutions/eosdo" className="group block h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                {/* Top accent strip */}
                <div className="h-1.5 w-full" style={{ background: C.dna }} />

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Tag */}
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${C.dna}12`, color: C.dna, borderRadius: "3px" }}
                    >
                      <Database className="h-3 w-3" />
                      Корпоративный документооборот
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold leading-tight mb-1"
                    style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                  >
                    ЕОСДО
                  </h3>
                  <p className="text-[13px] font-medium mb-4" style={{ color: C.dna }}>
                    Единая отечественная система документооборота
                  </p>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: C.textMuted }}>
                    Корпоративная платформа для крупных предприятий и госкорпораций. Обеспечивает документооборот между организациями, филиалами и подразделениями — внутренняя переписка, поручения, согласования, приказы и регламенты.
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {["Внутренний документооборот", "Маршрутизация и согласование", "Поручения и контроль исполнения", "Импортонезависимость"].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: C.dna }} />
                        <span className="text-[11px] leading-tight" style={{ color: C.textMid }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: C.borderLight }}>
                    <span className="text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#008C95]" style={{ color: C.dark }}>
                      Подробнее
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: C.dna }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── ЕСУИП ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.08}
          >
            <Link href="/solutions/esuip" className="group block h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                {/* Top accent strip */}
                <div className="h-1.5 w-full" style={{ background: C.mintDark }} />

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Tag */}
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${C.mintDark}12`, color: C.mintDark, borderRadius: "3px" }}
                    >
                      <BarChart3 className="h-3 w-3" />
                      Управление инвестициями
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold leading-tight mb-1"
                    style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                  >
                    ЕСУИП
                  </h3>
                  <p className="text-[13px] font-medium mb-4" style={{ color: C.mintDark }}>
                    Единая система управления инвестиционным портфелем
                  </p>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: C.textMuted }}>
                    Информационная система для управления инвестиционной деятельностью — от планирования и оценки проектов до мониторинга реализации. Объединяет все инвестиционные проекты в единый портфель с аналитикой и контролем ключевых показателей.
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {["Управление инвестиционным портфелем", "Оценка и отбор проектов", "Мониторинг реализации", "Аналитика и отчётность"].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: C.mintDark }} />
                        <span className="text-[11px] leading-tight" style={{ color: C.textMid }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: C.borderLight }}>
                    <span className="text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#4dc9a5]" style={{ color: C.dark }}>
                      Подробнее
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: C.mintDark }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom row: Мастер-план — full width dark card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.16}
        >
          <div className="overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-stretch">
              {/* Left content — product info (hoverable) */}
              <Link href="/solutions/master-planning" className="group/mp flex-1 block">
                <div
                  className="relative flex flex-col h-full overflow-hidden transition-all duration-300 group-hover/mp:shadow-lg group-hover/mp:-translate-y-1"
                  style={{ background: C.dark }}
                >
                  {/* Decorative diagonal pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                    }}
                  />
                  {/* Glow effect */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full blur-[120px] opacity-20 transition-opacity duration-300 group-hover/mp:opacity-35"
                    style={{ background: C.mint }}
                  />

                  <div className="relative z-10 flex flex-1 flex-col p-6 md:p-8 lg:p-10">
                    {/* Tag + Partnership badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: `${C.orange}25`, color: C.orange, borderRadius: "3px" }}
                      >
                        <Map className="h-3 w-3" />
                        Развитие территорий
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", borderRadius: "3px" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                        Совместно с АСР «Центр»
                      </span>
                    </div>

                    {/* Title block */}
                    <div className="mb-4">
                      <h3
                        className="text-2xl md:text-3xl font-bold leading-tight mb-1"
                        style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}
                      >
                        Цифровая платформа мастер-планирования
                      </h3>
                      <p className="text-[13px] font-medium" style={{ color: C.orange }}>
                        Управление инвестиционными программами развития территорий
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] leading-relaxed mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Платформа для управления инвестиционными программами развития территорий и&nbsp;инфраструктурных проектов. Совместная разработка с&nbsp;Агентством стратегического развития «Центр». Цифровая модель территории, сценарное моделирование и&nbsp;контроль реализации.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { label: "Цифровая модель территории", icon: Map },
                        { label: "Сценарное моделирование", icon: Cpu },
                        { label: "Управление программами", icon: Layers },
                        { label: "Контроль реализации", icon: Target },
                      ].map((f) => (
                        <span
                          key={f.label}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium"
                          style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", borderRadius: "4px" }}
                        >
                          <f.icon className="h-3.5 w-3.5" style={{ color: C.orange }} />
                          {f.label}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: C.orange }}>
                        Подробнее о платформе
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/mp:translate-x-1" style={{ color: C.orange }} />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Right panel — Lab CTA (no hover on card, only button) */}
              <div
                className="flex flex-col justify-center p-6 md:p-8 lg:p-10 md:w-[300px] lg:w-[340px] flex-shrink-0 bg-white"
              >
                {/* Decorative top line */}
                <div className="h-px w-12 mb-5" style={{ background: C.dna }} />

                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: "rgba(0,140,149,0.1)" }}
                  >
                    <FlaskConical className="h-4 w-4" style={{ color: C.dna }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: C.dna }}
                  >
                    Арасака Лаб
                  </span>
                </div>

                <p className="text-[14px] font-semibold leading-snug mb-3" style={{ color: C.textDark }}>
                  Нужно индивидуальное решение?
                </p>
                <p className="text-[12px] leading-relaxed mb-5" style={{ color: C.textMuted }}>
                  Если вам требуется разработка под&nbsp;задачи вашего бизнеса, обратитесь в&nbsp;Лабораторию Арасаки — мы создаём цифровые продукты с&nbsp;нуля.
                </p>

                <Link href="/lab" className="group/cta inline-flex items-center gap-2 self-start">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300"
                    style={{ background: C.dna, borderRadius: "4px" }}
                  >
                    Узнать больше
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 6 — PUBLICATIONS
   ═══════════════════════════════════════════════════════ */
const publicationItems = [
  {
    category: "Статья",
    categoryColor: C.dna,
    title: "Тренды цифровой трансформации 2026",
    description: "Ключевые направления цифровизации бизнеса: искусственный интеллект, автоматизация процессов и платформенные решения",
    date: "15.01.2026",
    href: "/media",
  },
  {
    category: "Инсайт",
    categoryColor: C.mintDark,
    title: "Российский рынок M&A: итоги года",
    description: "Ежегодный обзор рынка слияний и поглощений: ключевые сделки, драйверы роста и прогнозы на ближайшие годы",
    date: "10.01.2026",
    href: "/media",
  },
  {
    category: "Исследование",
    categoryColor: C.orange,
    title: "ESG-трансформация бизнеса",
    description: "Как интегрировать принципы устойчивого развития в бизнес-процессы и повысить инвестиционную привлекательность",
    date: "05.01.2026",
    href: "/media",
  },
  {
    category: "Статья",
    categoryColor: C.dna,
    title: "Мастер-планирование: новый подход к развитию территорий",
    description: "Опыт создания цифровых платформ для управления инвестиционными программами субъектов РФ",
    date: "28.12.2025",
    href: "/media",
  },
];

function PublicationsSection() {
  return (
    <section className="relative bg-[#f1f2f4] py-20 md:py-28">
      <div className="container-kept">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Медиа</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Публикации и&nbsp;инсайты
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Актуальные статьи, обзоры<br />и&nbsp;исследования от наших экспертов
          </p>
        </motion.div>

        {/* Publications cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {publicationItems.map((pub, index) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.06}
            >
              <Link href={pub.href} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 border border-transparent group-hover:border-gray-100">
                  {/* Accent left line */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1 transition-all duration-300"
                    style={{ background: pub.categoryColor }}
                  />
                  {/* Top row: category + date */}
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${pub.categoryColor}12`, color: pub.categoryColor, borderRadius: "2px" }}
                    >
                      {pub.category}
                    </span>
                    <span className="text-[11px] flex items-center gap-1" style={{ color: C.textMuted }}>
                      <Calendar className="h-3 w-3" />
                      {pub.date}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-[15px] font-semibold leading-tight mb-2 transition-colors duration-300 group-hover:text-[#008C95]" style={{ color: C.textDark }}>
                    {pub.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[12px] leading-relaxed flex-1" style={{ color: C.textMuted }}>
                    {pub.description}
                  </p>
                  {/* Arrow */}
                  <div className="flex justify-end mt-4">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ background: `${pub.categoryColor}10` }}
                    >
                      <ArrowRight className="h-3 w-3" style={{ color: pub.categoryColor }} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/media"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: C.dna }}
          >
            Все публикации
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 6 — SERVICES
   ═══════════════════════════════════════════════════════ */
const services = [
  {
    title: "Консалтинг",
    description:
      "Разрабатываем стратегии развития, совершенствуем финансовые модели, оптимизируем процессы и сопровождаем инвестиционные проекты.",
    href: "/services/consulting",
    icon: Briefcase,
  },
  {
    title: "Аналитика и исследования",
    description:
      "Глубокое понимание рынков, отраслей и данных, поддерживающее стратегические и операционные решения.",
    href: "/services/analytics",
    icon: BarChart3,
  },
  {
    title: "Технологии",
    description:
      "Создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций.",
    href: "/services/technologies",
    icon: Cpu,
    highlight: true,
  },
  {
    title: "Инжиниринг",
    description:
      "Предпроектный анализ, экспертиза капитальных затрат, управление строительством сложных проектов.",
    href: "/services/engineering",
    icon: Wrench,
  },
];

function ServicesSection() {
  return (
    <section id="services" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/30 text-sm font-medium mb-4">01</div>
            <h2 className="text-5xl font-bold text-white mb-6">Услуги</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Мы специализируемся на повышении эффективности управления, цифровой
              трансформации и управлении инвестиционными программами.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white font-medium group"
            >
              Все услуги
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Services List */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#008C95] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">01</div>
          <h2 className="text-4xl font-bold text-white">Услуги</h2>
        </div>

        {/* Services cards */}
        <div>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-x border-gray-200 ${index === 0 ? 'border-t' : ''}`}
            >
              <Link
                href={service.href}
                className={`block p-8 lg:p-12 transition-colors duration-300 group ${
                  service.highlight
                    ? "bg-[#00313C]"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {service.icon && (
                        <service.icon
                          className={`w-5 h-5 ${
                            service.highlight
                              ? "text-[#77e2c3]"
                              : "text-[#008C95]"
                          }`}
                        />
                      )}
                      <h3
                        className={`text-2xl font-semibold group-hover:text-[#008C95] transition-colors ${
                          service.highlight
                            ? "text-white group-hover:text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className={`leading-relaxed ${
                        service.highlight
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`flex-shrink-0 p-3 transition-all duration-300 group-hover:translate-x-1 ${
                      service.highlight
                        ? "text-white/50 group-hover:text-[#77e2c3]"
                        : "text-gray-300 group-hover:text-[#008C95]"
                    }`}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All services link on mobile */}
        <div className="lg:hidden p-8 bg-gray-50">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#008C95] font-medium group"
          >
            Все услуги
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 6 — CASES
   ═══════════════════════════════════════════════════════ */
const cases = [
  {
    title: "Цифровая трансформация промышленного холдинга",
    description: "Разработали ИТ-стратегию и дорожную карту цифровизации, внедрили систему управления производством.",
    client: "Крупнейший металлургический холдинг",
    result: "Сокращение операционных затрат на 15%",
  },
  {
    title: "Мастер-планирование территории",
    description: "Создали цифровую платформу для управления инвестиционными программами развития территорий.",
    client: "Субъект РФ",
    result: "Более 50 инвестиционных проектов в системе",
  },
  {
    title: "Стратегия ESG-трансформации",
    description: "Разработали стратегию устойчивого развития и внедрили систему ESG-отчётности.",
    client: "Нефтегазовая компания",
    result: "Повышение рейтинга ESG на 2 уровня",
  },
];

function CasesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Кейсы
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Примеры реализованных проектов и достигнутых результатов
              </p>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-[#008C95] font-medium group"
            >
              Все кейсы
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cases grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/cases" className="block">
                  <div className="bg-gray-50 p-8 h-full hover:bg-gray-100 transition-colors border-l-4 border-[#008C95]">
                    {/* Number */}
                    <div className="text-4xl font-bold text-[#008C95]/20 mb-4">
                      [{String(index + 1).padStart(2, '0')}]
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#008C95] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Client */}
                    <div className="mb-4">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Клиент</span>
                      <p className="text-sm text-gray-700">{item.client}</p>
                    </div>

                    {/* Result */}
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Результат</span>
                      <p className="text-sm font-medium text-[#008C95]">{item.result}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 8 — EVENTS
   ═══════════════════════════════════════════════════════ */
const events = [
  {
    title: "Конференция «Цифровая экономика 2026»",
    date: "15 февраля 2026",
    location: "Москва, Центр событий",
    type: "Конференция",
  },
  {
    title: "Вебинар: Стратегии роста в неопределённости",
    date: "20 января 2026",
    location: "Онлайн",
    type: "Вебинар",
  },
  {
    title: "Круглый стол: ESG-трансформация",
    date: "28 января 2026",
    location: "Москва, Отель «Метрополь»",
    type: "Круглый стол",
  },
];

function EventsSection() {
  return (
    <section id="events" className="bg-[#f1f2f4] py-20">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-[#008C95] text-sm font-medium mb-4">04</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Мероприятия
            </h2>
          </div>
          <p className="text-gray-500 max-w-md lg:text-right">
            Конференции, вебинары и круглые столы с участием наших экспертов.
          </p>
        </motion.div>

        {/* Events list */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href="#"
                className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 bg-white border border-gray-200 hover:border-[#008C95] transition-colors group"
              >
                <div className="flex-shrink-0">
                  <span className="px-3 py-1 bg-[#008C95] text-white text-xs font-medium">
                    {event.type}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#008C95] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-10 border-t border-gray-300 flex justify-center"
        >
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#008C95] text-[#008C95] font-medium hover:bg-[#008C95] hover:text-white transition-colors"
          >
            Все мероприятия
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 9 — CAREER
   ═══════════════════════════════════════════════════════ */
const careerBenefits = [
  {
    icon: TrendingUp,
    title: "Профессиональный рост",
    description:
      "Мы работаем над масштабными проектами, которые дают уникальный опыт.",
  },
  {
    icon: GraduationCap,
    title: "Обучение и развитие",
    description:
      "Система менторства, тренинги и возможность учиться у лучших экспертов.",
  },
  {
    icon: Users,
    title: "Сильная команда",
    description:
      "Коллеги с богатым опытом в консалтинге, финансах и технологиях.",
  },
];

function CareerSection() {
  return (
    <section id="career" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/30 text-sm font-medium mb-4">05</div>
            <h2 className="text-5xl font-bold text-white mb-6">Карьера</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Присоединяйтесь к команде экспертов, которые меняют бизнесы к
              лучшему.
            </p>
            <Link
              href="/career/vacancies"
              className="inline-flex items-center gap-2 text-white font-medium group"
            >
              Открытые вакансии
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#008C95] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">05</div>
          <h2 className="text-4xl font-bold text-white">Карьера</h2>
        </div>

        {/* Benefits */}
        <div className="divide-y divide-gray-200">
          {careerBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 lg:p-12 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#e8f5f3]">
                  <benefit.icon className="w-6 h-6 text-[#008C95]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 lg:p-12 bg-gray-50"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Готовы присоединиться?
              </h3>
              <p className="text-gray-500">
                Отправьте резюме на info@arasaca.ru
              </p>
            </div>
            <Link
              href="/career/vacancies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
            >
              Все вакансии
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 10 — ACHIEVEMENTS
   ═══════════════════════════════════════════════════════ */
const achievements = [
  {
    icon: Award,
    title: "Лидер рейтинга",
    description: "Лидеры консалтингового рынка по версии экспертных изданий",
  },
  {
    icon: TrendingUp,
    title: "Устойчивый рост",
    description: "Ежегодный рост выручки и расширение клиентской базы",
  },
  {
    icon: Users,
    title: "Доверие клиентов",
    description: "Более 76 из 100 крупнейших компаний России — наши клиенты",
  },
  {
    icon: Globe,
    title: "Масштаб проектов",
    description: "Реализуем проекты в России, СНГ и за рубежом",
  },
];

function AchievementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f1f2f4]">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Достижения
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Результаты, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 group hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] mb-4 group-hover:bg-[#008C95] transition-colors">
                  <item.icon className="w-6 h-6 text-[#008C95] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            {[
              { number: "8", label: "лет на рынке" },
              { number: "200+", label: "реализованных проектов" },
              { number: "50+", label: "экспертов в команде" },
              { number: "30+", label: "отраслей экспертизы" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#008C95]">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 11 — ABOUT
   ═══════════════════════════════════════════════════════ */
const aboutStats = [
  { number: "8", label: "лет на рынке" },
  { number: "200+", label: "реализованных проектов" },
  { number: "50+", label: "экспертов в команде" },
  { number: "98%", label: "клиентов рекомендуют" },
];

const aboutValues = [
  {
    icon: Target,
    title: "Фокус на результат",
    description:
      "Мы работаем до достижения измеримых бизнес-результатов, а не просто отдаём отчёты.",
  },
  {
    icon: Users,
    title: "Командный подход",
    description:
      "Проекты ведут опытные консультанты при поддержке отраслевых экспертов.",
  },
  {
    icon: Globe,
    title: "Глобальный опыт",
    description:
      "Сочетаем международную методологию с глубоким пониманием российской специфики.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#008C95] text-sm font-medium mb-4">06</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            О компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Арасака — консалтинговая компания, специализирующаяся на повышении
            эффективности управления, цифровой трансформации и управлении
            инвестиционными программами.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-16"
        >
          {aboutStats.map((stat, index) => (
            <div key={index} className="bg-white p-8 text-center">
              <div className="text-4xl font-bold text-[#008C95] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aboutValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-50 border border-gray-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] mb-4">
                <value.icon className="w-6 h-6 text-[#008C95]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Link
            href="/pro-bono"
            className="flex items-center gap-4 p-6 bg-[#e8f5f3] border border-[#008C95]/20 rounded-xl hover:bg-[#d8f0ed] transition-colors group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#008C95]/10 rounded-lg shrink-0">
              <Heart className="w-6 h-6 text-[#008C95]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 group-hover:text-[#008C95] transition-colors">
                Услуги Pro Bono
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                Оказываем консалтинговую поддержку на безвозмездной основе НКО и
                социальным проектам.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#008C95] group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#008C95] text-white font-medium hover:bg-[#02757d] transition-colors group"
          >
            Узнать больше о нас
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 12 — LAB
   ═══════════════════════════════════════════════════════ */
const labHighlights = [
  { icon: Users, title: "CRM-системы", description: "Управление клиентами и продажами" },
  { icon: Workflow, title: "Автоматизация", description: "Рутинные процессы без ручного труда" },
  { icon: Plug, title: "Интеграции", description: "Связываем системы между собой" },
  { icon: GraduationCap, title: "LMS-платформы", description: "Корпоративное обучение" },
  { icon: Database, title: "HR-системы", description: "Учёт и мотивация персонала" },
  { icon: BarChart3, title: "Дашборды", description: "Аналитика в реальном времени" },
];

function LabSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#00313C] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-kept relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded">
              <FlaskConical className="w-5 h-5 text-[#77e2c3]" />
            </div>
            <span className="text-[#77e2c3] text-sm font-medium uppercase tracking-wider">
              Лаборатория цифровых решений
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Арасака Лаб
          </h2>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Разрабатываем IT-системы для внутренних нужд компании и под индивидуальные запросы клиентов.
            Создаём решения, которые идеально подходят под ваши задачи.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 bg-white/5">
          {labHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <Link
                href="/lab"
                className="block p-6 border-r border-b border-white/10 h-full hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#77e2c3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0 p-2 text-white/30 group-hover:text-[#77e2c3] group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {[
              { number: "20+", label: "решений разработано" },
              { number: "5+", label: "лет в разработке" },
              { number: "100%", label: "индивидуальный подход" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/lab"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
          >
            Подробнее о лаборатории
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 13 — CONTACTS
   ═══════════════════════════════════════════════════════ */
const contacts = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "Москва, Ленинградский проспект 34А",
    href: "/contacts",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 495 937 4477",
    href: "tel:+74959374477",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@arasaca.ru",
    href: "mailto:info@arasaca.ru",
  },
];

function ContactsSection() {
  return (
    <section id="contacts" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/30 text-sm font-medium mb-4">07</div>
            <h2 className="text-5xl font-bold text-white mb-6">Контакты</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным для вас
              способом.
            </p>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-4 group"
                >
                  <contact.icon className="w-5 h-5 text-white/50 group-hover:text-[#77e2c3] transition-colors mt-0.5" />
                  <div>
                    <div className="text-white/50 text-sm mb-1">
                      {contact.label}
                    </div>
                    <div className="text-white group-hover:text-[#77e2c3] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 mt-8 text-white hover:text-[#77e2c3] transition-colors group"
            >
              <span>Все контакты</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1 py-16 lg:py-0">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#008C95] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">07</div>
          <h2 className="text-4xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-white/70">
            Свяжитесь с нами для обсуждения вашего проекта.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 lg:p-16 lg:flex lg:items-center lg:min-h-screen"
        >
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Оставьте заявку
            </h3>

            <div className="lg:hidden mb-8 space-y-4">
              {contacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#008C95] transition-colors"
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.value}</span>
                </Link>
              ))}
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 text-[#008C95] font-medium mt-4"
              >
                <span>Все контакты</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors"
                  placeholder="email@company.ru"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors resize-none"
                  placeholder="Опишите ваш проект или задачу"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors flex items-center justify-center gap-2 group"
                >
                  Отправить заявку
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/contacts"
                  className="hidden lg:inline-flex items-center gap-2 px-8 py-4 border border-[#008C95] text-[#008C95] font-medium hover:bg-[#e8f5f3] transition-colors"
                >
                  Все контакты
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION — QUICK LINKS (before footer)
   ═══════════════════════════════════════════════════════ */
function QuickLinksSection() {
  return (
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
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    custom={index * 0.08}
                  >
                    <Link href={card.href} className="group block">
                      <motion.div
                        className={cn(
                          "relative flex h-[130px] flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300",
                          isWhite && "border shadow-sm group-hover:shadow-md",
                        )}
                        style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined }}
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

          {/* Right: CTA panel — request commercial proposal / callback */}
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
                <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: C.dna, borderRadius: "4px" }}>
                  <Mail className="h-4 w-4" />
                  Запросить КП
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/kp:translate-x-0.5" />
                </Link>
                <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 border" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", borderRadius: "4px" }}>
                  <Phone className="h-4 w-4" />
                  Заказать звонок
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BusinessDirectionsSection />
      <MissionSection />
      <IndustriesSection />
      <InnovationSection />
      <SolutionsSection />
      <PublicationsSection />
      <QuickLinksSection />
    </main>
  );
}
