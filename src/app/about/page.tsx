"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ArrowRight,
  Target,
  MessageSquare,
  BarChart3,
  Layers,
  Heart,
  Quote,
  HandHeart,
  Building2,
  Phone,
  Mail,
  Briefcase,
  Newspaper,
  Users,
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

/* ═══════════════════════════════════════════════════════
   DATA (text content preserved as-is)
   ═══════════════════════════════════════════════════════ */
const tagline = "Инсайты, которые двигают бизнес.";

const leadText = [
  "Арасака — одна из наиболее динамично развивающихся компаний, осуществляющих консалтинг и аутсорсинг инвестиционных проектов. Лидер на рынке инвестиционного консалтинга, специализирующийся на разработке и реализации стратегий для среднего и крупного бизнеса.",
  "Мы предоставляем комплексные решения в области финансово-экономических моделей, бизнес-планов, маркетинговых исследований и технико-экономических обоснований (ТЭО) для крупных промышленных и индустриальных компаний. Наша цель — помочь клиентам минимизировать риски, повысить эффективность и достигать устойчивых результатов через профессиональную экспертизу и индивидуальный подход.",
];

const projectClients = [
  "ГК «Росатом»",
  "ПАО «Новатэк»",
  "ПАО «Сибур»",
  "Группа «ПИК»",
];

const stats = [
  { value: "10+", label: "отраслей экономики" },
  { value: "80+", label: "проектов ежегодно" },
  { value: "8 лет", label: "работаем с бизнесом" },
  { value: "7", label: "направлений бизнеса" },
  { value: "60+", label: "консультантов" },
  { value: "75%", label: "повторных заказов" },
  { value: "40+", label: "благодарственных писем" },
  { value: "27%", label: "рост заказов ежегодно" },
  { value: "9", label: "направлений консалтинга" },
  { value: "36", label: "охватываемых сфер" },
  { value: "100+", label: "задач решаем" },
];

const principles = [
  {
    icon: Target,
    title: "Ориентируемся на долгосрочную ценность",
    text: "Мы предлагаем решения, которые приносят устойчивые результаты, а не просто краткосрочный эффект.",
  },
  {
    icon: MessageSquare,
    title: "Говорим правду, даже когда это сложно",
    text: "Наша независимость и честность — основа доверия. Мы не боимся поднимать неудобные вопросы, если это в интересах клиента.",
  },
  {
    icon: BarChart3,
    title: "Работаем на стыке данных, стратегии и интуиции",
    text: "Соединяем аналитическую точность с бизнес-чутьём, чтобы находить действительно работающие решения.",
  },
  {
    icon: Layers,
    title: "Углубляемся в суть, действуем системно",
    text: "Мы не просто консультируем — разбираемся в бизнесе клиента до деталей, чтобы построить стратегию, которая работает.",
  },
  {
    icon: Heart,
    title: "Делаем успех клиента — своим приоритетом",
    text: "Мы не просто советуем, а сопровождаем на каждом этапе изменений, чтобы вместе достигать реальных результатов.",
  },
];

const industryHighlights = [
  "Атомная энергетика",
  "Нефть и газ",
  "Машиностроение",
  "Судостроение",
  "Строительство",
  "ИТ-индустрия",
  "Медицина",
  "Производство",
  "Госсектор",
];

/* ─── Quick Links cards ─── */
const sectionCards = [
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
    bg: C.white,
    textColor: C.textDark,
    href: "/solutions",
    icon: Layers,
  },
  {
    title: "Пресс-центр",
    description: "Новости, пресс-релизы, СМИ",
    bg: C.dna,
    textColor: C.white,
    href: "/media",
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

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Gray background (Pattern B)
          ═══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-16 lg:pt-[120px] pb-16 md:pb-20"
        style={{ background: C.muted }}
      >
        <div className="container-kept relative z-10 pt-6 md:pt-10 lg:pt-12">
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="text-[12px] transition-colors hover:text-[#008C95]" style={{ color: C.textMuted }}>
              Главная
            </Link>
            <ChevronRight className="w-3 h-3" style={{ color: C.border }} />
            <span className="text-[12px] font-medium" style={{ color: C.dna }}>О компании</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                О нас
              </motion.span>

              <motion.h1
                className="mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: C.textDark,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {tagline}
              </motion.h1>

              <motion.p
                className="max-w-md text-[14px] font-normal leading-relaxed"
                style={{ color: C.textMuted }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Консалтинг и аутсорсинг инвестиционных проектов. Комплексные решения для среднего и крупного бизнеса.
              </motion.p>
            </div>

            {/* CTA cards */}
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[280px] lg:flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link href="/feedback?type=proposals" className="group/kp flex-1">
                <div
                  className="relative overflow-hidden rounded-lg p-5 transition-all duration-300 group-hover/kp:shadow-lg h-full flex flex-col justify-center"
                  style={{ background: C.dark }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: "rgba(255,255,255,0.5)" }} />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: "rgba(255,255,255,0.15)" }}>
                        <Mail className="h-4 w-4" style={{ color: "#ffffff" }} />
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: "#ffffff" }}>Запросить КП</span>
                    </div>
                    <p className="text-[11px] leading-relaxed pl-[42px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Индивидуальное предложение под вашу задачу
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/feedback?type=callback" className="group/cb flex-1">
                <div
                  className="relative overflow-hidden rounded-lg p-5 transition-all duration-300 group-hover/cb:shadow-lg h-full flex flex-col justify-center"
                  style={{ background: C.white }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: C.orange }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: `${C.orange}15` }}>
                        <Phone className="h-4 w-4" style={{ color: C.orange }} />
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: C.textDark }}>Обратный звонок</span>
                    </div>
                    <p className="text-[11px] leading-relaxed pl-[42px]" style={{ color: C.textMuted }}>
                      Перезвоним в удобное для вас время
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          КТО МЫ — White background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel>О компании</SectionLabel>
            {leadText.map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed mb-6 last:mb-0"
                style={{ color: C.textMid }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Projects quote block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-16"
          >
            <div
              className="relative overflow-hidden rounded-lg p-8 lg:p-10"
              style={{ background: C.dark }}
            >
              {/* Decorative pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                }}
              />
              {/* Accent line on left */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5" style={{ background: C.dna }} />

              <div className="relative z-10">
                <Quote className="w-10 h-10 mb-4" style={{ color: C.dna, opacity: 0.6 }} />
                <p className="text-xl lg:text-2xl font-medium leading-snug mb-6" style={{ color: "#ffffff" }}>
                  В активе Арасака — множество масштабных проектов. В их числе:{" "}
                  {projectClients.join(", ")} и др.
                </p>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 font-medium transition-colors"
                  style={{ color: C.mint }}
                >
                  Все отрасли
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Pro Bono */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6"
          >
            <Link href="/pro-bono" className="group block">
              <div
                className="relative overflow-hidden rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg border"
                style={{ background: C.light, borderColor: `${C.dna}20` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl shrink-0"
                    style={{ background: `${C.dna}15` }}
                  >
                    <HandHeart className="w-7 h-7" style={{ color: C.dna }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg font-semibold transition-colors mb-1"
                      style={{ color: C.textDark }}
                    >
                      Услуги Pro Bono
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.textMuted }}>
                      Мы оказываем консалтинговую поддержку на безвозмездной основе
                      НКО и социальным проектам. Подробнее о том, чем можем помочь и
                      как с нами связаться — на отдельной странице.
                    </p>
                  </div>
                  <ArrowRight
                    className="w-6 h-6 shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: C.dna }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          АРАСАКА В ЦИФРАХ — Muted background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <SectionLabel>Факты и цифры</SectionLabel>
            <h2
              className="heading-section"
              style={{ color: C.textDark }}
            >
              Арасака в цифрах
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.06}
              >
                <div
                  className="relative overflow-hidden rounded-lg p-6 text-center border h-full"
                  style={{ background: C.white, borderColor: C.border }}
                >
                  {/* Top accent line */}
                  <div className="pointer-events-none absolute left-0 top-0 h-1 w-full" style={{ background: `${C.dna}40` }} />
                  <div
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    style={{ color: C.dna }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-medium" style={{ color: C.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          КЛИЕНТЫ — White background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative overflow-hidden rounded-lg p-8 lg:p-10 border"
              style={{ background: C.muted, borderColor: C.border }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: `${C.dna}15` }}
                    >
                      <Building2 className="w-6 h-6" style={{ color: C.dna }} />
                    </div>
                    <h2 className="heading-section" style={{ color: C.textDark }}>
                      Клиенты
                    </h2>
                  </div>
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: C.textMid }}>
                    Нам доверяют клиенты из списка ТОП 100 крупнейших компаний России. С нами на постоянной основе работают крупнейшие российские и международные компании из промышленного, финансового и государственного секторов — а также стартапы и представители малого бизнеса.
                  </p>
                  <p className="text-[13px] mb-6" style={{ color: C.textMuted }}>
                    В их числе: Росатом, Сибур, Новатэк, Атомэнергомаш, Группа ПИК, Клуб Лидеров и другие.
                  </p>
                  <Link
                    href="/customers"
                    className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
                    style={{ color: C.dna }}
                  >
                    Все клиенты
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          КЛИЕНТЫ И ОТРАСЛИ — Muted background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <SectionLabel>Отрасли</SectionLabel>
              <h2 className="heading-section mb-4" style={{ color: C.textDark }}>
                Клиенты и отрасли
              </h2>
              <p className="text-[14px] max-w-xl mb-6" style={{ color: C.textMuted }}>
                Работаем с ключевыми отраслями экономики — от атомной энергетики
                и нефтегаза до строительства, IT и госсектора.
              </p>
              <div className="flex flex-wrap gap-2">
                {industryHighlights.map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2 text-[12px] font-medium rounded-md border"
                    style={{
                      background: C.white,
                      color: C.textMid,
                      borderColor: C.border,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium shrink-0 transition-colors"
              style={{
                border: `2px solid ${C.dna}`,
                color: C.dna,
              }}
            >
              Все отрасли
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          КЛЮЧЕВЫЕ ПРИНЦИПЫ — Dark/Teal background
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: C.dna }}>
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full blur-[180px]"
          style={{ background: "rgba(119,226,195,0.12)" }}
        />
        {/* Diagonal lines pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`,
          }}
        />

        <div className="container-kept relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <SectionLabel light>Принципы</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl mb-4">
              Ключевые принципы работы
            </h2>
            <p className="text-white/80 max-w-2xl mb-14">
              То, как мы работаем с клиентами и почему нам доверяют.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.08}
              >
                <div
                  className="relative overflow-hidden rounded-lg p-6 transition-all duration-300 border h-full"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg mb-4"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/75 text-[13px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — White background
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-section mb-4" style={{ color: C.textDark }}>
              Подберём оптимальное решение для вашего бизнеса
            </h2>
            <p className="text-[14px] mb-10" style={{ color: C.textMuted }}>
              Расскажите о задаче — подготовим предложение или договоримся о
              встрече.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-10 py-4 text-white font-medium text-lg transition-colors"
              style={{ background: C.orange }}
            >
              Обсудить проект
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ПОЛЕЗНЫЕ ССЫЛКИ — Navigation cards + CTA panel
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
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
