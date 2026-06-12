"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "Москва, Ленинградский проспект 34А",
    href: "/contacts",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 495 937 4477",
    href: "tel:+74959374477",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@arasaca.ru",
    href: "mailto:info@arasaca.ru",
  },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#008C95] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/30 text-sm font-medium mb-4">07</div>
            <h2 className="text-5xl font-bold text-white mb-6">Контакты</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным для вас
              способом.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-4 group"
                >
                  <contact.icon className="w-5 h-5 text-white/50 group-hover:text-[#77e2c3] transition-colors mt-0.5" />
                  <div>
                    <div className="text-white/50 text-sm mb-1">
                      {contact.label}
                    </div>
                    <div className="text-white group-hover:text-[#77e2c3] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Link to full contacts page */}
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 mt-8 text-white hover:text-[#77e2c3] transition-colors group"
            >
              <span>Все контакты</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1 py-16 lg:py-0">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#008C95] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">07</div>
          <h2 className="text-4xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-white/70">
            Свяжитесь с нами для обсуждения вашего проекта.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 lg:p-16 lg:flex lg:items-center lg:min-h-screen"
        >
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Оставьте заявку
            </h3>

            {/* Mobile contacts */}
            <div className="lg:hidden mb-8 space-y-4">
              {contacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#008C95] transition-colors"
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.value}</span>
                </Link>
              ))}
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 text-[#008C95] font-medium mt-4"
              >
                <span>Все контакты</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors"
                  placeholder="email@company.ru"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#008C95] focus:outline-none transition-colors resize-none"
                  placeholder="Опишите ваш проект или задачу"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#E04E39] text-white font-medium hover:bg-[#c94330] transition-colors flex items-center justify-center gap-2 group"
                >
                  Отправить заявку
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/contacts"
                  className="hidden lg:inline-flex items-center gap-2 px-8 py-4 border border-[#008C95] text-[#008C95] font-medium hover:bg-[#e8f5f3] transition-colors"
                >
                  Все контакты
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
