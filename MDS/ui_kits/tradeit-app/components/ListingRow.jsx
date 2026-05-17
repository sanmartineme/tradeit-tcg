// ListingRow.jsx — Row used inside "Disponible en Tradeit" lists.

function ListingRow({ listing, marketPrice }) {
  const { seller, condition, price, location, country = "CL", verified } = listing;
  const delta = marketPrice ? ((price - marketPrice) / marketPrice) * 100 : null;

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "32px 1fr auto",
      gap: 12, padding: "12px 14px",
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8,
      alignItems: "center",
    }}>
      <Avatar name={seller} size="sm"/>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{seller}</span>
          {verified && <i className="ph ph-seal-check" style={{ fontSize: 13, color: "var(--success)" }}/>}
          <ConditionBadge code={condition}/>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{location} · {country}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <Price value={price} size="sm"/>
        {delta != null && (
          <div style={{
            fontSize: 10.5, color: Math.abs(delta) < 2 ? "var(--text-muted)" : delta > 0 ? "#A02C2C" : "#0F6E56",
            fontFamily: "'IBM Plex Mono', monospace", marginTop: 2, fontVariantNumeric: "tabular-nums",
          }}>
            {delta > 0 ? "+" : delta < 0 ? "−" : ""}{Math.abs(delta).toFixed(1).replace(".", ",")}% vs mercado
          </div>
        )}
      </div>
    </div>
  );
}

window.ListingRow = ListingRow;
