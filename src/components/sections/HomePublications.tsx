"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";
import { fadeUp, vp } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/HomeShared";
import { ArrowRight, Calendar } from "lucide-react";
import { publicationItems } from "@/data/homepage";

export default function HomePublications() {
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
            <SectionLabel>Медиа</SectionLabel>
            <h2 className="heading-section" style={{ color: C.textDark }}>
              Публикации и&nbsp;инсайты
            </h2>
          </div>
          <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
            Актуальные статьи, обзоры<br />и&nbsp;исследования от наших экспертов
          </p>
        </motion.div>

        {/* Publications cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {publicationItems.map((pub, index) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={index * 0.06}
            >
              <Link href={pub.href} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 md:p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 border border-transparent group-hover:border-gray-100">
                  {/* Accent left line */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1 transition-all duration-300"
                    style={{ background: pub.categoryColor }}
                  />
                  {/* Top row: category + date */}
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: `${pub.categoryColor}12`, color: pub.categoryColor, borderRadius: "2px" }}
                    >
                      {pub.category}
                    </span>
                    <span className="text-[11px] flex items-center gap-1" style={{ color: C.textMuted }}>
                      <Calendar className="h-3 w-3" />
                      {pub.date}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-[15px] font-semibold leading-tight mb-2 transition-colors duration-300 group-hover:text-[#008C95]" style={{ color: C.textDark }}>
                    {pub.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[12px] leading-relaxed flex-1" style={{ color: C.textMuted }}>
                    {pub.description}
                  </p>
                  {/* Arrow */}
                  <div className="flex justify-end mt-4">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ background: `${pub.categoryColor}10` }}
                    >
                      <ArrowRight className="h-3 w-3" style={{ color: pub.categoryColor }} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/press-center"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: C.dna }}
          >
            Все публикации
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
