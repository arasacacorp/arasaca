"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Layers,
  Newspaper,
  Users,
  Building2,
  Download,
  FileText,
  Image as ImageIcon,
  Calendar,
  TrendingUp,
  Quote,
  Award,
  Rss,
  ExternalLink,
  Presentation,
  BookOpen,
  Megaphone,
} from "lucide-react";
import { C } from "@/lib/colors";
import { getLatestPublications, typeHrefs } from "@/data/publications";

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
   DATA
   ═══════════════════════════════════════════════════════ */
const tagline = "Актуальное о компании и отрасли.";

const channels = [
  {
    title: "Новости компании",
    description: "Официальные пресс-релизы, события, достижения и инициативы Арасака",
    href: "/press-center/news",
    icon: Megaphone,
    accent: C.dna,
    count: "12+",
  },
  {
    title: "Статьи и экспертиза",
    description: "Экспертные публикации наших консультантов в деловых изданиях",
    href: "/press-center/articles",
    icon: BookOpen,
    accent: C.orange,
    count: "20+",
  },
  {
    title: "Инсайты и аналитика",
    description: "Исследования рынков, отраслевые обзоры и аналитические материалы",
    href: "/press-center/insights",
    icon: TrendingUp,
    accent: C.mintDark,
    count: "15+",
  },
  {
    title: "Все публикации",
    description: "Пресс-центр — единая лента новостей, статей и аналитики",
    href: "/press-center",
    icon: Newspaper,
    accent: C.dark,
    count: "50+",
  },
];

const pressKit = [
  {
    title: "Логотипы и брендбук",
    description: "Официальные логотипы, фирменный стиль и правила использования",
    icon: ImageIcon,
    format: "ZIP · 89 KB",
    href: "/brand/arasaka-brand-assets.zip",
    available: true,
  },
  {
    title: "Профиль компании",
    description: "Краткая справка о компании для СМИ: история, данные, факты",
    icon: FileText,
    format: "PDF · 340 KB",
    href: null,
    available: false,
  },
  {
    title: "Фотографии",
    description: "Офисы, команда, мероприятия — для использования в публикациях",
    icon: ImageIcon,
    format: "ZIP · 18 MB",
    href: null,
    available: false,
  },
  {
    title: "Презентация Арасака",
    description: "Корпоративная презентация: услуги, клиенты, кейсы, цифры",
    icon: Presentation,
    format: "PPTX · 5.1 MB",
    href: null,
    available: false,
  },
];

const latestNews = getLatestPublications(6).map((p) => ({
  title: p.title,
  category: p.type === "news" ? "Новости" : p.type === "article" ? "Статьи" : "Инсайты",
  date: p.date,
  type: p.type,
  slug: p.slug,
}));

const mediaContacts = [
  {
    role: "По вопросам сотрудничества со СМИ",
    name: "Пресс-служба",
    email: "press@arasaca.ru",
    phone: "+7 (495) 937 4477",
  },
  {
    role: "По вопросам партнёрства и спонсорства",
    name: "Отдел коммуникаций",
    email: "comms@arasaca.ru",
    phone: "+7 (495) 937 4477",
  },
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
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: C.mintDark,
    textColor: C.white,
    href: "/career",
    icon: Users,
  },
  {
    title: "Клиенты",
    description: "Компании-партнёры",
    bg: C.dna,
    textColor: C.white,
    href: "/customers",
    icon: Award,
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
export default function PressCenterPage() {
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
            <span className="text-[12px] font-medium" style={{ color: C.dna }}>Пресс-центр</span>
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
                Медиа
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
                Новости компании, пресс-релизы, экспертные публикации и аналитические материалы — всё в одном месте.
              </motion.p>
            </div>

            {/* CTA cards */}
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[280px] lg:flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link href="#press-kit" className="group/kp flex-1">
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
                        <Download className="h-4 w-4" style={{ color: "#ffffff" }} />
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: "#ffffff" }}>Пресс-кит</span>
                    </div>
                    <p className="text-[11px] leading-relaxed pl-[42px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Логотипы, брендбук, фотографии
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#contacts" className="group/cb flex-1">
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
                      <span className="text-[14px] font-bold" style={{ color: C.textDark }}>Контакты для СМИ</span>
                    </div>
                    <p className="text-[11px] leading-relaxed pl-[42px]" style={{ color: C.textMuted }}>
                      Связаться с пресс-службой
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          РАЗДЕЛЫ — White background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <SectionLabel>Каналы</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Разделы пресс-центра
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.1}
              >
                <Link href={channel.href} className="group block h-full">
                  <div
                    className="relative flex flex-col justify-between overflow-hidden rounded-lg p-6 lg:p-8 transition-all duration-300 border h-full"
                    style={{
                      background: C.white,
                      borderColor: C.border,
                    }}
                  >
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: channel.accent }} />

                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-lg"
                          style={{ background: `${channel.accent}12` }}
                        >
                          <channel.icon className="w-6 h-6" style={{ color: channel.accent }} />
                        </div>
                        <span
                          className="text-[11px] font-semibold px-3 py-1 rounded-full"
                          style={{ background: `${channel.accent}10`, color: channel.accent }}
                        >
                          {channel.count}
                        </span>
                      </div>
                      <h3
                        className="text-[16px] font-semibold mb-2 transition-colors duration-200"
                        style={{ color: C.textDark }}
                      >
                        {channel.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: C.textMuted }}>
                        {channel.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-[12px] font-medium" style={{ color: channel.accent }}>
                      Перейти
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ПОСЛЕДНИЕ НОВОСТИ — Muted background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <SectionLabel>Лента</SectionLabel>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Последние публикации
              </h2>
            </div>
            <Link
              href="/press-center"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium shrink-0 transition-colors text-[13px]"
              style={{ border: `2px solid ${C.dna}`, color: C.dna }}
            >
              Все материалы
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestNews.map((item, index) => {
              const accent = item.type === "news" ? C.dna : item.type === "article" ? C.orange : C.mintDark;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={index * 0.06}
                >
                  <Link href={`/press-center/${item.slug}`} className="group block h-full">
                    <div
                      className="relative overflow-hidden rounded-lg border h-full flex flex-col"
                      style={{ background: C.white, borderColor: C.border }}
                    >
                      {/* Top accent */}
                      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full" style={{ background: `${accent}60` }} />

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded"
                            style={{ background: `${accent}12`, color: accent }}
                          >
                            {item.category}
                          </span>
                          <span className="text-[11px]" style={{ color: C.textMuted }}>
                            {item.date}
                          </span>
                        </div>
                        <h3
                          className="text-[14px] font-semibold leading-snug flex-1 transition-colors duration-200 line-clamp-3"
                          style={{ color: C.textDark }}
                        >
                          {item.title}
                        </h3>
                        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium" style={{ color: accent }}>
                          Читать
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ПРЕСС-КИТ — Teal background
          ═══════════════════════════════════════════════════ */}
      <section id="press-kit" className="relative overflow-hidden py-16 lg:py-24" style={{ background: C.dna }}>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <SectionLabel light>Материалы</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl mb-4">
              Пресс-кит
            </h2>
            <p className="text-white/70 leading-relaxed text-[14px]">
              Бренд-ассеты, логотипы, фирменный стиль, корпоративные фотографии и&nbsp;презентации для использования в&nbsp;публикациях.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {pressKit.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.08}
              >
                <div
                  className="group relative overflow-hidden rounded-lg p-6 border h-full transition-all duration-300 hover:border-white/30"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg shrink-0" style={{ background: "rgba(255,255,255,0.12)" }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-white/60 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3">
                        {item.available && item.href ? (
                          <a
                            href={item.href}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white transition-colors rounded hover:bg-white/25"
                            style={{ background: "rgba(255,255,255,0.15)" }}
                          >
                            <Download className="w-3.5 h-3.5" />
                            Скачать
                          </a>
                        ) : (
                          <button
                            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/50 rounded cursor-not-allowed"
                            style={{ background: "rgba(255,255,255,0.08)" }}
                            disabled
                          >
                            <Download className="w-3.5 h-3.5" />
                            Скоро
                          </button>
                        )}
                        <span className="text-[11px] text-white/40">
                          {item.format}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          КОНТАКТЫ ДЛЯ СМИ — White background
          ═══════════════════════════════════════════════════ */}
      <section id="contacts" className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <SectionLabel>Связь</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Контакты для СМИ
            </h2>
            <p className="text-[14px] mt-3" style={{ color: C.textMuted }}>
              По вопросам публикации материалов, интервью, участия экспертов в&nbsp;мероприятиях и&nbsp;пресс-конференциях.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {mediaContacts.map((contact, index) => (
              <motion.div
                key={contact.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.1}
              >
                <div
                  className="relative overflow-hidden rounded-lg p-6 lg:p-8 border h-full"
                  style={{ background: C.muted, borderColor: C.border }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-1 w-full" style={{ background: `${C.dna}40` }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: `${C.dna}15` }}
                    >
                      <Mail className="w-5 h-5" style={{ color: C.dna }} />
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold" style={{ color: C.textDark }}>{contact.name}</div>
                      <div className="text-[11px]" style={{ color: C.textMuted }}>{contact.role}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-[13px] transition-colors hover:underline"
                      style={{ color: C.dna }}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {contact.email}
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-[13px] transition-colors hover:underline"
                      style={{ color: C.textMid }}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ПОДПИСКА — Muted background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div
              className="relative overflow-hidden rounded-lg p-8 lg:p-12"
              style={{ background: C.dark }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                }}
              />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5" style={{ background: C.orange }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Rss className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Подпишитесь на&nbsp;рассылку
                  </h2>
                </div>
                <p className="text-white/60 text-[14px] leading-relaxed mb-8">
                  Получайте свежие новости, экспертные статьи и аналитику Арасака на&nbsp;вашу электронную почту. Без спама, только полезные материалы.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 px-5 py-3.5 text-[13px] bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    style={{ borderColor: "rgba(255,255,255,0.15)", borderRadius: "4px" }}
                  />
                  <button
                    className="px-6 py-3.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-colors shrink-0"
                    style={{ background: C.orange, borderRadius: "4px" }}
                  >
                    Подписаться
                  </button>
                </div>
              </div>
            </div>
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
                    style={{ fontFamily: "var(--font-russo), sans-serif", color: "#ffffff" }}
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
