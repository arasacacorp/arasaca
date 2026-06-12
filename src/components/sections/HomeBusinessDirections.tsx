"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { C } from "@/lib/colors";
import { fadeUp, vp } from "@/lib/animations";
import { SectionLabel, resolveIcon } from "@/components/sections/HomeShared";
import { ArrowRight } from "lucide-react";
import { businessCards } from "@/data/homepage";

export default function HomeBusinessDirections() {
  return (
    <section className="relative bg-[#f1f2f4] py-20 md:py-28">
      <div className="container-kept">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Направления бизнеса</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Услуги и практики
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Комплексные решения для роста,<br />эффективности и трансформации бизнеса
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {businessCards.map((card, index) => {
            const isLarge = card.size === "large"
            const isDark = card.bg === C.dark || card.bg === C.dna || card.bg === C.orange || card.bg === C.mintDark
            const CardIcon = resolveIcon(card.icon);

            return (
              <motion.div
                key={card.title}
                className={cn(
                  isLarge && "sm:col-span-2",
                )}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.06}
              >
                <Link href={card.href} className="group block h-full">
                  <motion.div
                    className={cn(
                      "relative flex flex-col justify-between overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg",
                      isLarge ? "min-h-[220px]" : "min-h-[170px]",
                    )}
                    style={{ background: card.bg, color: card.textColor }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  >
                    {/* Decorative patterns */}
                    {card.bg === C.dark && (
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)`,
                        }}
                      />
                    )}
                    {card.bg === C.white && (
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`,
                          backgroundSize: "14px 14px",
                        }}
                      />
                    )}

                    {/* Accent line on left */}
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-1"
                      style={{ background: isDark ? "rgba(255,255,255,0.25)" : C.dna }}
                    />

                    {/* Highlight dot for special cards */}
                    {"highlight" in card && card.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block h-2 w-2 rounded-full" style={{ background: C.mint }} />
                      </div>
                    )}

                    {/* Top: Icon + Title */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300"
                          style={{ background: isDark ? "rgba(255,255,255,0.1)" : `${C.dna}10` }}
                        >
                          <CardIcon className="h-4.5 w-4.5" style={{ color: isDark ? "rgba(255,255,255,0.8)" : C.dna }} />
                        </div>
                        <span className={cn(
                          "font-semibold leading-tight",
                          isLarge ? "text-lg" : "text-[15px]",
                        )}>
                          {card.title}
                        </span>
                      </div>
                      <p className={cn(
                        "leading-relaxed opacity-70",
                        isLarge ? "text-[13px] max-w-md" : "text-[12px]",
                      )}>
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom: Arrow */}
                    <div className="relative z-10 flex justify-end mt-4">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ background: isDark ? "rgba(255,255,255,0.15)" : `${C.dna}10` }}
                      >
                        <ArrowRight className="h-3.5 w-3.5" style={{ color: isDark ? "#ffffff" : C.dna }} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
