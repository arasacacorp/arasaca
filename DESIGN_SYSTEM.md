# Design System — Арасака

> Этот файл — единый источник истины для дизайна и архитектуры сайта.
> При старте новой сессии прочитай его целиком перед тем как добавлять блоки или страницы.

---

## 1. Цветовая палитра (Design Tokens)

**Файл:** `src/lib/colors.ts` — `import { C } from "@/lib/colors"`

| Токен | Hex | Назначение |
|---|---|---|
| `C.dna` | `#008C95` | Фирменный бирюзовый, основной акцент, badge, ссылки |
| `C.dnaHover` | `#007a82` | Hover-состояние бирюзового |
| `C.dark` | `#00313C` | Фон hero-секций, тёмные блоки, карточки |
| `C.darkLighter` | `#004452` | Светлый вариант тёмного фона |
| `C.orange` | `#E04E39` | CTA-кнопки, выделенные карточки, акценты |
| `C.orangeHover` | `#c94330` | Hover оранжевого |
| `C.orangeLight` | `#f06a58` | Индикаторы, badge |
| `C.orangeDark` | `#b83d2e` | Тёмный оранжевый |
| `C.orangeBg` | `#FDEAE6` | Бледно-оранжевый фон |
| `C.orangeMuted` | `#FFF5F3` | Очень бледный оранжевый фон |
| `C.mint` | `#77e2c3` | Мятный акцент на тёмном фоне, хлебные крошки |
| `C.mintDark` | `#4dc9a5` | Тёмная мята, фон карточки |
| `C.white` | `#ffffff` | Белый фон, текст на тёмном |
| `C.light` | `#e8f5f3` | Светло-бирюзовый фон |
| `C.muted` | `#f1f2f4` | Нейтральный серый фон (основной фон страниц) |
| `C.textDark` | `#1a1a1a` | Основной текст |
| `C.textMid` | `#494a4a` | Вторичный текст |
| `C.textMuted` | `#6b7280` | Приглушённый текст, описания |
| `C.border` | `#e5e7eb` | Стандартная граница |
| `C.borderLight` | `#f0f0f0` | Светлая граница, разделители |

**Правила использования цветов:**
- **Никогда** не использовать хардкод hex-значения — только `C.*` токены
- Фон страницы: `C.muted` (`#f1f2f4`)
- Тёмная секция: `C.dark` (`#00313C`)
- Белая секция: `C.white` (`#ffffff`)
- CTA / primary action: `C.dna` (бирюзовый)
- Акцент / выделение: `C.orange`
- Текст на тёмном: `C.white` для заголовков, `rgba(255,255,255,0.55)` для подзаголовков, `rgba(255,255,255,0.45)` для описаний

---

## 2. Типографика

### Шрифты

| Шрифт | CSS-переменная | Назначение | Загрузка |
|---|---|---|---|
| **Manrope** | `--font-manrope` | Основной шрифт всего сайта | `next/font/google`, subsets: latin+cyrillic |
| **Russo One** | `--font-russo` | Логотип, числа в stat-карточках, H1 в hero | `next/font/google`, weight: 400 |

**Применение:**
```tsx
// Основной текст (наследуется от body)
style={{ fontFamily: "'Manrope', sans-serif" }}

// Логотип, числа, H1 hero
style={{ fontFamily: "var(--font-russo)" }}
```

### Размеры и классы

| Элемент | Класс / стиль | Размер | Вес |
|---|---|---|---|
| **H1 (hero)** | `fontFamily: var(--font-russo)` | `clamp(1.75rem, 4vw, 3rem)` | 700 |
| **H2 (секция)** | `.heading-section` | 24px → 30px (lg) | 700 |
| **H3 (подсекция)** | `.heading-subsection` | 18px → 20px (lg) | 600 |
| **H4 (карточка)** | `.heading-card` | 16px | 600 |
| **Section label** | `text-[11px] uppercase tracking-[0.3em] font-semibold` | 11px | 600 |
| **Badge** | `text-[9px] uppercase tracking-wider font-bold` | 9px | 700 |
| **Body text** | `text-[14px] font-light leading-relaxed` | 14px | 300 |
| **Small text** | `text-[13px] leading-relaxed` | 13px | 400 |
| **Stat number** | `fontFamily: var(--font-russo), text-2xl md:text-3xl font-bold` | 24/30px | 700 |
| **Stat label** | `text-[11px] font-medium` | 11px | 500 |

---

## 3. Контейнер и отступы

### Контейнер
```css
.container-kept {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 24px;   /* 16px на мобильных */
  padding-right: 24px;  /* 16px на мобильных */
}
```

### Секции

| Тип | Padding |
|---|---|
| Стандартная секция | `py-20 md:py-28` |
| Тёмная секция | `py-16 lg:py-24` |
| Hero секция | `pt-16 lg:pt-[120px]`, внутренний `py-6 md:py-10 lg:py-12` |
| Между элементами | `gap-3` (маленький), `gap-5` (средний), `gap-8` (большой) |
| Между секциями header | `mb-4` (до badge), `mb-6` (до subtitle), `mb-10`–`mb-14` (до контента) |

---

## 4. Hero-паттерн (тёмный)

Все внутренние страницы используют один и тот же hero-паттерн.

### Структура

```
┌─────────────────────────────────────────────────────────┐
│  C.dark фон  │  Диагональные линии (opacity 0.03)       │
│              │  Glow-орб: оранжевый (右上)               │
│              │  Glow-орб: бирюзовый (左下)               │
│                                                         │
│  ┌─ container-kept ─────────────────────────────────┐   │
│  │  Breadcrumbs: Главная > ... > Текущая (C.mint)   │   │
│  │  Badge: [● Направление консалтинга]               │   │
│  │  H1: Russo One, clamp(1.75rem, 4vw, 3rem)        │   │
│  │  Subtitle: text-[14px], rgba(255,255,255,0.55)    │   │
│  │  CTA: [Запросить КП] [Заказать звонок]            │   │
│  │                          │ Stat-карточки 2×2       │   │
│  │                          │ glass-morphism           │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Ключевые стили hero

```tsx
// Фон
style={{ background: C.dark }}

// Диагональные линии (декоративные)
<div className="pointer-events-none absolute inset-0 opacity-[0.03]"
  style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(119,226,195,0.3) 40px, rgba(119,226,195,0.3) 41px)` }} />

// Оранжевый glow
<div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full blur-[180px]"
  style={{ background: "rgba(224,78,57,0.10)" }} />

// Бирюзовый glow
<div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-[120px]"
  style={{ background: "rgba(0,140,149,0.08)" }} />
```

### Breadcrumbs (на тёмном фоне)

```tsx
<nav className="flex items-center gap-2 mb-6">
  <Link href="/" className="text-[12px] hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Главная</Link>
  <ChevronRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.25)" }} />
  <span className="text-[12px] font-medium" style={{ color: C.mint }}>Текущая</span>
</nav>
```

### Badge (SectionLabel на тёмном фоне)

```tsx
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
  style={{ background: "rgba(0,140,149,0.15)", color: C.mint, borderRadius: "2px" }}>
  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.mint }} />
  Текст badge
</span>
```

### Stat-карточки (glassmorphism)

```tsx
<div className="relative overflow-hidden rounded-lg p-5 md:p-6"
  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
  {/* Accent line top */}
  <div className="absolute left-0 top-0 h-0.5 w-full"
    style={{ background: `linear-gradient(90deg, ${accent}, ${accent}50)` }} />
  <Icon className="mb-3 h-5 w-5" style={{ color: accent }} />
  <div className="text-2xl font-bold md:text-3xl"
    style={{ fontFamily: "var(--font-russo)", color: C.white }}>{number}</div>
  <div className="mt-1.5 text-[11px] font-medium"
    style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
</div>
```

---

## 5. Кнопки

### Primary CTA (на тёмном фоне)

```tsx
<motion.span
  className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white"
  style={{ background: C.dna, borderRadius: "4px" }}
  whileHover={{ background: C.dnaHover, transition: { duration: 0.3 } }}
>
  Запросить КП <ArrowRight className="h-4 w-4" />
</motion.span>
```

### Outline CTA (на тёмном фоне)

```tsx
<motion.span
  className="inline-flex items-center justify-center gap-2 border px-7 py-3 text-sm font-medium uppercase tracking-[0.05em]"
  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: "4px" }}
  whileHover={{ borderColor: C.mint, color: C.mint, transition: { duration: 0.3 } }}
>
  Заказать звонок
</motion.span>
```

### Кнопка навигации (карусель, тёмный фон)

```tsx
<button
  className="w-10 h-10 flex items-center justify-center rounded-md border transition-all"
  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
  // Hover через onMouseEnter/onMouseLeave: borderColor → C.dna, bg → C.dna, color → #fff
>
  <ChevronLeft className="w-5 h-5" />
</button>
```

---

## 6. Карточки

### QuickLink-карточка (цветная)

```tsx
<div className="relative flex flex-col justify-between overflow-hidden rounded-lg p-4 md:p-5 transition-shadow duration-300 h-full"
  style={{ background: card.bg, color: card.textColor, minHeight: "130px" }}
  whileHover={{ y: -3 }}>
  {/* Accent line left */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-1"
    style={{ background: isWhite ? C.dna : "rgba(255,255,255,0.4)" }} />
  {/* Декор: тёмные карточки — diagonal pattern, белые — dot pattern */}
  <div className="relative z-10">
    <div className="flex items-center gap-2">
      {icon} <span className="text-sm font-semibold md:text-base">{title}</span>
    </div>
    <span className="mt-0.5 block text-[10px] opacity-60">{description}</span>
  </div>
  <div className="relative z-10 flex justify-end">
    <div className="flex h-8 w-8 items-center justify-center rounded-full"
      style={{ background: isWhite ? "rgba(0,140,149,0.1)" : "rgba(255,255,255,0.2)" }}>
      <ArrowRight className="h-4 w-4" style={{ color: isWhite ? C.dna : "#fff" }} />
    </div>
  </div>
</div>
```

### Direction-карточка (светлая с выделением)

- **Обычная**: `bg: C.white`, `border`, `shadow-sm`, `hover:shadow-md`, accent-line: `C.dna`
- **Выделенная (orange)**: `bg: C.orange`, `text: #fff`, diagonal pattern overlay, badge
- Обе: hover `y: -3`, accent-line слева, иконка + заголовок + описание + arrow-circle

### Glass-карточка (на тёмном фоне)

```tsx
<div className="relative overflow-hidden rounded-lg p-6 md:p-8"
  style={{ background: "rgba(255,255,255,0.05)" }}>
  <div className="relative z-10">...</div>
</div>
```

### CTA-карточка (тёмная, боковая)

```tsx
<div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg p-6 md:p-8"
  style={{ background: C.dark }}>
  {/* Diagonal lines overlay */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
    style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(119,226,195,0.3) 30px, rgba(119,226,195,0.3) 31px)` }} />
  <div className="relative z-10">
    <div className="h-px w-12 mb-5" style={{ background: C.mint }} />
    <h3 style={{ fontFamily: "var(--font-russo)", color: "#fff" }}>Начните сотрудничество</h3>
    <p style={{ color: "rgba(255,255,255,0.5)" }}>Оставьте заявку...</p>
  </div>
  <div className="relative z-10 flex flex-col gap-3">
    {/* Кнопки CTA */}
  </div>
</div>
```

---

## 7. SectionLabel

**Файл:** `src/components/sections/HomeShared.tsx`

```tsx
import { SectionLabel } from "@/components/sections/HomeShared";

// На светлом фоне (C.muted / C.white)
<SectionLabel>Направления</SectionLabel>          // цвет: C.dna

// На тёмном фоне (C.dark)
<SectionLabel light>Методология</SectionLabel>     // цвет: C.mint
```

Стили: `text-[11px] font-semibold uppercase tracking-[0.3em]` с `fadeIn` анимацией.

---

## 8. Анимации

**Файл:** `src/lib/animations.ts` — `import { fadeUp, fadeIn, scaleIn, slideInRight, vp } from "@/lib/animations"`

| Вариант | Из | В | Применение |
|---|---|---|---|
| `fadeUp` | `opacity:0, y:32` | `opacity:1, y:0` | Заголовки, текстовые блоки |
| `fadeIn` | `opacity:0` | `opacity:1` | SectionLabel, декор |
| `scaleIn` | `opacity:0, scale:0.85` | `opacity:1, scale:1` | Карточки, stat-блоки |
| `slideInRight` | `opacity:0, x:-20` | `opacity:1, x:0` | Горизонтальные элементы |

**Параметры:**
- `duration`: 0.6–0.8s
- `delay`: `i * 0.12` (каскад) или `i * 0.08` (карточки)
- `ease`: `[0.22, 0.61, 0.36, 1]` (custom ease-out)
- `vp` (viewport): `{ once: true, amount: 0.2 }`

**Использование:**
```tsx
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} custom={0}>
  Контент
</motion.div>
// или с animate вместо whileInView для hero:
<motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
```

---

## 9. Иконки

**Файл:** `src/lib/iconRegistry.tsx` — `import { Icon, getIcon } from "@/lib/iconRegistry"`

Серверные компоненты передают иконки как **строки**, клиентские — через `<Icon name="..." />`.

```tsx
// В данных (серверный компонент):
{ icon: "Search", ... }

// В клиентском компоненте:
<Icon name={item.icon} fallback="Search" className="h-5 w-5" />
```

**Доступные иконки:** Search, TrendingUp, BarChart3, Users, ClipboardList, Target, Cog, Shield, FileText, FileSearch, Microscope, HardHat, Rocket, Lightbulb, Zap, Map, Calculator, Settings, RefreshCw, Code, Cloud, Network, BarChart2, GraduationCap, BookOpen, Award, Palette, Megaphone, Newspaper, Heart, Briefcase, Wrench, ArrowRight, ChevronRight, ChevronLeft, Plus, Minus, Phone, Mail, Building2, CheckCircle, MapPin, Layers, Home, Compass

---

## 10. Шаблоны страниц

### ServicePageTemplate (`/services/consulting`, `/services/analytics`, и т.д.)

**Файл:** `src/components/templates/ServicePageTemplate.tsx`

Структура: **Hero** → **Directions** (сетка карточек) → **Our Approach** (3 шага, тёмный фон) → **Quick Links + CTA**

Config-интерфейс: `ServicePageConfig` с полями `hero`, `directions`, `approach`, `subDirections`

### ServiceSlugPageTemplate (`/services/consulting/[slug]`)

**Файл:** `src/components/templates/ServiceSlugPageTemplate.tsx`

Структура: **Hero** → **Services Accordion** → **Other Directions Carousel** (тёмный фон) → **Quick Links + CTA**

Config-интерфейс: `ServiceSlugPageConfig` с полями `subDirections`, `fallbackIcon`, `parent`

### Standalone страницы

Каждая страница (about, cases, contacts, etc.) — самостоятельный файл, но следует тем же паттернам:
- Тёмный hero (C.dark + diagonal lines + glow orbs + breadcrumbs + badge + H1 + subtitle + CTA + stats)
- Светлая секция контента (C.muted или C.white)
- Quick Links секция в конце

---

## 11. Типовые секции

### Стандартная секция (светлая)

```tsx
<section className="py-20 md:py-28" style={{ background: C.muted }}>
  <div className="container-kept">
    <motion.div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
      <div>
        <SectionLabel>Заголовок секции</SectionLabel>
        <h2 className="heading-section" style={{ color: C.textDark }}>Название</h2>
      </div>
      <p className="text-[14px] leading-relaxed max-w-xs lg:text-right" style={{ color: C.textMuted }}>Описание</p>
    </motion.div>
    {/* Контент */}
  </div>
</section>
```

### Стандартная секция (тёмная)

```tsx
<section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: C.dark }}>
  <div className="container-kept relative z-10">
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
      <div className="mb-10">
        <SectionLabel light>Заголовок</SectionLabel>
        <h2 className="heading-section" style={{ color: C.white }}>Название</h2>
      </div>
      {/* Контент */}
    </motion.div>
  </div>
</section>
```

---

## 12. Quick Links секция

**Файл данных:** `src/data/quickLinks.ts` — `import { quickLinks } from "@/data/quickLinks"`

Формат данных:
```ts
{ title: string, description: string, bg: string, textColor: string, href: string, icon: LucideIcon }
```

Структура секции: заголовок + сетка 2×3 карточек + боковая CTA-карточка (340px)

---

## 13. Статистика компании

**Файл:** `src/data/companyStats.ts`

Два формата:
- `COMPANY_STATS_SERVICE` — для ServicePageTemplate (icon: string)
- `COMPANY_STATS_LUCIDE` — для страниц с Lucide-компонентами (icon: LucideIcon)

Данные: 30+ отраслей, 50+ экспертов, 500+ проектов

---

## 14. Layout и маршрутизация

**Root layout:** `src/app/layout.tsx`
- Шрифты: Manrope + Russo One
- Структура: `<Header />` → `<main className="flex-1">` → `<Footer />`
- Wrapper: `min-h-screen flex flex-col` (sticky footer)

**Остальные layout.tsx:** только `metadata` экспорт (SEO), рендерят только `{children}`

**Серверные компоненты:** page.tsx — серверные, используют inline `metadata`
**Клиентские компоненты:** `"use client"` только там где нужен interactivity (forms, animations, state)

---

## 15. Чеклист: добавление новой страницы

1. Создать `src/app/{route}/page.tsx` (серверный компонент с metadata)
2. Опционально `src/app/{route}/layout.tsx` (только если нужен уникальный metadata)
3. Использовать тёмный hero-паттерн (C.dark, diagonal lines, glow, breadcrumbs, badge, H1, subtitle, CTA, stats)
4. Все цвета — через `C.*` из `@/lib/colors`
5. Все анимации — из `@/lib/animations`
6. Иконки — строки + `<Icon name="..." />`
7. Контент в `container-kept`, секции с `py-20 md:py-28`
8. Завершить секцией Quick Links + CTA
9. Добавить ссылку в Header/Footer навигацию
10. Добавить в sitemap

---

## 16. Файловая структура (ключевые файлы)

```
src/
├── app/
│   ├── layout.tsx              # Root layout (шрифты, Header, Footer)
│   ├── globals.css             # CSS-классы (.heading-section, .container-kept)
│   ├── page.tsx                # Homepage
│   ├── {route}/page.tsx        # Страницы
│   └── {route}/layout.tsx      # Metadata-only layout'ы
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Навигация (данные из servicesData)
│   │   └── Footer.tsx          # Подвал
│   ├── sections/
│   │   ├── HomeShared.tsx      # SectionLabel, iconMap, vp
│   │   ├── HomeHero.tsx        # Hero homepage
│   │   └── Home*.tsx           # Секции homepage
│   ├── templates/
│   │   ├── ServicePageTemplate.tsx    # Шаблон категории услуг
│   │   └── ServiceSlugPageTemplate.tsx # Шаблон поднаправления
│   └── ui/                     # shadcn/ui компоненты
├── data/
│   ├── types.ts                # ServiceItem, SubDirection
│   ├── servicesData.ts         # Все услуги + buildHeaderServicesMenu()
│   ├── quickLinks.ts           # Quick Links данные
│   ├── companyStats.ts         # COMPANY_STATS_SERVICE / COMPANY_STATS_LUCIDE
│   ├── homepage.ts             # Данные homepage
│   └── publications.ts         # Пресс-центр публикации
└── lib/
    ├── colors.ts               # Design tokens (C.*)
    ├── animations.ts           # fadeUp, fadeIn, scaleIn, slideInRight, vp
    ├── iconRegistry.tsx         # Icon component + getIcon()
    ├── utils.ts                # cn() utility
    └── seo.ts                  # SEO helpers
```
