"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  ChevronRight,
  Lock,
  FileText,
  Scale,
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

export default function PrivacyPage() {
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
          style={{ background: "rgba(224,78,57,0.10)" }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,140,149,0.08)" }}
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
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>Политика конфиденциальности</span>
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
                Политика конфиденциальности
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Как мы собираем, используем и&nbsp;защищаем ваши персональные данные. Настоящая политика определяет порядок обработки информации на&nbsp;сайте компании.
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
                { number: "10", label: "разделов", icon: FileText, accent: C.dna },
                { number: "ФЗ-152", label: "соответствие", icon: Scale, accent: C.mintDark },
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
              1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных физических лиц (далее — «Пользователи»), которые используют веб-сайт ООО «Арасака», расположенный по адресу{" "}
              <a href="https://arasaca.ru" style={{ color: C.dna }} className="hover:underline">arasaca.ru</a>{" "}
              (далее — «Сайт»).
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              1.2. Оператор персональных данных — ООО «Арасака» (далее — «Компания», «Оператор»), ОГРН ____________, ИНН ____________, расположенное по адресу: ____________.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              1.3. Используя Сайт, Пользователь подтверждает своё согласие с условиями настоящей Политики. В случае несогласия с условиями Политики Пользователь должен прекратить использование Сайта.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              1.4. Компания вправе вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              2. Сбор персональных данных
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              2.1. Компания собирает следующие категории персональных данных Пользователей:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Фамилия, имя, отчество;</li>
              <li>Адрес электронной почты;</li>
              <li>Номер телефона;</li>
              <li>Наименование организации и должность;</li>
              <li>Сведения, предоставленные Пользователем при заполнении форм обратной связи и иных форм на Сайте.</li>
            </ul>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              2.2. Сбор персональных данных осуществляется путём их добровольного предоставления Пользователем при заполнении форм на Сайте, а также автоматически с использованием файлов cookie и аналогичных технологий.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              3. Цели обработки персональных данных
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              3.1. Обработка персональных данных Пользователей осуществляется в следующих целях:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Обработка запросов и обращений, поступающих через формы обратной связи;</li>
              <li>Предоставление консультационных и информационных услуг;</li>
              <li>Направление информационных и маркетинговых материалов (при наличии согласия);</li>
              <li>Улучшение качества Сайта и сервисов;</li>
              <li>Исполнение требований законодательства Российской Федерации.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              4. Правовые основания обработки
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              4.1. Обработка персональных данных осуществляется на основании согласия Пользователя, выраженного им при заполнении форм на Сайте, а также на основании договорных отношений и требований законодательства.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              5. Защита персональных данных
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              5.1. Компания принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий третьих лиц.
            </p>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              5.2. Доступ к персональным данным имеют только уполномоченные сотрудники Компании, имеющие соответствующие полномочия.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              6. Передача данных третьим лицам
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              6.1. Компания не передаёт персональные данные Пользователей третьим лицам без их согласия, за исключением случаев, предусмотренных законодательством Российской Федерации, а также при привлечении обработчиков, действующих на основании договоров с Компанией.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              7. Хранение данных
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              7.1. Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, но не более срока, установленного законодательством. По истечении указанного срока данные уничтожаются или обезличиваются.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              8. Права Пользователя
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              8.1. Пользователь вправе:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Запрашивать сведения об обработке своих персональных данных;</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных при отсутствии законных оснований для их обработки;</li>
              <li>Отзывать своё согласие на обработку персональных данных путём направления письменного заявления на адрес электронной почты Компании;</li>
              <li>Обжаловать действия или бездействие Компании в уполномоченный орган по защите прав субъектов персональных данных.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              9. Использование файлов cookie
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              9.1. Сайт использует файлы cookie для улучшения пользовательского опыта, анализа трафика и персонализации контента. Пользователь может отключить cookie в настройках браузера, однако это может ограничить функциональность Сайта.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: C.textDark }}>
              10. Контактная информация
            </h2>
            <p className="mb-4 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              10.1. По всем вопросам, связанным с обработкой персональных данных, Пользователь может обратиться к Компании:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-[14px] font-light leading-relaxed" style={{ color: C.textMid }}>
              <li>Электронная почта: <a href="mailto:info@arasaca.ru" style={{ color: C.dna }} className="hover:underline">info@arasaca.ru</a></li>
              <li>Телефон: +7 (___) ___-__-__</li>
              <li>Адрес: ____________</li>
            </ul>

            {/* Quick links */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/terms"
                className="group flex items-center gap-4 p-6 rounded-lg transition-colors"
                style={{ background: C.light }}
              >
                <FileText className="h-8 w-8 flex-shrink-0" style={{ color: C.dna }} />
                <div>
                  <p className="font-semibold text-[14px]" style={{ color: C.textDark }}>Условия использования</p>
                  <p className="text-[12px] mt-1" style={{ color: C.textMuted }}>Правила пользования сайтом</p>
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
