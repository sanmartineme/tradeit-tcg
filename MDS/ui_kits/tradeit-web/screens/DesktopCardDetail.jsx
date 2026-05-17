// DesktopCardDetail.jsx — Desktop card detail per MULLIGAN §11 Template.
// Layout: 8/12 content (image + data + chart + listings) | 4/12 sticky CTA + seller.

function DesktopCardDetail({ cardId = "charizard-ex", onBack }) {
  const card = CATALOG.find(c => c.id === cardId) || CATALOG[0];
  const [period, setPeriod] = React.useState("3m");
  const series = React.useMemo(() => generatePriceSeries(), [cardId]);

  return (
    <div style={{ background: "var(--bg-page)", color: "var(--text-primary)", minHeight: "100%" }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px 0", fontSize: 13, color: "var(--text-secondary)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={onBack} style={{ ...btnReset, color: "var(--interactive)", display: "inline-flex", alignItems: "center", gap: 4 }}>
            <i className="ph ph-arrow-left" style={{ fontSize: 14 }}/> Catálogo
          </button>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <a style={{ color: "var(--interactive)", textDecoration: "none", cursor: "pointer" }}>Pokémon TCG</a>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <a style={{ color: "var(--interactive)", textDecoration: "none", cursor: "pointer" }}>{card.set}</a>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <span>{card.name}</span>
        </span>
      </div>

      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "24px 24px 64px",
        display: "grid", gridTemplateColumns: "8fr 4fr", gap: 32,
        alignItems: "start",
      }}>
        {/* Main column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "200px 1fr",
            gap: 28, alignItems: "flex-start",
            background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12, padding: 24,
          }}>
            <div style={{
              width: 200, height: 280, borderRadius: 10,
              background: "linear-gradient(135deg, #EBF2FB 0%, #C5DAEF 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,.06)",
            }}>
              <div style={{
                width: 140, height: 196, borderRadius: 8,
                background: "#D94646",
                boxShadow: "0 12px 32px rgba(0,0,0,.25)",
              }}/>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: 0.08 }}>
                {card.set}
              </div>
              <h1 style={{ fontSize: 36, fontWeight: 300, letterSpacing: -0.02, margin: "6px 0 0", lineHeight: 1.1 }}>{card.name}</h1>
              <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                <Badge variant="info">{card.rarity || "Holo"}</Badge>
                <Badge variant="warning">Tendencia alcista</Badge>
                <Badge variant="neutral">{card.number || "—"}</Badge>
              </div>
              <div style={{
                marginTop: 22, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14,
                paddingTop: 22, borderTop: "1px solid var(--bg-secondary)",
              }}>
                <Cell label="Precio promedio CLP" value="CLP 398.420"/>
                <Cell label="Ref. TCGPlayer USD" value="USD 412,50"/>
                <Cell label="Mínimo activo" value="USD 380,00"/>
                <Cell label="Máximo activo" value="USD 1.740,00"/>
              </div>
            </div>
          </div>

          <PriceChart data={series} active={period} onPeriod={setPeriod}/>

          {/* Listings */}
          <div style={{
            background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
            padding: 20,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 500 }}>
                Disponible en Tradeit <span style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: 14 }}>{(card.listings || []).length}</span>
              </div>
              <button style={{ ...btnReset, color: "var(--interactive)", fontSize: 13, fontWeight: 500 }}>Ver todas</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {(card.listings || []).map((l, i) => <ListingRow key={i} listing={l} marketPrice={card.price}/>)}
            </div>
          </div>

          {/* Educational explainer */}
          <div style={{
            background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
            padding: 20,
          }}>
            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>¿Qué es la volatilidad?</div>
            <div style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
              La volatilidad mide qué tanto sube y baja el precio de una carta en un período. Una volatilidad alta significa precios menos predecibles; una baja, precios más estables. Para colecciones de largo plazo, suele preferirse baja volatilidad.
            </div>
          </div>

          <div style={{
            fontSize: 11, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace",
            lineHeight: 1.6, padding: "4px 4px",
          }}>
            <strong style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Tradeit TCG</strong> no entrega asesoría financiera ni recomendaciones de compra. Los precios provienen de TCGPlayer y PriceCharting y son referenciales.
          </div>
        </div>

        {/* Sticky aside */}
        <aside style={{ position: "sticky", top: 64, display: "flex", flexDirection: "column", gap: 16 }}>
          <PriceBlock
            current={card.price}
            updatedAgo="hace 12 min"
            source="TCGPlayer"
            averages={card.averages}
            tendency={card.tendency || "Sube"}
            volatility={card.volatility || "Media"}
          />

          <div style={{
            background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
            padding: 16, display: "flex", flexDirection: "column", gap: 10,
          }}>
            <Button variant="primary" size="lg" icon="ph-shopping-cart" style={{ width: "100%" }}>Comprar al menor precio</Button>
            <Button variant="secondary" size="md" icon="ph-heart" style={{ width: "100%" }}>Agregar a watchlist</Button>
            <Button variant="ghost" size="md" icon="ph-bell" style={{ width: "100%" }}>Crear alerta de precio</Button>
            <div style={{
              fontSize: 11, color: "var(--text-muted)", textAlign: "center",
              fontFamily: "'IBM Plex Mono', monospace", paddingTop: 4,
              borderTop: "1px solid var(--bg-secondary)",
            }}>
              Compra fuera de la plataforma · contactá al vendedor para coordinar pago y envío.
            </div>
          </div>

          {/* Featured seller */}
          <div style={{
            background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
            padding: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar name="Camila R" size="md"/>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>Camila R</span>
                  <i className="ph ph-seal-check" style={{ fontSize: 14, color: "var(--success)" }}/>
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>Santiago, CL · 124 ventas · 4.9 ★</div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.55 }}>
              "Envío con tracking en 24h por Chilexpress. Cartas siempre con sleeve + top loader."
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Cell({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-muted)" }}>{label}</div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontVariantNumeric: "tabular-nums", fontSize: 16, fontWeight: 500, color: "var(--text-primary)", marginTop: 4 }}>{value}</div>
    </div>
  );
}

window.DesktopCardDetail = DesktopCardDetail;
