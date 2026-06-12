"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Building2,
  Users,
  Newspaper,
  Layers,
  Mail,
  Phone,
  MapPin,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getCaseBySlug, getCases } from "@/data/cases";
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

/* ─── Quick Links data ─── */
const quickLinks = [
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    bg: "#00313C",
    textColor: "#ffffff",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    bg: "#E04E39",
    textColor: "#ffffff",
    href: "/services",
    icon: Briefcase,
  },
  {
    title: "Решения",
    description: "Цифровые продукты и платформы",
    bg: "#ffffff",
    textColor: "#1a1a1a",
    href: "/solutions/master-planning",
    icon: Layers,
  },
  {
    title: "Пресс-центр",
    description: "Новости, пресс-релизы, СМИ",
    bg: "#008C95",
    textColor: "#ffffff",
    href: "/media",
    icon: Newspaper,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: "#4dc9a5",
    textColor: "#ffffff",
    href: "/career",
    icon: Users,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    bg: "#00313C",
    textColor: "#ffffff",
    href: "/contacts",
    icon: Mail,
  },
];

export default function CaseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseData = getCaseBySlug(slug);

  if (!caseData) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: C.muted }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: C.textDark }}>Кейс не найден</h1>
          <Link href="/cases" className="text-[#008C95] hover:underline">
            Вернуться к списку кейсов
          </Link>
        </div>
      </main>
    );
  }

  const category = caseData.tags[0]?.label || "Проект";
  const isTaskSolution = caseData.structure === "task-solution-result";

  /* Short result for hero */
  const shortResult = isTaskSolution
    ? caseData.result.split(".")[0].length > 80
      ? caseData.result.split(".")[0].slice(0, 77) + "..."
      : caseData.result.split(".")[0]
    : "";

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Turquoise background
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dna }}>
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(105deg, #006a72 0%, #008C95 50%, #00a3ae 100%)" }}
        />
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[200px]"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        {/* Diagonal accent line */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(165deg, transparent 0%, transparent 48%, rgba(255,255,255,0.06) 48.5%, rgba(255,255,255,0.03) 49%, transparent 49.5%, transparent 100%)`,
          }}
        />
        {/* Corner brackets */}
        <svg
          className="pointer-events-none absolute bottom-4 right-4 opacity-20"
          width="60" height="60"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path d="M80 0v30h-4V4H50V0h30z" fill="#ffffff" />
          <path d="M0 80V50h4v26h26v4H0z" fill={C.mint} />
        </svg>

        <div className="container-kept relative z-10">
          <div className="py-6 md:py-10 lg:py-12">
            {/* Breadcrumbs */}
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
              <Link href="/cases" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                Кейсы
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>{category}</span>
            </motion.nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex-1">
                {/* Category badge */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <span
                    className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderRadius: "3px" }}
                  >
                    {category}
                  </span>
                  {caseData.year && (
                    <span
                      className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider ml-2"
                      style={{ background: "rgba(119,226,195,0.2)", color: C.mint, borderRadius: "3px" }}
                    >
                      {caseData.year}
                    </span>
                  )}
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="mb-5 max-w-3xl"
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    color: "#ffffff",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {caseData.title}
                </motion.h1>

                {/* Excerpt */}
                <motion.p
                  className="mb-6 max-w-2xl text-[14px] font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {caseData.excerpt}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  {caseData.tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider"
                      style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", borderRadius: "2px" }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right: Client + Result info cards */}
              <motion.div
                className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[280px] lg:flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Client card */}
                <div className="flex-1">
                  <div
                    className="relative overflow-hidden rounded-lg p-5 h-full flex flex-col justify-center"
                    style={{ background: "rgba(0,0,0,0.2)" }}
                  >
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-1"
                      style={{ background: C.mint }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-md"
                          style={{ background: "rgba(255,255,255,0.15)" }}
                        >
                          <Building2 className="h-4 w-4" style={{ color: "#ffffff" }} />
                        </div>
                        <span className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                          Клиент
                        </span>
                      </div>
                      <p className="text-[14px] font-semibold leading-snug pl-[42px]" style={{ color: "#ffffff" }}>
                        {caseData.client}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Result card */}
                {shortResult && (
                  <div className="flex-1">
                    <div
                      className="relative overflow-hidden rounded-lg p-5 h-full flex flex-col justify-center"
                      style={{ background: "#ffffff" }}
                    >
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-1"
                        style={{ background: C.orange }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-md"
                            style={{ background: "rgba(224,78,57,0.1)" }}
                          >
                            <TrendingUp className="h-4 w-4" style={{ color: C.orange }} />
                          </div>
                          <span className="text-[11px] uppercase tracking-wider" style={{ color: C.textMuted }}>
                            Результат
                          </span>
                        </div>
                        <p className="text-[13px] font-semibold leading-snug pl-[42px]" style={{ color: C.dna }}>
                          {shortResult}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ЗАДАЧА — White background
          ═══════════════════════════════════════════════════ */}
      {isTaskSolution && (
        <section className="py-20 md:py-28 bg-white">
          <div className="container-kept">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
              {/* Left: Sticky label */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.5 }}
                >
                  <span
                    className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: C.dna }}
                  >
                    Контекст
                  </span>
                  <h2 className="heading-section mb-4" style={{ color: C.textDark }}>
                    Задача
                  </h2>
                  <div className="flex items-center gap-3 mt-6">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: C.light }}
                    >
                      <Target className="h-5 w-5" style={{ color: C.dna }} />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium" style={{ color: C.textDark }}>
                        {caseData.client}
                      </p>
                      {caseData.year && (
                        <p className="text-[11px]" style={{ color: C.textMuted }}>{caseData.year} год</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Task content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="relative rounded-lg p-6 md:p-8"
                  style={{ background: C.muted, border: `1px solid ${C.borderLight}` }}
                >
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg"
                    style={{ background: C.dna }}
                  />
                  <p className="text-[14px] font-normal leading-relaxed" style={{ color: C.textMid }}>
                    {caseData.task}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Custom sections for "custom" structure */}
      {!isTaskSolution && caseData.structure === "custom" && (
        <section className="py-20 md:py-28 bg-white">
          <div className="container-kept">
            <div className="max-w-4xl">
              {caseData.sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="mb-12 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                    {section.title}
                  </h3>
                  {Array.isArray(section.content) ? (
                    <div className="space-y-3">
                      {section.content.map((item, i) => (
                        <p key={i} className="text-[14px] font-normal leading-relaxed" style={{ color: C.textMid }}>
                          {item}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[14px] font-normal leading-relaxed" style={{ color: C.textMid }}>
                      {section.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          РЕШЕНИЕ — Gray background
          ═══════════════════════════════════════════════════ */}
      {isTaskSolution && (
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
                <motion.span
                  className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: C.dna }}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                >
                  Подход
                </motion.span>
                <h2 className="heading-section" style={{ color: C.textDark }}>
                  Как мы решали
                </h2>
              </div>
              <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
                Поэтапная реализация,<br />нацеленная на измеримый результат
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {caseData.solution.map((item, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    index === 0 && caseData.solution.length % 2 !== 0 && "md:col-span-2"
                  )}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.1}
                >
                  <div
                    className="relative overflow-hidden rounded-lg p-6 md:p-7 h-full"
                    style={{ background: "#ffffff", border: `1px solid ${C.borderLight}` }}
                  >
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg"
                      style={{ background: index % 3 === 0 ? C.dna : index % 3 === 1 ? C.mintDark : C.orange }}
                    />
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-md text-[12px] font-bold"
                        style={{
                          background: index % 3 === 0 ? C.light : index % 3 === 1 ? "rgba(77,201,165,0.1)" : "rgba(224,78,57,0.1)",
                          color: index % 3 === 0 ? C.dna : index % 3 === 1 ? C.mintDark : C.orange,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex items-center gap-2">
                        <Lightbulb
                          className="h-4 w-4"
                          style={{ color: index % 3 === 0 ? C.dna : index % 3 === 1 ? C.mintDark : C.orange }}
                        />
                      </div>
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.textMid }}>
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          РЕЗУЛЬТАТ — Dark background
          ═══════════════════════════════════════════════════ */}
      {isTaskSolution && (
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
                <motion.span
                  className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: C.mint }}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                >
                  Итог
                </motion.span>
                <h2 className="heading-section" style={{ color: "#ffffff" }}>
                  Результат
                </h2>
              </div>
              <p className="text-[14px] font-normal leading-relaxed max-w-sm lg:text-right" style={{ color: "rgba(255,255,255,0.5)" }}>
                Подтверждённый практический<br />результат для клиента
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div
                className="relative overflow-hidden rounded-lg p-8 md:p-10"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg"
                  style={{ background: C.mint }}
                />
                {/* Result icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: "rgba(0,140,149,0.15)" }}
                  >
                    <CheckCircle2 className="h-5 w-5" style={{ color: C.dna }} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.mint }}>
                    Достигнуто
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {caseData.result}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          СВЯЗАННЫЕ УСЛУГИ — White background
          ═══════════════════════════════════════════════════ */}
      {caseData.relatedServices && caseData.relatedServices.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="container-kept">
            <motion.div
              className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
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
                  Экспертиза
                </motion.span>
                <h2 className="heading-section" style={{ color: C.textDark }}>
                  Связанные услуги
                </h2>
              </div>
              <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
                Направления, задействованные<br />в реализации этого проекта
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caseData.relatedServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.08}
                >
                  <Link href={service.href} className="group block h-full">
                    <div
                      className="relative flex items-center gap-4 overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg border h-full"
                      style={{ borderColor: C.borderLight, background: C.muted }}
                    >
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-1"
                        style={{ background: C.dna }}
                      />
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-300"
                        style={{ background: C.light }}
                      >
                        <Briefcase className="h-5 w-5" style={{ color: C.dna }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-semibold leading-tight transition-colors group-hover:text-[#008C95]" style={{ color: C.textDark }}>
                          {service.name}
                        </h3>
                      </div>
                      <ArrowRight
                        className="h-4 w-4 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1"
                        style={{ color: C.textMuted }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
