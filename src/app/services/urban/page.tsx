"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  ChevronRight,
  Map,
  Building2,
  Leaf,
  TrendingUp,
  Briefcase,
  Users,
  BarChart3,
  ClipboardList,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const serviceGroups = [
  {
    id: "master-planning",
    icon: Map,
    title: "Мастер-планирование и стратегии",
    description:
      "Мастер-планы, градостроительная документация и сценарное моделирование развития территорий.",
    href: "/services/urban/master-planning",
    services: [
      "Мастер-планы и градостроительная документация",
      "Сценарное моделирование",
      "Стратегии развития территорий",
      "Территории опережающего развития",
    ],
  },
  {
    id: "territory-economics",
    icon: TrendingUp,
    title: "Экономика территорий",
    description:
      "Экономическое обоснование, инвестиционные модели и механизмы реализации проектов развития.",
    href: "/services/urban/territory-economics",
    services: [
      "Экономическое обоснование проектов",
      "Инвестиционные модели",
      "Механизмы реализации",
      "Сопровождение проектов",
    ],
  },
  {
    id: "infrastructure",
    icon: Building2,
    title: "Инфраструктура и устойчивое развитие",
    description:
      "Инфраструктурные проекты, транспорт, городская среда и устойчивое развитие городов и регионов.",
    href: "/services/urban/infrastructure",
    services: [
      "Инфраструктура и транспорт",
      "Городская среда",
      "Устойчивое развитие",
      "Развитие городов и регионов",
    ],
  },
];

const approach = [
  { icon: Map, title: "Урбанистика", description: "Сценарии и мастер-планы" },
  { icon: Building2, title: "Территории", description: "Экономика и механизмы реализации" },
  { icon: Leaf, title: "Развитие", description: "Инфраструктура и устойчивость" },
];

export default function UrbanPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Развитие территорий и урбанистика</span>
              </motion.nav>

              {/* Badge */}
              <motion.div className="mb-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider" style={{ background: "rgba(0,140,149,0.15)", color: C.mint, borderRadius: "2px" }}>
                  <MapPin className="w-3 h-3" />
                  Дополнительное направление
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 className="mb-4 max-w-lg" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em", color: C.white, fontFamily: "var(--font-russo)" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                Развитие территорий и урбанистика
              </motion.h1>

              {/* Subtitle */}
              <motion.p className="mb-6 max-w-md text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                Сценарии, экономика, механизмы реализации и сопровождение — для городов, регионов и территорий опережающего развития.
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
                { number: "3", label: "практики", icon: ClipboardList, accent: C.mintDark },
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Комплексные решения для городов, регионов и территорий опережающего развития.
            </p>
            <div className="grid md:grid-cols-3 gap-0 border border-gray-200 bg-gray-200">
              {serviceGroups.map((group, index) => (
                <motion.div key={group.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-white">
                  <div className="p-8 border-r border-b border-gray-200 last:border-r-0 lg:last:border-b-0 h-full">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#e8f5f3] mb-6">
                      <group.icon className="w-7 h-7 text-[#008C95]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">{group.description}</p>
                    <ul className="space-y-2 mb-8">
                      {group.services.slice(0, 4).map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#008C95] rounded-full mt-2 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link href={group.href} className="inline-flex items-center gap-2 text-[#008C95] font-medium group">
                      Подробнее
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Наш подход</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#e8f5f3] mb-4 rounded-xl">
                    <item.icon className="w-8 h-8 text-[#008C95]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#008C95] relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Проект развития территории?</h2>
              <p className="text-white/70 max-w-xl">Поможем со сценариями, экономикой и сопровождением.</p>
            </div>
            <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors shrink-0">
              Запросить консультацию
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>
      </section>
    </main>
  );
}
