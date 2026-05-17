// HomeScreen.jsx — Inicio tab: greeting, watchlist tile, featured cards, scan CTA.

function HomeScreen({ onOpenCard, onScan, watchlistIds = [], userName = "Carlos", shellVariant = "A" }) {
  const watchlist = watchlistIds.map(id => CATALOG.find(c => c.id === id)).filter(Boolean);
  const featured = CATALOG.slice(0, 4);

  return (
    <div style={{ flex: 1, overflow: "auto", background: "var(--bg-page)" }}>
      {/* Greeting */}
      <div style={{ padding: "20px 18px 8px" }}>
        <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>Hola, {userName}.</div>
        <div style={{
          fontSize: 26, fontWeight: 300, color: "var(--text-primary)", letterSpacing: -0.02,
          lineHeight: 1.2, marginTop: 2,
        }}>Los datos que tu colección merece.</div>
      </div>

      {/* Scan CTA strip */}
      <button onClick={onScan} style={{
        display: "flex", alignItems: "center", gap: 12,
        margin: "16px 14px 0", padding: "14px 16px",
        background: "var(--inverse-surface)", color: "var(--on-inverse-surface)",
        border: "none", borderRadius: 12, cursor: "pointer",
        textAlign: "left", width: "calc(100% - 28px)",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 8,
          background: "rgba(106,170,216,.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#6AAAD8",
        }}>
          <i className="ph ph-camera" style={{ fontSize: 22 }}/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Escanear una carta</div>
          <div style={{ fontSize: 12, opacity: 0.65, marginTop: 2 }}>Apuntá con la cámara y te decimos cuánto vale.</div>
        </div>
        <i className="ph ph-arrow-right" style={{ fontSize: 18, opacity: 0.55 }}/>
      </button>

      {/* Watchlist */}
      <div style={{ padding: "24px 14px 0" }}>
        <div style={sectionHead}>
          <div>
            <div style={labelUp}>Tu watchlist</div>
            <div style={{ fontSize: 14, color: "var(--text-primary)", marginTop: 2 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}>{watchlist.length}</span> cartas vigiladas
            </div>
          </div>
          {watchlist.length > 0 && <button style={linkBtn}>Ver todas</button>}
        </div>

        {watchlist.length === 0 ? (
          <EmptyState
            icon="ph-heart"
            title="Aún no sigues ninguna carta"
            desc="Agrega cartas a tu watchlist para ver su precio y recibir alertas cuando se mueva."
            cta="Buscar una carta"
            onCta={onScan}
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
            {watchlist.map(c => (
              <button key={c.id} onClick={() => onOpenCard(c.id)} style={{
                display: "grid", gridTemplateColumns: "44px 1fr auto",
                gap: 12, padding: 12, background: "var(--bg-primary)",
                border: "1px solid var(--border)", borderRadius: 10,
                alignItems: "center", cursor: "pointer", textAlign: "left",
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}>
                <div style={{
                  width: 44, height: 60, borderRadius: 4,
                  ...((TCG_SHELLS[shellVariant] || TCG_SHELLS.A)[c.productType]),
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: 28, height: 44, borderRadius: 2,
                    background: artColorFor(c.name),
                  }}/>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.setShort || c.set}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Price value={c.price} size="sm"/>
                  <div style={{ marginTop: 2 }}><Delta value={c.delta} period={c.period} size="sm"/></div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Featured grid */}
      <div style={{ padding: "28px 14px 24px" }}>
        <div style={sectionHead}>
          <div>
            <div style={labelUp}>Tendencias</div>
            <div style={{ fontSize: 14, color: "var(--text-primary)", marginTop: 2 }}>Las cartas que más se mueven hoy</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          {featured.map(c => <TcgCard key={c.id} card={c} onClick={() => onOpenCard(c.id)} shellVariant={shellVariant}/>)}
        </div>
      </div>

      <div style={{
        padding: "16px 18px 24px", fontSize: 10.5, color: "var(--text-muted)",
        fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.5, textAlign: "center",
      }}>
        Tradeit TCG no entrega asesoría financiera<br/>ni recomendaciones de compra.
      </div>
    </div>
  );
}

const sectionHead = {
  display: "flex", alignItems: "flex-end", justifyContent: "space-between",
};
const linkBtn = {
  background: "transparent", border: "none", color: "var(--interactive)",
  fontSize: 12, fontWeight: 500, cursor: "pointer",
  fontFamily: "'IBM Plex Sans', sans-serif",
};

function tonalBgFor(type) {
  return {
    single: "linear-gradient(135deg, #EBF2FB 0%, #C5DAEF 100%)",
    graded: "linear-gradient(135deg, #FAF0D8 0%, #F5D68C 100%)",
    sealed: "linear-gradient(135deg, #F0EFEC 0%, #D6D4CE 100%)",
  }[type];
}
function artColorFor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  // Saturated palette — these are placeholder art colors and should stay vivid in both modes.
  const palette = ["#D94646", "#1A6FB5", "#E69A20", "#2DA67E", "#0D4A80", "#9B6510", "#5C5A56", "#A02C2C"];
  return palette[Math.abs(h) % palette.length];
}

Object.assign(window, { HomeScreen, sectionHead, linkBtn, tonalBgFor, artColorFor });
