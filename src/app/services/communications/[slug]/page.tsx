"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Palette,
  Megaphone,
  Newspaper,
  Heart,
  Plus,
  Minus,
  Phone,
  Mail,
  Briefcase,
  Building2,
  Users,
  Layers,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { communicationsSubDirections, getCommunicationsSubDirectionBySlug } from "@/data/communicationsServices";
import { C } from "@/lib/colors";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Megaphone,
  Newspaper,
  Heart,
};

/* ─── Quick Links data ─── */
const quickLinks = [
  { title: "О компании", description: "Миссия, ценности, команда", bg: C.dark, textColor: C.white, href: "/about", icon: Building2 },
  { title: "Услуги", description: "9 направлений консалтинга", bg: C.orange, textColor: C.white, href: "/services", icon: Briefcase },
  { title: "Решения", description: "Цифровые продукты и платформы", bg: "#ffffff", textColor: "#1a1a1a", href: "/solutions/master-planning", icon: Layers },
  { title: "Пресс-центр", description: "Новости, пресс-релизы, СМИ", bg: C.dna, textColor: C.white, href: "/press-center", icon: Newspaper },
  { title: "Карьера", description: "Присоединяйтесь к команде", bg: C.mintDark, textColor: C.white, href: "/career", icon: Users },
  { title: "Контакты", description: "Свяжитесь с нами", bg: C.dark, textColor: C.white, href: "/contacts", icon: Mail },
];

const vp = { once: true, amount: 0.2 as const };

// Accordion Item Component
function ServiceAccordionItem({
  service,
  isOpen,
  onToggle,
  index,
}: {
  service: { name: string; description: string; isTop?: boolean };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="border-b last:border-b-0"
      style={{ borderColor: C.borderLight }}
    >
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between py-4 px-5 md:px-6 text-left group transition-colors",
          isOpen ? "bg-white" : "hover:bg-white"
        )}
      >
        <div className="flex items-center gap-3 pr-4">
          {service.isTop && (
            <span className="inline-block h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: C.orange }} />
          )}
          <span
            className={cn(
              "text-[14px] font-medium transition-colors",
              isOpen ? "text-[#008C95]" : "text-gray-900 group-hover:text-[#008C95]"
            )}
          >
            {service.name}
          </span>
        </div>
        <div
          className={cn(
            "w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-md transition-all",
            isOpen ? "bg-[#e8f5f3]" : "border group-hover:border-[#008C95]"
          )}
          style={{ borderColor: isOpen ? undefined : C.border }}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-[#008C95]" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#008C95] transition-colors" />
          )}
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pb-5 px-5 md:px-6 pt-0">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-0.5 rounded-full" style={{ background: C.dna }} />
              <p className="text-[13px] leading-relaxed" style={{ color: C.textMuted }}>
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CommunicationsSubDirectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const direction = getCommunicationsSubDirectionBySlug(slug);
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!direction) {
    notFound();
  }

  const IconComponent = iconMap[direction.icon] || Megaphone;
  const otherDirections = communicationsSubDirections.filter((d) => d.slug !== slug);

  const scroll = (scrollDirection: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: scrollDirection === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
            {/* ═══════════════════════════════════════════════════
          HERO — Dark background with diagonal lines + stats grid
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
        {/* Decorative diagonal lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
          }}
        />
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]"
          style={{ background: "rgba(224,78,57,0.10)" }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,140,149,0.08)" }}
        />

        <div className="container-kept relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
            {/* LEFT: Label + heading + text + buttons */}
            <motion.div
              className="flex-1"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              {/* Breadcrumb */}
              <motion.nav
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Главная
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <Link href="/services" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Услуги
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <Link href="/services/communications" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Коммуникации и бренд
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>{direction.shortTitle}</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(0,140,149,0.15)",
                    color: C.mint,
                    borderRadius: "2px",
                  }}
                >
                  <IconComponent className="h-3 w-3" />
                  Направление коммуникаций
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="mb-4 max-w-lg"
                style={{
                  fontFamily: "var(--font-russo)",
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: C.white,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {direction.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {direction.description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link href="/feedback?type=proposals" className="sm:auto">
                  <motion.span
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white w-full sm:w-auto"
                    style={{ background: C.dna, borderRadius: "4px" }}
                    whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
                  >
                    Запросить КП
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <Link href="/feedback?type=callback" className="sm:auto">
                  <motion.span
                    className="inline-flex items-center justify-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em] w-full sm:w-auto"
                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
                    whileHover={{
                      borderColor: C.mint,
                      color: C.mint,
                      transition: { duration: 0.3 },
                    }}
                  >
                    Заказать звонок
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT: Stats — 4 cards in 2x2 grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-[420px] lg:flex-shrink-0 lg:gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {[
                { number: String(direction.services.length), label: "услуг", icon: ClipboardList, accent: C.dna },
                { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
                { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
                { number: "500+", label: "проектов", icon: Briefcase, accent: C.dna },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative overflow-hidden rounded-lg p-5 md:p-6"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  custom={0.4 + index * 0.08}
                >
                  {/* Top accent */}
                  <div
                    className="absolute left-0 top-0 h-0.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}50)` }}
                  />
                  <stat.icon className="mb-3 h-5 w-5" style={{ color: stat.accent }} />
                  <div
                    className="text-2xl font-bold leading-none md:text-3xl"
                    style={{ fontFamily: "var(--font-russo)", color: C.white }}
                  >
                    {stat.number}
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Accordion
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
        <div className="container-kept">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <motion.span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Услуги</motion.span>
              <h2 className="heading-section mb-4" style={{ color: C.textDark }}>Услуги направления</h2>
              <p className="text-[13px] leading-relaxed" style={{ color: C.textMuted }}>Полный перечень услуг в рамках {direction.shortTitle.toLowerCase()}</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-lg overflow-hidden border" style={{ background: C.white, borderColor: C.borderLight }}>
              {direction.services.map((service, index) => (
                <ServiceAccordionItem key={index} service={service} isOpen={openAccordion === index} onToggle={() => setOpenAccordion(openAccordion === index ? -1 : index)} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OTHER DIRECTIONS — Dark carousel
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: C.dark }}>
        <div className="container-kept relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider" style={{ background: "rgba(0,140,149,0.15)", color: C.mint, borderRadius: "2px" }}>Направления</span>
                <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, color: C.white }}>Другие направления коммуникаций</h2>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => scroll("left")} className="w-10 h-10 flex items-center justify-center rounded-md border transition-all" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.dna; e.currentTarget.style.background = C.dna; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }} aria-label="Прокрутить влево"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => scroll("right")} className="w-10 h-10 flex items-center justify-center rounded-md border transition-all" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.dna; e.currentTarget.style.background = C.dna; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }} aria-label="Прокрутить вправо"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
              {otherDirections.map((relDirection) => {
                const RelIcon = iconMap[relDirection.icon] || Megaphone;
                return (
                  <motion.div key={relDirection.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex-shrink-0 w-[280px]">
                    <Link href={`/services/communications/${relDirection.slug}`} className="group block h-full rounded-xl p-6 transition-all duration-300" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(0,140,149,0.4)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                      <div className="w-11 h-11 flex items-center justify-center rounded-lg mb-4 transition-colors duration-300" style={{ background: "rgba(0,140,149,0.15)" }}><RelIcon className="w-5 h-5" style={{ color: C.dna }} /></div>
                      <h3 className="mb-2 text-[15px] font-semibold transition-colors duration-300" style={{ color: C.white }}>{relDirection.shortTitle}</h3>
                      <p className="text-[13px] leading-relaxed line-clamp-2" style={{ color: "rgba(255,255,255,0.5)" }}>{relDirection.description}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-[12px] font-medium transition-all duration-300" style={{ color: C.dna }}>
                        Подробнее
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10">
              <Link href="/services/communications" className="inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-3" style={{ color: C.mint }}>
                Все направления коммуникаций и бренда
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK LINKS
          ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-kept">
          <motion.div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <div>
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>Навигация</span>
              <h2 className="heading-section" style={{ color: C.textDark }}>Полезные ссылки</h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании</p>
          </motion.div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                {quickLinks.map((card, index) => {
                  const isWhite = card.bg === C.white;
                  return (
                    <motion.div key={card.title} className="flex" initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}>
                      <Link href={card.href} className="group block h-full w-full">
                        <motion.div
                          className={cn("relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full", isWhite && "border shadow-sm group-hover:shadow-md")}
                          style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined, minHeight: "130px" }}
                          whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        >
                          {card.bg === C.dark && <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.3) 75%)`, backgroundSize: "20px 20px" }} />}
                          {isWhite && <div className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`, backgroundSize: "12px 12px" }} />}
                          <div className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }} />
                          <div className="relative z-10">
                            <div className="flex items-center gap-2">{card.icon && <card.icon className="h-4 w-4 opacity-60" />}<span className="block text-sm font-semibold md:text-base">{card.title}</span></div>
                            <span className="mt-0.5 block text-[10px] font-normal opacity-60">{card.description}</span>
                          </div>
                          <div className="relative z-10 flex justify-end">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ background: isWhite ? "rgba(0,140,149,0.1)" : "rgba(255,255,255,0.2)" }}>
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

            <motion.div className="lg:w-[340px] flex-shrink-0" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8" style={{ background: C.dark }}>
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)` }} />
                <div className="relative z-10">
                  <div className="h-px w-12 mb-5" style={{ background: C.mint }} />
                  <h3 className="text-xl font-bold leading-tight mb-2" style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}>Начните сотрудничество</h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.</p>
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: C.dna }}><Mail className="h-4 w-4" />Запросить КП</Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider border transition-all duration-300" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}><Phone className="h-4 w-4" />Обратный звонок</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
