# Content System — Tradeit TCG

> **Modelo:** Diseño Atómico aplicado al contenido (Brad Frost, adaptado al lenguaje y la copy).
> **Audiencia:** Comunidad TCG hispanohablante (LatAm + España), enfocada en Pokémon TCG para el MVP.
> **Producto:** Marketplace móvil con esencia de app de inversión fintech.
> **Versión:** 1.0
> **Autor:** PM + Product Designer (tríada).
> **Fecha:** 16 de mayo, 2026.

---

## 0. Cómo leer esta guía

El sistema de contenido se organiza en cinco niveles, exactamente análogos al diseño atómico, pero aplicados a unidades de **lenguaje** en lugar de componentes visuales:

| Nivel | En diseño atómico | En este content system |
|---|---|---|
| Átomos | Color, tipografía, ícono | Voz, tono, léxico, números, fechas, etiquetas mínimas |
| Moléculas | Botón, input, badge | CTAs, labels, microcopy, errores, tooltips, una línea de empty state |
| Organismos | Header, card | Tarjeta de carta, bloque de precio, push completo, email transaccional, FAQ |
| Plantillas | Layout sin contenido real | Patrón de "pantalla de detalle", patrón de "dashboard del vendedor" |
| Páginas | Layout con contenido real | Onboarding completo, detalle de Charizard ex 199/197 con copy real |

Cada nivel se compone de los anteriores. Cuando un copywriter o PM redacta un nuevo email, debe poder armarlo combinando los átomos y moléculas ya definidos, sin reinventar voz ni nomenclatura.

---

## 1. Fundamentos (pre-átomos): la marca habla

### 1.1 Propósito de la marca en el contenido
Tradeit TCG ayuda a su comunidad a **tomar mejores decisiones** sobre las cartas que coleccionan, compran, venden o conservan como inversión. Por lo tanto, nuestro contenido debe **informar con rigor, empoderar sin sobreprometer y respetar la pasión** que existe detrás de cada carta.

### 1.2 Pilares de marca (los tres ejes que ordenan toda copy)

1. **Confiable como un broker** — claridad en datos, transparencia en fuentes y timestamps, lenguaje preciso. Nunca prometemos retornos.
2. **Cercano como un compañero de juego** — hablamos el lenguaje del hobby, sin condescendencia. Nada de jerga corporativa.
3. **Práctico como una herramienta** — primero el verbo, después la explicación. La copy es funcional, no decorativa.

### 1.3 Promesa de marca en lenguaje
> *"Los datos que tu colección merece."*

Esta frase no es un eslogan publicitario obligatorio, es la prueba a la que sometemos cualquier texto: si lo que escribimos no aporta a esa promesa, sobra.

---

## 2. ÁTOMOS — Las unidades mínimas del lenguaje

Los átomos no se entregan sueltos al usuario: son las reglas que aplicamos a TODO lo que escribimos. Son innegociables.

### 2.1 Voz (constante)
La voz de Tradeit TCG es **una sola** y no cambia entre pantallas. Es:

- **Informada** — sabemos del juego y del mercado.
- **Directa** — vamos al punto en una frase.
- **Respetuosa con el hobby** — el coleccionismo es una pasión, no una excentricidad.
- **Neutral en lo financiero** — informamos, no recomendamos.
- **En español neutro de LatAm**, con guiños regionales solo cuando aporten cercanía (ver 2.7).

### 2.2 Tono (variable según contexto)
El tono **sí cambia** según el momento del usuario. Definimos un espectro de cinco tonos:

| Contexto | Tono | Ejemplo de matiz |
|---|---|---|
| Onboarding y celebración | Cálido, entusiasta sin gritar | "Bienvenido. Empecemos por las cartas que te interesan." |
| Búsqueda y exploración | Neutro y útil | "23 resultados para 'Charizard'." |
| Datos y precios | Sobrio, casi periodístico | "Precio promedio 30 días: USD 412 (+3,8%)." |
| Errores y bloqueos | Honesto y resolutivo | "No pudimos cargar el precio. Reintentar." |
| Riesgo o sensible (límites, KYC) | Serio, sin alarmar | "Para publicar productos necesitamos verificar tu identidad." |

> **Regla:** Si dudas entre dos tonos, baja un nivel de intensidad. La marca prefiere sobrio a efusivo.

### 2.3 Léxico TCG (vocabulario nuclear del hobby)

Estos términos se usan **en inglés** porque así los usa la comunidad. Castellanizarlos suena ajeno.

- *Single, Sealed, Graded, Booster, ETB, Booster Box, Tin, Promo, Pull, Reverse Holo, Holo, Full Art, Alt Art, Secret Rare, Rainbow Rare, Gold, Trainer Gallery, Hyper Rare, Reprint, Errata, Misprint.*
- *Set, Block, Era, Rotation, Standard, Expanded, Unlimited.*
- *PSA 10, BGS 9.5, CGC 10, Black Label, Pristine, Slab.*
- *NM (Near Mint), LP (Lightly Played), MP (Moderately Played), HP (Heavily Played), DMG (Damaged).*

**Sí traducimos / castellanizamos:**

- "Sobre" → no. Se usa *booster*.
- "Mazo" → sí, junto a *deck*.
- "Carta" → sí, siempre.
- "Edición" → sí, intercambiable con *set* según contexto.

### 2.4 Léxico fintech / mercado (el "twist" de inversión)

Estos términos elevan la percepción de seriedad y son distintivos vs. competidores que solo se presentan como marketplace.

- **Tendencia** — dirección del precio en un período (no usamos "trend").
- **Volatilidad** — siempre acompañada de su explicación en el primer uso por pantalla.
- **Precio promedio 30/60/90 días** — nunca "media", siempre "promedio".
- **Variación** — el delta % vs. período anterior.
- **Histórico** — la serie temporal completa.
- **Volumen** — número estimado de transacciones (con disclaimer de fuente).
- **Watchlist** — sí, en inglés (concepto financiero estándar y conocido por la comunidad). Alternativa: "Mi lista".
- **Alerta de precio** — preferimos esto a "notificación".
- **Portfolio / Mi colección valorizada** — para el modo inversor (post-MVP).

**Términos que evitamos categóricamente:**

- "Inversión segura", "ganancia garantizada", "retorno asegurado" → riesgo regulatorio.
- "Predicción", "pronóstico" → solo "tendencia" o "histórico".
- "Comprar ahora antes de que suba" → llama a la acción especulativa.
- "Crypto-lenguaje" (HODL, moonshot, to the moon) → no es nuestro tono.

### 2.5 Reglas de formato numérico

- **Precios:** símbolo + monto + código ISO en la primera aparición. Ej.: `USD 412,50`. En LatAm usamos coma decimal (`412,50`), no punto.
- **Porcentajes:** un decimal, signo siempre visible. Ej.: `+3,8%`, `−1,2%`. Usar el signo menos tipográfico (`−`, U+2212), no el guion (`-`).
- **Variación temporal:** abreviada con minúscula. `30d`, `60d`, `90d`, `1m`, `3m`, `9m`, `12m`, `1a`.
- **Cantidades grandes:** punto como separador de miles. `12.450 cartas`.
- **Rangos:** con guion corto sin espacios. `USD 50-80`.

### 2.6 Reglas de fecha y hora

- **Fecha corta:** `dd MMM` → `16 may`.
- **Fecha completa:** `dd MMM yyyy` → `16 may 2026`.
- **Hora:** 24h, con `h`. `14:30 h`.
- **Timestamps de datos:** siempre relativos primero ("hace 12 min") y absolutos disponibles en tooltip.
- **Zona horaria:** local del dispositivo por default; advertir explícitamente cuando una hora es UTC.

### 2.7 Regionalismos y neutralidad
Por default usamos **español neutro de LatAm**:

- "Vos", "tú", "usted" → usamos **"tú"** transversalmente.
- "Coger" → nunca; usamos "tomar", "agarrar", "seleccionar".
- "Plata", "guita", "lana" → no en UI; sí permitidos en contenido editorial/redes.
- "Mole", "pendejo", "chido" → no en UI; sí en campañas regionales segmentadas.

> **Decisión:** segmentación regional ocurre en contenido editorial (push de campaña, blog, redes), no en el UI core.

### 2.8 Tratamiento del usuario

- Persona gramatical: **segunda del singular** ("tú").
- Nombre del usuario: lo usamos en saludos personalizados (push, email), nunca en mitad de un flujo funcional ("Bienvenido, Carlos" sí; "Carlos, guardado en tu watchlist" no).
- Género gramatical: usamos **plural neutro o reformulación** cuando aplique. Evitamos "@" y "e" inclusivos en UI core para no afectar lectores de pantalla; sí permitidos en comunicaciones editoriales si la audiencia lo espera.

### 2.9 Mayúsculas y puntuación

- **Sentence case** en títulos, botones, etiquetas. ("Agregar a watchlist", no "Agregar A Watchlist").
- **Sin punto final** en títulos, botones, labels.
- **Con punto final** en frases descriptivas y oraciones completas.
- **Comillas:** angulares «» en contenido editorial largo; rectas " " en UI por compatibilidad.
- **Listas:** sin punto al final si son ítems cortos; con punto si son oraciones.

### 2.10 Glosario expansible
Cada término técnico tiene una **micro-definición de máximo 12 palabras** lista para usarse en tooltips. Catálogo inicial:

- **Volatilidad:** Qué tan rápido sube y baja el precio en un período.
- **Tendencia:** Dirección general del precio en los últimos 30 días.
- **Promedio 30d:** Precio típico de la carta durante los últimos 30 días.
- **PSA 10:** Nota máxima de la gradadora PSA, "estado gema".
- **Reprint:** Nueva impresión de una carta ya existente, suele afectar el precio.
- **Watchlist:** Tu lista privada de cartas a vigilar.
- **Alt Art:** Versión con ilustración alternativa, suele ser más rara y valiosa.

---

## 3. MOLÉCULAS — Combinaciones funcionales mínimas

Las moléculas son pequeñas unidades de copy reutilizables. Cada una tiene una **función única** y una **regla de longitud**.

### 3.1 Botones / CTAs

Regla: **verbo en infinitivo + complemento mínimo**. Máximo 3 palabras.

| Función | Copy | No usar |
|---|---|---|
| Acción principal de búsqueda | "Buscar" | "Buscar ahora" |
| Agregar a lista | "Agregar a watchlist" | "Sumar a mi lista" |
| Publicar producto | "Publicar" | "Publicar mi carta" |
| Configurar alerta | "Crear alerta" | "Activar notificación" |
| Compartir | "Compartir" | "Enviar a un amigo" |
| Acción destructiva | "Eliminar" / "Borrar" | "Quitar para siempre" |
| Confirmación neutra | "Aceptar" | "OK", "Listo" (excepto en celebraciones) |
| Volver | "Volver" | "Atrás", "Regresar" |
| Iniciar sesión | "Iniciar sesión" | "Loguearme" |
| Crear cuenta | "Crear cuenta" | "Registrarme" |

### 3.2 Labels y badges

Regla: **una o dos palabras**, sin verbos.

- Estados de tendencia: `Sube · Estable · Baja`.
- Tags de carta: `Alt Art · Reprint reciente · Promo · Rotación próxima`.
- Estados de listing: `Activo · Pausado · Vendido`.
- Estados de cuenta: `Verificada · Pendiente · Suspendida`.
- Condición de carta: `NM · LP · MP · HP · DMG` (siempre en formato exacto).

### 3.3 Filtros (etiquetas de control)

- "Tipo de producto" → opciones: `Single · Sealed · Graded`.
- "Edición" → "Selecciona una o más ediciones".
- "Rareza" → "Selecciona una o más rarezas".
- "Idioma" → `Inglés · Japonés · Español`.
- "Condición" → "Estado declarado por el vendedor".
- "Tendencia" → `Sube · Baja · Estable (últimos 30d)`.

### 3.4 Microcopy de campos

- Placeholder de búsqueda principal: **"Busca una carta o set"**.
- Placeholder de email: **"tucorreo@ejemplo.com"**.
- Placeholder de password: **"Mínimo 8 caracteres"**.
- Helper text de precio sugerido: **"Te sugerimos un rango basado en el mercado actual."**.

### 3.5 Mensajes de validación y error

Regla: **lo que pasó + cómo resolverlo**. Sin culpar al usuario, sin "Oops".

| Situación | Copy |
|---|---|
| Campo vacío obligatorio | "Este dato es necesario para continuar." |
| Email mal formado | "Revisa el formato del correo." |
| Contraseña débil | "Usa al menos 8 caracteres, una mayúscula y un número." |
| Credenciales inválidas | "Correo o contraseña incorrectos. Vuelve a intentar." |
| Sin conexión | "Sin conexión. Vamos a reintentar cuando vuelvas a estar online." |
| Servicio caído / API externa | "No pudimos actualizar el precio ahora. Mostramos el último dato disponible." |
| Tiempo agotado en scan | "No detectamos la carta. Mejora la luz o intenta de nuevo." |
| Scan con baja confianza | "No estamos 100% seguros. ¿Es alguna de estas?" |
| Sesión expirada | "Tu sesión expiró. Vuelve a iniciar sesión." |
| Rate limit | "Demasiadas solicitudes. Espera un momento y reintenta." |

> **Anti-patrón:** "Algo salió mal" sin contexto. Siempre explicamos qué falló a alto nivel y damos una acción.

### 3.6 Mensajes de éxito y confirmación

Regla: **una frase, sin signos de exclamación múltiples**. La celebración es discreta.

- "Carta agregada a tu watchlist."
- "Alerta creada. Te avisamos cuando el precio cruce USD 400."
- "Publicación activa. Ya aparece en la búsqueda."
- "Cuenta verificada. Listo para publicar."

### 3.7 Empty states (de una línea)

Para empty states largos, ver organismos en sección 4.

- Watchlist vacía: **"Aún no sigues ninguna carta."**
- Sin resultados de búsqueda: **"No encontramos cartas con esos filtros."**
- Sin ventas registradas: **"Todavía no registras ventas."**
- Sin alertas activas: **"No tienes alertas configuradas."**

### 3.8 Tooltips (definición o aclaración)

Regla: **máximo 12 palabras**, no terminan en punto si son una etiqueta.

- Precio promedio 30d: "Promedio de precios de venta durante los últimos 30 días"
- Variación %: "Cambio porcentual respecto al período anterior"
- Fuente: "Origen del dato. Tocá para ver más detalle"
- Confianza de scan: "Qué tan seguros estamos del reconocimiento"

### 3.9 Notificaciones push (formato base)

Estructura: **Título (≤45 caracteres) + Cuerpo (≤120 caracteres)**.

Patrones reutilizables:

- **Alerta de precio:** `Charizard ex sube 8,2%` / `Pasó de USD 380 a USD 412 en las últimas 24h.`
- **Nuevo listing match:** `Nuevo listing en tu watchlist` / `Pikachu VMAX (NM) publicado a USD 145.`
- **Interés en mi listing (vendedor):** `Tu Mewtwo recibió 12 vistas hoy` / `Está USD 20 sobre el promedio del mercado.`
- **Recordatorio de configuración:** `Termina tu perfil de vendedor` / `Faltan 2 pasos para empezar a publicar.`

---

## 4. ORGANISMOS — Bloques de contenido compuestos

Los organismos combinan átomos y moléculas en piezas funcionales completas. Cada uno tiene su propio patrón de copy.

### 4.1 Tarjeta de resultado de búsqueda (texto)

Elementos textuales y orden fijo:

1. Nombre de la carta (línea 1).
2. Número y set (línea 2): `056/197 · Scarlet & Violet`.
3. Rareza + variante (badge).
4. Precio actual (USD 412,50).
5. Variación 30d (`+3,8%` en color de tendencia).

> Sin descripción larga en la tarjeta. El detalle vive en la vista individual.

### 4.2 Bloque de precio en vista detalle

Estructura textual canónica:

```
Precio actual
USD 412,50 · Actualizado hace 12 min · Fuente: TCGPlayer

Promedios
30 días  USD 398,20  +3,8%
60 días  USD 376,10  +9,7%
90 días  USD 354,90  +16,2%

Tendencia: Sube  ·  Volatilidad: Media
```

Reglas:
- El número grande siempre primero.
- Las fuentes y el timestamp siempre visibles (no escondidos en un info-icon).
- Comparaciones siempre con signo (+/−).

### 4.3 Bloque del gráfico histórico

- Título: **"Historial de precios"**.
- Selector de período: `1m · 3m · 9m · 12m` (en este orden estricto).
- Leyenda mínima: línea de precio + (opcional toggle) promedio móvil 30d.
- Tooltip al tocar punto: `16 may 2026 · USD 405,80 · Vol. estimado: 47`.
- Pie de bloque: **"Datos consolidados de TCGPlayer y PriceCharting. Última sincronización: hace 12 min."**

### 4.4 Empty states (extendidos, con CTA)

**Watchlist vacía:**
> **Aún no sigues ninguna carta**
> Agrega cartas a tu watchlist para ver su precio y recibir alertas cuando se mueva.
> **[Buscar una carta]**

**Sin resultados de búsqueda:**
> **No encontramos cartas con esos filtros**
> Probá quitar un filtro o usar el scan para identificar una carta física.
> **[Limpiar filtros] [Escanear carta]**

**Sin ventas registradas (vendedor):**
> **Todavía no registras ventas**
> Cuando concretes una venta, registrala acá para llevar el control de tus ingresos.
> **[Registrar venta]**

**Sin alertas configuradas:**
> **No tienes alertas configuradas**
> Crea una alerta para enterarte cuando una carta cambie de precio.
> **[Crear primera alerta]**

### 4.5 Bloques educativos (modulares, reutilizables)

Cada bloque vive como tooltip extendido o bottom-sheet, no como pantalla aparte. Estructura: **título de pregunta + 2 a 4 líneas + enlace opcional**.

**"¿Qué es la volatilidad?"**
> La volatilidad mide qué tanto sube y baja el precio de una carta en un período. Una volatilidad alta significa precios menos predecibles; una baja, precios más estables. Para colecciones de largo plazo, suele preferirse baja volatilidad.

**"¿Cómo calculamos el precio?"**
> Mostramos el precio de mercado consolidando datos de TCGPlayer y PriceCharting. Para cada carta priorizamos la fuente con mejor cobertura: TCGPlayer en singles modernos y PriceCharting en sealed y graded. La hora de última actualización siempre está visible.

**"¿Qué significan los promedios 30/60/90?"**
> Son los precios promedio de las ventas registradas en los últimos 30, 60 y 90 días. Te ayudan a entender si el precio actual es alto, bajo o en línea con el comportamiento reciente.

### 4.6 Disclaimers (obligatorios y de baja fricción)

Versión corta (al pie de bloques de precio y alertas):
> **Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra.**

Versión completa (en Términos y en onboarding):
> Los precios, tendencias e históricos mostrados son referenciales y provienen de fuentes públicas. Tradeit TCG no garantiza precisión ni continuidad de los datos, y no constituye asesoría de inversión. Las decisiones de compra y venta son responsabilidad de cada usuario.

### 4.7 Email transaccional (plantilla)

**Asunto:** verbo + objeto concreto. Ej.: `Tu alerta de Charizard ex se activó`.

**Cuerpo (estructura fija):**
- Saludo: `Hola, [nombre].`
- Una línea de contexto: qué pasó y por qué llega este email.
- Bloque de dato relevante (precio, listing, etc.) con números formateados según átomos.
- Un único CTA primario.
- Pie con enlace de gestión de notificaciones + dirección legal.

### 4.8 Cards de onboarding (3 a 5 pantallas, max 2 líneas cada una)

1. **"Sigue las cartas que te importan."** *Agrega cartas a tu watchlist y mira cómo se mueven en el mercado.*
2. **"Datos como los de un trader."** *Precios, tendencias e históricos consolidados de fuentes oficiales.*
3. **"Identifica cartas en segundos."** *Apunta con la cámara y te decimos qué carta es y cuánto vale.*
4. **"Compra o vende cuando estés listo."** *Publicá tus cartas o explorá las que otros publicaron.*

### 4.9 Onboarding por rol (preguntas y opciones)

Pregunta: **"¿Cómo vas a usar Tradeit?"**

Opciones (selección múltiple permitida):
- **Sigo cartas y precios** *(perfil comprador / inversor)*
- **Compro cartas a otros usuarios** *(perfil comprador)*
- **Vendo cartas propias** *(perfil vendedor)*
- **Hago ambas cosas** *(perfil híbrido)*

Pie: **"Podés cambiar esto cuando quieras desde Configuración."**

---

## 5. PLANTILLAS — Patrones de contenido por pantalla

Las plantillas describen **qué bloques de contenido aparecen y en qué orden**, sin redactar texto final.

### 5.1 Plantilla: Resultados de búsqueda
1. Barra de búsqueda (átomo: placeholder canónico).
2. Chips de filtros activos (moléculas: labels).
3. N° de resultados + ordenamiento ("23 resultados · Ordenar por: Relevancia").
4. Lista de tarjetas de resultado (organismo 4.1).
5. Empty state si N=0 (organismo 4.4).

### 5.2 Plantilla: Detalle de carta
1. Imagen + nombre + número + set (átomos + molécula).
2. Bloque de precio (organismo 4.2).
3. Gráfico histórico (organismo 4.3).
4. Variantes (lista compacta de tarjetas).
5. Listings activos en Tradeit (cuando los haya).
6. Bloque educativo contextual (organismo 4.5).
7. Disclaimer corto (organismo 4.6).
8. Acciones flotantes: Watchlist · Alerta · Compartir · Publicar.

### 5.3 Plantilla: Dashboard del comprador
1. Saludo personalizado + resumen ("Hola, Carlos. Tu watchlist tiene 12 cartas.").
2. Resumen: total watchlist, alertas activas, gasto declarado del mes.
3. Watchlist con mini-tendencias.
4. Alertas recientes.
5. Recomendaciones (placeholder hasta tener motor de ML).

### 5.4 Plantilla: Dashboard del vendedor
1. Saludo personalizado + resumen ("Hola, Camila. Tienes 8 publicaciones activas.").
2. Resumen: listings activos, ventas declaradas del mes, ingresos acumulados.
3. Lista de listings con estado y vistas.
4. CTA principal: "Publicar nuevo producto".
5. Bloque educativo: "Cómo fijar un buen precio" (organismo 4.5).

### 5.5 Plantilla: Email "alerta disparada"
1. Asunto con verbo + objeto.
2. Saludo personalizado.
3. Una línea de contexto.
4. Bloque de precio resumido (organismo 4.2 versión email).
5. CTA único.
6. Pie con gestión de notificaciones.

### 5.6 Plantilla: Push con cambio de precio
- Título: `[Nombre carta abreviado] [verbo de tendencia] [%]`
- Cuerpo: `Pasó de [precio antes] a [precio ahora] en [período].`

---

## 6. PÁGINAS — Ejemplos canónicos con contenido real

### 6.1 Página de ejemplo: Detalle de "Charizard ex 199/197"

> **Charizard ex**
> 199/197 · Scarlet & Violet · Special Illustration Rare
>
> **Precio actual**
> USD 412,50 · Actualizado hace 12 min · Fuente: TCGPlayer
>
> **Promedios**
> 30d  USD 398,20  +3,8%
> 60d  USD 376,10  +9,7%
> 90d  USD 354,90  +16,2%
>
> Tendencia: Sube  ·  Volatilidad: Media
>
> **Historial de precios** *(selector: 1m · 3m · 9m · 12m)*
> Datos consolidados de TCGPlayer y PriceCharting. Última sincronización: hace 12 min.
>
> *¿Qué es la volatilidad?* — La volatilidad mide qué tanto sube y baja el precio de una carta en un período…
>
> **Disponible en Tradeit (3)**
> Camila R. · NM · USD 405 · Santiago, CL
> Diego P. · LP · USD 380 · CDMX, MX
> Mateo S. · NM · USD 410 · Buenos Aires, AR
>
> [Agregar a watchlist]  [Crear alerta]  [Compartir]
>
> *Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra.*

### 6.2 Página de ejemplo: Empty state global (watchlist nueva)

> **Aún no sigues ninguna carta**
> Agrega cartas a tu watchlist para ver su precio y recibir alertas cuando se mueva.
> **[Buscar una carta]  [Escanear carta]**

### 6.3 Página de ejemplo: Push de alerta de precio

> **Charizard ex sube 8,2%**
> Pasó de USD 380 a USD 412 en las últimas 24h. Tocá para ver detalle.

### 6.4 Página de ejemplo: Email de bienvenida

> **Asunto:** Bienvenido a Tradeit TCG
>
> Hola, Carlos.
>
> Tu cuenta está lista. Ya puedes seguir cartas, ver sus históricos y configurar alertas para que no te pierdas un movimiento de mercado.
>
> Para empezar, te sugerimos agregar a tu watchlist las cartas que más te interesen.
>
> **[Explorar el catálogo]**
>
> ¿Vas a vender? Verifica tu identidad desde Configuración y publica tus primeras cartas.
>
> *Recibís este correo porque creaste una cuenta en Tradeit TCG. Podés ajustar tus notificaciones en cualquier momento.*

### 6.5 Página de ejemplo: Confirmación post-publicación (vendedor)

> **Publicación activa**
> Charizard ex (NM) está visible en la búsqueda y en el feed.
> **Tu precio:** USD 410  ·  **Precio promedio del mercado:** USD 398
>
> Te avisaremos cuando alguien lo agregue a su watchlist.
>
> [Ver publicación]  [Publicar otro]

---

## 7. Voz adaptada a la audiencia (matrices por persona)

### 7.1 Comprador / Inversor (Diego)
- Privilegiamos datos sobre adjetivos.
- Tono cercano al de un terminal financiero.
- Léxico fintech permitido sin sobre-explicar (sabe qué es volatilidad).
- Notificaciones útiles, no celebratorias.

### 7.2 Vendedor / Hobbyista (Camila)
- Lenguaje operativo y motivador.
- Explicamos métricas que ayudan a fijar precio.
- Notificaciones de actividad ("vistas", "agregados a watchlist") para mantener engagement.
- Educación implícita sobre dinámica de precios.

### 7.3 Híbrido / Player (Mateo)
- Cambio de rol explícito en UI; copy del dashboard se adapta sin perder consistencia.
- Espacio para verbos de las dos caras: comprar, vender, registrar, seguir.
- Atajos en lugar de explicaciones largas; este usuario es experto del hobby.

---

## 8. Anti-patrones (lo que nunca hacemos)

1. **No usamos lenguaje especulativo** ("comprá ahora antes de que suba"). Informamos, no incitamos.
2. **No prometemos precisión absoluta** en datos de terceros sin disclaimer.
3. **No usamos jerga corporativa** ("sinergia", "stakeholder", "experiencia 360°"). No es nuestro registro.
4. **No abusamos de signos de exclamación.** Una vida diaria de copy puede llevar 0.
5. **No infantilizamos con emojis decorativos** en UI core. Sí permitidos en push de campaña, redes, blog (con criterio).
6. **No usamos "Oops" ni "Ups"** en errores. Es paternalista.
7. **No combinamos castellanizaciones forzadas** ("postear", "scrollear", "trackear"). Si el inglés es el estándar del hobby, lo respetamos; si hay buen equivalente en español, lo usamos.
8. **No personificamos la app** ("Estoy buscando…"). Es una herramienta, no un asistente con personalidad.
9. **No prometemos disponibilidad infinita** de listings ni de stock de terceros.
10. **No usamos copy que culpa al usuario** ("Ingresaste mal el correo"). Decimos qué pasó.

---

## 9. Gobernanza del content system

### 9.1 Roles
- **Product Designer:** dueña del repositorio de copy, integra con el design system.
- **PM:** valida estrategia y prioriza expansiones.
- **Copywriter / UX Writer (cuando exista el rol):** redacta, modera y propone evoluciones.
- **Tech Lead:** define cómo viven las copys en código (sistema i18n) y revisa impactos.

### 9.2 Repositorio único de verdad
Toda copy vive en archivos `i18n` versionados por idioma. Cada string tiene:
- Clave estable.
- Contexto (pantalla / componente).
- Notas para traductores.
- Límite de caracteres si aplica.

### 9.3 Ritual de revisión
- Revisión semanal de copys nuevas propuestas (15 min en design sync).
- Cualquier cadena de UI nueva requiere aprobación del owner de contenido.
- Cambios masivos pasan por A/B test cuando tocan funnels (registro, primera publicación, primera alerta).

### 9.4 Internacionalización
Diseñamos para multi-idioma desde el día 1: claves abstractas, sin texto hardcodeado, longitud +30% prevista para potenciales traducciones a portugués e inglés en fases siguientes.

### 9.5 Accesibilidad de contenido
- Toda imagen lleva texto alternativo (alt) descriptivo, redactado siguiendo átomos.
- Mensajes críticos no dependen solo del color (ej.: tendencia siempre con flecha + signo, no solo verde/rojo).
- Lectores de pantalla: probar TalkBack en pantallas críticas (búsqueda, detalle, scan).

---

## 10. Roadmap del content system

**v1.0 (MVP):** este documento + biblioteca de strings básica en español neutro.

**v1.1:** glosario interactivo público + página de ayuda y educación financiera básica.

**v1.2:** expansión a portugués (BR) y revisión de regionalismos.

**v2.0:** integración de variantes por persona (copy dinámica para comprador vs. vendedor en mismas pantallas), pruebas A/B sistemáticas, voz en notificaciones inteligentes.

**v3.0:** content system multi-juego — extensión del léxico para Magic, One Piece, Yu-Gi-Oh!, manteniendo voz y tono.

---

## 11. Anexos

### Anexo A — Checklist rápida antes de publicar copy nueva
- [ ] Respeta voz y los tres pilares de marca.
- [ ] Tono ajustado al contexto de la pantalla.
- [ ] Sin promesas financieras ni lenguaje especulativo.
- [ ] Formato numérico y de fecha correctos.
- [ ] Largo dentro de los límites de la molécula.
- [ ] Sentence case y puntuación según átomos.
- [ ] Probada con el lector de pantalla si es crítica.
- [ ] Tiene clave i18n y contexto documentado.
- [ ] No usa términos del bloque "anti-patrones".

### Anexo B — Convenciones de nomenclatura de claves i18n
- `screen.{nombre}.{elemento}.{variante}`
- Ej.: `screen.cardDetail.priceBlock.lastUpdated`.
- Ej.: `component.button.addToWatchlist`.
- Ej.: `notification.priceAlert.title`.

### Anexo C — Plantilla para proponer una nueva molécula
- Nombre y función.
- Contexto donde aparece.
- Variantes necesarias.
- Largo objetivo / máximo.
- Ejemplos buenos y malos.
- Dependencias con otros átomos/moléculas.

---

*Documento vivo. Próxima revisión: tras primer testeo con usuarios reales del MVP. Owner: Product Designer + PM.*
