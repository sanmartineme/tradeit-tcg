# Tradeit TCG — Prompt: Primer Vistazo de la App
> Design System: Mulligan DS v1.0 · MVP v1.0 · Pokémon TCG · Mobile Android

---

## Cómo usar este prompt

Copia el bloque de la sección **"Prompt"** y pégalo en la herramienta de tu elección. Cada sección de adaptación indica qué ajustar según la plataforma.

### Herramientas compatibles

| Herramienta | Tipo de output | Notas |
|---|---|---|
| **Figma Make** | Diseño editable en Figma | Mejor para iterar componentes del DS |
| **v0.dev** | Código React + Tailwind | Ideal para el design system en web |
| **Bolt.new** | App web funcional | Full-stack, incluye navegación |
| **Lovable** | App web interactiva | Bueno para flujos y lógica de UI |
| **Google AI Studio** | Imagen / descripción | Usar como punto de partida conceptual |
| **Google Stitch** | UI generada + código | Optimizado para prompts de pantallas mobile |
| **Claude Design** | Mockup visual interactivo | Soporta tokens y sistemas de diseño declarativos |

---

## Adaptaciones por plataforma

### Google AI Studio
- Usa el prompt completo en **Gemini 2.0 Flash** o **Gemini 2.5 Pro** con capacidad multimodal.
- Agrega al inicio: `"Generate a detailed UI mockup description and visual layout for each screen. Output as both a written specification and a rendered image if possible."`
- Si usas el modo imagen (Imagen 3): reduce el prompt a una sola pantalla por request, menciona explícitamente el estilo: `"flat UI, fintech mobile app, IBM Plex Sans typography, muted warm gray palette, no illustrations, no gradients"`.
- Para código: pide `"Generate the HTML/CSS for this screen using CSS custom properties matching the token system described."`

### Google Stitch
- Stitch está optimizado para prompts cortos y orientados a mobile. Usa la **versión compacta** (ver sección al final).
- Pega el prompt de tokens de color y tipografía primero como contexto del sistema, luego describe cada pantalla por separado en requests consecutivos.
- Stitch genera componentes React Native / Flutter; especifica: `"React Native, Android first, no iOS-specific components"`.
- Después de generar, pide: `"Apply the Mulligan Design System tokens to all generated components"` con el bloque CSS de tokens pegado.

### Claude Design (claude.ai/design o Artifacts)
- Claude Design soporta prompts estructurados con tokens declarativos. Pega el prompt completo.
- Agrega al inicio del prompt: `"You are implementing screens for a mobile app. Use the design tokens and component specs below to generate accurate HTML/CSS mockups with inline styles using CSS custom properties. Output one screen per artifact."`
- Claude puede mantener coherencia entre pantallas en una misma conversación: genera Screen 1, luego pide las siguientes haciendo referencia al sistema ya establecido.
- Para iterar: `"Adjust the card detail screen to dark mode using the .dark token overrides defined in the system"`.
- Soporta feedback visual directo: `"Make the price block more prominent, increase the price font to 40px"`.

---

## Prompt

```
# Tradeit TCG — Mobile App UI (First Look / MVP v1.0)

## CONTEXT
Design the first look of **Tradeit TCG**, a mobile-first Android app (React Native) for the
TCG (Trading Card Games) community in Latin America. It combines a **P2P marketplace** for
Pokémon cards with a **fintech-style investment tracker** (price history, volatility,
watchlists, alerts). The MVP covers Pokémon TCG only.

---

## DESIGN SYSTEM — Mulligan DS v1.0

All visual decisions must follow the Mulligan Design System exactly.

### Typography
- Body copy: **IBM Plex Sans** — weights 300, 400, 500 only. Never 600 or 700.
- All prices and numeric data: **IBM Plex Mono** — weights 400, 500.
- Scale:
  - Display: 48px / weight 300
  - H1: 32px / weight 300–400
  - H2: 24px / weight 500
  - H3: 20px / weight 500
  - H4: 16px / weight 500
  - Body: 16px / weight 400
  - Body Small: 14px / weight 400
  - Label: 12px / weight 500 / uppercase / letter-spacing 0.08em
  - Caption: 11px / weight 400
  - Price: 14–36px / IBM Plex Mono

### Color Tokens — Light Mode (default)
- bg-page:        #F8F8F6   (warm gray page background — NOT pure white)
- bg-primary:     #FFFFFF   (cards, inputs, nav)
- bg-secondary:   #F0EFEC   (hover states, filter bar, tags)
- text-primary:   #131210
- text-secondary: #5C5A56
- text-muted:     #9B9892
- border:         #D6D4CE
- border-em:      #B2B0AB
- interactive:    #1A6FB5   (blue-60 — buttons, links, active tabs, focus rings)
- success:        #2DA67E   (teal-40 — price up, verified badge)
- warning:        #E69A20   (amber-40 — LP condition, caution states)
- danger:         #D94646   (red-40 — price down, HP/DMG condition, errors)

### Color Tokens — Dark Mode (.dark class)
- bg-page:        #131210
- bg-primary:     #1E1D1A
- bg-secondary:   #252421
- text-primary:   #F0EFEC
- text-secondary: #9B9892
- text-muted:     #5C5A56
- border:         #2E2D2A
- border-em:      #3D3C38
- interactive:    #6AAAD8   (blue-40 — more legible on dark backgrounds)
- success/warning/danger: unchanged from light

### Spacing (base 4px — all values are multiples of 4)
- space-2:  8px   | space-3: 12px  | space-4: 16px
- space-5: 20px   | space-6: 24px  | space-8: 32px

### Border Radius
- xs:   2px  (rarity tags, tight chips)
- sm:   4px  (inputs, selects, code)
- md:   8px  (buttons, tooltips)
- lg:  12px  (cards, card art wrapper)
- xl:  16px  (modals, bottom sheets)
- full: 999px (badges, pills, avatars)

### Elevation — Light Mode
- 0: border: 1px solid #D6D4CE
- 1: border + box-shadow: 0 1px 4px rgba(0,0,0,.06)   — cards in grid
- 2: border + box-shadow: 0 4px 16px rgba(0,0,0,.08)  — dropdowns, popovers
- 3: border + box-shadow: 0 8px 32px rgba(0,0,0,.12)  — modals, drawers

### Icons — Phosphor Icons (1.8px stroke, always currentColor)
- Search:        MagnifyingGlass    | Filters:  Funnel
- Watchlist:     Heart              | Alerts:   Bell
- Profile:       User               | Verified: SealCheck
- Price Up:      TrendUp            | Price Down: TrendDown
- Scan/Camera:   Camera             | Sell:     Tag
- Settings:      GearSix            | Back:     ArrowLeft
- Close:         X                  | Expand:   CaretDown
- Edit:          PencilSimple       | Delete:   Trash

### Design Principles
1. Trust first — professional, data-forward, no decorative noise
2. Smart density — multiple card attributes visible, clear visual hierarchy
3. Flat & structured — no decorative gradients; elevation via borders + shadows only
4. Accessible — WCAG AA (min 4.5:1 text contrast, 44×44dp touch targets minimum)
5. Fintech meets hobby — data-serious like a trading terminal, warm like a card shop

---

## SCREENS TO DESIGN

Design these **4 mobile screens** at 375px width (vertical), light mode default.
Also include a **dark mode variant** of Screen 3.

---

### SCREEN 1 — Home Dashboard (Buyer Profile)

**Top Navigation Bar** (height: 48px, fixed, border-bottom):
- Left: "Tradeit" logotype (IBM Plex Sans 500) + small blue square icon (28×28px, radius 6px, bg: interactive)
- Right: Bell icon (24px, text-muted) + Avatar circle 28px (initials "DG", circular, deterministic bg color)

**Greeting** (padding: 16px):
- "Hola, Diego." — H2 24px 500
- "Tu watchlist tiene 12 cartas." — Body Small 14px text-secondary

**Stats Row** (3 equal columns, gap 8px, margin 0 16px):
Each stat card (bg-primary, radius 12px, border elevation-0, padding 16px):
- Label uppercase 12px text-secondary + value in IBM Plex Mono
- Col 1: "WATCHLIST" / "12"  (28px Mono)
- Col 2: "ALERTAS ACTIVAS" / "4" (28px Mono)
- Col 3: "GASTO MES" / "USD 840" (28px Mono, success color)

**Section header** (padding 16px 16px 8px):
- "Mi watchlist" — H4 16px 500 text-primary
- "Ver todas" — 14px interactive color, right-aligned (ghost link)

**Watchlist Cards** (vertical list, gap 12px, margin 0 16px):
Each card (bg-primary, radius 12px, border, elevation 1, padding 16px, flex row):
- Left: card art placeholder 68×96px, radius 6px, bg gradient blue-10(#EBF2FB) → blue-20(#C5DAEF)
  - Rarity badge overlay top-right: "Alt Art" (pill, amber-10 bg, amber-60 text, 11px 500)
- Right column:
  - Card name: "Charizard ex" — 13px 500 text-primary (truncate with ellipsis)
  - Set: "199/197 · Scarlet & Violet" — 11px text-muted
  - Condition badge: "NM" — pill, blue-10 bg, blue-80 text, 11px 500
  - Price row: "USD 412,50" (18px IBM Plex Mono) + "↑ +3,8% · 30d" (11px success, TrendUp icon 16px)

Show 2–3 watchlist cards. Second card: "Pikachu VMAX" / "075/185 · Vivid Voltage" / "USD 145,00" / "↑ +12,4% · 30d"

**Bottom Navigation Bar** (height: 56px, fixed bottom, border-top, bg-primary):
4 tabs with icon 24px + label 9px, touch target 44×44dp:
- Inicio (House) — ACTIVE: interactive color icon + label
- Buscar (MagnifyingGlass) — inactive: text-muted
- Actividad (ShoppingCart) — inactive: text-muted
- Perfil (User) — inactive: text-muted

---

### SCREEN 2 — Search & Results

**Top Nav** (same as Screen 1)

**Search & Filter Bar** (height: 48px, sticky below nav, bg-secondary, border-bottom, padding 0 16px):
- Search input (flex 1, height 32px, radius 4px, bg-primary, border, padding 0 12px):
  - MagnifyingGlass icon 16px text-muted left
  - Placeholder: "Busca una carta o set" (text-muted)
- Funnel icon button (20px, text-secondary), right of input

**Active Filters** (horizontal scroll row, padding 8px 16px, gap 8px):
Chips (height 28px, radius 14px, padding 0 12px, 12px 500):
- "Single" — ACTIVE (bg interactive, white text, border interactive)
- "Holo Rare" — ACTIVE (bg interactive, white text)
- "Scarlet & Violet" — INACTIVE (bg transparent, text-secondary, border #D6D4CE)
- "+ 2 más" — INACTIVE ghost

**Results Header** (padding 12px 16px):
- "23 resultados" — 14px text-secondary
- "Ordenar: Relevancia ▾" — 14px interactive color, right-aligned, CaretDown icon 16px

**Card Grid** (2 columns, gap 12px, padding 0 16px 16px):
Each card (bg-primary, radius 12px, border, elevation 1):
- Image area (full width × 110px, overflow hidden, rounded top corners 12px):
  - Gradient bg blue-10 → blue-20 for Single cards
  - Card art 68×96px centered, radius 6px
  - Rarity badge top-right corner (inside image area, 8px from edges): pill 11px 500
- Body (padding 10px):
  - Name: 13px 500 text-primary, single line truncate
  - Set: 11px text-muted, single line truncate
  - Row: Condition badge (pill) + flex spacer + Price (13px IBM Plex Mono)
  - Trend: "↑ +12,4% · 30d" (11px success, TrendUp 16px) OR "↓ −3,1% · 30d" (danger, TrendDown)

Grid cards to show (4 cards, 2×2):
1. "Pikachu VMAX" / "075/185 · Vivid Voltage" / "Ultra Rare" / NM / "USD 145,00" / "↑ +12,4%"
2. "Mewtwo ex" / "205/193 · Paldea Evolved" / "Special Illustration Rare" / NM / "USD 278,00" / "↑ +5,2%"
3. "Charizard" PSA graded card — gradient amber-10 → amber-20 bg, badge: "PSA 10" (solid dark: gray-100 bg, gray-10 text), "066/198 · Paradox Rift" / "USD 890,00" / "↑ +8,9%"
4. "Gardevoir ex" / "086/091 · Twilight Masquerade" / "Secret Rare" / LP / "USD 62,50" / "↓ −3,1%" (danger color)

---

### SCREEN 3 — Card Detail: Charizard ex 199/197

**Top Nav** (48px, border-bottom):
- Back button: ArrowLeft icon 24px + "Buscar" 14px text-secondary (ghost, left)
- Right: Heart icon (24px, text-muted) + Share icon (24px, text-muted)

**Breadcrumb** (padding 12px 16px, 11px text-muted):
`Inicio / Buscar / Charizard ex`
Interactive color on "Inicio" and "Buscar", text-secondary on "Charizard ex"

**Card Hero** (full width, bg gradient blue-10 → blue-20, padding 24px, center align):
- Card art image 120×168px, radius 8px, elevation 1
- Below art: "Special Illustration Rare" pill (amber-10/amber-60) + "Alt Art" pill, gap 8px

**Card Identity** (padding 16px):
- "Charizard ex" — H2 24px 500 text-primary
- "199/197 · Scarlet & Violet" — 14px text-secondary
- "Ilustrador: Mitsuhiro Arita" — 11px text-muted Caption

**Price Block** (bg-primary, radius 12px, border, elevation 1, padding 20px, margin 0 16px 12px):
- "PRECIO ACTUAL" — Label 12px 500 uppercase text-secondary, margin-bottom 4px
- "USD 412,50" — 36px IBM Plex Mono weight 300 text-primary, line-height 1.2
- "Actualizado hace 12 min · Fuente: TCGPlayer" — 11px text-muted, margin-top 4px

- Divider (1px border, margin 16px 0)

- Averages row (3 columns, equal width):
  Each column:
  - Period label: "30d" / "60d" / "90d" — 12px 500 uppercase text-muted
  - Price: "USD 398,20" / "USD 376,10" / "USD 354,90" — 14px IBM Plex Mono text-primary
  - Change: "↑ +3,8%" / "↑ +9,7%" / "↑ +16,2%" — 11px success color, TrendUp icon 12px

- Divider (1px border, margin 12px 0)

- Indicators row (flex, gap 8px):
  - "Tendencia" text-muted 11px + TrendUp icon 16px success + "Sube" pill (teal-10/teal-60, radius full)
  - "Volatilidad" text-muted 11px + "Media" pill (amber-10/amber-60, radius full)

**Price History Chart** (bg-primary, radius 12px, border, margin 0 16px 12px, padding 16px):
- Header row: "Historial de precios" — H4 16px 500 + (optional) toggle "Prom. móvil 30d" (off state)
- Period switcher (contained tabs, bg-secondary radius 6px, padding 3px, margin-bottom 12px):
  "1m" | "3m" | "9m" | "12m" — 12m is ACTIVE (bg-primary border elevation-0, interactive color 14px 500)
  Others: 14px text-secondary
- Chart area (full width × 140px):
  - Smooth area chart, 12-month upward trend with realistic fluctuation
  - Line: 2px stroke interactive color
  - Fill: interactive color at 12% opacity
  - No axis labels (keep it clean for mobile)
  - Tooltip on last data point: small bubble "USD 412,50 · 16 may" (bg-primary, border, radius 6px, 11px)
- Footer: "Datos de TCGPlayer y PriceCharting · Sincronizado hace 12 min" — 11px text-muted

**Listings** (margin 0 16px 12px):
- Header: "Disponible en Tradeit" H4 16px 500 + "(3)" text-muted
- 2 listing rows (bg-primary, border-bottom, padding 12px, flex row, gap 12px):
  Row 1:
  - Avatar 28px "CR" circular (success bg tone)
  - SealCheck icon 16px success
  - "Camila R." 13px 500 + "Santiago, CL" 11px text-muted (stacked)
  - Flex spacer
  - "NM" badge + "USD 405,00" 14px Mono
  - "Ver oferta" ghost 12px interactive color

  Row 2:
  - Avatar "DP" + "Diego P." + "CDMX, MX"
  - "LP" badge (amber) + "USD 380,00"
  - "Ver oferta"

**Disclaimer** (center, padding 16px, 11px text-muted):
"Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra."

**Sticky Action Bar** (56px, fixed bottom, bg-primary, border-top, padding 0 16px):
- Ghost button: Heart icon 20px + "Watchlist" 12px — secondary
- Ghost button: Bell icon 20px + "Alerta" 12px — secondary
- Primary button (flex 1, height 40px, radius 8px, bg interactive, white):
  Tag icon 20px + "Publicar en venta" 14px 500

---

### SCREEN 4 — Seller Dashboard (Camila R.)

**Top Nav** (same structure)

**Profile Header Card** (bg-primary, radius 12px, border, elevation 1, padding 20px, margin 16px, center align):
- Avatar Lg (56px circular, initials "CR", bg: teal-10 border teal-20)
- SealCheck icon 20px success, overlaid bottom-right of avatar
- "Camila R." — H2 24px 500, margin-top 12px
- "Vendedora verificada" — 14px text-secondary + success dot (6px circle)

**Stats Grid** (2×2 grid OR 1×3 row, gap 8px, margin 0 16px 12px):
Each stat tile (bg-secondary, radius 12px, padding 16px):
- "PUBLICACIONES ACTIVAS" label + "8" (28px Mono interactive)
- "VENTAS ESTE MES" label + "14" (28px Mono text-primary)
- "INGRESOS MES" label + "USD 1.240" (28px Mono success)

**Primary CTA** (full width, height 48px, bg interactive, white, radius 8px, margin 0 16px 16px):
Tag icon 20px + "+ Publicar nuevo producto" — 16px 500

**Active Listings** (margin 0 16px):
- Section header: "Mis publicaciones activas" H4 16px 500

Listing rows (bg-primary, radius 12px, border, elevation 1, padding 16px, gap 12px, margin-bottom 8px):

Row 1:
- Card art placeholder 32×44px, radius 4px, bg blue-10 (Single)
- Text column:
  - "Charizard ex" — 13px 500 text-primary
  - "NM · USD 405,00" — 13px Mono text-secondary
  - "14 vistas · 3 en watchlist" — 11px text-muted, margin-top 4px
- Right: "Activo" pill (teal-10/teal-60, radius full, 11px 500) + PencilSimple icon 20px text-muted

Row 2:
- Card art 32×44px, radius 4px, bg amber-10 (Graded)
- "Pikachu VMAX (PSA 10)"
- "NM · USD 890,00"
- "8 vistas · 1 en watchlist"
- "Activo" pill (teal) + PencilSimple

**Empty State** (bg-primary, radius 12px, border, padding 32px 20px, margin 0 16px, center align):
For "Mis ventas declaradas" section:
- Tag icon 48px text-muted (Phosphor, outlined)
- "Todavía no registras ventas" — H4 16px 500, margin-top 16px
- "Cuando concretes una venta, registrala acá para llevar el control de tus ingresos." — 13px text-secondary, max-width 260px, text-center, line-height 1.6
- "Registrar venta" — secondary button (border, text-primary, radius 8px, height 40px, margin-top 16px)

---

## DARK MODE VARIANT — Screen 3 (Card Detail)

Apply .dark token overrides:
- bg-page → #131210, bg-primary → #1E1D1A, bg-secondary → #252421
- text-primary → #F0EFEC, text-secondary → #9B9892, text-muted → #5C5A56
- border → #2E2D2A, border-em → #3D3C38
- interactive → #6AAAD8 (blue-40)
- Chart line and fill: use #6AAAD8 (interactive dark) with 12% fill opacity
- Elevation: reduce shadow opacity by 50%, differentiate surfaces via background steps
- Card art images: do NOT invert or filter — maintain original colors
- Hero card background gradient: use subtle dark tints — adjust blue-10/blue-20 to near-dark equivalents

---

## CONTENT & COPY RULES

- Language: Spanish, neutral LatAm, "tú" form (never "vos" or "usted" in UI)
- Case: sentence case always — "Agregar a watchlist" NOT "Agregar A Watchlist"
- No exclamation marks in system UI
- No emojis in system UI (allowed only in marketing pushes)
- Numbers: comma decimal separator (USD 412,50), dot thousands (12.450 cartas)
- Percentage format: "↑ +3,8% · 30d" — use typographic minus "−" (U+2212), not hyphen
- Prices: always with currency code — "USD 412,50" or "$48.500 CLP"
- Timestamps: relative first ("hace 12 min"), absolute in tooltip
- Error messages: what happened + how to fix — never "Algo salió mal" without context
- No "Oops", no "¡Ups!", no placeholder as label substitute

### Badge Condition System (always color + abbreviation text, never color alone)
- M (Mint): teal-10 bg / teal-60 text
- NM (Near Mint): blue-10 bg / blue-80 text
- LP (Lightly Played): amber-10 bg / amber-60 text
- MP (Moderately Played): amber-10 bg / amber-80 text
- HP (Heavily Played): red-10 bg / red-60 text
- DMG (Damaged): red-10 bg / red-80 text
- PSA/CGC + grade: gray-100 bg / gray-10 text (solid dark, exclusive to certified grading)

### Card Art Rules
- Always portrait rectangle with radius 6px (NEVER circular)
- Placeholder gradients by card type:
  - Single Card: blue-10 → blue-20
  - Graded: amber-10 → amber-20
  - Sealed: gray-10 → gray-20

### Trend Indicators (always double-encoded: color + icon + text)
- Up: success color (#2DA67E) + TrendUp icon + "↑ +X,X%"
- Down: danger color (#D94646) + TrendDown icon + "↓ −X,X%"
- Neutral: text-muted + no icon + "–"

---

## OUTPUT EXPECTATIONS

- 4 screens at 375px mobile width, vertical layout
- Light mode for all 4 + dark mode variant for Screen 3
- IBM Plex Sans + IBM Plex Mono typography applied
- Phosphor Icons at correct sizes (16/20/24px depending on context)
- All numeric values in monospace
- Bottom nav visible and fixed on all screens
- Touch targets visually apparent (min 44×44dp)
- Realistic Pokémon card names and data (not "Card Name" or "Lorem ipsum")
- Tone: Bloomberg Terminal meets Pokémon card shop — data-serious, clean, trustworthy
```

---

## Versión compacta — Google Stitch / AI Studio Imagen

Para herramientas con límite de tokens o generación de imágenes, usa esta versión reducida por pantalla:

### Screen 1 — Home (Stitch / Imagen)
```
Mobile app screen, 375px, fintech + TCG card marketplace.
Style: flat UI, warm gray background #F8F8F6, white cards, IBM Plex Sans typography,
no decorative gradients, no illustrations, professional and clean.
Top nav: "Tradeit" logo + bell icon + avatar 28px.
Content: greeting "Hola, Diego." + 3 stat tiles (Watchlist 12, Alertas 4, Gasto USD 840).
Watchlist section with 2 card rows: card art portrait rectangle (blue gradient placeholder,
radius 6px) + name, set info, NM badge (blue pill), price in monospace + green up arrow trend.
Bottom nav: 4 tabs (Inicio active blue, Buscar, Actividad, Perfil), 56px height.
Colors: primary action #1A6FB5, success green #2DA67E, text #131210.
```

### Screen 3 — Card Detail (Stitch / Imagen)
```
Mobile card detail screen, 375px, fintech price dashboard for a Pokémon card.
Style: flat, professional, IBM Plex Sans + IBM Plex Mono for prices.
Top: back arrow + share/heart icons.
Hero: portrait card art 120×168px on blue gradient bg, "Special Illustration Rare" amber badge.
Price block white card: "USD 412,50" large monospace 36px, "Actualizado hace 12 min · TCGPlayer"
caption. Three average columns: 30d USD 398,20 +3,8% / 60d USD 376,10 +9,7% / 90d USD 354,90 +16,2%.
Green "Sube" pill + amber "Volatilidad Media" pill.
Area chart 140px tall: smooth upward trend, blue #1A6FB5 stroke, light blue fill.
Period tabs: 1m 3m 9m 12m — 12m active.
Sticky bottom bar: Watchlist + Alerta ghost buttons + "Publicar en venta" blue primary button.
```

---

## Checklist de revisión

Antes de aprobar cualquier output generado, verificar:

- [ ] IBM Plex Sans para texto, IBM Plex Mono para todos los precios y cifras
- [ ] Fondo de página #F8F8F6 (no blanco puro)
- [ ] Precios siempre con código de moneda (USD / CLP)
- [ ] Badges de condición con color + texto abreviado (nunca solo color)
- [ ] Indicadores de tendencia con color + ícono + porcentaje (doble codificación)
- [ ] Arte de carta en rectángulo portrait con radius 6px (nunca circular)
- [ ] Bottom nav fijo, 4 tabs, nunca oculto en scroll
- [ ] Touch targets mínimo 44×44dp visibles
- [ ] Dark mode: sin negro puro, sin inversión de imágenes de cartas
- [ ] Sin gradientes decorativos en fondos de página o componentes
- [ ] Sin exclamaciones ni emojis en UI de sistema
- [ ] Copy en español neutro LatAm, sentence case, segunda persona singular "tú"

---

*Tradeit TCG · Mulligan DS v1.0 · 2026 · Prompt generado para uso en herramientas de diseño asistido por IA*
