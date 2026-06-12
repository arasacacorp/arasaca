"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ArrowRight,
  Building2,
  ExternalLink,
  Phone,
  Mail,
  Briefcase,
  Layers,
  Newspaper,
  Users,
  Handshake,
  Trophy,
  Quote,
  Star,
  BarChart3,
  TrendingUp,
  Award,
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
   DATA
   ═══════════════════════════════════════════════════════ */
const tagline = "Нам доверяют лидеры индустрии.";

const leadText = `За время работы наша компания зарекомендовала себя как честная и сплочённая команда профессионалов, ценящих и доверяющих своим клиентам. Вот уже несколько лет на постоянной основе с нами работают крупнейшие российские и международные компании из промышленного, финансового и государственного секторов. В то же время мы рады сотрудничать с компаниями любого уровня. В нашем портфолио большое место уделено стартапам и представителям малого и микро-бизнеса.`;

const clients = [
  {
    name: "Госкорпорация Росатом",
    description:
      "Многопрофильный холдинг, обеспечивающий полный цикл ядерных технологий, строительство АЭС, производство топлива и развитие энергетических и цифровых решений.",
    url: "https://www.rosatom.ru",
  },
  {
    name: "ПАО «Сибур»",
    description:
      "Крупнейшая нефтегазохимическая компания России, занимающаяся переработкой углеводородного сырья и производством полимеров, каучуков и других нефтехимических продуктов.",
    url: "https://www.sibur.ru",
  },
  {
    name: "ПАО «Новатэк»",
    description:
      "Крупнейший производитель природного газа в России, специализируется на разведке, добыче, переработке и сжижении газа, реализует проекты по производству СПГ.",
    url: "https://www.novatek.ru",
  },
  {
    name: "АО «ОКБМ Африкантов»",
    description:
      "Ведущий разработчик ядерных энергетических установок в России, специализируется на проектировании и производстве реакторных технологий.",
    url: "https://www.okbm.nnov.ru",
  },
  {
    name: "АО «Атомэнергомаш»",
    description:
      "Машиностроительный дивизион Госкорпорации «Росатом», ведущий производитель оборудования для атомной и тепловой энергетики, нефтегазовой отрасли, судостроения и др.",
    url: "https://www.aem-group.ru",
  },
  {
    name: "Клуб Лидеров",
    description:
      "Сообщество предпринимателей России, объединяющее владельцев и топ-менеджеров крупных компаний для обмена опытом, развития бизнеса и взаимодействия с гос. структурами.",
    url: "https://www.leaders.club",
  },
  {
    name: "АО «МосЦентрГаз»",
    description:
      "Специализированная компания, занимающаяся эксплуатацией, обслуживанием и строительством газораспределительных сетей в Москве и Московской области.",
    url: "https://www.mcgaz.ru",
  },
  {
    name: "Группа ПИК",
    description:
      "Крупнейший девелопер жилой недвижимости в России, специализируется на комплексном строительстве жилых кварталов, производстве строительных материалов и управлении недвижимостью.",
    url: "https://www.pik.ru",
  },
  {
    name: "TSC (The Chilled Snack Company)",
    description:
      "Международная компания, специализирующаяся на производстве охлаждённых молочных снеков, выпускает продукцию под собственными брендами, сотрудничает с ритейлерами и FMCG-компаниями.",
    url: "https://www.tsc-ru.com",
  },
  {
    name: "ООО «Интеллико»",
    description:
      "Российский разработчик и производитель систем видеонаблюдения, специализируется на IP- и AHD-камерах, видеорегистраторах и сетевом оборудовании для различных отраслей.",
    url: "https://www.intelliko.ru",
  },
];

const highlights = [
  { icon: Trophy, label: "ТОП 100 крупнейших компаний" },
  { icon: Handshake, label: "Многолетние партнёрства" },
  { icon: Building2, label: "Промышленный, финансовый и гос. секторы" },
  { icon: Star, label: "75% повторных обращений" },
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

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function CustomersPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark background (Pattern A)
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Клиенты</span>
              </motion.nav>

              {/* Label */}
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.mint }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Партнёрство
              </motion.span>

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
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {tagline}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Крупнейшие российские и международные компании из промышленного, финансового и государственного секторов доверяют нам свои задачи.
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
                    style={{ background: C.mintDark, borderRadius: "4px" }}
                    whileHover={{ background: C.mint, transition: { duration: 0.3 } }}
                  >
                    Стать клиентом
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
                { number: "50+", label: "клиентов", icon: Users, accent: C.dna },
                { number: "10", label: "отраслей", icon: BarChart3, accent: C.mintDark },
                { number: "95%", label: "возвращаются", icon: TrendingUp, accent: C.orange },
                { number: "7+", label: "лет партнёрства", icon: Award, accent: C.dna },
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
          О НАШИХ КЛИЕНТАХ — White background
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
            <SectionLabel>Доверие</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              О наших клиентах
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mb-16"
          >
            <div
              className="relative overflow-hidden rounded-lg p-8 lg:p-10"
              style={{ background: C.dark }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                }}
              />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5" style={{ background: C.dna }} />

              <div className="relative z-10">
                <Quote className="w-10 h-10 mb-4" style={{ color: C.dna, opacity: 0.6 }} />
                <p className="text-[15px] leading-relaxed text-white/90">
                  {leadText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights row */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.08}
              >
                <div
                  className="relative overflow-hidden rounded-lg p-6 text-center border h-full"
                  style={{ background: C.muted, borderColor: C.border }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-1 w-full" style={{ background: `${C.dna}40` }} />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg mx-auto mb-3"
                    style={{ background: `${C.dna}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: C.dna }} />
                  </div>
                  <div className="text-[13px] font-medium" style={{ color: C.textDark }}>
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Client cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.06}
              >
                <div
                  className="group relative flex flex-col p-6 lg:p-8 rounded-lg border h-full transition-all duration-300 hover:shadow-md"
                  style={{
                    background: C.white,
                    borderColor: C.border,
                  }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: `${C.dna}30` }} />

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg shrink-0 transition-colors duration-300"
                      style={{ background: `${C.dna}10` }}
                    >
                      <Building2 className="w-6 h-6" style={{ color: C.dna }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-[15px] font-semibold mb-1.5 transition-colors duration-200 line-clamp-2"
                        style={{ color: C.textDark }}
                      >
                        {client.name}
                      </h3>
                      <p className="text-[13px] leading-relaxed line-clamp-3" style={{ color: C.textMuted }}>
                        {client.description}
                      </p>
                    </div>
                  </div>

                  {client.url && (
                    <div className="mt-auto pt-4 border-t" style={{ borderColor: C.borderLight }}>
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[12px] font-medium transition-all duration-200 hover:gap-3"
                        style={{ color: C.dna }}
                      >
                        Сайт компании
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ЗАПРОСИТЬ ОПЫТ — Muted background
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel>Кейсы</SectionLabel>
            <h2 className="heading-section mb-4" style={{ color: C.textDark }}>
              Здесь представлена небольшая часть наших заказчиков
            </h2>
            <p className="text-[14px] mb-10" style={{ color: C.textMuted }}>
              Чтобы запросить более релевантный опыт по вашей отрасли или задаче,
              свяжитесь с нами — подготовим подборку кейсов и рекомендаций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium transition-colors"
                style={{ background: C.dna }}
              >
                Отправить запрос
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about#principles"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium border-2 transition-colors"
                style={{ borderColor: C.dna, color: C.dna }}
              >
                О компании
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          РЕКОМЕНДАЦИИ — Teal background
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div className="max-w-xl">
              <SectionLabel light>Отзывы</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl mb-4">
                Рекомендации и отзывы
              </h2>
              <p className="text-white/80 leading-relaxed text-[15px]">
                У нас есть раздел с рекомендациями, где вы можете ознакомиться с
                отзывами и множеством положительных откликов от наших клиентов и
                партнёров.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium shrink-0 group transition-colors"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Подробнее о компании
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
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
              Готовы к&nbsp;сотрудничеству?
            </h2>
            <p className="text-[14px] mb-10" style={{ color: C.textMuted }}>
              Расскажите о вашей задаче — подготовим предложение или договоримся
              о&nbsp;встрече.
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
