"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Briefcase,
  Layers,
  Newspaper,
  Mail,
  Building2,
  Home,
  Users,
  Heart,
  FolderOpen,
  Factory,
  MapPin,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   COLOUR PALETTE
   ═══════════════════════════════════════════════════════ */
const C = {
  dna: "#008C95",
  dark: "#00313C",
  mint: "#77e2c3",
  mintDark: "#4dc9a5",
  orange: "#E04E39",
  muted: "#f1f2f4",
  white: "#ffffff",
  textDark: "#1a1a1a",
  textMid: "#494a4a",
  textMuted: "#6b7280",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
};

const vp = { once: true, amount: 0.1 as const };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
interface L { name: string; href: string }
interface Sub { title: string; links: L[] }
interface Cat {
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accent: string;
  links: L[];
  subs?: Sub[];
}

const categories: Cat[] = [
  /* ─── Главная ─── */
  {
    title: "Главная",
    icon: Home,
    accent: C.dna,
    links: [{ name: "Главная страница", href: "/" }],
  },

  /* ─── О компании ─── */
  {
    title: "О компании",
    icon: Building2,
    accent: C.dna,
    links: [
      { name: "О компании", href: "/about" },
      { name: "Клиенты", href: "/customers" },
      { name: "Арасака.Лаб", href: "/lab" },
    ],
  },

  /* ─── Кейсы ─── */
  {
    title: "Кейсы",
    icon: FolderOpen,
    accent: C.orange,
    links: [{ name: "Все кейсы", href: "/cases" }],
    subs: [
      {
        title: "Проекты",
        links: [
          { name: "Инструмент ФЭ-моделирования мастер-плана", href: "/cases/instrument-feh-modelirovaniya-master-plan" },
          { name: "Бизнес-план GaN-on-Diamond", href: "/cases/biznes-plan-gan-almaz-vander-technologies" },
          { name: "Бизнес-модель БПЛА", href: "/cases/biznes-model-pokrov-vozduh-monitoring-etapov" },
          { name: "ФЭ-модели мастер-плана Шарыпова", href: "/cases/fe-modeli-master-plan-sharypovo" },
          { name: "ФЭ-модели мастер-плана Чеченской Республики", href: "/cases/fe-modeli-master-plan-chechenskaya-respublika" },
          { name: "Бизнес-план стендового комплекса СПГ", href: "/cases/biznes-plan-spg-stend-rosatom-novatek" },
          { name: "Бизнес-план линейки насосов ГЭН", href: "/cases/biznes-plan-nasosnoe-oborudovanie-gnx" },
        ],
      },
    ],
  },

  /* ─── Отрасли ─── */
  {
    title: "Отрасли",
    icon: Factory,
    accent: C.mintDark,
    links: [{ name: "Все отрасли", href: "/industries" }],
    subs: [
      {
        title: "Ключевые отрасли",
        links: [
          { name: "Атомная промышленность", href: "/industries/nuclear" },
          { name: "Строительство и девелопмент", href: "/industries/construction" },
          { name: "Урбанистика и градостроительство", href: "/industries/urbanistics" },
          { name: "IT и цифровые технологии", href: "/industries/it" },
          { name: "Государственный сектор", href: "/industries/government" },
          { name: "Машиностроение и производство", href: "/industries/manufacturing" },
          { name: "Судостроение и морская техника", href: "/industries/shipbuilding" },
          { name: "Оборонно-промышленный комплекс", href: "/industries/defense" },
          { name: "Нефть, газ и нефтехимия", href: "/industries/oil-gas" },
        ],
      },
      {
        title: "Дополнительные отрасли",
        links: [
          { name: "АПК и пищевая промышленность", href: "/industries/agro" },
          { name: "Авиационная промышленность", href: "/industries/aerospace" },
          { name: "Энергетика и ЖКХ", href: "/industries/energy" },
          { name: "Металлургия и горнодобыча", href: "/industries/mining-metallurgy" },
          { name: "Финансовый сектор и банки", href: "/industries/finance" },
          { name: "Медицина и фармацевтика", href: "/industries/healthcare" },
          { name: "Образование и наука", href: "/industries/education" },
          { name: "Ритейл и торговля", href: "/industries/retail" },
          { name: "Транспорт и логистика", href: "/industries/logistics" },
          { name: "Связь и телеком", href: "/industries/telecom" },
          { name: "Химическая промышленность", href: "/industries/chemicals" },
          { name: "Лесная и деревообработка", href: "/industries/forestry" },
        ],
      },
    ],
  },

  /* ─── Карьера ─── */
  {
    title: "Карьера",
    icon: Users,
    accent: C.dna,
    links: [
      { name: "Карьера", href: "/career" },
      { name: "Вакансии", href: "/career/vacancies" },
    ],
  },

  /* ─── Pro Bono ─── */
  {
    title: "Pro Bono",
    icon: Heart,
    accent: C.orange,
    links: [{ name: "Pro Bono", href: "/pro-bono" }],
  },

  /* ─── Услуги ─── */
  {
    title: "Услуги",
    icon: Briefcase,
    accent: C.orange,
    links: [
      { name: "Все услуги", href: "/services" },
    ],
    subs: [
      {
        title: "Консалтинг",
        links: [
          { name: "Обзор направления", href: "/services/consulting" },
          { name: "Стратегический консалтинг", href: "/services/consulting/strategic-consulting" },
          { name: "Финансовый консалтинг и моделирование", href: "/services/consulting/financial-consulting" },
          { name: "Операционный консалтинг и оптимизация", href: "/services/consulting/operational-consulting" },
          { name: "Меры государственной поддержки", href: "/services/consulting/government-support" },
          { name: "Инвестиционное проектирование", href: "/services/consulting/investment-design" },
          { name: "Управление проектами", href: "/services/consulting/project-management" },
          { name: "Отчётность и раскрытие информации", href: "/services/consulting/reporting-disclosure" },
        ],
      },
      {
        title: "Аналитика и исследования",
        links: [
          { name: "Обзор направления", href: "/services/analytics" },
          { name: "Рыночная аналитика и конкурентные исследования", href: "/services/analytics/market-analytics" },
          { name: "Экономические и отраслевые исследования", href: "/services/analytics/economic-research" },
          { name: "Аналитика данных и моделирование", href: "/services/analytics/data-analytics" },
          { name: "Аналитика данных (статическая)", href: "/services/data-analytics" },
          { name: "Экономические исследования (статическая)", href: "/services/economic-research" },
          { name: "Исследования (статическая)", href: "/services/research" },
          { name: "Маркетинговые исследования (статическая)", href: "/services/market-research" },
        ],
      },
      {
        title: "Технологии",
        links: [
          { name: "Обзор направления", href: "/services/technologies" },
          { name: "Цифровая трансформация и стратегия", href: "/services/technologies/digital-transformation" },
          { name: "ИТ-аудит и Due Diligence", href: "/services/technologies/it-audit" },
          { name: "Разработка и внедрение ИТ-решений", href: "/services/technologies/development" },
          { name: "Корпоративные инновации и R&D", href: "/services/technologies/innovation" },
          { name: "Промышленная автоматизация и IIoT", href: "/services/technologies/industrial-automation" },
          { name: "Облачные решения и инфраструктура", href: "/services/technologies/cloud" },
        ],
      },
      {
        title: "Инжиниринг",
        links: [
          { name: "Обзор направления", href: "/services/engineering" },
          { name: "Предпроектная проработка", href: "/services/engineering/pre-project" },
          { name: "Экспертиза капитальных проектов", href: "/services/engineering/expertise" },
          { name: "Управление строительными проектами", href: "/services/engineering/construction-management" },
        ],
      },
      {
        title: "HR и организационное развитие",
        links: [
          { name: "Обзор направления", href: "/services/hr" },
          { name: "Управление человеческим капиталом", href: "/services/hr/human-capital-management" },
          { name: "Организационное развитие и трансформация", href: "/services/hr/organizational-development" },
          { name: "HR-аналитика и цифровизация", href: "/services/hr/hr-analytics" },
        ],
      },
      {
        title: "Обучение и развитие",
        links: [
          { name: "Обзор направления", href: "/services/learning" },
          { name: "Корпоративные программы развития", href: "/services/learning/corporate-development" },
          { name: "Lean & 5С и производственные практики", href: "/services/learning/lean-production" },
          { name: "Управление знаниями и образовательная стратегия", href: "/services/learning/knowledge-management" },
          { name: "Арасака. Корпоративная академия", href: "/services/learning/arasaca-academy" },
        ],
      },
      {
        title: "Коммуникации и бренд",
        links: [
          { name: "Обзор направления", href: "/services/communications" },
          { name: "Бренд и позиционирование", href: "/services/communications/brand-positioning" },
          { name: "Коммуникационные стратегии", href: "/services/communications/communication-strategy" },
          { name: "Медийное присутствие и репутация", href: "/services/communications/media-reputation" },
          { name: "Корпоративная идентичность и культура", href: "/services/communications/corporate-culture" },
        ],
      },
      {
        title: "Стартапы и инновации",
        links: [
          { name: "Обзор направления", href: "/services/startups" },
          { name: "Развитие стартапов", href: "/services/startups/startup-development" },
          { name: "Инновации и R&D сопровождение", href: "/services/startups/innovation-rd" },
          { name: "Корпоративные инновации", href: "/services/startups/corporate-innovation" },
        ],
      },
      {
        title: "Развитие территорий",
        links: [
          { name: "Обзор направления", href: "/services/territorial-development" },
          { name: "Пространственное и стратегическое планирование", href: "/services/territorial-development/spatial-strategic-planning" },
          { name: "Экономическое моделирование и сопровождение", href: "/services/territorial-development/economic-modeling" },
          { name: "Механизмы реализации и институциональные модели", href: "/services/territorial-development/implementation-mechanisms" },
        ],
      },
      {
        title: "Урбанистика",
        links: [
          { name: "Урбанистика — обзор", href: "/services/urban" },
          { name: "Мастер-планирование", href: "/services/urban/master-planning" },
          { name: "Экономика территорий", href: "/services/urban/territory-economics" },
          { name: "Инфраструктура", href: "/services/urban/infrastructure" },
        ],
      },
    ],
  },

  /* ─── Решения ─── */
  {
    title: "Решения и продукты",
    icon: Layers,
    accent: C.mintDark,
    links: [
      { name: "Все решения", href: "/solutions" },
      { name: "Мастер-планирование", href: "/solutions/master-planning" },
    ],
  },

  /* ─── Медиа ─── */
  {
    title: "Медиа",
    icon: Newspaper,
    accent: C.dna,
    links: [
      { name: "Пресс-центр", href: "/press-center" },
      { name: "Все публикации", href: "/media" },
      { name: "Новости", href: "/media/news" },
      { name: "Статьи", href: "/media/articles" },
      { name: "Инсайты", href: "/media/insights" },
    ],
    subs: [
      {
        title: "Страницы новостей",
        links: [{ name: "Ребрендинг", href: "/media/news/rebranding" }],
      },
    ],
  },

  /* ─── Контакты ─── */
  {
    title: "Контакты",
    icon: Mail,
    accent: C.orange,
    links: [{ name: "Страница контактов", href: "/contacts" }],
  },
];

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function SitemapPage() {
  const totalLinks = categories.reduce((a, c) => {
    a += c.links.length;
    c.subs?.forEach((s) => (a += s.links.length));
    return a;
  }, 0);

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px] pb-14 md:pb-16" style={{ background: C.dark }}>
        <div className="container-kept relative z-10 pt-6 md:pt-10 lg:pt-12">
          <motion.nav
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
              Главная
            </Link>
            <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
            <span className="text-[12px] font-medium" style={{ color: C.mint }}>Карта сайта</span>
          </motion.nav>

          <div className="flex items-end gap-6 md:gap-10 flex-wrap">
            <div>
              <motion.h1
                className="mb-3"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: C.white,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Карта сайта
              </motion.h1>
              <motion.p
                className="max-w-lg text-[14px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Все разделы и&nbsp;страницы сайта Арасака — {totalLinks} страниц
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <MapPin className="w-5 h-5" style={{ color: C.mint }} />
              <div>
                <div className="text-[22px] font-bold tabular-nums" style={{ color: C.white }}>{totalLinks}</div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>страниц</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8" style={{ background: C.muted, borderRadius: "24px 24px 0 0" }} />
      </section>

      {/* ══════════ ALL CATEGORIES ══════════ */}
      <section className="py-10 lg:py-16">
        <div className="container-kept space-y-6">

          {categories.map((cat, catIdx) => {
            const hasSubs = cat.subs && cat.subs.length > 0;

            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0}
              >
                <div
                  className="rounded-2xl overflow-hidden bg-white"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)" }}
                >
                  {/* Colored bar */}
                  <div className="h-1" style={{ background: cat.accent }} />

                  <div className="p-5 md:p-6">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ background: `${cat.accent}12` }}
                      >
                        <cat.icon className="h-[18px] w-[18px]" style={{ color: cat.accent }} />
                      </div>
                      <h2 className="text-[17px] font-bold" style={{ color: C.textDark }}>
                        {cat.title}
                      </h2>
                      <div className="flex-1 h-px" style={{ background: C.borderLight }} />
                      <span className="text-[11px] font-medium tabular-nums px-2 py-0.5 rounded-full" style={{ background: `${cat.accent}10`, color: cat.accent }}>
                        {cat.links.length + (cat.subs?.reduce((a, s) => a + s.links.length, 0) ?? 0)}
                      </span>
                    </div>

                    {/* Main links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-0">
                      {cat.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group/l flex items-center gap-2 py-2.5 border-b transition-colors"
                          style={{ borderColor: C.borderLight }}
                        >
                          <ArrowRight
                            className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover/l:opacity-100 group-hover/l:translate-x-0.5 transition-all duration-200"
                            style={{ color: cat.accent }}
                          />
                          <span className="text-[13.5px] font-medium group-hover/l:underline" style={{ color: C.textDark }}>
                            {link.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Sub-directions — ALL visible */}
                    {hasSubs && (
                      <div className="mt-5 space-y-5">
                        {cat.subs!.map((sub) => (
                          <div key={sub.title}>
                            {/* Sub-direction label */}
                            <div className="flex items-center gap-2 mb-2.5">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ background: cat.accent }}
                              />
                              <h3
                                className="text-[12px] font-semibold uppercase tracking-[0.12em]"
                                style={{ color: cat.accent }}
                              >
                                {sub.title}
                              </h3>
                              <div
                                className="flex-1 h-px"
                                style={{ background: `${cat.accent}20` }}
                              />
                              <span
                                className="text-[10px] font-medium tabular-nums"
                                style={{ color: cat.accent, opacity: 0.7 }}
                              >
                                {sub.links.length}
                              </span>
                            </div>

                            {/* Sub-direction links */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-0 pl-4">
                              {sub.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="group/l flex items-center gap-2 py-2 border-b transition-colors"
                                  style={{ borderColor: `${C.borderLight}` }}
                                >
                                  <span
                                    className="w-1 h-1 rounded-full shrink-0"
                                    style={{ background: cat.accent, opacity: 0.5 }}
                                  />
                                  <span className="text-[13px] group-hover/l:underline group-hover/l:text-[#008C95] transition-colors truncate" style={{ color: C.textMid }}>
                                    {link.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-16 lg:py-20 mt-auto" style={{ background: C.dark }}>
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2
              className="mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, color: C.white }}
            >
              Не нашли нужную страницу?
            </h2>
            <p className="text-[14px] mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              Свяжитесь с нами — поможем найти нужную информацию
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-10 py-4 font-medium text-lg transition-all duration-200 hover:opacity-90"
              style={{ background: C.dna, color: C.white }}
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
