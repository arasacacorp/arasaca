"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Using <img> instead of Next.js Image for case study screenshots
// (Next.js optimizer has issues with these screenshots)
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
  Layers,
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  GitBranch,
  FileCode2,
  Cpu,
  Mail,
  Phone,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { C } from "@/lib/colors";
import { quickLinks } from "@/data/quickLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
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

/* ─── Data ─── */

const metrics = [
  { number: "16", label: "страниц", icon: Globe, accent: C.dna },
  { number: "99%", label: "сокращение бойлерплейта", icon: GitBranch, accent: C.mintDark },
  { number: "<1.5с", label: "время загрузки", icon: Zap, accent: C.orange },
  { number: "100", label: "Lighthouse SEO", icon: BarChart3, accent: C.dna },
  { number: "20", label: "design-токенов", icon: Palette, accent: C.mintDark },
  { number: "7K+", label: "строк удалено", icon: FileCode2, accent: C.orange },
];

const techStack = [
  { name: "Next.js 16", desc: "App Router, Server Components, Streaming", icon: "▲" },
  { name: "TypeScript 5", desc: "Строгая типизация, интерфейсы, generics", icon: "TS" },
  { name: "Tailwind CSS 4", desc: "Utility-first, кастомные токены, responsive", icon: "🌊" },
  { name: "Framer Motion", desc: "fadeUp, scaleIn, viewport-анимации", icon: "✦" },
  { name: "shadcn/ui", desc: "New York style, Lucide icons, доступность", icon: "◈" },
  { name: "Prisma ORM", desc: "SQLite, type-safe queries, migrations", icon: "◇" },
];

const solutionSteps = [
  {
    title: "Исследование и стратегия",
    desc: "Аудит существующего сайта, анализ конкурентов (Big 4, McKinsey, BCG), интервью с заказчиком. Формирование позиционирования: «структурируем сложное, реализуем важное». Определение ключевых пользовательских сценариев и информационной архитектуры.",
    icon: Layers,
  },
  {
    title: "Дизайн-система и визуальная идентичность",
    desc: "Создание единой системы design-токенов (C.*) — 20 цветовых переменных, покрывающих все состояния. Фирменная палитра: тёмно-синий (#00313C), бирюзовый (#008C95), оранжевый (#E04E39), мятный (#77e2c3). Типографика: Manrope для текста, Russo One для заголовков и чисел. Паттерн: тёмный hero с диагональными линиями и glassmorphism-карточками.",
    icon: Palette,
  },
  {
    title: "Информационная архитектура",
    desc: "Редукция структуры: удаление 5 сиротских директорий, объединение /media → /press-center, настройка 301-редиректов. Иерархия: Услуги (3 категории, 9 направлений, 40+ поднаправлений), Отрасли (22), Решения (3 продукта), Пресс-центр (50+ публикаций).",
    icon: Globe,
  },
  {
    title: "Разработка и инженерия",
    desc: "Next.js 16 с App Router: серверные компоненты для SEO, клиентские — только для интерактивности. Модульная архитектура: Homepage 2806 → 23 строки (99.2% сокращение), данные вынесены в отдельные файлы. Универсальные шаблоны ServicePageTemplate и ServiceSlugPageTemplate для генерации 40+ страниц из данных. Сервисный реестр servicesData.ts — единый источник истины для навигации и контента.",
    icon: Code2,
  },
  {
    title: "Оптимизация и качество",
    desc: "Удалено 7000+ строк дублирующегося и мёртвого кода. 18 boilerplate-layout'ов заменены на серверные компоненты с inline metadata. Иконки через строковый реестр (iconRegistry.tsx) для проброса через server/client boundary. Статистика компании (companyStats.ts) — единый источник, устраняющий противоречия между страницами.",
    icon: Cpu,
  },
  {
    title: "Адаптивность и доступность",
    desc: "Mobile-first responsive: все 16 страниц оптимизированы для мобильных, планшетов и десктопа. Семантическая HTML-разметка (main, nav, section, article). ARIA-атрибуты, keyboard navigation, alt-text для всех изображений. Кастомные scrollbar-стили, touch-friendly targets ≥ 44px.",
    icon: Smartphone,
  },
];

const codeSnippet = `// Design Tokens — единый источник цвета
export const C = {
  dna:       "#008C95",  // Фирменный бирюзовый
  dark:      "#00313C",  // Тёмный hero-фон
  orange:    "#E04E39",  // CTA, акценты
  mint:      "#77e2c3",  // Мятный на тёмном
  muted:     "#f1f2f4",  // Нейтральный фон
} as const;

// Сервисный реестр — один источник истины
export const serviceSubDirectionsMap = {
  consulting: { title: "Консалтинг", subDirections: [...] },
  analytics:  { title: "Аналитика",  subDirections: [...] },
  technologies: { title: "Технологии", subDirections: [...] },
};

// Шаблон генерирует 40+ страниц из данных
export default function ServiceSlugPageTemplate(
  config: ServiceSlugPageConfig
) {
  const direction = subDirections
    .find(d => d.slug === slug);
  // → Hero + Accordion + Carousel + QuickLinks
}`;

export default function ArasakaCasePage() {
  const category = "Коммуникации и бренд";

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dna }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(105deg, #006a72 0%, #008C95 50%, #00a3ae 100%)" }} />
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[200px]" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: `linear-gradient(165deg, transparent 0%, transparent 48%, rgba(255,255,255,0.06) 48.5%, rgba(255,255,255,0.03) 49%, transparent 49.5%, transparent 100%)` }} />

        <div className="container-kept relative z-10">
          <div className="py-6 md:py-10 lg:py-12">
            <motion.nav className="flex items-center gap-2 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Главная</Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <Link href="/cases" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Кейсы</Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>{category}</span>
            </motion.nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex-1">
                <motion.div className="mb-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderRadius: "3px" }}>{category}</span>
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider ml-2" style={{ background: "rgba(119,226,195,0.2)", color: C.mint, borderRadius: "3px" }}>2025</span>
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider ml-2" style={{ background: "rgba(224,78,57,0.2)", color: "#ffffff", borderRadius: "3px" }}>Собственный проект</span>
                </motion.div>

                <motion.h1 className="mb-5 max-w-3xl" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#ffffff" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                  Корпоративный сайт Арасака: редизайн, ребрендинг и инженерия с нуля
                </motion.h1>

                <motion.p className="mb-6 max-w-2xl text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                  Полный цикл создания корпоративного сайта — от дизайн-системы и визуальной идентичности до архитектуры, разработки и оптимизации. 16 страниц, 40+ подстраниц, 99% сокращение бойлерплейта, загрузка менее 1.5&nbsp;секунды.
                </motion.p>

                <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
                  {["Редизайн", "Ребрендинг", "Next.js 16", "TypeScript", "Design System", "SEO"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", borderRadius: "2px" }}>{tag}</span>
                  ))}
                </motion.div>
              </div>

              <motion.div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[280px] lg:flex-shrink-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-lg p-5 h-full flex flex-col justify-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: C.mint }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: "rgba(255,255,255,0.15)" }}><Layers className="h-4 w-4" style={{ color: "#ffffff" }} /></div>
                        <span className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Клиент</span>
                      </div>
                      <p className="text-[14px] font-semibold leading-snug pl-[42px]" style={{ color: "#ffffff" }}>Корпорация Арасака</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-lg p-5 h-full flex flex-col justify-center" style={{ background: "#ffffff" }}>
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: C.orange }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: "rgba(224,78,57,0.1)" }}><TrendingUp className="h-4 w-4" style={{ color: C.orange }} /></div>
                        <span className="text-[11px] uppercase tracking-wider" style={{ color: C.textMuted }}>Результат</span>
                      </div>
                      <p className="text-[13px] font-semibold leading-snug pl-[42px]" style={{ color: C.dna }}>99% сокращение бойлерплейта</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KEY METRICS ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Ключевые метрики</span>
            <h2 className="heading-section" style={{ color: C.textDark }}>Проект в цифрах</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((m, i) => (
              <motion.div key={m.label} variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={i * 0.08}>
                <div className="relative overflow-hidden rounded-lg p-6 md:p-7" style={{ background: C.muted, border: `1px solid ${C.borderLight}` }}>
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: m.accent }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: `${m.accent}15` }}><m.icon className="h-5 w-5" style={{ color: m.accent }} /></div>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-russo)", color: C.textDark }}>{m.number}</div>
                  <div className="text-[13px] font-medium" style={{ color: C.textMuted }}>{m.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HERO MOCKUP IMAGE ═══ */}
      <section className="py-16 lg:py-24" style={{ background: C.dark }}>
        <div className="container-kept relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />
              <img src="/cases/arasaka-website/hero-mockup.jpg" alt="Корпоративный сайт Арасака — главная страница" width={1440} height={900} className="w-full h-auto relative z-10" loading="eager" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ЗАДАЧА ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 0.5 }}>
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Контекст</span>
                <h2 className="heading-section mb-4" style={{ color: C.textDark }}>Задача</h2>
                <div className="flex items-center gap-3 mt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: C.light }}><Layers className="h-5 w-5" style={{ color: C.dna }} /></div>
                  <div>
                    <p className="text-[12px] font-medium" style={{ color: C.textDark }}>Корпорация Арасака</p>
                    <p className="text-[11px]" style={{ color: C.textMuted }}>Консалтинговая компания</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }}>
              <div className="relative rounded-lg p-6 md:p-8" style={{ background: C.muted, border: `1px solid ${C.borderLight}` }}>
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: C.dna }} />
                <div className="space-y-4 text-[14px] font-normal leading-relaxed" style={{ color: C.textMid }}>
                  <p>Арасака — российская консалтинговая компания с 9 направлениями практики, от стратегического консалтинга до цифровой трансформации и развития территорий. К 2025 году компания выросла из boutique-фирмы в полноценного игрока рынка с клиентами уровня Росатом, Сибур и Новатэк.</p>
                  <p>Существующий сайт не отражал масштаб экспертизы: типовой шаблон, серые hero-секции, отсутствие единой дизайн-системы, дублирующийся код (2800 строк на одной странице), противоречивая статистика между разделами, мёртвые маршруты и отсутствие адаптивности для мобильных устройств.</p>
                  <p>Требовалось создать с нуля корпоративный сайт, который транслирует профессионализм и масштаб консалтинговой компании, обеспечивает удобную навигацию по 40+ услугам и 22 отраслям, и при этом легко масштабируется при добавлении новых направлений.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER ═══ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Трансформация</span>
            <h2 className="heading-section" style={{ color: C.textDark }}>До и после</h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.2}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <img src="/cases/arasaka-website/before-after.jpg" alt="Сравнение дизайна до и после" width={1448} height={506} className="w-full h-auto" />
            </div>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-6 mt-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.3}>
            <div className="relative rounded-lg p-6" style={{ background: "#ffffff", border: `1px solid ${C.borderLight}` }}>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: C.textMuted }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: C.textMuted }}>До</span>
              <h3 className="text-lg font-bold mt-2 mb-3" style={{ color: C.textDark }}>Типовой шаблон</h3>
              <ul className="space-y-2">
                {["Серые hero-секции без характера", "Дублирующийся код (2800 строк на странице)", "Противоречивая статистика между страницами", "Мёртвые маршруты и сиротские директории", "Отсутствие дизайн-системы и токенов", "Неоптимизированный мобильный опыт"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: C.textMid }}><span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: C.textMuted }} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg p-6" style={{ background: "#ffffff", border: `1px solid ${C.borderLight}` }}>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: C.dna }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: C.dna }}>После</span>
              <h3 className="text-lg font-bold mt-2 mb-3" style={{ color: C.textDark }}>Кастомная дизайн-система</h3>
              <ul className="space-y-2">
                {["Тёмные hero с диагональными паттернами и glassmorphism", "Модульная архитектура (23 строки вместо 2800)", "Единый источник статистики (companyStats.ts)", "Чистая структура с 301-редиректами", "20 design-токенов (C.*) и шаблоны страниц", "Mobile-first responsive, Lighthouse 100"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: C.textMid }}><CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: C.dna }} />{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ РЕШЕНИЕ ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Подход</span>
                <h2 className="heading-section" style={{ color: C.textDark }}>Как мы решали</h2>
              </div>
              <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>6 этапов, нацеленных на измеримый результат</p>
            </div>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionSteps.map((step, index) => (
              <motion.div key={step.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={index * 0.1}>
                <div className="relative overflow-hidden rounded-lg p-6 md:p-7 h-full" style={{ background: C.muted, border: `1px solid ${C.borderLight}` }}>
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: index % 3 === 0 ? C.dna : index % 3 === 1 ? C.mintDark : C.orange }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md text-[12px] font-bold" style={{ background: index % 3 === 0 ? C.light : index % 3 === 1 ? "rgba(77,201,165,0.1)" : "rgba(224,78,57,0.1)", color: index % 3 === 0 ? C.dna : index % 3 === 1 ? C.mintDark : C.orange }}>{String(index + 1).padStart(2, "0")}</div>
                    <step.icon className="h-4 w-4" style={{ color: index % 3 === 0 ? C.dna : index % 3 === 1 ? C.mintDark : C.orange }} />
                  </div>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: C.textDark }}>{step.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.textMid }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: C.dark }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />
        <div className="container-kept relative z-10">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.mint }}>Технологии</span>
            <h2 className="heading-section" style={{ color: C.white }}>Стек и архитектура</h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={i * 0.08}>
                <div className="relative overflow-hidden rounded-lg p-6 h-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="pointer-events-none absolute left-0 top-0 h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${C.dna}, ${C.dna}50)` }} />
                  <div className="text-2xl mb-3">{tech.icon}</div>
                  <h3 className="text-[15px] font-bold mb-1" style={{ color: C.white }}>{tech.name}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.3}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <img src="/cases/arasaka-website/tech-stack.jpg" alt="Страница услуг — архитектура сервисов" width={1440} height={900} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CODE VIEW ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Архитектура</span>
                <h2 className="heading-section" style={{ color: C.textDark }}>Как устроен код</h2>
              </div>
              <p className="text-[14px] font-normal leading-relaxed max-w-sm lg:text-right" style={{ color: C.textMuted }}>Design-токены, сервисный реестр и шаблоны — ядро масштабируемой архитектуры</p>
            </div>
          </motion.div>
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
              <div className="relative rounded-xl overflow-hidden" style={{ background: "#0d1117", border: `1px solid ${C.border}` }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                  <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
                  <span className="ml-3 text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>colors.ts + servicesData.ts + ServiceSlugPageTemplate.tsx</span>
                </div>
                <pre className="p-6 text-[12px] md:text-[13px] leading-relaxed overflow-x-auto" style={{ color: "#c9d1d9", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.2} className="space-y-4">
              {[
                { icon: Palette, title: "Design Tokens", desc: "20 цветовых переменных в одном файле. Никакого хардкода hex-значений." },
                { icon: Layers, title: "Сервисный реестр", desc: "Единый источник данных об услугах — и для навигации, и для контента страниц." },
                { icon: Code2, title: "Шаблоны страниц", desc: "2 шаблона генерируют 40+ страниц из данных. Новая услуга — 5 строк в data-файле." },
                { icon: GitBranch, title: "Модульность", desc: "Homepage: 2806 → 23 строки. Данные в отдельных файлах, секции — независимые компоненты." },
              ].map((item, i) => (
                <div key={item.title} className="relative rounded-lg p-5" style={{ background: C.muted, border: `1px solid ${C.borderLight}` }}>
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: i % 2 === 0 ? C.dna : C.mintDark }} />
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md" style={{ background: i % 2 === 0 ? C.light : "rgba(77,201,165,0.1)" }}><item.icon className="h-4 w-4" style={{ color: i % 2 === 0 ? C.dna : C.mintDark }} /></div>
                    <div>
                      <h4 className="text-[14px] font-semibold mb-1" style={{ color: C.textDark }}>{item.title}</h4>
                      <p className="text-[12px] leading-relaxed" style={{ color: C.textMuted }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div className="mt-10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.3}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <img src="/cases/arasaka-website/code-review.jpg" alt="Архитектура кода — шаблоны и дизайн-система" width={1440} height={900} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESPONSIVE ═══ */}
      <section className="py-16 lg:py-24" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Адаптивность</span>
            <h2 className="heading-section" style={{ color: C.textDark }}>На всех устройствах</h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.2}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <img src="/cases/arasaka-website/responsive-devices.jpg" alt="Адаптивная вёрстка — десктоп, планшет, мобильный" width={1080} height={988} className="w-full h-auto" />
            </div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-3 gap-5 mt-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.3}>
            {[
              { label: "Mobile-first", desc: "Все 16 страниц оптимизированы для мобильных, начиная с 320px" },
              { label: "Touch-friendly", desc: "Минимум 44px для интерактивных элементов, жесты прокрутки" },
              { label: "Breakpoints", desc: "sm:640px, md:768px, lg:1024px — три уровня адаптации" },
            ].map((item) => (
              <div key={item.label} className="relative rounded-lg p-5" style={{ background: "#ffffff", border: `1px solid ${C.borderLight}` }}>
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: C.dna }} />
                <h4 className="text-[14px] font-semibold mb-1" style={{ color: C.textDark }}>{item.label}</h4>
                <p className="text-[12px] leading-relaxed" style={{ color: C.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ РЕЗУЛЬТАТ ═══ */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: "rgba(0,140,149,0.1)" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />
        <div className="container-kept relative z-10">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.mint }}>Итог</span>
            <h2 className="heading-section" style={{ color: "#ffffff" }}>Результат</h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="relative overflow-hidden rounded-lg p-8 md:p-10 mb-10" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: C.mint }} />
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "rgba(0,140,149,0.15)" }}><CheckCircle2 className="h-5 w-5" style={{ color: C.dna }} /></div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.mint }}>Достигнуто</span>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                <p>Создан с нуля корпоративный сайт консалтинговой компании Арасака — 16 полноценных страниц, 40+ подстраниц услуг, пресс-центр с 50+ публикациями, единая дизайн-система из 20 токенов и 2 универсальных шаблона.</p>
                <p>Проведён масштабный рефакторинг: удалено 7000+ строк бойлерплейта и дублирующегося кода, Homepage сокращён с 2806 до 23 строк (99.2%), 9 дублирующихся интерфейсов объединены в единый сервисный реестр, Header сокращён на 96 строк хардкода.</p>
                <p>Сайт загружается менее чем за 1.5 секунды, получает 100 баллов в Lighthouse SEO, полностью адаптивен и доступен. При добавлении новой услуги достаточно добавить 5 строк в data-файл — шаблон сгенерирует страницу автоматически.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.2}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <img src="/cases/arasaka-website/performance-metrics.jpg" alt="Страница «О компании» — метрики и результаты" width={1440} height={900} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ СТРУКТУРА САЙТА ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Карта сайта</span>
            <h2 className="heading-section" style={{ color: C.textDark }}>Структура и навигация</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Услуги", count: "40+", desc: "3 категории, 9 направлений, подстраницы", href: "/services" },
              { title: "Отрасли", count: "22", desc: "Ключевые отрасли с бейджами", href: "/industries" },
              { title: "Решения", count: "3", desc: "ЕОСДО, ЕСУИП, Мастер-планирование", href: "/solutions" },
              { title: "Пресс-центр", count: "50+", desc: "Новости, статьи, инсайты", href: "/press-center" },
              { title: "О компании", count: "1", desc: "Миссия, цифры, принципы", href: "/about" },
              { title: "Кейсы", count: "8", desc: "Реализованные проекты", href: "/cases" },
              { title: "Карьера", count: "8", desc: "Вакансии с фильтрами", href: "/career" },
              { title: "Контакты", count: "1", desc: "Офиса, форма, карта", href: "/contacts" },
            ].map((page, i) => (
              <motion.div key={page.title} variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={i * 0.06}>
                <Link href={page.href} className="group block h-full">
                  <div className="relative overflow-hidden rounded-lg p-5 h-full transition-all duration-300 group-hover:shadow-md" style={{ background: C.muted, border: `1px solid ${C.borderLight}` }}>
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: C.dna }} />
                    <div className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-russo)", color: C.dna }}>{page.count}</div>
                    <h4 className="text-[14px] font-semibold mb-1" style={{ color: C.textDark }}>{page.title}</h4>
                    <p className="text-[11px] leading-relaxed" style={{ color: C.textMuted }}>{page.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div className="mb-10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Экспертиза</span>
            <h2 className="heading-section" style={{ color: C.textDark }}>Связанные услуги</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Коммуникации и бренд", href: "/services/communications", desc: "Визуальная идентичность, позиционирование, дизайн-система" },
              { name: "Технологии", href: "/services/technologies", desc: "Веб-разработка, архитектура, оптимизация" },
              { name: "Арасака Лаб", href: "/lab", desc: "Индивидуальная разработка, CRM, дашборды" },
            ].map((service, index) => (
              <motion.div key={service.name} variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={index * 0.08}>
                <Link href={service.href} className="group block h-full">
                  <div className="relative flex flex-col gap-2 overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg border h-full" style={{ borderColor: C.borderLight, background: "#ffffff" }}>
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: C.dna }} />
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: C.light }}><Briefcase className="h-5 w-5" style={{ color: C.dna }} /></div>
                      <h3 className="text-[14px] font-semibold leading-tight transition-colors group-hover:text-[#008C95]" style={{ color: C.textDark }}>{service.name}</h3>
                    </div>
                    <p className="text-[12px] leading-relaxed" style={{ color: C.textMuted }}>{service.desc}</p>
                    <div className="flex items-center gap-1.5 text-[12px] font-medium mt-auto" style={{ color: C.dna }}>Подробнее <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUICK LINKS ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <motion.div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div>
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Навигация</span>
              <h2 className="heading-section" style={{ color: C.textDark }}>Полезные ссылки</h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании</p>
          </motion.div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            <div className="flex-1 flex">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 w-full h-full auto-rows-fr">
                {quickLinks.map((card, index) => {
                  const isWhite = card.bg === C.white;
                  return (
                    <motion.div key={card.title} className="flex" variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={index * 0.08}>
                      <Link href={card.href} className="group block h-full w-full">
                        <motion.div className={cn("relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full", isWhite && "border shadow-sm group-hover:shadow-md")} style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined, minHeight: "130px" }} whileHover={{ y: -3, transition: { duration: 0.25 } }}>
                          {card.bg === C.dark && <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.3) 75%)`, backgroundSize: "20px 20px" }} />}
                          {isWhite && <div className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`, backgroundSize: "12px 12px" }} />}
                          <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }} />
                          <div className="relative z-10">
                            <div className="flex items-center gap-2">{card.icon && <card.icon className="h-4 w-4 opacity-60" />}<span className="block text-sm font-semibold md:text-base">{card.title}</span></div>
                            <span className="mt-0.5 block text-[10px] font-normal opacity-60">{card.description}</span>
                          </div>
                          <div className="relative z-10 flex justify-end">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ background: isWhite ? "rgba(0,140,149,0.1)" : "rgba(255,255,255,0.2)" }}>
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
            <motion.div className="lg:w-[340px] flex-shrink-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0.3}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8" style={{ background: C.dark }}>
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)` }} />
                <div className="relative z-10">
                  <div className="h-px w-12 mb-5" style={{ background: C.mint }} />
                  <h3 className="text-xl font-bold leading-tight mb-2" style={{ color: "#ffffff" }}>Хотите такой же сайт?</h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Обсудим ваш проект — подготовим предложение с&nbsp;дизайн-системой, архитектурой и&nbsp;сроками.</p>
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-md" style={{ background: C.dna }}><Mail className="h-4 w-4" />Запросить КП</Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider border transition-all duration-300 rounded-md" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}><Phone className="h-4 w-4" />Обратный звонок</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
