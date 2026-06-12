"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Calendar,
  User,
  Clock,
  Newspaper,
  BookOpen,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import { C } from "@/lib/colors";
import type { Publication, PublicationType } from "@/data/publications";
import { typeLabels, typeHrefs } from "@/data/publications";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12 },
  }),
};

const vp = { once: true, amount: 0.2 as const };

/* ─── Type icon mapping ─── */
const typeIcons: Record<PublicationType, React.ReactNode> = {
  news: <Newspaper className="w-4 h-4" />,
  article: <BookOpen className="w-4 h-4" />,
  insight: <Lightbulb className="w-4 h-4" />,
};

/* ─── Badge component ─── */
function TypeBadge({ type }: { type: PublicationType }) {
  const label = typeLabels[type];
  const bgColor =
    type === "news"
      ? C.orangeBg
      : type === "article"
        ? "#e8f5f3"
        : "#fef3c7";
  const textColor =
    type === "news"
      ? C.orange
      : type === "article"
        ? C.dna
        : "#92400e";

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {typeIcons[type]}
      {label.slice(0, -1)} {/* Remove trailing 'и'/'ы' for singular: Новости→Новость, Статьи→Статья, Инсайты→Инсайт */}
    </span>
  );
}

/* ─── Main client component ─── */
export default function PublicationDetailClient({
  publication,
}: {
  publication: Publication;
}) {
  const { title, type, date, description, author, readTime, image, content, slug } = publication;
  const sectionHref = typeHrefs[type];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ── Hero / Breadcrumbs ── */}
      <section
        className="relative pt-16 lg:pt-[120px] pb-10"
        style={{ background: `linear-gradient(to bottom, ${C.dark}, #004a59)` }}
      >
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-2 text-sm mb-8 flex-wrap"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Link href="/" className="hover:underline" style={{ color: "rgba(255,255,255,0.5)" }}>
              Главная
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
            <Link href="/press-center" className="hover:underline" style={{ color: "rgba(255,255,255,0.5)" }}>
              Пресс-центр
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
            <span className="truncate max-w-[200px] sm:max-w-none" style={{ color: C.mint }}>
              {title}
            </span>
          </motion.nav>

          {/* Meta row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 mb-4 text-sm flex-wrap"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <TypeBadge type={type} />
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" style={{ color: C.mint }} />
              {date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-3xl lg:text-[2.5rem] font-bold leading-tight mb-4 max-w-4xl"
            style={{ color: C.white }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg leading-relaxed max-w-3xl"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {description}
          </motion.p>

          {/* Author & Read Time */}
          {(author || readTime) && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex items-center gap-4 mt-6 text-sm flex-wrap"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {author && (
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" style={{ color: C.mint }} />
                  {author}
                </span>
              )}
              {readTime && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: C.mint }} />
                  {readTime}
                </span>
              )}
            </motion.div>
          )}
        </div>

        {/* Decorative triangle */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[40px]"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,40 L600,0 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Hero Image ── */}
      {image && (
        <section className="py-8 lg:py-12 bg-white">
          <div className="container-kept">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0}
              className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Content ── */}
      <section className="py-12 lg:py-16 bg-white flex-1">
        <div className="container-kept max-w-3xl">
          {content && content.length > 0 ? (
            <div className="space-y-6 leading-relaxed" style={{ color: C.textMid }}>
              {content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={i}
                  className="text-base lg:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          ) : (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="text-center py-16"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: C.light }}
              >
                <BookOpen className="w-8 h-8" style={{ color: C.dna }} />
              </div>
              <p className="text-lg" style={{ color: C.textMuted }}>
                Полный текст публикации будет доступен позже
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Back to section ── */}
      <section className="pb-16 bg-white">
        <div className="container-kept max-w-3xl">
          <div
            className="pt-8"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            <Link
              href={sectionHref}
              className="inline-flex items-center gap-2 font-medium transition-colors hover:underline group"
              style={{ color: C.dna }}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Вернуться в Пресс-центр
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
