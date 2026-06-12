"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Newspaper } from "lucide-react";

export default function RebrandingNewsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero / Breadcrumbs */}
      <section className="relative pt-16 lg:pt-[120px] pb-10 bg-gradient-to-b from-[#e8f5f3] to-white">
        <div className="container-kept pt-6 md:pt-10 lg:pt-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#008C95]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/media" className="hover:text-[#008C95]">
              Медиацентр
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/media/news" className="hover:text-[#008C95]">
              Новости
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#008C95]">
              Мы провели ребрендинг — и это отличная возможность заново представить себя
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-[#008C95]" />
                Новость компании
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                13 мая 2025
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#008C95] mb-4 leading-tight">
              Мы провели ребрендинг — и это отличная возможность заново представить себя
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Новый визуальный облик АРАСАКА Консалтинг отражает то, кем мы стали, и
              подчеркивает наши ключевые принципы: глубокую экспертизу, ответственность
              за результат и внимание к сути.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[40px]"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,40 L600,0 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept max-w-3xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            Новый облик — та же суть. Мы обновили фирменный стиль, чтобы точнее отражать,
            кто мы есть сегодня и куда идем вместе с нашими клиентами. За визуальными
            изменениями стоит всё то же, что всегда было в основе нашей работы: глубокая
            экспертиза, ответственность за результат и внимание к сути.
          </p>

          <p>
            АРАСАКА Консалтинг — это команда, которая помогает управлять сложными
            процессами, реализовывать важные проекты и достигать устойчивого роста. Мы
            работаем с крупными компаниями, государственными структурами и
            инфраструктурными инициативами, где особенно важны системный подход и точное
            исполнение.
          </p>

          <p>
            Мы специализируемся на трёх ключевых направлениях: повышении эффективности
            управления, цифровой трансформации и управлении инвестиционными программами и
            проектами. Мы проводим диагностику, настраиваем процессы, внедряем цифровые
            решения и сопровождаем проекты на всех этапах. Для нас это не просто
            консалтинг, а практическая реализация изменений, которые действительно
            работают.
          </p>

          <p>
            Ребрендинг — это не только про новый логотип и визуальный стиль. Это шаг,
            который помогает нам ещё яснее транслировать нашу позицию и ценности,
            говорить с клиентами на одном языке и строить коммуникацию, соответствующую
            масштабам задач, с которыми мы работаем.
          </p>

          <p>
            Спасибо, что вы с нами — давно или только знакомитесь. Мы открыты к диалогу
            и будем рады рассказать подробнее, чем можем быть полезны именно вам и вашему
            проекту. Новый этап для нас — это новые возможности для совместной работы.
          </p>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-16 bg-white">
        <div className="container-kept max-w-3xl">
          <Link
            href="/media/news"
            className="inline-flex items-center gap-2 text-[#008C95] font-medium hover:underline"
          >
            <ChevronRight className="w-4 h-4 -rotate-180" />
            Ко всем новостям
          </Link>
        </div>
      </section>
    </main>
  );
}

