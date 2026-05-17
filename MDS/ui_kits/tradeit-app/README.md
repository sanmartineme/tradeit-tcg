# Tradeit TCG · Mobile UI Kit

Interactive recreation of the Tradeit TCG mobile app, built on the **Mulligan** design system. React 18 + Babel standalone, no toolchain, no proprietary deps. The phone bezel is hand-rolled to match Mulligan's flat-and-structured identity (it would have clashed with M3 Roboto styling from the generic Android starter frame).

## Run

Open `index.html` directly — everything loads from CDN.

## File map

```
ui_kits/tradeit-app/
├── index.html              ← interactive demo (open this)
├── App.jsx                 ← root state machine: tabs + card detail + scan
├── data.jsx                ← CATALOG[] mock + SETS[]
├── components/
│   ├── PhoneFrame.jsx      ← bezel + status bar + gesture pill (Mulligan-styled)
│   ├── TopBar.jsx          ← app top bar (home / back variants)
│   ├── BottomNav.jsx       ← 4-tab bottom nav per MULLIGAN §10 Organism
│   ├── SearchBar.jsx       ← search input + filter trigger
│   ├── TcgCard.jsx         ← Card de carta (single / sealed / graded shells)
│   ├── PriceBlock.jsx      ← canonical price block (current + averages + tendency)
│   ├── PriceChart.jsx      ← SVG line chart with 1m/3m/9m/12m switcher
│   ├── ListingRow.jsx      ← row inside "Disponible en Tradeit"
│   ├── Toast.jsx           ← discreet bottom toast
│   └── Atoms.jsx           ← Button · Badge · ConditionBadge · Chip · Avatar
│                              · EmptyState · Delta · Price (price formatting)
└── screens/
    ├── HomeScreen.jsx      ← Inicio: greeting + scan CTA + watchlist + tendencias
    ├── SearchScreen.jsx    ← Buscar: chips + 2-col grid + empty state
    ├── CardDetail.jsx      ← Ficha: hero + PriceBlock + Chart + variantes + listings
    ├── ScanScreen.jsx      ← Cámara con viewfinder + reconocimiento simulado
    ├── OpsScreen.jsx       ← Mis ops: switcher Comprador/Vendedor con stats
    └── ProfileScreen.jsx   ← Perfil: avatar Lg + secciones con caret-right
```

## Click-through flow

1. **Inicio** lands you on watchlist + tendencias.
2. Tap any card → **Ficha de carta** with chart and listings.
3. Tap **watchlist** in the sticky CTA → toggles + toast.
4. Tap **Crear alerta** → toast "Alerta creada…".
5. From Inicio, tap **Escanear** → camera viewfinder → 3 s later a card is identified → tap **Ver detalle**.
6. Bottom nav: **Buscar** (grid + chips), **Mis ops** (Comprador ↔ Vendedor switcher), **Perfil**.

## Design fidelity notes

- All colors come from `colors_and_type.css`. The Mulligan spec is single-source-of-truth.
- Phosphor Icons via CDN (`regular` + `fill` variants for active nav tabs).
- IBM Plex Sans for UI; Plex Mono for **every** numeric (prices, timestamps, deltas, stats).
- Tabular numerics: every `Price` and `Delta` uses `font-variant-numeric: tabular-nums`.
- Sentence case in every label and button. No periods on CTAs. `−` (U+2212) for negative deltas.
- The scan screen is the only place with a black background — it represents the camera view. Everywhere else is `bg-page` (#F8F8F6).
- No invented designs: every layout matches a template in `MULLIGAN.md` (Detalle, Búsqueda + Resultados, Panel de Usuario).

## Known fakeness (not in scope)

- The chart uses a deterministic mock series, not real TCGPlayer/PriceCharting data.
- "Crear alerta" is a toast, no real config flow.
- Filtros side sheet, full set picker, and detailed listing/onboarding flows are not implemented — only the entry points are visible.
- iOS variant is out-of-scope per PRD (Android-first MVP).
