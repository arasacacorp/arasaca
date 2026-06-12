"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Конференция «Цифровая экономика 2026»",
    date: "15 февраля 2026",
    location: "Москва, Центр событий",
    type: "Конференция",
    upcoming: true,
  },
  {
    title: "Вебинар: Стратегии роста в неопределённости",
    date: "20 января 2026",
    location: "Онлайн",
    type: "Вебинар",
    upcoming: true,
  },
  {
    title: "Круглый стол: ESG-трансформация",
    date: "28 января 2026",
    location: "Москва, Отель «Метрополь»",
    type: "Круглый стол",
    upcoming: true,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#f1f2f4] py-20">
      <div className="container-kept">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-[#008C95] text-sm font-medium mb-4">
              04
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Мероприятия
            </h2>
          </div>
          <p className="text-gray-500 max-w-md lg:text-right">
            Конференции, вебинары и круглые столы с участием наших экспертов.
          </p>
        </motion.div>

        {/* Events list */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href="#"
                className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 bg-white border border-gray-200 hover:border-[#008C95] transition-colors group"
              >
                {/* Type badge */}
                <div className="flex-shrink-0">
                  <span className="px-3 py-1 bg-[#008C95] text-white text-xs font-medium">
                    {event.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#008C95] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#008C95] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All events link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-10 border-t border-gray-300 flex justify-center"
        >
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#008C95] text-[#008C95] font-medium hover:bg-[#008C95] hover:text-white transition-colors"
          >
            Все мероприятия
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
