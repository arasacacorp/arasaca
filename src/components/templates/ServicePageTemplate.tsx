"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { C } from "@/lib/colors";
import { fadeUp, fadeIn, scaleIn, vp } from "@/lib/animations";
import { quickLinks } from "@/data/quickLinks";
import { Icon } from "@/lib/iconRegistry";
import type { SubDirection } from "@/data/types";

/* ─── Config types ─── */

export interface ServicePageConfig {
  /** Массив поднаправлений */
  subDirections: SubDirection[];
  /** Fallback-иконка (string ID) для карточек направлений */
  fallbackIcon?: string;

  /** Hero-секция */
  hero: {
    breadcrumb: string;
    badgeText: string;
    title: string;
    subtitle: string;
    stats: {
      number: string;
      label: string;
      icon: string;
      accent: string;
    }[];
  };

  /** Секция «Направления» */
  directions: {
    title: string;
    subtitle: string;
    /** Slug карточки, которую нужно выделить оранжевым (опционально) */
    highlightSlug?: string;
    /** Текст badge для выделенной карточки (опционально) */
    highlightBadge?: string;
    /** Индексы карточек, которые должны быть шире (span 2 cols) */
    wideIndices?: number[];
    /** URL-префикс для ссылок (напр. "/services/consulting") */
    basePath: string;
  };

  /** Секция «Наш подход» */
  approach: {
    subtitle: string;
    steps: {
      icon: string;
      title: string;
      description: string;
      step: string;
    }[];
  };
}

/* ─── Template component ─── */

export default function ServicePageTemplate(config: ServicePageConfig) {
  const { subDirections, fallbackIcon, hero, directions, approach } = config;

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />
        <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: "rgba(224,78,57,0.10)" }} />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: "rgba(0,140,149,0.08)" }} />

        <div className="container-kept relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
            <motion.div className="flex-1" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
              <motion.nav
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Главная</Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <Link href="/services" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Услуги</Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>{hero.breadcrumb}</span>
              </motion.nav>

              <motion.div className="mb-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider" style={{ background: "rgba(0,140,149,0.15)", color: C.mint, borderRadius: "2px" }}>
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                  {hero.badgeText}
                </span>
              </motion.div>

              <motion.h1
                className="mb-4 max-w-lg"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em", color: C.white, fontFamily: "var(--font-russo)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {hero.title}
              </motion.h1>

              <motion.p className="mb-6 max-w-md text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                {hero.subtitle}
              </motion.p>

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
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
              {hero.stats.map((stat, index) => {
                return (
                  <motion.div key={stat.label} className="relative overflow-hidden rounded-lg p-5 md:p-6" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }} variants={scaleIn} initial="hidden" animate="visible" custom={0.4 + index * 0.08}>
                    <div className="absolute left-0 top-0 h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}50)` }} />
                    <Icon name={stat.icon} fallback="Search" className="mb-3 h-5 w-5" style={{ color: stat.accent }} />
                    <div className="text-2xl font-bold leading-none md:text-3xl" style={{ fontFamily: "var(--font-russo)", color: C.white }}>{stat.number}</div>
                    <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DIRECTIONS
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
        <div className="container-kept">
          <motion.div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div>
              <motion.span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={vp}>Направления</motion.span>
              <h2 className="heading-section" style={{ color: C.textDark }}>{directions.title}</h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }} dangerouslySetInnerHTML={{ __html: directions.subtitle.replace(/\n/g, "<br />") }} />
          </motion.div>

          <div className={cn("grid gap-3 md:gap-4", subDirections.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3")}>
            {subDirections.map((direction, index) => {
              // icon resolved via <Icon> component below
              const isHighlight = directions.highlightSlug != null && direction.slug === directions.highlightSlug;
              const isWide = directions.wideIndices?.includes(index) ?? false;

              return (
                <motion.div key={direction.id} className={cn("flex", isWide && "sm:col-span-2 lg:col-span-2")} variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={index * 0.08}>
                  <Link href={`${directions.basePath}/${direction.slug}`} className="group block h-full w-full">
                    <motion.div
                      className={cn("relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-all duration-300 h-full", isHighlight ? "group-hover:shadow-lg" : "border shadow-sm group-hover:shadow-md")}
                      style={{ background: isHighlight ? C.orange : C.white, color: isHighlight ? "#ffffff" : C.textDark, borderColor: isHighlight ? undefined : C.border, minHeight: "180px" }}
                      whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    >
                      {isHighlight && <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.3) 75%)`, backgroundSize: "20px 20px" }} />}
                      {!isHighlight && <div className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`, backgroundSize: "12px 12px" }} />}
                      <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: isHighlight ? "rgba(255,255,255,0.4)" : C.dna }} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={direction.icon} fallback={fallbackIcon} className="h-4 w-4 opacity-60" />
                          <span className="block text-sm font-semibold md:text-base">{direction.title}</span>
                        </div>
                        {isHighlight && directions.highlightBadge && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mt-1" style={{ background: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.95)", borderRadius: "2px" }}>
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                            {directions.highlightBadge}
                          </span>
                        )}
                        <span className="mt-1.5 block text-[10px] md:text-[11px] font-normal leading-relaxed opacity-60">{direction.description}</span>
                      </div>

                      <div className="relative z-10 flex justify-end mt-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ background: isHighlight ? "rgba(255,255,255,0.2)" : "rgba(0,140,149,0.1)" }}>
                          <ArrowRight className="h-4 w-4" style={{ color: isHighlight ? "#ffffff" : C.dna }} />
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
          OUR APPROACH
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.dark }}>
        <div className="container-kept">
          <motion.div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div>
              <motion.span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.mint }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={vp}>Методология</motion.span>
              <h2 className="heading-section" style={{ color: C.white }}>Наш подход</h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-sm lg:text-right" style={{ color: "rgba(255,255,255,0.5)" }}>{approach.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {approach.steps.map((item, index) => {
              // icon resolved via <Icon> component below
              return (
                <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={index * 0.12}>
                  <div className="relative overflow-hidden rounded-lg p-6 md:p-8 h-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg mb-5" style={{ background: "rgba(0,140,149,0.15)" }}>
                        <Icon name={item.icon} fallback="Search" className="h-6 w-6" style={{ color: C.dna }} />
                      </div>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: C.mint }}>Шаг {item.step}</span>
                      <h3 className="text-lg font-bold mb-2" style={{ color: C.white }}>{item.title}</h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK LINKS
          ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-kept">
          <motion.div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div>
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Навигация</span>
              <h2 className="heading-section" style={{ color: C.textDark }}>Полезные ссылки</h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании</p>
          </motion.div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                {quickLinks.map((card, index) => {
                  const isWhite = card.bg === C.white;
                  return (
                    <motion.div key={card.title} className="flex" variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp} custom={index * 0.08}>
                      <Link href={card.href} className="group block h-full w-full">
                        <motion.div
                          className={cn("relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full", isWhite && "border shadow-sm group-hover:shadow-md")}
                          style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined, minHeight: "130px" }}
                          whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        >
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
                  <h3 className="text-xl font-bold leading-tight mb-2" style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}>Начните сотрудничество</h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.</p>
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: C.dna }}><Mail className="h-4 w-4" />Запросить КП</Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider border transition-all duration-300" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}><Phone className="h-4 w-4" />Обратный звонок</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
