# PRD — Tradeit TCG (MVP v1.0)

> **Producto:** Tradeit TCG — App mobile (React Native, Android first) para la comunidad de Trading Card Games.
> **Alcance MVP:** Pokémon TCG únicamente. Otros juegos (Magic, One Piece, Yu-Gi-Oh!, Lorcana, etc.) se integrarán en fases incrementales posteriores.
> **Autor:** Carlos San Martín — Senior Product Owner / Product Manager
> **Fecha:** 16 de mayo, 2026
> **Versión:** 1.0
> **Estado:** Draft for Review (Tríada: PM + Tech Lead + Product Designer)

---

## 1. Resumen Ejecutivo

Tradeit TCG es una aplicación móvil que combina dos esencias en un mismo producto: un **marketplace P2P** de cartas y productos de Trading Card Games, y una **app de inversión tipo fintech (Trader/Invest)** orientada al monitoreo de precios, volatilidad, tendencias e históricos del mercado de coleccionables.

El MVP entrega la capa fundacional para validar el modelo: búsqueda inteligente de cartas Pokémon, datos de mercado en tiempo (casi) real, perfiles diferenciados para compradores y vendedores, panel de seguimiento de operaciones y reconocimiento de cartas mediante escaneo. Las funcionalidades transaccionales (pasarela de pagos, escrow, envíos) se preparan en infraestructura pero **no se liberan en v1.0**; el MVP valida descubrimiento, datos de mercado y matching oferta/demanda.

---

## 2. Visión y Objetivos

### 2.1 Visión de Producto
Convertirse en la plataforma de referencia en Latinoamérica e iberoamérica para la comunidad TCG, donde un coleccionista puede tomar decisiones de compra, venta e **inversión** con la misma calidad de datos que un trader bursátil tiene sobre un activo financiero.

### 2.2 Objetivos del MVP
1. Validar la propuesta de valor "datos de mercado de calidad financiera para coleccionistas".
2. Construir base de usuarios segmentada (comprador / vendedor / híbrido).
3. Probar el motor de búsqueda + escaneo como vector principal de descubrimiento.
4. Establecer la integración robusta con tres fuentes de datos oficiales (Pokémon TCG API, TCGPlayer, PriceCharting).
5. Medir señales de intención de transacción para priorizar la siguiente fase (pagos + escrow).

### 2.3 KPIs principales del MVP
- **Activación:** % de usuarios registrados que completan ≥ 1 búsqueda + ≥ 1 vista de detalle en los primeros 7 días.
- **Engagement:** Sesiones por usuario / semana, tiempo en pantalla de detalle de carta.
- **Datos:** Cobertura de catálogo Pokémon (% de cartas con precio actualizado <24h).
- **Scan:** % de escaneos exitosos (match con catálogo) sobre escaneos intentados.
- **Marketplace:** Listings activos / usuario vendedor; watchlists / usuario comprador.
- **Calidad de datos:** Latencia p95 de actualización de precios; tasa de errores de API por proveedor.

---

## 3. Problema y Oportunidad

El mercado TCG es altamente fragmentado: los precios viven en TCGPlayer (US), PriceCharting (sealed), CardMarket (EU), eBay, grupos de WhatsApp/Discord y foros. Los coleccionistas:
- No tienen una vista unificada de precio histórico y volatilidad.
- Negocian sin información de mercado (asimetría de información que perjudica al comprador no experto).
- Carecen de herramientas para identificar oportunidades de inversión (cartas con tendencia alcista, reprints, rotaciones de set).

**Oportunidad:** un mercado de coleccionables creciente con perfil de inversor que aún no encuentra producto nativo mobile que combine *marketplace + analytics financieros*.

---

## 4. Usuarios y Personas

### 4.1 Persona A — "El Comprador / Inversor" (Diego, 28 años)
- Compra cartas para colección y para apreciar en valor.
- Vigila 20–50 cartas en watchlist.
- Toma decisiones con base en históricos y tendencias.
- Necesidad clave: detectar oportunidades + comparar precios + alertas.

### 4.2 Persona B — "El Vendedor / Hobbyista" (Camila, 34 años)
- Hace abrir-y-vender de boosters; revende singles.
- Necesita publicar rápido, conocer precio de mercado al fijar precio.
- Necesidad clave: pricing inteligente + listado rápido (idealmente vía scan) + tracking de ingresos.

### 4.3 Persona C — "El Híbrido / Player Competitivo" (Mateo, 22 años)
- Compra y vende para armar mazos y financiar el hobby.
- Cambia frecuentemente entre rol comprador y vendedor.
- Necesidad clave: alternar perfiles sin fricción.

> **Decisión de producto:** un usuario puede activar **ambos perfiles** (comprador y vendedor) sobre una sola cuenta. Los flujos de onboarding preguntan rol primario para personalizar la experiencia inicial, pero el segundo rol se activa con un toggle desde Configuración.

---

## 5. Alcance del MVP

### 5.1 Dentro del alcance (In-scope)
- Registro / login de usuarios (email + OAuth Google + Apple opcional).
- Selección y configuración de rol (Comprador / Vendedor / Ambos).
- Catálogo Pokémon TCG completo, sincronizado con fuentes oficiales.
- Búsqueda de cartas por nombre con autocomplete.
- Filtros: edición (set), tipo de producto (Single / Sealed / Graded), rareza, número, idioma, condición.
- Vista detalle de carta con datos de mercado, históricos y gráfico de 1 año (controles 1/3/9/12 meses).
- Escaneo de carta (cámara) con reconocimiento y match contra catálogo.
- Watchlist (favoritos) y alertas de precio básicas.
- Listado de productos en venta por parte de usuarios (publicación + visualización en feed/búsqueda).
- Panel del comprador: historial de seguimiento, watchlist, gasto acumulado simulado/declarado.
- Panel del vendedor: productos publicados, "ventas" registradas (auto-declaradas en MVP), ingresos acumulados.
- Notificaciones push (alertas de precio, nuevos listados que matchean watchlist).

### 5.2 Fuera del alcance del MVP (Out-of-scope)
- Pasarela de pagos integrada y escrow (planificado fase 2).
- Gestión de envíos y logística.
- Sistema de reputación / reviews bidireccional (planificado fase 2).
- Chat in-app (fase 2).
- Otros TCG (Magic, Yu-Gi-Oh!, One Piece, Lorcana) → fase 3+.
- Versión iOS (post-MVP, prevista fase 2).
- Subastas, bundles, ofertas/contraofertas (fase 3).
- Wallet, conversión de divisas en producto.

### 5.3 Supuestos
- TCGPlayer y PriceCharting otorgarán acceso API (TCGPlayer requiere aprobación de partnership; ver sección 11).
- El usuario MVP acepta resolver pagos y envíos por fuera de la app (la app actúa como vitrina + matching).
- Disponibilidad inicial: Android 9+ (API 28+).
- Idioma: español (Chile/LatAm) en UI; nombres de cartas en inglés como source-of-truth (con campo localizable a futuro).

---

## 6. Requisitos Funcionales

### 6.1 Registro y Autenticación

**RF-1.1 Registro de usuario**
- Inputs: email, password, nombre/alias, país, fecha de nacimiento (≥18 para flujos de venta).
- Métodos: email + password, Google Sign-In, Apple Sign-In (preparado).
- Verificación de email obligatoria antes de habilitar publicación de productos.
- Términos y política de privacidad aceptados explícitamente (timestamp + versión).

**RF-1.2 Selección de rol**
- Tras verificación, el usuario elige: Comprador / Vendedor / Ambos.
- Rol primario define dashboard de inicio; rol secundario activable desde Configuración.

**RF-1.3 Login y recuperación**
- Login con email/contraseña, biometría (face/touch) opcional para retorno.
- Forgot password vía email con token de un solo uso (15 min de vida).
- Sesiones con refresh token rotatorio; logout remoto desde Configuración.

**RF-1.4 KYC ligero (vendedores)**
- Para activar el perfil vendedor: nombre completo + país + teléfono verificado por SMS (preparar para futuro KYC reforzado en fase con pagos).

---

### 6.2 Búsqueda y Filtros

**RF-2.1 Búsqueda por nombre**
- Input con autocompletado (sugerencias a partir del 2° carácter).
- Tolerancia a typos (fuzzy search) y normalización de tildes/mayúsculas.
- Historial de búsquedas recientes por usuario.

**RF-2.2 Filtros aplicables**
- **Tipo de producto:** Single Card / Sealed (booster, ETB, box) / Graded (PSA, BGS, CGC).
- **Edición / Set:** lista oficial de sets Pokémon (selección múltiple).
- **Rareza:** Common, Uncommon, Rare, Holo Rare, Ultra Rare, Secret Rare, Promo, etc.
- **Número de carta** dentro del set.
- **Idioma:** inglés, japonés, español (cuando aplique).
- **Condición** (solo para listings de usuarios): NM, LP, MP, HP, DMG.
- **Rango de precio** (slider).
- **Tendencia** (sube / baja / estable últimos 30d).

**RF-2.3 Ordenamiento de resultados**
- Relevancia (default), precio asc/desc, tendencia, fecha de release, popularidad (vistas/watchlist).

**RF-2.4 Estados de resultado**
- Vacío (sin resultados): mensaje + sugerencia de ampliar filtros / probar scan.
- Con resultados: lista con tarjetas que muestran imagen, nombre, número, set, rareza, precio actual y delta % 30d.

---

### 6.3 Scan Card (Reconocimiento por Cámara)

**RF-3.1 Captura**
- Acceso a cámara con guía visual (frame rectangular tipo "scanner").
- Captura automática al detectar carta enmarcada y enfocada, con botón manual de respaldo.
- Permite múltiples capturas en sesión (modo batch para vendedores).

**RF-3.2 Reconocimiento**
- OCR sobre nombre + número de carta + set symbol.
- Reconocimiento visual (image matching) contra base de imágenes oficial.
- Confianza mínima configurable (umbral inicial 80%); por debajo, devolver top-3 candidatos para elección manual.

**RF-3.3 Resultado**
- Identificación → vista de detalle de carta (RF-4) precargada.
- Opción "Agregar a watchlist" o "Publicar en venta" desde el resultado.
- Si no hay match: opción de búsqueda manual y "Reportar carta faltante".

**RF-3.4 Performance**
- Tiempo p95 de reconocimiento <3 segundos (procesamiento en backend; on-device opcional para futuro).

---

### 6.4 Vista Detalle de Carta

**RF-4.1 Información de la carta**
- Imagen oficial en alta resolución (fuente: Pokémon TCG API).
- Nombre, número (#/total), set/edición, rareza, ilustrador, tipo, HP (si aplica), idioma.
- Tags de mercado: "Reprint reciente", "Rotación próxima", "Promo evento", etc. (curados automáticamente cuando hay metadata disponible).

**RF-4.2 Datos de mercado**
- Precio actual (last sale o market price según fuente).
- Precios promedio: **30 / 60 / 90 días**.
- Volatilidad (desviación estándar normalizada del período).
- Tendencia: indicador visual (↑ verde / ↓ rojo / → gris) con % de cambio 30d.
- Volumen estimado de transacciones (cuando la fuente lo provee).
- Fuente de precio claramente etiquetada (TCGPlayer, PriceCharting) con timestamp de última actualización.

**RF-4.3 Gráfico histórico de precio**
- Gráfico de línea, 1 año por default.
- Controles de período: **1 mes / 3 meses / 9 meses / 12 meses**.
- Eje Y con escala adaptativa; eje X con marcas temporales coherentes con el período.
- Tooltip al tocar un punto: fecha + precio + (si disponible) volumen.
- Línea/banda de promedio móvil 30d superpuesta (toggle on/off).

**RF-4.4 Variantes**
- Listado de variantes (holo, reverse holo, full art, alt art, gold, rainbow, graded por nota PSA 8/9/10, etc.) cada una con su propio precio y mini-tendencia.

**RF-4.5 Listings de usuarios**
- Sección "Disponible en Tradeit": listados activos publicados por vendedores de la plataforma con su precio, condición, ubicación y vendedor.
- Comparador rápido vs. precio de mercado (delta %).

**RF-4.6 Acciones**
- Agregar a watchlist.
- Configurar alerta de precio (sube/baja X% o cruza umbral).
- Compartir (deep link).
- Publicar en venta (solo si rol vendedor activo).

---

### 6.5 Perfil Comprador

**RF-5.1 Dashboard del comprador**
- Watchlist: cartas seguidas, precio actual, delta desde que se agregaron.
- Alertas activas y disparadas recientemente.
- "Mi seguimiento": cartas/productos marcados como "comprados" (declarado por el usuario en MVP) con precio pagado registrado.
- Gasto acumulado: suma de compras declaradas en período (mes / año / total).
- Recomendaciones (heurísticas iniciales: cartas con tendencia alcista similares a watchlist).

**RF-5.2 Configuración del comprador**
- Preferencias de notificación (push, email).
- Categorías de interés (sets favoritos).
- Moneda preferida de visualización (CLP, USD, MXN, ARS, EUR — conversión solo visual).
- Privacidad de watchlist (privada / pública).

---

### 6.6 Perfil Vendedor

**RF-6.1 Dashboard del vendedor**
- Productos publicados activos (con estado: visible / pausado / vendido).
- "Mis ventas": registro de ventas declaradas (manual en MVP), con monto, fecha y producto.
- Ingresos acumulados: suma de ventas declaradas (mes / año / total).
- Visualizaciones y "interés" recibido por listing (vistas, agregados a watchlist por otros).

**RF-6.2 Publicación de producto**
- Wizard: identificar carta/producto (búsqueda o scan) → variante → condición → cantidad → precio sugerido (pre-llenado con precio de mercado) → fotos propias opcionales → ubicación → publicar.
- Validación: precio dentro de rango razonable (alerta si se aleja >50% del precio de mercado).
- Edición / pausa / eliminación de listings.

**RF-6.3 Configuración del vendedor**
- Datos de contacto (teléfono / canal preferido — WhatsApp, Instagram, Discord en MVP, pre-pagos).
- Política de envíos declarada (texto libre).
- Calendario de disponibilidad (texto libre).

---

### 6.7 Notificaciones

**RF-7.1 Tipos**
- Alertas de precio (watchlist).
- Nuevos listados que matchean watchlist.
- Interés en mis listados (vendedor).
- Sistema (verificación, recuperación, novedades).

**RF-7.2 Canales**
- Push (FCM en Android).
- Email transaccional (Resend / SendGrid).
- In-app inbox.

---

## 7. Requisitos No Funcionales

### 7.1 Performance
- Tiempo de carga inicial app <3s en gama media Android.
- Tiempo p95 de búsqueda <800ms.
- Gráfico histórico se renderiza en <500ms (datos cacheados).
- Scan card p95 <3s end-to-end.

### 7.2 Disponibilidad y SLA
- Backend con objetivo de uptime mensual ≥99.5% en MVP.
- Degradación elegante: si una fuente externa cae, mostrar último dato cacheado con badge de "datos no actualizados" + timestamp.

### 7.3 Escalabilidad
- Diseño para soportar 50.000 usuarios activos mensuales y 1M de cartas/listings en MVP sin re-arquitectura.

### 7.4 Seguridad
- HTTPS end-to-end, certificate pinning.
- Tokens JWT cortos + refresh tokens rotatorios.
- Datos sensibles (tokens de OAuth) cifrados en Keychain/Keystore.
- Rate limiting por IP y por usuario.
- Cumplimiento Ley 19.628 (Chile) y GDPR-friendly por diseño (consentimiento explícito, derecho a borrado, exportación de datos).

### 7.5 Observabilidad
- Logs estructurados centralizados.
- Trazas distribuidas (tracing).
- Métricas de negocio + métricas técnicas con dashboards.
- Alertas operacionales (PagerDuty / Opsgenie equivalente).

### 7.6 Accesibilidad
- Cumplimiento WCAG 2.1 AA donde aplique a mobile (contraste, targets táctiles ≥44dp, soporte lector de pantalla TalkBack en Android).

### 7.7 Internacionalización
- UI en español por default; arquitectura preparada para multi-idioma (i18n keys desde día 1).
- Manejo de monedas con conversión visual basada en feed diario.

---

## 8. Integraciones con APIs Oficiales

### 8.1 Pokémon TCG API ([pokemontcg.io](https://pokemontcg.io))
- **Uso:** catálogo maestro de cartas (imagen oficial, set, rareza, número, tipo, atributos, ilustrador).
- **Modelo:** sincronización inicial completa + delta diario.
- **Autenticación:** API Key (gratuita, registro en developer portal).
- **Rate limit:** 20.000 req/día gratis; sin contar consultas cacheadas en nuestro backend.
- **Notas:** Es la fuente más completa para metadata oficial; **no provee precios de mercado**.

### 8.2 TCGPlayer API
- **Uso:** precios de mercado (low, mid, high, market price) para singles y sealed.
- **Modelo:** acceso restringido; requiere solicitud y aprobación de partnership.
- **Autenticación:** OAuth 2.0 (client credentials).
- **Rate limit:** definido por contrato.
- **Riesgo:** TCGPlayer cerró su programa público de API en años recientes y opera por afiliación. **Acción crítica:** iniciar solicitud antes del kickoff técnico; en paralelo, contemplar fuentes alternativas o scraping ético respetando ToS (PriceCharting, Cardmarket, JustTCG).
- **Plan B:** [JustTCG API](https://justtcg.com) ha emergido como alternativa con cobertura competitiva.

### 8.3 PriceCharting API
- **Uso:** precios y datos históricos especialmente fuertes en **sealed** y **graded** (PSA/BGS/CGC).
- **Modelo:** API REST de pago.
- **Autenticación:** Token.
- **Notas:** Excelente cobertura histórica de cartas vintage y sellados. Complementario a TCGPlayer.

### 8.4 Estrategia de fusión de datos
- Para cada carta se mantiene un **registro consolidado** con precios provenientes de las distintas fuentes, etiquetados y con timestamp.
- El "precio mostrado por default" se calcula por reglas: para singles modernos → TCGPlayer market price; para sealed/graded → PriceCharting; con fallback configurable.
- Histórico de precios se persiste **internamente** desde el día uno para no depender de la disponibilidad de históricos del proveedor (ver sección 9.4).

---

## 9. Arquitectura y Stack Tecnológico

### 9.1 Recomendación de stack

**Frontend mobile (React Native)**
- **Framework:** React Native 0.74+ con la **New Architecture** habilitada (Fabric + TurboModules) para mejor performance.
- **Distribución:** **Expo (managed/bare híbrido)** — recomendado usar Expo con bare workflow para tener acceso a módulos nativos (cámara, ML) sin perder OTA updates (Expo Updates / EAS).
- **Lenguaje:** TypeScript estricto.
- **Navegación:** React Navigation 7.
- **Estado:** Zustand para estado local + TanStack Query (React Query) para cache de datos remotos.
- **Forms:** React Hook Form + Zod.
- **Networking:** Axios o `fetch` envuelto + interceptores para auth/retry.
- **Charts:** Victory Native XL (basada en Skia, alto rendimiento, ideal para gráfico histórico con interacción) o React Native Skia + librería custom.
- **Cámara/Scan:** `react-native-vision-camera` v4 + frame processors con MLKit (Google) para OCR + TensorFlow Lite para image classification (opcional on-device).
- **Push:** Firebase Cloud Messaging (FCM) vía `@react-native-firebase/messaging`.
- **Analytics producto:** PostHog o Amplitude (eventos custom).
- **Crash reporting:** Sentry.
- **Almacenamiento local:** MMKV (más rápido que AsyncStorage) para cache, SecureStore/Keychain para tokens.

**Backend (BFF + Servicios)**
- **Runtime/Lenguaje:** Node.js 20 + TypeScript, o Python 3.12 + FastAPI. Recomendación: **Node.js + NestJS** para alineación con stack frontend o **Python + FastAPI** si el equipo tiene fortaleza en data science para el motor de pricing/scan.
- **API:** REST (OpenAPI documentado) + GraphQL opcional para queries flexibles desde mobile (Apollo Server). Recomendación inicial: REST + endpoints agregadores BFF.
- **Auth:** Auth0, Clerk o Supabase Auth para acelerar el MVP (luego migrable). Alternativa self-hosted: Keycloak.
- **Base de datos primaria:** PostgreSQL 16 (Supabase, Neon o RDS).
- **Time-series para precios:** **TimescaleDB** (extensión de Postgres) — crítico para guardar histórico de precios eficientemente y consultarlo a distintos rangos.
- **Cache:** Redis (precios "calientes", sesiones, rate limiting).
- **Search:** **Meilisearch** o **Typesense** para búsqueda full-text con typo-tolerance y autocompletado (alternativa: Postgres con `pg_trgm` para MVP barato; OpenSearch para escala).
- **Object storage:** S3 (o Cloudflare R2 / Backblaze B2 por costo) para imágenes propias de vendedores.
- **CDN:** Cloudflare frente a imágenes y APIs públicas estáticas.
- **Queue / Jobs:** BullMQ (Node) o Celery/RQ (Python) — para sincronización con APIs externas, recálculo de promedios, envío de notificaciones.
- **Image recognition / Scan backend:** servicio dedicado en Python con OpenCV + ONNX runtime; modelo de embeddings (CLIP fine-tuned o pHash + ANN) para matching de imágenes contra catálogo. OCR con Tesseract o Google Vision API.

**Infraestructura**
- **Cloud:** AWS o GCP. Recomendación inicial: **AWS** (EKS o ECS Fargate + RDS Postgres + ElastiCache Redis + S3 + CloudFront). Alternativa rápida y barata: **Railway** + **Supabase** + **Cloudflare R2** para MVP.
- **IaC:** Terraform (estado en S3 + lock en DynamoDB).
- **CI/CD:** GitHub Actions; EAS Build para binarios Android (.aab) firmados.
- **Observabilidad:** Datadog o stack open: Grafana + Loki + Prometheus + Tempo.
- **Feature flags:** GrowthBook o LaunchDarkly.
- **Secrets:** AWS Secrets Manager o Doppler.

### 9.2 Diagrama lógico de arquitectura (alto nivel)

```
[ App Android (React Native) ]
            │  HTTPS / JSON / GraphQL opcional
            ▼
[ API Gateway / CloudFront ]
            │
            ▼
[ BFF (NestJS / FastAPI) ] ── [ Auth (Auth0/Clerk) ]
            │
   ┌────────┼─────────────────────────────────────┐
   ▼        ▼                                     ▼
[ Postgres + TimescaleDB ]   [ Redis ]    [ Meilisearch/Typesense ]
   ▲                                              ▲
   │                                              │
[ Workers / Cron Jobs ] ──── sincronización ──── [ APIs externas ]
   │                                              │
   ▼                                              ▼
[ S3/R2 imágenes ]                  [ Pokémon TCG / TCGPlayer / PriceCharting ]

[ Servicio Scan (Python + ONNX + OCR) ] ── consumido por BFF
[ Notificaciones: FCM + email (Resend/SendGrid) ]
```

### 9.3 Estrategia de datos de precios (clave para la "esencia fintech")
- Sincronización programada (cron) por set y por carta caliente cada N minutos/horas.
- Almacenamiento en TimescaleDB con tablas hypertable particionadas por tiempo.
- Materialized views con promedios 30/60/90 días recomputados.
- Generación on-the-fly de series para gráficos vía downsampling (LTTB algorithm) para responder rápido a 1m / 3m / 9m / 12m.
- Backfill histórico inicial desde proveedores que lo permitan; **desde el día uno almacenamos snapshots propios** para no depender del histórico de terceros.

### 9.4 Estrategia de cache (capas)
1. **Cliente (RN):** TanStack Query con `staleTime` por endpoint + persistencia en MMKV.
2. **CDN (Cloudflare):** cache de assets estáticos (imágenes oficiales) y respuestas idempotentes.
3. **BFF (Redis):** precios calientes con TTL adaptativo (cartas más vistas → TTL menor).
4. **DB:** materialized views para agregaciones costosas.

### 9.5 Resiliencia ante fallos de APIs externas
- Circuit breaker por proveedor.
- Cola de retry con backoff exponencial.
- Datos "stale-but-served" con marca de timestamp visible al usuario.
- Multi-source fallback: si TCGPlayer no responde, intentar JustTCG o PriceCharting.

---

## 10. Seguridad, Cumplimiento y Confianza

- **Antifraude / abuso:** rate limiting, captcha en registro, validación de email y SMS, detección de listings sospechosos (precios anómalos).
- **Privacidad:** datos personales mínimos en MVP; consentimientos versionados; export y delete de cuenta self-service.
- **PCI:** N/A en MVP (no se procesan pagos). En fase 2 se integrará pasarela tipo Stripe / Mercado Pago / Khipu / Transbank manteniendo la app fuera de scope PCI vía tokenización.
- **Términos del marketplace:** disclaimers claros — la app facilita el descubrimiento, no es responsable de transacciones P2P en MVP.

---

## 11. Riesgos y Mitigaciones

| # | Riesgo | Impacto | Probabilidad | Mitigación |
|---|---|---|---|---|
| R1 | Rechazo o demora en acceso a TCGPlayer API | Alto | Media-Alta | Iniciar solicitud antes del kickoff; preparar JustTCG y PriceCharting como respaldo; arquitectura multi-fuente desde día 1. |
| R2 | Precisión de scan insuficiente | Alto | Media | Modelo basado en embeddings + OCR redundante; fallback a top-3 candidatos; mejora continua con datos de uso. |
| R3 | Costos de cómputo del backend de scan | Medio | Media | Procesamiento batch + GPU spot en horas pico; explorar on-device para fase 2. |
| R4 | Fragmentación de Android (low-end devices) | Medio | Alta | Define dispositivos referencia (Moto G, Galaxy A series); test matrix en BrowserStack/Firebase Test Lab. |
| R5 | Dependencia de proveedores externos | Alto | Media | Snapshots propios diarios para no perder histórico ante cierre de API. |
| R6 | Adopción inicial baja sin transacciones | Medio | Alta | Posicionar como app de inversión/seguimiento primero, marketplace luego; engagement con comunidad (Discord/Instagram). |
| R7 | Riesgo legal (uso de marcas Pokémon) | Medio | Baja-Media | Uso editorial / referencial; no merchandising; revisar ToS de cada API; consultoría legal antes del lanzamiento. |
| R8 | Volatilidad de precios mal interpretada como recomendación financiera | Medio | Media | Disclaimer explícito: "No es asesoría financiera"; lenguaje neutral en alertas. |

---

## 12. Roadmap Incremental

**Fase 0 — Discovery & Setup (semanas 1–3)**
- Diseño de research; entrevistas con 8–10 usuarios potenciales por persona.
- Solicitud formal de acceso a TCGPlayer.
- Setup de repos, CI/CD, entorno cloud base.

**Fase 1 — MVP v1.0 (semanas 4–14)** ← este PRD
- Pokémon TCG, búsqueda + filtros, detalle + histórico, scan, perfiles, watchlist, listados (sin pagos).
- Beta cerrada Android.

**Fase 2 — Marketplace transaccional (siguiente trimestre)**
- Pasarela de pagos (Mercado Pago / Stripe / Khipu).
- Escrow básico.
- Reputación y reviews.
- Chat in-app.
- Versión iOS.

**Fase 3 — Expansión TCG**
- Magic: The Gathering (Scryfall API, gratuita y excelente).
- One Piece TCG.
- Yu-Gi-Oh! (YGOPRODeck API).
- Lorcana.

**Fase 4 — Inteligencia de mercado**
- Recomendaciones personalizadas (ML).
- Detección de oportunidades de arbitraje.
- Índices sintéticos por set ("Pokémon 151 Index").
- Portfolio del coleccionista (valoración total en tiempo real).
- API pública para terceros.

---

## 13. Métricas de Éxito del MVP (criterios de salida)

- ≥ 1.000 usuarios registrados en los primeros 60 días post-lanzamiento beta.
- ≥ 40% de los registrados completan ≥1 búsqueda en su primera sesión.
- ≥ 25% activan ≥1 alerta o agregan a watchlist en los primeros 7 días.
- Cobertura ≥ 95% del catálogo Pokémon TCG inglés y ≥ 70% japonés con precio actualizado <24h.
- Scan exitoso ≥ 75% sobre intentos.
- Crash-free sessions ≥ 99.0% en Android.
- NPS interno (encuesta in-app) ≥ 30 en mes 2.

---

## 14. Sugerencias y Mejoras Recomendadas

Estas sugerencias amplían el alcance funcional/no-funcional sin sumarse al MVP por defecto, pero quedan documentadas como decisión consciente y backlog priorizado.

1. **Snapshot propio del histórico desde día uno** (ya incorporado en arquitectura): nos blinda ante cambios en políticas de APIs externas.
2. **Sistema de "Pricing Confidence Score"**: indicador (0–100) que combina volumen, dispersión entre fuentes y antigüedad del dato; le da credibilidad al precio mostrado, en línea con la propuesta fintech.
3. **Alertas avanzadas tipo trader**: cruce de media móvil, ruptura de máximos de 52 semanas, drawdown >X%.
4. **Modo "Portfolio"**: el usuario marca cartas que posee con precio de compra → la app calcula PnL no realizado (excelente gancho fintech, fácil de implementar como evolución del seguimiento del comprador).
5. **Indexación por set y por arquetipo**: índices compuestos que muestren tendencia agregada (similar a un ETF).
6. **Edge caching geográfico**: latinoamérica como mercado primario, usar región de Cloudflare cercana.
7. **Búsqueda por voz** (post-MVP) — útil cuando el usuario está revisando una colección física.
8. **Plugin de community data**: permitir a usuarios reportar ventas/precios manualmente con verificación cruzada — fuente de datos propia y diferenciada a mediano plazo.
9. **Modo offline** del catálogo: la app permite navegar la colección Pokémon aunque no haya conexión, con precios cacheados.
10. **Programa de creadores**: API/links para influencers de TCG; engagement orgánico.
11. **Web companion (post-MVP)**: una versión web (Next.js) que reaproveche el BFF; coleccionistas suelen consultar desde escritorio.
12. **Internacionalización temprana**: aunque el MVP sea en español, la disciplina i18n desde día 1 evita rework grande.
13. **Auditoría legal** de uso de marcas (Pokémon Company) y de cumplimiento de ToS de cada API antes del go-live.

---

## 15. Dependencias y Próximos Pasos

**Bloqueantes inmediatos**
- [ ] Confirmar acceso a TCGPlayer API o decidir migrar a JustTCG como primaria.
- [ ] Cuenta enterprise de Pokémon TCG API (si aplica) y PriceCharting.
- [ ] Definir presupuesto cloud mensual y stack final (AWS vs Supabase/Railway).

**Próximos pasos con la tríada**
- Tech Lead: validación técnica del stack propuesto, estimación high-level del backlog y POC del scan (semana 1).
- Product Designer: arquitectura de información, flows de los 3 perfiles y prototipo navegable de búsqueda + detalle + scan (semanas 1–3).
- PM (yo): refinamiento de historias de usuario, definición de criterios de aceptación por historia, plan de research con usuarios objetivo.

---

## 16. Anexos

### Anexo A — Glosario
- **Single Card:** carta individual.
- **Sealed product:** producto sellado (booster, ETB, box, bundle, etc.).
- **Graded:** carta encapsulada y calificada por una gradadora (PSA, BGS, CGC) con una nota numérica.
- **Reverse Holo / Holo / Full Art / Alt Art:** variantes visuales de una misma carta.
- **Market Price:** precio de referencia agregado.
- **Volatilidad:** medida de dispersión de precios.
- **Drawdown:** caída desde un máximo previo.

### Anexo B — Endpoints externos clave (referencia)
- Pokémon TCG API: `https://api.pokemontcg.io/v2/cards`
- TCGPlayer API: `https://api.tcgplayer.com` (requiere onboarding)
- PriceCharting API: `https://www.pricecharting.com/api/`

### Anexo C — Convenciones del documento
- Las decisiones marcadas con **"Decisión de producto"** son determinaciones del PM aprobables por la tríada.
- Los **"Riesgos"** se revalidan en cada planning de release.

---

*Documento vivo. Próxima revisión: tras workshop de tríada y POC técnica del scan.*
