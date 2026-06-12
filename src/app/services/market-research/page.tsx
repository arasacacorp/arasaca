"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Users,
  Target,
  BarChart2,
  Search,
  LineChart,
  PieChart,
  CheckCircle,
  BarChart3,
  Briefcase,
  ClipboardList,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   COLOUR PALETTE
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const services = [
  {
    title: "Оценка емкости и потенциала рынка",
    description:
      "Количественная оценка объёма рынка, его сегментов и потенциала роста. Определение ключевых драйверов и барьеров развития.",
  },
  {
    title: "Анализ конкурентной среды",
    description:
      "Глубокий анализ конкурентов: их стратегии, сильные и слабые стороны, рыночные доли и конкурентные преимущества.",
  },
  {
    title: "Исследование потребительского поведения",
    description:
      "Изучение потребностей, предпочтений и паттернов поведения целевой аудитории для оптимизации продуктов и маркетинговой стратегии.",
  },
  {
    title: "Сегментация и таргетирование",
    description:
      "Выделение целевых сегментов рынка, оценка их привлекательности и разработка стратегий позиционирования.",
  },
  {
    title: "Тестирование концепций и продуктов",
    description:
      "Оценка привлекательности новых продуктов и концепций до вывода на рынок, выявление точек роста и улучшений.",
  },
  {
    title: "Мониторинг цен и ассортимента",
    description:
      "Регулярный отслеживание ценовой динамики и ассортиментных матриц для принятия обоснованных решений о ценообразовании.",
  },
  {
    title: "Канальный анализ",
    description:
      "Оценка эффективности каналов сбыта и дистрибуции, выявление оптимальных путей доведения продукта до потребителя.",
  },
  {
    title: "Бенчмаркинг",
    description:
      "Сравнительный анализ бизнес-практик и показателей с лидерами отрасли для выявления лучших практик и точек роста.",
  },
];

const methodologies = [
  { icon: Users, name: "Опросы и интервью", description: "Количественные и качественные исследования" },
  { icon: Search, name: "Desk research", description: "Анализ вторичных источников и данных" },
  { icon: Target, name: "Фокус-группы", description: "Глубинное изучение мнений и отношений" },
  { icon: BarChart2, name: "Mystery shopping", description: "Оценка качества обслуживания" },
];

export default function MarketResearchPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
        {/* Diagonal lines pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: "rgba(224,78,57,0.10)" }} />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: "rgba(0,140,149,0.08)" }} />

        <div className="container-kept relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-6 md:py-10 lg:py-12">
            {/* LEFT */}
            <div className="flex-1">
              {/* Breadcrumbs */}
              <motion.nav className="flex items-center gap-2 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Главная</Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <Link href="/services" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Услуги</Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <Link href="/services/research" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Аналитика и исследования</Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Рыночная аналитика</span>
              </motion.nav>

              {/* Badge */}
              <motion.div className="mb-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider" style={{ background: "rgba(0,140,149,0.15)", color: C.mint, borderRadius: "2px" }}>
                  <TrendingUp className="w-3 h-3" />
                  Рыночная аналитика
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 className="mb-4 max-w-lg" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em", color: C.white, fontFamily: "var(--font-russo)" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                Рыночная аналитика и конкурентные исследования
              </motion.h1>

              {/* Subtitle */}
              <motion.p className="mb-6 max-w-md text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                Оценка емкости и потенциала рынков, выявление тенденций,
                конкурентных преимуществ и слабых мест. Стратегические выводы на
                основе рыночной информации для принятия обоснованных решений.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
                <Link href="/feedback?type=proposals" className="sm:auto">
                  <motion.span className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white w-full sm:w-auto" style={{ background: C.dna, borderRadius: "4px" }} whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}>
                    Запросить КП
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <Link href="/feedback?type=callback" className="sm:auto">
                  <motion.span className="inline-flex items-center justify-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em] w-full sm:w-auto" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }} whileHover={{ borderColor: C.mint, color: C.mint, transition: { duration: 0.3 } }}>
                    Заказать звонок
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — Stats grid */}
            <motion.div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
              {[
                { number: "10+", label: "услуг", icon: ClipboardList, accent: C.mintDark },
                { number: "30+", label: "отраслей", icon: BarChart3, accent: C.orange },
                { number: "50+", label: "экспертов", icon: Users, accent: C.dna },
                { number: "500+", label: "проектов", icon: Briefcase, accent: C.mintDark },
              ].map((stat, index) => (
                <motion.div key={stat.label} className="relative overflow-hidden rounded-lg p-5 md:p-6" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }} variants={scaleIn} initial="hidden" animate="visible" custom={0.4 + index * 0.08}>
                  <div className="absolute left-0 top-0 h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}50)` }} />
                  <stat.icon className="mb-3 h-5 w-5" style={{ color: stat.accent }} />
                  <div className="text-2xl font-bold leading-none md:text-3xl" style={{ fontFamily: "var(--font-russo)", color: C.white }}>{stat.number}</div>
                  <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Наши услуги
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 lg:p-8 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#008C95]/10 flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-[#008C95]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Методология
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Мы применяем комплексный подход, используя различные методы сбора и
              анализа данных для получения достоверных результатов.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-200"
                >
                  <method.icon className="w-8 h-8 text-[#008C95] mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Смежные услуги
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/services/economic-research"
                className="p-6 bg-gray-50 border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#008C95] transition-colors">
                      Экономические и отраслевые исследования
                    </h3>
                    <p className="text-sm text-gray-500">
                      Глубокий анализ отраслей и макроэкономических факторов
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              <Link
                href="/services/data-analytics"
                className="p-6 bg-gray-50 border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#008C95] transition-colors">
                      Аналитика данных и моделирование
                    </h3>
                    <p className="text-sm text-gray-500">
                      BI-решения, визуализация и предиктивная аналитика
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#008C95] relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Нужны рыночные исследования?
              </h2>
              <p className="text-white/70 max-w-xl">
                Свяжитесь с нами для обсуждения вашего проекта и получения
                коммерческого предложения.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/feedback?type=proposals"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#008C95] font-medium hover:bg-white/90 transition-colors group"
              >
                Запросить КП
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Написать нам
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>
      </section>

    </main>
  );
}
