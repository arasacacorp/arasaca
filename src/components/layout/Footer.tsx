"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

const navigationColumns = [
  {
    title: "Услуги",
    links: [
      { name: "Консалтинг", href: "/services/consulting" },
      { name: "Аналитика и исследования", href: "/services/analytics" },
      { name: "Технологии", href: "/services/technologies" },
      { name: "Все услуги", href: "/services" },
    ],
  },
  {
    title: "Решения",
    links: [
      { name: "Платформа мастер-планирования", href: "/solutions/master-planning" },
    ],
  },
  {
    title: "Компания",
    links: [
      { name: "О нас", href: "/about" },
      { name: "Кейсы", href: "/cases" },
      { name: "Клиенты", href: "/customers" },
      { name: "Pro bono", href: "/pro-bono" },
      { name: "Публикации", href: "/press-center" },
      { name: "Отрасли", href: "/industries" },
      { name: "Карьера", href: "/career" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { name: "+7 (495) 937 4477", href: "tel:+74959374477" },
      { name: "info@arasaca.ru", href: "mailto:info@arasaca.ru" },
      { name: "Страница контактов", href: "/contacts" },
      { name: "Обратная связь", href: "/feedback" },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  // Hide footer on full-screen pages (e.g. feedback form)
  if (pathname === "/feedback") return null

  return (
    <footer className="bg-[#00313C] text-white footer-sibur">
      <div className="container-kept">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link href="/" className="inline-block mb-6 leading-none">
                <span
                  className="text-[32px] font-normal tracking-tight text-white leading-none"
                  style={{ fontFamily: "var(--font-russo), sans-serif" }}
                >
                  арасака
                </span>
              </Link>
              <p className="text-white/60 max-w-sm leading-relaxed mb-6">
                Консалтинговая компания, специализирующаяся на повышении
                эффективности бизнеса и цифровой трансформации.
              </p>
              <address className="text-sm text-white/40 not-italic">
                Москва, Пресненская набережная, 12
              </address>
            </div>

            {/* Navigation columns */}
            {navigationColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-[#77e2c3] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-white/60">
              Готовы обсудить ваш проект?
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors group"
            >
              Связаться
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} Арасака. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Условия использования
            </Link>
            <Link
              href="/map"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
