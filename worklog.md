---
Task ID: P1-d
Agent: main
Task: Redesign pages по эталону /career

Work Log:
- Audited all 20+ page.tsx files to identify which follow career-pattern vs old pattern
- Found 3 pages NOT following career-pattern: /lab, /media, /solutions/master-planning
- Redesigned /lab page: replaced all hardcoded hex with C.* tokens, added shared animation variants (fadeUp, fadeIn, scaleIn), added SectionLabel, dark hero with diagonal lines/glow, breadcrumbs, glass-morphism stat cards, consistent padding
- Redesigned /media page: same treatment - dark hero, C tokens, animations, SectionLabel, category tabs with C.dna styling, publication cards with accent lines, newsletter CTA with dark bg
- Redesigned /solutions/master-planning page: dark hero with partnership badge, effects stats in glass cards, feature cards with accent lines, partner section, CTA section
- Fixed quickLinks hardcoded hex → C.* tokens across ALL 32 page.tsx files (bg: "#00313C" → C.dark, bg: "#E04E39" → C.orange, etc.)
- Browser-verified all 3 redesigned pages via VLM - all rendering correctly with dark heroes, breadcrumbs, stat cards, professional design
- Verified homepage and other pages still work after mass hex replacement
- Lint passes (only pre-existing watchdog errors)

Stage Summary:
- 3 pages fully redesigned to career-pattern: /lab, /media, /solutions/master-planning
- 32 pages fixed: hardcoded hex in data objects replaced with C.* design tokens
- All pages compile and render correctly
- Consistent design language across entire site now
