/**
 * Общие статистические данные компании.
 *
 * Использование:  import { COMPANY_STATS_SERVICE, COMPANY_STATS_LUCIDE } from "@/data/companyStats"
 *
 * COMPANY_STATS_SERVICE — для ServicePageTemplate (icon: string)
 * COMPANY_STATS_LUCIDE  — для страниц с Lucide-компонентами (icon: LucideIcon)
 */

import { BarChart3, Users, Briefcase } from "lucide-react";
import { C } from "@/lib/colors";

/**
 * Статистика для сервисных страниц (ServicePageTemplate).
 * Формат: icon — строка, accent — строка.
 */
export const COMPANY_STATS_SERVICE: {
  number: string;
  label: string;
  icon: string;
  accent: string;
}[] = [
  { number: "30+", label: "отраслей", icon: "BarChart3", accent: C.mintDark },
  { number: "50+", label: "экспертов", icon: "Users", accent: C.orange },
  { number: "500+", label: "проектов", icon: "ClipboardList", accent: C.dna },
];

/**
 * Статистика для страниц с Lucide-компонентами.
 * Формат: icon — LucideIcon, accent — строка.
 */
export const COMPANY_STATS_LUCIDE: {
  number: string;
  label: string;
  icon: typeof BarChart3;
  accent: string;
}[] = [
  { number: "30+", label: "отраслей", icon: BarChart3, accent: C.mintDark },
  { number: "50+", label: "экспертов", icon: Users, accent: C.orange },
  { number: "500+", label: "проектов", icon: Briefcase, accent: C.dna },
];
