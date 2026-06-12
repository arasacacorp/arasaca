"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronRight,
  Database,
  BarChart3,
  Map,
  Layers,
  Cpu,
  Target,
  Phone,
  Mail,
  Building2,
  Briefcase,
  Newspaper,
  Users,
  FileText,
  FolderTree,
  Shield,
  PieChart,
  TrendingUp,
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

/* ─── Product card data (matching homepage) ─── */
const eosdoFeatures = [
  { label: "Внутренний документооборот", icon: FileText },
  { label: "Маршрутизация и согласование", icon: FolderTree },
  { label: "Поручения и контроль", icon: Shield },
  { label: "Импортонезависимость", icon: Database },
];
const esuipFeatures = [
  { label: "Управление портфелем", icon: PieChart },
  { label: "Оценка и отбор проектов", icon: Database },
  { label: "Мониторинг реализации", icon: BarChart3 },
  { label: "Аналитика и отчётность", icon: TrendingUp },
];
const mpFeatures = [
  { label: "Цифровая модель территории", icon: Map },
  { label: "Сценарное моделирование", icon: Cpu },
  { label: "Управление программами", icon: Layers },
  { label: "Контроль реализации", icon: Target },
];

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
    href: "/solutions",
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
export default function SolutionsPage() {
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
          style={{ background: "rgba(224,78,57,0.12)" }}
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Решения</span>
              </motion.nav>

              {/* Label badge */}
              <span
                className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
                style={{ borderColor: "rgba(224,78,57,0.4)", color: C.orange }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.orange }} />
                Цифровые платформы
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
                Решения и&nbsp;продукты
                <br />
                <span style={{ color: C.orange }}>для бизнеса и государства</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Цифровые платформы, созданные для&nbsp;решения задач бизнеса и&nbsp;государства. ЕОСДО, ЕСУИП и&nbsp;мастер-планирование территорий — все продукты импортонезависимы и&nbsp;адаптированы под российские реалии.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link href="/feedback?type=proposals">
                  <motion.span
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                    style={{ background: C.dna, borderRadius: "4px" }}
                    whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                  >
                    Запросить КП
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <Link href="/feedback?type=callback">
                  <motion.span
                    className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
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
                { number: "3", label: "цифровых продукта", icon: Layers, accent: C.dna },
                { number: "100%", label: "импортонезависимость", icon: Shield, accent: C.mintDark },
                { number: "2", label: "отраслевых платформы", icon: Database, accent: C.orange },
                { number: "1", label: "лаборатория R&D", icon: Cpu, accent: C.dna },
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
          PRODUCTS — Homepage-style grid (white cards + dark Мастер-план)
          ═══════════════════════════════════════════════════ */}
      <section id="products" className="py-20 md:py-28" style={{ background: C.muted }}>
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

          {/* ── Top row: ЕОСДО + ЕСУИП — white cards, 2 columns ── */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-5">
            {/* ЕОСДО */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0}
            >
              <Link href="/solutions/eosdo" className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                  <div className="h-1.5 w-full" style={{ background: C.dna }} />
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-5">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: `${C.dna}12`, color: C.dna, borderRadius: "3px" }}
                      >
                        <Database className="h-3 w-3" />
                        Корпоративный документооборот
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold leading-tight mb-1"
                      style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                    >
                      ЕОСДО
                    </h3>
                    <p className="text-[13px] font-medium mb-4" style={{ color: C.dna }}>
                      Единая отечественная система документооборота
                    </p>
                    <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: C.textMuted }}>
                      Корпоративная платформа для крупных предприятий и госкорпораций. Обеспечивает документооборот между организациями, филиалами и подразделениями — внутренняя переписка, поручения, согласования, приказы и регламенты.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {eosdoFeatures.map((f) => (
                        <span
                          key={f.label}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium"
                          style={{ background: `${C.dna}08`, color: C.dna, borderRadius: "4px" }}
                        >
                          <f.icon className="h-3.5 w-3.5" />
                          {f.label}
                        </span>
                      ))}
                    </div>
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

            {/* ЕСУИП */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.08}
            >
              <Link href="/solutions/esuip" className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                  <div className="h-1.5 w-full" style={{ background: C.mintDark }} />
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-5">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: `${C.mintDark}12`, color: C.mintDark, borderRadius: "3px" }}
                      >
                        <BarChart3 className="h-3 w-3" />
                        Управление инвестициями
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold leading-tight mb-1"
                      style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                    >
                      ЕСУИП
                    </h3>
                    <p className="text-[13px] font-medium mb-4" style={{ color: C.mintDark }}>
                      Единая система управления инвестиционным портфелем
                    </p>
                    <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: C.textMuted }}>
                      Информационная система для управления инвестиционной деятельностью — от планирования и оценки проектов до мониторинга реализации. Объединяет все инвестиционные проекты в единый портфель с аналитикой и контролем ключевых показателей.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {esuipFeatures.map((f) => (
                        <span
                          key={f.label}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium"
                          style={{ background: `${C.mintDark}08`, color: C.mintDark, borderRadius: "4px" }}
                        >
                          <f.icon className="h-3.5 w-3.5" />
                          {f.label}
                        </span>
                      ))}
                    </div>
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

          {/* ── Bottom row: Мастер-план — full-width white card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.16}
          >
            <Link href="/solutions/master-planning" className="group/mp block">
              <div className="relative flex flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                <div className="h-1.5 w-full" style={{ background: C.orange }} />
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${C.orange}12`, color: C.orange, borderRadius: "3px" }}
                    >
                      <Map className="h-3 w-3" />
                      Развитие территорий
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${C.orange}08`, color: C.textMuted, borderRadius: "3px" }}
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.orange }} />
                      Совместно с АСР «Центр»
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3
                      className="text-2xl md:text-3xl font-bold leading-tight mb-1"
                      style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                    >
                      Цифровая платформа мастер-планирования
                    </h3>
                    <p className="text-[13px] font-medium" style={{ color: C.orange }}>
                      Управление инвестиционными программами развития территорий
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed mb-6 max-w-2xl flex-1" style={{ color: C.textMuted }}>
                    Платформа для управления инвестиционными программами развития территорий и&nbsp;инфраструктурных проектов. Совместная разработка с&nbsp;Агентством стратегического развития «Центр». Цифровая модель территории, сценарное моделирование и&nbsp;контроль реализации.
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mpFeatures.map((f) => (
                      <span
                        key={f.label}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium"
                        style={{ background: `${C.orange}08`, color: C.orange, borderRadius: "4px" }}
                      >
                        <f.icon className="h-3.5 w-3.5" />
                        {f.label}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: C.borderLight }}>
                    <span className="text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#E04E39]" style={{ color: C.dark }}>
                      Подробнее о платформе
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/mp:translate-x-1" style={{ color: C.orange }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          АРАСАКА ЛАБ — Custom solutions
          ═══════════════════════════════════════════════════ */}
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
              <SectionLabel light>Арасака Лаб</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Нужно индивидуальное решение?
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
              Разрабатываем IT-системы под&nbsp;задачи вашего бизнеса: CRM, автоматизация, интеграции, дашборды.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.2}
          >
            <Link href="/lab" className="group block">
              <motion.div
                className="relative overflow-hidden rounded-lg p-8 md:p-10 border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-xl"
                whileHover={{ y: -2, transition: { duration: 0.25 } }}
              >
                {/* Accent line on left */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5" style={{ background: C.mint }} />

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-[14px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Лаборатория цифровых решений Арасаки разрабатывает IT-системы для внутренних нужд и под индивидуальные запросы клиентов: CRM, системы автоматизации, интеграции, LMS-платформы, HR-системы и аналитические дашборды.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["CRM-системы", "Автоматизация", "Интеграции", "LMS-платформы", "HR-системы", "Дашборды"].map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1.5 text-[11px] font-medium rounded-md"
                          style={{ background: "rgba(119,226,195,0.1)", color: C.mint }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold rounded-md transition-all duration-300"
                      style={{
                        background: `${C.mint}20`,
                        color: C.mint,
                      }}
                    >
                      Узнать больше о лаборатории
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK LINKS — Navigation cards + CTA panel
          ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-kept">
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
                          className="relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full border"
                          style={{
                            background: card.bg,
                            color: card.textColor,
                            borderColor: isWhite ? C.border : "transparent",
                            minHeight: "130px",
                          }}
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

                          <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }} />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2">
                              {card.icon && <card.icon className="h-4 w-4 opacity-60" />}
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
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="h-px w-12 mb-5" style={{ background: C.mint }} />
                  <h3
                    className="text-xl font-bold leading-tight mb-2"
                    style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}
                  >
                    Начните сотрудничество
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Оставьте заявку — мы&nbsp;свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <Link
                    href="/feedback?type=proposals"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300"
                    style={{ background: C.dna, borderRadius: "4px" }}
                  >
                    Запросить КП
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/feedback?type=callback"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-medium uppercase tracking-wider border transition-all duration-300"
                    style={{
                      borderColor: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.7)",
                      borderRadius: "4px",
                    }}
                  >
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
