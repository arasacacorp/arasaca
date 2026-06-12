"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { C } from "@/lib/colors";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ background: C.white }}>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: C.dark }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: C.mint }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ background: `${C.dna}20`, color: C.mint }}
            >
              <FileText className="w-4 h-4" />
              Правовая информация
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: C.white }}
            >
              Условия использования
            </h1>
            <p className="text-lg" style={{ color: `${C.white}99` }}>
              Правила пользования сайтом и сервисами компании Арасака
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="prose prose-lg max-w-none"
            style={{ color: C.textDark }}
          >
            <p className="text-sm mb-8" style={{ color: C.textMuted }}>
              Дата последнего обновления: 12 июня 2026 г.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              1. Общие положения
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              1.1. Настоящие Условия использования (далее — «Условия») регулируют отношения между ООО «Арасака» (далее — «Компания») и пользователем веб-сайта, расположенного по адресу{" "}
              <a
                href="https://arasaca.ru"
                style={{ color: C.dna }}
                className="hover:underline"
              >
                arasaca.ru
              </a>{" "}
              (далее — «Пользователь», «Сайт»).
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              1.2. Используя Сайт, Пользователь подтверждает, что ознакомился с настоящими Условиями и принимает их в полном объёме.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              1.3. Компания вправе в одностороннем порядке изменять настоящие Условия. Продолжение использования Сайта после внесения изменений означает согласие Пользователя с новой редакцией.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              2. Интеллектуальная собственность
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              2.1. Все материалы, размещённые на Сайте (тексты, изображения, графика, дизайн, программный код, товарные знаки и иные объекты интеллектуальной собственности), являются исключительной собственностью Компании или используются на законных основаниях.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              2.2. Копирование, воспроизведение, распространение, переработка или иное использование материалов Сайта допускается только с предварительного письменного согласия Компании.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              3. Использование Сайта
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              3.1. Пользователь обязуется использовать Сайт в целях, не противоречащих законодательству Российской Федерации и настоящим Условиям.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              3.2. Пользователю запрещается:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: C.textMid }}>
              <li>Использовать Сайт для передачи материалов, нарушающих законодательство;</li>
              <li>Пытаться получить несанкционированный доступ к системам и ресурсам Сайта;</li>
              <li>Использовать автоматизированные средства для сбора данных с Сайта (скрейпинг) без согласия Компании;</li>
              <li>Распространять вредоносное программное обеспечение через Сайт.</li>
            </ul>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              4. Предоставление информации
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              4.1. Информация, размещённая на Сайте, носит ознакомительный характер и не является публичной офертой, определяемой положениями статьи 437 Гражданского кодекса Российской Федерации.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              4.2. Компания прилагает разумные усилия для обеспечения достоверности и актуальности информации на Сайте, однако не гарантирует отсутствие ошибок или неточностей.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              5. Ограничение ответственности
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              5.1. Компания не несёт ответственности за:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: C.textMid }}>
              <li>Перебои в работе Сайта, вызванные техническими причинами;</li>
              <li>Убытки, возникшие в результате использования или невозможности использования Сайта;</li>
              <li>Действия третьих лиц, включая контент и ресурсы, на которые ведут ссылки с Сайта;</li>
              <li>Несовпадение ожиданий Пользователя относительно содержания Сайта.</li>
            </ul>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              6. Ссылки на сторонние ресурсы
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              6.1. Сайт может содержать гиперссылки на сайты третьих лиц. Компания не контролирует и не несёт ответственности за содержание таких сайтов.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              7. Конфиденциальность
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              7.1. Обработка персональных данных Пользователей осуществляется в соответствии с{" "}
              <Link
                href="/privacy"
                style={{ color: C.dna }}
                className="hover:underline"
              >
                Политикой конфиденциальности
              </Link>
              .
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              8. Применимое право
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              8.1. Настоящие Условия регулируются и толкуются в соответствии с законодательством Российской Федерации. Все споры, возникающие в связи с использованием Сайта, разрешаются путём переговоров, а при недостижении согласия — в судебном порядке по месту нахождения Компании.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              9. Контактная информация
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              9.1. По вопросам, связанным с настоящими Условиями, Пользователь может обратиться к Компании:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: C.textMid }}>
              <li>
                Электронная почта:{" "}
                <a
                  href="mailto:info@arasaca.ru"
                  style={{ color: C.dna }}
                  className="hover:underline"
                >
                  info@arasaca.ru
                </a>
              </li>
              <li>Телефон: +7 (___) ___-__-__</li>
              <li>Адрес: ____________</li>
            </ul>

            {/* CTA */}
            <div
              className="mt-16 p-8 rounded-2xl text-center"
              style={{ background: C.light }}
            >
              <p className="text-lg font-medium mb-4" style={{ color: C.textDark }}>
                Остались вопросы?
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-colors"
                style={{ background: C.dna }}
              >
                Связаться с нами
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
