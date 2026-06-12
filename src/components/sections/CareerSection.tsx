"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, GraduationCap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Профессиональный рост",
    description:
      "Мы работаем над масштабными проектами, которые дают уникальный опыт.",
  },
  {
    icon: GraduationCap,
    title: "Обучение и развитие",
    description:
      "Система менторства, тренинги и возможность учиться у лучших экспертов.",
  },
  {
    icon: Users,
    title: "Сильная команда",
    description:
      "Коллеги с богатым опытом в консалтинге, финансах и технологиях.",
  },
];

export default function CareerSection() {
  return (
    <section id="career" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/30 text-sm font-medium mb-4">05</div>
            <h2 className="text-5xl font-bold text-white mb-6">Карьера</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Присоединяйтесь к команде экспертов, которые меняют бизнесы к
              лучшему.
            </p>
            <Link
              href="/career/vacancies"
              className="inline-flex items-center gap-2 text-white font-medium group"
            >
              Открытые вакансии
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#008C95] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">05</div>
          <h2 className="text-4xl font-bold text-white">Карьера</h2>
        </div>

        {/* Benefits */}
        <div className="divide-y divide-gray-200">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 lg:p-12 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#e8f5f3]">
                  <benefit.icon className="w-6 h-6 text-[#008C95]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 lg:p-12 bg-gray-50"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Готовы присоединиться?
              </h3>
              <p className="text-gray-500">
                Отправьте резюме на info@arasaca.ru
              </p>
            </div>
            <Link
              href="/career/vacancies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
            >
              Все вакансии
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
