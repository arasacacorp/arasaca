"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Target, Users, Globe, Heart } from "lucide-react";

const stats = [
  { number: "8", label: "лет на рынке" },
  { number: "200+", label: "реализованных проектов" },
  { number: "50+", label: "экспертов в команде" },
  { number: "98%", label: "клиентов рекомендуют" },
];

const values = [
  {
    icon: Target,
    title: "Фокус на результат",
    description:
      "Мы работаем до достижения измеримых бизнес-результатов, а не просто отдаём отчёты.",
  },
  {
    icon: Users,
    title: "Командный подход",
    description:
      "Проекты ведут опытные консультанты при поддержке отраслевых экспертов.",
  },
  {
    icon: Globe,
    title: "Глобальный опыт",
    description:
      "Сочетаем международную методологию с глубоким пониманием российской специфики.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container-kept">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#008C95] text-sm font-medium mb-4">
            06
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            О компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Арасака — консалтинговая компания, специализирующаяся на повышении
            эффективности управления, цифровой трансформации и управлении
            инвестиционными программами.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 text-center">
              <div className="text-4xl font-bold text-[#008C95] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-50 border border-gray-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] mb-4">
                <value.icon className="w-6 h-6 text-[#008C95]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pro bono */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Link
            href="/pro-bono"
            className="flex items-center gap-4 p-6 bg-[#e8f5f3] border border-[#008C95]/20 rounded-xl hover:bg-[#d8f0ed] transition-colors group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#008C95]/10 rounded-lg shrink-0">
              <Heart className="w-6 h-6 text-[#008C95]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 group-hover:text-[#008C95] transition-colors">
                Услуги Pro Bono
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                Оказываем консалтинговую поддержку на безвозмездной основе НКО и
                социальным проектам.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#008C95] group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#008C95] text-white font-medium hover:bg-[#02757d] transition-colors group"
          >
            Узнать больше о нас
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
