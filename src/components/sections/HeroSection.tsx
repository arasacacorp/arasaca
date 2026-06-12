"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Map } from "lucide-react";

const heroSolution = {
  label: "Наше решение",
  title: "Платформа мастер-планирования",
  partner: "Совместно с Агентством «ЦЕНТР»",
  description:
    "Цифровая платформа для управления инвестиционными программами развития территорий и инфраструктурных проектов.",
  href: "/solutions/master-planning",
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="mb-6">
              <span className="text-white/60 text-sm uppercase tracking-wider">
                Консалтинговая компания
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              арасака
            </h1>

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Мы помогаем компаниям повышать эффективность бизнеса и достигать
              стратегических целей через управленческий консалтинг и цифровую
              трансформацию.
            </p>

            {/* CTA */}
            <Button className="bg-[#E04E39] hover:bg-[#c94330] text-white px-6 py-3 text-sm font-medium gap-2 group">
              Все услуги
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center gap-4 text-white/40">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span className="text-sm">Прокрутите вниз</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: White Content Area */}
      <div className="flex-1 relative min-h-screen flex flex-col">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1f2f4] to-white" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#008C95 1px, transparent 1px),
                             linear-gradient(90deg, #008C95 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Контент + карточка решения в одном потоке */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12 xl:gap-16 min-h-screen py-12 px-6 sm:px-8 lg:py-16 lg:px-12 xl:px-20">
          {/* Основной текст и статистика */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="min-w-0 flex-1 max-w-2xl"
          >
            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <h1 className="text-4xl font-bold text-[#008C95] mb-4 tracking-tight">
                арасака
              </h1>
              <p className="text-gray-600">
                Консалтинговая компания
              </p>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Повышаем эффективность вашего бизнеса
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Управленческий консалтинг, цифровая трансформация и инвестиционное
              консультирование для компаний, нацеленных на устойчивый рост.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-gray-200">
              {[
                { number: "8", label: "лет на рынке" },
                { number: "200+", label: "проектов" },
                { number: "50+", label: "экспертов" },
                { number: "30+", label: "отраслей" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-[#008C95]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-8">
              <Button className="bg-[#E04E39] hover:bg-[#c94330] text-white px-6 py-3 gap-2">
                Все услуги
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Карточка решения: на десктопе справа по центру по вертикали, на мобильных — ниже контента */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[320px] xl:w-[340px] mx-auto lg:mx-0"
          >
            <Link
              href={heroSolution.href}
              className="block overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-xl hover:shadow-2xl hover:border-[#008C95]/40 transition-all duration-300 group"
            >
              <div className="h-1.5 bg-gradient-to-r from-[#008C95] via-[#77e2c3] to-[#008C95]" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[#008C95] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Map className="w-4 h-4 flex-shrink-0" />
                  {heroSolution.label}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-[#008C95] transition-colors leading-tight">
                  {heroSolution.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 sm:mb-4">
                  {heroSolution.partner}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3 leading-snug mb-4 sm:mb-5">
                  {heroSolution.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#008C95] group-hover:gap-3 transition-all">
                  Подробнее о решении
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
