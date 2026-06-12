/**
 * Общие данные для секции «Полезные ссылки» (Quick Links).
 *
 * Использование:  import { quickLinks } from "@/data/quickLinks"
 * Заменяет дублирование этого массива в каждом файле страницы.
 */

import {
  Building2,
  Briefcase,
  Layers,
  Newspaper,
  Users,
  Mail,
} from "lucide-react";
import { C } from "@/lib/colors";

export const quickLinks = [
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    bg: C.dark,
    textColor: C.white,
    href: "/about",
    icon: Building2,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    bg: C.orange,
    textColor: C.white,
    href: "/services",
    icon: Briefcase,
  },
  {
    title: "Решения",
    description: "Цифровые продукты и платформы",
    bg: "#ffffff",
    textColor: "#1a1a1a",
    href: "/solutions",
    icon: Layers,
  },
  {
    title: "Пресс-центр",
    description: "Новости, пресс-релизы, СМИ",
    bg: C.dna,
    textColor: C.white,
    href: "/press-center",
    icon: Newspaper,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: C.mintDark,
    textColor: C.white,
    href: "/career",
    icon: Users,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    bg: C.dark,
    textColor: C.white,
    href: "/contacts",
    icon: Mail,
  },
];
