# Mulligan Design System
> v1.0 · Tradeit TCG · Basado en Atomic Design · Inspirado en Carbon Design System · Light & Dark Mode · Web + App

---

## Índice

1. [Principios de Diseño](#1-principios-de-diseño)
2. [Paleta de Colores](#2-paleta-de-colores)
3. [Tipografía](#3-tipografía)
4. [Espaciado](#4-espaciado)
5. [Border Radius](#5-border-radius)
6. [Elevación](#6-elevación)
7. [Grid y Layout](#7-grid-y-layout)
8. [Motion](#8-motion)
9. [Íconos](#9-íconos)
10. [Atomic Design — Componentes](#10-atomic-design--componentes)
    - [Átomos](#átomos)
    - [Moléculas](#moléculas)
    - [Organismos](#organismos)
    - [Templates](#templates)
11. [Patrones](#11-patrones)
    - [Light Mode](#light-mode)
    - [Dark Mode](#dark-mode)
    - [Responsive](#responsive)
    - [Accesibilidad](#accesibilidad)
    - [Contenido](#contenido)

---

## 1. Principios de Diseño

| # | Principio | Descripción |
|---|---|---|
| 01 | **Confianza primero** | Cada decisión visual transmite seguridad y profesionalismo. El usuario opera con activos de valor. Si algo se ve informal o impreciso, no pertenece a la plataforma. |
| 02 | **Densidad inteligente** | Mostrar múltiples atributos de una carta sin saturar. Jerarquía visual clara. La información debe estar disponible sin ser abrumadora. |
| 03 | **Coherencia sistémica** | Los mismos tokens, componentes y patrones funcionan en web y app. Sin excepciones. Un componente diseñado una vez funciona en todos los contextos. |
| 04 | **Accesibilidad base** | Contraste mínimo AA (4.5:1 texto, 3:1 UI). Focus rings visibles. Semántica HTML correcta. La accesibilidad es un requisito base, no un añadido posterior. |
| 05 | **Flat & estructurado** | Sin gradientes decorativos. Elevación comunicada con bordes y sombras sutiles, no con fondos saturados. La estructura surge de la organización del contenido. |

---

## 2. Paleta de Colores

### 2.1 Blue — Primario interactivo

| Token | Hex | Uso |
|---|---|---|
| `blue-10` | `#EBF2FB` | Fondos hover, backgrounds de badges info |
| `blue-20` | `#C5DAEF` | Borders info, fills sutiles |
| `blue-40` | `#6AAAD8` | Íconos secundarios, estados intermedios, **interactive en dark mode** |
| `blue-60` | `#1A6FB5` | **Color primario de acción.** Botones, links, focus rings, active tabs |
| `blue-80` | `#0D4A80` | Hover de botón primario, texto sobre blue-10 |
| `blue-100` | `#042D55` | Texto sobre blue-20, estados pressed |

### 2.2 Gray — Neutro estructural

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

### 2.3 Teal — Éxito / Confirmación

| Token | Hex | Uso |
|---|---|---|
| `teal-10` | `#E0F4EF` | Background badge éxito |
| `teal-20` | `#9FE1CB` | Border éxito |
| `teal-40` | `#2DA67E` | **Íconos éxito, indicadores de precio positivo** |
| `teal-60` | `#0F6E56` | Texto éxito sobre teal-10 |
| `teal-80` | `#054538` | Hover estados success |

### 2.4 Amber — Advertencia / Grading / Precio

| Token | Hex | Uso |
|---|---|---|
| `amber-10` | `#FAF0D8` | Background badge advertencia |
| `amber-20` | `#F5D68C` | Border advertencia |
| `amber-40` | `#E69A20` | **Íconos advertencia, highlights de precio, estrellas de rating** |
| `amber-60` | `#9B6510` | Texto sobre amber-10 |
| `amber-80` | `#5E3B06` | Hover estados warning |

### 2.5 Red — Error / Peligro / Precio negativo

| Token | Hex | Uso |
|---|---|---|
| `red-10` | `#FCEAEA` | Background badge error |
| `red-20` | `#F5B8B8` | Border error |
| `red-40` | `#D94646` | **Botón destructivo, íconos error, precio a la baja** |
| `red-60` | `#A02C2C` | Texto error sobre red-10 |
| `red-80` | `#661B1B` | Hover estados danger |

### 2.6 Tokens Semánticos

```css
/* ── LIGHT MODE (default en :root) ─────────────────── */
--bg-page:        #F8F8F6;   /* gray-0 */
--bg-primary:     #FFFFFF;
--bg-secondary:   #F0EFEC;   /* gray-10 */
--text-primary:   #131210;   /* gray-100 */
--text-secondary: #5C5A56;   /* gray-60 */
--text-muted:     #9B9892;   /* gray-40 */
--border:         #D6D4CE;   /* gray-20 */
--border-em:      #B2B0AB;   /* gray-30 */
--interactive:    #1A6FB5;   /* blue-60 */
--success:        #2DA67E;   /* teal-40 */
--warning:        #E69A20;   /* amber-40 */
--danger:         #D94646;   /* red-40 */

/* ── DARK MODE (.dark en <html>) ────────────────────── */
--bg-page:        #131210;   /* gray-100 */
--bg-primary:     #1E1D1A;
--bg-secondary:   #252421;
--text-primary:   #F0EFEC;   /* gray-10 */
--text-secondary: #9B9892;   /* gray-40 */
--text-muted:     #5C5A56;   /* gray-60 */
--border:         #2E2D2A;   /* gray-80 */
--border-em:      #3D3C38;
--interactive:    #6AAAD8;   /* blue-40, más legible sobre oscuro */
```

---

## 3. Tipografía

**Familia principal:** IBM Plex Sans — pesos 300, 400, 500
**Monospace (solo precios y datos numéricos):** IBM Plex Mono — pesos 400, 500

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Escala modular (ratio 1.25)

| Nombre | Size | Weight | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|
| Display | 48px | 300 | 1.1 | -0.03em | Heroes, landing page |
| Heading 1 | 32px | 300–400 | 1.2 | -0.02em | Título de página principal |
| Heading 2 | 24px | 500 | 1.3 | — | Sección principal, panel header |
| Heading 3 | 20px | 500 | 1.4 | — | Nombre de carta en ficha |
| Heading 4 | 16px | 500 | 1.5 | — | Subtítulos de sección |
| Body | 16px | 400 | 1.6 | — | Texto de párrafo |
| Body Small | 14px | 400 | 1.6 | — | Descripciones, helpers |
| Label | 12px | 500 | 1.4 | 0.08em | Etiquetas uppercase |
| Caption | 11px | 400 | 1.4 | — | Timestamps, metadatos |
| Price | 14–36px | 400 | 1.2 | — | Precios en IBM Plex Mono |

### Reglas tipográficas

- **Peso máximo:** 500. Nunca usar 600 ni 700. La jerarquía se logra con tamaño y color.
- **Precio siempre en monospace:** garantiza alineación de dígitos en listados.
- **Labels categóricos:** `font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em`.
- **Truncación en cards:** `text-overflow: ellipsis; white-space: nowrap; overflow: hidden`.
- **Nunca usar placeholder como sustituto del label:** desaparece al escribir.

### Contrastes de texto (WCAG)

| Par | Ratio | Nivel |
|---|---|---|
| text-primary (#131210) sobre bg-primary (#fff) | 17.5:1 | AAA |
| text-primary (#131210) sobre bg-page (#F8F8F6) | 16.1:1 | AAA |
| text-secondary (#5C5A56) sobre bg-primary (#fff) | 7.1:1 | AA |
| text-muted (#9B9892) sobre bg-primary (#fff) | 3.5:1 | AA (texto grande) |
| interactive (#1A6FB5) sobre bg-primary (#fff) | 4.6:1 | AA |

---

## 4. Espaciado

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

## 5. Border Radius

| Token | Valor | Uso |
|---|---|---|
| `radius-xs` | 2px | Chips de texto, rarity tags |
| `radius-sm` | 4px | Inputs, selects, code snippets |
| `radius-md` | 8px | Botones, tooltips, dropdowns |
| `radius-lg` | 12px | Cards de carta, modales pequeños |
| `radius-xl` | 16px | Modales principales, panels |
| `radius-full` | 999px | Badges, pills, avatares |

---

## 6. Elevación

| Nivel | CSS | Uso |
|---|---|---|
| **Elevation 0** | `border: 1px solid var(--border)` | Cards planas, inputs, tablas |
| **Elevation 1** | `border + box-shadow: 0 1px 4px rgba(0,0,0,.06)` | Cards de carta en grid |
| **Elevation 2** | `border + box-shadow: 0 4px 16px rgba(0,0,0,.08)` | Dropdowns, popovers, tooltips |
| **Elevation 3** | `border + box-shadow: 0 8px 32px rgba(0,0,0,.12)` | Modales, drawers, sidebars |

> **Dark Mode:** Reducir opacidad de shadows al 50%. La elevación se refuerza con fondos progresivamente más claros (bg-page → bg-primary → bg-secondary).

---

## 7. Grid y Layout

### Breakpoints Web

| Breakpoint | Rango | Columnas | Gutter | Margin |
|---|---|---|---|---|
| `xs` | < 640px | 4 | 12px | 16px |
| `sm` | 640–1024px | 8 | 16px | 24px |
| `lg` | 1024–1280px | 12 | 16px | 32px |
| `xl` | > 1280px | 12 | 24px | auto (max 1440px) |

### Breakpoints App (Mobile)

| Breakpoint | Rango | Columnas | Gutter | Margin |
|---|---|---|---|---|
| Mobile | 320–390px | 4 | 12px | 16px |
| Mobile L | 390–428px | 4 | 16px | 16px |
| Tablet | 428–768px | 8 | 16px | 24px |

### Anchos máximos de contenido

```css
--max-width-content:  1280px;  /* Contenido principal */
--max-width-text:      720px;  /* Columnas de texto */
--max-width-card:      400px;  /* Cards individuales */
--sidebar-width:       220px;  /* Sidebar de panel de usuario */
--topbar-height:        48px;  /* Topbar web */
--bottomnav-height:     56px;  /* Bottom nav app */
```

---

## 8. Motion

### Principios
- Animaciones **funcionales**, no decorativas.
- Respetar `prefers-reduced-motion: reduce` — todas las animaciones son opcionales.
- Duración corta: el usuario no debe esperar.

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

## 9. Íconos

**Sistema recomendado:** [Phosphor Icons](https://phosphoricons.com/) — trazo 1.8px consistente.

### Tamaños estándar

| px | Uso |
|---|---|
| 16px | Inline en texto, badges, labels |
| 20px | Controles de UI, inputs con ícono |
| 24px | Botones con ícono, navegación |
| 32px | Ilustrativos, empty states (color: text-muted) |

### Íconos del sistema

| Contexto | Ícono Phosphor |
|---|---|
| Búsqueda | `MagnifyingGlass` |
| Filtros | `Funnel` |
| Comprar | `ShoppingCart` |
| Vender / Listing | `Tag` |
| Wishlist | `Heart` |
| Notificaciones | `Bell` |
| Perfil | `User` |
| Verificado | `SealCheck` |
| Precio ↑ | `TrendUp` |
| Precio ↓ | `TrendDown` |
| Envío | `Package` |
| Grading | `Certificate` |
| Foto / Upload | `Camera` |
| Editar | `PencilSimple` |
| Eliminar | `Trash` |
| Configuración | `GearSix` |
| Cerrar | `X` |
| Volver | `ArrowLeft` |
| Expandir | `CaretDown` |

> Color: siempre `currentColor`. No usar colores hardcodeados en íconos — heredar del contexto.

---

## 10. Atomic Design — Componentes

---

### Átomos

Las unidades más pequeñas del sistema. Cada átomo es funcional por sí mismo y es la base de moléculas y organismos.

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
:hover  → background shift hacia variante más oscura
:active → transform: scale(0.97)
:focus  → box-shadow: 0 0 0 2px rgba(26,111,181,.3)
```

**✓ Hacer:** Un único botón Primary visible por vista. Acciones destructivas con variante Danger precedidas de confirmación modal.
**✗ Evitar:** Múltiples botones Primary en paralelo. Deshabilitar sin indicar el motivo en helper text o tooltip.

---

#### Badges

`height: 20px; padding: 0 8px; border-radius: 999px; font-size: 11px; font-weight: 500`

| Variante | Background | Texto | Uso |
|---|---|---|---|
| Info/Condición | `blue-10` | `blue-80` | Near Mint, NM, estado informativo |
| Success | `teal-10` | `teal-60` | Verificado, M (Mint) |
| Warning | `amber-10` | `amber-60` | LP, sellado, advertencia |
| Danger | `red-10` | `red-60` | HP, en disputa, error |
| Neutral | `gray-10` | `gray-60` | Borrador, estado neutro |
| Sólido oscuro | `gray-100` | `gray-10` | **PSA/CGC + grado numérico** — exclusivo grading |

**✓ Hacer:** Sistema semántico fijo. Badge oscuro sólido exclusivo para grading certificado.
**✗ Evitar:** Más de 2 badges simultáneos en el mismo contexto de card. No inventar colores fuera del sistema.

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

#### Inputs

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

Composición Form Field: `label (12px 500)` → `input (40px)` → `helper text (11px)`

**✓ Hacer:** Validar on blur. Helper text describe el problema específico. Label siempre visible sobre el input.
**✗ Evitar:** Validar on keypress. Usar placeholder como sustituto del label. Mostrar todos los errores solo al submit.

---

#### Card de Carta

```
Ancho: 160px (grid web), 100% (lista app)
border-radius: 12px; border: 1px solid var(--border);
hover: border-color var(--border-em) + Elevation 1

Estructura:
[Imagen 100% × 110px]
  background: gradiente tonal según tipo
  [Arte 68×96px, border-radius: 6px]
  [Rarity badge — top-right]
[Cuerpo — padding 10px]
  [Nombre 13px 500 — truncado]
  [Set 11px text-muted — truncado]
  [Condición badge]
  [Precio monospace 13px] + [Tendencia %]
```

Variantes de imagen:
- **Single Card:** gradiente blue-10 → blue-20
- **Graduado:** gradiente amber-10 → amber-20 · badge PSA/CGC sólido oscuro
- **Sellado:** gradiente gray-10 → gray-20

**✓ Hacer:** Truncar con ellipsis. Precio y tendencia siempre visibles. Arte siempre en rectángulo 6px radius.
**✗ Evitar:** Arte circular. Omitir tendencia (mostrar "–" si no hay datos).

---

#### Avatar

| Tamaño | px | Font-size | Uso |
|---|---|---|---|
| Sm | 28px | 10px | Topbar, listas de órdenes |
| Md | 40px | 14px | Paneles, cards de vendedor |
| Lg | 56px | 18px | Páginas de perfil |

Color de fondo: asignado de forma determinista según hash del username. Forma: siempre circular (border-radius: 50%). Iniciales: 2 primeros caracteres del username.

**✓ Hacer:** Color determinista por username. Fallback con iniciales siempre disponible.
**✗ Evitar:** Avatares cuadrados. Mostrar avatar roto sin fallback. Usar emoji como avatar.

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

Grupos de átomos que funcionan juntos como una unidad con responsabilidad única y clara.

#### Notificaciones Inline

Estructura: `border-left: 3px solid [color semántico]` · `background: [color 10]` · `padding: 12px 14px`

| Variante | Border | Background | Título |
|---|---|---|---|
| Info | `blue-60` | `blue-10` | `blue-80` |
| Success | `teal-40` | `teal-10` | `teal-60` |
| Warning | `amber-40` | `amber-10` | `amber-60` |
| Error | `red-40` | `red-10` | `red-60` |

**✓ Hacer:** Estáticas, el usuario las descarta manualmente. Máximo 2 apiladas en la misma vista.
**✗ Evitar:** Usar error para estados informativos. El significado semántico de cada variante es fijo e inamovible.

---

#### Display de Precio

Composición: `label uppercase 11px 500` → `valor IBM Plex Mono` → `tendencia flecha + % + período`

| Tamaño | Font-size valor | Uso |
|---|---|---|
| Compact | 18px | Cards de resultado, listings |
| Default | 28px | Ficha de carta |
| Hero | 36px weight 300 | Dashboard de usuario |

```
Tendencia positiva: color var(--success), ↑ 12.4% · 30 días
Tendencia negativa: color var(--danger), ↓ 3.1% · 7 días
Referencia neutral: color var(--text-muted), sin flecha
```

**✓ Hacer:** Precio siempre en monospace. Moneda siempre explícita (CLP/USD). Período de referencia visible (30d, 7d).
**✗ Evitar:** Mezclar CLP y USD sin indicar cuál es local y cuál es referencia.

---

#### Tabs

**Variante estándar (línea):**
```css
border-bottom: 1px solid var(--border); /* contenedor */

/* Item inactivo */
padding: 8px 16px; font-size: 14px; color: var(--text-secondary);

/* Item activo */
color: var(--interactive); font-weight: 500;
border-bottom: 2px solid var(--interactive); margin-bottom: -1px;
```

**Variante contenida (switcher):** para exactamente 2 opciones excluyentes. Background: bg-secondary con border-radius 6px, ítem activo en bg-primary + border.

**✓ Hacer:** Siempre una tab activa. El cambio no requiere confirmación. Máximo 5 tabs por barra.
**✗ Evitar:** Tabs para pasos secuenciales (usar stepper). Ocultar tabs por rol sin señalarlo.

---

#### Breadcrumb

```
[Link interactivo] / [Link interactivo] / [Texto actual secundario]
```

- Ítem actual: `color: var(--text-secondary)` sin cursor pointer
- Ítems anteriores: `color: var(--interactive)` clickeables
- Separador "/": `color: var(--text-muted)`
- +4 niveles: colapsar el medio con "…" clickeable

**✓ Hacer:** No mostrar en home ni primer nivel. Nombre del H1 idéntico al ítem actual del breadcrumb.
**✗ Evitar:** Breadcrumb en páginas sin jerarquía. Texto del H1 diferente al del breadcrumb.

---

#### Form Field

Composición vertical siempre: `label (12px 500 text-secondary)` → `input/select (40px)` → `helper text (11px)`

Estados: default · success (border teal) · error (border rojo + helper rojo) · disabled (opacity 0.4)

**✓ Hacer:** Validar on blur. Helper text con problema específico. Unidad (CLP/USD) en label de campos financieros.
**✗ Evitar:** Placeholder como label. Validar on keypress. Mostrar todos los errores solo en submit.

---

#### Star Rating

**Solo lectura:** estrellas amber-40, promedio 1 decimal, conteo de reseñas en paréntesis.
**Interactivo:** solo en flujo post-compra. Hover progresivo por estrellas.
**Con menos de 5 reseñas:** mostrar "Nuevo vendedor" en lugar del promedio numérico.

**✓ Hacer:** Promedio con 1 decimal. "Nuevo vendedor" con menos de 5 reseñas.
**✗ Evitar:** Componente interactivo en perfil público. Permitir doble valoración en la misma transacción.

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

Siempre acompañada de label de contexto y valor numérico (porcentaje o fracción x/total).

**✓ Hacer:** Mostrar valor numérico siempre. Color refleja estado semántico.
**✗ Evitar:** Usar para carga indeterminada (usar skeleton o spinner). Solo para valores cuantificables y conocidos.

---

### Organismos

Secciones completas de la UI compuestas por moléculas y átomos. Cada organismo es independiente, tiene su propio propósito y puede existir en múltiples páginas.

#### Top Navigation Bar

```
Height: 48px · position: fixed · z-index: 100 · border-bottom: 1px solid var(--border)

Layout web:
[Logo — flex inicio] [Search 320px max — flex centro] [Auth buttons + Avatar — flex fin]

Logo: logotipo texto "Mulligan" + logotype mark azul (28×28px, border-radius 6px)
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
[Input búsqueda — flex 1, max 400px]
[Select "Todas las ediciones"]
[Chips de tipo: Single Card | Sellado | Graduado]
[Botón "Buscar" — al extremo derecho]
```

**✓ Hacer:** Chips mutuamente excluyentes. Búsqueda requiere acción explícita (Enter o botón).
**✗ Evitar:** Búsqueda automática con debounce en este contexto.

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

**✓ Hacer:** Mostrar el conteo siempre. Skeleton loaders durante carga. Filtros persisten durante la sesión.
**✗ Evitar:** Resetear filtros al cambiar de página. Empty state sin CTA de "Limpiar filtros" cuando el empty es causado por filtros.

---

#### Ficha de Carta + Dashboard de Precios

```
Layout web (2 columnas):
Col 8/12: [Imagen oficial 120×168px] + [Datos oficiales API] + [Chart controles + gráfico] + [Listings activos]
Col 4/12 sticky: [Price cells 2×2] + [CTA Comprar] + [Info del vendedor]

Datos API (solo lectura): Imagen, nombre, número, set, rareza, holofoil type, tipo, fecha
Price cells: Precio promedio CLP · Ref. TCGPlayer USD · Mínimo activo · Máximo activo
Gráfico: controles 1M / 3M / 9M / 12M · área chart · tooltip interactivo

Listings activos:
[Imagen 32×44px] [Nombre + condición] [Badge reputación vendedor] [Precio] [CTA "Ver oferta"]
Ordenados: precio ascendente por defecto
```

**✓ Hacer:** Datos de imagen y rareza solo desde la API (source of truth). CTA sticky en columna lateral.
**✗ Evitar:** Gráfico con menos de 3 transacciones sin indicar "Datos insuficientes". Duplicar el CTA en la columna principal.

---

#### Panel de Usuario (Comprador / Vendedor)

```
Layout:
[Header: Avatar Lg + nombre + badge verificado]
[Stats 3 columnas: Total $ | Operaciones | Listings/Estado]
[Listado de órdenes recientes con estado + precio + badge]

Comprador — stats:
- Total gastado (CLP, neto)
- Compras completadas
- Compras en curso

Vendedor — stats:
- Total recaudado (CLP, neto de comisiones)
- Ventas completadas + tasa de completitud
- Listings activos + borradores

Órdenes — estados:
Pago pendiente · Pago confirmado (blue) · En camino (amber) · Entregado (teal) · En disputa (red) · Cancelado (gray)
```

**✓ Hacer:** Siempre mostrar monto neto (sin comisiones brutas). Dot de estado con el mismo color que el badge para accesibilidad cromática.
**✗ Evitar:** Paginar las órdenes en el resumen del panel. Mostrar monto bruto sin deducir comisiones.

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

Animación: overlay opacity 300ms + modal scale(.96)+translateY 300ms delay 30ms
```

**✓ Hacer:** Acción primaria siempre a la derecha. Incluir resumen del objeto dentro del modal.
**✗ Evitar:** Apilar modales. Usar modal para flujos de más de 3 pasos (usar stepper dentro del modal).

---

#### Bottom Navigation (App)

```
Height: 56px + safe area iOS · position: fixed · bottom: 0
border-top: 1px solid var(--border)

4 tabs: Inicio | Buscar | Mis compras/ventas | Perfil
Cada tab: ícono 24px + label 9px · touch target: 44×44px mínimo
Activo: color var(--interactive) en ícono y label
```

**✓ Hacer:** Exactamente 4 tabs. Siempre visible, nunca se oculta en scroll.
**✗ Evitar:** Ocultar en scroll. Badges de notificación en más de 2 tabs simultáneamente.

---

#### Empty State

```
Estructura centrada:
[Ícono 48px — neutral, color text-muted]
[Título H4 — text-primary]
[Descripción 13px — text-secondary, max 320px, line-height 1.6]
[CTA botón — cuando aplica]
```

El CTA explica cómo resolver el estado vacío: "Limpiar filtros", "Explorar cartas", "Agregar carta".

**✓ Hacer:** Siempre incluir CTA que resuelva el estado. Ícono relacionado con el contexto (búsqueda, carrito, corazón).
**✗ Evitar:** Empty state genérico sin contexto. CTA destructivo en empty state.

---

### Templates

Layouts de página completos que orquestan organismos. Definen la composición espacial de cada pantalla sin contenido real.

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

**✓ Hacer:** Sidebar sticky dentro del scroll del contenido (no de la página). Conteo de resultados siempre actualizado. Filtros persisten durante toda la sesión.
**✗ Evitar:** Colapsar sidebar automáticamente en 1024px (reducirlo a 180px, nunca ocultarlo hasta 768px).

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

**✓ Hacer:** Columna lateral con CTA sticky. El CTA no se duplica en la columna principal.
**✗ Evitar:** Gráfico > 30% del viewport sin scroll. CTA duplicado en ambas columnas.

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

**✓ Hacer:** Sidebar de panel persistente con todas las sub-secciones accesibles. Sidebar del panel independiente del topbar global.
**✗ Evitar:** Mezclar la navegación del panel con la navegación global. Esconder métricas financieras detrás de un click adicional.

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
    [Link alternativo — ¿Ya tienes cuenta? / ¿Olvidaste tu contraseña?]
```

**✓ Hacer:** Sin topbar: elimina distracciones. Si hay pasos múltiples (registro), usar stepper dentro de la misma card.
**✗ Evitar:** Redirigir automáticamente sin confirmación visual tras el login. Mostrar el topbar global en páginas de auth.

---

## 11. Patrones

---

### Light Mode

El modo claro es el modo por defecto de Mulligan. Basado en una escala de grises cálidos derivada del ramp Gray, con superficies blancas que se elevan sobre fondos de página ligeramente tintados.

#### Implementación

```css
/* Tokens por defecto — Light Mode está en :root */
/* No requiere clase adicional */
:root {
  --bg-page:        #F8F8F6;   /* Fondo de página */
  --bg-primary:     #FFFFFF;   /* Cards, inputs, nav */
  --bg-secondary:   #F0EFEC;   /* Hover, filter bar, tags */
  --text-primary:   #131210;
  --text-secondary: #5C5A56;
  --text-muted:     #9B9892;
  --border:         #D6D4CE;
  --border-em:      #B2B0AB;
  --interactive:    #1A6FB5;   /* blue-60 */
}

/* El dark mode es quien necesita la clase .dark en <html> */
/* Light es el estado base sin clase adicional */
```

#### Capas de elevación (Light)

```
bg-page      #F8F8F6  ← fondo de página (más oscuro dentro de la escala)
bg-secondary #F0EFEC  ← filter bar, hover states, tags
bg-primary   #FFFFFF  ← cards, modales, inputs, nav
Elevation 1           ← box-shadow: 0 1px 4px rgba(0,0,0,.06)
Elevation 2           ← box-shadow: 0 4px 16px rgba(0,0,0,.08)
Elevation 3           ← box-shadow: 0 8px 32px rgba(0,0,0,.12)
border       #D6D4CE  ← separadores entre elementos
```

#### Reglas Light Mode

- `blue-60 (#1A6FB5)` como color interactivo: cumple ratio 4.5:1 sobre blanco y 4:1 sobre bg-page.
- No usar blanco puro (#FFFFFF) como fondo de página: usar `#F8F8F6` (gray-0) para dar contexto de profundidad.
- Elevación con box-shadow progresiva: nunca con colores de fondo saturados para diferenciar superficies.
- Focus rings: `box-shadow: 0 0 0 2px rgba(26,111,181,.2)` — semitransparente para funcionar sobre bg-primary y bg-secondary.
- Sombras siempre en negro con opacidad, nunca en color.

**✓ Hacer:** Usar gray-0 (#F8F8F6) como fondo de página para que las cards blancas se destaquen visualmente.
**✗ Evitar:** Fondos de color saturado para estructura (ej. nav azul). Los colores son para semántica, no para jerarquía estructural.

---

### Dark Mode

El dark mode no es una inversión de colores: es un sistema de capas donde los fondos más oscuros están abajo y los más claros emergen hacia el usuario.

#### Implementación

```css
/* Toggle manual + detección del sistema */
@media (prefers-color-scheme: dark) {
  :root { /* mismos valores que .dark */ }
}

.dark {
  --bg-page:        #131210;   /* gray-100 */
  --bg-primary:     #1E1D1A;
  --bg-secondary:   #252421;
  --text-primary:   #F0EFEC;   /* gray-10 */
  --text-secondary: #9B9892;   /* gray-40 */
  --text-muted:     #5C5A56;   /* gray-60 */
  --border:         #2E2D2A;   /* gray-80 */
  --border-em:      #3D3C38;
  --interactive:    #6AAAD8;   /* blue-40 */
}

/* JavaScript */
document.documentElement.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
```

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

- `blue-40 (#6AAAD8)` como interactivo: el blue-60 no cumple contraste AA sobre fondos oscuros.
- No usar negro puro (#000000): gray-100 (#131210) aporta calidez y reduce fatiga visual.
- Elevación con fondos más claros progresivamente, no con sombras. Sombras se reducen al 50% de opacidad.
- No invertir imágenes de cartas: tienen colores propios que no deben alterarse.
- Nunca hardcodear hex en componentes: un solo valor fijo rompe el dark mode silenciosamente.

**✓ Hacer:** Guardar la preferencia en localStorage. Reducir sombras al 50% de opacidad vs. light mode.
**✗ Evitar:** Hardcodear cualquier hex en componentes. Invertir imágenes de cartas.

---

### Responsive

El 80% del uso ocurre en mobile (eventos y torneos). La app es el producto principal.

#### Breakpoints

| Breakpoint | Rango | Columnas | Gutter | Margin |
|---|---|---|---|---|
| xs | 320–390px | 4 | 12px | 16px |
| sm | 390–640px | 4 | 16px | 16px |
| md | 640–1024px | 8 | 16px | 24px |
| lg | 1024–1280px | 12 | 16px | 32px |
| xl | >1280px | 12 | 24px | auto |

#### Adaptaciones por componente

| Componente | Web (lg+) | App (xs/sm) | Cambio clave |
|---|---|---|---|
| Top Nav | Logo + search central + auth | Logo + título + 2 íconos | Search → pantalla dedicada |
| Navegación | Sidebar 220px permanente | Bottom tab bar 4 items | Vertical → horizontal fijo |
| Filtros | Barra horizontal sticky inline | Botón → bottom sheet | Inline → modal contextual |
| Grid cartas | 4–6 columnas + sidebar | 2 columnas sin sidebar | Sidebar desaparece |
| Ficha de carta | 2 columnas (8/12 + 4/12) | 1 columna + CTA sticky | CTA → barra inferior |
| Panel usuario | Sidebar nav + contenido | Stack vertical sin sidebar | Sidebar → bottom tabs |
| Modal | Overlay centrado (max 640px) | Bottom sheet 90vh | Overlay → slide desde abajo |
| Tablas | Full width todas las columnas | Scroll horizontal o card view | Priorizar columnas críticas |

#### Bottom Sheet (Mobile)

```css
/* Posición */
position: fixed; bottom: 0; left: 0; right: 0;
max-height: 90vh; border-radius: 12px 12px 0 0;
border-top: 1px solid var(--border);
background: var(--bg-primary);

/* Handle de arrastre */
width: 36px; height: 4px; border-radius: 2px;
background: var(--border); margin: 8px auto 12px;
```

Soportar drag-to-dismiss y cierre al tocar el overlay. Safe area en iOS.

**✓ Hacer:** Diseño mobile-first. Touch targets mínimos 44×44px. Espaciado mínimo 8px entre elementos táctiles.
**✗ Evitar:** Scroll horizontal en toda la página. Modales centrados en pantallas < 640px. Ocultar información crítica detrás de un tap adicional en mobile.

---

### Accesibilidad

WCAG AA por defecto en todos los componentes. La accesibilidad es una restricción de diseño que mejora la experiencia para todos.

#### Checklist WCAG

| Regla | Implementación | Nivel |
|---|---|---|
| Contraste texto | Mínimo 4.5:1 texto normal, 3:1 texto grande (+18px o +14px bold) | AA |
| Contraste UI | Mínimo 3:1 bordes de inputs, íconos interactivos sin texto | AA |
| Focus visible | `box-shadow: 0 0 0 2px rgba(26,111,181,.3)` — nunca `outline: none` sin reemplazo | AA |
| Semántica HTML | Acciones → `<button>`, navegación → `<a>`, formularios → `<label for="">` | A |
| Alt text | Cartas: `alt="Charizard ex — Scarlet & Violet 151 — SIR"`. Decorativas: `alt=""` | A |
| ARIA labels | `aria-label` en íconos sin texto. `role="status" aria-live="polite"` en precios dinámicos | AA |
| Orden de foco | Orden de tabulación = flujo visual de lectura. No usar `tabindex` positivo | A |
| Reduced motion | Todas las animaciones en `@media (prefers-reduced-motion: no-preference)` | AAA |
| Touch targets | Mínimo 44×44px en app. Espaciado mínimo 8px entre targets | AA |
| Texto escalable | Sin `user-scalable=no`. Layout funcional hasta zoom 200% | AA |
| Doble codificación | Nunca comunicar estado solo con color — siempre + ícono o + texto | A |
| Errores formulario | Asociar con `aria-describedby`. No depender solo del color rojo | AA |

#### Focus Ring

```css
/* Aplicar a todos los elementos interactivos */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(26, 111, 181, 0.3);
}

/* Aumentar offset en botones para mayor visibilidad */
button:focus-visible {
  box-shadow: 0 0 0 3px rgba(26, 111, 181, 0.35);
}
```

**✓ Hacer:** Doble codificación para estados semánticos (color + ícono). `role="status"` en precios dinámicos.
**✗ Evitar:** `outline: none` sin reemplazo. `user-scalable=no`. Comunicar error solo con el color rojo.

---

### Contenido

#### Voz y Tono

| Atributo | Descripción | Ejemplo |
|---|---|---|
| **Directo** | Frases cortas. Sin rodeos. | "Pago confirmado" — no "¡Tu pago fue procesado exitosamente!" |
| **Técnico** | Vocabulario del coleccionista: NM, LP, PSA, escrow, listing, set. | "Listing Near Mint" — no "Producto en muy buen estado" |
| **Honesto** | Errores con causa real, no mensajes genéricos. | "Precio mínimo: $500 CLP" — no "Valor inválido" |
| **Neutro** | Sin entusiasmo artificial. Sin emoji en mensajes de sistema. | "Carta agregada a wishlist" — no "¡Añadida a tu colección! 🎉" |

#### Condición de Carta — Estándar

| Condición | Abrev. | Background | Texto | Descripción |
|---|---|---|---|---|
| Mint | M | `teal-10` | `teal-60` | Perfecta. Sin uso. Recién sacada del sobre. |
| Near Mint | NM | `blue-10` | `blue-80` | Casi perfecta. Puede tener leves marcas de mazo. |
| Lightly Played | LP | `amber-10` | `amber-60` | Ligeramente usada. Marcas visibles de cerca. |
| Moderately Played | MP | `amber-10` | `amber-80` | Marcas claras de uso en bordes y superficie. |
| Heavily Played | HP | `red-10` | `red-60` | Desgaste muy visible. Solo para juego casual. |
| Damaged | D | `red-10` | `red-80` | Doblada, rasgada o con daño estructural. |
| Graduado PSA/CGC | + Grado | `gray-100` | `gray-10` (sólido) | Certificada por empresa + grado numérico 1–10. |

La condición siempre se muestra como badge visual + abreviación textual. Nunca solo color.

#### Labels de Acción

**✓ Usar:** "Publicar listing" · "Confirmar compra" · "Ver oferta" · "Agregar a wishlist" · "Editar" · "Pausar" · "Reintentar"
**✗ Evitar:** "Click aquí" · "Enviar" · "OK" · "Continuar" (sin contexto) · "Procesar"

#### Mensajes de Error

**✓ Usar:** "Precio mínimo: $500 CLP" · "El nombre no puede estar vacío" · "Foto demasiado pequeña: mínimo 400×560px"
**✗ Evitar:** "Valor inválido" · "Error en el campo" · "Algo salió mal, intenta de nuevo" · "Error 422"

#### Numeración y Moneda

| Dato | Formato correcto | Formato incorrecto |
|---|---|---|
| Precio CLP | `$48.500 CLP` | `$48500` / `CLP 48.500` |
| Precio USD | `$52.40 USD` | `USD 52.4` / `US$52.40` |
| Porcentaje | `↑ 12.4%` | `+12.4%` / `12,4%` |
| Número de carta | `182/165` | `182 de 165` / `#182` |
| Grado PSA | `PSA 10` / `CGC 9.5` | `PSA-10` / `Grado 10` |
| Fecha relativa | `Hace 2 horas` · `Hace 3 días` | `2026-04-15 14:32` |

---

## Tokens de Componente — Referencia rápida

```css
/* Borders */
--border-default:   1px solid var(--border);
--border-emphasis:  1px solid var(--border-em);
--border-focus:     2px solid var(--interactive);
--border-error:     1px solid var(--danger);
--border-success:   1px solid var(--success);

/* Focus ring */
--focus-ring: 0 0 0 2px rgba(26, 111, 181, 0.3);

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
--btn-radius:     8px;     /* radius-md */

/* Card */
--card-radius:   12px;     /* radius-lg */
--card-padding:  20px;
--card-border:   var(--border-default);

/* Navigation */
--nav-height-web:    48px;
--nav-height-app:    56px;
--bottomnav-height:  56px;
--sidebar-width:    220px;

/* Z-index */
--z-base:     0;
--z-dropdown: 100;
--z-sticky:   200;
--z-overlay:  300;
--z-modal:    400;
--z-toast:    500;
```

---

*Mulligan Design System — v1.0 · 2026 · Tradeit TCG · Basado en Atomic Design + Carbon Design System*
