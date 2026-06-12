"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Map,
  Layers,
  Wallet,
  BarChart3,
  Database,
  Users,
  BookOpen,
  Shield,
  Building2,
  Target,
  Cpu,
  ExternalLink,
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

const productName = "Цифровая платформа мастер-планирования";
const productTagline =
  "Управление инвестиционными программами развития территорий и инфраструктурных проектов";

const features = [
  {
    icon: Map,
    title: "Цифровое мастер-планирование",
    description:
      "Единая цифровая модель территории: функциональное зонирование, параметры застройки, очередность освоения.",
  },
  {
    icon: Layers,
    title: "Управление портфелем проектов",
    description:
      "Ведение портфеля инвестиционных проектов, привязанных к локациям мастер-плана.",
  },
  {
    icon: Wallet,
    title: "Управление финансированием",
    description:
      "Планирование и контроль освоения средств по источникам (бюджеты, внебюджет, ГЧП) в привязке к объектам инфраструктуры.",
  },
  {
    icon: Database,
    title: "Интеграция с госсистемами",
    description:
      "Обмен данными с ГИСОГД, ЕГРН и системами казначейства для актуального статуса участков и финансирования.",
  },
  {
    icon: BarChart3,
    title: "Мониторинг KPI развития",
    description:
      "Отслеживание показателей реализации мастер-плана: ввод недвижимости, соцобъекты, рабочие места, освоение инвестиций.",
  },
  {
    icon: Users,
    title: "Единая среда взаимодействия",
    description:
      "Централизованная среда планирования для органов власти, застройщиков, сетевых организаций и проектных институтов.",
  },
  {
    icon: BookOpen,
    title: "Библиотека типовых решений",
    description:
      "Накопление лучших практик, типовых мастер-планов и шаблонов проектной документации.",
  },
  {
    icon: Shield,
    title: "Управление рисками",
    description:
      "Мониторинг рисков территориального развития: градостроительные ограничения, нехватка мощностей, срывы сроков подключения к сетям.",
  },
];

const advantages = [
  {
    title: "Методология + софт",
    text: "Платформа поставляется с предустановленной методологией Агентства «ЦЕНТР», апробированной в 60+ регионах РФ — не «пустой» инструментарий.",
  },
  {
    title: "Master-to-Money",
    text: "Прямой переход от архитектурного образа территории к финансовой модели инвестиционной программы в режиме реального времени.",
  },
  {
    title: "Адаптация под ГЧП и КРТ",
    text: "Специализированные алгоритмы расчёта мультипликативных эффектов и распределения нагрузки на инфраструктуру между государством и частным инвестором.",
  },
  {
    title: "Технологический суверенитет",
    text: "Разработка на базе Open Source (PostgreSQL/PostGIS, Python), включение в Реестр отечественного ПО, независимость от зарубежных вендоров.",
  },
];

const effects = [
  { value: "30–40%", label: "сокращение сроков разработки и согласования мастер-планов" },
  { value: "25%", label: "повышение точности прогнозирования бюджетных расходов" },
  { value: "50%", label: "снижение рисков замораживания проектов из‑за нехватки мощностей сетей" },
];

const forWhom = [
  {
    title: "Государственный сектор",
    items: ["Федеральные и региональные министерства", "Администрации субъектов РФ", "Профильные департаменты"],
  },
  {
    title: "Институты развития",
    items: ["ВЭБ.РФ", "ДОМ.РФ", "Корпорации развития регионов"],
  },
  {
    title: "Крупный бизнес",
    items: ["Девелоперы полного цикла", "Промышленные холдинги", "Проекты КРТ от 50 га"],
  },
  {
    title: "Проектные институты",
    items: ["Организации урбанистики и градостроительства", "Архитектурно-планировочные бюро"],
  },
];

const centerAgencyCases = [
  "Мастер-план Дербента (Республика Дагестан)",
  "Мастер-план Якутска (Республика Саха)",
  "Мастер-план Норильска (Красноярский край)",
  "Мастер-план Астраханской агломерации",
  "Более 60 регионов России",
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
              <Link href="/solutions" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                Решения
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>Мастер-планирование</span>
            </motion.nav>

            {/* Label badge — совместный продукт */}
            <span
              className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              Совместный продукт
            </span>

            {/* Partnership badge */}
            <motion.span
              className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-medium"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Совместно с Агентством «ЦЕНТР»
            </motion.span>

            {/* Main heading */}
            <motion.h1
              className="mb-4 max-w-xl"
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
              {productName}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mb-4 max-w-lg text-[15px] font-medium leading-relaxed"
              style={{ color: C.orange }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {productTagline}
            </motion.p>

            {/* Description */}
            <motion.p
              className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Платформа предназначена для автоматизации процессов стратегического и территориального мастер-планирования, а также управления инвестиционными программами, обеспечивающими реализацию утверждённых мастер-планов. Система ориентирована на крупные государственные корпорации, институты развития, региональные администрации и девелоперов.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link href="/contacts">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                  style={{ background: C.orange, borderRadius: "4px" }}
                  whileHover={{ background: C.orangeHover, transition: { duration: 0.3 } }}
                >
                  Запросить демонстрацию
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <a href="https://www.centeragency.org/" target="_blank" rel="noopener noreferrer">
                <motion.span
                  className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                  whileHover={{
                    borderColor: C.mint,
                    color: C.mint,
                    transition: { duration: 0.3 },
                  }}
                >
                  Сайт «ЦЕНТР»
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Effects stats — 3 glass cards */}
          <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[480px] lg:flex-shrink-0 lg:gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            {effects.map((effect, index) => (
              <motion.div
                key={effect.label}
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
                  style={{ background: `linear-gradient(90deg, ${C.orange}, ${C.orange}50)` }}
                />
                <div
                  className="text-2xl font-bold leading-none md:text-3xl"
                  style={{ fontFamily: "var(--font-russo)", color: C.orange }}
                >
                  {effect.value}
                </div>
                <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {effect.label}
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
   SECTION 2 — КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ
   ═══════════════════════════════════════════════════════ */
function FeaturesSection() {
  return (
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
            <SectionLabel>Ключевые возможности</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Комплексное управление развитием территорий
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Внедрение позволяет перейти от разрозненного управления<br />инвестиционными проектами к целостному управлению
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.06}
            >
              <div className="group relative flex w-full flex-col rounded-xl bg-white p-6 md:p-7 transition-all duration-300 hover:shadow-lg border border-transparent group-hover:border-gray-100">
                {/* Accent line on left */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-xl"
                  style={{ background: C.dna }}
                />
                {/* Icon */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: `${C.dna}10` }}
                >
                  <item.icon className="h-5 w-5" style={{ color: C.dna }} />
                </div>
                <h3 className="heading-subsection mb-2" style={{ color: C.textDark }}>
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed flex-1" style={{ color: C.textMuted }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — ПРЕИМУЩЕСТВА ПЛАТФОРМЫ
   ═══════════════════════════════════════════════════════ */
function AdvantagesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-kept">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <SectionLabel>Преимущества платформы</SectionLabel>
          <h2 className="heading-section" style={{ color: C.textDark }}>
            Конкурентные преимущества решения
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative flex w-full flex-col rounded-xl bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-lg border border-gray-100"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.08}
            >
              {/* Top accent line */}
              <div
                className="absolute left-0 top-0 h-0.5 w-full rounded-t-xl"
                style={{ background: `linear-gradient(90deg, ${C.dna}, ${C.dna}50)` }}
              />
              {/* Number */}
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
                style={{ background: `${C.dna}10`, color: C.dna }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="heading-subsection mb-3" style={{ color: C.textDark }}>
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: C.textMuted }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — ДЛЯ КОГО
   ═══════════════════════════════════════════════════════ */
function ForWhomSection() {
  return (
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
            <SectionLabel>Для кого</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Целевые пользователи платформы
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Платформа применима в&nbsp;сфере государственного и&nbsp;муниципального управления,<br />градостроительства и&nbsp;девелопмента
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {forWhom.map((block, index) => (
            <motion.div
              key={block.title}
              className="group relative flex w-full flex-col rounded-xl bg-white p-6 md:p-7 transition-all duration-300 hover:shadow-lg border border-transparent group-hover:border-gray-100"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.06}
            >
              {/* Accent line on left */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-xl"
                style={{ background: C.mintDark }}
              />
              <h3 className="heading-subsection mb-4" style={{ color: C.textDark }}>
                {block.title}
              </h3>
              <ul className="space-y-2.5 flex-1">
                {block.items.map((i) => (
                  <li key={i} className="text-[13px] leading-relaxed flex items-start gap-2" style={{ color: C.textMuted }}>
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: C.dna }} />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — ПАРТНЁР РАЗРАБОТКИ
   ═══════════════════════════════════════════════════════ */
function PartnerSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: C.dark }}>
      {/* Decorative diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,140,149,0.1)" }}
      />

      <div className="container-kept relative z-10">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <SectionLabel light>Партнёр разработки</SectionLabel>
          <h2 className="heading-section" style={{ color: C.white }}>
            Агентство стратегического развития «ЦЕНТР»
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: Partner info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.1}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: `${C.mint}15` }}
              >
                <Building2 className="h-6 w-6" style={{ color: C.mint }} />
              </div>
            </div>
            <p className="mb-6 text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Агентство стратегического развития <strong style={{ color: C.white }}>«ЦЕНТР»</strong> более 10 лет специализируется на комплексных исследованиях и разработке мастер-планов для различных регионов России — от Дербента и Астрахани до Якутска и Норильска. Авторская методология «ЦЕНТР» легла в основу алгоритмической логики платформы.
            </p>
            <p className="mb-8 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Методологические решения, интегрированные в платформу, прошли апробацию в рамках разработки стратегических документов развития более чем в 60 регионах России.
            </p>
            <a
              href="https://www.centeragency.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: C.mint }}
            >
              Перейти на сайт Агентства «ЦЕНТР»
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* RIGHT: Cases */}
          <motion.div
            className="relative overflow-hidden rounded-xl p-6 lg:p-8"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.08)" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.2}
          >
            {/* Top accent */}
            <div
              className="absolute left-0 top-0 h-0.5 w-full"
              style={{ background: `linear-gradient(90deg, ${C.mint}, ${C.mint}30)` }}
            />
            <h3 className="heading-subsection mb-5" style={{ color: C.white }}>
              Кейсы и опыт «ЦЕНТР»
            </h3>
            <ul className="space-y-4">
              {centerAgencyCases.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[14px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <Target className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: C.dna }} />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 6 — ТЕХНОЛОГИЯ
   ═══════════════════════════════════════════════════════ */
function TechnologySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-kept">
        <motion.div
          className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Технология</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Архитектура и технологический стек
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.1}
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: `${C.dna}10` }}
              >
                <Cpu className="h-5 w-5" style={{ color: C.dna }} />
              </div>
            </div>
            <p className="text-[14px] leading-relaxed mb-4" style={{ color: C.textMid }}>
              Продукт реализуется как веб-приложение с доступом через браузер. Система управления жизненным циклом сложных инженерных объектов (PLM) в применении к территориальному развитию. Разработка на базе Open Source (PostgreSQL/PostGIS, Python), с возможностью включения в Реестр отечественного ПО.
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: C.textMuted }}>
              Интеграция ГИС и финансового моделирования в едином ядре; микросервисная архитектура; ролевой интерфейс для архитекторов (карты), экономистов и руководителей (бюджеты и KPI).
            </p>
          </div>

          {/* Tech highlights */}
          <div className="flex flex-col gap-3 md:w-[340px] md:flex-shrink-0">
            {[
              { label: "PostgreSQL / PostGIS", desc: "Пространственные данные" },
              { label: "Python", desc: "Расчётные модули" },
              { label: "Микросервисы", desc: "Масштабируемая архитектура" },
              { label: "Реестр отечественного ПО", desc: "Технологический суверенитет" },
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                className="group relative overflow-hidden rounded-lg bg-white p-4 border border-gray-100 transition-all duration-300 hover:shadow-md"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0.2 + index * 0.06}
              >
                <div className="pointer-events-none absolute left-0 top-0 h-full w-0.5" style={{ background: C.dna }} />
                <div className="text-[13px] font-semibold" style={{ color: C.textDark }}>{tech.label}</div>
                <div className="text-[11px] mt-0.5" style={{ color: C.textMuted }}>{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 7 — CTA
   ═══════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: C.muted }}>
      <div className="container-kept">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <SectionLabel>Начните сотрудничество</SectionLabel>
          <h2 className="heading-section mb-4" style={{ color: C.textDark }}>
            Узнать больше о платформе
          </h2>
          <p className="text-section-desc mb-10">
            Готовы обсудить пилотное внедрение или интеграцию в ваши процессы? Свяжитесь с нами.
          </p>
          <Link href="/contacts">
            <motion.span
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold uppercase tracking-[0.05em] text-white"
              style={{ background: C.orange, borderRadius: "4px" }}
              whileHover={{ background: C.orangeHover, transition: { duration: 0.3 } }}
            >
              Связаться с нами
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function SolutionMasterPlanningPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.white }}>
      <HeroSection />
      <FeaturesSection />
      <AdvantagesSection />
      <ForWhomSection />
      <PartnerSection />
      <TechnologySection />
      <CtaSection />
    </main>
  );
}
