// OpsScreen.jsx — Mis operaciones. Switcher Comprador / Vendedor.

function OpsScreen({ onOpenCard, onPublish }) {
  const [role, setRole] = React.useState("buyer");

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-page)", overflow: "hidden" }}>
      <div style={{
        padding: "16px 18px 8px", background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border)", flexShrink: 0,
      }}>
        <div style={{ fontSize: 22, fontWeight: 300, color: "var(--text-primary)", letterSpacing: -0.02 }}>Mis operaciones</div>
        <div style={{
          display: "inline-flex", background: "var(--bg-secondary)", borderRadius: 6, padding: 2, marginTop: 12,
        }}>
          {[["buyer", "Comprador"], ["seller", "Vendedor"]].map(([k, label]) => (
            <button key={k} onClick={() => setRole(k)} style={{
              padding: "6px 16px",
              border: role === k ? "1px solid var(--border)" : "1px solid transparent",
              background: role === k ? "var(--bg-primary)" : "transparent",
              color: role === k ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: 500, fontSize: 13,
              borderRadius: 4, cursor: "pointer",
              boxShadow: role === k ? "0 1px 4px rgba(0,0,0,.06)" : "none",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px 24px" }}>
        {role === "buyer" ? <BuyerView onOpenCard={onOpenCard}/> : <SellerView onPublish={onPublish}/>}
      </div>
    </div>
  );
}

function BuyerView({ onOpenCard }) {
  const stats = [
    { label: "Gasto · este mes", value: "USD 1.245", helper: "+18% vs mes anterior" },
    { label: "Watchlist", value: "12", helper: "3 con alerta activa" },
    { label: "Cartas seguidas valorizadas", value: "USD 8.420", helper: "↑ 4,2% últimos 30d", positive: true },
  ];

  const alerts = [
    { card: "Charizard ex", trigger: "USD 400", status: "Activa", color: "info" },
    { card: "Umbreon VMAX", trigger: "USD 500", status: "Disparada · hace 2h", color: "success" },
    { card: "Mewtwo VMAX", trigger: "USD 140", status: "Activa", color: "info" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {stats.slice(0, 2).map((s, i) => <StatCard key={i} {...s}/>)}
      </div>
      <StatCard {...stats[2]} wide/>

      <div>
        <div style={labelUp}>Alertas activas</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
          {alerts.map((a, i) => (
            <div key={i} style={{
              background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8,
              padding: "12px 14px", display: "grid", gridTemplateColumns: "1fr auto",
              alignItems: "center", gap: 12,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{a.card}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Cruce de precio: {a.trigger}
                </div>
              </div>
              <Badge variant={a.color}>{a.status}</Badge>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={labelUp}>Compras declaradas · últimas</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
          <PurchaseRow card="Lugia V" date="14 may" price={168} cond="NM"/>
          <PurchaseRow card="Espeon V" date="08 may" price={690} cond="Graded"/>
          <PurchaseRow card="Rayquaza VMAX" date="02 may" price={285} cond="NM"/>
        </div>
      </div>
    </div>
  );
}

function SellerView({ onPublish }) {
  const stats = [
    { label: "Ingresos · este mes", value: "USD 2.180", helper: "+34% vs mes anterior" },
    { label: "Listings activos", value: "8", helper: "2 borradores" },
    { label: "Vistas totales · 7d", value: "342", helper: "+18 watchlists nuevas", positive: true },
  ];

  const listings = [
    { name: "Charizard ex (NM)", price: 410, views: 47, watchlists: 8, status: "Activo" },
    { name: "Pikachu V Alt Art", price: 320, views: 19, watchlists: 4, status: "Activo" },
    { name: "Booster Box · Paldea", price: 95, views: 11, watchlists: 2, status: "Pausado" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Button variant="primary" icon="ph-tag" size="lg" onClick={onPublish} style={{ width: "100%" }}>Publicar producto</Button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {stats.slice(0, 2).map((s, i) => <StatCard key={i} {...s}/>)}
      </div>
      <StatCard {...stats[2]} wide positive/>

      <div>
        <div style={labelUp}>Listings</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
          {listings.map((l, i) => (
            <div key={i} style={{
              background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8,
              padding: 14, display: "flex", flexDirection: "column", gap: 8,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{l.name}</div>
                <Badge variant={l.status === "Activo" ? "success" : "neutral"}>{l.status}</Badge>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <Price value={l.price} size="md"/>
                <div style={{ display: "flex", gap: 14, fontSize: 11, color: "var(--text-secondary)", fontFamily: "'IBM Plex Mono', monospace" }}>
                  <span><i className="ph ph-eye" style={{ fontSize: 12, verticalAlign: -1 }}/> {l.views}</span>
                  <span><i className="ph ph-heart" style={{ fontSize: 12, verticalAlign: -1 }}/> {l.watchlists}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, helper, positive, wide }) {
  return (
    <div style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 10,
      padding: "14px 16px", gridColumn: wide ? "1 / -1" : undefined,
    }}>
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-muted)" }}>{label}</div>
      <div style={{
        fontFamily: "'IBM Plex Mono', monospace", fontSize: wide ? 24 : 20, fontWeight: 400,
        color: "var(--text-primary)", marginTop: 4, fontVariantNumeric: "tabular-nums",
      }}>{value}</div>
      <div style={{ fontSize: 11, color: positive ? "#0F6E56" : "var(--text-secondary)", marginTop: 2 }}>{helper}</div>
    </div>
  );
}

function PurchaseRow({ card, date, price, cond }) {
  return (
    <div style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8,
      padding: "12px 14px", display: "grid", gridTemplateColumns: "1fr auto",
      alignItems: "center", gap: 12,
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{card}</div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, display: "flex", alignItems: "center", gap: 6 }}>
          <span>{date}</span><span>·</span><ConditionBadge code={cond}/>
        </div>
      </div>
      <Price value={price} size="sm"/>
    </div>
  );
}

Object.assign(window, { OpsScreen, StatCard });
