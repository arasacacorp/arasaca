"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Briefcase,
  TrendingUp,
  Users,
  Heart,
  BarChart3,
  Cpu,
  Wrench,
  MapPin,
  GraduationCap,
  FlaskConical,
  Target,
  Rocket,
  BookOpen,
  Handshake,
  Lightbulb,
  Compass,
  Layers,
  Building2,
  Sparkles,
  UserCheck,
  MessageSquare,
  Palette,
  Mail,
  Phone,
  Newspaper,
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

/* Stats */
const careerStats = [
  { number: "50+", suffix: "", label: "экспертов в команде", icon: Users, accent: C.dna },
  { number: "9", suffix: "", label: "направлений деятельности", icon: Layers, accent: C.orange },
  { number: "30+", suffix: "", label: "отраслей экспертизы", icon: Compass, accent: C.mintDark },
  { number: "3", suffix: "", label: "города присутствия", icon: MapPin, accent: C.dna },
];

/* Benefits — по мотивам kept.ru */
const benefits = [
  {
    icon: TrendingUp,
    title: "Карьерный трек",
    description: "Прозрачная система карьерного роста с индивидуальным планом развития, наставничество и внутренние программы повышения квалификации",
    accent: C.dna,
  },
  {
    icon: Users,
    title: "Команда профессионалов",
    description: "Работа рядом с экспертами своего дела, которые поддерживают друг друга и ориентируются на результат",
    accent: C.mintDark,
  },
  {
    icon: Heart,
    title: "Забота о сотрудниках",
    description: "Гибкий график, возможность удалённой работы, ДМС, корпоративный спорт, программа психологического здоровья",
    accent: C.orange,
  },
  {
    icon: Target,
    title: "Масштабные проекты",
    description: "Участие в проектах, которые меняют бизнес и экономику — от стратегий холдингов до цифровой трансформации отраслей",
    accent: C.dna,
  },
  {
    icon: BookOpen,
    title: "Обучение и развитие",
    description: "Корпоративные программы обучения, доступ к профессиональной литературе и курсам, поддержка сертификаций",
    accent: C.mintDark,
  },
  {
    icon: Lightbulb,
    title: "Пространство для идей",
    description: "Каждый может предлагать решения и влиять на процессы — мы ценим инициативу и критическое мышление",
    accent: C.orange,
  },
];

/* Directions — обновлённые по мотивам kept.ru/career */
const directions = [
  {
    icon: Briefcase,
    title: "Консалтинг",
    description: "Стратегический и операционный консалтинг: разработка стратегий, оптимизация процессов, управление изменениями",
    bg: C.dark,
    textColor: "#ffffff",
    href: "/services/consulting",
    size: "large" as const,
  },
  {
    icon: BarChart3,
    title: "Аналитика и исследования",
    description: "Глубокая аналитика рынков и отраслей, исследования данных, экономическое моделирование",
    bg: C.dna,
    textColor: "#ffffff",
    href: "/services/analytics",
    size: "large" as const,
  },
  {
    icon: Cpu,
    title: "Технологии",
    description: "Цифровая трансформация, ИТ-стратегии, внедрение решений и автоматизация",
    bg: C.orange,
    textColor: "#ffffff",
    href: "/services/technologies",
    highlight: true,
    size: "small" as const,
  },
  {
    icon: Wrench,
    title: "Инжиниринг",
    description: "Предпроектный анализ, экспертиза капзатрат, управление строительством",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/engineering",
    size: "small" as const,
  },
  {
    icon: MapPin,
    title: "Развитие территорий",
    description: "Мастер-планирование, урбанистика, экономика территорий",
    bg: C.mintDark,
    textColor: "#ffffff",
    href: "/services/territorial-development",
    size: "small" as const,
  },
  {
    icon: UserCheck,
    title: "HR и организация",
    description: "Организационное проектирование, HR-аналитика, управление талантами",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/hr",
    size: "small" as const,
  },
  {
    icon: GraduationCap,
    title: "Обучение",
    description: "Корпоративные программы, бережливое производство, управление знаниями",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/learning",
    size: "small" as const,
  },
  {
    icon: Palette,
    title: "Коммуникации и бренд",
    description: "Бренд-стратегии, коммуникационные кампании, управление репутацией",
    bg: C.white,
    textColor: C.textDark,
    href: "/services/communications",
    size: "small" as const,
  },
  {
    icon: FlaskConical,
    title: "Стартапы и инновации",
    description: "Сопровождение стартапов, НИОКР, корпоративные инновации от идеи до масштабирования",
    bg: C.dark,
    textColor: "#ffffff",
    href: "/services/startups",
    size: "large" as const,
  },
];

/* Growth stages — карьерная лестница */
const growthStages = [
  {
    step: "01",
    title: "Стажёр / Аналитик",
    description: "Погружение в проекты, освоение методологий, работа под руководством наставника",
    accent: C.mint,
  },
  {
    step: "02",
    title: "Консультант",
    description: "Самостоятельное ведение задач, ответственность за результаты рабочей группы",
    accent: C.dna,
  },
  {
    step: "03",
    title: "Старший консультант",
    description: "Управление проектами, менторинг младших коллег, развитие экспертизы",
    accent: C.mintDark,
  },
  {
    step: "04",
    title: "Менеджер / Директор",
    description: "Стратегическое управление практикой, развитие бизнеса, формирование команды",
    accent: C.orange,
  },
];

/* Values */
const values = [
  {
    icon: Sparkles,
    title: "Инициативность",
    description: "Каждый может предлагать идеи и влиять на процессы",
  },
  {
    icon: Handshake,
    title: "Партнёрство",
    description: "Работаем как одна команда, уважая вклад каждого",
  },
  {
    icon: MessageSquare,
    title: "Открытость",
    description: "Прямая коммуникация и прозрачность в решениях",
  },
  {
    icon: Rocket,
    title: "Нацеленность на результат",
    description: "Фокус на реальном влиянии на бизнес клиентов",
  },
];

const CV_EMAIL = "info@arasaca.ru";

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
      {/* Decorative diagonal lines — original background */}
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
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>Карьера</span>
            </motion.nav>

            {/* Label badge */}
            <span
              className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              Карьера в Арасаке
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
              Твоя карьера начинается
              <br />
              <span style={{ color: C.mint }}>там, где ценят идеи</span>
            </motion.h1>

            {/* Subtitle — same size as /services */}
            <motion.p
              className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Арасака — это команда профессионалов, объединённых стремлением к&nbsp;развитию. Мы&nbsp;ищем талантливых специалистов, которые готовы расти, бросать вызов привычному и&nbsp;вместе с&nbsp;нами находить решения, способные менять индустрии.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link href="/career/vacancies">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                  style={{ background: C.dna, borderRadius: "4px" }}
                  whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                >
                  Смотреть вакансии
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <a href={`mailto:${CV_EMAIL}?subject=Резюме`}>
                <motion.span
                  className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                  whileHover={{
                    borderColor: C.mint,
                    color: C.mint,
                    transition: { duration: 0.3 },
                  }}
                >
                  Отправить CV
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
            {careerStats.map((stat, index) => (
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
   SECTION 2 — BENEFITS (Bento-style grid)
   ═══════════════════════════════════════════════════════ */
function BenefitsSection() {
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
            <SectionLabel>Почему Арасака</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Арасака предлагает
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Мы создаём условия, в&nbsp;которых<br />профессионалы раскрывают свой потенциал
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((item, index) => (
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
   SECTION 3 — CAREER DIRECTIONS (Bento grid — homepage style)
   ═══════════════════════════════════════════════════════ */
function DirectionsSection() {
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
            <SectionLabel>Направления</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Выберите команду
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Мы постоянно ищем специалистов<br />в&nbsp;различных практиках и&nbsp;направлениях
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {directions.map((card, index) => {
            const isLarge = card.size === "large";
            const isDark = card.bg === C.dark || card.bg === C.dna || card.bg === C.orange || card.bg === C.mintDark;

            return (
              <motion.div
                key={card.title}
                className={cn(isLarge && "sm:col-span-2")}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.06}
              >
                <Link href={card.href} className="group block h-full">
                  <motion.div
                    className={cn(
                      "relative flex flex-col justify-between rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg h-full",
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

                    {/* Highlight dot */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — CAREER GROWTH (Timeline)
   ═══════════════════════════════════════════════════════ */
function GrowthSection() {
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
            <SectionLabel light>Карьерный трек</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Быстрый и прозрачный
              <br />
              <span style={{ color: C.mint }}>карьерный рост</span>
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            Работа с наставником<br />по индивидуальному плану<br />развития на каждом этапе
          </p>
        </motion.div>

        {/* Growth stages — horizontal timeline */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {growthStages.map((stage, index) => (
            <motion.div
              key={stage.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.12}
              className="relative flex"
            >
              {/* Connecting line — only between cards on lg */}
              {index < growthStages.length - 1 && (
                <div
                  className="pointer-events-none absolute -right-3 top-8 hidden h-0.5 w-6 lg:block"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
              )}

              <div className="group relative rounded-lg p-6 md:p-7 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}
              >
                {/* Accent top line */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${stage.accent}, ${stage.accent}50)` }}
                />

                {/* Step number */}
                <div
                  className="mb-4 text-3xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-russo)", color: stage.accent, opacity: 0.7 }}
                >
                  {stage.step}
                </div>

                <h3 className="mb-2 text-[15px] font-semibold leading-tight text-white">
                  {stage.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stage.description}
                </p>

                {/* Decorative corner */}
                <svg
                  className="pointer-events-none absolute bottom-4 right-4 opacity-10"
                  width="40" height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path d="M40 0v15h-3V3H25V0h15z" fill={stage.accent} />
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
   SECTION 5 — VALUES
   ═══════════════════════════════════════════════════════ */
function ValuesSection() {
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
            <SectionLabel>Наши ценности</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Что нас объединяет
            </h2>
          </div>
          <p className="text-section-desc max-w-xs lg:text-right">
            Принципы, которые определяют<br />нашу культуру и подход к работе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.1}
            >
              <div className="group relative flex flex-col items-center text-center rounded-lg border p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-transparent"
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
            Готовы стать частью команды?
          </h2>

          <p className="mb-10 max-w-lg text-[15px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Посмотрите открытые вакансии или отправьте резюме — мы свяжемся с&nbsp;вами, когда появится подходящая возможность
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/career/vacancies">
              <motion.span
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] transition-colors"
                style={{ background: C.white, color: C.dark, borderRadius: "4px" }}
                whileHover={{ background: C.mint, color: C.dark, transition: { duration: 0.3 } }}
              >
                Смотреть вакансии
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
            <a href={`mailto:${CV_EMAIL}?subject=Резюме`}>
              <motion.span
                className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em]"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: C.white, borderRadius: "4px" }}
                whileHover={{
                  borderColor: C.white,
                  background: "rgba(255,255,255,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                Отправить CV
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
   SECTION 7 — QUICK LINKS (copied from homepage)
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════════════ */
export default function CareerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <DirectionsSection />
      <GrowthSection />
      <ValuesSection />
      <CtaSection />
      <NavigationSection />
    </main>
  );
}
