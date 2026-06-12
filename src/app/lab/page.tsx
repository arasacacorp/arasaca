"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  ArrowRight,
  ChevronRight,
  Code2,
  Database,
  Users,
  GraduationCap,
  Workflow,
  Plug,
  BarChart3,
  Shield,
  Zap,
  Lightbulb,
  Settings,
  Cpu,
  Rocket,
  CheckCircle2,
  Clock,
  Target,
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

/* Stats */
const labStats = [
  { number: "20+", suffix: "", label: "IT-решений разработано", icon: Rocket, accent: C.dna },
  { number: "5+", suffix: "", label: "лет в разработке", icon: Clock, accent: C.orange },
  { number: "100%", suffix: "", label: "индивидуальный подход", icon: Target, accent: C.mintDark },
  { number: "24/7", suffix: "", label: "поддержка систем", icon: Shield, accent: C.dna },
];

/* Lab projects */
const labProjects = [
  {
    icon: Users,
    title: "CRM-системы",
    description:
      "Собственные CRM-решения, адаптированные под специфику бизнеса. Управление клиентами, сделками, воронками продаж и аналитика.",
    features: ["Управление клиентской базой", "Воронки продаж", "Аналитика и отчёты", "Интеграция с телефонией"],
    accent: C.dna,
  },
  {
    icon: Workflow,
    title: "Автоматизация процессов",
    description:
      "Автоматизация рутинных операций и бизнес-процессов. Снижение ручного труда, ускорение работы и минимизация ошибок.",
    features: ["Документооборот", "Согласование заявок", "Автоматические уведомления", "Генерация документов"],
    accent: C.mintDark,
  },
  {
    icon: Plug,
    title: "Интеграции и API",
    description:
      "Разработка интеграционных решений. Связываем системы между собой, создаём API и коннекторы к внешним сервисам.",
    features: ["Интеграция с 1С", "Коннекторы к сервисам", "REST API", "Обмен данными"],
    accent: C.orange,
  },
  {
    icon: GraduationCap,
    title: "LMS-платформы",
    description:
      "Системы управления обучением для корпоративного образования. Курсы, тестирование, отслеживание прогресса.",
    features: ["Онлайн-курсы", "Тестирование", "Сертификация", "Отчёты по обучению"],
    accent: C.dna,
  },
  {
    icon: Database,
    title: "Кадровые системы",
    description:
      "HR-решения для управления персоналом. Учёт сотрудников, кадровый документооборот, расчёт KPI и мотивации.",
    features: ["Учёт сотрудников", "Кадровые документы", "Расчёт KPI", "Мотивация и премии"],
    accent: C.mintDark,
  },
  {
    icon: BarChart3,
    title: "Аналитические дашборды",
    description:
      "Визуализация данных и аналитика в реальном времени. Сводные панели для принятия управленческих решений.",
    features: ["BI-панели", "Графики и диаграммы", "Выгрузка отчётов", "Мониторинг KPI"],
    accent: C.orange,
  },
];

/* Advantages */
const advantages = [
  {
    icon: Lightbulb,
    title: "Индивидуальный подход",
    description: "Разрабатываем решение под ваши уникальные задачи, а не адаптируем коробочный продукт",
    accent: C.dna,
  },
  {
    icon: Shield,
    title: "Контроль и безопасность",
    description: "Полный контроль над данными и инфраструктурой, соответствие требованиям безопасности",
    accent: C.mintDark,
  },
  {
    icon: Zap,
    title: "Быстрый старт",
    description: "MVP за 2-4 недели, итеративное развитие функционала на основе обратной связи",
    accent: C.orange,
  },
  {
    icon: Settings,
    title: "Гибкость настроек",
    description: "Возможность доработки и масштабирования под растущие потребности бизнеса",
    accent: C.dna,
  },
];

/* Process steps */
const process = [
  { step: "01", title: "Анализ требований", description: "Изучаем задачи и формируем техническое задание", accent: C.mint },
  { step: "02", title: "Проектирование", description: "Разрабатываем архитектуру и дизайн-макеты", accent: C.dna },
  { step: "03", title: "Разработка MVP", description: "Создаём работающий прототип за 2-4 недели", accent: C.mintDark },
  { step: "04", title: "Тестирование", description: "Проводим тесты и вносим корректировки", accent: C.orange },
  { step: "05", title: "Внедрение", description: "Разворачиваем систему и обучаем пользователей", accent: C.dna },
  { step: "06", title: "Поддержка", description: "Обеспечиваем сопровождение и развитие решения", accent: C.mintDark },
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
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>Арасака Лаб</span>
            </motion.nav>

            {/* Label badge */}
            <span
              className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              Лаборатория цифровых решений
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
              Арасака Лаб
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Разрабатываем IT-решения для внутренних нужд компании и&nbsp;под индивидуальные запросы клиентов.
              CRM, автоматизации, интеграции, LMS, кадровые системы — всё, что нужно вашему бизнесу.
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
                  Обсудить проект
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <a href="#projects">
                <motion.span
                  className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                  whileHover={{
                    borderColor: C.mint,
                    color: C.mint,
                    transition: { duration: 0.3 },
                  }}
                >
                  Наши разработки
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
            {labStats.map((stat, index) => (
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
                  <span className="text-sm font-normal" style={{ color: stat.accent }}>{stat.suffix}</span>
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
   SECTION 2 — PROJECTS (Что мы разрабатываем)
   ═══════════════════════════════════════════════════════ */
function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28" style={{ background: C.muted }}>
      <div className="container-kept">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Разработки</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Что мы разрабатываем
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            В нашей лаборатории создаются решения<br />для автоматизации и&nbsp;цифровизации бизнес-процессов
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {labProjects.map((project, index) => (
            <motion.div
              key={project.title}
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
                  style={{ background: project.accent }}
                />
                {/* Subtle dot pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${project.accent} 1px, transparent 1px)`,
                    backgroundSize: "16px 16px",
                  }}
                />
                {/* Decorative circle */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.1]"
                  style={{ background: project.accent }}
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{ background: `${project.accent}14` }}
                  >
                    <project.icon className="h-5.5 w-5.5" style={{ color: project.accent }} />
                  </div>
                  <h3 className="heading-subsection mb-3" style={{ color: C.textDark }}>
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed opacity-70 flex-1 mb-5" style={{ color: C.textMuted }}>
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px]" style={{ color: C.textMid }}>
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: project.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
   SECTION 3 — ADVANTAGES (Почему индивидуальная разработка)
   ═══════════════════════════════════════════════════════ */
function AdvantagesSection() {
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
            <SectionLabel>Преимущества</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Почему индивидуальная разработка
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Коробочные решения не всегда подходят.<br />Мы создаём системы, которые идеально вписываются в&nbsp;ваши процессы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
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
                {/* Hover accent top line */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: item.accent }}
                />
                {/* Left accent line */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg transition-colors duration-300"
                  style={{ background: item.accent }}
                />

                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}14` }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.accent }} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold" style={{ color: C.textDark }}>
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: C.textMuted }}>
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
   SECTION 4 — PROCESS (Как мы работаем)
   ═══════════════════════════════════════════════════════ */
function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,140,149,0.08)" }}
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
              className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
            >
              Как мы работаем
            </h2>
          </div>
          <p
            className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            От идеи до работающей системы —<br />прозрачный процесс разработки
          </p>
        </motion.div>

        {/* Process steps — horizontal grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.1}
              className="relative flex"
            >
              <div
                className="group relative rounded-lg p-6 md:p-7 transition-all duration-300 hover:shadow-xl flex flex-col h-full w-full"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}
              >
                {/* Accent top line */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-full rounded-t-lg"
                  style={{ background: `linear-gradient(90deg, ${step.accent}, ${step.accent}50)` }}
                />
                {/* Left accent bar */}
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg"
                  style={{ background: step.accent }}
                />

                {/* Step number */}
                <div
                  className="mb-4 text-3xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-russo)", color: step.accent, opacity: 0.7 }}
                >
                  {step.step}
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
   SECTION 5 — CTA
   ═══════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative diagonal pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
        }}
      />
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,140,149,0.12)" }}
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
            style={{ borderColor: "rgba(119,226,195,0.3)", color: C.mint }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
            Начните проект
          </span>

          <h2
            className="mb-4 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "var(--font-russo)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: C.white,
            }}
          >
            Нужна индивидуальная IT-система?
          </h2>

          <p className="mb-10 max-w-lg text-[15px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Расскажите о ваших задачах — мы предложим оптимальное решение и&nbsp;оценку сроков
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contacts">
              <motion.span
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                style={{ background: C.orange, borderRadius: "4px" }}
                whileHover={{ background: C.orangeHover, transition: { duration: 0.3 } }}
              >
                Обсудить проект
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
            <a href="#projects">
              <motion.span
                className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em]"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", borderRadius: "4px" }}
                whileHover={{
                  borderColor: C.mint,
                  color: C.mint,
                  transition: { duration: 0.3 },
                }}
              >
                Наши разработки
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════════════ */
export default function LabPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <ProjectsSection />
      <AdvantagesSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
