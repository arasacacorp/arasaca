"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { C } from "@/lib/colors";
import { fadeUp, vp } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/HomeShared";
import { ArrowRight } from "lucide-react";
import {
  keyIndustrySlugs,
  keyIndustryColors,
  displayedIndustries,
  otherIndustriesLocal,
} from "@/data/homepage";

export default function HomeIndustries() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-kept">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div>
            <SectionLabel>Отрасли</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Экспертиза в ключевых отраслях
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Российская экономика многогранна — от<br />высокотехнологичной энергетики до<br />цифровых платформ
          </p>
        </motion.div>

        {/* Industries grid — 12 cards, key ones highlighted */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 mb-10">
          {displayedIndustries.map((industry, index) => {
            const Icon = industry.icon;
            const isKey = keyIndustrySlugs.has(industry.slug);
            const keyBg = isKey ? keyIndustryColors[industry.slug] : undefined;

            return (
              <motion.div
                key={industry.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={index * 0.05}
              >
                <Link href={`/industries/${industry.slug}`} className="group block h-full">
                  <div
                    className={cn(
                      "relative flex flex-col h-full overflow-hidden rounded-lg p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg border",
                      isKey
                        ? "border-transparent"
                        : "border-transparent group-hover:border-gray-100 bg-[#f8f9fa] group-hover:bg-white",
                    )}
                    style={isKey ? { background: keyBg, color: "#ffffff" } : undefined}
                  >
                    {/* Accent left line */}
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-1"
                      style={{ background: isKey ? "rgba(255,255,255,0.3)" : C.dna }}
                    />

                    {/* "Ключевая отрасль" badge — only for key industries */}
                    {isKey && (
                      <div className="mb-3">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                          style={{
                            background: "rgba(255,255,255,0.2)",
                            color: "rgba(255,255,255,0.95)",
                            borderRadius: "2px",
                          }}
                        >
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                          Ключевая отрасль
                        </span>
                      </div>
                    )}

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                        style={{ background: isKey ? "rgba(255,255,255,0.15)" : `${C.dna}10` }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: isKey ? "rgba(255,255,255,0.9)" : C.dna }}
                        />
                      </div>
                      <h3
                        className="text-[15px] font-semibold leading-tight transition-colors group-hover:text-[#008C95]"
                        style={{ color: isKey ? "#ffffff" : C.textDark }}
                      >
                        {industry.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[12px] leading-relaxed flex-1"
                      style={{ color: isKey ? "rgba(255,255,255,0.7)" : C.textMuted }}
                    >
                      {industry.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex justify-end mt-4">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ background: isKey ? "rgba(255,255,255,0.2)" : `${C.dna}10` }}
                      >
                        <ArrowRight
                          className="h-3 w-3"
                          style={{ color: isKey ? "#ffffff" : C.dna }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Other industries — compact tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{ background: C.border }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
              Также работаем
            </span>
            <div className="h-px flex-1" style={{ background: C.border }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {otherIndustriesLocal.map((industry) => {
              const Icon = industry.icon
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:border-[#008C95] hover:text-[#008C95] hover:bg-[#008C95]/5"
                  style={{ borderColor: C.border, color: C.textMid }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {industry.name}
                </Link>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom: all industries link + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: C.dna }}
            >
              Вся отраслевая экспертиза
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div>
              <p className="text-[15px] font-medium" style={{ color: C.textDark }}>
                Не нашли свою отрасль?
              </p>
              <p className="text-[13px]" style={{ color: C.textMuted }}>
                Свяжитесь с нами — мы работаем с широким спектром отраслей
              </p>
            </div>
          </div>
          <Link
            href="/contacts"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white transition-colors flex-shrink-0"
            style={{ background: C.dna, borderRadius: "4px" }}
          >
            Связаться
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
