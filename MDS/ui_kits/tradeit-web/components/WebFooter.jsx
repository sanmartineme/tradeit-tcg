// WebFooter.jsx — Desktop footer.

function WebFooter() {
  return (
    <footer style={{
      background: "var(--bg-primary)", borderTop: "1px solid var(--border)",
      padding: "32px 24px 24px",
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr repeat(4, 1fr)", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: "var(--interactive)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 28 28">
                <path d="M 6 22 L 6 8 L 11 8 L 14 13 L 17 8 L 22 8 L 22 22 L 19 22 L 19 12 L 16 17 L 12 17 L 9 12 L 9 22 Z" fill="var(--on-interactive)"/>
              </svg>
            </div>
            <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>Mulligan</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 14, lineHeight: 1.6, maxWidth: 280 }}>
            Los datos que tu colección merece.<br/>Plataforma de marketplace + analytics para Trading Card Games.
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 18, fontFamily: "'IBM Plex Mono', monospace" }}>
            Tradeit TCG SpA · Santiago, Chile
          </div>
        </div>
        <FootCol title="Producto" links={["Catálogo Pokémon", "Mercado P2P", "Histórico de precios", "Scan card", "Alertas"]}/>
        <FootCol title="Comunidad" links={["Blog", "Discord", "Instagram", "X / Twitter", "Newsletter"]}/>
        <FootCol title="Recursos" links={["API", "Centro de ayuda", "Glosario TCG", "Estado del servicio"]}/>
        <FootCol title="Legal" links={["Términos", "Privacidad", "Política de cookies", "Disclaimers de mercado"]}/>
      </div>

      <div style={{
        maxWidth: 1280, margin: "32px auto 0", paddingTop: 18,
        borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
        fontSize: 11, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace",
        flexWrap: "wrap",
      }}>
        <span>© 2026 Tradeit TCG · Todos los derechos reservados.</span>
        <span>Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra.</span>
      </div>
    </footer>
  );
}

function FootCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-secondary)", marginBottom: 12 }}>{title}</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map(l => (
          <li key={l}><a style={{ fontSize: 13, color: "var(--text-primary)", textDecoration: "none", cursor: "pointer" }}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

window.WebFooter = WebFooter;
