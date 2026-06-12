"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  ChevronRight,
  Shield,
  Scale,
  Lock,
  Mail,
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

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark background with diagonal lines + stats grid
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
          style={{ background: "rgba(0,140,149,0.10)" }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(224,78,57,0.08)" }}
        />

        <div className="container-kept relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
            {/* LEFT: Breadcrumb + badge + heading + subtitle + CTA */}
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Условия использования</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(0,140,149,0.15)",
                    color: C.mint,
                    borderRadius: "2px",
                  }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                  Правовая информация
                </span>
              </motion.div>

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
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Условия использования
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Правила пользования сайтом и&nbsp;сервисами компании Арасака. Пожалуйста, ознакомьтесь с&nbsp;условиями перед использованием.
              </motion.p>

              {/* CTA button */}
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link href="/contacts">
                  <motion.span
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
                    style={{ background: C.dna, borderRadius: "4px" }}
                    whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                  >
                    Связаться с нами
                    <ArrowRight className="h-4 w-4" />
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
                { number: "9", label: "разделов", icon: FileText, accent: C.dna },
                { number: "ГК РФ", label: "регулирование", icon: Scale, accent: C.mintDark },
                { number: "SSL", label: "шифрование", icon: Lock, accent: C.orange },
                { number: "24ч", label: "ответ на запрос", icon: Mail, accent: C.dna },
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

      {/* Content */}
      <section className="py-16 md:py-20" style={{ background: C.white }}>
        <div className="container-kept max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-none"
            style={{ color: C.textDark }}
          >
            <p className="text-[13px] mb-8" style={{ color: C.textMuted }}>
              Дата последнего обновления: 12 июня 2026 г.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              1. Общие положения
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              1.1. Настоящие Условия использования (далее — «Условия») регулируют отношения между ООО «Арасака» (далее — «Компания») и пользователем веб-сайта, расположенного по адресу{" "}
              <a href="https://arasaca.ru" style={{ color: C.dna }} className="hover:underline">arasaca.ru</a>{" "}
              (далее — «Пользователь», «Сайт»).
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              1.2. Используя Сайт, Пользователь подтверждает, что ознакомился с настоящими Условиями и принимает их в полном объёме.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              1.3. Компания вправе в одностороннем порядке изменять настоящие Условия. Продолжение использования Сайта после внесения изменений означает согласие Пользователя с новой редакцией.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              2. Интеллектуальная собственность
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              2.1. Все материалы, размещённые на Сайте (тексты, изображения, графика, дизайн, программный код, товарные знаки и иные объекты интеллектуальной собственности), являются исключительной собственностью Компании или используются на законных основаниях.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              2.2. Копирование, воспроизведение, распространение, переработка или иное использование материалов Сайта допускается только с предварительного письменного согласия Компании.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              3. Использование Сайта
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              3.1. Пользователь обязуется использовать Сайт в целях, не противоречащих законодательству Российской Федерации и настоящим Условиям.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              3.2. Пользователю запрещается:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Использовать Сайт для передачи материалов, нарушающих законодательство;</li>
              <li>Пытаться получить несанкционированный доступ к системам и ресурсам Сайта;</li>
              <li>Использовать автоматизированные средства для сбора данных с Сайта (скрейпинг) без согласия Компании;</li>
              <li>Распространять вредоносное программное обеспечение через Сайт.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              4. Предоставление информации
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              4.1. Информация, размещённая на Сайте, носит ознакомительный характер и не является публичной офертой, определяемой положениями статьи 437 Гражданского кодекса Российской Федерации.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              4.2. Компания прилагает разумные усилия для обеспечения достоверности и актуальности информации на Сайте, однако не гарантирует отсутствие ошибок или неточностей.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              5. Ограничение ответственности
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              5.1. Компания не несёт ответственности за:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Перебои в работе Сайта, вызванные техническими причинами;</li>
              <li>Убытки, возникшие в результате использования или невозможности использования Сайта;</li>
              <li>Действия третьих лиц, включая контент и ресурсы, на которые ведут ссылки с Сайта;</li>
              <li>Несовпадение ожиданий Пользователя относительно содержания Сайта.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              6. Ссылки на сторонние ресурсы
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              6.1. Сайт может содержать гиперссылки на сайты третьих лиц. Компания не контролирует и не несёт ответственности за содержание таких сайтов.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              7. Конфиденциальность
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              7.1. Обработка персональных данных Пользователей осуществляется в соответствии с{" "}
              <Link href="/privacy" style={{ color: C.dna }} className="hover:underline">Политикой конфиденциальности</Link>.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              8. Применимое право
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              8.1. Настоящие Условия регулируются и толкуются в соответствии с законодательством Российской Федерации. Все споры, возникающие в связи с использованием Сайта, разрешаются путём переговоров, а при недостижении согласия — в судебном порядке по месту нахождения Компании.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              9. Контактная информация
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              9.1. По вопросам, связанным с настоящими Условиями, Пользователь может обратиться к Компании:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Электронная почта: <a href="mailto:info@arasaca.ru" style={{ color: C.dna }} className="hover:underline">info@arasaca.ru</a></li>
              <li>Телефон: +7 (___) ___-__-__</li>
              <li>Адрес: ____________</li>
            </ul>

            {/* Quick links */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/privacy"
                className="group flex items-center gap-4 p-6 rounded-lg transition-colors"
                style={{ background: C.light }}
              >
                <Shield className="h-8 w-8 flex-shrink-0" style={{ color: C.dna }} />
                <div>
                  <p className="font-semibold text-[14px]" style={{ color: C.textDark }}>Политика конфиденциальности</p>
                  <p className="text-[12px] mt-1" style={{ color: C.textMuted }}>Защита персональных данных</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: C.dna }} />
              </Link>
              <Link
                href="/contacts"
                className="group flex items-center gap-4 p-6 rounded-lg transition-colors"
                style={{ background: C.light }}
              >
                <Mail className="h-8 w-8 flex-shrink-0" style={{ color: C.dna }} />
                <div>
                  <p className="font-semibold text-[14px]" style={{ color: C.textDark }}>Контакты</p>
                  <p className="text-[12px] mt-1" style={{ color: C.textMuted }}>Свяжитесь с нами</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: C.dna }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
