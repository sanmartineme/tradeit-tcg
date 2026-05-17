// Landing.jsx — Web marketing homepage.
// Hero · features grid · live ticker · CTA band.

function Landing({ onOpenDetail }) {
  return (
    <div style={{ background: "var(--bg-page)", color: "var(--text-primary)" }}>
      {/* Hero */}
      <section style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "72px 32px 80px",
        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center",
      }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 10px", borderRadius: 999,
            background: "var(--bg-secondary)", border: "1px solid var(--border)",
            fontSize: 11.5, fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-secondary)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)" }}/>
            MVP en Android · iOS y web companion en camino
          </div>
          <h1 style={{
            margin: "24px 0 0", fontSize: 60, fontWeight: 300, lineHeight: 1.05, letterSpacing: -0.025,
            color: "var(--text-primary)",
          }}>
            Los datos que tu colección merece.
          </h1>
          <p style={{
            margin: "20px 0 0", fontSize: 17, lineHeight: 1.55, color: "var(--text-secondary)", maxWidth: 540,
          }}>
            Marketplace P2P y analytics tipo fintech para Trading Card Games. Precios consolidados, históricos, tendencias y alertas — con la misma calidad de datos que un trader tiene de un activo financiero.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
            <button style={ctaPrimary}>Descargar la app</button>
            <button style={ctaSecondary}>Ver demo del catálogo</button>
          </div>
          <div style={{
            marginTop: 36, display: "flex", gap: 28, flexWrap: "wrap",
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: "var(--text-muted)",
          }}>
            <Stat label="Cobertura" value="95% catálogo Pokémon"/>
            <Stat label="Latencia precios" value="< 24h p95"/>
            <Stat label="Scan exitoso" value="≥ 75% en MVP"/>
          </div>
        </div>

        {/* Hero panel — mini ficha de carta */}
        <HeroPanel onOpenDetail={onOpenDetail}/>
      </section>

      <div style={{ height: 1, background: "var(--border)" }}/>

      {/* Features */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          marginBottom: 36, gap: 24, flexWrap: "wrap",
        }}>
          <div>
            <div style={eyebrow}>Por qué Mulligan</div>
            <h2 style={{ fontSize: 32, fontWeight: 300, letterSpacing: -0.02, margin: "10px 0 0", color: "var(--text-primary)", lineHeight: 1.2 }}>
              Decidí con datos de calidad financiera.
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
            Pensado para coleccionistas, inversores y vendedores hispanohablantes. Sin promesas especulativas, sin lenguaje de hype, sin sorpresas.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          <FeatureCard
            icon="ph-chart-line-up"
            title="Histórico real, no estimaciones"
            body="Snapshots propios desde el día uno. Tu histórico no depende de la disponibilidad de TCGPlayer o PriceCharting."
          />
          <FeatureCard
            icon="ph-bell"
            title="Alertas de precio inteligentes"
            body="Configurá umbrales, cruces de promedio móvil y rupturas de máximos. El push llega solo si pasó algo que importa."
          />
          <FeatureCard
            icon="ph-camera"
            title="Scan instantáneo"
            body="Apuntá con la cámara. OCR + image matching identifica nombre, número y set en menos de 3 segundos."
          />
          <FeatureCard
            icon="ph-shield-check"
            title="Datos consolidados, fuente visible"
            body="Cada precio muestra su origen y timestamp. Si una API cae, mostramos el último dato disponible con flag de stale."
          />
          <FeatureCard
            icon="ph-tag"
            title="Marketplace P2P sin sorpresas"
            body="Listings con condición declarada, badge de reputación del vendedor y comparador vs. mercado. Sin comisiones ocultas."
          />
          <FeatureCard
            icon="ph-arrows-left-right"
            title="Comprador y vendedor en la misma cuenta"
            body="Activá ambos roles con un toggle. Dashboard separado, ingresos netos y compras declaradas en mono tabular."
          />
        </div>
      </section>

      <div style={{ height: 1, background: "var(--border)" }}/>

      {/* Live ticker */}
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28, gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={eyebrow}>Movimiento del mercado · últimas 24h</div>
              <div style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", marginTop: 6 }}>Cartas más volátiles</div>
            </div>
            <button style={{ ...btnReset, color: "var(--interactive)", fontSize: 13, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
              Ver índice completo <i className="ph ph-arrow-right" style={{ fontSize: 14 }}/>
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[0,1,2,3].map(i => (
              <TcgCard key={i} card={CATALOG[i]} onClick={onOpenDetail}/>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "var(--border)" }}/>

      {/* CTA band */}
      <section style={{ padding: "72px 32px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          background: "var(--inverse-surface)", color: "var(--on-inverse-surface)",
          borderRadius: 16,
          padding: "48px 56px",
          display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center",
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08,
              opacity: 0.6,
            }}>Open beta · Android</div>
            <h2 style={{ fontSize: 36, fontWeight: 300, letterSpacing: -0.02, margin: "12px 0 0", lineHeight: 1.2 }}>
              Empezá a seguir cartas hoy.
            </h2>
            <p style={{ fontSize: 15, opacity: 0.8, marginTop: 14, lineHeight: 1.55, maxWidth: 460 }}>
              Sin pasarela de pagos en MVP. Watchlist, alertas, histórico y scan funcionan desde el primer día. iOS y web companion en Q3 2026.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button style={{
              height: 48, padding: "0 20px", borderRadius: 8,
              background: "#6AAAD8", color: "#131210",
              fontWeight: 500, fontSize: 15, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>
              <i className="ph ph-google-play-logo" style={{ fontSize: 20 }}/>
              Descargar para Android
            </button>
            <button style={{
              height: 48, padding: "0 20px", borderRadius: 8,
              background: "transparent", color: "#F0EFEC",
              border: "1px solid rgba(255,255,255,.20)",
              fontWeight: 500, fontSize: 15, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>
              <i className="ph ph-bell" style={{ fontSize: 20 }}/>
              Avisame cuando salga iOS
            </button>
            <div style={{ fontSize: 11, opacity: 0.55, marginTop: 4, fontFamily: "'IBM Plex Mono', monospace", textAlign: "center" }}>
              Android 9+ · build 2026.05 · ~32 MB
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroPanel({ onOpenDetail }) {
  const card = CATALOG[0];
  return (
    <div onClick={onOpenDetail} style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 14,
      boxShadow: "0 24px 64px rgba(0,0,0,.10)",
      overflow: "hidden", cursor: "pointer",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #EBF2FB 0%, #C5DAEF 100%)",
        padding: "20px 22px 24px",
        display: "flex", gap: 16, alignItems: "center",
      }}>
        <div style={{
          width: 96, height: 134, borderRadius: 8,
          background: "#D94646",
          boxShadow: "0 8px 24px rgba(0,0,0,.20)",
        }}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: "#5C5A56", textTransform: "uppercase", letterSpacing: 0.08 }}>
            En vivo · TCGPlayer
          </div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#131210", marginTop: 4, lineHeight: 1.2 }}>{card.name}</div>
          <div style={{ fontSize: 12, color: "#5C5A56", marginTop: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
            {card.number} · {card.set}
          </div>
        </div>
      </div>
      <div style={{ padding: "18px 22px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-secondary)" }}>Precio actual</div>
            <Price value={card.price} size="lg"/>
          </div>
          <Delta value={card.delta} period="30d" size="md"/>
        </div>
        <div style={{ marginTop: 14, height: 80, position: "relative" }}>
          <MiniSpark/>
        </div>
        <div style={{ marginTop: 12, fontSize: 11.5, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}>
          Actualizado hace 12 min · 3 promedios · 12m de histórico
        </div>
      </div>
    </div>
  );
}

function MiniSpark() {
  // Mini SVG sparkline — same data shape as PriceChart but smaller.
  const pts = [38, 36, 40, 42, 39, 45, 48, 46, 50, 53, 51, 56, 58, 62, 60, 66, 70];
  const max = Math.max(...pts), min = Math.min(...pts);
  const w = 300, h = 80;
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * w);
  const ys = pts.map(v => h - ((v - min) / (max - min)) * (h - 8) - 4);
  const path = xs.map((x, i) => (i === 0 ? "M" : "L") + x + "," + ys[i]).join(" ");
  const area = path + ` L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h}>
      <defs>
        <linearGradient id="lg-spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(45,166,126,.18)"/>
          <stop offset="100%" stopColor="rgba(45,166,126,0)"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#lg-spark)"/>
      <path d={path} fill="none" stroke="#2DA67E" strokeWidth="2" strokeLinecap="round"/>
      <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3.5" fill="#fff" stroke="#2DA67E" strokeWidth="2"/>
    </svg>
  );
}

function FeatureCard({ icon, title, body }) {
  return (
    <div style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
      padding: 24, display: "flex", flexDirection: "column", gap: 12,
      transition: "border-color 100ms ease-out",
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: "var(--bg-secondary)", color: "var(--interactive)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <i className={"ph " + icon} style={{ fontSize: 20 }}/>
      </div>
      <div style={{ fontSize: 16, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-muted)" }}>{label}</div>
      <div style={{ marginTop: 4, color: "var(--text-primary)", fontWeight: 500 }}>{value}</div>
    </div>
  );
}

const eyebrow = {
  fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08,
  color: "var(--text-muted)",
};

const ctaPrimary = {
  height: 48, padding: "0 22px", borderRadius: 8,
  background: "var(--interactive)", color: "var(--on-interactive)",
  fontWeight: 500, fontSize: 15, border: "none", cursor: "pointer",
  fontFamily: "'IBM Plex Sans', sans-serif",
};
const ctaSecondary = {
  height: 48, padding: "0 22px", borderRadius: 8,
  background: "transparent", color: "var(--text-primary)",
  border: "1px solid var(--border-em)",
  fontWeight: 500, fontSize: 15, cursor: "pointer",
  fontFamily: "'IBM Plex Sans', sans-serif",
};

Object.assign(window, { Landing, HeroPanel, MiniSpark, FeatureCard, Stat, eyebrow, ctaPrimary, ctaSecondary });
