"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Home,
  Briefcase,
  Layers,
  Users,
  Mail,
  ChevronRight,
  Search,
  Compass,
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
  textMuted: "#6b7280",
  border: "#e5e7eb",
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

/* ─── Quick navigation cards ─── */
const navCards = [
  {
    title: "Главная",
    description: "Вернуться на главную",
    icon: Home,
    href: "/",
    accent: C.dna,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    icon: Briefcase,
    href: "/services",
    accent: C.mintDark,
  },
  {
    title: "Решения",
    description: "Цифровые продукты и платформы",
    icon: Layers,
    href: "/solutions",
    accent: C.orange,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    icon: Users,
    href: "/career",
    accent: C.dna,
  },
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    icon: Compass,
    href: "/about",
    accent: C.mintDark,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    icon: Mail,
    href: "/contacts",
    accent: C.orange,
  },
];

/* ═══════════════════════════════════════════════════════
   404 PAGE
   ═══════════════════════════════════════════════════════ */
export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.dark }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Full-screen dark background
          ═══════════════════════════════════════════════════ */}
      <section className="relative flex-1 flex flex-col justify-center overflow-hidden">
        {/* Decorative diagonal lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
          }}
        />
        {/* Decorative glow — right */}
        <div
          className="pointer-events-none absolute -right-40 -top-20 h-[600px] w-[600px] rounded-full blur-[200px]"
          style={{ background: "rgba(0,140,149,0.12)" }}
        />
        {/* Decorative glow — left */}
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full blur-[150px]"
          style={{ background: "rgba(119,226,195,0.06)" }}
        />
        {/* Orange glow — subtle center */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full blur-[160px]"
          style={{ background: "rgba(224,78,57,0.06)" }}
        />

        <div className="container-kept relative z-10 py-20 md:py-28 lg:py-32">
          <div className="flex flex-col items-center text-center">
            {/* 404 Number — Large animated */}
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Glow behind number */}
              <div
                className="pointer-events-none absolute inset-0 -m-8 rounded-full blur-[60px] opacity-20"
                style={{ background: C.mint }}
              />
              <h1
                className="relative leading-none select-none"
                style={{
                  fontFamily: "var(--font-russo)",
                  fontSize: "clamp(8rem, 20vw, 14rem)",
                  fontWeight: 700,
                  color: C.white,
                  letterSpacing: "-0.02em",
                }}
              >
                4
                <span style={{ color: C.mint }}>0</span>
                4
              </h1>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="mb-6 flex items-center gap-3"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-px w-12" style={{ background: `linear-gradient(90deg, transparent, ${C.mint})` }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${C.mint}, transparent)` }} />
            </motion.div>

            {/* Badge */}
            <motion.span
              className="mb-5 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(224,78,57,0.4)", color: C.orange }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.orange }} />
              Страница не найдена
            </motion.span>

            {/* Title */}
            <motion.h2
              className="mb-4 max-w-xl"
              style={{
                fontFamily: "var(--font-russo)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: C.white,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Кажется, мы потерялись
              <br />
              <span style={{ color: C.mint }}>в пространстве</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mb-8 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Страница, которую вы ищете, возможно, была удалена, перемещена или никогда не существовала. Но мы поможем вам найти нужный путь.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mb-16"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                  style={{ background: C.dna, borderRadius: "4px" }}
                  whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                >
                  <Home className="h-4 w-4" />
                  На главную
                </motion.span>
              </Link>
              <Link href="/contacts">
                <motion.span
                  className="inline-flex items-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                  whileHover={{
                    borderColor: C.mint,
                    color: C.mint,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Mail className="h-4 w-4" />
                  Написать нам
                </motion.span>
              </Link>
            </motion.div>

            {/* ═══════════════════════════════════════════
                NAVIGATION GRID — Quick links
                ═══════════════════════════════════════════ */}
            <motion.div
              className="w-full"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
            >
              <div className="mb-8 flex items-center justify-center gap-3">
                <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.1)" }} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Навигация
                </span>
                <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.1)" }} />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 max-w-2xl mx-auto">
                {navCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    custom={0.9 + index * 0.06}
                  >
                    <Link href={card.href} className="group block h-full">
                      <motion.div
                        className="relative flex flex-col items-center text-center rounded-lg p-5 md:p-6 transition-all duration-300 h-full"
                        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(4px)" }}
                        whileHover={{ y: -3, background: "rgba(255,255,255,0.08)", transition: { duration: 0.25 } }}
                      >
                        {/* Top accent line */}
                        <div
                          className="absolute left-0 top-0 h-0.5 w-full"
                          style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                        />
                        {/* Dot */}
                        <div
                          className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                          style={{ background: card.accent }}
                        />

                        <div
                          className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                          style={{ background: `${card.accent}18` }}
                        >
                          <card.icon className="h-5 w-5" style={{ color: card.accent }} />
                        </div>
                        <h3
                          className="text-[13px] font-semibold mb-1 transition-colors duration-300"
                          style={{ color: C.white }}
                        >
                          {card.title}
                        </h3>
                        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {card.description}
                        </p>

                        {/* Arrow */}
                        <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ background: "rgba(255,255,255,0.08)" }}
                        >
                          <ArrowRight className="h-3 w-3" style={{ color: "rgba(255,255,255,0.4)" }} />
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom hint */}
            <motion.p
              className="mt-10 text-[12px]"
              style={{ color: "rgba(255,255,255,0.25)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Или попробуйте воспользоваться поиском на главной странице
            </motion.p>
          </div>
        </div>

        {/* Bottom decorative SVG corner brackets */}
        <svg
          className="pointer-events-none absolute bottom-6 right-6 opacity-[0.06]"
          width="60" height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path d="M60 0v20h-3V3H40V0h20z" fill="white" />
          <path d="M0 60V40h3v17h17v3H0z" fill="white" />
        </svg>
        <svg
          className="pointer-events-none absolute left-6 top-6 opacity-[0.06]"
          width="40" height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path d="M0 0h20v3H3v17H0V0z" fill="white" />
          <path d="M40 40H20v-3h17V20h3v20z" fill="white" />
        </svg>
      </section>
    </main>
  );
}
