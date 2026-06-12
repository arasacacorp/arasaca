"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Heart,
  HandHeart,
  FileCheck,
  MessageCircle,
  Users,
  Target,
  BookOpen,
  Scale,
  Building2,
  Sparkles,
  Lightbulb,
  Handshake,
  Mail,
  Briefcase,
  BarChart3,
  Cpu,
  Layers,
  Newspaper,
  Phone,
  CheckCircle2,
  FileText,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   COLOUR PALETTE — consistent with homepage
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

/* Stats for hero */
const proBonoStats = [
  { number: "15+", label: "проектов выполнено", icon: FileCheck, accent: C.dna },
  { number: "10+", label: "организаций поддержано", icon: HandHeart, accent: C.mintDark },
  { number: "3", label: "направления помощи", icon: Target, accent: C.orange },
  { number: "100%", label: "безвозмездно", icon: Heart, accent: C.dna },
];

/* What we offer */
const services = [
  {
    icon: FileCheck,
    title: "Стратегия и планирование",
    description: "Помощь в разработке стратегий, целей и планов развития для НКО и социальных проектов. Формирование дорожных карт и приоритизация инициатив.",
    accent: C.dna,
  },
  {
    icon: HandHeart,
    title: "Управление проектами",
    description: "Консультации по постановке процессов, управлению рисками и контролю результатов. Сопровождение от идеи до реализации.",
    accent: C.mintDark,
  },
  {
    icon: MessageCircle,
    title: "Аналитика и исследования",
    description: "Экспертная поддержка в анализе данных, оценке эффективности и подготовке отчётности. Исследования для обоснования решений.",
    accent: C.orange,
  },
  {
    icon: Scale,
    title: "Организационное развитие",
    description: "Проектирование организационных структур, оптимизация процессов, разработка систем управления и мотивации.",
    accent: C.dna,
  },
  {
    icon: BookOpen,
    title: "Обучение и знания",
    description: "Проведение мастер-классов, воркшопов и тренингов для команд НКО. Передача экспертизы и лучших практик.",
    accent: C.mintDark,
  },
  {
    icon: Lightbulb,
    title: "Цифровая трансформация",
    description: "Консультации по автоматизации процессов, внедрению ИТ-решений и цифровой грамотности для социальных организаций.",
    accent: C.orange,
  },
];

/* Target audience */
const audience = [
  {
    icon: Building2,
    title: "Некоммерческие организации",
    description: "Благотворительные фонды, НКО и общественные объединения, которым нужна профессиональная консалтинговая помощь",
    accent: C.dna,
  },
  {
    icon: Users,
    title: "Социальные проекты",
    description: "Инициативы в сфере социальной поддержки, образования и культуры, направленные на решение общественных проблем",
    accent: C.mintDark,
  },
  {
    icon: BookOpen,
    title: "Образовательные инициативы",
    description: "Просветительские проекты, программы развития образования и науки, инициативы по распространению знаний",
    accent: C.orange,
  },
];

/* How it works — process steps */
const processSteps = [
  {
    step: "01",
    title: "Заявка",
    description: "Заполните форму на сайте или напишите нам — опишите организацию, задачу и ожидаемый результат",
    accent: C.mint,
    icon: FileText,
  },
  {
    step: "02",
    title: "Оценка",
    description: "Мы рассматриваем заявку, оцениваем соответствие критериям и определяем формат поддержки",
    accent: C.dna,
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Согласование",
    description: "Обсуждаем детали, сроки, состав команды и формируем план работ, комфортный для обеих сторон",
    accent: C.mintDark,
    icon: MessageSquare,
  },
  {
    step: "04",
    title: "Реализация",
    description: "Работаем над проектом с тем же качеством и вовлечённостью, что и в коммерческих проектах",
    accent: C.orange,
    icon: CheckCircle2,
  },
];

/* Principles */
const principles = [
  {
    icon: Sparkles,
    title: "Тот же уровень экспертизы",
    description: "Pro bono проекты выполняются с тем же качеством, что и коммерческие — без компромиссов",
  },
  {
    icon: Handshake,
    title: "Партнёрский подход",
    description: "Мы не просто консультируем — мы становимся частью команды на время проекта",
  },
  {
    icon: Target,
    title: "Ориентация на результат",
    description: "Каждый проект завершается измеримым результатом, а не просто рекомендациями",
  },
  {
    icon: Heart,
    title: "Ответственный выбор",
    description: "Мы выбираем проекты, где наша экспертиза даст максимальный социальный эффект",
  },
];

const PRO_BONO_EMAIL = "info@arasaca.ru";

/* Quick links */
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
      {/* Decorative glow */}
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
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>Pro bono</span>
            </motion.nav>

            {/* Label badge */}
            <span
              className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              Безвозмездная помощь
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
              Экспертиза, которая
              <br />
              <span style={{ color: C.mint }}>работает на благо</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Мы оказываем консалтинговую поддержку на безвозмездной основе некоммерческим организациям и социальным проектам, которым важна профессиональная экспертиза для развития и масштабирования.
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
                  style={{ background: C.dna, borderRadius: "4px" }}
                  whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                >
                  Подать заявку
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <a href={`mailto:${PRO_BONO_EMAIL}?subject=Pro+bono+заявка`}>
                <motion.span
                  className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                  whileHover={{
                    borderColor: C.mint,
                    color: C.mint,
                    transition: { duration: 0.3 },
                  }}
                >
                  Написать нам
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
            {proBonoStats.map((stat, index) => (
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
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — WHAT WE OFFER (Bento-style grid)
   ═══════════════════════════════════════════════════════ */
function ServicesSection() {
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
            <SectionLabel>Направления помощи</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Чем мы можем помочь
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            В рамках pro bono мы предоставляем<br />консалтинговые услуги в областях,<br />в которых у нас есть экспертиза
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.06}
            >
              <div
                className="group relative flex w-full flex-col rounded-xl bg-white p-7 transition-all duration-300 hover:shadow-xl md:p-8"
              >
                {/* Accent line on left */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1"
                  style={{ background: item.accent }}
                />
                {/* Subtle dot pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${item.accent} 1px, transparent 1px)`,
                    backgroundSize: "16px 16px",
                  }}
                />
                {/* Decorative circle */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.1]"
                  style={{ background: item.accent }}
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{ background: `${item.accent}14` }}
                  >
                    <item.icon className="h-5.5 w-5.5" style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-semibold leading-tight mb-3 text-base" style={{ color: C.textDark }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed opacity-70 flex-1" style={{ color: C.textMuted }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — FOR WHOM (Target audience cards)
   ═══════════════════════════════════════════════════════ */
function AudienceSection() {
  return (
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
            <SectionLabel>Целевая аудитория</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Для кого мы работаем
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Тем, кому важна профессиональная<br />консалтинговая помощь, но нет<br />возможности оплачивать её
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {audience.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.1}
            >
              <div
                className="group relative flex w-full flex-col rounded-xl border p-7 transition-all duration-300 hover:shadow-lg hover:border-transparent md:p-8"
                style={{ borderColor: C.border }}
              >
                {/* Hover accent top */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: item.accent }}
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ background: C.light }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-semibold leading-tight mb-3 text-base" style={{ color: C.textDark }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed opacity-70 flex-1" style={{ color: C.textMuted }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          className="mt-10 rounded-lg p-6 md:p-8"
          style={{ background: C.light }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{ background: `${C.dna}14` }}
            >
              <MessageCircle className="h-5 w-5" style={{ color: C.dna }} />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold mb-2" style={{ color: C.textDark }}>
                Объём и формат поддержки определяются индивидуально
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: C.textMuted }}>
                Мы рассматриваем каждую заявку отдельно и&nbsp;формируем оптимальный формат взаимодействия в&nbsp;зависимости от&nbsp;запроса и&nbsp;наших возможностей. Обычно проект занимает от&nbsp;2&nbsp;до&nbsp;6&nbsp;месяцев.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — PROCESS (Timeline)
   ═══════════════════════════════════════════════════════ */
function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,140,149,0.08)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />

      <div className="container-kept relative z-10">
        <motion.div
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel light>Процесс</SectionLabel>
            <h2
              className="leading-[1.1] tracking-tight"
              style={{
                fontFamily: "var(--font-russo)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: C.white,
              }}
            >
              Как подать заявку
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            Простой и прозрачный процесс<br />от заявки до результата
          </p>
        </motion.div>

        {/* Process steps — horizontal timeline */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.12}
              className="relative flex"
            >
              {/* Connecting line — only between cards on lg */}
              {index < processSteps.length - 1 && (
                <div
                  className="pointer-events-none absolute -right-3 top-8 hidden h-0.5 w-6 lg:block"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
              )}

              <div
                className="group relative rounded-lg p-6 md:p-7 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}
              >
                {/* Accent top line */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${step.accent}, ${step.accent}50)` }}
                />

                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="text-3xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-russo)", color: step.accent, opacity: 0.7 }}
                  >
                    {step.step}
                  </div>
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: `${step.accent}20` }}
                  >
                    <step.icon className="h-4 w-4" style={{ color: step.accent }} />
                  </div>
                </div>

                <h3 className="mb-2 text-[15px] font-semibold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.description}
                </p>

                {/* Decorative corner */}
                <svg
                  className="pointer-events-none absolute bottom-4 right-4 opacity-10"
                  width="40" height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path d="M40 0v15h-3V3H25V0h15z" fill={step.accent} />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — PRINCIPLES
   ═══════════════════════════════════════════════════════ */
function PrinciplesSection() {
  return (
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
            <SectionLabel>Наши принципы</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Как мы работаем
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Качество и ответственность,<br />которые мы гарантируем каждому проекту
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {principles.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.1}
            >
              <div
                className="group relative flex flex-col items-center text-center rounded-lg border p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-transparent"
                style={{ borderColor: C.border }}
              >
                {/* Hover accent top */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: C.dna }}
                />

                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: C.light }}
                >
                  <value.icon className="h-6 w-6" style={{ color: C.dna }} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold" style={{ color: C.textDark }}>
                  {value.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: C.textMuted }}>
                  {value.description}
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
   SECTION 6 — CTA
   ═══════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dna }}>
      {/* Decorative elements */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,49,60,0.3)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.2) 30px, rgba(255,255,255,0.2) 31px)`,
        }}
      />
      {/* Corner bracket decoration */}
      <svg
        className="pointer-events-none absolute bottom-8 right-8 opacity-10"
        width="80" height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path d="M80 0v30h-4V4H50V0h30z" fill="white" />
        <path d="M0 80V50h4v26h26v4H0z" fill="white" />
      </svg>

      <div className="container-kept relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <span
            className="mb-6 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            Присоединяйтесь
          </span>

          <h2
            className="mb-4 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "var(--font-russo)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: C.white,
            }}
          >
            Расскажите о вашем проекте
          </h2>

          <p className="mb-10 max-w-lg text-[15px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Если вы представляете НКО или социальный проект и вам нужна консалтинговая поддержка — напишите нам. Мы рассмотрим заявку и свяжемся с вами.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contacts">
              <motion.span
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] transition-colors"
                style={{ background: C.white, color: C.dark, borderRadius: "4px" }}
                whileHover={{ background: C.mint, color: C.dark, transition: { duration: 0.3 } }}
              >
                Подать заявку
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
            <a href={`mailto:${PRO_BONO_EMAIL}?subject=Pro+bono+заявка`}>
              <motion.span
                className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em]"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: C.white, borderRadius: "4px" }}
                whileHover={{
                  borderColor: C.white,
                  background: "rgba(255,255,255,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                Написать нам
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 7 — QUICK LINKS (same as homepage)
   ═══════════════════════════════════════════════════════ */
function NavigationSection() {
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

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
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
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function ProBonoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AudienceSection />
      <ProcessSection />
      <PrinciplesSection />
      <CtaSection />
      <NavigationSection />
    </main>
  );
}
