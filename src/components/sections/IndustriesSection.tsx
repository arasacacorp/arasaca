"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { coreIndustries } from "@/data/industries";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="container-kept">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-[#008C95] text-sm font-medium mb-4">
              02
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Отрасли
            </h2>
          </div>
          <p className="text-gray-500 max-w-md lg:text-right">
            Глубокая экспертиза в ключевых отраслях экономики позволяет нам
            предлагать релевантные решения для вашего бизнеса.
          </p>
        </motion.div>

        {/* Industries Grid — 3 колонки на lg, чтобы последний ряд был полным без пустых ячеек */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {coreIndustries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={`/industries/${industry.slug}`}
                className="flex items-center justify-between p-6 bg-white border border-gray-200 hover:border-[#008C95]/30 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <industry.icon className="w-5 h-5 shrink-0 text-gray-400" />
                  <span className="font-medium text-gray-900 group-hover:text-[#008C95] transition-colors">
                    {industry.name}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-10 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-gray-500">
            Не нашли свою отрасль? Посмотрите полный список наших направлений.
          </p>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[#008C95] font-medium group"
          >
            Все отрасли
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
