"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  RefreshCw,
  Shield,
  Code,
  Lightbulb,
  Cog,
  Cloud,
  Cpu,
  Building2,
  Users,
  Newspaper,
  Layers,
  Phone,
  Mail,
  Briefcase,
  BarChart3,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";
import { technologiesSubDirections } from "@/data/technologiesServices";
import { C } from "@/lib/colors";

// Icon mapping for sub-directions
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  RefreshCw,
  Shield,
  Code,
  Lightbulb,
  Cog,
  Cloud,
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

/* ─── Quick Links data ─── */
const quickLinks = [
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    bg: C.dark,
    textColor: C.white,
    href: "/about",
    icon: Building2,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    bg: C.orange,
    textColor: C.white,
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
    bg: C.dna,
    textColor: C.white,
    href: "/press-center",
    icon: Newspaper,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: C.mintDark,
    textColor: C.white,
    href: "/career",
    icon: Users,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    bg: C.dark,
    textColor: C.white,
    href: "/contacts",
    icon: Mail,
  },
];

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Full-width banner with CSS gradient background
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
        {/* Diagonal lines pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: "rgba(224,78,57,0.10)" }} />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: "rgba(0,140,149,0.08)" }} />

        {/* Content */}
        <div className="container-kept relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
            {/* LEFT — Text content */}
            <motion.div className="flex-1" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
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
                <Link href="/services" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Услуги
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Технологии</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(0,140,149,0.15)",
                    color: C.mint,
                    borderRadius: "2px",
                  }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                  Основное направление
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="mb-4 max-w-lg"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: C.white,
                  fontFamily: "var(--font-russo)",
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Технологии
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Соединяем технологии с практикой: создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций, автоматизация и переход в облако. Повышение технологической зрелости бизнеса.
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

            {/* RIGHT — Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {[
                { number: "6", label: "практик", icon: Cpu, accent: C.dna },
                { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
                { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
                { number: "500+", label: "проектов", icon: ClipboardList, accent: C.dna },
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
          DIRECTIONS — Technologies sub-directions
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
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
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                Направления
              </motion.span>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Направления технологий
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Шесть ключевых направлений для<br />цифровой трансформации бизнеса
            </p>
          </motion.div>

          {/* Cards Grid — 3 columns x 2 rows */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {technologiesSubDirections.map((direction, index) => {
              const IconComponent = iconMap[direction.icon] || RefreshCw;

              return (
                <motion.div
                  key={direction.id}
                  className="flex"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.08}
                >
                  <Link
                    href={`/services/technologies/${direction.slug}`}
                    className="group block h-full w-full"
                  >
                    <motion.div
                      className="relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 border shadow-sm group-hover:shadow-md transition-all duration-300 h-full"
                      style={{
                        background: C.white,
                        borderColor: C.border,
                        minHeight: "180px",
                      }}
                      whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    >
                      {/* Decorative dots */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.1]"
                        style={{
                          backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`,
                          backgroundSize: "12px 12px",
                        }}
                      />

                      {/* Left accent bar */}
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-1"
                        style={{ background: C.dna }}
                      />

                      {/* Top: Icon + Title */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent className="h-4 w-4 opacity-60" />
                          <span className="block text-sm font-semibold md:text-base">
                            {direction.title}
                          </span>
                        </div>
                        {/* Description */}
                        <span className="mt-1.5 block text-[10px] md:text-[11px] font-normal leading-relaxed opacity-60">
                          {direction.description}
                        </span>
                      </div>

                      {/* Bottom: Arrow */}
                      <div className="relative z-10 flex justify-end mt-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ background: "rgba(0,140,149,0.1)" }}
                        >
                          <ArrowRight
                            className="h-4 w-4"
                            style={{ color: C.dna }}
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
          OUR APPROACH — 3-step methodology on dark background
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.dark }}>
        <div className="container-kept">
          {/* Section header */}
          <motion.div
            className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
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
                Методология
              </motion.span>
              <h2 className="heading-section" style={{ color: C.white }}>
                Наш подход
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-sm lg:text-right" style={{ color: "rgba(255,255,255,0.5)" }}>
              От диагностики до внедрения и&nbsp;поддержки — сопровождаем цифровые инициативы на всех этапах. Обеспечиваем импортозамещение и&nbsp;технологический суверенитет.
            </p>
          </motion.div>

          {/* 3 Step Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: RefreshCw,
                title: "Диагностика",
                description: "Оценка текущего состояния и цифровой зрелости",
                step: "01",
              },
              {
                icon: Code,
                title: "Разработка",
                description: "Проектирование решений и дорожных карт",
                step: "02",
              },
              {
                icon: Shield,
                title: "Внедрение",
                description: "Реализация, поддержка и устойчивое развитие",
                step: "03",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.12}
              >
                <div
                  className="relative overflow-hidden rounded-lg p-6 md:p-8 h-full"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg mb-5"
                      style={{ background: "rgba(0,140,149,0.15)" }}
                    >
                      <item.icon className="h-6 w-6" style={{ color: C.dna }} />
                    </div>

                    {/* Step label */}
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-[0.2em] mb-2"
                      style={{ color: C.mint }}
                    >
                      Шаг {item.step}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: C.white }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
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
                    <Mail className="h-4 w-4" />
                    Запросить КП
                  </Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider border transition-all duration-300" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
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
