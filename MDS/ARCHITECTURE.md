# Architecture — Mulligan Design System

This system is designed to grow. Below is the contract for adding new tokens, components, patterns, and product surfaces without breaking what's already shipped.

## 1. Layering

The system has **five layers**, each consumes the one below it. Never reach across layers.

```
                                                            (depends on)
  ┌─────────────────────────────────────────────────────────────────┐
  │ 5. Product surfaces  →  ui_kits/<product>/                       │  uses 1–4
  │                          slides/                                 │
  ├─────────────────────────────────────────────────────────────────┤
  │ 4. Patterns          →  README §VISUAL · screens recipes         │  uses 1–3
  ├─────────────────────────────────────────────────────────────────┤
  │ 3. Components        →  reusable React / HTML pieces             │  uses 1–2
  │                          ui_kits/<product>/components/           │
  ├─────────────────────────────────────────────────────────────────┤
  │ 2. Foundations       →  type scale, spacing, radii, motion       │  uses 1
  │                          colors_and_type.css                     │
  ├─────────────────────────────────────────────────────────────────┤
  │ 1. Primitive tokens  →  raw values: hex, px, ms                  │  none
  │                          --blue-60, --gray-0, --space-4, etc.    │
  └─────────────────────────────────────────────────────────────────┘
```

**Rule of thumb:** if you find yourself writing a raw hex (`#1A6FB5`) inside a component, you skipped a layer. Use a semantic token (`var(--interactive)`).

## 2. Adding a new color

Two scenarios:

**A — A new step inside an existing ramp** (e.g. `--blue-30`).
1. Add the raw token under §1 in `colors_and_type.css` (alongside `blue-20` and `blue-40`).
2. Document it in `preview/colors-blue.html`.
3. If it's semantic, wire it into a new `--*` token under §2 (light + `.dark`).
4. Register a new preview card if the addition deserves callout.

**B — A whole new accent ramp** (e.g. `--purple-*`).
1. Justify it: Mulligan's accent set (blue / teal / amber / red) is intentional and tight. Adding a sixth ramp is a system decision — discuss before adding.
2. Add the full 5-stop ramp (10/20/40/60/80) in §1.
3. Add a new color card to `preview/` matching the pattern of `colors-blue.html`.
4. Decide its semantic role and document in §VISUAL FOUNDATIONS of README.

**Never** introduce a color directly in a component. Tokens are single-source-of-truth.

## 3. Adding a new spacing / radius / motion value

These live in `colors_and_type.css` §3 and §5. They are part of a **scale**, not free values.

- Spacing is **multiples of 4px** only. If you need 14px, use space-3 (12) or space-4 (16). Never invent a "space-3.5".
- Radii follow the named ladder: `xs · sm · md · lg · xl · full`. Don't add `radius-md-2` or arbitrary px.
- Motion durations come from `--motion-micro/short/medium/long`. New tokens require justification.

## 4. Adding a new component

A component belongs to the system only if it has **all six** of these:

1. **A single responsibility.** "PriceBlock" shows price + averages + tendency. "PriceBlockWithChart" violates this — that's two components composed.
2. **Tokens for every visual property** — bg, text, border, radius, padding all flow from CSS vars (or system constants).
3. **States covered:** default, hover, active, focus, disabled — wherever each makes sense.
4. **A preview card** in `preview/` (max ~150–400px tall) registered via `register_assets`.
5. **A reference implementation** in `ui_kits/tradeit-app/components/` (the canonical product UI kit).
6. **Documentation in README §VISUAL FOUNDATIONS** if it represents a new pattern (modal, sheet, toast all qualify).

File layout for a new component `Foo`:
```
ui_kits/tradeit-app/components/Foo.jsx       ← code
preview/component-foo.html                    ← visual specimen card
README.md                                     ← mention in VISUAL FOUNDATIONS if new pattern
```

Then `register_assets` the preview card under `group: "Components"`.

## 5. Adding a new pattern

A **pattern** combines components into a recurring layout. Examples: "ficha de carta", "dashboard del comprador", "wizard de publicación".

1. Write it as a screen under `ui_kits/<product>/screens/`.
2. Compose existing components — do not bake new low-level decisions into a screen.
3. If composition reveals a missing component, surface it: go through §4 first, then come back.
4. Document the layout recipe in the product's README under "screens".

## 6. Adding a new product surface

Tradeit's MVP is **Android-first mobile**. New surfaces (web companion, iPad, desktop trader, etc.) each get their own UI kit folder:

```
ui_kits/
├── tradeit-app/        ← exists (Android mobile)
├── tradeit-web/        ← new (desktop / responsive web)
└── tradeit-trader/     ← hypothetical (data-dense desktop)
```

Each kit:
- Reuses `colors_and_type.css` directly.
- Implements the components needed for its viewport.
- Maintains its own `index.html` interactive demo + README.
- Registers its `index.html` as a preview card via `register_assets`.

Cross-kit component sharing happens by **copy + adapt**, not by extraction. Premature abstraction across surfaces creates the worst kind of cruft. Once a component lives in two kits and is provably identical, only then promote to a shared `ui_kits/_shared/`.

## 7. Theme system

Light is the default. Dark is opt-in via the `.dark` class on any ancestor (component, screen, page root, or `<html>`).

**Rule:** components express colors as **CSS variables** (`var(--text-primary)`, `var(--bg-primary)`, etc.). Hardcoded hex is OK only for:
- placeholder art colors (e.g. mock card images),
- the global toast (always dark regardless of theme — it's a UI metaphor),
- the home-screen scan CTA strip (always dark for emphasis).

To add **a new themed property**, add the var to both `:root` and `.dark` selectors in `colors_and_type.css`. Components consume it via `var(--…)` and the theme follows wherever the `.dark` class lives.

## 8. Content & tone

Every new copy string runs the **content.md anti-pattern check**:
- No speculative or financial-advice language.
- No emoji in UI core.
- No `Oops!`, no `Click here`, no exclamation marks unless celebrating.
- Tuteo + sentence case + LatAm number format.

If unsure, search `content.md` for the closest moléc​ula (button / error / empty / toast) and follow its rule of length and shape.

## 9. Anti-patterns to refuse

When in doubt, refuse these — they erode the system:

- A "just this once" hardcoded color in a component.
- A new font weight outside 300/400/500.
- A new component that wraps three existing ones with no new behavior (use composition at the call site).
- A new pattern that contradicts the flat-and-structured principle (gradients backgrounds, glassmorphism, glow shadows, blur as decoration).
- A semantic accent used decoratively (green-as-graphic-flourish instead of green-as-positive-data).
- A copy string that addresses the user as `usted` or uses ar/es regionalisms ("plata", "guay").
- An icon dibujado en SVG cuando Phosphor ya tiene una opción cercana.

## 10. Versioning & deprecation

When a component changes shape (props removed, layout changed):

1. Bump it in the file header comment (`// v2.0`).
2. Keep the old version as `ComponentName.v1.jsx` for one release.
3. Note the migration path at the top of the new file.

For tokens, never remove silently — add a deprecation comment for one release before removal.

---

## TL;DR for new contributors

1. **Tokens before code.** If you need a color/spacing/duration, add it to `colors_and_type.css` first.
2. **Compose, don't decorate.** Build screens from components; build components from primitives.
3. **Ship the preview card.** Every new component needs a `preview/*.html` so it's visible in the Design System tab.
4. **Light AND dark.** Use CSS variables for surface colors so the `.dark` toggle works for free.
5. **Re-read content.md** before writing any new string. Voice is part of the system.

*The system grows by addition, not by exception.*
