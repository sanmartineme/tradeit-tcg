# Accessibility — Mulligan Design System

> **Compliance target:** WCAG 2.2 AA (current ratified standard, June 2025 update).
> **Forward-looking:** WCAG 3.0 considerations where the draft offers stronger guidance (APCA contrast, function-based assertions). When 3.0 contradicts 2.2 today, **2.2 is the binding requirement** until 3.0 ratifies.
> **Audit cadence:** every component changes ship with a Section 5 checklist pass.

Accessibility is **a design constraint, not an audit step**. Every component, screen, pattern, and copy decision in Mulligan starts with the user who needs assistive tech, large text, high contrast, or one-handed reach. If a design only "works for most people," it doesn't work.

---

## 1. Conformance scope

| Layer | Standard | Status |
|---|---|---|
| Foundations | WCAG 2.2 AA | Required |
| Components | WCAG 2.2 AA | Required |
| Patterns / screens | WCAG 2.2 AA | Required |
| Mobile interaction | WCAG 2.2 AA + W3C Mobile A11y BCP | Required |
| Color & contrast | WCAG 2.2 AA (4.5:1 / 3:1) | Required |
| Color & contrast (forward) | WCAG 3.0 / APCA Lc ≥ 60 for body text | Tracked, not yet binding |
| Cognitive load | WCAG 2.2 §3.2 (predictability) + 2.5.7 (drag), 2.5.8 (target size) | Required |

We do **not** ship a feature that fails WCAG 2.2 AA. If a fix requires breaking a brand decision, the brand decision moves first — accessibility wins.

---

## 2. Color & contrast — the binding numbers

All contrast pairs in `colors_and_type.css` are pre-validated. **Never invent a new color combination without measuring.**

### 2.1 Body text on backgrounds

| Pair | Ratio | Standard |
|---|---|---|
| `--text-primary` (#131210) on `--bg-page` (#F8F8F6) | **16.1 : 1** | AAA |
| `--text-primary` on `--bg-primary` (#FFFFFF) | **17.5 : 1** | AAA |
| `--text-secondary` (#5C5A56) on `--bg-primary` | **7.1 : 1** | AAA |
| `--text-muted` (#9B9892) on `--bg-primary` | **3.5 : 1** | AA (large text only — ≥18.66px or ≥14px bold) |
| `--interactive` (#1A6FB5) on `--bg-primary` | **4.6 : 1** | AA |
| `--success` (#2DA67E) on `--bg-primary` | **3.1 : 1** | AA (large only) |
| `--warning` (#E69A20) on `--bg-primary` | **2.1 : 1** | **Fail** — never use as body text |
| `--danger` (#D94646) on `--bg-primary` | **4.2 : 1** | AA |

### 2.2 Dark mode pairs

| Pair | Ratio | Standard |
|---|---|---|
| `--text-primary` (#F0EFEC) on `--bg-page` (#131210) | **16.3 : 1** | AAA |
| `--text-secondary` (#9B9892) on `--bg-primary` (#1E1D1A) | **5.8 : 1** | AA |
| `--interactive` (#6AAAD8) on `--bg-page` (#131210) | **8.2 : 1** | AAA |

### 2.3 Rules

- **`--text-muted` is for non-essential metadata only** — timestamps, captions, secondary labels. Never for actionable text.
- **`--warning` is iconographic, not textual** — use `--amber-60` (`#9B6510`) when warning needs body-text contrast.
- **Semantic accents (success/warning/danger) are accompanied by an icon or text label** — never communicate state with color alone (see §3 Dual encoding).
- **In dark mode, semantic accents stay the same hex** — they remain visible against both `--bg-page` and `--bg-primary` surfaces.

### 2.4 Forward — APCA / WCAG 3.0

WCAG 3.0 draft replaces the WCAG 2 contrast formula with **APCA (Accessible Perceptual Contrast Algorithm)**, which is perceptually weighted. APCA reports `Lc` (lightness contrast) values, not ratios.

Targets to track when 3.0 ratifies:
- Body text: **Lc ≥ 60** (informally "fluent reading")
- Large headings: **Lc ≥ 45**
- Non-text UI (icons, borders): **Lc ≥ 30**

All Mulligan body-text pairs above pass APCA Lc ≥ 60 today. We over-engineer contrast on purpose so the system doesn't break when the standard tightens.

---

## 3. Dual encoding — never color alone

WCAG 2.2 §1.4.1 ("Use of color") requires that any information conveyed by color is **also** conveyed by another visual cue. Mulligan applies this to:

| Where | Color cue | Required redundant cue |
|---|---|---|
| Price tendency (up / down) | green / red | `↑` / `↓` arrow + signed `%` |
| Form-field error | red border | error icon + helper text + `aria-describedby` |
| Form-field success | green border | success icon + helper text |
| Watchlist follow state | red heart | filled vs. outlined icon + label change ("Siguiendo" / "Watchlist") |
| Tab active | interactive color | 2px bottom border |
| Inline alert | colored border-left | icon + bold title + descriptive text |
| Active chip / filter | bg fill | text weight increases to 500 |
| Disabled state | reduced opacity | `aria-disabled="true"` + `cursor: not-allowed` |

**Anti-pattern:** "the green badge means it's available." Refuse. Add a label.

---

## 4. Touch targets & hit slop

WCAG 2.5.8 (AA) requires **24×24 CSS px minimum**. Mulligan exceeds this and uses the **Apple HIG / Material 3 floor of 44×44 px** as the design minimum — covering ergonomics for one-handed thumb reach on common Android and iOS devices.

| Element | Visible size | Tappable area |
|---|---|---|
| Primary button (md) | 40 height | 44 hit slop via `padding` or wrapper |
| Bottom-nav tab | icon 22 + label 10 | **44×44** (each grid cell ≥ 88 wide ≥ 64 tall) |
| Icon-only button (top bar) | 40×40 visual | **44×44** with hit-slop padding |
| Chip / filter | 28 height | 44 hit slop applied via 16px column gap |
| Card list row | full row | full row clickable; min 56 tall |
| OTP digit input | 56×64 | matches visual |
| Checkbox / radio | 18×18 visual | 44×44 tappable (label + control as one target) |

**Spacing between targets:** minimum 8px gap (WCAG 2.5.5). When two interactive elements sit closer, raise the effective hit area with padding or wrap them in a single tappable container.

---

## 5. Per-component checklist

Every component must answer **all eight** of these before shipping:

1. **Keyboard navigable.** Tab order matches visual order, no `tabindex` positive values, all interactive elements reachable.
2. **Focus visible.** `:focus-visible` shows `0 0 0 2px rgba(26,111,181,.30)` ring. **Never `outline: none` without replacement.**
3. **Semantic HTML.** Actions → `<button>`, navigation → `<a>`, form controls → `<label for="">`. Not `<div onClick>`.
4. **ARIA only where HTML can't.** Prefer native semantics. When using ARIA: `aria-label` on icon-only buttons, `aria-describedby` on errored inputs, `role="status" aria-live="polite"` on async-updating prices.
5. **Touch target ≥ 44×44.** Including invisible hit area.
6. **Contrast verified.** Every text/bg pair sits in §2 tables, or is freshly measured.
7. **Reduced motion respected.** Animations gated by `@media (prefers-reduced-motion: no-preference)`.
8. **Text scales to 200%.** Without `user-scalable=no`. No text or interactive content gets clipped.

---

## 6. Forms

WCAG 2.2 added §2.4.13 (focus appearance, AAA) and §3.3.7 (redundant entry, AA) — both shape Mulligan forms.

- **Labels are always visible**, never placeholder-as-label. Placeholder disappears when the user types, leaving no context.
- **Validate on blur**, not on keypress. Don't punish users mid-thought.
- **Errors describe what to fix**, never "Algo salió mal":
  - ✓ "Precio mínimo: USD 5,00."
  - ✗ "Valor inválido."
- **Helper text** uses 11px regular. Color: `--text-muted` for default, `--danger` for error.
- **Required fields** marked with the word "requerido" or asterisk + `aria-required="true"`, never asterisk alone.
- **Redundant-entry exception:** phone verification reuses the number from KYC step — no re-typing.
- **Auto-complete** attributes on relevant inputs: `autocomplete="email"`, `tel-national`, `one-time-code` for OTP.

---

## 7. Motion & animation

- All animations gated: `@media (prefers-reduced-motion: no-preference) { ... }`.
- No parallax, no auto-playing carousels, no flashing (WCAG 2.3.1 — three flashes/sec or below).
- **Skeleton shimmer** is decorative — runs even with reduced motion at a static gradient (no movement).
- **Price chart entry animation** (400ms `chartDraw`) is disabled under reduced motion; chart appears fully drawn.
- Modal/sheet/drawer animations are entry-only and ≤ 300ms; never block interaction.

---

## 8. Screen reader & assistive tech

- **All icons** convey state or action have a paired `aria-label` (icon-only buttons) or visible label (icon + text).
- **Decorative icons** carry `aria-hidden="true"` so they don't pollute the spoken stream.
- **Live price updates** announced via `role="status" aria-live="polite"` — never `aria-live="assertive"` for non-critical data (a price change is not urgent).
- **Form error focus**: when validation fires on submit, focus moves to the first error field (`field.focus()`) — not just visual highlight.
- **Loading states** announce via `aria-busy="true"` on the container, then `aria-busy="false"` when the content arrives.
- **Empty states** announce the empty state title + the CTA, not just "empty".
- **TalkBack (Android)** and **VoiceOver (iOS)** both tested for: search, card detail, scan result, alert configuration. These are the **must-pass** flows.

---

## 9. Cognitive accessibility

WCAG 2.2 added §3.2.6 (consistent help, A) and §3.3.8 (accessible authentication, AA) — both shape Mulligan flows.

- **Predictable navigation.** Bottom nav never re-orders. Top bar variants are stable per screen.
- **No CAPTCHA-style cognitive blockers.** OTP via SMS is fine; image puzzles are not.
- **Plain Spanish over jargon.** "Volatilidad" is explained inline once per session (tooltip + bottom sheet glossary).
- **Undo for destructive actions.** "Eliminar publicación" requires a modal confirmation; "Retirar de watchlist" surfaces an undo toast.
- **Timeouts surfaced visibly.** OTP code timer is shown as text ("Reenviar en 28s"), never invisible.
- **No autoplay video, no surprise navigation.** Tapping any card opens the detail; never opens a modal.

---

## 10. Mobile-specific considerations

Tradeit is mobile-first. Devices targeted (per PRD §5.3 + market share data):

| Device class | Widths (CSS px) | Notes |
|---|---|---|
| Small Android | 320 – 360 | Galaxy A series, Moto G, low-end Xiaomi |
| Standard Android | 360 – 412 | Pixel 7/8, Galaxy S22+, Xiaomi Redmi Note |
| Large Android | 412 – 430 | Pixel 7 Pro, Galaxy S22 Ultra |
| iPhone SE / mini | 320 – 375 | Smallest modern iPhone |
| iPhone 13–16 | 390 – 393 | Most common iOS size |
| iPhone 14/15/16 Pro Max | 430 | Largest iOS phone |

**Mulligan layouts are validated at 320, 360, 390, 412, 430 px wide.** Anything narrower than 320 is out of scope (no longer in the active Android device matrix as of 2026).

Mobile rules:
- **Touch targets ≥ 44×44**, spaced ≥ 8px apart.
- **Bottom-nav** stays at 56 + safe-area height. Never hidden on scroll on mobile.
- **Safe area insets**: respect `env(safe-area-inset-bottom)` on iOS so the gesture-bar doesn't overlap the nav.
- **Single-column layouts** below 640px. No horizontal scroll for primary content.
- **Modals become bottom sheets** below 640px (per MULLIGAN.md §11 Responsive).
- **No hover-only states.** Hover always paired with touch-equivalent (`:active`, tap-highlight).
- **TalkBack/VoiceOver gestures** never blocked by intercepting common swipes.

---

## 11. Testing protocol

Before merging a new component or screen:

1. **Automated:** axe-core / Lighthouse a11y score = **100**.
2. **Manual keyboard:** complete the primary flow without touching the mouse / touchscreen. Tab, Shift+Tab, Enter, Space, Esc.
3. **Screen reader:** TalkBack on Android + VoiceOver on iOS. Read every interactive element aloud; confirm semantics match what's spoken.
4. **High contrast:** Forced-colors media query (`@media (forced-colors: active)`) — system colors take over; verify nothing breaks.
5. **Text scaling:** 200% in OS settings; nothing clips, no horizontal scroll.
6. **Reduced motion:** OS-level toggle on; verify animations stop or simplify.
7. **Color blindness:** simulate deuteranopia + protanopia (most common). Confirm dual encoding holds.
8. **Touch target:** physically test smallest device (320px wide). Confirm thumbs hit every tappable element first try.

---

## 12. Anti-patterns to refuse

- Outline removed without replacement.
- Color-only state communication.
- `<div onClick>` for actions.
- Placeholder as label.
- `aria-live="assertive"` for routine updates.
- Tap target < 44×44.
- Auto-play video / sound.
- Time-limited critical actions without ability to extend.
- Modals with no `Esc` close + no close button.
- Forms with errors only shown after submit (always validate on blur).
- "Click here" as link text — link describes its destination.

---

*Accessibility is not a feature. It's a floor.*
