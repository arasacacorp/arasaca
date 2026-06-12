/**
 * Central icon registry — maps string identifiers to Lucide icon components.
 *
 * Server components cannot pass React component functions as props to client
 * components (Next.js App Router limitation).  Instead, server components pass
 * string icon IDs, and client components resolve them through this registry.
 *
 * Usage (client component):
 *   import { getIcon, Icon } from "@/lib/iconRegistry";
 *   const SearchIcon = getIcon("Search");
 *   // or inline: <Icon name="Search" className="h-4 w-4" />
 */

import {
  Search,
  TrendingUp,
  BarChart3,
  Users,
  ClipboardList,
  Target,
  Cog,
  Shield,
  FileText,
  FileSearch,
  Microscope,
  HardHat,
  Rocket,
  Lightbulb,
  Zap,
  Map,
  Calculator,
  Settings,
  RefreshCw,
  Code,
  Cloud,
  Network,
  BarChart2,
  GraduationCap,
  BookOpen,
  Award,
  Palette,
  Megaphone,
  Newspaper,
  Heart,
  Briefcase,
  Wrench,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  Phone,
  Mail,
  Building2,
  CheckCircle,
  MapPin,
  Layers,
  Home,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Search,
  TrendingUp,
  BarChart3,
  Users,
  ClipboardList,
  Target,
  Cog,
  Shield,
  FileText,
  FileSearch,
  Microscope,
  HardHat,
  Rocket,
  Lightbulb,
  Zap,
  Map,
  Calculator,
  Settings,
  RefreshCw,
  Code,
  Cloud,
  Network,
  BarChart2,
  GraduationCap,
  BookOpen,
  Award,
  Palette,
  Megaphone,
  Newspaper,
  Heart,
  Briefcase,
  Wrench,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  Phone,
  Mail,
  Building2,
  CheckCircle,
  MapPin,
  Layers,
  Home,
  Compass,
};

/** Resolve a string icon ID to its Lucide component, with fallback. */
export function getIcon(name: string, fallback: LucideIcon = Search): LucideIcon {
  return registry[name] ?? fallback;
}

/** The full registry (for iterating / building icon maps). */
export const iconRegistry = registry;

/**
 * Stable wrapper component — avoids creating components during render.
 * Use in JSX instead of `const IconComponent = getIcon(...); <IconComponent />`.
 *
 * <Icon name="Search" className="h-4 w-4" />
 * <Icon name={direction.icon} fallback="Search" className="h-5 w-5" />
 */
export function Icon({
  name,
  fallback,
  ...props
}: { name: string; fallback?: string } & React.ComponentProps<LucideIcon>) {
  const Resolved = registry[name] ?? (fallback ? registry[fallback] : undefined) ?? Search;
  return <Resolved {...props} />;
}
