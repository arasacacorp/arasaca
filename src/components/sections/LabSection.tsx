"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, Code2, Database, Workflow, Plug, GraduationCap, Users, BarChart3 } from "lucide-react";

const labHighlights = [
  { icon: Users, title: "CRM-системы", description: "Управление клиентами и продажами" },
  { icon: Workflow, title: "Автоматизация", description: "Рутинные процессы без ручного труда" },
  { icon: Plug, title: "Интеграции", description: "Связываем системы между собой" },
  { icon: GraduationCap, title: "LMS-платформы", description: "Корпоративное обучение" },
  { icon: Database, title: "HR-системы", description: "Учёт и мотивация персонала" },
  { icon: BarChart3, title: "Дашборды", description: "Аналитика в реальном времени" },
];

export default function LabSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#00313C] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-kept relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded">
              <FlaskConical className="w-5 h-5 text-[#77e2c3]" />
            </div>
            <span className="text-[#77e2c3] text-sm font-medium uppercase tracking-wider">
              Лаборатория цифровых решений
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Арасака Лаб
          </h2>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Разрабатываем IT-системы для внутренних нужд компании и под индивидуальные запросы клиентов. 
            Создаём решения, которые идеально подходят под ваши задачи.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 bg-white/5">
          {labHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <Link
                href="/lab"
                className="block p-6 border-r border-b border-white/10 h-full hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#77e2c3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0 p-2 text-white/30 group-hover:text-[#77e2c3] group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats and CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {[
              { number: "20+", label: "решений разработано" },
              { number: "5+", label: "лет в разработке" },
              { number: "100%", label: "индивидуальный подход" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
          >
            Подробнее о лаборатории
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
