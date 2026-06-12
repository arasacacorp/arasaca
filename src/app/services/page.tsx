"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  BarChart3,
  Cpu,
  Wrench,
  Users,
  Megaphone,
  Rocket,
  MapPin,
  FlaskConical,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Building2,
  Layers,
  Newspaper,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   COLOUR PALETTE (same as main page)
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

/* ─── Data ─── */
const primaryServices = [
  {
    icon: Briefcase,
    name: "Консалтинг",
    description:
      "Разработка стратегий развития, совершенствование финансовых моделей, оптимизация процессов и сопровождение инвестиционных проектов.",
    slug: "consulting",
    bg: C.dark,
    textColor: "#ffffff",
  },
  {
    icon: BarChart3,
    name: "Аналитика и исследования",
    description:
      "Глубокое понимание рынков, отраслей и данных, поддерживающее стратегические и операционные решения.",
    slug: "analytics",
    bg: C.dna,
    textColor: "#ffffff",
  },
  {
    icon: Cpu,
    name: "Технологии",
    description:
      "Создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций, автоматизация.",
    slug: "technologies",
    bg: C.orange,
    textColor: "#ffffff",
  },
];

const expertServices = [
  {
    icon: Wrench,
    name: "Инжиниринг",
    description:
      "Предпроектный анализ, экспертиза капитальных затрат, управление строительством. Технологическая, правовая и организационная поддержка сложных проектов.",
    slug: "engineering",
    bg: C.white,
    textColor: C.textDark,
  },
  {
    icon: Users,
    name: "HR и организационное развитие",
    description:
      "Управление человеческим капиталом, организационное проектирование и HR-аналитика для построения эффективных команд.",
    slug: "hr",
    bg: C.white,
    textColor: C.textDark,
  },
  {
    icon: GraduationCap,
    name: "Обучение и развитие",
    description:
      "Корпоративные программы развития, бережливое производство, управление знаниями и собственная Корпоративная академия.",
    slug: "learning",
    bg: C.white,
    textColor: C.textDark,
  },
  {
    icon: Megaphone,
    name: "Коммуникации и бренд",
    description:
      "Разработка бренд-стратегий, коммуникационных кампаний, управление репутацией и корпоративной культурой.",
    slug: "communications",
    bg: C.white,
    textColor: C.textDark,
  },
  {
    icon: Rocket,
    name: "Стартапы и инновации",
    description:
      "Сопровождение стартапов от идеи до масштабирования, поддержка НИОКР и корпоративных инноваций.",
    slug: "startups",
    bg: C.dark,
    textColor: "#ffffff",
  },
  {
    icon: MapPin,
    name: "Развитие территорий",
    description:
      "Мастер-планирование, экономическое моделирование и механизмы реализации территориальных проектов.",
    slug: "territorial-development",
    bg: C.mintDark,
    textColor: "#ffffff",
    isSpecial: true,
  },
];

const separateDivisions = [
  {
    icon: FlaskConical,
    name: "Арасака.Лаб",
    description:
      "Лаборатория цифровых решений. Разрабатываем IT-системы для внутренних нужд и под индивидуальные запросы: CRM, автоматизации, интеграции, LMS, HR-системы.",
    slug: "lab",
    external: true,
    accent: C.mint,
    badge: "R&D и IT",
  },
  {
    icon: GraduationCap,
    name: "Арасака. Корпоративная академия",
    description:
      "Собственные образовательные продукты: курсы, тренинги, интенсивы и программы для развития организаций. Авторские методики и практический опыт.",
    slug: "learning/arasaca-academy",
    external: false,
    accent: C.orange,
    badge: "Обучение",
  },
];

/* ─── Quick Links cards (same as main page) ─── */
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

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function ServicesPage() {
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Услуги</span>
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
                Услуги и&nbsp;практики
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Повышение эффективности управления, цифровая трансформация и&nbsp;управление инвестиционными программами. Надёжный партнёр для&nbsp;тех, кто строит, развивает и&nbsp;трансформирует бизнес.
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
                { number: "9", label: "направлений", icon: Briefcase, accent: C.dna },
                { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
                { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
                { number: "2", label: "обособленных подразделения", icon: FlaskConical, accent: C.dna },
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
          PRIMARY SERVICES — 3 key directions (compact cards)
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <SectionLabel>Основные направления</SectionLabel>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Ключевая деятельность
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Фундаментальные практики, формирующие<br />стратегический потенциал организации
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {primaryServices.map((service, index) => {
              const isDark = service.bg === C.dark || service.bg === C.dna || service.bg === C.orange;
              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.1}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <motion.div
                      className={cn(
                        "relative flex flex-col justify-between overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg min-h-[170px]",
                        !isDark && "border group-hover:border-gray-100 bg-[#f8f9fa] group-hover:bg-white",
                      )}
                      style={isDark ? { background: service.bg, color: service.textColor } : undefined}
                      whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    >
                      {/* Decorative pattern for dark cards */}
                      {service.bg === C.dark && (
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)`,
                          }}
                        />
                      )}

                      {/* Accent line on left */}
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-1"
                        style={{ background: isDark ? "rgba(255,255,255,0.25)" : C.dna }}
                      />

                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                          style={{ background: isDark ? "rgba(255,255,255,0.15)" : `${C.dna}10` }}
                        >
                          <service.icon className="h-5 w-5" style={{ color: isDark ? "rgba(255,255,255,0.9)" : C.dna }} />
                        </div>
                        <h3
                          className="text-[15px] font-semibold leading-tight transition-colors group-hover:text-[#008C95]"
                          style={{ color: isDark ? "#ffffff" : C.textDark }}
                        >
                          {service.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[12px] leading-relaxed flex-1 mb-4"
                        style={{ color: isDark ? "rgba(255,255,255,0.7)" : C.textMuted }}
                      >
                        {service.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex justify-end">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ background: isDark ? "rgba(255,255,255,0.2)" : `${C.dna}10` }}
                        >
                          <ArrowRight className="h-3.5 w-3.5" style={{ color: isDark ? "#ffffff" : C.dna }} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXPERT SERVICES — 6 directions (same card style)
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <SectionLabel>Экспертные направления</SectionLabel>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Экспертная деятельность
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Специализированные компетенции для<br />углублённой проработки задач
            </p>
          </motion.div>

          <div className="grid grid-rows-2 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {expertServices.map((service, index) => {
              const isDark = service.bg === C.dark || service.bg === C.mintDark;
              return (
                <motion.div
                  key={service.slug}
                  className="flex"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.06}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full w-full">
                    <motion.div
                      className={cn(
                        "relative flex flex-col justify-between overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg h-full min-h-[170px]",
                        !isDark && "border group-hover:border-gray-100 bg-[#f8f9fa] group-hover:bg-white",
                      )}
                      style={isDark ? { background: service.bg, color: service.textColor } : undefined}
                      whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    >
                      {/* Accent line on left */}
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-1"
                        style={{ background: isDark ? "rgba(255,255,255,0.3)" : C.dna }}
                      />

                      {/* Special badge */}
                      {"isSpecial" in service && service.isSpecial && (
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
                            Специальное направление
                          </span>
                        </div>
                      )}

                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                          style={{ background: isDark ? "rgba(255,255,255,0.15)" : `${C.dna}10` }}
                        >
                          <service.icon
                            className="h-5 w-5"
                            style={{ color: isDark ? "rgba(255,255,255,0.9)" : C.dna }}
                          />
                        </div>
                        <h3
                          className="text-[15px] font-semibold leading-tight transition-colors group-hover:text-[#008C95]"
                          style={{ color: isDark ? "#ffffff" : C.textDark }}
                        >
                          {service.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[12px] leading-relaxed flex-1 mb-4"
                        style={{ color: isDark ? "rgba(255,255,255,0.7)" : C.textMuted }}
                      >
                        {service.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex justify-end">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ background: isDark ? "rgba(255,255,255,0.2)" : `${C.dna}10` }}
                        >
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            style={{ color: isDark ? "#ffffff" : C.dna }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEPARATE DIVISIONS — Арасака.Лаб + Арасака. Корпоративная академия
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <SectionLabel>Подразделения</SectionLabel>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Обособленные подразделения
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Собственные продуктовые команды —<br />от R&D до корпоративного обучения
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {separateDivisions.map((division, index) => (
              <motion.div
                key={division.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.12}
              >
                <Link
                  href={division.external ? `/${division.slug}` : `/services/${division.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="relative flex flex-col justify-between overflow-hidden rounded-lg p-6 md:p-7 transition-all duration-300 group-hover:shadow-lg min-h-[200px]"
                    style={{ background: C.dark, color: "#ffffff" }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  >
                    {/* Decorative pattern */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)`,
                      }}
                    />
                    {/* Accent line on left */}
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-1"
                      style={{ background: division.accent }}
                    />
                    {/* Accent glow bottom-right */}
                    <div
                      className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-[80px]"
                      style={{ background: index === 0 ? "rgba(119,226,195,0.08)" : "rgba(224,78,57,0.08)" }}
                    />

                    <div className="relative z-10">
                      {/* Badge */}
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-4"
                        style={{
                          background: index === 0 ? "rgba(119,226,195,0.15)" : "rgba(224,78,57,0.15)",
                          color: division.accent,
                          borderRadius: "3px",
                        }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: division.accent }} />
                        {division.badge}
                      </span>

                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg"
                          style={{ background: index === 0 ? "rgba(119,226,195,0.15)" : "rgba(224,78,57,0.15)" }}
                        >
                          <division.icon
                            className="h-5 w-5"
                            style={{ color: division.accent }}
                          />
                        </div>
                        <h3 className="text-[15px] font-semibold leading-tight" style={{ color: "#ffffff" }}>
                          {division.name}
                        </h3>
                      </div>

                      <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {division.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex justify-end mt-4">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ background: index === 0 ? "rgba(119,226,195,0.2)" : "rgba(224,78,57,0.2)" }}
                      >
                        <ArrowRight className="h-3.5 w-3.5" style={{ color: division.accent }} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
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


    </main>
  );
}
