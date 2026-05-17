---
name: mulligan-design
description: Use this skill to generate well-branded interfaces and assets for Tradeit TCG (Mulligan design system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a Carbon-inspired, flat-and-structured marketplace + fintech app for the trading card game community.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

## Quick orientation

Tradeit TCG is a marketplace + fintech-style analytics app for trading card games (Pokémon TCG for MVP). The design system is called **Mulligan**. Vibe: IBM Carbon × Bloomberg terminal × a hobby that's allowed to feel warm.

**Hard rules — do not break:**
- Flat & structured. **No gradients** (except subtle tonal backgrounds behind card images). **No glow, no glassmorphism.**
- Max font weight is **500**. Hierarchy comes from size and color, never bold 700.
- **Prices and numeric data are always in IBM Plex Mono** with `font-variant-numeric: tabular-nums`.
- **Sentence case** in buttons, titles, labels. No periods on button text.
- **No emoji** in UI core. No `Oops` in errors.
- Colors are **semantic**: green/amber/red mean success/warning/error or +/neutral/− on prices — never decorative.
- Spanish neutral LatAm, tuteo. Comma decimal (`412,50`), point thousands (`12.450`), `−` for minus (U+2212).
- **Dark mode is a layer system**, not an inversion. Card images are never inverted.

**Key files to read in order:**
1. `README.md` — overview, content fundamentals, visual foundations, iconography.
2. `ARCHITECTURE.md` — how to extend the system without breaking it.
3. `colors_and_type.css` — drop-in CSS tokens. Always start a new artifact by importing this. Toggle dark mode by adding the `.dark` class to any ancestor element.
4. `ui_kits/tradeit-app/components/*.jsx` — reference implementations of every core component, theme-aware via CSS variables.
5. `ui_kits/tradeit-app/index.html` — a working demo of the whole vocabulary (5 flows + dark toggle).
6. `preview/*.html` — small specimen cards for color/type/spacing/components.

**Iconography:** Phosphor Icons (regular weight). Load via CDN: `https://unpkg.com/@phosphor-icons/web@2.x/src/regular/style.css`, then use `<i class="ph ph-magnifying-glass"></i>`. Color always `currentColor`.

**Source of truth:** the public repo `sanmartineme/tradeit-tcg` (`MULLIGAN.md`, `content.md`, `PRD.md`). When in doubt about a spec, that's the authority.
