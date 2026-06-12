"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, TrendingUp, Users, Globe } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Лидер рейтинга",
    description: "Лидеры консалтингового рынка по версии экспертных изданий",
  },
  {
    icon: TrendingUp,
    title: "Устойчивый рост",
    description: "Ежегодный рост выручки и расширение клиентской базы",
  },
  {
    icon: Users,
    title: "Доверие клиентов",
    description: "Более 76 из 100 крупнейших компаний России — наши клиенты",
  },
  {
    icon: Globe,
    title: "Масштаб проектов",
    description: "Реализуем проекты в России, СНГ и за рубежом",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f1f2f4]">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Достижения
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Результаты, которыми мы гордимся
            </p>
          </div>

          {/* Achievement cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 group hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] mb-4 group-hover:bg-[#008C95] transition-colors">
                  <item.icon className="w-6 h-6 text-[#008C95] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats row like Reksoft */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            {[
              { number: "8", label: "лет на рынке" },
              { number: "200+", label: "реализованных проектов" },
              { number: "50+", label: "экспертов в команде" },
              { number: "30+", label: "отраслей экспертизы" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#008C95]">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
