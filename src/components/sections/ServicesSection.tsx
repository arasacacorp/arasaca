"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, BarChart3, Cpu, Wrench } from "lucide-react";

const services = [
  {
    title: "Консалтинг",
    description:
      "Разрабатываем стратегии развития, совершенствуем финансовые модели, оптимизируем процессы и сопровождаем инвестиционные проекты.",
    href: "/services/consulting",
    icon: Briefcase,
  },
  {
    title: "Аналитика и исследования",
    description:
      "Глубокое понимание рынков, отраслей и данных, поддерживающее стратегические и операционные решения.",
    href: "/services/analytics",
    icon: BarChart3,
  },
  {
    title: "Технологии",
    description:
      "Создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций.",
    href: "/services/technologies",
    icon: Cpu,
    highlight: true,
  },
  {
    title: "Инжиниринг",
    description:
      "Предпроектный анализ, экспертиза капитальных затрат, управление строительством сложных проектов.",
    href: "/services/engineering",
    icon: Wrench,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Number */}
            <div className="text-white/30 text-sm font-medium mb-4">01</div>

            {/* Title */}
            <h2 className="text-5xl font-bold text-white mb-6">Услуги</h2>

            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-8">
              Мы специализируемся на повышении эффективности управления, цифровой
              трансформации и управлении инвестиционными программами.
            </p>

            {/* CTA */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white font-medium group"
            >
              Все услуги
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Services List */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#008C95] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">01</div>
          <h2 className="text-4xl font-bold text-white">Услуги</h2>
        </div>

        {/* Services cards */}
        <div>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-x border-gray-200 ${index === 0 ? 'border-t' : ''}`}
            >
              <Link
                href={service.href}
                className={`block p-8 lg:p-12 transition-colors duration-300 group ${
                  service.highlight
                    ? "bg-[#00313C]"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {service.icon && (
                        <service.icon
                          className={`w-5 h-5 ${
                            service.highlight
                              ? "text-[#77e2c3]"
                              : "text-[#008C95]"
                          }`}
                        />
                      )}
                      <h3
                        className={`text-2xl font-semibold group-hover:text-[#008C95] transition-colors ${
                          service.highlight
                            ? "text-white group-hover:text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className={`leading-relaxed ${
                        service.highlight
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`flex-shrink-0 p-3 transition-all duration-300 group-hover:translate-x-1 ${
                      service.highlight
                        ? "text-white/50 group-hover:text-[#77e2c3]"
                        : "text-gray-300 group-hover:text-[#008C95]"
                    }`}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All services link on mobile */}
        <div className="lg:hidden p-8 bg-gray-50">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#008C95] font-medium group"
          >
            Все услуги
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
