"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";
import { fadeUp, vp } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/HomeShared";
import { ArrowRight } from "lucide-react";
import { caseCards } from "@/data/homepage";

export default function HomeMission() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{ background: "rgba(0,140,149,0.1)" }}
      />
      {/* Diagonal lines pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />

      <div className="container-kept relative z-10">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel light>Наша миссия</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Раскрываем потенциал,
              <br />
              <span style={{ color: C.mint }}>чтобы делать бизнес лучше</span>
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(255,255,255,0.55)" }}>
            Развиваем рынки и предлагаем<br />клиентам не только консалтинг,<br />но и комплексные решения
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.12}
            >
              <Link href={card.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div
                    className="h-1"
                    style={{ background: index === 0 ? C.dna : index === 1 ? C.mint : C.orange }}
                  />
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span
                      className="mb-3 inline-block self-start px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: C.light, color: C.dna, borderRadius: "3px" }}
                    >
                      {card.category}
                    </span>
                    <h3 className="heading-subsection mb-3 flex-1 transition-colors" style={{ color: C.textDark }}>
                      {card.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed mb-4" style={{ color: C.textMuted }}>
                      {card.description}
                    </p>
                    <div className="pt-4 border-t" style={{ borderColor: C.borderLight }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: C.textMuted }}>Клиент</span>
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: C.textMuted }}>Результат</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-medium" style={{ color: C.textMid }}>{card.client}</span>
                        <span className="text-[12px] font-semibold" style={{ color: C.dna }}>{card.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link to all cases */}
        <div className="mt-10">
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: C.mint }}
          >
            Все кейсы
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
