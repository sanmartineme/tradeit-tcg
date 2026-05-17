// CardDetail.jsx — Ficha de carta. The marquee screen.

function CardDetail({ cardId, onBack, isInWatchlist, onToggleWatchlist, onCreateAlert, shellVariant = "A" }) {
  const card = CATALOG.find(c => c.id === cardId) || CATALOG[0];
  const [period, setPeriod] = React.useState("3m");
  const series = React.useMemo(() => generatePriceSeries(), [cardId]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "var(--bg-page)" }}>
      <TopBar variant="back" title="Carta" onBack={onBack} right={
        <div style={{ display: "flex", gap: 4 }}>
          <button style={iconBtn("var(--text-primary)")} aria-label="Compartir">
            <i className="ph ph-share-network" style={{ fontSize: 20 }}/>
          </button>
        </div>
      }/>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Hero image — text colors adapt for variant D (dark base) */}
        {(() => {
          const isDarkHero = shellVariant === "D";
          const heroNameColor = isDarkHero ? "#F0EFEC" : "#131210";
          const heroSubColor  = isDarkHero ? "#9B9892" : "#5C5A56";
          return (
        <div style={{
          ...((TCG_SHELLS[shellVariant] || TCG_SHELLS.A)[card.productType]),
          padding: "20px 18px 24px",
          display: "flex", gap: 16, alignItems: "center",
        }}>
          <div style={{
            width: 96, height: 134, borderRadius: 8,
            background: artColorFor(card.name),
            boxShadow: "0 8px 24px rgba(0,0,0,.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "rgba(255,255,255,.55)", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace",
            flexShrink: 0,
          }}>art · API</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 24, fontWeight: 500, color: heroNameColor, lineHeight: 1.2 }}>{card.name}</div>
            <div style={{ fontSize: 12, color: heroSubColor, marginTop: 4, fontFamily: "'IBM Plex Mono', monospace" }}>
              {card.number ? `${card.number} · ` : ""}{card.set}
            </div>
            <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
              {card.rarity && <Badge variant="info">{card.rarity}</Badge>}
              {card.grading && <Badge variant="grading">{card.grading}</Badge>}
              {card.delta > 5 && <Badge variant="warning">Tendencia alcista</Badge>}
            </div>
          </div>
        </div>
          );
        })()}

        {/* Content */}
        <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 14 }}>
          <PriceBlock
            current={card.price}
            updatedAgo="hace 12 min"
            source="TCGPlayer"
            averages={card.averages}
            tendency={card.tendency || "Sube"}
            volatility={card.volatility || "Media"}
          />

          <PriceChart data={series} active={period} onPeriod={setPeriod}/>

          {/* Variants */}
          {card.variants && (
            <div style={{ background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12, padding: 14 }}>
              <div style={labelUp}>Variantes</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 8 }}>
                {card.variants.map(v => (
                  <div key={v.label} style={{
                    display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "baseline",
                    columnGap: 12, padding: "10px 0", borderBottom: "1px solid var(--bg-secondary)",
                  }}>
                    <span style={{ fontSize: 13, color: "var(--text-primary)" }}>{v.label}</span>
                    <Price value={v.price} size="sm"/>
                    <Delta value={v.delta} period="30d" size="sm"/>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Listings */}
          {card.listings && (
            <div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "0 4px 10px" }}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  Disponible en Tradeit <span style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400 }}>{card.listings.length}</span>
                </span>
                <button style={linkBtn}>Ver todas</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {card.listings.map((l, i) => <ListingRow key={i} listing={l} marketPrice={card.price}/>)}
              </div>
            </div>
          )}

          <div style={{
            background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
            padding: 14, marginTop: 4,
          }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", marginBottom: 4 }}>¿Qué es la volatilidad?</div>
            <div style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.5 }}>
              La volatilidad mide qué tanto sube y baja el precio de una carta en un período. Una volatilidad alta significa precios menos predecibles; una baja, precios más estables.
            </div>
          </div>

          <div style={{
            fontSize: 11, color: "var(--text-muted)", textAlign: "center",
            fontFamily: "'IBM Plex Mono', monospace", padding: "4px 8px 80px",
          }}>
            Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra.
          </div>
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div style={{
        background: "var(--bg-primary)", borderTop: "1px solid var(--border)",
        padding: "10px 14px", display: "flex", gap: 8, flexShrink: 0,
      }}>
        <Button
          variant={isInWatchlist ? "secondary" : "secondary"}
          icon={isInWatchlist ? "ph-fill ph-heart" : "ph-heart"}
          onClick={onToggleWatchlist}
          style={{ flex: 1, color: isInWatchlist ? "#A02C2C" : "var(--text-primary)" }}
        >
          {isInWatchlist ? "Siguiendo" : "Watchlist"}
        </Button>
        <Button variant="primary" icon="ph-bell" onClick={onCreateAlert} style={{ flex: 1.4 }}>
          Crear alerta
        </Button>
      </div>
    </div>
  );
}

window.CardDetail = CardDetail;
