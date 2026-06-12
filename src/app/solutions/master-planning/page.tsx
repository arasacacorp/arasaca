"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Map,
  Layers,
  Wallet,
  BarChart3,
  Database,
  Users,
  BookOpen,
  Shield,
  Building2,
  Target,
  Cpu,
  ExternalLink,
} from "lucide-react";

const productName = "Цифровая платформа мастер-планирования";
const productTagline =
  "Управление инвестиционными программами развития территорий и инфраструктурных проектов";

const features = [
  {
    icon: Map,
    title: "Цифровое мастер-планирование",
    description:
      "Единая цифровая модель территории: функциональное зонирование, параметры застройки, очередность освоения.",
  },
  {
    icon: Layers,
    title: "Управление портфелем проектов",
    description:
      "Ведение портфеля инвестиционных проектов, привязанных к локациям мастер-плана.",
  },
  {
    icon: Wallet,
    title: "Управление финансированием",
    description:
      "Планирование и контроль освоения средств по источникам (бюджеты, внебюджет, ГЧП) в привязке к объектам инфраструктуры.",
  },
  {
    icon: Database,
    title: "Интеграция с госсистемами",
    description:
      "Обмен данными с ГИСОГД, ЕГРН и системами казначейства для актуального статуса участков и финансирования.",
  },
  {
    icon: BarChart3,
    title: "Мониторинг KPI развития",
    description:
      "Отслеживание показателей реализации мастер-плана: ввод недвижимости, соцобъекты, рабочие места, освоение инвестиций.",
  },
  {
    icon: Users,
    title: "Единая среда взаимодействия",
    description:
      "Централизованная среда планирования для органов власти, застройщиков, сетевых организаций и проектных институтов.",
  },
  {
    icon: BookOpen,
    title: "Библиотека типовых решений",
    description:
      "Накопление лучших практик, типовых мастер-планов и шаблонов проектной документации.",
  },
  {
    icon: Shield,
    title: "Управление рисками",
    description:
      "Мониторинг рисков территориального развития: градостроительные ограничения, нехватка мощностей, срывы сроков подключения к сетям.",
  },
];

const advantages = [
  {
    title: "Методология + софт",
    text: "Платформа поставляется с предустановленной методологией Агентства «ЦЕНТР», апробированной в 60+ регионах РФ — не «пустой» инструментарий.",
  },
  {
    title: "Master-to-Money",
    text: "Прямой переход от архитектурного образа территории к финансовой модели инвестиционной программы в режиме реального времени.",
  },
  {
    title: "Адаптация под ГЧП и КРТ",
    text: "Специализированные алгоритмы расчёта мультипликативных эффектов и распределения нагрузки на инфраструктуру между государством и частным инвестором.",
  },
  {
    title: "Технологический суверенитет",
    text: "Разработка на базе Open Source (PostgreSQL/PostGIS, Python), включение в Реестр отечественного ПО, независимость от зарубежных вендоров.",
  },
];

const effects = [
  { value: "30–40%", label: "сокращение сроков разработки и согласования мастер-планов" },
  { value: "25%", label: "повышение точности прогнозирования бюджетных расходов" },
  { value: "50%", label: "снижение рисков замораживания проектов из‑за нехватки мощностей сетей" },
];

const forWhom = [
  {
    title: "Государственный сектор",
    items: ["Федеральные и региональные министерства", "Администрации субъектов РФ", "Профильные департаменты"],
  },
  {
    title: "Институты развития",
    items: ["ВЭБ.РФ", "ДОМ.РФ", "Корпорации развития регионов"],
  },
  {
    title: "Крупный бизнес",
    items: ["Девелоперы полного цикла", "Промышленные холдинги", "Проекты КРТ от 50 га"],
  },
  {
    title: "Проектные институты",
    items: ["Организации урбанистики и градостроительства", "Архитектурно-планировочные бюро"],
  },
];

const centerAgencyCases = [
  "Мастер-план Дербента (Республика Дагестан)",
  "Мастер-план Якутска (Республика Саха)",
  "Мастер-план Норильска (Красноярский край)",
  "Мастер-план Астраханской агломерации",
  "Более 60 регионов России",
];

export default function SolutionMasterPlanningPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <section className="relative pt-16 lg:pt-[120px] pb-20 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#008C95]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#008C95]">Наше решение</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-[#008C95]/20 rounded-full text-sm text-[#008C95] mb-6">
              <span>Совместный продукт</span>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.centeragency.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline inline-flex items-center gap-1"
              >
                Агентство «ЦЕНТР»
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#008C95] mb-6 leading-tight">
              {productName}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-snug mb-8">
              {productTagline}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Платформа предназначена для автоматизации процессов стратегического и территориального мастер-планирования, а также управления инвестиционными программами, обеспечивающими реализацию утверждённых мастер-планов. Система ориентирована на крупные государственные корпорации, институты развития, региональные администрации и девелоперов. Внедрение обеспечивает связность стратегий развития территорий с конкретными инвестиционными проектами и синхронизацию строительства инфраструктуры.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[50px]"
            viewBox="0 0 1200 50"
            preserveAspectRatio="none"
          >
            <path d="M0,50 L600,0 L1200,50 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Ключевые возможности */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Ключевые возможности
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mb-12"
          >
            Комплексное внедрение позволяет перейти от разрозненного управления инвестиционными проектами к целостному управлению развитием территорий на основе мастер-планов.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#008C95]/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-[#008C95]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества и эффект */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Преимущества платформы
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 bg-white border border-gray-200 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-[#008C95] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 mb-6"
          >
            Эффект от внедрения
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {effects.map((e, index) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white border border-[#008C95]/20 rounded-xl text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-[#008C95] mb-2">{e.value}</div>
                <div className="text-sm text-gray-600">{e.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Для кого
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl"
          >
            Платформа применима в сфере государственного и муниципального управления, градостроительства, девелопмента и управления крупными инфраструктурными активами.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forWhom.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#008C95] rounded-full mt-2 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Партнёр: ЦЕНТР */}
      <section className="py-16 lg:py-24 bg-[#00313C] text-white">
        <div className="container-kept">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10 text-[#77e2c3]" />
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Партнёр разработки
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Агентство стратегического развития <strong className="text-white">«ЦЕНТР»</strong> более 10 лет специализируется на комплексных исследованиях и разработке мастер-планов для различных регионов России — от Дербента и Астрахани до Якутска и Норильска. Авторская методология «ЦЕНТР» легла в основу алгоритмической логики платформы.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Методологические решения, интегрированные в платформу, прошли апробацию в рамках разработки стратегических документов развития более чем в 60 регионах России.
              </p>
              <a
                href="https://www.centeragency.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#77e2c3] font-medium hover:text-white transition-colors"
              >
                Перейти на сайт Агентства «ЦЕНТР»
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 lg:p-8 bg-white/5 border border-white/10 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Кейсы и опыт «ЦЕНТР»</h3>
              <ul className="space-y-3">
                {centerAgencyCases.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-white/80 text-sm">
                    <Target className="w-4 h-4 text-[#008C95] flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Технология */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-10 h-10 text-[#008C95]" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Технология
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Продукт реализуется как веб-приложение с доступом через браузер. Система управления жизненным циклом сложных инженерных объектов (PLM) в применении к территориальному развитию. Разработка на базе Open Source (PostgreSQL/PostGIS, Python), с возможностью включения в Реестр отечественного ПО.
              </p>
              <p className="text-gray-500 text-sm">
                Интеграция ГИС и финансового моделирования в едином ядре; микросервисная архитектура; ролевой интерфейс для архитекторов (карты), экономистов и руководителей (бюджеты и KPI).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Узнать больше о платформе
            </h2>
            <p className="text-gray-600 mb-10">
              Готовы обсудить пилотное внедрение или интеграцию в ваши процессы? Свяжитесь с нами.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors text-lg"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
