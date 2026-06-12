"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight, ArrowRight, CheckCircle2, Atom, Building2, Map, Laptop, Factory, Shield, Fuel, Cog, Plane, Leaf, Zap, Truck, Microscope, GraduationCap, ShoppingCart, Waves, Radio, FlaskConical, TreePine, Plus, Minus, Target, Users, Award, Mail, Phone, Briefcase, Layers, Newspaper, BarChart3 } from "lucide-react";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

import { industryPageContent } from "@/data/industryPages";
import { servicesData, ServiceCategory } from "@/data/servicesData";
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

// Industry-specific animation components
const IndustryAnimations: Record<string, React.FC<{ accentColor: string }>> = {
  nuclear: ({ accentColor }) => (
    <div className="relative w-80 h-80">
      <motion.div
        className="absolute inset-0 border-2 border-white/10 rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="absolute inset-8 border border-white/20 rounded-full" />
      <div className="absolute inset-16 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
        <Atom className="w-24 h-24" style={{ color: accentColor }} />
      </div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}` }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white/60 rounded-full" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>
    </div>
  ),

  construction: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <div className="relative">
        <motion.div
          animate={{ height: [200, 220, 200] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 border-l-4 border-r-4 rounded-t-lg"
          style={{ borderColor: accentColor }}
        >
          <div className="grid grid-cols-3 gap-2 p-4">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="w-4 h-4 bg-white/30"
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-16 -right-20 w-40 h-1 origin-right"
          style={{ backgroundColor: accentColor }}
        >
          <div className="absolute right-0 w-1 h-24" style={{ backgroundColor: accentColor }} />
        </motion.div>
      </div>
    </div>
  ),

  "oil-gas": ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative"
      >
        <div
          className="w-40 h-48 rounded-full"
          style={{
            background: `linear-gradient(180deg, ${accentColor}40, ${accentColor}20)`,
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%"
          }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity
            }}
            className="absolute rounded-full w-4 h-4"
            style={{
              backgroundColor: accentColor,
              left: `${20 + i * 15}%`,
              bottom: "20%"
            }}
          />
        ))}
      </motion.div>
    </div>
  ),

  it: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-8xl font-mono"
        style={{ color: accentColor }}
      >
        {"</>"}
      </motion.div>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -200],
            opacity: [0, 1, 0],
            x: Math.random() * 20 - 10
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.4,
            repeat: Infinity
          }}
          className="absolute text-xs font-mono opacity-50"
          style={{ color: accentColor, left: `${10 + i * 8}%`, bottom: "10%" }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}
    </div>
  ),

  manufacturing: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <Cog className="w-32 h-32" style={{ color: accentColor }} />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -right-8 -top-8"
      >
        <Cog className="w-20 h-20 text-white/60" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -left-12 top-4"
      >
        <Cog className="w-16 h-16 text-white/40" />
      </motion.div>
    </div>
  ),

  defense: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Shield className="w-40 h-40" style={{ color: accentColor }} />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-72 h-1 origin-left"
          style={{
            background: `linear-gradient(90deg, ${accentColor}, transparent)`
          }}
        />
      </motion.div>
    </div>
  ),

  shipbuilding: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center overflow-hidden">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20"
      >
        <Waves className="w-64 h-20" style={{ color: accentColor }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -5, 0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="relative z-10"
      >
        <div className="w-40 h-20 bg-white/20 rounded-b-full" />
        <div className="w-20 h-32 bg-white/30 mx-auto -mt-16" />
      </motion.div>
    </div>
  ),

  agro: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ scaleY: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative"
      >
        <Leaf className="w-32 h-32" style={{ color: accentColor }} />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, -100],
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
              rotate: [0, 180, 360],
              opacity: [1, 0.5, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 1,
              repeat: Infinity
            }}
            className="absolute"
            style={{ left: `${i * 30 - 45}px`, top: "50%" }}
          >
            <Leaf className="w-6 h-6" style={{ color: accentColor }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  ),

  aerospace: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ x: [-100, 100], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      >
        <Plane className="w-20 h-20 -rotate-45" style={{ color: accentColor }} />
      </motion.div>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`
          }}
        />
      ))}
    </div>
  ),

  energy: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Zap className="w-32 h-32" style={{ color: accentColor }} />
      </motion.div>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
          className="absolute w-20 h-20 rounded-full border-2"
          style={{ borderColor: accentColor }}
        />
      ))}
    </div>
  ),

  logistics: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Truck className="w-24 h-24" style={{ color: accentColor }} />
      </motion.div>
      <motion.div
        animate={{ strokeDashoffset: [0, -100] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-full h-full"
      >
        <svg className="w-full h-full" viewBox="0 0 320 320">
          <path
            d="M0,160 Q160,100 320,160"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeDasharray="10,10"
            opacity="0.3"
          />
        </svg>
      </motion.div>
    </div>
  ),

  healthcare: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative"
      >
        <div
          className="w-12 h-32 rounded-lg"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="w-32 h-12 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>
      <motion.div
        animate={{ strokeDashoffset: [0, -200] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute"
      >
        <svg width="200" height="60" viewBox="0 0 200 60">
          <path
            d="M0,30 L40,30 L50,10 L60,50 L70,30 L100,30 L110,10 L120,50 L130,30 L200,30"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeDasharray="200"
          />
        </svg>
      </motion.div>
    </div>
  ),

  education: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ rotateY: [0, 15, 0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <GraduationCap className="w-32 h-32" style={{ color: accentColor }} />
      </motion.div>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -80],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: accentColor,
            left: `${20 + i * 12}%`
          }}
        />
      ))}
    </div>
  ),

  retail: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <ShoppingCart className="w-28 h-28" style={{ color: accentColor }} />
      </motion.div>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity
          }}
          className="absolute text-2xl font-bold"
          style={{
            color: accentColor,
            left: `${15 + i * 25}%`,
            top: `${20 + (i % 2) * 50}%`
          }}
        >
          %
        </motion.div>
      ))}
    </div>
  ),

  telecom: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <Radio className="w-24 h-24 relative z-10" style={{ color: accentColor }} />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          className="absolute rounded-full border-2"
          style={{
            borderColor: accentColor,
            width: `${60 + i * 40}px`,
            height: `${60 + i * 40}px`
          }}
        />
      ))}
    </div>
  ),

  chemicals: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <FlaskConical className="w-28 h-28" style={{ color: accentColor }} />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -150],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: accentColor,
            left: `${35 + (i % 4) * 10}%`,
            bottom: "20%"
          }}
        />
      ))}
    </div>
  ),

  forestry: ({ accentColor }) => (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="flex items-end gap-4"
      >
        <TreePine className="w-24 h-32" style={{ color: accentColor }} />
        <TreePine className="w-32 h-40 text-white/60" />
        <TreePine className="w-20 h-28" style={{ color: accentColor, opacity: 0.7 }} />
      </motion.div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, 200],
            x: [0, 50, -50, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5,
            delay: i * 0.8,
            repeat: Infinity
          }}
          className="absolute"
          style={{ left: `${20 + i * 15}%`, top: "10%" }}
        >
          <Leaf className="w-4 h-4" style={{ color: accentColor }} />
        </motion.div>
      ))}
    </div>
  ),
};

// Default animation for industries without specific one
const DefaultAnimation: React.FC<{ accentColor: string }> = ({ accentColor }) => (
  <div className="relative w-80 h-80 flex items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="relative"
    >
      <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>
    </motion.div>
  </div>
);

// Accordion Item Component — matches /services/consulting/[slug] style
function AccordionItem({
  service,
  isOpen,
  onToggle,
  index
}: {
  service: ServiceCategory;
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
      style={{ borderColor: "#f0f0f0" }}
    >
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between py-4 px-5 md:px-6 text-left group transition-colors",
          isOpen ? "bg-white" : "hover:bg-white"
        )}
      >
        <span
          className={cn(
            "text-[14px] font-medium transition-colors",
            isOpen ? "text-[#008C95]" : "text-gray-900 group-hover:text-[#008C95]"
          )}
        >
          {service.name}
        </span>
        <div
          className={cn(
            "w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-md transition-all",
            isOpen ? "bg-[#e8f5f3]" : "border group-hover:border-[#008C95]"
          )}
          style={{ borderColor: isOpen ? undefined : "#e5e7eb" }}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-[#008C95]" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#008C95] transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-5 md:px-6 pt-0">
              {/* Description with left accent bar */}
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-0.5 rounded-full" style={{ background: "#008C95" }} />
                <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>
                  {service.description}
                </p>
              </div>

              {/* Sub-services list */}
              <ul className="space-y-2.5 ml-[calc(0.125rem+1rem)]">
                {service.subServices.map((subService, idx) => (
                  <motion.li
                    key={subService.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    <Link
                      href={subService.href}
                      className="flex items-center gap-2.5 hover:text-[#008C95] transition-colors group"
                      style={{ color: "#6b7280" }}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#008C95" }} />
                      <span className="text-[13px] group-hover:translate-x-0.5 transition-transform">
                        {subService.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Link to main service page */}
              <div className="ml-[calc(0.125rem+1rem)] mt-4">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-[#008C95] font-medium text-[12px] hover:gap-2.5 transition-all"
                >
                  Подробнее о направлении
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industries.find((i) => i.slug === slug);
  const pageContent = industryPageContent[slug];
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

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
                <Link href="/industries" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Отрасли
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
                <span className="text-[12px] font-medium" style={{ color: C.mint }}>{industry.name}</span>
              </motion.nav>

              {/* Badge — Ключевая отрасль */}
              {industry.isCore && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
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
                </motion.div>
              )}

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
                {industry.name}
              </motion.h1>

              {/* Tagline */}
              {pageContent?.tagline && (
                <motion.p
                  className="mb-2 max-w-md text-[15px] font-medium leading-relaxed"
                  style={{ color: C.mint }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  {pageContent.tagline}
                </motion.p>
              )}

              {/* Description */}
              <motion.p
                className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {industry.description}
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
                { number: String(servicesData.length), label: "направлений", icon: Briefcase, accent: C.dna },
                { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
                { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
                { number: "500+", label: "проектов", icon: Building2, accent: C.dna },
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

      {/* Intro Section - White background with industry description */}
      {pageContent?.intro && pageContent.intro.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-kept">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h2 className="heading-section text-gray-900 mb-6">
                Об отрасли
              </h2>
              {pageContent.intro.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-[14px] font-normal leading-relaxed text-gray-600 mb-4 last:mb-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Services Section — matches /services/consulting/[slug] style */}
      <section className="py-20 md:py-28" style={{ background: "#f1f2f4" }}>
        <div className="container-kept">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            {/* Left column - Sticky title */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#008C95" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Услуги
              </motion.span>
              <h2 className="heading-section mb-4" style={{ color: "#1a1a1a" }}>
                Услуги направления
              </h2>
              <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>
                Полный перечень услуг для компаний в отрасли {industry.name.toLowerCase()}
              </p>
            </div>

            {/* Right column - Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden border"
              style={{ background: "#ffffff", borderColor: "#f0f0f0" }}
            >
              {servicesData.map((service, index) => (
                <AccordionItem
                  key={service.id}
                  service={service}
                  isOpen={openAccordion === index}
                  onToggle={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Преимущества — dark background, matches consulting methodology style */}
      <section className="py-20 md:py-28" style={{ background: "#00313C" }}>
        <div className="container-kept">
          {/* Section header */}
          <motion.div
            className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#77e2c3" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Преимущества
              </motion.span>
              <h2 className="heading-section" style={{ color: "#ffffff" }}>
                Почему мы
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-sm lg:text-right" style={{ color: "rgba(255,255,255,0.5)" }}>
              Глубокая экспертиза в отрасли {industry.name.toLowerCase()} и подтверждённый практический результат — от стратегии до реализации проектов.
            </p>
          </motion.div>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: "Отраслевая экспертиза",
                description: "Глубокое понимание специфики, вызовов и трендов отрасли " + industry.name.toLowerCase(),
                step: "01",
              },
              {
                icon: Users,
                title: "Команда экспертов",
                description: "Специалисты с реальным опытом работы в ведущих компаниях отрасли",
                step: "02",
              },
              {
                icon: Award,
                title: "Доказанный результат",
                description: "Успешно реализованные проекты и долгосрочные партнёрства с лидерами рынка",
                step: "03",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div
                  className="relative overflow-hidden rounded-lg p-6 md:p-8 h-full"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg mb-5"
                      style={{ background: "rgba(0,140,149,0.15)" }}
                    >
                      <item.icon className="h-6 w-6" style={{ color: "#008C95" }} />
                    </div>

                    {/* Step label */}
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-[0.2em] mb-2"
                      style={{ color: "#77e2c3" }}
                    >
                      {item.step}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Навигация / Полезные ссылки — matches /industries listing style */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-kept">
          {/* Section header */}
          <motion.div
            className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#008C95" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Навигация
              </motion.span>
              <h2 className="heading-section" style={{ color: "#1a1a1a" }}>
                Полезные ссылки
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: "#6b7280" }}>
              Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании
            </p>
          </motion.div>

          {/* Cards + CTA row */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            {/* Left: 6 navigation cards */}
            <div className="flex-1 flex">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 w-full h-full auto-rows-fr">
                {[
                  { title: "О компании", description: "Миссия, ценности, команда", bg: C.dark, textColor: C.white, href: "/about", icon: Building2 },
                  { title: "Услуги", description: "9 направлений консалтинга", bg: C.orange, textColor: C.white, href: "/services", icon: Briefcase },
                  { title: "Решения", description: "Цифровые продукты и платформы", bg: "#ffffff", textColor: "#1a1a1a", href: "/solutions/master-planning", icon: Layers },
                  { title: "Пресс-центр", description: "Новости, пресс-релизы, СМИ", bg: C.dna, textColor: C.white, href: "/press-center", icon: Newspaper },
                  { title: "Карьера", description: "Присоединяйтесь к команде", bg: C.mintDark, textColor: C.white, href: "/career", icon: Users },
                  { title: "Контакты", description: "Свяжитесь с нами", bg: C.dark, textColor: C.white, href: "/contacts", icon: Mail },
                ].map((card, index) => {
                  const isWhite = card.bg === "#ffffff";
                  return (
                    <motion.div
                      key={card.title}
                      className="flex"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      <Link href={card.href} className="group block h-full w-full">
                        <motion.div
                          className={cn(
                            "relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full",
                            isWhite && "border shadow-sm group-hover:shadow-md",
                          )}
                          style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? "#e5e7eb" : undefined, minHeight: "130px" }}
                          whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        >
                          {card.bg === "#00313C" && (
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
                                backgroundImage: `radial-gradient(circle, #008C95 1px, transparent 1px)`,
                                backgroundSize: "12px 12px",
                              }}
                            />
                          )}

                          {/* Colored accent bar on left */}
                          <div
                            className="pointer-events-none absolute left-0 top-0 h-full w-1"
                            style={{ background: isWhite ? "#008C95" : "rgba(255,255,255,0.4)" }}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2">
                              {card.icon && (
                                <card.icon className="h-4 w-4 opacity-60" />
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
                              <ArrowRight className="h-4 w-4" style={{ color: isWhite ? "#008C95" : "#ffffff" }} />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: CTA panel */}
            <motion.div
              className="lg:w-[340px] flex-shrink-0"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8" style={{ background: "#00313C" }}>
                {/* Decorative pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Decorative line */}
                  <div className="h-px w-12 mb-5" style={{ background: "#77e2c3" }} />

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
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: "#008C95" }}>
                    Запросить КП
                    <ArrowRight className="w-3.5 h-3.5 group-hover/kp:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 border" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.15)" }}>
                    Обратный звонок
                    <Phone className="w-3.5 h-3.5 group-hover/cb:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
