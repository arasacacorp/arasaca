"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";
import { fadeUp, vp } from "@/lib/animations";
import { SectionLabel, resolveIcon } from "@/components/sections/HomeShared";
import { ArrowRight } from "lucide-react";
import { labProducts, labStats } from "@/data/homepage";

export default function HomeInnovation() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,140,149,0.08)" }}
      />
      {/* Diagonal lines pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />

      <div className="container-kept relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel light>Лаборатория цифровых решений</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Арасака Лаб
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            Разрабатываем IT-системы для внутренних<br />нужд и под запросы клиентов. Решения,<br />которые идеально подходят под ваши задачи
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 mb-10">
          {labProducts.map((product, index) => {
            const Icon = resolveIcon(product.icon);
            return (
              <motion.div
                key={product.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.05}
              >
                <div
                  className="group relative flex items-start gap-4 overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 border border-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_4px_20px_rgba(0,140,149,0.12)]"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {/* Accent left line */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
                    style={{ background: C.mint }}
                  />
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(119,226,195,0.12)" }}
                  >
                    <Icon className="h-5 w-5 transition-colors duration-300" style={{ color: C.mint }} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-tight text-white mb-1 transition-colors duration-300 group-hover:text-[#77e2c3]">
                      {product.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed transition-colors duration-300 group-hover:text-white/70" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {product.description}
                    </p>
                  </div>
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats + CTA row */}
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {/* Stats — left-aligned */}
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {labStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.08}
              >
                <div
                  className="text-2xl font-bold md:text-3xl"
                  style={{ fontFamily: "var(--font-russo)", color: stat.accent }}
                >
                  {stat.number}
                </div>
                <div className="mt-1 text-[11px] md:text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Orange CTA button — right side */}
          <Link href="/lab">
            <motion.span
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
              style={{ background: C.orange, borderRadius: "4px" }}
              whileHover={{ background: C.orangeHover, transition: { duration: 0.3 } }}
            >
              Подробнее о лаборатории
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
