"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  ArrowRight,
  ChevronRight,
  Code2,
  Database,
  Users,
  GraduationCap,
  Workflow,
  Plug,
  BarChart3,
  Shield,
  Zap,
  Lightbulb,
  Settings,
  Cpu,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const labProjects = [
  {
    icon: Users,
    title: "CRM-системы",
    description:
      "Собственные CRM-решения, адаптированные под специфику бизнеса. Управление клиентами, сделками, воронками продаж и аналитика.",
    features: ["Управление клиентской базой", "Воронки продаж", "Аналитика и отчёты", "Интеграция с телефонией"],
  },
  {
    icon: Workflow,
    title: "Автоматизация процессов",
    description:
      "Автоматизация рутинных операций и бизнес-процессов. Снижение ручного труда, ускорение работы и минимизация ошибок.",
    features: ["Документооборот", "Согласование заявок", "Автоматические уведомления", "Генерация документов"],
  },
  {
    icon: Plug,
    title: "Интеграции и API",
    description:
      "Разработка интеграционных решений. Связываем системы между собой, создаём API и коннекторы к внешним сервисам.",
    features: ["Интеграция с 1С", "Коннекторы к сервисам", "REST API", "Обмен данными"],
  },
  {
    icon: GraduationCap,
    title: "LMS-платформы",
    description:
      "Системы управления обучением для корпоративного образования. Курсы, тестирование, отслеживание прогресса.",
    features: ["Онлайн-курсы", "Тестирование", "Сертификация", "Отчёты по обучению"],
  },
  {
    icon: Database,
    title: "Кадровые системы",
    description:
      "HR-решения для управления персоналом. Учёт сотрудников, кадровый документооборот, расчёт KPI и мотивации.",
    features: ["Учёт сотрудников", "Кадровые документы", "Расчёт KPI", "Мотивация и премии"],
  },
  {
    icon: BarChart3,
    title: "Аналитические дашборды",
    description:
      "Визуализация данных и аналитика в реальном времени. Сводные панели для принятия управленческих решений.",
    features: ["BI-панели", "Графики и диаграммы", "Выгрузка отчётов", "Мониторинг KPI"],
  },
];

const advantages = [
  {
    icon: Lightbulb,
    title: "Индивидуальный подход",
    description: "Разрабатываем решение под ваши уникальные задачи, а не адаптируем коробочный продукт",
  },
  {
    icon: Shield,
    title: "Контроль и безопасность",
    description: "Полный контроль над данными и инфраструктурой, соответствие требованиям безопасности",
  },
  {
    icon: Zap,
    title: "Быстрый старт",
    description: "MVP за 2-4 недели, итеративное развитие функционала на основе обратной связи",
  },
  {
    icon: Settings,
    title: "Гибкость настроек",
    description: "Возможность доработки и масштабирования под растущие потребности бизнеса",
  },
];

const process = [
  { step: "01", title: "Анализ требований", description: "Изучаем задачи и формируем техническое задание" },
  { step: "02", title: "Проектирование", description: "Разрабатываем архитектуру и дизайн-макеты" },
  { step: "03", title: "Разработка MVP", description: "Создаём работающий прототип за 2-4 недели" },
  { step: "04", title: "Тестирование", description: "Проводим тесты и вносим корректировки" },
  { step: "05", title: "Внедрение", description: "Разворачиваем систему и обучаем пользователей" },
  { step: "06", title: "Поддержка", description: "Обеспечиваем сопровождение и развитие решения" },
];

export default function LabPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section - Dark style */}
      <section className="relative pt-16 lg:pt-[120px] pb-16 bg-[#00313C] overflow-hidden">
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#77e2c3]">Арасака Лаб</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-[#77e2c3] text-sm font-medium mb-6">
                <FlaskConical className="w-4 h-4" />
                Лаборатория цифровых решений
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Арасака Лаб
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Разрабатываем IT-решения для внутренних нужд компании и под индивидуальные запросы клиентов. 
                CRM, автоматизации, интеграции, LMS, кадровые системы — всё, что нужно вашему бизнесу.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
                >
                  Обсудить проект
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Наши разработки
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/5 rounded-full" />
                <div className="absolute inset-8 bg-white/10 rounded-full" />
                <div className="absolute inset-16 bg-white/15 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-20 h-20 text-[#77e2c3]" />
                </div>
                {/* Floating icons */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/4 -right-2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#77e2c3]" />
                </div>
                <div className="absolute bottom-1/4 -right-2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#77e2c3]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,40 L600,0 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container-kept">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "IT-решений разработано" },
              { number: "5+", label: "лет в разработке" },
              { number: "100%", label: "индивидуальный подход" },
              { number: "24/7", label: "поддержка систем" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#008C95]">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Что мы разрабатываем
              </h2>
              <p className="text-gray-500 text-lg">
                В нашей лаборатории создаются решения для автоматизации и цифровизации бизнес-процессов. 
                Каждая система адаптируется под конкретные задачи.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 bg-gray-200">
              {labProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white"
                >
                  <div className="p-8 border-r border-b border-gray-200 h-full hover:bg-gray-50 transition-colors">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#e8f5f3] mb-6">
                      <project.icon className="w-7 h-7 text-[#008C95]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#008C95] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 lg:py-24 bg-[#f1f2f4]">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Почему индивидуальная разработка
              </h2>
              <p className="text-gray-500 text-lg">
                Коробочные решения не всегда подходят. Мы создаём системы, 
                которые идеально вписываются в ваши процессы.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center bg-white p-6"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#e8f5f3] mb-4">
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Как мы работаем
              </h2>
              <p className="text-gray-500 text-lg">
                От идеи до работающей системы — прозрачный процесс разработки
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative bg-gray-50 p-6 border-l-4 border-[#008C95]"
                >
                  <div className="text-4xl font-bold text-[#008C95]/20 mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - SIBUR DNA color */}
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
                Нужна индивидуальная IT-система?
              </h2>
              <p className="text-white/80 max-w-xl">
                Расскажите о ваших задачах — мы предложим оптимальное решение и оценку сроков.
              </p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
