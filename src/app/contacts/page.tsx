"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Mail,
  ArrowRight,
  ChevronRight,
  Clock,
  Phone,
  Building2,
  Users,
  Briefcase,
  Newspaper,
  Layers,
  Send,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12 },
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

const vp = { once: true, amount: 0.2 as const };

/* ─── Data ─── */
const office = {
  country: "Россия",
  city: "Санкт-Петербург",
  address: "Санкт-Петербург, Лиговский проспект, дом 56, литер «Г»",
  email: "info@arasaca.ru",
  phone: "+7 (812) 937-44-77",
  workingHours: "Пн-Пт: 9:00 – 18:00",
  mapEmbedUrl: "https://yandex.ru/map-widget/v1/-/CPuj5KKw",
  mapOpenUrl: "https://yandex.ru/maps/-/CPuj5KKw",
};

const contactBlocks = [
  {
    id: "proposals",
    label: "Коммерческие предложения",
    name: "Николай Завьялов",
    title: "Руководитель Группы подготовки коммерческих предложений",
    phone: null,
    email: "request@arasaca.ru",
    description: "Подготовка индивидуальных коммерческих предложений для ваших проектов.",
    icon: Briefcase,
  },
  {
    id: "press",
    label: "Пресс-служба",
    name: null,
    title: "Руководитель пресс-службы",
    phone: null,
    email: "press@arasaca.ru",
    description: "Аккредитация СМИ, комментарии, пресс-релизы и информация для журналистов.",
    icon: Newspaper,
  },
  {
    id: "accounting",
    label: "Бухгалтерия",
    name: null,
    title: null,
    phone: null,
    email: "buh@arasaca.ru",
    description: "По вопросам закрывающих документов просьба обращаться по электронной почте.",
    icon: Layers,
  },
  {
    id: "partners",
    label: "Партнёрство",
    name: null,
    title: null,
    phone: null,
    email: "partners@arasaca.ru",
    description: "Если вы хотите предложить сотрудничество или свои идеи — обращайтесь по электронной почте.",
    icon: Users,
  },
  {
    id: "careers",
    label: "Карьера",
    name: null,
    title: "Руководитель отдела подбора персонала",
    phone: null,
    email: "info@arasaca.ru",
    description: "Вакансии, стажировки и возможность присоединиться к нашей команде.",
    icon: Building2,
  },
];

const inquiryTypes = [
  { value: "proposals", label: "Запрос коммерческого предложения" },
  { value: "press", label: "Обращение в пресс-службу" },
  { value: "accounting", label: "Вопросы бухгалтерии" },
  { value: "partners", label: "Партнёрские предложения" },
  { value: "careers", label: "Поиск вакансий / Карьера" },
  { value: "other", label: "Другое" },
];

const FORM_TO_EMAIL = "info@arasaca.ru";

/* ─── Quick Links data ─── */
const quickLinks = [
  {
    title: "О компании",
    description: "Миссия, ценности, команда",
    bg: "#00313C",
    textColor: "#ffffff",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Услуги",
    description: "9 направлений консалтинга",
    bg: "#E04E39",
    textColor: "#ffffff",
    href: "/services",
    icon: Briefcase,
  },
  {
    title: "Решения",
    description: "Цифровые продукты и платформы",
    bg: "#ffffff",
    textColor: "#1a1a1a",
    href: "/solutions/master-planning",
    icon: Layers,
  },
  {
    title: "Пресс-центр",
    description: "Новости, пресс-релизы, СМИ",
    bg: "#008C95",
    textColor: "#ffffff",
    href: "/media",
    icon: Newspaper,
  },
  {
    title: "Карьера",
    description: "Присоединяйтесь к команде",
    bg: "#4dc9a5",
    textColor: "#ffffff",
    href: "/career",
    icon: Users,
  },
  {
    title: "Контакты",
    description: "Свяжитесь с нами",
    bg: "#00313C",
    textColor: "#ffffff",
    href: "/contacts",
    icon: Mail,
  },
];

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState("proposals");
  const [inquiryType, setInquiryType] = useState("proposals");

  const activeContact = contactBlocks.find((c) => c.id === activeTab);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const typeLabel =
      inquiryTypes.find((opt) => opt.value === inquiryType)?.label ?? inquiryType;
    const body = [
      `Тип обращения: ${typeLabel}`,
      `ФИО: ${(form.elements.namedItem("fio") as HTMLInputElement)?.value ?? ""}`,
      `Телефон: ${(form.elements.namedItem("phone") as HTMLInputElement)?.value ?? ""}`,
      `Почта: ${(form.elements.namedItem("email") as HTMLInputElement)?.value ?? ""}`,
      `Компания: ${(form.elements.namedItem("company") as HTMLInputElement)?.value ?? ""}`,
      `Роль в компании: ${(form.elements.namedItem("role") as HTMLInputElement)?.value ?? ""}`,
      "",
      "Сообщение:",
      (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "",
    ].join("\n");
    const subject = `Обращение с сайта: ${typeLabel}`;
    window.location.href = `mailto:${FORM_TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ═══════════════════════════════════════════════════
          HERO — Gray background, clean header
          ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px] pb-16 md:pb-20" style={{ background: C.muted }}>
        <div className="container-kept relative z-10 pt-6 md:pt-10 lg:pt-12">
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="text-[12px] transition-colors hover:text-[#008C95]" style={{ color: C.textMuted }}>
              Главная
            </Link>
            <ChevronRight className="w-3 h-3" style={{ color: C.border }} />
            <span className="text-[12px] font-medium" style={{ color: C.dna }}>Контакты</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Свяжитесь с нами
              </motion.span>
              <motion.h1
                className="mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: C.textDark,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Контакты
              </motion.h1>
              <motion.p
                className="max-w-md text-[14px] font-normal leading-relaxed"
                style={{ color: C.textMuted }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Рады вашим обращениям и готовы ответить на любые вопросы. Выберите удобный способ связи.
              </motion.p>
            </div>

            {/* Quick contact cards */}
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[280px] lg:flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {/* Email card */}
              <Link href="/feedback" className="group/kp flex-1">
                <div
                  className="relative overflow-hidden rounded-lg p-5 transition-all duration-300 group-hover/kp:shadow-lg h-full flex flex-col justify-center"
                  style={{ background: C.dark }}
                >
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1"
                    style={{ background: C.dna }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-md"
                        style={{ background: "rgba(0,140,149,0.15)" }}
                      >
                        <Mail className="h-4 w-4" style={{ color: C.dna }} />
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: "#ffffff" }}>
                        Написать нам
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed pl-[42px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {office.email}
                    </p>
                  </div>
                </div>
              </Link>
              <a href={`tel:${office.phone.replace(/[\s()-]/g, "")}`} className="group/cb flex-1">
                <div
                  className="relative overflow-hidden rounded-lg p-5 transition-all duration-300 group-hover/cb:shadow-lg h-full flex flex-col justify-center"
                  style={{ background: C.white }}
                >
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-1"
                    style={{ background: C.orange }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-md"
                        style={{ background: "rgba(224,78,57,0.1)" }}
                      >
                        <Phone className="h-4 w-4" style={{ color: C.orange }} />
                      </div>
                      <span className="text-[14px] font-bold" style={{ color: C.textDark }}>
                        Позвонить
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed pl-[42px]" style={{ color: C.textMuted }}>
                      {office.phone}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OFFICE + MAP — White background
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          {/* Section header */}
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                Наш офис
              </motion.span>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Центральный офис
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Ввиду системы пропусков, встречи<br />проводятся по предварительному согласованию
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Office info card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div
                className="relative overflow-hidden rounded-lg border p-6 md:p-8 h-full"
                style={{ background: C.white, borderColor: C.border }}
              >
                {/* Country / City badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white rounded-sm"
                    style={{ background: C.dark }}
                  >
                    {office.country}
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: C.textMid }}>
                    {office.city}
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: "rgba(0,140,149,0.1)" }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: C.dna }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: C.textMuted }}>
                        Адрес
                      </p>
                      <p className="text-[14px] leading-relaxed" style={{ color: C.textDark }}>
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: "rgba(0,140,149,0.1)" }}
                    >
                      <Mail className="h-5 w-5" style={{ color: C.dna }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: C.textMuted }}>
                        Электронная почта
                      </p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[14px] hover:text-[#008C95] transition-colors"
                        style={{ color: C.dna }}
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: "rgba(0,140,149,0.1)" }}
                    >
                      <Phone className="h-5 w-5" style={{ color: C.dna }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: C.textMuted }}>
                        Телефон
                      </p>
                      <a
                        href={`tel:${office.phone.replace(/[\s()-]/g, "")}`}
                        className="text-[14px] hover:text-[#008C95] transition-colors"
                        style={{ color: C.textDark }}
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: "rgba(0,140,149,0.1)" }}
                    >
                      <Clock className="h-5 w-5" style={{ color: C.dna }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: C.textMuted }}>
                        Режим работы
                      </p>
                      <p className="text-[14px]" style={{ color: C.textDark }}>
                        {office.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.15}
            >
              <div className="rounded-lg overflow-hidden border h-full" style={{ borderColor: C.border, minHeight: "400px" }}>
                <div className="relative h-full w-full" style={{ minHeight: "400px" }}>
                  <iframe
                    title="Офис Арасака на карте"
                    src={office.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
              <a
                href={office.mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[13px] font-medium hover:gap-2.5 transition-all"
                style={{ color: C.dna }}
              >
                Открыть в Яндекс.Картах
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DEPARTMENTS — Dark background with tabs + cards
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.dark }}>
        <div className="container-kept">
          {/* Section header */}
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.mint }}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                Отделы
              </motion.span>
              <h2 className="heading-section" style={{ color: C.white }}>
                Контакты по направлениям
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-sm lg:text-right" style={{ color: "rgba(255,255,255,0.5)" }}>
              Выберите направление — мы перенаправим<br />ваше обращение нужному специалисту
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {contactBlocks.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setInquiryType(tab.id);
                  }}
                  className={cn(
                    "px-4 py-2.5 text-[13px] font-medium rounded-md transition-all duration-200",
                    isActive
                      ? "text-white"
                      : "hover:text-white"
                  )}
                  style={{
                    background: isActive ? C.dna : "rgba(255,255,255,0.05)",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                    border: isActive ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active contact card */}
          <AnimatePresence mode="wait">
            {activeContact && (
              <motion.div
                key={activeContact.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Contact info card */}
                <div
                  className="relative overflow-hidden rounded-lg p-6 md:p-8"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div className="relative z-10">
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-lg"
                        style={{ background: "rgba(0,140,149,0.15)" }}
                      >
                        <activeContact.icon className="h-6 w-6" style={{ color: C.dna }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: C.white }}>
                          {activeContact.name || activeContact.title || activeContact.label}
                        </h3>
                        {activeContact.title && activeContact.name && (
                          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                            {activeContact.title}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    {activeContact.description && (
                      <p className="text-[14px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {activeContact.description}
                      </p>
                    )}

                    {/* Contact details */}
                    <div className="grid sm:grid-cols-2 gap-6 mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: C.mint }}>
                          Телефон
                        </p>
                        <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                          {activeContact.phone || "—"}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: C.mint }}>
                          Email
                        </p>
                        <a
                          href={`mailto:${activeContact.email}`}
                          className="text-[14px] hover:text-white transition-colors"
                          style={{ color: C.dna }}
                        >
                          {activeContact.email}
                        </a>
                      </div>
                    </div>

                    {/* Write button */}
                    <a
                      href={`/feedback`}
                      className="inline-flex items-center gap-2 mt-6 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 text-white"
                      style={{ background: C.dna }}
                    >
                      <Mail className="h-4 w-4" />
                      Написать
                    </a>
                  </div>
                </div>

                {/* Department quick access cards */}
                <div className="grid grid-cols-2 gap-3">
                  {contactBlocks.filter(t => t.id !== activeContact.id).slice(0, 4).map((tab, idx) => (
                    <motion.button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setInquiryType(tab.id);
                      }}
                      className="group text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <div
                        className="relative overflow-hidden rounded-lg p-4 h-full transition-all duration-300 group-hover:translate-y-[-2px]"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <tab.icon className="h-4 w-4 mb-2 opacity-50" style={{ color: C.mint }} />
                        <p className="text-[13px] font-semibold mb-1" style={{ color: C.white }}>
                          {tab.label}
                        </p>
                        <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {tab.email}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT FORM — Light background
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-kept">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            {/* Left column - Sticky title */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <motion.span
                className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.dna }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Обратная связь
              </motion.span>
              <h2 className="heading-section mb-4" style={{ color: C.textDark }}>
                Напишите нам
              </h2>
              <p className="text-[14px] font-normal leading-relaxed" style={{ color: C.textMuted }}>
                Заполните форму — мы свяжемся с вами в рабочее время и ответим на все вопросы.
              </p>
            </div>

            {/* Right column - Form */}
            <motion.form
              className="space-y-5"
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Row 1: Type | ФИО */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                    Тип обращения *
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 bg-white border text-[14px] focus:outline-none focus:ring-1 transition-colors rounded-md"
                    style={{
                      borderColor: C.border,
                      color: C.textDark,
                    }}
                    required
                  >
                    {inquiryTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                    ФИО *
                  </label>
                  <input
                    name="fio"
                    type="text"
                    className="w-full px-4 py-3 bg-white border text-[14px] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors rounded-md"
                    style={{ borderColor: C.border, color: C.textDark }}
                    placeholder="Фамилия Имя Отчество"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone | Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                    Телефон *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 bg-white border text-[14px] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors rounded-md"
                    style={{ borderColor: C.border, color: C.textDark }}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                    Почта *
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white border text-[14px] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors rounded-md"
                    style={{ borderColor: C.border, color: C.textDark }}
                    placeholder="email@company.ru"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Company | Role */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                    Компания
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 bg-white border text-[14px] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors rounded-md"
                    style={{ borderColor: C.border, color: C.textDark }}
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                    Роль в компании
                  </label>
                  <input
                    name="role"
                    type="text"
                    className="w-full px-4 py-3 bg-white border text-[14px] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors rounded-md"
                    style={{ borderColor: C.border, color: C.textDark }}
                    placeholder="Например: директор, менеджер проекта"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[13px] font-medium mb-2" style={{ color: C.textMid }}>
                  Сообщение *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border text-[14px] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none rounded-md"
                  style={{ borderColor: C.border, color: C.textDark }}
                  placeholder="Опишите ваш запрос"
                  required
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 rounded"
                  style={{ accentColor: C.dna }}
                  required
                />
                <label htmlFor="privacy" className="text-[13px]" style={{ color: C.textMuted }}>
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <Link href="/privacy" className="hover:underline" style={{ color: C.dna }}>
                    Политикой конфиденциальности
                  </Link>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 group rounded-md"
                style={{ background: C.orange }}
              >
                <Send className="h-4 w-4" />
                Отправить сообщение
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK LINKS — Navigation cards + CTA panel
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: C.muted }}>
        <div className="container-kept">
          {/* Section header */}
          <motion.div
            className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div>
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.dna }}>
                Навигация
              </span>
              <h2 className="heading-section" style={{ color: C.textDark }}>
                Полезные ссылки
              </h2>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>
              Быстрый доступ к&nbsp;разделам<br />и&nbsp;ключевым возможностям компании
            </p>
          </motion.div>

          {/* Cards + CTA row */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            {/* Left: 6 navigation cards */}
            <div className="flex-1 flex">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 w-full h-full auto-rows-fr">
                {quickLinks.map((card, index) => {
                  const isWhite = card.bg === C.white;
                  return (
                    <motion.div
                      key={card.title}
                      className="flex"
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={vp}
                      custom={index * 0.08}
                    >
                      <Link href={card.href} className="group block h-full w-full">
                        <motion.div
                          className={cn(
                            "relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full",
                            isWhite && "border shadow-sm group-hover:shadow-md",
                          )}
                          style={{ background: card.bg, color: card.textColor, borderColor: isWhite ? C.border : undefined, minHeight: "130px" }}
                          whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        >
                          {card.bg === C.dark && (
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
                                backgroundImage: `radial-gradient(circle, ${C.dna} 1px, transparent 1px)`,
                                backgroundSize: "12px 12px",
                              }}
                            />
                          )}

                          {/* Colored accent bar on left */}
                          <div
                            className="pointer-events-none absolute left-0 top-0 h-full w-1"
                            style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }}
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

            {/* Right: CTA panel */}
            <motion.div
              className="lg:w-[340px] flex-shrink-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.3}
            >
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8" style={{ background: C.dark }}>
                {/* Decorative pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Decorative line */}
                  <div className="h-px w-12 mb-5" style={{ background: C.mint }} />

                  <h3
                    className="text-xl font-bold leading-tight mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    Начните сотрудничество
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-md" style={{ background: C.dna }}>
                    <Mail className="h-4 w-4" />
                    Запросить КП
                  </Link>
                  <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider border transition-all duration-300 rounded-md" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                    <Phone className="h-4 w-4" />
                    Обратный звонок
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
