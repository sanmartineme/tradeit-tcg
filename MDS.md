# Mulligan Design System — MDS.md
> v1.0 · Tradeit TCG · Atomic Design · Inspirado en IBM Carbon · Light & Dark Mode · Web + App Mobile (Android-first)

**Producto:** Tradeit TCG — app mobile (Android-first, React Native) y companion web para la comunidad de Trading Card Games hispanohablante.
**MVP scope:** Pokémon TCG. Otros TCG (Magic, Yu-Gi-Oh!, One Piece, Lorcana) entran en fases posteriores.

Tradeit TCG es **dos productos en uno**: un marketplace P2P de cartas y un app de inversión/analytics tipo fintech. La promesa es **"los datos que tu colección merece"**: gráficos históricos, promedios 30/60/90 días, volatilidad y tendencia — con la misma calidad de datos que un trader bursátil tiene de un activo financiero.

---

## Índice

1. [Principios de Diseño](#1-principios-de-diseño)
2. [Fundamentos de Contenido](#2-fundamentos-de-contenido)
3. [Paleta de Colores](#3-paleta-de-colores)
4. [Tokens CSS](#4-tokens-css)
5. [Tipografía](#5-tipografía)
6. [Espaciado](#6-espaciado)
7. [Border Radius](#7-border-radius)
8. [Elevación](#8-elevación)
9. [Motion](#9-motion)
10. [Grid y Layout](#10-grid-y-layout)
11. [Iconografía](#11-iconografía)
12. [Atomic Design — Componentes](#12-atomic-design--componentes)
    - [Átomos](#átomos)
    - [Moléculas](#moléculas)
    - [Organismos](#organismos)
    - [Templates](#templates)
13. [Patrones](#13-patrones)
    - [Light Mode](#light-mode)
    - [Dark Mode](#dark-mode)
    - [Responsive](#responsive)
    - [Accesibilidad](#accesibilidad)
    - [Contenido](#contenido)
14. [Arquitectura del Sistema](#14-arquitectura-del-sistema)

---

## 1. Principios de Diseño

| # | Principio | Descripción |
|---|---|---|
| 01 | **Confianza primero** | Cada decisión visual transmite seguridad y profesionalismo. El usuario opera con activos de valor. Si algo se ve informal o impreciso, no pertenece a la plataforma. |
| 02 | **Densidad inteligente** | Mostrar múltiples atributos de una carta sin saturar. Jerarquía visual clara. La información debe estar disponible sin ser abrumadora. |
| 03 | **Coherencia sistémica** | Los mismos tokens, componentes y patrones funcionan en web y app. Sin excepciones. Un componente diseñado una vez funciona en todos los contextos. |
| 04 | **Accesibilidad base** | Contraste mínimo AA (4.5:1 texto, 3:1 UI). Focus rings visibles. Semántica HTML correcta. La accesibilidad es un requisito base, no un añadido posterior. |
| 05 | **Flat & estructurado** | Sin gradientes decorativos. Elevación comunicada con bordes y sombras sutiles, no con fondos saturados. La estructura surge de la organización del contenido. |

**Filosofía: Carbon, no Material.** Mulligan es flat y estructurado. Sin gradientes decorativos. La elevación se comunica con bordes 1px + sombras sutiles, nunca con fondos saturados o glow. La estructura emerge del contenido bien organizado, no de adornos visuales.

---

## 2. Fundamentos de Contenido

### 2.1 Voz (constante)

La voz de Tradeit TCG es **una sola y no cambia**:
- **Informada** — sabemos del juego y del mercado.
- **Directa** — vamos al punto en una frase.
- **Respetuosa con el hobby** — el coleccionismo es una pasión, no una excentricidad.
- **Neutral en lo financiero** — informamos, no recomendamos.
- **En español neutro de LatAm** — tuteo transversal (`tú`). Sin "vos" ni "usted".

### 2.2 Tono (variable según contexto)

| Contexto | Tono | Ejemplo |
|---|---|---|
| Onboarding y celebración | Cálido, entusiasta sin gritar | "Bienvenido. Empecemos por las cartas que te interesan." |
| Búsqueda y exploración | Neutro y útil | "23 resultados para 'Charizard'." |
| Datos y precios | Sobrio, casi periodístico | "Precio promedio 30 días: USD 412 (+3,8%)." |
| Errores y bloqueos | Honesto y resolutivo | "No pudimos cargar el precio. Reintentar." |
| Riesgo o sensible | Serio, sin alarmar | "Para publicar productos necesitamos verificar tu identidad." |

> **Regla:** Si dudas entre dos tonos, baja un nivel de intensidad. La marca prefiere sobrio a efusivo.

### 2.3 Léxico TCG (en inglés — así lo usa la comunidad)

*single, sealed, graded, booster, ETB, holo, reverse holo, full art, alt art, secret rare, NM/LP/MP/HP/DMG, PSA 10, BGS 9.5, slab, reprint, errata, set, block, rotation.*

### 2.4 Léxico fintech (en español sobrio)

*tendencia, volatilidad, precio promedio 30/60/90 días, variación, histórico, watchlist (en inglés), alerta de precio.*

### 2.5 Reglas numéricas

- **Precios:** `USD 412,50` — coma decimal LatAm, punto miles (`12.450`). Signo menos tipográfico (`−`, U+2212, no `-`).
- **Porcentajes:** 1 decimal, signo visible → `+3,8%`, `−1,2%`.
- **Períodos:** `30d`, `60d`, `90d`, `1m`, `3m`, `9m`, `12m`. Fecha corta `16 may`. Hora 24h con `h`.
- **Timestamps:** relativos primero ("hace 12 min"), absolutos en tooltip.

### 2.6 Casing y puntuación

- **Sentence case** en títulos, botones y labels. Sin punto final en botones o títulos.
- Con punto final en frases descriptivas completas.

### 2.7 Ejemplos canónicos de copy

```
Botón:      "Agregar a watchlist"     ← no "Sumar a mi lista"
Empty:      "Aún no sigues ninguna carta."
Push title: "Charizard ex sube 8,2%"
Push body:  "Pasó de USD 380 a USD 412 en las últimas 24h."
Error:      "No pudimos cargar el precio. Reintentar."
Éxito:      "Carta agregada a tu watchlist."
Disclaimer: "Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra."
```

### 2.8 Anti-patrones de copy (prohibidos)

- `"comprá antes de que suba"`, `"ganancia garantizada"`, `"predicción"`, `"to the moon"` — riesgo regulatorio.
- `"Oops"`, `"Ups"` en errores — explicar qué pasó y qué hacer.
- Emoji decorativo en UI core (permitidos en push de campaña y redes).
- Signos de exclamación múltiples o jerga corporativa ("sinergia", "stakeholder").
- Personalizar la app: "Buscando…" no "Estoy buscando…".
- `--warning` (#E69A20) como texto de cuerpo — no cumple contraste AA. Usar `--amber-60` (#9B6510).
- "Click aquí", "Enviar", "OK", "Continuar" (sin contexto), "Procesar".

---

## 3. Paleta de Colores

### 3.1 Blue — Primario interactivo

| Token | Hex | Uso |
|---|---|---|
| `blue-10` | `#EBF2FB` | Fondos hover, backgrounds de badges info |
| `blue-20` | `#C5DAEF` | Borders info, fills sutiles |
| `blue-40` | `#6AAAD8` | Íconos secundarios, **interactive en dark mode** |
| `blue-60` | `#1A6FB5` | **Color primario de acción.** Botones, links, focus rings, active tabs |
| `blue-80` | `#0D4A80` | Hover de botón primario, texto sobre blue-10 |
| `blue-100` | `#042D55` | Texto sobre blue-20, estados pressed |

### 3.2 Gray — Neutro estructural (warm)

| Token | Hex | Uso |
|---|---|---|
| `gray-0`  | `#F8F8F6` | **Fondo de página (light mode).** Ligeramente tintado para reducir fatiga. |
| `gray-10` | `#F0EFEC` | Background secundario, hover en filas, filter bar, skeleton |
| `gray-20` | `#D6D4CE` | **Borders por defecto**, divisores |
| `gray-30` | `#B2B0AB` | Borders énfasis/hover, placeholders |
| `gray-40` | `#9B9892` | Texto deshabilitado, metadatos, placeholders |
| `gray-60` | `#5C5A56` | **Texto secundario**, labels, descripciones |
| `gray-80` | `#2E2D2A` | Texto primario en dark surfaces, border dark mode |
| `gray-100`| `#131210` | **Background dark mode**, texto primario en light |

### 3.3 Teal — Éxito / Confirmación / Precio positivo

| Token | Hex | Uso |
|---|---|---|
| `teal-10` | `#E0F4EF` | Background badge éxito |
| `teal-20` | `#9FE1CB` | Border éxito |
| `teal-40` | `#2DA67E` | **Íconos éxito, indicadores de precio positivo** |
| `teal-60` | `#0F6E56` | Texto éxito sobre teal-10 |
| `teal-80` | `#054538` | Hover estados success |

### 3.4 Amber — Advertencia / Grading / Precio highlight

| Token | Hex | Uso |
|---|---|---|
| `amber-10` | `#FAF0D8` | Background badge advertencia |
| `amber-20` | `#F5D68C` | Border advertencia |
| `amber-40` | `#E69A20` | **Íconos advertencia, highlights de precio** (no usar como texto body) |
| `amber-60` | `#9B6510` | Texto sobre amber-10, texto warning con contraste AA |
| `amber-80` | `#5E3B06` | Hover estados warning |

### 3.5 Red — Error / Peligro / Precio negativo

| Token | Hex | Uso |
|---|---|---|
| `red-10` | `#FCEAEA` | Background badge error |
| `red-20` | `#F5B8B8` | Border error |
| `red-40` | `#D94646` | **Botón destructivo, íconos error, precio a la baja** |
| `red-60` | `#A02C2C` | Texto error sobre red-10 |
| `red-80` | `#661B1B` | Hover estados danger |

### 3.6 Backgrounds de carta (gradientes tonales — único uso permitido de gradiente)

- **Single Card:** `blue-10 → blue-20` (#EBF2FB → #C5DAEF)
- **Graded:** `amber-10 → amber-20` (#FAF0D8 → #F5D68C)
- **Sealed:** `gray-10 → gray-20` (#F0EFEC → #D6D4CE)

> Las imágenes de carta son el único elemento ilustrativo. Vienen de la Pokémon TCG API. **Nunca se invierten en dark mode.**

---

## 4. Tokens CSS

### 4.1 Tokens semánticos — Light Mode (`:root`)

```css
/* ── LIGHT MODE (default en :root) ─────────────────── */
--bg-page:            #F8F8F6;   /* gray-0 — NUNCA blanco puro como fondo de página */
--bg-primary:         #FFFFFF;   /* cards, inputs, nav */
--bg-secondary:       #F0EFEC;   /* hover states, filter bar, tags */
--text-primary:       #131210;   /* gray-100 */
--text-secondary:     #5C5A56;   /* gray-60 */
--text-muted:         #9B9892;   /* gray-40 — solo para metadata no esencial */
--border:             #D6D4CE;   /* gray-20 */
--border-em:          #B2B0AB;   /* gray-30 */
--interactive:        #1A6FB5;   /* blue-60 */
--interactive-hover:  #0D4A80;   /* blue-80 */
--on-interactive:     #FFFFFF;
--on-danger:          #FFFFFF;
--inverse-surface:    #131210;   /* para CTAs que "destacan" (ej. scan strip) */
--on-inverse-surface: #F0EFEC;
--success:            #2DA67E;   /* teal-40 */
--warning:            #E69A20;   /* amber-40 */
--danger:             #D94646;   /* red-40 */

/* Elevation shadows (light) */
--elev-1: 0 1px 4px rgba(0,0,0,.06);
--elev-2: 0 4px 16px rgba(0,0,0,.08);
--elev-3: 0 8px 32px rgba(0,0,0,.12);
--focus-ring: 0 0 0 2px rgba(26,111,181,.30);
```

### 4.2 Tokens semánticos — Dark Mode (`.dark`)

```css
/* ── DARK MODE (.dark en <html> o cualquier ancestro) ── */
.dark {
  --bg-page:            #131210;   /* gray-100 */
  --bg-primary:         #1E1D1A;
  --bg-secondary:       #252421;
  --text-primary:       #F0EFEC;   /* gray-10 */
  --text-secondary:     #9B9892;   /* gray-40 */
  --text-muted:         #5C5A56;   /* gray-60 */
  --border:             #2E2D2A;   /* gray-80 */
  --border-em:          #3D3C38;
  --interactive:        #6AAAD8;   /* blue-40 — blue-60 no cumple AA sobre oscuro */
  --interactive-hover:  #C5DAEF;   /* blue-20 */
  --on-interactive:     #131210;   /* texto oscuro sobre botón celeste */
  --on-danger:          #FFFFFF;
  --inverse-surface:    #252421;
  --on-inverse-surface: #F0EFEC;
  /* success / warning / danger sin cambio en dark */

  /* Sombras reducidas al 50% en dark */
  --elev-1: 0 1px 4px rgba(0,0,0,.30);
  --elev-2: 0 4px 16px rgba(0,0,0,.40);
  --elev-3: 0 8px 32px rgba(0,0,0,.60);
  --focus-ring: 0 0 0 2px rgba(106,170,216,.35);
}

/* Toggle via JavaScript */
/* document.documentElement.classList.toggle('dark');
   localStorage.setItem('theme', isDark ? 'dark' : 'light'); */
```

### 4.3 Tokens de espaciado, radio y layout

```css
:root {
  /* Spacing — base 4px, siempre múltiplos */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Border radius */
  --radius-xs:   2px;    /* chips de texto, rarity tags */
  --radius-sm:   4px;    /* inputs, selects */
  --radius-md:   8px;    /* botones, tooltips */
  --radius-lg:   12px;   /* cards, card art */
  --radius-xl:   16px;   /* modales, bottom sheets */
  --radius-full: 999px;  /* badges, pills, avatares */

  /* Layout */
  --max-width-content: 1280px;
  --max-width-text:     720px;
  --max-width-card:     400px;
  --sidebar-width:      220px;
  --topbar-height:       48px;
  --bottomnav-height:    56px;
}
```

### 4.4 Tokens de componente — referencia rápida

```css
/* Borders */
--border-default:   1px solid var(--border);
--border-emphasis:  1px solid var(--border-em);
--border-focus:     2px solid var(--interactive);
--border-error:     1px solid var(--danger);
--border-success:   1px solid var(--success);

/* Input */
--input-height-sm:  32px;
--input-height-md:  40px;
--input-height-lg:  48px;
--input-padding:    0 16px;
--input-radius:     4px;    /* radius-sm */

/* Button */
--btn-height-sm:  32px;
--btn-height-md:  40px;
--btn-height-lg:  48px;
--btn-radius:     8px;      /* radius-md */

/* Card */
--card-radius:   12px;      /* radius-lg */
--card-padding:  20px;
--card-border:   var(--border-default);

/* Z-index */
--z-base:     0;
--z-dropdown: 100;
--z-sticky:   200;
--z-overlay:  300;
--z-modal:    400;
--z-toast:    500;
```

---

## 5. Tipografía

**Familia principal:** IBM Plex Sans — pesos 300, 400, 500 únicamente. **Nunca 600 ni 700.** La jerarquía se logra con tamaño y color.
**Monospace (solo precios y datos numéricos):** IBM Plex Mono — pesos 400, 500.

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Escala modular (ratio 1.25)

| Clase | Size | Weight | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|
| `.t-display` | 48px | 300 | 1.1 | -0.03em | Heroes, landing page |
| `.t-h1` | 32px | 300–400 | 1.2 | -0.02em | Título de página principal |
| `.t-h2` | 24px | 500 | 1.3 | — | Sección principal, panel header |
| `.t-h3` | 20px | 500 | 1.4 | — | Nombre de carta en ficha |
| `.t-h4` | 16px | 500 | 1.5 | — | Subtítulos de sección |
| `.t-body` | 16px | 400 | 1.6 | — | Texto de párrafo |
| `.t-body-sm` | 14px | 400 | 1.6 | — | Descripciones, helpers |
| `.t-label` | 12px | 500 | 1.4 | 0.08em | Etiquetas uppercase |
| `.t-caption` | 11px | 400 | 1.4 | — | Timestamps, metadatos |
| `.t-mono` / `.t-price` | 14–36px | 400 | 1.2 | — | Precios en IBM Plex Mono |

### Reglas tipográficas

- **Peso máximo: 500.** La jerarquía se logra con tamaño y color, nunca con bold 700.
- **Precio siempre en monospace** con `font-variant-numeric: tabular-nums` — garantiza alineación de dígitos.
- **Labels:** `font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em`.
- **Truncación en cards:** `text-overflow: ellipsis; white-space: nowrap; overflow: hidden`.
- **Nunca usar placeholder como sustituto del label** — desaparece al escribir.

### Clases utilitarias de color de texto

```css
.fg-primary    { color: var(--text-primary); }
.fg-secondary  { color: var(--text-secondary); }
.fg-muted      { color: var(--text-muted); }
.fg-interactive { color: var(--interactive); }
.fg-success    { color: var(--success); }
.fg-warning    { color: var(--warning); }
.fg-danger     { color: var(--danger); }
```

### Contrastes de texto (WCAG)

| Par | Ratio | Nivel |
|---|---|---|
| text-primary (#131210) sobre bg-primary (#FFFFFF) | 17.5:1 | AAA |
| text-primary (#131210) sobre bg-page (#F8F8F6) | 16.1:1 | AAA |
| text-secondary (#5C5A56) sobre bg-primary | 7.1:1 | AAA |
| text-muted (#9B9892) sobre bg-primary | 3.5:1 | AA (solo texto grande ≥18px o ≥14px bold) |
| interactive (#1A6FB5) sobre bg-primary | 4.6:1 | AA |
| text-primary dark (#F0EFEC) sobre bg-page dark (#131210) | 16.3:1 | AAA |
| interactive dark (#6AAAD8) sobre bg-page dark | 8.2:1 | AAA |

> **`--text-muted` es solo para metadata no esencial** — timestamps, captions, secondary labels. Nunca para texto accionable.

---

## 6. Espaciado

**Base:** 4px. Todos los valores son múltiplos de 4.

| Token | px | rem | Uso típico |
|---|---|---|---|
| `space-1` | 4px | 0.25rem | Gap interno mínimo |
| `space-2` | 8px | 0.5rem | Gap entre ícono y texto |
| `space-3` | 12px | 0.75rem | Padding en badges, chips |
| `space-4` | 16px | 1rem | Padding en inputs, gap en rows |
| `space-5` | 20px | 1.25rem | Padding de cards compactas |
| `space-6` | 24px | 1.5rem | Padding de cards estándar |
| `space-8` | 32px | 2rem | Separación entre secciones |
| `space-10` | 40px | 2.5rem | Margin entre bloques principales |
| `space-12` | 48px | 3rem | Padding de secciones en web |
| `space-16` | 64px | 4rem | Separadores de página |

---

## 7. Border Radius

| Token | Valor | Uso |
|---|---|---|
| `radius-xs` | 2px | Chips de texto, rarity tags |
| `radius-sm` | 4px | Inputs, selects, code snippets |
| `radius-md` | 8px | Botones, tooltips, dropdowns |
| `radius-lg` | 12px | Cards de carta, modales pequeños |
| `radius-xl` | 16px | Modales principales, panels |
| `radius-full` | 999px | Badges, pills, avatares |

---

## 8. Elevación

| Nivel | CSS | Uso |
|---|---|---|
| **Elevation 0** | `border: 1px solid var(--border)` | Cards planas, inputs, tablas |
| **Elevation 1** | `border + box-shadow: 0 1px 4px rgba(0,0,0,.06)` | Cards de carta en grid |
| **Elevation 2** | `border + box-shadow: 0 4px 16px rgba(0,0,0,.08)` | Dropdowns, popovers, tooltips |
| **Elevation 3** | `border + box-shadow: 0 8px 32px rgba(0,0,0,.12)` | Modales, drawers, sidebars |

> **Dark Mode:** reducir opacidad de shadows al 50%. La elevación se refuerza con fondos progresivamente más claros (`bg-page` → `bg-primary` → `bg-secondary`). Sombras **siempre en negro con opacidad**, nunca en color.

### Estados interactivos

- **Hover:** background o border shift hacia variante más oscura (`blue-60` → `blue-80`). No usar `opacity` para hover.
- **Press:** `transform: scale(0.97)` en 100ms ease-out.
- **Focus:** `box-shadow: 0 0 0 2px rgba(26,111,181,.30)` — semitransparente. **Nunca `outline: none` sin reemplazo.**
- **Disabled:** `opacity: 0.4; cursor: not-allowed`.

---

## 9. Motion

### Principios
- Animaciones **funcionales**, no decorativas.
- Respetar `prefers-reduced-motion: reduce` — todas las animaciones son opcionales.
- Sin bounces, sin springs, sin elastic — todo `ease-out` o `ease-in-out`.
- Sin parallax, sin auto-play, sin flash (WCAG 2.3.1).

### Escala de tiempos

| Tipo | Duración | Easing | Uso |
|---|---|---|---|
| **Micro** | 100ms | ease-out | Hover states, toggles, scale en active |
| **Short** | 150ms | ease-out | Tooltips, badges, chips activos |
| **Medium** | 200ms | ease-in-out | Dropdowns, notificaciones, color de fondo |
| **Long** | 300ms | ease-in-out | Modales overlay, drawers, sidebars |
| **Chart** | 400ms | ease-out | Animación inicial del gráfico de precio |
| **Skeleton** | 1400ms ∞ | ease-in-out | Loading shimmer en cards y contenido |
| **Page Entry** | 500ms | ease | Entrada de página, staggered reveals |

### Código de referencia

```css
@media (prefers-reduced-motion: no-preference) {

  /* Micro — hover + active */
  .btn { transition: background-color 100ms ease-out, transform 100ms ease-out; }
  .btn:active { transform: scale(0.97); }

  /* Short — tooltip */
  .tooltip { opacity: 0; transform: translateY(4px);
    transition: opacity 150ms ease-out, transform 150ms ease-out; }
  .tooltip-trigger:hover .tooltip { opacity: 1; transform: translateY(0); }

  /* Medium — dropdown */
  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .dropdown { animation: dropIn 200ms ease-in-out both; }

  /* Long — modal */
  @keyframes modalIn {
    from { opacity: 0; transform: scale(.96) translateY(12px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  .modal { animation: modalIn 300ms ease-in-out both; }

  /* Chart — path draw */
  @keyframes chartDraw {
    from { stroke-dashoffset: 400; }
    to   { stroke-dashoffset: 0; }
  }
  .chart-line { stroke-dasharray: 400; animation: chartDraw 400ms ease-out; }

  /* Skeleton shimmer */
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .skeleton {
    background: linear-gradient(90deg,
      var(--bg-secondary) 25%, var(--bg-page) 50%, var(--bg-secondary) 75%);
    background-size: 1200px;
    animation: shimmer 1.4s ease-in-out infinite;
  }

  /* Staggered page entry */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .stagger > *:nth-child(1) { animation: fadeUp 500ms ease both 0ms; }
  .stagger > *:nth-child(2) { animation: fadeUp 500ms ease both 80ms; }
  .stagger > *:nth-child(3) { animation: fadeUp 500ms ease both 160ms; }
  .stagger > *:nth-child(4) { animation: fadeUp 500ms ease both 240ms; }
}
```

---

## 10. Grid y Layout

### Breakpoints Web

| Breakpoint | Rango | Columnas | Gutter | Margin |
|---|---|---|---|---|
| `xs` | < 640px | 4 | 12px | 16px |
| `sm` | 640–1024px | 8 | 16px | 24px |
| `lg` | 1024–1280px | 12 | 16px | 32px |
| `xl` | > 1280px | 12 | 24px | auto (max 1440px) |

### Breakpoints App (Mobile — 80% del uso)

| Breakpoint | Rango | Columnas | Gutter | Margin |
|---|---|---|---|---|
| Mobile S | 320–360px | 4 | 12px | 16px |
| Mobile M | 360–412px | 4 | 16px | 16px |
| Mobile L | 412–430px | 4 | 16px | 16px |
| Tablet | 428–768px | 8 | 16px | 24px |

> **Layouts validados a:** 320, 360, 390, 412, 430 px. Nada por debajo de 320px está en scope.

### Anchos máximos de contenido

```
max-width-content:  1280px  — contenido principal
max-width-text:      720px  — columnas de texto
max-width-card:      400px  — cards individuales
sidebar-width:       220px  — sidebar de panel de usuario
topbar-height:        48px  — topbar web (sticky, z:100)
bottomnav-height:     56px  — bottom nav app (siempre visible, nunca se oculta en scroll)
```

---

## 11. Iconografía

**Sistema:** [Phosphor Icons](https://phosphoricons.com/) — trazo `1.8px` consistente, estilo `regular`.

```html
<!-- CDN -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.x/src/regular/style.css">
<!-- Uso -->
<i class="ph ph-magnifying-glass"></i>
```

### Tamaños estándar

| px | Uso |
|---|---|
| 16px | Inline en texto, badges, labels |
| 20px | Controles de UI, inputs con ícono |
| 24px | Botones con ícono, navegación |
| 32px | Ilustrativos, empty states (color: text-muted) |

### Map de íconos del sistema

| Contexto | Ícono Phosphor |
|---|---|
| Búsqueda | `MagnifyingGlass` (`ph-magnifying-glass`) |
| Filtros | `Funnel` (`ph-funnel`) |
| Comprar | `ShoppingCart` (`ph-shopping-cart`) |
| Vender / Listing | `Tag` (`ph-tag`) |
| Watchlist | `Heart` (`ph-heart`) |
| Notificaciones | `Bell` (`ph-bell`) |
| Perfil | `User` (`ph-user`) |
| Verificado | `SealCheck` (`ph-seal-check`) |
| Precio ↑ | `TrendUp` (`ph-trend-up`) |
| Precio ↓ | `TrendDown` (`ph-trend-down`) |
| Envío | `Package` (`ph-package`) |
| Grading | `Certificate` (`ph-certificate`) |
| Cámara / Scan | `Camera` (`ph-camera`) |
| Editar | `PencilSimple` (`ph-pencil-simple`) |
| Eliminar | `Trash` (`ph-trash`) |
| Configuración | `GearSix` (`ph-gear-six`) |
| Cerrar | `X` (`ph-x`) |
| Volver | `ArrowLeft` (`ph-arrow-left`) |
| Expandir | `CaretDown` (`ph-caret-down`) |

### Reglas de uso

- **Color:** siempre `currentColor`. Nunca hex hardcodeado — el ícono hereda del contexto.
- **Sin emoji** en UI core. Sin unicode como ícono de UI (excepción: `↑ ↓` para tendencia, siempre + signo + color).
- **Sin SVGs custom** ad-hoc — usar Phosphor regular como fuente única.
- **Logo:** wordmark "Mulligan" + mark cuadrado azul 28×28px con radius 6px.
- Íconos decorativos: `aria-hidden="true"`. Íconos de acción: `aria-label` descriptivo.

---

## 12. Atomic Design — Componentes

---

### Átomos

Las unidades más pequeñas del sistema. Cada átomo es funcional por sí mismo.

#### Button

**Variantes:** Primary · Secondary · Ghost · Danger · Disabled
**Tamaños:** Small (h:32px) · Default (h:40px) · Large (h:48px)

```css
/* Primary */
background: var(--interactive); color: #fff; border-radius: var(--radius-md);

/* Secondary */
background: transparent; border: 1px solid var(--border); color: var(--text-primary);

/* Ghost */
background: transparent; color: var(--interactive); border: none;

/* Danger */
background: var(--danger); color: #fff;

/* Disabled — aplica a todas las variantes */
opacity: 0.4; cursor: not-allowed;

/* Estados */
transition: background-color 100ms ease-out, transform 100ms ease-out;
:hover  → background hacia variante más oscura
:active → transform: scale(0.97)
:focus-visible → box-shadow: 0 0 0 2px rgba(26,111,181,.3)
```

**✓ Hacer:** Un único botón Primary visible por vista. Acciones destructivas con variante Danger + confirmación modal.
**✗ Evitar:** Múltiples botones Primary en paralelo. Deshabilitar sin indicar el motivo.

---

#### Badges

`height: 20px; padding: 0 8px; border-radius: 999px; font-size: 11px; font-weight: 500`

| Variante | Background | Texto | Uso |
|---|---|---|---|
| Info / NM | `blue-10` | `blue-80` | Near Mint, estado informativo |
| Success | `teal-10` | `teal-60` | Verificado, Mint |
| Warning / LP | `amber-10` | `amber-60` | Lightly Played, advertencia |
| Danger / HP | `red-10` | `red-60` | Heavily Played, error |
| Neutral | `gray-10` | `gray-60` | Borrador, estado neutro |
| Grading (PSA/CGC) | `gray-100` | `gray-10` | **Badge oscuro sólido — exclusivo para grading certificado** |

**Condición de carta — estándar completo:**

| Condición | Abrev. | Background | Texto |
|---|---|---|---|
| Mint | M | `teal-10` | `teal-60` |
| Near Mint | NM | `blue-10` | `blue-80` |
| Lightly Played | LP | `amber-10` | `amber-60` |
| Moderately Played | MP | `amber-10` | `amber-80` |
| Heavily Played | HP | `red-10` | `red-60` |
| Damaged | D | `red-10` | `red-80` |
| Graduado PSA/CGC + Grado | — | `gray-100` | `gray-10` (sólido) |

> La condición siempre se muestra como badge visual + abreviación textual. **Nunca solo color.**

**✓ Hacer:** Sistema semántico fijo. Badge oscuro sólido exclusivo para grading.
**✗ Evitar:** Más de 2 badges simultáneos en el mismo card. No inventar colores fuera del sistema.

---

#### Chips / Filtros

`height: 28px; padding: 0 12px; border-radius: 14px; font-size: 12px; font-weight: 500`

```css
/* Inactivo */
border: 1px solid var(--border); color: var(--text-secondary); background: transparent;

/* Activo */
background: var(--interactive); color: #fff; border-color: var(--interactive);
```

**✓ Hacer:** Chips de tipo de producto mutuamente excluyentes. Siempre uno activo. Máximo 5 opciones visibles.
**✗ Evitar:** No usar chips para acciones. Solo para filtrado y selección de estado.

---

#### Inputs / Form Field

```css
height: 40px; border: 1px solid var(--border); border-radius: var(--radius-sm);
padding: 0 16px; font-size: 14px; background: var(--bg-primary); color: var(--text-primary);

/* Focus */
border-color: var(--interactive);
box-shadow: 0 0 0 2px rgba(26,111,181,.15);

/* Error */   border-color: var(--danger);
/* Success */ border-color: var(--success);
/* Disabled */ opacity: 0.4; cursor: not-allowed;
```

**Composición Form Field:** `label (12px 500 uppercase)` → `input (40px)` → `helper text (11px)`

Estados: default · success (border teal) · error (border rojo + helper rojo) · disabled (opacity 0.4)

**✓ Hacer:** Validar on blur. Helper text describe el problema específico. Label siempre visible sobre el input. `autocomplete` en campos relevantes.
**✗ Evitar:** Placeholder como sustituto del label. Validar on keypress. Mostrar todos los errores solo al submit.

---

#### Card de Carta

```
Ancho: 160px (grid web) · 100% (lista app)
border-radius: 12px; border: 1px solid var(--border);
hover: border-color var(--border-em) + Elevation 1

Estructura:
[Imagen 100% × 110px]
  background: gradiente tonal según tipo de producto
  [Arte 68×96px, border-radius: 6px] ← SIEMPRE rectángulo, NUNCA circular
  [Rarity badge — top-right]
[Cuerpo — padding 10px]
  [Nombre 13px 500 — truncado con ellipsis]
  [Set 11px text-muted — truncado]
  [Condición badge]
  [Precio monospace 13px] + [Tendencia %]
```

**✓ Hacer:** Truncar con ellipsis. Precio y tendencia siempre visibles. Arte en rectángulo 6px radius. Tendencia con color + ícono + porcentaje (doble codificación).
**✗ Evitar:** Arte circular. Omitir tendencia (mostrar "–" si no hay datos). Color de tendencia sin ícono redundante.

---

#### Avatar

| Tamaño | px | Font-size | Uso |
|---|---|---|---|
| Sm | 28px | 10px | Topbar, listas de órdenes |
| Md | 40px | 14px | Paneles, cards de vendedor |
| Lg | 56px | 18px | Páginas de perfil |

Color de fondo: asignado de forma **determinista** según hash del username. Forma: **siempre circular** (`border-radius: 50%`). Fallback con iniciales (2 chars) siempre disponible.

---

#### Skeleton Loader

```css
border-radius: 4px;
background: linear-gradient(90deg,
  var(--bg-secondary) 25%, var(--bg-page) 50%, var(--bg-secondary) 75%);
background-size: 1200px;
animation: shimmer 1.4s ease-in-out infinite;
```

Preservar exactamente las dimensiones del contenido real para evitar layout shift. No mostrar más de 3 segundos sin ofrecer estado de error con CTA de reintento.

---

### Moléculas

Grupos de átomos que funcionan juntos como una unidad con responsabilidad única.

#### Display de Precio

Composición: `label uppercase 11px 500` → `valor IBM Plex Mono` → `tendencia flecha + % + período`

| Tamaño | Font-size valor | Uso |
|---|---|---|
| Compact | 18px | Cards de resultado, listings |
| Default | 28px | Ficha de carta |
| Hero | 36px weight 300 | Dashboard de usuario |

```
Tendencia positiva: color var(--success), TrendUp icon, ↑ +12,4% · 30d
Tendencia negativa: color var(--danger), TrendDown icon, ↓ −3,1% · 7d
Referencia neutral: color var(--text-muted), sin flecha, — · —
```

**✓ Hacer:** Precio siempre en monospace con `tabular-nums`. Moneda siempre explícita (CLP/USD). Período visible (30d, 7d). Doble codificación en tendencia (color + ícono + texto).
**✗ Evitar:** Mezclar CLP y USD sin indicar cuál es local y cuál es referencia.

---

#### Notificaciones Inline

Estructura: `border-left: 3px solid [color semántico]` · `background: [color 10]` · `padding: 12px 14px`

| Variante | Border | Background | Título |
|---|---|---|---|
| Info | `blue-60` | `blue-10` | `blue-80` |
| Success | `teal-40` | `teal-10` | `teal-60` |
| Warning | `amber-40` | `amber-10` | `amber-60` |
| Error | `red-40` | `red-10` | `red-60` |

**✓ Hacer:** Estáticas, el usuario las descarta manualmente. Máximo 2 apiladas.
**✗ Evitar:** Usar error para estados informativos. El significado semántico es fijo e inamovible.

---

#### Tabs

**Variante estándar (línea):**
```css
border-bottom: 1px solid var(--border);

/* Item inactivo */
padding: 8px 16px; font-size: 14px; color: var(--text-secondary);

/* Item activo */
color: var(--interactive); font-weight: 500;
border-bottom: 2px solid var(--interactive); margin-bottom: -1px;
```

**Variante contenida (switcher):** para exactamente 2 opciones excluyentes. Background: bg-secondary con border-radius 6px, ítem activo en bg-primary + border.

**✓ Hacer:** Siempre una tab activa. Máximo 5 tabs por barra.
**✗ Evitar:** Tabs para pasos secuenciales (usar stepper). Ocultar tabs por rol sin señalarlo.

---

#### Progress Bar

```css
/* Track */
height: 4px; background: var(--bg-secondary); border-radius: 2px;

/* Fill — colores semánticos */
background: var(--interactive);  /* progreso neutro */
background: var(--success);      /* completado */
background: var(--warning);      /* en curso */
background: var(--danger);       /* error */
border-radius: 2px; transition: width 300ms ease;
```

Siempre acompañada de label de contexto y valor numérico (% o fracción x/total).

---

#### Star Rating

- **Solo lectura:** estrellas amber-40, promedio 1 decimal, conteo en paréntesis.
- **Interactivo:** solo en flujo post-compra. Hover progresivo por estrellas.
- **Con menos de 5 reseñas:** mostrar "Nuevo vendedor" en lugar del promedio.

---

### Organismos

Secciones completas de la UI compuestas por moléculas y átomos.

#### Top Navigation Bar

```
Height: 48px · position: fixed · z-index: 100 · border-bottom: 1px solid var(--border)

Layout web:
[Logo — flex inicio] [Search 320px max — flex centro] [Auth buttons + Avatar — flex fin]

Logo: logotipo texto "Mulligan" + mark cuadrado azul 28×28px, radius 6px
Search: height 32px · background bg-secondary · border-radius 4px
Avatar (autenticado): 28px circular · iniciales 2 char · reemplaza los botones de auth
```

**✓ Hacer:** Siempre sticky (position: fixed). Logo enlaza al home. Avatar reemplaza botones en estado autenticado.
**✗ Evitar:** Más de 2 acciones secundarias en el topbar. Ocultar en scroll en desktop.

---

#### Search & Filter Bar

```
Height: 48px · sticky independiente del topbar · background: bg-secondary
border-bottom: 1px solid var(--border)

Elementos:
[Input búsqueda — flex 1, max 400px] placeholder: "Busca una carta o set"
[Select "Todas las ediciones"]
[Chips de tipo: Single Card | Sellado | Graduado]
[Botón "Buscar" — al extremo derecho]
```

**✓ Hacer:** Chips mutuamente excluyentes. Búsqueda requiere acción explícita (Enter o botón). Filtros persisten durante la sesión.

---

#### Grid de Resultados

```
Layout web:
[Sidebar filtros — 240px fija | Grid 4 columnas — flex 1]

Header del grid:
[Contador "X resultados" 14px text-secondary] [Sort dropdown — derecha]

Card: 160px ancho · gap 16px entre cards
Paginación: centrada · 24 items por página
```

**✓ Hacer:** Mostrar el conteo siempre. Skeleton loaders durante carga. No resetear filtros al cambiar de página.
**✗ Evitar:** Empty state sin CTA de "Limpiar filtros" cuando el empty es causado por filtros.

---

#### Ficha de Carta + Dashboard de Precios

```
Layout web (2 columnas):
Col 8/12: [Imagen oficial 120×168px] + [Datos oficiales API] + [Chart controles + gráfico] + [Listings activos]
Col 4/12 sticky: [Price cells 2×2] + [CTA principal] + [Info del vendedor]

Datos API (solo lectura): imagen, nombre, número, set, rareza, tipo, fecha
Price cells: Precio promedio · Ref. TCGPlayer USD · Mínimo activo · Máximo activo
Gráfico: controles 1m / 3m / 9m / 12m · área chart · tooltip interactivo
```

**✓ Hacer:** Datos de imagen y rareza solo desde la API (source of truth). CTA sticky en columna lateral. Gráfico con al menos 3 data points.
**✗ Evitar:** Gráfico con menos de 3 transacciones sin indicar "Datos insuficientes". Duplicar el CTA en la columna principal.

---

#### Panel de Usuario (Comprador / Vendedor)

```
Layout:
[Header: Avatar Lg + nombre + badge verificado]
[Stats 3 columnas: Total $ | Operaciones | Listings/Estado]
[Listado de órdenes recientes con estado + precio + badge]
```

**Estados de orden:**
- Pago pendiente · Pago confirmado (blue) · En camino (amber) · Entregado (teal) · En disputa (red) · Cancelado (gray)

**✓ Hacer:** Mostrar monto neto (sin comisiones brutas). Dot de estado mismo color que el badge (accesibilidad cromática).
**✗ Evitar:** Paginar las órdenes en el resumen del panel. Mostrar monto bruto.

---

#### Modal

```
Overlay: rgba(0,0,0,.5) · z-index: 400
Container: max-width 480px (sm) / 640px (md) / 800px (lg)
border-radius: var(--radius-xl) · Elevation 3
background: var(--bg-primary)

Estructura:
[Header: título H3 + botón cerrar ✕]
[Body: contenido + resumen del objeto afectado]
[Footer: acciones alineadas a la derecha — Secundario | Primario]

Animación: overlay opacity 300ms + modal scale(.96)+translateY 300ms
```

**✓ Hacer:** Acción primaria siempre a la derecha. Incluir resumen del objeto dentro del modal. Cerrar con Esc + click en overlay.
**✗ Evitar:** Apilar modales. Usar modal para flujos de más de 3 pasos (usar stepper dentro del modal).

---

#### Bottom Navigation (App)

```
Height: 56px + safe area · position: fixed · bottom: 0
border-top: 1px solid var(--border)

4 tabs: Inicio | Buscar | Mis compras/ventas | Perfil
Cada tab: ícono 24px + label 9px · touch target: 44×44px mínimo
Activo: color var(--interactive) en ícono y label
```

**✓ Hacer:** Exactamente 4 tabs. **Siempre visible, nunca se oculta en scroll.**
**✗ Evitar:** Badges de notificación en más de 2 tabs simultáneamente.

---

#### Empty State

```
Estructura centrada:
[Ícono 48px — neutral, color text-muted]
[Título H4 — text-primary]
[Descripción 13px — text-secondary, max 320px, line-height 1.6]
[CTA botón — cuando aplica]
```

**✓ Hacer:** Siempre incluir CTA que resuelva el estado. Ícono relacionado con el contexto.
**✗ Evitar:** Empty state genérico sin contexto. CTA destructivo en empty state.

---

### Templates

Layouts de página completos que orquestan organismos.

#### Template: Búsqueda y Resultados

```
[Top Nav — 48px sticky z:100]
[Search & Filter Bar — 48px sticky z:90]
[Content — padding 32px]
  [Sidebar filtros — 240px fija | Grid resultados — flex 1 (4 col)]
[Pagination — centrada]

Mobile:
[Top Nav reducida]
[Chips de filtro — scroll horizontal]
[Grid — 2 columnas sin sidebar]
[Infinite scroll o "Cargar más"]
```

---

#### Template: Ficha de Carta

```
[Top Nav]
[Breadcrumb — padding 16px]
[Content — 12 col]
  [Col 8/12: Imagen + Datos API + Chart + Listings]
  [Col 4/12 sticky: CTA compra + Info vendedor]

Mobile:
[Top Nav reducida]
[Single column]
[CTA sticky en bottom bar 56px + safe area]
Orden: imagen → datos → precios → gráfico → listings → vendedor
```

---

#### Template: Panel de Usuario

```
[Top Nav]
[Content]
  [Sidebar nav — 220px fija]
    Nav items: Resumen · Mis compras/ventas · Listings · Valoraciones · Configuración
  [Área de contenido — flex 1]

Mobile:
[Top Nav reducida]
[Bottom nav — los 4 tabs cubren las secciones principales]
[Contenido full width — stack vertical]
```

---

#### Template: Autenticación

```
[Sin top nav principal]
[Fondo: bg-page]
[Centrado vertical y horizontal]
  [Card — max-width 480px · border-radius radius-xl · Elevation 2]
    [Logo]
    [Título + descripción]
    [Formulario — campos + validación inline]
    [CTA primario]
    [Link alternativo]
```

**✓ Hacer:** Sin topbar — elimina distracciones. Stepper dentro de la misma card para pasos múltiples.
**✗ Evitar:** Redirigir automáticamente sin confirmación visual tras el login. Mostrar el topbar global en páginas de auth.

---

## 13. Patrones

---

### Light Mode

El modo claro es el modo por defecto. Basado en una escala de grises cálidos derivada del ramp Gray.

#### Capas de elevación (Light)

```
bg-page      #F8F8F6  ← fondo de página
bg-secondary #F0EFEC  ← filter bar, hover states, tags
bg-primary   #FFFFFF  ← cards, modales, inputs, nav
Elevation 1           ← box-shadow: 0 1px 4px rgba(0,0,0,.06)
Elevation 2           ← box-shadow: 0 4px 16px rgba(0,0,0,.08)
Elevation 3           ← box-shadow: 0 8px 32px rgba(0,0,0,.12)
border       #D6D4CE  ← separadores entre elementos
```

#### Reglas Light Mode

- `blue-60 (#1A6FB5)` como color interactivo cumple ratio 4.5:1 sobre blanco y 4:1 sobre bg-page.
- No usar blanco puro (#FFFFFF) como fondo de página — usar `#F8F8F6` (gray-0) para que las cards blancas se destaquen.
- Focus rings: `box-shadow: 0 0 0 2px rgba(26,111,181,.2)` — semitransparente para funcionar sobre cualquier superficie.
- Sombras siempre en negro con opacidad, **nunca en color**.

---

### Dark Mode

El dark mode **no es una inversión de colores**: es un sistema de capas donde los fondos más oscuros están abajo y los más claros emergen hacia el usuario.

#### Capas de elevación (Dark)

```
bg-page      #131210  ← fondo de página (más oscuro)
bg-primary   #1E1D1A  ← cards, modales, inputs, nav
bg-secondary #252421  ← hover states, filter bar, tags
border       #2E2D2A  ← separadores
border-em    #3D3C38  ← énfasis y hover
```

#### Tokens Light vs Dark

| Token | Light | Dark |
|---|---|---|
| `--bg-page` | #F8F8F6 | #131210 |
| `--bg-primary` | #FFFFFF | #1E1D1A |
| `--bg-secondary` | #F0EFEC | #252421 |
| `--text-primary` | #131210 | #F0EFEC |
| `--text-secondary` | #5C5A56 | #9B9892 |
| `--border` | #D6D4CE | #2E2D2A |
| `--interactive` | #1A6FB5 (blue-60) | #6AAAD8 (blue-40) |
| `--success` | #2DA67E | #2DA67E (sin cambio) |
| `--warning` | #E69A20 | #E69A20 (sin cambio) |
| `--danger` | #D94646 | #D94646 (sin cambio) |

#### Reglas Dark Mode

- `blue-40 (#6AAAD8)` como interactivo — el blue-60 no cumple contraste AA sobre fondos oscuros.
- No usar negro puro (#000000) — gray-100 (#131210) aporta calidez y reduce fatiga visual.
- Elevación con fondos más claros progresivamente, **no con sombras** (se reducen al 50%).
- **No invertir imágenes de cartas** — tienen colores propios que no deben alterarse.
- Nunca hardcodear hex en componentes — un solo valor fijo rompe el dark mode silenciosamente.

**✓ Hacer:** Guardar la preferencia en localStorage. Reducir sombras al 50%.
**✗ Evitar:** Hardcodear cualquier hex en componentes. Invertir imágenes de cartas.

---

### Responsive

El 80% del uso ocurre en mobile (eventos y torneos). La app es el producto principal.

#### Adaptaciones por componente

| Componente | Web (lg+) | App (xs/sm) |
|---|---|---|
| Top Nav | Logo + search central + auth | Logo + título + 2 íconos |
| Navegación | Sidebar 220px permanente | Bottom tab bar 4 items |
| Filtros | Barra horizontal sticky inline | Botón → bottom sheet |
| Grid cartas | 4–6 columnas + sidebar | 2 columnas sin sidebar |
| Ficha de carta | 2 columnas (8/12 + 4/12) | 1 columna + CTA sticky |
| Panel usuario | Sidebar nav + contenido | Stack vertical sin sidebar |
| Modal | Overlay centrado (max 640px) | Bottom sheet 90vh |
| Tablas | Full width todas las columnas | Scroll horizontal o card view |

#### Bottom Sheet (Mobile)

```css
position: fixed; bottom: 0; left: 0; right: 0;
max-height: 90vh; border-radius: 12px 12px 0 0;
border-top: 1px solid var(--border);
background: var(--bg-primary);

/* Handle de arrastre */
width: 36px; height: 4px; border-radius: 2px;
background: var(--border); margin: 8px auto 12px;
```

Soportar drag-to-dismiss y cierre al tocar el overlay. Safe area en iOS: `env(safe-area-inset-bottom)`.

**✓ Hacer:** Diseño mobile-first. Touch targets mínimos 44×44px. Espaciado mínimo 8px entre elementos táctiles.
**✗ Evitar:** Scroll horizontal en toda la página. Modales centrados en pantallas < 640px.

---

### Accesibilidad

**Target: WCAG 2.2 AA** en todos los componentes. La accesibilidad es una restricción de diseño, no una auditoría posterior.

#### Reglas fundamentales

| Regla | Implementación | Nivel |
|---|---|---|
| Contraste texto | Mínimo 4.5:1 texto normal, 3:1 texto grande (≥18px o ≥14px bold) | AA |
| Contraste UI | Mínimo 3:1 bordes de inputs, íconos interactivos sin texto | AA |
| Focus visible | `box-shadow: 0 0 0 2px rgba(26,111,181,.3)` — nunca `outline: none` sin reemplazo | AA |
| Semántica HTML | Acciones → `<button>`, nav → `<a>`, forms → `<label for="">` | A |
| Alt text | `alt="Charizard ex — Scarlet & Violet 151 — SIR"`. Decorativas: `alt=""` | A |
| ARIA labels | `aria-label` en íconos sin texto. `role="status" aria-live="polite"` en precios dinámicos | AA |
| Orden de foco | Orden de tabulación = flujo visual de lectura. No `tabindex` positivo | A |
| Reduced motion | Todas las animaciones en `@media (prefers-reduced-motion: no-preference)` | AAA |
| Touch targets | Mínimo 44×44px. Espaciado mínimo 8px entre targets | AA |
| Texto escalable | Sin `user-scalable=no`. Layout funcional hasta zoom 200% | AA |
| Doble codificación | Nunca comunicar estado solo con color — siempre + ícono o + texto | A |
| Errores de formulario | Asociar con `aria-describedby`. No depender solo del color rojo | AA |

#### Doble codificación (nunca color solo)

| Donde | Cue de color | Cue redundante requerida |
|---|---|---|
| Precio tendencia up/down | verde / rojo | `↑` / `↓` + `%` firmado |
| Error de campo | border rojo | ícono + helper text + `aria-describedby` |
| Estado de watchlist | corazón rojo | filled vs. outlined icon + label change |
| Tab activo | color interactivo | 2px bottom border |
| Alerta inline | border-left coloreado | ícono + título bold + texto descriptivo |
| Chip activo | bg fill | weight 500 en texto |
| Disabled | opacity reducida | `aria-disabled="true"` |

#### Focus Ring

```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(26, 181, 181, 0.3);
}

button:focus-visible {
  box-shadow: 0 0 0 3px rgba(26, 111, 181, 0.35);
}
```

#### Checklist por componente (8 puntos antes de shipper)

1. **Keyboard navigable** — Tab order = flujo visual, no `tabindex` positivos.
2. **Focus visible** — `:focus-visible` muestra el focus ring. Nunca `outline: none` sin reemplazo.
3. **Semántica HTML** — acciones `<button>`, nav `<a>`, forms `<label for="">`. No `<div onClick>`.
4. **ARIA solo donde HTML no alcanza** — `aria-label` en icon-only, `aria-describedby` en errores, `role="status"` en precios dinámicos.
5. **Touch target ≥ 44×44** — incluyendo hit area invisible.
6. **Contraste verificado** — cada par texto/bg está en las tablas de §2, o fue medido fresco.
7. **Reduced motion respetado** — animaciones en `@media (prefers-reduced-motion: no-preference)`.
8. **Texto escala al 200%** — sin `user-scalable=no`. Nada se clipa.

---

### Contenido

#### Condición de carta — tabla completa

| Condición | Abrev. | Background | Texto | Descripción |
|---|---|---|---|---|
| Mint | M | `teal-10` | `teal-60` | Perfecta, recién sacada del sobre |
| Near Mint | NM | `blue-10` | `blue-80` | Casi perfecta, puede tener leves marcas |
| Lightly Played | LP | `amber-10` | `amber-60` | Ligeramente usada, marcas visibles de cerca |
| Moderately Played | MP | `amber-10` | `amber-80` | Marcas claras en bordes y superficie |
| Heavily Played | HP | `red-10` | `red-60` | Desgaste muy visible, solo juego casual |
| Damaged | D | `red-10` | `red-80` | Doblada, rasgada o con daño estructural |
| Graduado PSA/CGC | + Grado | `gray-100` | `gray-10` (sólido) | Certificada + grado numérico 1–10 |

#### Numeración y moneda

| Dato | Formato correcto | Formato incorrecto |
|---|---|---|
| Precio CLP | `$48.500 CLP` | `$48500` / `CLP 48.500` |
| Precio USD | `USD 412,50` | `USD 412.50` / `$412,50 USD` |
| Porcentaje | `↑ +3,8%` · `↓ −1,2%` | `+3.8%` / `12,4%` |
| Número de carta | `182/165` | `182 de 165` / `#182` |
| Grado PSA | `PSA 10` / `CGC 9.5` | `PSA-10` / `Grado 10` |
| Fecha relativa | `Hace 2 horas` · `Hace 3 días` | `2026-04-15 14:32` |

---

## 14. Arquitectura del Sistema

### Capas del sistema

```
  ┌─────────────────────────────────────────────────────────────────┐
  │ 5. Product surfaces  →  ui_kits/<product>/                       │  usa 1–4
  ├─────────────────────────────────────────────────────────────────┤
  │ 4. Patterns          →  pantallas y recetas de layout            │  usa 1–3
  ├─────────────────────────────────────────────────────────────────┤
  │ 3. Components        →  piezas React / HTML reutilizables        │  usa 1–2
  ├─────────────────────────────────────────────────────────────────┤
  │ 2. Foundations       →  type scale, spacing, radii, motion       │  usa 1
  │                          colors_and_type.css                     │
  ├─────────────────────────────────────────────────────────────────┤
  │ 1. Primitive tokens  →  raw values: hex, px, ms                  │  ninguna
  │                          --blue-60, --gray-0, --space-4, etc.    │
  └─────────────────────────────────────────────────────────────────┘
```

**Regla:** si escribes un hex crudo (`#1A6FB5`) dentro de un componente, saltaste una capa. Usa el token semántico (`var(--interactive)`).

### Reglas para extender el sistema

**Agregar un nuevo color:**
1. Solo dentro de un ramp existente (blue / teal / amber / red / gray).
2. Agregar el token primitivo en `:root` de `colors_and_type.css`.
3. Si es semántico, wiring en `:root` y `.dark`.
4. Justificar y documentar — añadir un nuevo ramp entero requiere decisión de sistema.

**Agregar un nuevo componente — requiere los 6:**
1. Responsabilidad única.
2. Tokens para todas las propiedades visuales (bg, text, border, radius, padding).
3. Estados cubiertos: default, hover, active, focus, disabled.
4. Preview card en `preview/`.
5. Implementación de referencia en `ui_kits/tradeit-app/components/`.
6. Documentación en README si es un nuevo patrón.

**Agregar un nuevo patrón (pantalla):**
1. Escribirlo en `ui_kits/<product>/screens/`.
2. Componer componentes existentes — no crear decisiones de bajo nivel en la pantalla.
3. Si la composición revela un componente faltante, seguir §4 primero.

### Anti-patrones del sistema (a rechazar)

- Hex hardcodeado en un componente.
- Nuevo font weight fuera de 300/400/500.
- Nuevo componente que solo envuelve tres existentes sin comportamiento nuevo.
- Nuevo patrón con gradientes de fondo, glassmorphism, glow, blur decorativo.
- Color semántico usado decorativamente (verde-como-gráfico en lugar de verde-como-dato-positivo).
- Copy en `usted` o regionalismos de UI core ("plata", "guay").
- Ícono SVG dibujado ad-hoc cuando Phosphor ya tiene una opción.

### Versionado y deprecación

Cuando un componente cambia shape:
1. Bump en el header del archivo (`// v2.0`).
2. Mantener la versión anterior como `Component.v1.jsx` por un release.
3. Nota de migración al inicio del nuevo archivo.

Para tokens: nunca remover silenciosamente — agregar comentario de deprecación por un release antes de eliminar.

---

## Referencia rápida para nuevos colaboradores

1. **Tokens antes de código.** Si necesitas color/spacing/duration, agrégalo a `colors_and_type.css` primero.
2. **Componer, no decorar.** Pantallas → componentes → primitivos.
3. **Light AND dark.** Usar CSS variables para colores de superficie — el toggle `.dark` funciona automáticamente.
4. **Releer `content.md`** antes de escribir cualquier string nuevo. La voz es parte del sistema.
5. **El sistema crece por adición, no por excepción.**

---

## Fuente de verdad

Toda la documentación de marca y producto proviene del repo:

- **GitHub:** [sanmartineme/tradeit-tcg](https://github.com/sanmartineme/tradeit-tcg)
  - `PRD.md` — Product Requirements del MVP
  - `MULLIGAN.md` — Design system completo (origen de este documento)
  - `content.md` — Content system (voz, tono, léxico, microcopy)

---

*Mulligan Design System · MDS.md · v1.0 · 2026 · Tradeit TCG · Basado en Atomic Design + IBM Carbon*
