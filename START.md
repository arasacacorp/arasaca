# Арасака — Стартовый файл

> Прочитай этот файл первым при начале новой сессии.

## Что прочитать перед работой

1. **DESIGN_SYSTEM.md** — полный справочник: цвета, шрифты, паттерны hero, кнопки, карточки, анимации, иконки, шаблоны страниц, чеклист добавления страницы
2. **worklog.md** — история всех изменений (каждый этап рефакторинга, что удалено, что создано)

## Проект

- **Стек:** Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Prisma
- **Шрифты:** Manrope (body) + Russo One (logo/numbers/H1)
- **Цвета:** `import { C } from "@/lib/colors"` — никогда не использовать хардкод hex
- **Анимации:** `import { fadeUp, fadeIn, scaleIn, slideInRight, vp } from "@/lib/animations"`
- **Иконки:** строки в данных + `<Icon name="..." />` из `@/lib/iconRegistry`

## Ключевые шаблоны

- `ServicePageTemplate` — страница категории услуг (hero + directions + approach + quickLinks)
- `ServiceSlugPageTemplate` — страница поднаправления (hero + accordion + carousel + quickLinks)
- Все внутренние страницы: тёмный hero (C.dark) + секции на C.muted/C.white

## Правила

- Все цвета через `C.*` из `@/lib/colors`
- Все анимации из `@/lib/animations`
- Контент в `container-kept`, секции `py-20 md:py-28`
- Новая страница → прочитай чеклист в DESIGN_SYSTEM.md (раздел 15)
