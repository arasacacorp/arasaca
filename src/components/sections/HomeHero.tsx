"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";
import { fadeUp, scaleIn, slideInRight, vp } from "@/lib/animations";
import { SectionLabel, resolveIcon } from "@/components/sections/HomeShared";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { newsItems, heroStats } from "@/data/homepage";

export default function HomeHero() {
  return (
    <section className="relative pt-16 lg:pt-[120px]" style={{ background: C.muted }}>
      <div className="container-kept py-5">
        {/* Hero + Stats + News — two-column layout */}
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
          {/* LEFT COLUMN — Hero Banner + Stats */}
          <div className="flex-1 lg:max-w-[calc(75%-10px)]">
            {/* Hero Banner */}
            <motion.div
              className="relative overflow-hidden rounded-lg"
              style={{ minHeight: "480px" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {/* AI-generated bubbles background image */}
              <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bubbles.png')" }}
              />
              {/* Dark overlay — left side darker for text readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(105deg, rgba(0,31,44,0.88) 0%, rgba(0,49,60,0.6) 30%, rgba(0,31,44,0.2) 70%, rgba(0,49,60,0.1) 100%)`,
                }}
              />

              {/* Diagonal accent line */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(165deg, transparent 0%, transparent 48%, rgba(119,226,195,0.08) 48.5%, rgba(119,226,195,0.04) 49%, transparent 49.5%, transparent 100%)`,
                }}
              />

              {/* Corner brackets decoration */}
              <svg
                className="pointer-events-none absolute bottom-6 right-6 opacity-20"
                width="80" height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path d="M80 0v30h-4V4H50V0h30z" fill={C.mint} />
                <path d="M0 80V50h4v26h26v4H0z" fill={C.mint} />
              </svg>

              {/* Hero Text Content */}
              <div className="relative z-10 flex min-h-[480px] flex-col justify-center px-8 py-14 md:px-12 lg:px-16">
                {/* Label */}
                <motion.div
                  className="mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.1}
                >
                  <span
                    className="inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
                    style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                    Арасака
                  </span>
                </motion.div>

                {/* Main tagline */}
                <motion.h1
                  className="mb-5 max-w-lg leading-[1.08] tracking-tight"
                  style={{
                    fontFamily: "var(--font-russo)",
                    fontSize: "clamp(2rem, 4.8vw, 3.4rem)",
                    color: C.white,
                  }}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                >
                  Структурируем сложное,
                  <br />
                  <span style={{ color: C.mint }}>реализуем важное</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="mb-8 max-w-md text-[15px] font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.35}
                >
                  Повышение эффективности управления, цифровая трансформация и&nbsp;управление инвестиционными программами. Надёжный партнёр для&nbsp;тех, кто делает ставку на&nbsp;устойчивый рост.
                </motion.p>

                {/* CTA */}
                <motion.div
                  className="flex flex-wrap items-center gap-3"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <Link href="/services">
                    <motion.span
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                      style={{ background: C.dna, borderRadius: "4px" }}
                      whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                    >
                      Наши услуги
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                  <Link href="/about">
                    <motion.span
                      className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                      style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                      whileHover={{
                        borderColor: C.mint,
                        color: C.mint,
                        transition: { duration: 0.3 },
                      }}
                    >
                      О компании
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats cards — directly under hero banner */}
            <motion.div
              className="mt-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {heroStats.map((stat, index) => {
                  const Icon = resolveIcon(stat.icon);
                  return (
                    <motion.div
                      key={stat.label}
                      className="group relative overflow-hidden rounded-lg bg-white p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
                      variants={scaleIn}
                      initial="hidden"
                      animate="visible"
                      custom={0.4 + index * 0.08}
                    >
                      {/* Accent top stripe */}
                      <div
                        className="absolute left-0 top-0 h-1 w-full"
                        style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}80)` }}
                      />

                      {/* Icon */}
                      <div
                        className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                        style={{ background: `${stat.accent}12` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: stat.accent }} />
                      </div>

                      {/* Number */}
                      <div
                        className="text-3xl font-bold leading-none md:text-4xl"
                        style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                      >
                        {stat.number}
                        <span className="text-lg font-normal" style={{ color: stat.accent }}>{stat.suffix}</span>
                      </div>

                      {/* Label */}
                      <div
                        className="mt-2 text-[12px] font-medium leading-tight"
                        style={{ color: C.textMuted }}
                      >
                        {stat.label}
                      </div>

                      {/* Subtle decorative element */}
                      <div
                        className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-full opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1]"
                        style={{ background: stat.accent }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — News Sidebar (ends at same height as stats) */}
          <motion.div
            className="w-full lg:w-[330px] lg:flex-shrink-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white">
              {/* Header with accent */}
              <div className="px-5 pt-5 pb-4 md:px-6 md:pt-6 md:pb-5" style={{ borderBottom: `2px solid ${C.dna}` }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold" style={{ color: C.textDark }}>Новости</h3>
                  <div className="flex h-7 w-7 items-center justify-center rounded" style={{ background: C.light }}>
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke={C.dna} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* News items */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex flex-1 flex-col gap-5">
                  {newsItems.map((news, index) => (
                    <motion.div
                      key={index}
                      variants={slideInRight}
                      initial="hidden"
                      animate="visible"
                      custom={0.5 + index * 0.12}
                    >
                      <Link href={news.href} className="group block">
                        <span
                          className="mb-2 inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                          style={{ background: `${news.categoryColor}15`, color: news.categoryColor, borderRadius: "2px" }}
                        >
                          {news.category}
                        </span>
                        <h4
                          className="text-[13px] font-semibold leading-snug transition-colors group-hover:text-[#008C95]"
                          style={{ color: C.textDark }}
                        >
                          {news.title}
                        </h4>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-[11px]" style={{ color: C.textMuted }}>{news.date}</span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ color: C.textMuted }}
                          />
                        </div>
                        {index < newsItems.length - 1 && (
                          <div className="mt-5 h-px" style={{ background: C.borderLight }} />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/press-center"
                    className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: C.dna }}
                  >
                    Все новости
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
