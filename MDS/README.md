# Mulligan Design System

> **Producto:** Tradeit TCG — app mobile (Android-first, React Native) y companion web para la comunidad de Trading Card Games hispanohablante.
> **MVP scope:** Pokémon TCG. Otros TCG (Magic, Yu-Gi-Oh!, One Piece, Lorcana) entran en fases posteriores.
> **Design system:** Mulligan v1.0 — Atomic Design, inspirado en IBM Carbon, con light + dark modes.

Tradeit TCG es **dos productos en uno**: un marketplace P2P de cartas y un app de inversión/analytics tipo fintech. El usuario puede ser comprador, vendedor o híbrido en la misma cuenta. La promesa es **"los datos que tu colección merece"**: gráficos históricos, promedios 30/60/90 días, volatilidad y tendencia — con la misma calidad de datos que un trader bursátil tiene de un activo financiero.

El sistema de diseño se llama **Mulligan** (el término TCG para "rebarajar la mano de apertura"). Comparte tokens entre web y app: una sola fuente de verdad para color, tipografía, espaciado, motion y componentes.

---

## Fuentes (input attribuído al brand)

Toda la documentación de marca y producto proviene de **un solo repo público**:

- **GitHub — sanmartineme/tradeit-tcg** · <https://github.com/sanmartineme/tradeit-tcg>
  - `PRD.md` — Product Requirements del MVP (10k+ palabras; PM: Carlos San Martín).
  - `MULLIGAN.md` — Design system completo (tokens, componentes, patrones, light/dark).
  - `content.md` — Content system (voz, tono, léxico TCG + fintech, microcopy).
  - `analisis.pdf`, `mind-map.png`, `infografia.png` — research del ecosistema TCG.

No hay codebase ni Figma adjuntos: este design system se construyó **directamente desde las especificaciones en markdown**. Si querés profundizar o derivar nuevos componentes, abrir esos tres documentos es el siguiente paso.

---

## Contenido — fundamentals

La voz es **una sola y no cambia**: informada, directa, respetuosa con el hobby, **neutral en lo financiero**. El tono sí varía según contexto (sobrio en datos, cálido en onboarding, honesto en errores).

### Persona, género, casing
- **Tuteo transversal** (`tú`) en español neutro de LatAm. Sin "vos" ni "usted".
- **Sentence case** en títulos, botones y labels. Sin punto final en botones o títulos.
- Género gramatical: plural neutro o reformulación; sin `@` ni `e` inclusivos en UI core (afecta lectores de pantalla).
- Nombre del usuario solo en saludos personalizados ("Hola, Carlos"), nunca en mitad de un flujo funcional.

### Léxico
- **TCG en inglés** porque así lo usa la comunidad: *single, sealed, graded, booster, ETB, holo, reverse holo, full art, alt art, secret rare, NM/LP/MP/HP/DMG, PSA 10, BGS 9.5, slab, reprint, errata*.
- **Fintech en español** con vocabulario sobrio: *tendencia, volatilidad, precio promedio 30/60/90 días, variación, histórico, watchlist (sí, en inglés), alerta de precio*.

### Anti-patrones de copy
- Nada de *"comprá antes de que suba"*, *"ganancia garantizada"*, *"predicción"*, *"to the moon"* — riesgo regulatorio.
- Sin *"Oops"* ni *"Ups"* en errores; explicamos qué pasó y qué hacer.
- Sin emoji decorativo en UI core (permitidos en push de campaña).
- Sin signos de exclamación múltiples ni jerga corporativa ("sinergia", "stakeholder").
- No personificamos la app: "Buscando…" no "Estoy buscando…".

### Reglas numéricas
- Precios: símbolo + monto + ISO en la primera aparición → `USD 412,50`. Coma decimal LatAm, punto miles (`12.450`). Signo menos tipográfico (`−`, no `-`).
- Porcentajes: 1 decimal, signo siempre visible → `+3,8%`, `−1,2%`.
- Períodos: `30d`, `60d`, `90d`, `1m`, `3m`, `9m`, `12m`. Fecha corta `16 may`. Hora 24h con `h`.
- Timestamps de datos: relativos primero ("hace 12 min"), absolutos en tooltip.

### Ejemplos canónicos
```
Botón:     "Agregar a watchlist"     ← no "Sumar a mi lista"
Empty:     "Aún no sigues ninguna carta."
Push:      Charizard ex sube 8,2%
           Pasó de USD 380 a USD 412 en las últimas 24h.
Error:     "No pudimos cargar el precio. Reintentar."
Éxito:     "Carta agregada a tu watchlist."
Disclaimer:"Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra."
```

---

## Visual foundations

### Filosofía: Carbon, no Material
Mulligan es **flat y estructurado**. Sin gradientes decorativos. La elevación se comunica con **bordes 1px + sombras sutiles**, nunca con fondos saturados o glow. La estructura emerge del contenido bien organizado, no de adornos visuales.

### Color
- Paleta **warm-gray + 4 acentos** (blue, teal, amber, red). Cada uno tiene 6 stops (10, 20, 40, 60, 80, 100) más una versión "0" para el gray (el fondo de página).
- `gray-0 #F8F8F6` es el fondo de página en light — **nunca blanco puro**: las cards blancas tienen que destacarse sobre algo.
- `blue-60 #1A6FB5` es el único color interactivo del sistema (botones, links, focus, active tab). En dark mode pasa a `blue-40 #6AAAD8` por contraste AA.
- Verde/amber/rojo son **estrictamente semánticos**: éxito/positivo, advertencia/grading/highlight, error/peligro/negativo. No se usan como decoración.

### Tipografía
- **IBM Plex Sans** (300, 400, 500) — peso máximo 500. La jerarquía se logra con tamaño y color, **nunca con bold 700**.
- **IBM Plex Mono** (400, 500) — exclusivo para precios y datos numéricos. Garantiza alineación de dígitos (`font-variant-numeric: tabular-nums`).
- Escala modular ratio 1.25 — display 48 / h1 32 / h2 24 / h3 20 / h4 16 / body 16 / sm 14 / label 12 / caption 11.
- Labels: 12px, 500, `text-transform: uppercase`, `letter-spacing: 0.08em`.

### Espaciado y borders
- Sistema base **4px**. Tokens `space-1` a `space-16` siempre múltiplos de 4.
- Radii: `xs 2px` (chips/rarity tags), `sm 4px` (inputs), `md 8px` (botones, dropdowns), `lg 12px` (cards), `xl 16px` (modales), `full 999px` (badges, avatares).
- Borders por defecto `1px solid var(--border)` (gray-20 light / gray-80 dark). Énfasis con `border-em` (gray-30 / gray-3D).

### Backgrounds e imágenes
- **Sin imágenes de fondo, sin patrones repetidos, sin gradientes decorativos.** El producto es un terminal de datos, no un dashboard de gaming.
- Las **imágenes de carta** son el único elemento ilustrativo: vienen de la Pokémon TCG API (oficial, alta resolución), nunca se invierten en dark mode (tienen colores propios).
- Las cards-shell tienen un **gradiente tonal** muy suave detrás de la imagen para diferenciar por tipo de producto:
  - Single Card → gradiente `blue-10 → blue-20`
  - Graded → gradiente `amber-10 → amber-20`
  - Sealed → gradiente `gray-10 → gray-20`

### Elevación / sombras
4 niveles. En light usa rgba(0,0,0,…); en dark se reduce al 50% de opacidad y se refuerza con fondos progresivamente más claros (`bg-page` → `bg-primary` → `bg-secondary`).

| Nivel | Sombra | Uso |
|---|---|---|
| 0 | `border` solo | Cards planas, inputs, tablas |
| 1 | `+ 0 1px 4px rgba(0,0,0,.06)` | Cards en grid |
| 2 | `+ 0 4px 16px rgba(0,0,0,.08)` | Dropdowns, popovers |
| 3 | `+ 0 8px 32px rgba(0,0,0,.12)` | Modales, drawers |

### Hover / press / focus
- **Hover:** background o border shift hacia variante más oscura (`blue-60` → `blue-80` en botón primary). No usar `opacity` para hover.
- **Press:** `transform: scale(0.97)` en 100ms ease-out. Visual feedback inmediato.
- **Focus:** `box-shadow: 0 0 0 2px rgba(26,111,181,.30)` — semitransparente, funciona sobre cualquier fondo. **Nunca `outline: none`** sin reemplazo.
- **Disabled:** `opacity: 0.4 + cursor: not-allowed`, no se baja el contraste con color.

### Motion
Animaciones **funcionales, no decorativas**. Todo respeta `prefers-reduced-motion: reduce`.

| Escala | Duración | Uso |
|---|---|---|
| Micro | 100ms ease-out | Hover, toggles, scale en press |
| Short | 150ms ease-out | Tooltips, chips activos |
| Medium | 200ms ease-in-out | Dropdowns, color de fondo |
| Long | 300ms ease-in-out | Modales, drawers |
| Chart | 400ms ease-out | Animación inicial del gráfico |
| Skeleton | 1400ms ∞ ease-in-out | Loading shimmer |

Sin bounces, sin springs, sin elastic — todo `ease-out` o `ease-in-out`.

### Transparencia y blur
- **Overlays de modal:** `rgba(0,0,0,.5)` sobre toda la pantalla. Sin blur.
- **Focus rings:** rgba semitransparente para funcionar sobre cualquier superficie.
- No usamos backdrop-filter ni glassmorphism — choca con la filosofía flat-structured.

### Cards (la unidad más reutilizada)
Borde 1px, radius 12px (`radius-lg`), Elevation 0–1. En hover suben a Elevation 1 con `border-em`. La card de **carta** específica usa una imagen + gradiente tonal arriba (110px alto) y un cuerpo de 10px de padding con nombre, set, badge de condición, precio mono y tendencia %.

### Layout
- Web: 12 columnas, gutter 16–24px, max content 1280px, max text 720px.
- Mobile: 4 columnas, gutter 12–16px, touch targets ≥44×44px.
- Sidebar fija 220px (panel de usuario). Topbar 48px (sticky, z-index 100). Bottom nav 56px en app (4 tabs, nunca se oculta en scroll).
- Mobile-first: el 80% del uso es en mobile (eventos, torneos en vivo).

---

## Iconografía

**Sistema:** [**Phosphor Icons**](https://phosphoricons.com/) — trazo `1.8px` consistente, estilo `regular` por defecto. CDN: `https://unpkg.com/@phosphor-icons/web@2.x`. El proyecto referencia el sprite SVG vía CDN; no hay assets propios de icon.

> **Sustitución flagueada:** no hay paquete de iconos personalizado en el repo source. Phosphor regular es la elección oficial del design system (especificada en `MULLIGAN.md` §9). Si en producción se quiere migrar a un set custom o licencia paga, hay que reemplazar los iconos en `assets/icons/` y actualizar las referencias.

### Tamaños
- `16px` — inline en texto, badges, labels.
- `20px` — controles de UI, inputs con icono.
- `24px` — botones con icono, navegación.
- `32px` — ilustrativos en empty states (color `text-muted`).

### Map de iconos del sistema
| Contexto | Phosphor |
|---|---|
| Búsqueda | `MagnifyingGlass` |
| Filtros | `Funnel` |
| Comprar | `ShoppingCart` |
| Vender / Listing | `Tag` |
| Watchlist | `Heart` |
| Notificaciones | `Bell` |
| Perfil | `User` |
| Verificado | `SealCheck` |
| Precio ↑ | `TrendUp` |
| Precio ↓ | `TrendDown` |
| Envío | `Package` |
| Grading | `Certificate` |
| Cámara / Scan | `Camera` |
| Editar | `PencilSimple` |
| Eliminar | `Trash` |
| Configuración | `GearSix` |
| Cerrar | `X` |
| Volver | `ArrowLeft` |
| Expandir | `CaretDown` |

### Reglas
- **Color:** siempre `currentColor`. Nunca hex hardcoded — el icono hereda del contexto.
- **Sin emoji** en UI core (sí permitidos en push de campaña, redes y blog).
- **Sin unicode** como iconos de UI (excepción: `↑ ↓` para tendencia de precio, siempre acompañados de signo y color).
- **Sin SVGs custom** dibujados ad-hoc; si falta algo, se solicita el icono Phosphor más cercano o se incorpora al set oficial via diseño.
- **Logo:** la marca Mulligan se compone de un wordmark "Mulligan" + un mark cuadrado azul de 28×28px con radius 6px (placeholder generado en `assets/logo/`; reemplazar con asset oficial).

---

## Índice — manifiesto del proyecto

```
.
├── README.md                  ← este archivo
├── ARCHITECTURE.md            ← cómo extender tokens / componentes / patrones
├── ACCESSIBILITY.md           ← WCAG 2.2 AA + consideraciones 3.0 / APCA
├── SKILL.md                   ← cargable como Claude Code skill
├── colors_and_type.css        ← tokens CSS (light + dark) + clases tipográficas
├── assets/
│   ├── source/                ← materiales originales del repo source (mind-map, infografia)
│   ├── logo/                  ← logo Mulligan (svg + png)
│   └── icons/                 ← refs a Phosphor (vía CDN, no copy local)
├── preview/                   ← cards 700×N px que pueblan la Design System tab
│   ├── colors-*.html          (5 ramps + light/dark semantic)
│   ├── type-*.html            (display/headings, body/label/caption, mono/price)
│   ├── spacing-*.html         (scale, radius, elevation, tonal shells, mobile sizing)
│   ├── component-*.html       (button, badge, chip, input, card, modal,
│   │                          bottom-sheet, toasts, skeletons, loaders, scan,
│   │                          tabs/breadcrumb, avatar/empty, notifications)
│   ├── a11y-*.html            (contrast, focus rings, dual encoding, hit targets)
│   └── brand-*.html           (logo, iconography, voice & anti-patrones)
└── ui_kits/
    ├── tradeit-app/           ← UI kit mobile (Android-first, MVP)
    │   ├── index.html         ← demo navegable (6 flujos + tema + shell variant)
    │   ├── README.md
    │   ├── App.jsx · data.jsx
    │   ├── components/        (PhoneFrame, TopBar, BottomNav, SearchBar,
    │   │                       TcgCard, PriceBlock, PriceChart, ListingRow,
    │   │                       Atoms, Overlays, Toast)
    │   └── screens/           (Home, Search, CardDetail, Scan, Ops, Profile,
    │                           Onboarding, KYC, ListingWizard, PushAlert, Email)
    └── tradeit-web/           ← UI kit web companion (post-MVP)
        ├── index.html         ← landing + ficha desktop + dark toggle
        ├── README.md
        ├── App.jsx
        ├── browser-window.jsx
        ├── components/        (WebTopBar, WebFooter)
        └── screens/           (Landing, DesktopCardDetail)
```

### ¿Por dónde empezar?
1. **Para entender la marca rápido** → leer este README de principio a fin.
2. **Para extender el sistema** → leer `ARCHITECTURE.md` (cómo agregar tokens, componentes, patrones).
3. **Para usar tokens en un nuevo prototipo** → importar `colors_and_type.css`.
4. **Para ver componentes en acción** → abrir `ui_kits/tradeit-app/index.html` y togglear los 5 flujos del toolbar superior.
5. **Para profundizar en specs originales** → revisar el repo source `sanmartineme/tradeit-tcg` (`MULLIGAN.md`, `content.md`, `PRD.md`).

---

*Mulligan Design System · v1.0 · 2026 · construido sobre las specs públicas de Tradeit TCG.*
