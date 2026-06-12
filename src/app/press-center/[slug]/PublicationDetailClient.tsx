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
  ArrowRight,
  Mail,
  Phone,
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
      {label}
    </span>
  );
}

/* ─── Main client component ─── */
export default function PublicationDetailClient({
  publication,
  latestPublications,
}: {
  publication: Publication;
  latestPublications: Publication[];
}) {
  const { title, type, date, description, author, readTime, image, content, slug } = publication;
  const sectionHref = typeHrefs[type];

  // Filter out current publication from latest list
  const otherPublications = latestPublications.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ── Hero / Breadcrumbs ── */}
      <section
        className="relative overflow-hidden pt-16 lg:pt-[120px]"
        style={{ background: C.dark }}
      >
        {/* Decorative overlays — same as ServiceSlugPageTemplate */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
          }}
        />
        <div
          className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]"
          style={{ background: "rgba(224,78,57,0.10)" }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,140,149,0.08)" }}
        />

        <div className="container-kept relative z-10 pt-6 md:pt-10 lg:pt-12 pb-10 lg:pb-14">
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

      {/* ── Content + Sidebar ── */}
      <section className="py-12 lg:py-16 bg-white flex-1">
        <div className="container-kept">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* ── Main content (~65%) ── */}
            <div className="lg:w-[65%] lg:flex-shrink-0">
              {content && content.length > 0 ? (
                <div className="space-y-5 leading-relaxed" style={{ color: C.textMid }}>
                  {content.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={vp}
                      custom={i}
                      className="text-sm lg:text-[15px]"
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
                  <p className="text-base" style={{ color: C.textMuted }}>
                    Полный текст публикации будет доступен позже
                  </p>
                </motion.div>
              )}

              {/* Back to press-center */}
              <div
                className="pt-8 mt-8"
                style={{ borderTop: `1px solid ${C.border}` }}
              >
                <Link
                  href={sectionHref}
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:underline group text-sm"
                  style={{ color: C.dna }}
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Вернуться в Пресс-центр
                </Link>
              </div>
            </div>

            {/* ── Sidebar (~35%) ── */}
            <aside className="lg:w-[35%]">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* ── Запрос в редакцию ── */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={0}
                  className="relative overflow-hidden rounded-xl p-6 lg:p-7"
                  style={{ background: C.dark }}
                >
                  {/* Decorative overlays */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full blur-[80px]"
                    style={{ background: "rgba(0,140,149,0.12)" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(0,140,149,0.2)" }}
                      >
                        <Mail className="w-4 h-4" style={{ color: C.mint }} />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: C.mint }}>
                        Запрос в редакцию
                      </h3>
                    </div>
                    <p
                      className="text-[13px] leading-relaxed mb-5"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      По вопросам сотрудничества, комментариев для СМИ и пресс-запросов — свяжитесь с нашей редакцией.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="mailto:press@arasaca.ru"
                        className="flex items-center gap-2 text-[13px] font-medium transition-colors hover:underline"
                        style={{ color: C.white }}
                      >
                        <Mail className="w-3.5 h-3.5" style={{ color: C.mint }} />
                        press@arasaca.ru
                      </Link>
                      <Link
                        href="tel:+74951234567"
                        className="flex items-center gap-2 text-[13px] font-medium transition-colors hover:underline"
                        style={{ color: C.white }}
                      >
                        <Phone className="w-3.5 h-3.5" style={{ color: C.mint }} />
                        +7 (495) 123-45-67
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* ── Последние новости ── */}
                {otherPublications.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    custom={1}
                  >
                    <h3
                      className="text-xs font-bold uppercase tracking-wider mb-4"
                      style={{ color: C.textMuted }}
                    >
                      Последние публикации
                    </h3>
                    <div className="space-y-0 border rounded-xl overflow-hidden" style={{ borderColor: C.border }}>
                      {otherPublications.map((pub, index) => (
                        <Link
                          key={pub.slug}
                          href={`/press-center/${pub.slug}`}
                          className="flex items-start gap-3 p-4 transition-colors group"
                          style={{
                            borderBottom: index < otherPublications.length - 1 ? `1px solid ${C.border}` : "none",
                            background: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = C.muted;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[13px] font-semibold leading-snug mb-1.5 line-clamp-2 transition-colors"
                              style={{ color: C.textDark }}
                            >
                              {pub.title}
                            </p>
                            <div className="flex items-center gap-2 text-[11px]" style={{ color: C.textMuted }}>
                              <Calendar className="w-3 h-3" />
                              <span>{pub.date}</span>
                            </div>
                          </div>
                          <ArrowRight
                            className="w-4 h-4 flex-shrink-0 mt-0.5 transition-all"
                            style={{ color: C.border }}
                          />
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/press-center"
                      className="flex items-center gap-1.5 mt-4 text-[13px] font-medium transition-colors hover:underline"
                      style={{ color: C.dna }}
                    >
                      Все публикации
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
