"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";
import { fadeUp, vp } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/HomeShared";
import {
  ArrowRight,
  Database,
  BarChart3,
  Map,
  Cpu,
  Layers,
  Target,
  FlaskConical,
} from "lucide-react";

export default function HomeSolutions() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-kept">
        {/* Section header */}
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Продукты</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Наши решения и&nbsp;продукты
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Цифровые платформы, созданные<br />для решения задач бизнеса&nbsp;и&nbsp;государства
          </p>
        </motion.div>

        {/* Top row: ЕОСДО + ЕСУИП — two columns */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-5">
          {/* ── ЕОСДО ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0}
          >
            <Link href="/solutions/eosdo" className="group block h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                {/* Top accent strip */}
                <div className="h-1.5 w-full" style={{ background: C.dna }} />

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Tag */}
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${C.dna}12`, color: C.dna, borderRadius: "3px" }}
                    >
                      <Database className="h-3 w-3" />
                      Корпоративный документооборот
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold leading-tight mb-1"
                    style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                  >
                    ЕОСДО
                  </h3>
                  <p className="text-[13px] font-medium mb-4" style={{ color: C.dna }}>
                    Единая отечественная система документооборота
                  </p>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: C.textMuted }}>
                    Корпоративная платформа для крупных предприятий и госкорпораций. Обеспечивает документооборот между организациями, филиалами и подразделениями — внутренняя переписка, поручения, согласования, приказы и регламенты.
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {["Внутренний документооборот", "Маршрутизация и согласование", "Поручения и контроль исполнения", "Импортонезависимость"].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: C.dna }} />
                        <span className="text-[11px] leading-tight" style={{ color: C.textMid }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: C.borderLight }}>
                    <span className="text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#008C95]" style={{ color: C.dark }}>
                      Подробнее
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: C.dna }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── ЕСУИП ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.08}
          >
            <Link href="/solutions/esuip" className="group block h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent" style={{ borderColor: C.border }}>
                {/* Top accent strip */}
                <div className="h-1.5 w-full" style={{ background: C.mintDark }} />

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Tag */}
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${C.mintDark}12`, color: C.mintDark, borderRadius: "3px" }}
                    >
                      <BarChart3 className="h-3 w-3" />
                      Управление инвестициями
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold leading-tight mb-1"
                    style={{ fontFamily: "var(--font-russo)", color: C.dark }}
                  >
                    ЕСУИП
                  </h3>
                  <p className="text-[13px] font-medium mb-4" style={{ color: C.mintDark }}>
                    Единая система управления инвестиционным портфелем
                  </p>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: C.textMuted }}>
                    Информационная система для управления инвестиционной деятельностью — от планирования и оценки проектов до мониторинга реализации. Объединяет все инвестиционные проекты в единый портфель с аналитикой и контролем ключевых показателей.
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {["Управление инвестиционным портфелем", "Оценка и отбор проектов", "Мониторинг реализации", "Аналитика и отчётность"].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: C.mintDark }} />
                        <span className="text-[11px] leading-tight" style={{ color: C.textMid }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: C.borderLight }}>
                    <span className="text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#4dc9a5]" style={{ color: C.dark }}>
                      Подробнее
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: C.mintDark }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom row: Мастер-план — full width dark card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.16}
        >
          <div className="overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-stretch">
              {/* Left content — product info (hoverable) */}
              <Link href="/solutions/master-planning" className="group/mp flex-1 block">
                <div
                  className="relative flex flex-col h-full overflow-hidden transition-all duration-300 group-hover/mp:shadow-lg group-hover/mp:-translate-y-1"
                  style={{ background: C.dark }}
                >
                  {/* Decorative diagonal pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                    }}
                  />
                  {/* Glow effect */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full blur-[120px] opacity-20 transition-opacity duration-300 group-hover/mp:opacity-35"
                    style={{ background: C.mint }}
                  />

                  <div className="relative z-10 flex flex-1 flex-col p-6 md:p-8 lg:p-10">
                    {/* Tag + Partnership badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: `${C.orange}25`, color: C.orange, borderRadius: "3px" }}
                      >
                        <Map className="h-3 w-3" />
                        Развитие территорий
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", borderRadius: "3px" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
                        Совместно с АСР «Центр»
                      </span>
                    </div>

                    {/* Title block */}
                    <div className="mb-4">
                      <h3
                        className="text-2xl md:text-3xl font-bold leading-tight mb-1"
                        style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}
                      >
                        Цифровая платформа мастер-планирования
                      </h3>
                      <p className="text-[13px] font-medium" style={{ color: C.orange }}>
                        Управление инвестиционными программами развития территорий
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] leading-relaxed mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Платформа для управления инвестиционными программами развития территорий и&nbsp;инфраструктурных проектов. Совместная разработка с&nbsp;Агентством стратегического развития «Центр». Цифровая модель территории, сценарное моделирование и&nbsp;контроль реализации.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { label: "Цифровая модель территории", icon: Map },
                        { label: "Сценарное моделирование", icon: Cpu },
                        { label: "Управление программами", icon: Layers },
                        { label: "Контроль реализации", icon: Target },
                      ].map((f) => (
                        <span
                          key={f.label}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium"
                          style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", borderRadius: "4px" }}
                        >
                          <f.icon className="h-3.5 w-3.5" style={{ color: C.orange }} />
                          {f.label}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: C.orange }}>
                        Подробнее о платформе
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/mp:translate-x-1" style={{ color: C.orange }} />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Right panel — Lab CTA (no hover on card, only button) */}
              <div
                className="flex flex-col justify-center p-6 md:p-8 lg:p-10 md:w-[300px] lg:w-[340px] flex-shrink-0 bg-white"
              >
                {/* Decorative top line */}
                <div className="h-px w-12 mb-5" style={{ background: C.dna }} />

                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: "rgba(0,140,149,0.1)" }}
                  >
                    <FlaskConical className="h-4 w-4" style={{ color: C.dna }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: C.dna }}
                  >
                    Арасака Лаб
                  </span>
                </div>

                <p className="text-[14px] font-semibold leading-snug mb-3" style={{ color: C.textDark }}>
                  Нужно индивидуальное решение?
                </p>
                <p className="text-[12px] leading-relaxed mb-5" style={{ color: C.textMuted }}>
                  Если вам требуется разработка под&nbsp;задачи вашего бизнеса, обратитесь в&nbsp;Лабораторию Арасаки — мы создаём цифровые продукты с&nbsp;нуля.
                </p>

                <Link href="/lab" className="group/cta inline-flex items-center gap-2 self-start">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300"
                    style={{ background: C.dna, borderRadius: "4px" }}
                  >
                    Узнать больше
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
