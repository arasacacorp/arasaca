"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { C } from "@/lib/colors";
import { fadeUp, scaleIn, vp } from "@/lib/animations";
import { SectionLabel, resolveIcon } from "@/components/sections/HomeShared";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { sectionCards } from "@/data/homepage";

export default function HomeQuickLinks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-kept">
        {/* Section header */}
        <motion.div
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Навигация</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Полезные ссылки
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании
          </p>
        </motion.div>

        {/* Cards + CTA row */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
          {/* Left: 6 navigation cards */}
          <div className="flex-1 flex">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 w-full h-full auto-rows-fr">
              {sectionCards.map((card, index) => {
                const isWhite = card.bg === C.white;
                const CardIcon = resolveIcon(card.icon);
                return (
                  <motion.div
                    key={card.title}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    custom={index * 0.08}
                  >
                    <Link href={card.href} className="group block">
                      <motion.div
                        className={cn(
                          "relative flex h-[130px] flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300",
                          isWhite && "border shadow-sm group-hover:shadow-md",
                        )}
                        style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined }}
                        whileHover={{ y: -3, transition: { duration: 0.25 } }}
                      >
                        {card.bg === C.dark && (
                          <div
                            className="pointer-events-none absolute inset-0 opacity-[0.06]"
                            style={{
                              backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.3) 75%)`,
                              backgroundSize: "20px 20px",
                            }}
                          />
                        )}
                        {isWhite && (
                          <div
                            className="pointer-events-none absolute inset-0 opacity-[0.1]"
                            style={{
                              backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`,
                              backgroundSize: "12px 12px",
                            }}
                          />
                        )}

                        {/* Colored accent bar on left */}
                        <div
                          className="pointer-events-none absolute left-0 top-0 h-full w-1"
                          style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-center gap-2">
                            {card.icon && (
                              <CardIcon className="h-4 w-4 opacity-60" />
                            )}
                            <span className="block text-sm font-semibold md:text-base">{card.title}</span>
                          </div>
                          <span className="mt-0.5 block text-[10px] font-normal opacity-60">{card.description}</span>
                        </div>

                        <div className="relative z-10 flex justify-end">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ background: isWhite ? "rgba(0,140,149,0.1)" : "rgba(255,255,255,0.2)" }}
                          >
                            <ArrowRight className="h-4 w-4" style={{ color: isWhite ? C.dna : "#ffffff" }} />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: CTA panel — request commercial proposal / callback */}
          <motion.div
            className="lg:w-[340px] flex-shrink-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.3}
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8" style={{ background: C.dark }}>
              {/* Decorative pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                }}
              />

              <div className="relative z-10">
                {/* Decorative line */}
                <div className="h-px w-12 mb-5" style={{ background: C.mint }} />

                <h3
                  className="text-xl font-bold leading-tight mb-2"
                  style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}
                >
                  Начните сотрудничество
                </h3>
                <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: C.dna, borderRadius: "4px" }}>
                  <Mail className="h-4 w-4" />
                  Запросить КП
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/kp:translate-x-0.5" />
                </Link>
                <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 border" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", borderRadius: "4px" }}>
                  <Phone className="h-4 w-4" />
                  Заказать звонок
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
