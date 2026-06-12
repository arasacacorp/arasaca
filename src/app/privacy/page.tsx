"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { C } from "@/lib/colors";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: C.white }}>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: C.dark }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: C.dna }}
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
              <Shield className="w-4 h-4" />
              Правовая информация
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: C.white }}
            >
              Политика конфиденциальности
            </h1>
            <p className="text-lg" style={{ color: `${C.white}99` }}>
              Как мы собираем, используем и защищаем ваши персональные данные
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
              1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных физических лиц (далее — «Пользователи»), которые используют веб-сайт ООО «Арасака», расположенный по адресу{" "}
              <a
                href="https://arasaca.ru"
                style={{ color: C.dna }}
                className="hover:underline"
              >
                arasaca.ru
              </a>{" "}
              (далее — «Сайт»).
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              1.2. Оператор персональных данных — ООО «Арасака» (далее — «Компания», «Оператор»), ОГРН ____________, ИНН ____________, расположенное по адресу: ____________.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              1.3. Используя Сайт, Пользователь подтверждает своё согласие с условиями настоящей Политики. В случае несогласия с условиями Политики Пользователь должен прекратить использование Сайта.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              1.4. Компания вправе вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              2. Сбор персональных данных
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              2.1. Компания собирает следующие категории персональных данных Пользователей:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: C.textMid }}>
              <li>Фамилия, имя, отчество;</li>
              <li>Адрес электронной почты;</li>
              <li>Номер телефона;</li>
              <li>Наименование организации и должность;</li>
              <li>Сведения, предоставленные Пользователем при заполнении форм обратной связи и иных форм на Сайте.</li>
            </ul>
            <p className="mb-4" style={{ color: C.textMid }}>
              2.2. Сбор персональных данных осуществляется путём их добровольного предоставления Пользователем при заполнении форм на Сайте, а также автоматически с использованием файлов cookie и аналогичных технологий.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              3. Цели обработки персональных данных
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              3.1. Обработка персональных данных Пользователей осуществляется в следующих целях:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: C.textMid }}>
              <li>Обработка запросов и обращений, поступающих через формы обратной связи;</li>
              <li>Предоставление консультационных и информационных услуг;</li>
              <li>Направление информационных и маркетинговых материалов (при наличии согласия);</li>
              <li>Улучшение качества Сайта и сервисов;</li>
              <li>Исполнение требований законодательства Российской Федерации.</li>
            </ul>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              4. Правовые основания обработки
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              4.1. Обработка персональных данных осуществляется на основании согласия Пользователя, выраженного им при заполнении форм на Сайте, а также на основании договорных отношений и требований законодательства.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              5. Защита персональных данных
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              5.1. Компания принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий третьих лиц.
            </p>
            <p className="mb-4" style={{ color: C.textMid }}>
              5.2. Доступ к персональным данным имеют только уполномоченные сотрудники Компании, имеющие соответствующие полномочия.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              6. Передача данных третьим лицам
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              6.1. Компания не передаёт персональные данные Пользователей третьим лицам без их согласия, за исключением случаев, предусмотренных законодательством Российской Федерации, а также при привлечении обработчиков, действующих на основании договоров с Компанией.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              7. Хранение данных
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              7.1. Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, но не более срока, установленного законодательством. По истечении указанного срока данные уничтожаются или обезличиваются.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              8. Права Пользователя
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              8.1. Пользователь вправе:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: C.textMid }}>
              <li>Запрашивать сведения об обработке своих персональных данных;</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных при отсутствии законных оснований для их обработки;</li>
              <li>Отзывать своё согласие на обработку персональных данных путём направления письменного заявления на адрес электронной почты Компании;</li>
              <li>Обжаловать действия или бездействие Компании в уполномоченный орган по защите прав субъектов персональных данных.</li>
            </ul>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              9. Использование файлов cookie
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              9.1. Сайт использует файлы cookie для улучшения пользовательского опыта, анализа трафика и персонализации контента. Пользователь может отключить cookie в настройках браузера, однако это может ограничить функциональность Сайта.
            </p>

            <h2
              className="text-xl font-semibold mt-10 mb-4"
              style={{ color: C.textDark }}
            >
              10. Контактная информация
            </h2>
            <p className="mb-4" style={{ color: C.textMid }}>
              10.1. По всем вопросам, связанным с обработкой персональных данных, Пользователь может обратиться к Компании:
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
