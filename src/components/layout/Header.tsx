"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, X, ArrowRight, ChevronRight, Phone, Eye, Mail } from "lucide-react"
import { coreIndustries } from "@/data/industries"

// Структура услуг с подуслугами
const servicesMenu = {
  name: "Услуги",
  href: "/services",
  inHeader: true,
  description: "Консалтинг, аналитика и исследования, технологии, инжиниринг, развитие территорий, HR, обучение, коммуникации и стартапы.",
  categories: [
    {
      name: "Консалтинг",
      href: "/services/consulting",
      services: [
        { name: "Стратегия и корпоративное управление", href: "/services/consulting/strategic-consulting" },
        { name: "Управление проектами и программами", href: "/services/consulting/project-management" },
        { name: "Инвестиционный консалтинг", href: "/services/consulting/investment-design" },
        { name: "Господдержка и сопровождение", href: "/services/consulting/government-support" },
      ],
    },
    {
      name: "Аналитика и исследования",
      href: "/services/analytics",
      services: [
        { name: "Рыночная аналитика и исследования", href: "/services/analytics/market-analytics" },
        { name: "Экономические исследования", href: "/services/analytics/economic-research" },
        { name: "Аналитика данных и моделирование", href: "/services/analytics/data-analytics" },
      ],
    },
    {
      name: "Технологии",
      href: "/services/technologies",
      highlight: true,
      services: [
        { name: "Цифровая трансформация и стратегия", href: "/services/technologies/digital-transformation" },
        { name: "ИТ-аудит и Due Diligence", href: "/services/technologies/it-audit" },
        { name: "Разработка и внедрение ИТ-решений", href: "/services/technologies/development" },
        { name: "Корпоративные инновации и R&D", href: "/services/technologies/innovation" },
        { name: "Промышленная автоматизация и IIoT", href: "/services/technologies/industrial-automation" },
        { name: "Облачные решения и инфраструктура", href: "/services/technologies/cloud" },
      ],
    },
    {
      name: "Инжиниринг",
      href: "/services/engineering",
      services: [
        { name: "Предпроектная проработка", href: "/services/engineering/pre-project" },
        { name: "Экспертиза капитальных проектов", href: "/services/engineering/expertise" },
        { name: "Управление строительными проектами", href: "/services/engineering/construction-management" },
      ],
    },
    {
      name: "Развитие территорий",
      href: "/services/territorial-development",
      services: [
        { name: "Пространственное и стратегическое планирование", href: "/services/territorial-development/spatial-strategic-planning" },
        { name: "Экономическое моделирование", href: "/services/territorial-development/economic-modeling" },
        { name: "Механизмы реализации", href: "/services/territorial-development/implementation-mechanisms" },
      ],
    },
    {
      name: "HR и организационное развитие",
      href: "/services/hr",
      services: [
        { name: "Управление человеческим капиталом", href: "/services/hr/human-capital-management" },
        { name: "Организационное развитие и трансформация", href: "/services/hr/organizational-development" },
        { name: "HR-аналитика и цифровизация", href: "/services/hr/hr-analytics" },
      ],
    },
    {
      name: "Обучение и развитие",
      href: "/services/learning",
      services: [
        { name: "Корпоративные программы развития", href: "/services/learning/corporate-development" },
        { name: "Lean & 5С и производственные практики", href: "/services/learning/lean-production" },
        { name: "Управление знаниями", href: "/services/learning/knowledge-management" },
        { name: "Корпоративная академия Арасаки", href: "/services/learning/arasaca-academy" },
      ],
    },
    {
      name: "Коммуникации и бренд",
      href: "/services/communications",
      services: [
        { name: "Бренд и позиционирование", href: "/services/communications/brand-positioning" },
        { name: "Коммуникационные стратегии", href: "/services/communications/communication-strategy" },
        { name: "Медийное присутствие и репутация", href: "/services/communications/media-reputation" },
        { name: "Корпоративная идентичность и культура", href: "/services/communications/corporate-culture" },
      ],
    },
    {
      name: "Стартапы и инновации",
      href: "/services/startups",
      services: [
        { name: "Развитие стартапов", href: "/services/startups/startup-development" },
        { name: "Инновации и R&D сопровождение", href: "/services/startups/innovation-rd" },
        { name: "Корпоративные инновации", href: "/services/startups/corporate-innovation" },
      ],
    },
  ],
}

// Полная навигация — используется в бургер-меню
const navigation = [
  servicesMenu,
  {
    name: "Отрасли",
    href: "/industries",
    inHeader: true,
    description: "Ключевая экспертиза: атомная отрасль, строительство, градостроительство, ИТ, госсектор, машиностроение, судостроение и другие отрасли.",
    submenu: [
      ...coreIndustries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })),
      { name: "Все отрасли", href: "/industries" },
    ],
  },
  {
    name: "Пресс-центр",
    href: "/press-center",
    inHeader: true,
    description: "Новости, статьи экспертов и аналитические материалы о рынке и наших проектах.",
    submenu: [
      { name: "Новости компании", href: "/press-center/news" },
      { name: "Статьи", href: "/press-center/articles" },
      { name: "Инсайты и аналитика", href: "/press-center/insights" },
      { name: "Все материалы", href: "/press-center" },
    ],
  },
  {
    name: "Решения",
    href: "/solutions/master-planning",
    inHeader: true,
    description: "Продукты и платформенные решения для управления развитием территорий и инвестиционными программами.",
    submenu: [
      { name: "Платформа мастер-планирования", href: "/solutions/master-planning" },
    ],
  },
  {
    name: "Арасака Лаб",
    href: "/lab",
    inHeader: true,
    description: "Лаборатория цифровых решений. Разрабатываем IT-системы под индивидуальные запросы: CRM, автоматизации, интеграции, LMS, HR-системы.",
  },
  {
    name: "Компания",
    href: "/about",
    inHeader: true,
    description: "Арасака — консалтинговая компания. Повышаем эффективность бизнеса через управленческий консалтинг, цифровую трансформацию и инвестиционное консультирование.",
    submenu: [
      { name: "О нас", href: "/about" },
      { name: "Кейсы", href: "/cases" },
      { name: "Клиенты", href: "/customers" },
      { name: "Карьера", href: "/career" },
      { name: "Вакансии", href: "/career/vacancies" },
      { name: "Pro bono", href: "/pro-bono" },
      { name: "Обратная связь", href: "/feedback" },
      { name: "Мероприятия", href: "#events" },
      { name: "Публикации", href: "/press-center" },
    ],
  },
  { name: "Карьера", href: "/career", inHeader: false, description: "Присоединяйтесь к команде. Мы ищем талантливых специалистов в консалтинг и аналитику." },
  { name: "Контакты", href: "/contacts", inHeader: true, description: "Свяжитесь с нами: форма обратной связи и контакты по направлениям." },
]

// Навигация для Kept-style pill кнопок — 5 основных пунктов
const keptNavItems = [
  { name: "Услуги", href: "/services" },
  { name: "Отрасли", href: "/industries" },
  { name: "Решения", href: "/solutions/master-planning" },
  { name: "Пресс-центр", href: "/press-center" },
  { name: "Контакты", href: "/contacts" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  // Burger menu: which left nav item is active (null = show contacts on right)
  const [burgerActive, setBurgerActive] = useState<string | null>(null)
  // Third level: which sub-category is expanded (for services)
  const [burgerExpandedCategory, setBurgerExpandedCategory] = useState<number | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50)
      lastScrollY = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Reset burger state on open
  const openBurger = () => {
    setBurgerActive(null)
    setBurgerExpandedCategory(null)
    setIsOpen(true)
  }

  const activeNav = burgerActive ? navigation.find((n) => n.name === burgerActive) : null

  /* ─── Determine header theme based on the hero block background ─── */
  const getHeaderTheme = (path: string): "dark" | "teal" | "mint" | "light" => {
    // Dark (#00313C) hero pages
    if (path === "/services" || path.startsWith("/services/")) return "dark"
    if (path === "/industries" || path.startsWith("/industries/")) return "dark"
    if (path === "/career" || path.startsWith("/career/")) return "dark"
    if (path === "/solutions" && !path.includes("/master-planning")) return "dark"
    if (path === "/lab") return "dark"
    if (path === "/pro-bono") return "dark"
    if (path === "/sitemap") return "dark"
    if (path === "/feedback") return "dark"
    if (path === "/privacy") return "dark"
    if (path === "/terms") return "dark"
    // Teal (#008C95) hero pages
    if (/^\/cases\/[^/]+$/.test(path)) return "teal"
    // Light mint (#e8f5f3) hero pages
    if (path.startsWith("/press-center")) return "mint"
    if (path === "/solutions/master-planning") return "mint"
    // Default: light gray (#f1f2f4)
    return "light"
  }

  const heroTheme = getHeaderTheme(pathname)
  const isHeroLightBg = heroTheme === "light" || heroTheme === "mint"
  // When scrolled, header bg is always white → always use dark text/icons
  const useDarkText = isScrolled || isHeroLightBg

  // Feedback page uses minimal header (logo + burger only)
  const isFeedbackPage = pathname === "/feedback"

  // Background class for non-scrolled header
  const heroBgClass = heroTheme === "dark"
    ? "bg-[#00313C]"
    : heroTheme === "teal"
      ? "bg-[#008C95]"
      : heroTheme === "mint"
        ? "bg-[#e8f5f3]"
        : "bg-[#f1f2f4]"

  return (
    <>
    {/* ═══════════════════════════════════════════
       FEEDBACK PAGE: Desktop — minimal header (logo + burger only, 30% width)
       On mobile, the standard header below is shown instead.
       ═══════════════════════════════════════════ */}
    {isFeedbackPage && (
      <header
        className="fixed left-0 z-50 transition-all duration-300 top-0 w-[30%] hidden lg:block"
        style={{ background: "transparent" }}
      >
        <div className="flex items-center pt-8 pb-8 px-6 xl:px-10">
          <Link href="/" className="flex items-center leading-none">
            <span
              className="text-[28px] font-normal tracking-tight text-white leading-none"
              style={{ fontFamily: "var(--font-russo), sans-serif" }}
            >
              арасака
            </span>
          </Link>
          <button
            type="button"
            onClick={() => openBurger()}
            className="ml-3 flex flex-col items-center justify-center w-10 h-10 gap-[5px] text-white/60 hover:text-white transition-colors"
            aria-label="Открыть меню"
          >
            <span className="block w-6 h-[2px] bg-current transition-all rounded-full" />
            <span className="block w-6 h-[2px] bg-current transition-all rounded-full" />
            <span className="block w-4 h-[2px] bg-current transition-all rounded-full" />
          </button>
        </div>
      </header>
    )}

    {/* ═══════════════════════════════════════════
       STANDARD HEADER
       Always shown on mobile (including /feedback).
       On desktop, hidden on /feedback (minimal header above is used instead).
       ═══════════════════════════════════════════ */}
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        isFeedbackPage && "lg:hidden",
        isScrolled && isScrollingDown
          ? "-translate-y-full"
          : "top-0",
        isScrolled
          ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : heroBgClass
      )}
    >
      <div className="container-kept">

        {/* ═══════════════════════════════════════════
           DESKTOP: Not scrolled — full-size Kept-style
           [Logo + Burger] | [Запросить КП] | [Pill nav] | [Utilities]
           ═══════════════════════════════════════════ */}
        {!isScrolled && (
          <div className="hidden lg:flex items-center pt-8 pb-8">
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/" className="flex items-center leading-none">
                <span
                  className={cn(
                    "text-[28px] font-normal tracking-tight leading-none",
                    !isHeroLightBg ? "text-white" : "text-[#008b96]"
                  )}
                  style={{ fontFamily: "var(--font-russo), sans-serif" }}
                >
                  арасака
                </span>
              </Link>
              <button
                type="button"
                onClick={() => openBurger()}
                className={cn(
                  "flex flex-col items-center justify-center w-10 h-10 gap-[5px] transition-colors",
                  !isHeroLightBg ? "text-white/60 hover:text-white" : "text-[#494a4a] hover:text-[#008C95]"
                )}
                aria-label="Открыть меню"
              >
                <span className="block w-6 h-[2px] bg-current transition-all rounded-full" />
                <span className="block w-6 h-[2px] bg-current transition-all rounded-full" />
                <span className="block w-4 h-[2px] bg-current transition-all rounded-full" />
              </button>
            </div>

            <Link
              href="/feedback?type=proposals"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#E04E39] text-white text-[13px] font-medium hover:bg-[#c94330] transition-colors whitespace-nowrap"
            >
              Запросить КП
            </Link>

            {/* Unified pill-shaped navigation — all items in one pill */}
            <nav className="flex-1 flex items-center justify-center">
              <div className={cn(
                "inline-flex items-center rounded px-1.5 py-1 gap-0.5",
                !isHeroLightBg ? "bg-white/[0.08]" : "bg-white shadow-sm"
              )}>
                {keptNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center justify-center px-4 py-1.5 text-[13px] font-medium transition-all duration-200 whitespace-nowrap rounded",
                      pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-[#008C95] text-white"
                        : !isHeroLightBg
                          ? "text-white/60 hover:bg-[#008C95] hover:text-white"
                          : "text-[#494a4a] hover:bg-[#008C95] hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                className={cn(
                  "flex items-center justify-center w-8 h-8 transition-colors",
                  !isHeroLightBg ? "text-white/50 hover:text-white" : "text-[#494a4a] hover:text-[#008C95]"
                )}
                aria-label="Поиск"
              >
                <Search className="w-4 h-4" />
              </button>
              <a
                href="tel:+74959374477"
                className={cn(
                  "flex items-center justify-center w-8 h-8 transition-colors",
                  !isHeroLightBg ? "text-white/50 hover:text-white" : "text-[#494a4a] hover:text-[#008C95]"
                )}
                aria-label="Позвонить"
              >
                <Phone className="w-4 h-4" />
              </a>
              <div className={cn("w-px h-4 mx-0.5", !isHeroLightBg ? "bg-white/20" : "bg-gray-300")} />
              <button className={cn(
                "flex items-center gap-0.5 text-[11px] transition-colors px-1 py-0.5",
                !isHeroLightBg ? "text-white/40 hover:text-white/70" : "text-[#494a4a] hover:text-[#008C95]"
              )}>
                RU
                <ChevronDown className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════
           DESKTOP: Scrolled — compact Kept-style
           ═══════════════════════════════════════════ */}
        {isScrolled && (
          <div className="hidden lg:flex items-center pt-4 pb-4">
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/" className="flex items-center leading-none">
                <span
                  className="text-[24px] font-normal tracking-tight text-[#008b96] leading-none"
                  style={{ fontFamily: "var(--font-russo), sans-serif" }}
                >
                  арасака
                </span>
              </Link>
              <button
                type="button"
                onClick={() => openBurger()}
                className="flex flex-col items-center justify-center w-9 h-9 gap-[4px] text-[#494a4a] hover:text-[#008C95] transition-colors"
                aria-label="Открыть меню"
              >
                <span className="block w-5 h-[2px] bg-current transition-all rounded-full" />
                <span className="block w-5 h-[2px] bg-current transition-all rounded-full" />
                <span className="block w-4 h-[2px] bg-current transition-all rounded-full" />
              </button>
            </div>

            <Link
              href="/feedback?type=proposals"
              className="ml-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#E04E39] text-white text-[12px] font-medium hover:bg-[#c94330] transition-colors whitespace-nowrap"
            >
              Запросить КП
            </Link>

            <nav className="flex-1 flex items-center justify-center">
              <div className="inline-flex items-center rounded bg-white/80 shadow-sm px-1.5 py-0.5 gap-0.5">
                {keptNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center justify-center px-3.5 py-1 text-[12px] font-medium transition-all duration-200 whitespace-nowrap rounded",
                      pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-[#008C95] text-white"
                        : "text-[#494a4a] hover:bg-[#008C95] hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                className="flex items-center justify-center w-7.5 h-7.5 text-[#494a4a] hover:text-[#008C95] transition-colors"
                aria-label="Поиск"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
              <a
                href="tel:+74959374477"
                className="flex items-center justify-center w-7.5 h-7.5 text-[#494a4a] hover:text-[#008C95] transition-colors"
                aria-label="Позвонить"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <div className="w-px h-4 bg-gray-300 mx-0.5" />
              <button className="flex items-center gap-0.5 text-[11px] text-[#494a4a] hover:text-[#008C95] transition-colors px-1 py-0.5">
                RU
                <ChevronDown className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile header (always visible on mobile) */}
        <div className={cn(
          "flex items-center justify-between lg:hidden",
          isScrolled ? "h-16" : "h-14"
        )}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBurger()}
              className={cn(
                "flex flex-col items-center justify-center w-8 h-8 gap-[5px] transition-colors",
                !useDarkText ? "text-white/60 hover:text-white" : "text-gray-600 hover:text-[#008C95]"
              )}
              aria-label="Открыть меню"
            >
              <span className="block w-5 h-[1.5px] bg-current transition-all" />
              <span className="block w-5 h-[1.5px] bg-current transition-all" />
              <span className="block w-3.5 h-[1.5px] bg-current transition-all" />
            </button>

            <Link href="/" className="flex items-center leading-none">
              <span
                className={cn(
                  "text-[28px] font-normal tracking-tight leading-none",
                  !useDarkText ? "text-white" : "text-[#008b96]"
                )}
                style={{ fontFamily: "var(--font-russo), sans-serif" }}
              >
                арасака
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/feedback?type=proposals"
              className="inline-flex items-center px-3 py-1.5 rounded bg-[#E04E39] text-white text-[12px] font-medium hover:bg-[#c94330] transition-colors whitespace-nowrap"
            >
              Запросить КП
            </Link>
            <button
              className={cn(
                "flex items-center justify-center w-9 h-9 transition-colors",
                !useDarkText ? "text-white/40 hover:text-white" : "text-gray-400 hover:text-[#008C95]"
              )}
              aria-label="Поиск"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <a
              href="tel:+74959374477"
              className={cn(
                "hidden md:flex items-center justify-center w-9 h-9 transition-colors",
                !useDarkText ? "text-white/40 hover:text-white" : "text-gray-400 hover:text-[#008C95]"
              )}
              aria-label="Позвонить"
            >
              <Phone className="w-[18px] h-[18px]" />
            </a>
            <div className={cn("hidden md:block w-px h-4 mx-1", !useDarkText ? "bg-white/20" : "bg-gray-200")} />
            <button className={cn(
              "hidden md:flex items-center gap-1 text-[13px] transition-colors px-2 py-1",
              !useDarkText ? "text-white/40 hover:text-white/70" : "text-gray-400 hover:text-[#008C95]"
            )}>
              RU
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* ═══════════════════════════════════════════
       Full-screen burger menu
       Mobile: slide-in panel with accordion + drill-down
       Desktop: 3-column layout (Left nav | Middle submenu | Right contacts)
       ═══════════════════════════════════════════ */}

    {/* Backdrop overlay — mobile only */}
    {isOpen && (
      <div
        className="fixed inset-0 z-[99] bg-black/50 lg:hidden transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    )}

    {/* Mobile slide-in panel */}
    <div
      className={cn(
        "fixed top-0 right-0 bottom-0 z-[100] w-full sm:w-[85vw] max-w-[400px] bg-[#00313C] flex flex-col lg:hidden transition-transform duration-300 ease-out will-change-transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Меню навигации"
    >
      {/* Mobile top bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center leading-none">
          <span
            className="text-[22px] font-normal tracking-tight text-white leading-none"
            style={{ fontFamily: "var(--font-russo), sans-serif" }}
          >
            арасака
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {/* Mobile: show search + close in top bar */}
          <button
            className="flex items-center justify-center w-10 h-10 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
            aria-label="Поиск"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
            aria-label="Закрыть меню"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════
         MOBILE: Navigation content
         Uses drill-down pattern with slide transitions
         ══════════════════════════════════ */}
      <div className="flex-1 overflow-hidden relative">
        {/* Level 0: Main navigation list */}
        <div
          className={cn(
            "absolute inset-0 overflow-y-auto transition-transform duration-300 ease-out",
            burgerActive ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <nav className="py-2">
            {navigation.map((item, index) => {
              const hasSubmenu = !!(item.submenu || ("categories" in item))
              return (
                <div key={item.name}>
                  {hasSubmenu ? (
                    <button
                      type="button"
                      onClick={() => {
                        setBurgerActive(item.name)
                        setBurgerExpandedCategory(null)
                      }}
                      className={cn(
                        "w-full text-left flex items-center justify-between gap-3 px-5 min-h-[52px] py-3 text-[16px] font-medium transition-colors active:bg-white/[0.08]",
                        "text-white/90 hover:text-white hover:bg-white/[0.04]"
                      )}
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 shrink-0 text-white/25" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 px-5 min-h-[52px] py-3 text-[16px] font-medium transition-colors active:bg-white/[0.08]",
                        "text-white/90 hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Mobile: Quick contact bar */}
          <div className="border-t border-white/[0.08] px-5 py-5 space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="tel:+74959374477"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Позвонить"
              >
                <Phone className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:info@arasaca.ru"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Написать"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Поиск"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Level 1: Sub-navigation (drill-down) */}
        <div
          className={cn(
            "absolute inset-0 overflow-y-auto transition-transform duration-300 ease-out bg-[#00313C]",
            burgerActive ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Sub-nav header with back button */}
          <div className="sticky top-0 z-10 bg-[#00313C] border-b border-white/[0.08]">
            <button
              type="button"
              onClick={() => {
                setBurgerActive(null)
                setBurgerExpandedCategory(null)
              }}
              className="flex items-center gap-2 px-5 py-3.5 text-[13px] text-white/50 hover:text-white/80 transition-colors w-full active:bg-white/[0.06]"
            >
              <ChevronRight className="w-3.5 h-3.5 rotate-180" />
              <span>Меню</span>
            </button>
          </div>

          {activeNav && (
            <div>
              {/* Section title + link */}
              <div className="px-5 pt-4 pb-2">
                <Link
                  href={activeNav.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 text-[#77e2c3] text-[17px] font-semibold hover:gap-3 transition-all"
                >
                  {activeNav.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* SERVICES: Category list with expandable items */}
              {activeNav.name === "Услуги" && "categories" in activeNav && (
                <div>
                  {activeNav.categories.map((category, idx) => {
                    const isCatExpanded = burgerExpandedCategory === idx
                    return (
                      <div key={category.name}>
                        <button
                          type="button"
                          onClick={() => setBurgerExpandedCategory(isCatExpanded ? null : idx)}
                          className={cn(
                            "w-full text-left flex items-center justify-between gap-2 px-5 min-h-[48px] py-3 transition-colors active:bg-white/[0.08]",
                            isCatExpanded
                              ? "text-[#77e2c3] bg-white/[0.05]"
                              : "text-white/75 hover:text-white hover:bg-white/[0.04]"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            {category.highlight && (
                              <span className="w-1.5 h-1.5 bg-[#77e2c3] rounded-full shrink-0" />
                            )}
                            <span className="text-[15px] font-medium">{category.name}</span>
                          </div>
                          <ChevronRight className={cn(
                            "w-4 h-4 shrink-0 transition-transform duration-200",
                            isCatExpanded ? "text-[#77e2c3] rotate-90" : "text-white/25"
                          )} />
                        </button>
                        {isCatExpanded && (
                          <div className="bg-white/[0.03] border-t border-b border-white/[0.05]">
                            <div className="py-1">
                              {category.services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-5 pl-8 py-3 text-white/55 hover:text-white text-[14px] leading-snug transition-colors active:bg-white/[0.06]"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 pl-8 pb-3 pt-1">
                              <Link
                                href={category.href}
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-1.5 text-[#77e2c3] text-[12px] font-semibold hover:gap-2.5 transition-all"
                              >
                                Все услуги раздела
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              {/* REGULAR SUBMENU items */}
              {activeNav.name !== "Услуги" && activeNav.submenu && (
                <div className="py-1">
                  {activeNav.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-3.5 text-white/75 hover:text-white text-[15px] font-medium transition-colors active:bg-white/[0.08] border-b border-white/[0.04] last:border-0"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* NO SUBMENU: show description */}
              {activeNav.name !== "Услуги" && !activeNav.submenu && "description" in activeNav && activeNav.description && (
                <div className="px-5 py-4">
                  <p className="text-white/40 text-[14px] leading-relaxed">
                    {activeNav.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={activeNav.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#77e2c3] text-[14px] font-semibold hover:gap-3 transition-all"
                    >
                      Перейти в раздел
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Section description (for items with submenu) */}
              {"description" in activeNav && activeNav.description && activeNav.submenu && (
                <div className="px-5 pt-4 pb-5 mt-2 border-t border-white/[0.06]">
                  <p className="text-white/30 text-[13px] leading-relaxed">
                    {activeNav.description}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Bottom CTA bar */}
      <div className="border-t border-white/[0.08] px-5 py-4 shrink-0 space-y-3">
        <Button
          asChild
          className="w-full bg-[#77e2c3] hover:bg-[#4dc9a5] text-[#00313C] font-semibold gap-2 text-[13px] uppercase tracking-wider h-11 rounded"
        >
          <Link href="/feedback?type=proposals" onClick={() => setIsOpen(false)}>
            Запросить КП
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          <a href="tel:+74959374477" className="text-white/50 text-[13px] hover:text-white/80 transition-colors">
            +7 (495) 937-44-77
          </a>
          <div className="flex items-center gap-3">
            <a href="#" className="text-white/30 hover:text-[#77e2c3] transition-colors" aria-label="ВКонтакте">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.762 9.224h-2.57c-.236 0-.378.264-.246.462.618.93.618 2.076 0 3.006-.132.198.01.462.246.462h2.57c.33 0 .594-.264.594-.594V9.818c0-.33-.264-.594-.594-.594zM12 15.69c-2.038 0-3.69-1.652-3.69-3.69S9.962 8.31 12 8.31s3.69 1.652 3.69 3.69-1.652 3.69-3.69 3.69zm8.37-8.436h-3.276c-.236 0-.378-.264-.246-.462.618-.93.618-2.076 0-3.006-.132-.198.01-.462.246-.462h3.276c.33 0 .594.264.594.594v2.742c0 .33-.264.594-.594.594z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-[#77e2c3] transition-colors" aria-label="Telegram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop: Full-screen burger menu */}
    {isOpen && (
      <div className="hidden lg:flex fixed inset-0 z-[100] bg-[#00313C] flex-col" role="dialog" aria-modal="true">
        {/* Desktop Top bar: Logo + Close + Utilities */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center leading-none">
            <span
              className="text-[28px] font-normal tracking-tight text-white leading-none"
              style={{ fontFamily: "var(--font-russo), sans-serif" }}
            >
              арасака
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Поиск"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Версия для слабовидящих"
            >
              <Eye className="w-5 h-5" />
            </button>
            <div className="w-px h-4 bg-white/20" />
            <button className="flex text-white/40 hover:text-white/70 transition-colors text-sm items-center gap-1">
              RU
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="w-px h-4 bg-white/20 ml-1" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Закрыть меню"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════
           DESKTOP: 3-column layout
           ══════════════════════════════════ */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* LEFT: Navigation categories */}
          <nav className="w-[240px] lg:w-[270px] shrink-0 border-r border-white/10 py-2 overflow-y-auto">
            {navigation.map((item) => {
              const hasSubmenu = !!(item.submenu || ("categories" in item))
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    if (hasSubmenu) {
                      setBurgerActive(burgerActive === item.name ? null : item.name)
                      setBurgerExpandedCategory(null)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  className={cn(
                    "w-full text-left flex items-center justify-between gap-2 px-7 py-3 text-[15px] font-medium transition-all",
                    burgerActive === item.name
                      ? "text-[#77e2c3] bg-white/[0.06]"
                      : "text-white/80 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <span>{item.name}</span>
                  {hasSubmenu && (
                    <ChevronRight className={cn(
                      "w-4 h-4 shrink-0 transition-transform duration-200",
                      burgerActive === item.name ? "text-[#77e2c3] rotate-0" : "text-white/30"
                    )} />
                  )}
                </button>
              )
            })}
          </nav>

          {/* MIDDLE AREA: 2nd level + 3rd level columns */}
          <div className="flex-1 flex min-h-0 overflow-hidden">
            {/* ─── 2ND LEVEL COLUMN ─── */}
            <div className={cn(
              "py-8 px-8 overflow-y-auto",
              activeNav?.name === "Услуги" && burgerExpandedCategory !== null
                ? "w-[270px] shrink-0 border-r border-white/10"
                : "flex-1"
            )}>
              {/* Nothing selected — show prompt */}
              {!activeNav && (
                <div className="flex flex-col justify-center h-full">
                  <p className="text-white/30 text-[15px] leading-relaxed">
                    Выберите раздел меню слева, чтобы увидеть содержание
                  </p>
                </div>
              )}

              {/* SERVICES: Categories list */}
              {activeNav && activeNav.name === "Услуги" && "categories" in activeNav && (
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Link
                      href={activeNav.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#77e2c3] text-[15px] font-semibold hover:gap-3 transition-all"
                    >
                      Все услуги
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="space-y-0">
                    {activeNav.categories.map((category, idx) => {
                      const isActive = burgerExpandedCategory === idx
                      return (
                        <button
                          key={category.name}
                          type="button"
                          onClick={() => setBurgerExpandedCategory(isActive ? null : idx)}
                          className={cn(
                            "w-full text-left flex items-center justify-between gap-2 py-3 px-2 transition-all",
                            isActive
                              ? "text-[#77e2c3] bg-white/[0.06]"
                              : "text-white/80 hover:text-white hover:bg-white/[0.04]"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            {category.highlight && (
                              <span className="w-1.5 h-1.5 bg-[#77e2c3] rounded-full" />
                            )}
                            <span className="text-[14px] font-medium">{category.name}</span>
                          </div>
                          <ChevronRight className={cn(
                            "w-4 h-4 shrink-0 transition-transform duration-200",
                            isActive ? "text-[#77e2c3]" : "text-white/30"
                          )} />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* REGULAR SUBMENU */}
              {activeNav && activeNav.name !== "Услуги" && activeNav.submenu && (
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Link
                      href={activeNav.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#77e2c3] text-lg font-semibold hover:gap-3 transition-all"
                    >
                      {activeNav.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-0">
                    {activeNav.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-white/80 hover:text-white text-[15px] font-medium transition-colors border-b border-white/[0.06]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                  {"description" in activeNav && activeNav.description && (
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-white/40 text-[13px] leading-relaxed max-w-lg">
                        {activeNav.description}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* NO SUBMENU */}
              {activeNav && activeNav.name !== "Услуги" && !activeNav.submenu && (
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Link
                      href={activeNav.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#77e2c3] text-lg font-semibold hover:gap-3 transition-all"
                    >
                      {activeNav.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {"description" in activeNav && activeNav.description && (
                    <p className="text-white/50 text-[14px] leading-relaxed max-w-lg">
                      {activeNav.description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* ─── 3RD LEVEL COLUMN: Services ─── */}
            {activeNav?.name === "Услуги" && "categories" in activeNav && burgerExpandedCategory !== null && (
              <div className="flex-1 py-8 px-8 overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Link
                      href={activeNav.categories[burgerExpandedCategory].href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#77e2c3] text-lg font-semibold hover:gap-3 transition-all"
                    >
                      {activeNav.categories[burgerExpandedCategory].name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-0">
                    {activeNav.categories[burgerExpandedCategory].services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-white/70 hover:text-white text-[14px] leading-snug transition-colors border-b border-white/[0.06]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={activeNav.categories[burgerExpandedCategory].href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#77e2c3] text-[13px] font-medium hover:gap-3 transition-all"
                    >
                      Перейти в раздел
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ─── RIGHT COLUMN: Contacts, CTA, policies ─── */}
          <div className="w-[290px] shrink-0 border-l border-white/10 py-8 px-6 overflow-y-auto flex flex-col">
            {/* Contacts */}
            <div className="mb-7">
              <h3 className="text-white/30 text-[11px] uppercase tracking-[0.2em] mb-4">Контакты</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Телефон</div>
                  <a href="tel:+74959374477" className="text-white/80 text-[14px] font-medium hover:text-white transition-colors">
                    +7 (495) 937-44-77
                  </a>
                </div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Почта</div>
                  <a href="mailto:info@arasaca.ru" className="text-white/80 text-[14px] font-medium hover:text-white transition-colors">
                    info@arasaca.ru
                  </a>
                </div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Адрес</div>
                  <span className="text-white/50 text-[13px] leading-relaxed">
                    Москва, Пресненская наб., 12
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mb-7">
              <h3 className="text-white/30 text-[11px] uppercase tracking-[0.2em] mb-3">Соцсети</h3>
              <div className="flex items-center gap-3">
                <a href="#" className="text-white/40 hover:text-[#77e2c3] transition-colors" aria-label="ВКонтакте">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.762 9.224h-2.57c-.236 0-.378.264-.246.462.618.93.618 2.076 0 3.006-.132.198.01.462.246.462h2.57c.33 0 .594-.264.594-.594V9.818c0-.33-.264-.594-.594-.594zM12 15.69c-2.038 0-3.69-1.652-3.69-3.69S9.962 8.31 12 8.31s3.69 1.652 3.69 3.69-1.652 3.69-3.69 3.69zm8.37-8.436h-3.276c-.236 0-.378-.264-.246-.462.618-.93.618-2.076 0-3.006-.132-.198.01-.462.246-.462h3.276c.33 0 .594.264.594.594v2.742c0 .33-.264.594-.594.594z"/></svg>
                </a>
                <a href="#" className="text-white/40 hover:text-[#77e2c3] transition-colors" aria-label="Telegram">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-7">
              <Button
                asChild
                className="w-full bg-[#77e2c3] hover:bg-[#4dc9a5] text-[#00313C] font-semibold gap-2 text-[12px] uppercase tracking-wider h-10"
              >
                <Link href="/feedback?type=proposals" onClick={() => setIsOpen(false)}>
                  Запросить КП
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="w-full border-white/20 text-white/70 hover:bg-white/[0.06] hover:text-white font-medium gap-2 text-[12px] uppercase tracking-wider h-10"
              >
                <Link href="/subscribe" onClick={() => setIsOpen(false)}>
                  Подписаться на дайджест
                </Link>
              </Button>
            </div>

            {/* Policies & legal */}
            <div className="mt-auto">
              <div className="border-t border-white/10 pt-5 space-y-2.5">
                <Link
                  href="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="block text-white/30 hover:text-white/60 text-[12px] transition-colors"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setIsOpen(false)}
                  className="block text-white/30 hover:text-white/60 text-[12px] transition-colors"
                >
                  Пользовательское соглашение
                </Link>
                <Link
                  href="/legal"
                  onClick={() => setIsOpen(false)}
                  className="block text-white/30 hover:text-white/60 text-[12px] transition-colors"
                >
                  Правовая информация
                </Link>
                <Link
                  href="/cookies"
                  onClick={() => setIsOpen(false)}
                  className="block text-white/30 hover:text-white/60 text-[12px] transition-colors"
                >
                  Использование cookies
                </Link>
              </div>
              <div className="mt-4">
                <span className="text-white/20 text-[11px]">© {new Date().getFullYear()} Арасака Консалтинг</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
