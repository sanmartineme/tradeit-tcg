# Tradeit TCG · Web Companion UI Kit

Desktop counterpart to the mobile UI kit. **Post-MVP** per `PRD.md §14 #11`: a Next.js-style web companion that reuses the BFF and lets coleccionistas consult their data from desktop.

Built on the same **Mulligan** tokens — colors, type, spacing, motion. Same `colors_and_type.css`. Same Phosphor icons. The desktop kit **does not redefine the system**; it composes the existing components inside a 12-column 1280px-max layout per `MULLIGAN.md §11 Responsive` + Templates.

## Run

Open `index.html` directly. No build step.

## File map

```
ui_kits/tradeit-web/
├── index.html                 ← open this
├── App.jsx                    ← screen switcher (landing / detail) + dark toggle
├── browser-window.jsx         ← starter Chrome bezel
├── components/
│   ├── WebTopBar.jsx          ← sticky 48px nav · logo · search · auth
│   └── WebFooter.jsx          ← 5-col footer + legal disclaimer band
└── screens/
    ├── Landing.jsx            ← marketing homepage
    │   · Hero (left copy · right live mini-ficha)
    │   · 6-up feature grid
    │   · "Cartas más volátiles" live ticker (4 TcgCards)
    │   · Dark CTA band (download Android + iOS waitlist)
    └── DesktopCardDetail.jsx  ← ficha desktop (8/12 main + 4/12 sticky aside)
        · Hero card 200×280 + nombre/set/badges + 4 price cells
        · PriceChart (1m/3m/9m/12m)
        · Listings disponibles + bloque educativo + disclaimer
        · Aside sticky: PriceBlock + CTA Comprar + Vendedor destacado
```

## Reuse strategy

To keep the system DRY, the web kit **imports** the following from the mobile kit:

```html
<script src="../tradeit-app/data.jsx"></script>
<script src="../tradeit-app/components/Atoms.jsx"></script>
<script src="../tradeit-app/components/TcgCard.jsx"></script>
<script src="../tradeit-app/components/PriceBlock.jsx"></script>
<script src="../tradeit-app/components/PriceChart.jsx"></script>
<script src="../tradeit-app/components/ListingRow.jsx"></script>
```

`Button`, `Badge`, `Price`, `Delta`, `Avatar`, `Chip`, `EmptyState`, `ConditionBadge` are theme-aware via CSS variables and render correctly inside both phone frames and desktop containers. No forking.

Once both kits stabilize, these shared atoms can graduate to `ui_kits/_shared/` (see `ARCHITECTURE.md §6`).

## What's in scope here

- Marketing homepage with hero, features, live ticker, CTA band.
- Card detail desktop layout (the canonical 8/12 + 4/12 from `MULLIGAN.md §11 Template: Ficha de carta`).
- Light + dark mode (toggle in toolbar).

## Out of scope (not built here)

- Auth pages (login / signup) — `MULLIGAN.md §11` template exists but not implemented.
- Panel de usuario desktop (220px sidebar + content) — `MULLIGAN.md §11`.
- Catálogo / búsqueda desktop con 240px sidebar de filtros + grid 4 col — `MULLIGAN.md §11`.

These are documented patterns; they would be natural next steps if the web companion advances past discovery.
