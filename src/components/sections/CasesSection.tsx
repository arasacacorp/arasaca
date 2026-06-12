"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Цифровая трансформация промышленного холдинга",
    description: "Разработали ИТ-стратегию и дорожную карту цифровизации, внедрили систему управления производством.",
    client: "Крупнейший металлургический холдинг",
    result: "Сокращение операционных затрат на 15%",
  },
  {
    title: "Мастер-планирование территории",
    description: "Создали цифровую платформу для управления инвестиционными программами развития территорий.",
    client: "Субъект РФ",
    result: "Более 50 инвестиционных проектов в системе",
  },
  {
    title: "Стратегия ESG-трансформации",
    description: "Разработали стратегию устойчивого развития и внедрили систему ESG-отчётности.",
    client: "Нефтегазовая компания",
    result: "Повышение рейтинга ESG на 2 уровня",
  },
];

export default function CasesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Кейсы
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Примеры реализованных проектов и достигнутых результатов
              </p>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-[#008C95] font-medium group"
            >
              Все кейсы
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cases grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/cases" className="block">
                  <div className="bg-gray-50 p-8 h-full hover:bg-gray-100 transition-colors border-l-4 border-[#008C95]">
                    {/* Number */}
                    <div className="text-4xl font-bold text-[#008C95]/20 mb-4">
                      [{String(index + 1).padStart(2, '0')}]
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#008C95] transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Client */}
                    <div className="mb-4">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Клиент</span>
                      <p className="text-sm text-gray-700">{item.client}</p>
                    </div>
                    
                    {/* Result */}
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Результат</span>
                      <p className="text-sm font-medium text-[#008C95]">{item.result}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
