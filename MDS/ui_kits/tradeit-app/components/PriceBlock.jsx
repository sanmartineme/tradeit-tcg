// PriceBlock.jsx — Canonical price block for the card detail view.
// Big price + source + averages + tendency/volatility.

function PriceBlock({ current = 412.50, currency = "USD", updatedAgo = "hace 12 min", source = "TCGPlayer",
                     averages, tendency = "Sube", volatility = "Media" }) {
  averages = averages || [
    { label: "30d", value: 398.20, delta: 3.8 },
    { label: "60d", value: 376.10, delta: 9.7 },
    { label: "90d", value: 354.90, delta: 16.2 },
  ];

  return (
    <div style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
      padding: 18, display: "flex", flexDirection: "column", gap: 14,
    }}>
      <div>
        <div style={labelUp}>Precio actual</div>
        <div style={{ marginTop: 4 }}><Price value={current} currency={currency} size="lg"/></div>
        <div style={{
          fontSize: 11, color: "var(--text-muted)", marginTop: 4,
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          Actualizado {updatedAgo} · Fuente: {source}
        </div>
      </div>

      <div style={{ height: 1, background: "var(--border)" }}/>

      <div>
        <div style={labelUp}>Promedios</div>
        <div style={{
          display: "grid", gridTemplateColumns: "auto 1fr auto", rowGap: 6, columnGap: 16,
          marginTop: 8, alignItems: "baseline",
        }}>
          {averages.map(a => (
            <React.Fragment key={a.label}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: "'IBM Plex Mono', monospace" }}>{a.label}</span>
              <Price value={a.value} currency={currency} size="sm"/>
              <Delta value={a.delta} period={a.label} size="sm"/>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "var(--border)" }}/>

      <div style={{ display: "flex", gap: 24, fontSize: 12, color: "var(--text-secondary)" }}>
        <div><span style={metaLbl}>Tendencia · </span><span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{tendency}</span></div>
        <div><span style={metaLbl}>Volatilidad · </span><span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{volatility}</span></div>
      </div>
    </div>
  );
}

const labelUp = {
  fontSize: 11, fontWeight: 500,
  textTransform: "uppercase", letterSpacing: 0.08,
  color: "var(--text-secondary)",
};
const metaLbl = { color: "var(--text-muted)" };

window.PriceBlock = PriceBlock;
window.labelUp = labelUp;
