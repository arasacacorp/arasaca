"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Briefcase,
  Clock,
  Filter,
  Search,
  X,
  Users,
  Sparkles,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  BarChart3,
  Cpu,
  Wrench,
  Heart,
  Target,
  Layers,
  Newspaper,
} from "lucide-react";
import { C } from "@/lib/colors";

const vp = { once: true, amount: 0.15 as const };

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

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const departmentIcons: Record<string, typeof Briefcase> = {
  "Консалтинг": Briefcase,
  "Аналитика и исследования": BarChart3,
  "Технологии": Cpu,
  "Инжиниринг": Wrench,
  "HR и организация": Users,
  "Обучение": GraduationCap,
  "Коммуникации и бренд": Target,
  "Стартапы и инновации": Sparkles,
  "Развитие территорий": Building2,
};

const departmentColors: Record<string, string> = {
  "Консалтинг": C.dark,
  "Аналитика и исследования": C.dna,
  "Технологии": C.orange,
  "Инжиниринг": C.mintDark,
  "HR и организация": C.dna,
  "Обучение": C.mintDark,
  "Коммуникации и бренд": C.orange,
  "Стартапы и инновации": C.dark,
  "Развитие территорий": C.mintDark,
};

const vacanciesList = [
  {
    id: "1",
    title: "Консультант по стратегии",
    department: "Консалтинг",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    level: "Middle",
    description:
      "Участие в проектах по разработке стратегии, организационному развитию и трансформации для клиентов из промышленности и госсектора.",
    requirements: [
      "Высшее образование (экономика, менеджмент)",
      "Опыт в консалтинге от 2 лет",
      "Аналитическое мышление, навыки структурирования",
    ],
  },
  {
    id: "2",
    title: "Аналитик (исследования и данные)",
    department: "Аналитика и исследования",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    level: "Junior",
    description:
      "Проведение маркетинговых и отраслевых исследований, подготовка аналитических отчётов и визуализация данных.",
    requirements: [
      "Высшее образование (экономика, статистика, Data Science)",
      "Владение Python/SQL",
      "Опыт работы с данными от 1 года",
    ],
  },
  {
    id: "3",
    title: "Специалист по проектному управлению",
    department: "Инжиниринг",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    level: "Middle",
    description:
      "Сопровождение инвестиционных и строительных проектов: планирование, контроль сроков и бюджета, отчётность.",
    requirements: [
      "Высшее техническое образование",
      "Опыт управления проектами от 3 лет",
      "Знание методологий управления проектами",
    ],
  },
  {
    id: "4",
    title: "Консультант по цифровой трансформации",
    department: "Технологии",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    level: "Middle",
    description:
      "Участие в проектах по внедрению ИТ-решений, оценке зрелости и разработке дорожных карт цифровизации.",
    requirements: [
      "Опыт в ИТ-консалтинге от 2 лет",
      "Понимание архитектуры ИТ-систем",
      "Навыки бизнес-анализа",
    ],
  },
  {
    id: "5",
    title: "Специалист по господдержке",
    department: "Консалтинг",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    level: "Junior",
    description:
      "Подготовка заявок на меры господдержки, сопровождение проектов по привлечению льготного финансирования.",
    requirements: [
      "Высшее образование (экономика, право)",
      "Знание программ господдержки",
      "Опыт подготовки документации",
    ],
  },
  {
    id: "6",
    title: "Менеджер по развитию бизнеса",
    department: "Консалтинг",
    location: "Москва",
    type: "Полная занятость",
    level: "Senior",
    description:
      "Поиск и привлечение новых клиентов, развитие отношений с существующими, подготовка коммерческих предложений.",
    requirements: [
      "Опыт в B2B-продажах от 5 лет",
      "Понимание консалтингового рынка",
      "Развитые навыки переговоров",
    ],
  },
  {
    id: "7",
    title: "Инженер-проектировщик",
    department: "Инжиниринг",
    location: "Москва",
    type: "Полная занятость",
    level: "Middle",
    description:
      "Разработка проектной документации, технико-экономическое обоснование, сопровождение проектных решений.",
    requirements: [
      "Высшее инженерное образование",
      "Опыт проектирования от 3 лет",
      "Владение AutoCAD / Revit",
    ],
  },
  {
    id: "8",
    title: "Data Engineer",
    department: "Технологии",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    level: "Middle",
    description:
      "Проектирование и разработка хранилищ данных, ETL-процессов, обеспечение качества данных для аналитики.",
    requirements: [
      "Опыт с SQL, Python, Airflow",
      "Знание облачных платформ",
      "Понимание принципов Data Lake / DWH",
    ],
  },
];

const departments = [
  "Все направления",
  "Консалтинг",
  "Аналитика и исследования",
  "Инжиниринг",
  "Технологии",
];

const locations = ["Все города", "Санкт-Петербург", "Москва"];

const levelBadges: Record<string, { label: string; color: string }> = {
  Junior: { label: "Junior", color: C.mintDark },
  Middle: { label: "Middle", color: C.dna },
  Senior: { label: "Senior", color: C.orange },
};

const CV_EMAIL = "info@arasaca.ru";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em]"
      style={{ color: C.dna }}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
    >
      {children}
    </motion.span>
  );
}

const sectionCards = [
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
    bg: C.white,
    textColor: C.textDark,
    href: "/solutions/master-planning",
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

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[120px]" style={{ background: C.dark }}>
      {/* Decorative diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)`,
        }}
      />
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{ background: "rgba(0,140,149,0.15)" }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{ background: "rgba(119,226,195,0.08)" }}
      />

      <div className="container-kept relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between py-6 md:py-10 lg:py-12">
          {/* LEFT: Text content */}
          <motion.div
            className="flex-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                Главная
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <Link href="/career" className="text-[12px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                Карьера
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
              <span className="text-[12px] font-medium" style={{ color: C.mint }}>Вакансии</span>
            </motion.nav>

            {/* Label badge */}
            <span
              className="mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ borderColor: "rgba(119,226,195,0.4)", color: C.mint }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
              Открытые позиции
            </span>

            {/* Main heading */}
            <motion.h1
              className="mb-4 max-w-lg"
              style={{
                fontFamily: "var(--font-russo)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: C.white,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Вакансии
              <br />
              <span style={{ color: C.mint }}>в Арасаке</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-6 max-w-md text-[14px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Присоединяйтесь к&nbsp;команде профессионалов. Выберите направление и&nbsp;найдите позицию, которая соответствует вашим амбициям. Не нашли подходящую? Отправьте резюме — мы&nbsp;всегда в&nbsp;поиске талантов.
            </motion.p>
          </motion.div>

          {/* RIGHT: Stats cards */}
          <motion.div
            className="grid grid-cols-3 gap-3 lg:w-[360px] lg:flex-shrink-0 lg:gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg p-4 md:p-5"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              <div
                className="absolute left-0 top-0 h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${C.dna}, ${C.dna}50)` }}
              />
              <Briefcase className="mb-2 h-4 w-4" style={{ color: C.dna }} />
              <div
                className="text-2xl font-bold leading-none md:text-3xl"
                style={{ fontFamily: "var(--font-russo)", color: C.white }}
              >
                {vacanciesList.length}
              </div>
              <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                открытых вакансий
              </div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden rounded-lg p-4 md:p-5"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              <div
                className="absolute left-0 top-0 h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${C.mintDark}, ${C.mintDark}50)` }}
              />
              <Target className="mb-2 h-4 w-4" style={{ color: C.mintDark }} />
              <div
                className="text-2xl font-bold leading-none md:text-3xl"
                style={{ fontFamily: "var(--font-russo)", color: C.white }}
              >
                4
              </div>
              <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                направления
              </div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden rounded-lg p-4 md:p-5"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.6}
            >
              <div
                className="absolute left-0 top-0 h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${C.orange}, ${C.orange}50)` }}
              />
              <MapPin className="mb-2 h-4 w-4" style={{ color: C.orange }} />
              <div
                className="text-2xl font-bold leading-none md:text-3xl"
                style={{ fontFamily: "var(--font-russo)", color: C.white }}
              >
                2
              </div>
              <div className="mt-1.5 text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                города
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — FILTERS & VACANCIES
   ═══════════════════════════════════════════════════════ */
function VacanciesSection() {
  const [filterDept, setFilterDept] = useState("Все направления");
  const [filterLocation, setFilterLocation] = useState("Все города");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return vacanciesList.filter((v) => {
      const matchDept = filterDept === "Все направления" || v.department === filterDept;
      const matchLocation = filterLocation === "Все города" || v.location === filterLocation;
      const matchSearch =
        searchQuery === "" ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchLocation && matchSearch;
    });
  }, [filterDept, filterLocation, searchQuery]);

  const activeFilters = filterDept !== "Все направления" || filterLocation !== "Все города" || searchQuery !== "";

  const clearFilters = () => {
    setFilterDept("Все направления");
    setFilterLocation("Все города");
    setSearchQuery("");
  };

  return (
    <section className="py-16 md:py-24" style={{ background: C.muted }}>
      <div className="container-kept">
        {/* Filter bar */}
        <motion.div
          className="mb-10 rounded-xl bg-white p-5 shadow-sm md:p-6"
          style={{ border: `1px solid ${C.borderLight}` }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-6">
            {/* Search */}
            <div className="flex-1">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
                Поиск
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.textMuted }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Должность, направление..."
                  className="w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95]"
                  style={{ borderColor: C.border, color: C.textDark }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4" style={{ color: C.textMuted }} />
                  </button>
                )}
              </div>
            </div>

            {/* Department filter */}
            <div className="min-w-[200px]">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
                Направление
              </label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.textMuted }} />
                <select
                  value={filterDept}
                  onChange={(e) => setFilterDept(e.target.value)}
                  className="w-full appearance-none rounded-lg border py-2.5 pl-10 pr-8 text-sm outline-none transition-colors focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95]"
                  style={{ borderColor: C.border, color: C.textDark, background: C.white }}
                >
                  {departments.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90" style={{ color: C.textMuted }} />
              </div>
            </div>

            {/* Location filter */}
            <div className="min-w-[180px]">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
                Город
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.textMuted }} />
                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full appearance-none rounded-lg border py-2.5 pl-10 pr-8 text-sm outline-none transition-colors focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95]"
                  style={{ borderColor: C.border, color: C.textDark, background: C.white }}
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90" style={{ color: C.textMuted }} />
              </div>
            </div>

            {/* Clear button */}
            {activeFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: C.dna }}
              >
                <X className="h-4 w-4" />
                Сбросить
              </button>
            )}
          </div>

          {/* Active filter pills */}
          {activeFilters && (
            <div className="mt-4 flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: C.borderLight }}>
              {filterDept !== "Все направления" && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${C.dna}12`, color: C.dna }}
                >
                  {filterDept}
                  <button onClick={() => setFilterDept("Все направления")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filterLocation !== "Все города" && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${C.orange}12`, color: C.orange }}
                >
                  {filterLocation}
                  <button onClick={() => setFilterLocation("Все города")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${C.mintDark}12`, color: C.mintDark }}
                >
                  &laquo;{searchQuery}&raquo;
                  <button onClick={() => setSearchQuery("")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <span className="self-center text-xs" style={{ color: C.textMuted }}>
                Найдено: {filtered.length}
              </span>
            </div>
          )}
        </motion.div>

        {/* Vacancy cards */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="rounded-xl bg-white p-12 text-center shadow-sm"
              style={{ border: `1px solid ${C.borderLight}` }}
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: C.light }}
              >
                <Briefcase className="h-7 w-7" style={{ color: C.dna }} />
              </div>
              <h3 className="mb-2 text-lg font-semibold" style={{ color: C.textDark }}>
                Вакансий не найдено
              </h3>
              <p className="mb-6 text-sm" style={{ color: C.textMuted }}>
                Попробуйте изменить фильтры или поисковый запрос
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white transition-colors"
                style={{ background: C.dna, borderRadius: "6px" }}
              >
                Сбросить фильтры
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              className="space-y-3"
              initial="hidden"
              animate="visible"
            >
              {filtered.map((vacancy, index) => {
                const DeptIcon = departmentIcons[vacancy.department] || Briefcase;
                const deptColor = departmentColors[vacancy.department] || C.dna;
                const badge = levelBadges[vacancy.level];
                const isExpanded = expandedId === vacancy.id;

                return (
                  <motion.div
                    key={vacancy.id}
                    variants={fadeUp}
                    custom={index * 0.04}
                    initial="hidden"
                    animate="visible"
                    className="group rounded-xl bg-white transition-all duration-300 hover:shadow-md"
                    style={{ border: `1px solid ${isExpanded ? deptColor : C.borderLight}` }}
                  >
                    {/* Main row */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : vacancy.id)}
                      className="flex w-full flex-col gap-4 p-5 text-left md:flex-row md:items-center md:gap-6 md:p-6 lg:p-7"
                    >
                      {/* Left: Department icon + info */}
                      <div className="flex items-start gap-4 md:flex-1 md:items-center">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
                          style={{ background: `${deptColor}14` }}
                        >
                          <DeptIcon className="h-5 w-5" style={{ color: deptColor }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3
                            className="mb-1 text-base font-semibold leading-tight transition-colors md:text-lg"
                            style={{ color: C.textDark }}
                          >
                            {vacancy.title}
                          </h3>
                          <p
                            className="line-clamp-1 text-[13px] leading-relaxed"
                            style={{ color: C.textMuted }}
                          >
                            {vacancy.description}
                          </p>
                        </div>
                      </div>

                      {/* Meta tags */}
                      <div className="flex flex-wrap items-center gap-3 md:flex-shrink-0">
                        {badge && (
                          <span
                            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                            style={{ background: `${badge.color}14`, color: badge.color }}
                          >
                            {badge.label}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 text-[12px]" style={{ color: C.textMuted }}>
                          <Briefcase className="h-3.5 w-3.5" />
                          {vacancy.department}
                        </span>
                        <span className="flex items-center gap-1.5 text-[12px]" style={{ color: C.textMuted }}>
                          <MapPin className="h-3.5 w-3.5" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-[12px]" style={{ color: C.textMuted }}>
                          <Clock className="h-3.5 w-3.5" />
                          {vacancy.type}
                        </span>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        className="flex-shrink-0 hidden md:flex"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5 rotate-90" style={{ color: C.textMuted }} />
                      </motion.div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="border-t px-5 py-6 md:px-6 lg:px-7"
                            style={{ borderColor: C.borderLight }}
                          >
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              {/* Description */}
                              <div>
                                <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
                                  О позиции
                                </h4>
                                <p className="text-[13px] leading-relaxed" style={{ color: C.textMid }}>
                                  {vacancy.description}
                                </p>
                              </div>

                              {/* Requirements */}
                              <div>
                                <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
                                  Требования
                                </h4>
                                <ul className="space-y-1.5">
                                  {vacancy.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed" style={{ color: C.textMid }}>
                                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: deptColor }} />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Apply button */}
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                              <a
                                href={`mailto:${CV_EMAIL}?subject=${encodeURIComponent(`Отклик на вакансию: ${vacancy.title}`)}`}
                                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                                style={{ background: C.dna, borderRadius: "6px" }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                Откликнуться
                                <ArrowRight className="h-4 w-4" />
                              </a>
                              <span className="text-[12px]" style={{ color: C.textMuted }}>
                                или отправьте CV на{" "}
                                <a href={`mailto:${CV_EMAIL}`} className="font-medium" style={{ color: C.dna }}>
                                  {CV_EMAIL}
                                </a>
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — CTA
   ═══════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: C.dna }}>
      {/* Decorative elements */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,49,60,0.3)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.2) 30px, rgba(255,255,255,0.2) 31px)`,
        }}
      />

      <div className="container-kept relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <span
            className="mb-6 inline-flex items-center gap-2 border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em]"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            Не нашли подходящую вакансию?
          </span>

          <h2
            className="mb-4 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "var(--font-russo)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              color: C.white,
            }}
          >
            Отправьте резюме
          </h2>

          <p className="mb-8 max-w-lg text-[15px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Мы&nbsp;всегда в&nbsp;поиске талантливых специалистов. Отправьте резюме, и&nbsp;мы&nbsp;свяжемся с&nbsp;вами, когда появится подходящая возможность
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`mailto:${CV_EMAIL}?subject=Резюме`}>
              <motion.span
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] transition-colors"
                style={{ background: C.white, color: C.dark, borderRadius: "4px" }}
                whileHover={{ background: C.mint, color: C.dark, transition: { duration: 0.3 } }}
              >
                <Mail className="h-4 w-4" />
                Отправить CV
              </motion.span>
            </a>
            <Link href="/career">
              <motion.span
                className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em]"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: C.white, borderRadius: "4px" }}
                whileHover={{
                  borderColor: C.white,
                  background: "rgba(255,255,255,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                О карьере в Арасаке
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — QUICK LINKS (same as /services)
   ═══════════════════════════════════════════════════════ */
function NavigationSection() {
  return (
    <section className="bg-white py-20 md:py-28">
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
            <SectionLabel>Навигация</SectionLabel>
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
              {sectionCards.map((card, index) => {
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
                  style={{ fontFamily: "var(--font-russo)", color: "#ffffff" }}
                >
                  Начните сотрудничество
                </h3>
                <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Оставьте заявку — мы свяжемся с&nbsp;вами, обсудим задачу и&nbsp;подготовим индивидуальное предложение.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <Link href="/feedback?type=proposals" className="group/kp inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300" style={{ background: C.dna, borderRadius: "4px" }}>
                  <Mail className="h-4 w-4" />
                  Запросить КП
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/kp:translate-x-0.5" />
                </Link>
                <Link href="/feedback?type=callback" className="group/cb inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 border" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", borderRadius: "4px" }}>
                  <Phone className="h-4 w-4" />
                  Заказать звонок
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════════════ */
export default function VacanciesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <VacanciesSection />
      <CtaSection />
      <NavigationSection />
    </main>
  );
}
