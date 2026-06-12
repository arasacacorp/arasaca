"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";
import { fadeIn } from "@/lib/animations";
import { vp } from "@/lib/animations";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  Layers,
  Briefcase,
  Map,
  Clock,
  Compass,
  Cpu,
  BarChart3,
  Globe,
  Heart,
  Target,
  Wrench,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  FlaskConical,
  Database,
  Workflow,
  Plug,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Section label component ─── */
export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.span
      className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
      style={{ color: light ? C.mint : C.dna }}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
    >
      {children}
    </motion.span>
  );
}

/* ─── Re-export vp for convenience ─── */
export { vp } from "@/lib/animations";

/* ─── Icon resolver map — string → Lucide icon component ─── */
export const iconMap: Record<string, LucideIcon> = {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  Layers,
  Briefcase,
  Map,
  Clock,
  Compass,
  Cpu,
  BarChart3,
  Globe,
  Heart,
  Target,
  Wrench,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  FlaskConical,
  Database,
  Workflow,
  Plug,
  Newspaper,
};

/** Resolve an icon name string to its Lucide component, with fallback */
export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? ArrowRight;
}
