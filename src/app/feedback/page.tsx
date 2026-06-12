"use client";

import { useState, useEffect, FormEvent, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { C } from "@/lib/colors";

/* ─── Same inquiry types as Contacts page ─── */
const inquiryTypes = [
  { value: "proposals", label: "Запрос коммерческого предложения" },
  { value: "callback", label: "Запрос обратного звонка" },
  { value: "press", label: "Обращение в пресс-службу" },
  { value: "accounting", label: "Вопросы бухгалтерии" },
  { value: "partners", label: "Партнёрские предложения" },
  { value: "careers", label: "Поиск вакансий / Карьера" },
  { value: "other", label: "Другое" },
];

export default function FeedbackPageWrapper() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center" style={{ background: "#00313C" }}><span className="text-white/50 text-sm">Загрузка...</span></div>}>
      <FeedbackPage />
    </Suspense>
  );
}

function FeedbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Auto-select inquiry type from URL ?type= parameter
  const initialType = (() => {
    const param = searchParams.get("type");
    if (param && inquiryTypes.some((t) => t.value === param)) return param;
    return "proposals";
  })();

  const [inquiryType, setInquiryType] = useState(initialType);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType,
          fio: (form.elements.namedItem("fio") as HTMLInputElement)?.value ?? "",
          phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value ?? "",
          email: (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",
          company: (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
          role: (form.elements.namedItem("role") as HTMLInputElement)?.value ?? "",
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "",
          // Honeypot — hidden field for bots
          website: (form.elements.namedItem("website") as HTMLInputElement)?.value ?? "",
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setSubmitError(data.error || "Произошла ошибка. Попробуйте позже.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError("Не удалось отправить заявку. Проверьте интернет и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ═══════════════════════════════════════════
     SUCCESS STATE
     ═══════════════════════════════════════════ */
  if (isSubmitted) {
    return (
      <main className="h-screen flex flex-col" style={{ background: C.dark }}>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="text-center max-w-md mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: "rgba(119,226,195,0.15)" }}>
              <CheckCircle2 className="w-7 h-7" style={{ color: C.mint }} />
            </div>
            <h1
              className="mb-3"
              style={{
                fontFamily: "var(--font-russo)",
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                color: C.white,
              }}
            >
              Запрос отправлен!
            </h1>
            <p className="text-[14px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Ваш запрос отправлен. Благодарим за обращение.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-white rounded-md transition-all"
                style={{ background: C.dna }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Вернуться назад
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[12px] font-medium uppercase tracking-wider rounded-md transition-all border"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
              >
                На главную
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  /* ═══════════════════════════════════════════
     FORM STATE
     Mobile: compact dark header + full-width form
     Desktop: Left panel (30%) + Right form (70%)
     ═══════════════════════════════════════════ */
  return (
    <>
      {/* ═══════════════════════════════════════════
         MOBILE: normal page scroll
         ═══════════════════════════════════════════ */}
      <div className="lg:hidden" style={{ background: C.dark }}>
        {/* Mobile: dark intro section */}
        <div className="px-5 pt-[68px] pb-6">
          <div className="flex items-center gap-4 mb-3">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors group"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span className="group-hover:text-white transition-colors">Назад</span>
            </button>
            <nav className="flex items-center gap-1.5">
              <Link href="/" className="text-[11px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>
                Главная
              </Link>
              <ChevronRight className="w-2.5 h-2.5" style={{ color: "rgba(255,255,255,0.2)" }} />
              <span className="text-[11px] font-medium" style={{ color: C.mint }}>Обратная связь</span>
            </nav>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-russo)",
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: C.white,
            }}
          >
            Напишите нам
          </h1>
          <p className="text-[13px] font-light leading-relaxed mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
            Заполните форму — мы свяжемся с вами в рабочее время
          </p>
        </div>
      </div>

      {/* Mobile: form with normal scroll */}
      <form
        className="lg:hidden bg-white px-5 py-6"
        onSubmit={handleFormSubmit}
      >
        {/* Honeypot — invisible to humans, bots fill it */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        {/* Error message */}
        {submitError && (
          <div className="mb-4 px-4 py-3 rounded-md text-[13px] font-medium" style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
            {submitError}
          </div>
        )}

        <div className="space-y-4">
          {/* Тип обращения */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
              Тип обращения *
            </label>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full px-4 py-3 bg-white border text-[14px] focus:outline-none focus:ring-1 transition-colors rounded-md"
              style={{ borderColor: C.border, color: C.textDark }}
              required
            >
              {inquiryTypes.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* ФИО */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
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

          {/* Телефон */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
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

          {/* Почта */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
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

          {/* Компания */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
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

          {/* Роль в компании */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
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

          {/* Сообщение */}
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: C.textMid }}>
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
        </div>

        {/* Privacy + Submit */}
        <div className="pt-5 mt-5 border-t" style={{ borderColor: C.borderLight }}>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="privacy-mobile" className="mt-1 w-4 h-4 rounded" style={{ accentColor: C.dna }} required />
              <label htmlFor="privacy-mobile" className="text-[13px]" style={{ color: C.textMuted }}>
                Я согласен на обработку персональных данных в соответствии с{" "}
                <Link href="#" className="hover:underline" style={{ color: C.dna }}>
                  Политикой конфиденциальности
                </Link>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 group rounded-md disabled:opacity-50 disabled:cursor-not-allowed w-full"
              style={{ background: isSubmitting ? C.textMuted : C.orange }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Отправка…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Отправить
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* ═══════════════════════════════════════════
         DESKTOP: Left panel (30%) + Right form (70%)
         ═══════════════════════════════════════════ */}
      <main className="hidden lg:flex h-screen flex-row overflow-hidden">
        {/* Left panel — sidebar */}
        <motion.div
          className="w-[30%] flex-shrink-0 flex flex-col relative"
          style={{ background: C.dark }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col h-full pt-[104px] pb-6 px-8 xl:px-10">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-[13px] font-medium mb-8 transition-colors group"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="group-hover:text-white transition-colors">Назад</span>
            </button>

            <nav className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>
                Главная
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.2)" }} />
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>Обратная связь</span>
            </nav>

            <h1
              className="mb-4 mt-[15vh]"
              style={{
                fontFamily: "var(--font-russo)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: C.white,
              }}
            >
              Напишите<br />нам
            </h1>

            <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Заполните форму — мы свяжемся с вами в рабочее время и ответим на все вопросы.
            </p>
          </div>
        </motion.div>

        {/* Right panel — form with internal scroll */}
        <motion.div
          className="flex-1 bg-white flex flex-col min-h-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form
            className="flex-1 flex flex-col min-h-0 pt-10 pb-6 px-8 xl:px-10"
            onSubmit={handleFormSubmit}
          >
          {/* Honeypot — invisible to humans, bots fill it */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          {/* Error message */}
          {submitError && (
            <div className="mb-4 px-4 py-3 rounded-md text-[13px] font-medium max-w-[820px] mx-auto" style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
              {submitError}
            </div>
          )}

          {/* Scrollable fields */}
          <div className="flex-1 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,0,0,0.1) transparent" }}>
            <div className="max-w-[820px] mx-auto space-y-4 lg:space-y-5">
              {/* Тип обращения */}
              <div>
                <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
                  Тип обращения *
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-3 bg-white border text-[14px] focus:outline-none focus:ring-1 transition-colors rounded-md"
                  style={{ borderColor: C.border, color: C.textDark }}
                  required
                >
                  {inquiryTypes.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* ФИО */}
              <div>
                <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
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

              {/* Телефон | Почта */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <div>
                  <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
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
                  <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
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

              {/* Компания | Роль в компании */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <div>
                  <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
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
                  <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
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

              {/* Сообщение */}
              <div>
                <label className="block text-[13px] font-medium mb-1.5 lg:mb-2" style={{ color: C.textMid }}>
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
            </div>
          </div>

          {/* Bottom bar: privacy + submit */}
          <div className="flex-shrink-0 pt-4 lg:pt-5 border-t max-w-[820px] mx-auto w-full" style={{ borderColor: C.borderLight }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 rounded" style={{ accentColor: C.dna }} required />
                <label htmlFor="privacy" className="text-[13px]" style={{ color: C.textMuted }}>
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <Link href="#" className="hover:underline" style={{ color: C.dna }}>
                    Политикой конфиденциальности
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 group rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                style={{ background: isSubmitting ? C.textMuted : C.orange }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Отправка…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Отправить
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </main>
    </>
  );
}
