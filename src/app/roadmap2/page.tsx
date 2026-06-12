"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Briefcase,
  Layers,
  Newspaper,
  Mail,
  Building2,
  Home,
  Users,
  Heart,
  FolderOpen,
  Factory,
  MapPin,
  Check,
  RotateCcw,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════
   COLOUR PALETTE
   ═══════════════════════════════════════════════════════ */
const C = {
  dna: "#008C95",
  dark: "#00313C",
  mint: "#77e2c3",
  mintDark: "#4dc9a5",
  orange: "#E04E39",
  muted: "#f1f2f4",
  white: "#ffffff",
  textDark: "#1a1a1a",
  textMid: "#494a4a",
  textMuted: "#6b7280",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
};

const vp = { once: true, amount: 0.1 as const };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
interface L { name: string; href: string }
interface Sub { title: string; links: L[] }
interface Cat {
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accent: string;
  links: L[];
  subs?: Sub[];
}

const categories: Cat[] = [
  {
    title: "Главная",
    icon: Home,
    accent: C.dna,
    links: [{ name: "Главная страница", href: "/" }],
  },
  {
    title: "О компании",
    icon: Building2,
    accent: C.dna,
    links: [
      { name: "О компании", href: "/about" },
      { name: "Клиенты", href: "/customers" },
      { name: "Арасака.Лаб", href: "/lab" },
    ],
  },
  {
    title: "Кейсы",
    icon: FolderOpen,
    accent: C.orange,
    links: [{ name: "Все кейсы", href: "/cases" }],
    subs: [
      {
        title: "Проекты",
        links: [
          { name: "Инструмент ФЭ-моделирования мастер-плана", href: "/cases/instrument-feh-modelirovaniya-master-plan" },
          { name: "Бизнес-план GaN-on-Diamond", href: "/cases/biznes-plan-gan-almaz-vander-technologies" },
          { name: "Бизнес-модель БПЛА", href: "/cases/biznes-model-pokrov-vozduh-monitoring-etapov" },
          { name: "ФЭ-модели мастер-плана Шарыпова", href: "/cases/fe-modeli-master-plan-sharypovo" },
          { name: "ФЭ-модели мастер-плана Чеченской Республики", href: "/cases/fe-modeli-master-plan-chechenskaya-respublika" },
          { name: "Бизнес-план стендового комплекса СПГ", href: "/cases/biznes-plan-spg-stend-rosatom-novatek" },
          { name: "Бизнес-план линейки насосов ГЭН", href: "/cases/biznes-plan-nasosnoe-oborudovanie-gnx" },
        ],
      },
    ],
  },
  {
    title: "Отрасли",
    icon: Factory,
    accent: C.mintDark,
    links: [{ name: "Все отрасли", href: "/industries" }],
    subs: [
      {
        title: "Ключевые отрасли",
        links: [
          { name: "Атомная промышленность", href: "/industries/nuclear" },
          { name: "Строительство и девелопмент", href: "/industries/construction" },
          { name: "Урбанистика и градостроительство", href: "/industries/urbanistics" },
          { name: "IT и цифровые технологии", href: "/industries/it" },
          { name: "Государственный сектор", href: "/industries/government" },
          { name: "Машиностроение и производство", href: "/industries/manufacturing" },
          { name: "Судостроение и морская техника", href: "/industries/shipbuilding" },
          { name: "Оборонно-промышленный комплекс", href: "/industries/defense" },
          { name: "Нефть, газ и нефтехимия", href: "/industries/oil-gas" },
        ],
      },
      {
        title: "Дополнительные отрасли",
        links: [
          { name: "АПК и пищевая промышленность", href: "/industries/agro" },
          { name: "Авиационная промышленность", href: "/industries/aerospace" },
          { name: "Энергетика и ЖКХ", href: "/industries/energy" },
          { name: "Металлургия и горнодобыча", href: "/industries/mining-metallurgy" },
          { name: "Финансовый сектор и банки", href: "/industries/finance" },
          { name: "Медицина и фармацевтика", href: "/industries/healthcare" },
          { name: "Образование и наука", href: "/industries/education" },
          { name: "Ритейл и торговля", href: "/industries/retail" },
          { name: "Транспорт и логистика", href: "/industries/logistics" },
          { name: "Связь и телеком", href: "/industries/telecom" },
          { name: "Химическая промышленность", href: "/industries/chemicals" },
          { name: "Лесная и деревообработка", href: "/industries/forestry" },
        ],
      },
    ],
  },
  {
    title: "Карьера",
    icon: Users,
    accent: C.dna,
    links: [
      { name: "Карьера", href: "/career" },
      { name: "Вакансии", href: "/career/vacancies" },
    ],
  },
  {
    title: "Pro Bono",
    icon: Heart,
    accent: C.orange,
    links: [{ name: "Pro Bono", href: "/pro-bono" }],
  },
  {
    title: "Услуги",
    icon: Briefcase,
    accent: C.orange,
    links: [{ name: "Все услуги", href: "/services" }],
    subs: [
      {
        title: "Консалтинг",
        links: [
          { name: "Обзор направления", href: "/services/consulting" },
          { name: "Стратегический консалтинг", href: "/services/consulting/strategic-consulting" },
          { name: "Финансовый консалтинг и моделирование", href: "/services/consulting/financial-consulting" },
          { name: "Операционный консалтинг и оптимизация", href: "/services/consulting/operational-consulting" },
          { name: "Меры государственной поддержки", href: "/services/consulting/government-support" },
          { name: "Инвестиционное проектирование", href: "/services/consulting/investment-design" },
          { name: "Управление проектами", href: "/services/consulting/project-management" },
          { name: "Отчётность и раскрытие информации", href: "/services/consulting/reporting-disclosure" },
        ],
      },
      {
        title: "Аналитика и исследования",
        links: [
          { name: "Обзор направления", href: "/services/analytics" },
          { name: "Рыночная аналитика и конкурентные исследования", href: "/services/analytics/market-analytics" },
          { name: "Экономические и отраслевые исследования", href: "/services/analytics/economic-research" },
          { name: "Аналитика данных и моделирование", href: "/services/analytics/data-analytics" },
          { name: "Аналитика данных (статическая)", href: "/services/data-analytics" },
          { name: "Экономические исследования (статическая)", href: "/services/economic-research" },
          { name: "Исследования (статическая)", href: "/services/research" },
          { name: "Маркетинговые исследования (статическая)", href: "/services/market-research" },
        ],
      },
      {
        title: "Технологии",
        links: [
          { name: "Обзор направления", href: "/services/technologies" },
          { name: "Цифровая трансформация и стратегия", href: "/services/technologies/digital-transformation" },
          { name: "ИТ-аудит и Due Diligence", href: "/services/technologies/it-audit" },
          { name: "Разработка и внедрение ИТ-решений", href: "/services/technologies/development" },
          { name: "Корпоративные инновации и R&D", href: "/services/technologies/innovation" },
          { name: "Промышленная автоматизация и IIoT", href: "/services/technologies/industrial-automation" },
          { name: "Облачные решения и инфраструктура", href: "/services/technologies/cloud" },
        ],
      },
      {
        title: "Инжиниринг",
        links: [
          { name: "Обзор направления", href: "/services/engineering" },
          { name: "Предпроектная проработка", href: "/services/engineering/pre-project" },
          { name: "Экспертиза капитальных проектов", href: "/services/engineering/expertise" },
          { name: "Управление строительными проектами", href: "/services/engineering/construction-management" },
        ],
      },
      {
        title: "HR и организационное развитие",
        links: [
          { name: "Обзор направления", href: "/services/hr" },
          { name: "Управление человеческим капиталом", href: "/services/hr/human-capital-management" },
          { name: "Организационное развитие и трансформация", href: "/services/hr/organizational-development" },
          { name: "HR-аналитика и цифровизация", href: "/services/hr/hr-analytics" },
        ],
      },
      {
        title: "Обучение и развитие",
        links: [
          { name: "Обзор направления", href: "/services/learning" },
          { name: "Корпоративные программы развития", href: "/services/learning/corporate-development" },
          { name: "Lean & 5С и производственные практики", href: "/services/learning/lean-production" },
          { name: "Управление знаниями и образовательная стратегия", href: "/services/learning/knowledge-management" },
          { name: "Арасака. Корпоративная академия", href: "/services/learning/arasaca-academy" },
        ],
      },
      {
        title: "Коммуникации и бренд",
        links: [
          { name: "Обзор направления", href: "/services/communications" },
          { name: "Бренд и позиционирование", href: "/services/communications/brand-positioning" },
          { name: "Коммуникационные стратегии", href: "/services/communications/communication-strategy" },
          { name: "Медийное присутствие и репутация", href: "/services/communications/media-reputation" },
          { name: "Корпоративная идентичность и культура", href: "/services/communications/corporate-culture" },
        ],
      },
      {
        title: "Стартапы и инновации",
        links: [
          { name: "Обзор направления", href: "/services/startups" },
          { name: "Развитие стартапов", href: "/services/startups/startup-development" },
          { name: "Инновации и R&D сопровождение", href: "/services/startups/innovation-rd" },
          { name: "Корпоративные инновации", href: "/services/startups/corporate-innovation" },
        ],
      },
      {
        title: "Развитие территорий",
        links: [
          { name: "Обзор направления", href: "/services/territorial-development" },
          { name: "Пространственное и стратегическое планирование", href: "/services/territorial-development/spatial-strategic-planning" },
          { name: "Экономическое моделирование и сопровождение", href: "/services/territorial-development/economic-modeling" },
          { name: "Механизмы реализации и институциональные модели", href: "/services/territorial-development/implementation-mechanisms" },
        ],
      },
      {
        title: "Урбанистика",
        links: [
          { name: "Урбанистика — обзор", href: "/services/urban" },
          { name: "Мастер-планирование", href: "/services/urban/master-planning" },
          { name: "Экономика территорий", href: "/services/urban/territory-economics" },
          { name: "Инфраструктура", href: "/services/urban/infrastructure" },
        ],
      },
    ],
  },
  {
    title: "Решения и продукты",
    icon: Layers,
    accent: C.mintDark,
    links: [
      { name: "Все решения", href: "/solutions" },
      { name: "Мастер-планирование", href: "/solutions/master-planning" },
    ],
  },
  {
    title: "Медиа",
    icon: Newspaper,
    accent: C.dna,
    links: [
      { name: "Пресс-центр", href: "/press-center" },
      { name: "Все публикации", href: "/media" },
      { name: "Новости", href: "/media/news" },
      { name: "Статьи", href: "/media/articles" },
      { name: "Инсайты", href: "/media/insights" },
    ],
    subs: [
      {
        title: "Страницы новостей",
        links: [{ name: "Ребрендинг", href: "/media/news/rebranding" }],
      },
    ],
  },
  {
    title: "Контакты",
    icon: Mail,
    accent: C.orange,
    links: [{ name: "Страница контактов", href: "/contacts" }],
  },
];

/* ═══════════════════════════════════════════════════════
   CHECKBOX LINK COMPONENTS
   ═══════════════════════════════════════════════════════ */
function CheckLink({
  link,
  accent,
  checked,
  onToggle,
}: {
  link: L;
  accent: string;
  checked: boolean;
  onToggle: (href: string) => void;
}) {
  return (
    <div className="group/l flex items-center gap-2.5 py-2.5 border-b transition-colors" style={{ borderColor: C.borderLight }}>
      <button
        onClick={() => onToggle(link.href)}
        className="shrink-0 flex h-[18px] w-[18px] items-center justify-center rounded border-2 transition-all duration-150 cursor-pointer"
        style={{
          borderColor: checked ? accent : C.border,
          background: checked ? accent : "transparent",
        }}
        aria-label={checked ? `Отменить: ${link.name}` : `Проверено: ${link.name}`}
      >
        {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-[13.5px] font-medium transition-all duration-200"
          style={{
            color: checked ? C.textMuted : C.textDark,
            textDecoration: checked ? "line-through" : "none",
            textDecorationColor: checked ? accent : undefined,
            textDecorationThickness: checked ? "2px" : undefined,
          }}
        >
          {link.name}
        </span>
      </Link>
    </div>
  );
}

function CheckSubLink({
  link,
  accent,
  checked,
  onToggle,
}: {
  link: L;
  accent: string;
  checked: boolean;
  onToggle: (href: string) => void;
}) {
  return (
    <div className="group/l flex items-center gap-2 py-2 border-b" style={{ borderColor: C.borderLight }}>
      <button
        onClick={() => onToggle(link.href)}
        className="shrink-0 flex h-[16px] w-[16px] items-center justify-center rounded border-2 transition-all duration-150 cursor-pointer"
        style={{
          borderColor: checked ? accent : C.border,
          background: checked ? accent : "transparent",
        }}
        aria-label={checked ? `Отменить: ${link.name}` : `Проверено: ${link.name}`}
      >
        {checked && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
      </button>
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-[13px] transition-all duration-200 truncate"
          style={{
            color: checked ? C.textMuted : C.textMid,
            textDecoration: checked ? "line-through" : "none",
            textDecorationColor: checked ? accent : undefined,
            textDecorationThickness: checked ? "2px" : undefined,
          }}
        >
          {link.name}
        </span>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function Roadmap2Page() {
  const STORAGE_KEY = "roadmap2-checked";

  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  /* Load from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {}
    setMounted(true);
  }, []);

  /* Save to localStorage */
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {}
  }, [checked, mounted]);

  const toggle = (href: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  };

  const resetAll = () => setChecked(new Set());

  /* Totals */
  const allHrefs: string[] = [];
  categories.forEach((cat) => {
    cat.links.forEach((l) => allHrefs.push(l.href));
    cat.subs?.forEach((s) => s.links.forEach((l) => allHrefs.push(l.href)));
  });
  const totalLinks = allHrefs.length;
  const checkedCount = allHrefs.filter((h) => checked.has(h)).length;
  const progress = totalLinks > 0 ? Math.round((checkedCount / totalLinks) * 100) : 0;

  return (
    <main className="min-h-screen flex flex-col" style={{ background: C.muted }}>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden pt-16 lg:pt-[120px] pb-14 md:pb-16" style={{ background: C.dark }}>
        <div className="container-kept relative z-10 pt-6 md:pt-10 lg:pt-12">
          <motion.nav
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
              Главная
            </Link>
            <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
            <span className="text-[12px] font-medium" style={{ color: C.mint }}>Проверка страниц</span>
          </motion.nav>

          <div className="flex items-end gap-6 md:gap-10 flex-wrap">
            <div>
              <motion.h1
                className="mb-3"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: C.white,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Roadmap проверки
              </motion.h1>
              <motion.p
                className="max-w-lg text-[14px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Отмечайте проверенные страницы — прогресс сохраняется в&nbsp;браузере
              </motion.p>
            </div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 px-5 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <MapPin className="w-5 h-5" style={{ color: C.mint }} />
              <div>
                <div className="text-[22px] font-bold tabular-nums" style={{ color: C.white }}>
                  {checkedCount} <span className="text-[14px] font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>/ {totalLinks}</span>
                </div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>проверено</div>
              </div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%`, background: progress === 100 ? C.mint : C.dna }}
                />
              </div>
              <span className="text-[13px] font-semibold tabular-nums" style={{ color: C.mint }}>{progress}%</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8" style={{ background: C.muted, borderRadius: "24px 24px 0 0" }} />
      </section>

      {/* ══════════ TOOLBAR ══════════ */}
      <section className="pt-2 pb-6">
        <div className="container-kept flex items-center justify-between flex-wrap gap-3">
          <div className="text-[13px]" style={{ color: C.textMuted }}>
            {checkedCount === 0
              ? "Нажмите на галочку рядом со страницей после проверки"
              : progress === 100
              ? "Все страницы проверены!"
              : `Осталось проверить: ${totalLinks - checkedCount} страниц`}
          </div>
          {checkedCount > 0 && (
            <button
              onClick={resetAll}
              className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-200"
              style={{ color: C.orange }}
            >
              <RotateCcw className="w-3 h-3" />
              Сбросить всё
            </button>
          )}
        </div>
      </section>

      {/* ══════════ ALL CATEGORIES ══════════ */}
      <section className="pb-16 lg:pb-24">
        <div className="container-kept space-y-6">
          {categories.map((cat) => {
            const hasSubs = cat.subs && cat.subs.length > 0;
            const catHrefs: string[] = [];
            cat.links.forEach((l) => catHrefs.push(l.href));
            cat.subs?.forEach((s) => s.links.forEach((l) => catHrefs.push(l.href)));
            const catChecked = catHrefs.filter((h) => checked.has(h)).length;
            const catTotal = catHrefs.length;
            const catProgress = catTotal > 0 ? Math.round((catChecked / catTotal) * 100) : 0;
            const catDone = catChecked === catTotal && catTotal > 0;

            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0}
              >
                <div
                  className="rounded-2xl overflow-hidden bg-white transition-all duration-300"
                  style={{
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                    opacity: catDone ? 0.55 : 1,
                  }}
                >
                  {/* Bar */}
                  <div
                    className="h-1 transition-all duration-500"
                    style={{ background: catDone ? C.mintDark : cat.accent }}
                  />

                  <div className="p-5 md:p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ background: `${cat.accent}12` }}
                      >
                        <cat.icon className="h-[18px] w-[18px]" style={{ color: cat.accent }} />
                      </div>
                      <h2 className="text-[17px] font-bold" style={{ color: C.textDark }}>
                        {cat.title}
                        {catDone && (
                          <span className="ml-2 text-[12px] font-medium" style={{ color: C.mintDark }}>
                            ✓ готово
                          </span>
                        )}
                      </h2>
                      <div className="flex-1 h-px" style={{ background: C.borderLight }} />
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: `${cat.accent}15` }}>
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{ width: `${catProgress}%`, background: catDone ? C.mintDark : cat.accent }}
                          />
                        </div>
                        <span className="text-[11px] font-medium tabular-nums" style={{ color: cat.accent }}>
                          {catChecked}/{catTotal}
                        </span>
                      </div>
                    </div>

                    {/* Main links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-0">
                      {cat.links.map((link) => (
                        <CheckLink
                          key={link.href}
                          link={link}
                          accent={cat.accent}
                          checked={checked.has(link.href)}
                          onToggle={toggle}
                        />
                      ))}
                    </div>

                    {/* Sub-directions */}
                    {hasSubs && (
                      <div className="mt-5 space-y-5">
                        {cat.subs!.map((sub) => (
                          <div key={sub.title}>
                            <div className="flex items-center gap-2 mb-2.5">
                              <div className="w-2 h-2 rounded-full" style={{ background: cat.accent }} />
                              <h3
                                className="text-[12px] font-semibold uppercase tracking-[0.12em]"
                                style={{ color: cat.accent }}
                              >
                                {sub.title}
                              </h3>
                              <div className="flex-1 h-px" style={{ background: `${cat.accent}20` }} />
                              <span className="text-[10px] font-medium tabular-nums" style={{ color: cat.accent, opacity: 0.7 }}>
                                {sub.links.filter((l) => checked.has(l.href)).length}/{sub.links.length}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-0 pl-4">
                              {sub.links.map((link) => (
                                <CheckSubLink
                                  key={link.href}
                                  link={link}
                                  accent={cat.accent}
                                  checked={checked.has(link.href)}
                                  onToggle={toggle}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-16 lg:py-20 mt-auto" style={{ background: C.dark }}>
        <div className="container-kept">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, color: C.white }}
            >
              {progress === 100 ? "Все страницы проверены!" : "Проверяйте страницы по порядку"}
            </h2>
            <p className="text-[14px] mt-3" style={{ color: "rgba(255,255,255,0.55)" }}>
              {progress === 100
                ? "Отличная работа! Все разделы сайта прошли проверку."
                : "Состояние сохраняется в браузере — можно закрыть и вернуться позже."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
