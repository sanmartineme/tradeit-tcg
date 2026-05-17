// EmailPreviewScreen.jsx — Transactional email rendered as a phone email-app preview.
// Reproduces the §4.7 template + §6.4 canonical example from content.md
// (welcome + alert-disparada + listing-interés). Tap a row to view the full message.

function EmailPreviewScreen({ onClose }) {
  const [openId, setOpenId] = React.useState(null);

  const emails = [
    {
      id: "alert",
      sender: "Mulligan",
      subject: "Tu alerta de Charizard ex se activó",
      preview: "Pasó de USD 380 a USD 412 en las últimas 24h. Tocá para ver detalle del histórico.",
      time: "Ahora",
      unread: true,
      body: <AlertBody/>,
    },
    {
      id: "welcome",
      sender: "Mulligan",
      subject: "Bienvenido a Tradeit TCG",
      preview: "Hola, Carlos. Tu cuenta está lista. Ya puedes seguir cartas, ver sus históricos…",
      time: "Hace 2 h",
      unread: true,
      body: <WelcomeBody/>,
    },
    {
      id: "listing",
      sender: "Mulligan",
      subject: "Tu Mewtwo recibió 12 vistas hoy",
      preview: "Está USD 20 sobre el promedio del mercado. Considerá ajustar el precio.",
      time: "Hace 1 d",
      unread: false,
      body: <ListingBody/>,
    },
  ];

  const open = openId ? emails.find(e => e.id === openId) : null;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-page)", overflow: "hidden" }}>
      <TopBar
        variant="back"
        title={open ? "Bandeja de entrada" : "Bandeja de entrada"}
        onBack={() => open ? setOpenId(null) : onClose()}
        right={open ? (
          <div style={{ display: "flex", gap: 4 }}>
            <button style={iconBtn()} aria-label="Archivar"><i className="ph ph-archive" style={{ fontSize: 20 }}/></button>
            <button style={iconBtn()} aria-label="Eliminar"><i className="ph ph-trash" style={{ fontSize: 20 }}/></button>
          </div>
        ) : (
          <button style={iconBtn()} aria-label="Buscar"><i className="ph ph-magnifying-glass" style={{ fontSize: 20 }}/></button>
        )}
      />

      {!open ? (
        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ padding: "14px 18px 6px" }}>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-muted)" }}>
              Notificaciones · Mulligan
            </div>
            <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 2 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, color: "var(--text-primary)" }}>{emails.filter(e => e.unread).length}</span> no leídos · 3 en total
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {emails.map(e => (
              <button key={e.id} onClick={() => setOpenId(e.id)} style={{
                background: "transparent", border: "none",
                borderBottom: "1px solid var(--border)",
                padding: "14px 16px 14px 18px",
                display: "grid", gridTemplateColumns: "8px 1fr",
                gap: 10, cursor: "pointer", textAlign: "left",
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", marginTop: 6,
                  background: e.unread ? "var(--interactive)" : "transparent",
                }}/>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: 13, fontWeight: e.unread ? 500 : 400, color: "var(--text-primary)" }}>{e.sender}</span>
                    <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}>{e.time}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-primary)", marginTop: 2, fontWeight: e.unread ? 500 : 400 }}>{e.subject}</div>
                  <div style={{
                    fontSize: 12, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.4,
                    display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden",
                  }}>{e.preview}</div>
                </div>
              </button>
            ))}
          </div>

          <div style={{
            padding: "18px 18px 24px", fontSize: 10.5, color: "var(--text-muted)",
            fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.5, textAlign: "center",
          }}>
            Preview tipográfica del template transaccional · content.md §4.7
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {/* Email header */}
          <div style={{ padding: "16px 18px 14px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: 18, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.3 }}>
              {open.subject}
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginTop: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--interactive)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 28 28">
                  <path d="M 6 22 L 6 8 L 11 8 L 14 13 L 17 8 L 22 8 L 22 22 L 19 22 L 19 12 L 16 17 L 12 17 L 9 12 L 9 22 Z" fill="var(--on-interactive)"/>
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, color: "var(--text-primary)" }}>
                  <strong style={{ fontWeight: 500 }}>Mulligan</strong> &lt;noreply@tradeit.tcg&gt;
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
                  para mí · {open.time} · 16 may 2026
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "20px 18px 24px", fontSize: 14, color: "var(--text-primary)", lineHeight: 1.65 }}>
            {open.body}
          </div>

          {/* Foot */}
          <div style={{
            borderTop: "1px solid var(--border)", padding: "14px 18px 28px",
            fontSize: 11, color: "var(--text-muted)", lineHeight: 1.6,
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}>
            Recibís este correo porque creaste una cuenta en Tradeit TCG. Podés <span style={{ color: "var(--interactive)" }}>ajustar tus notificaciones</span> en cualquier momento.
            <div style={{ marginTop: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5 }}>
              Tradeit TCG SpA · Santiago, Chile · <span style={{ color: "var(--interactive)" }}>Cancelar suscripción</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AlertBody() {
  return (
    <>
      <p style={{ margin: 0 }}>Hola, Carlos.</p>
      <p style={{ marginTop: 14 }}>
        Tu alerta sobre <strong style={{ fontWeight: 500 }}>Charizard ex (S&amp;V 151 · 199/197)</strong> se activó.
        El precio promedio cruzó el umbral que configuraste de <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>USD 400,00</span>.
      </p>

      <div style={{
        marginTop: 16, padding: 14,
        background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-secondary)" }}>
          Precio actual
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontVariantNumeric: "tabular-nums", fontSize: 28, fontWeight: 400 }}>
          USD 412,50
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 12 }}>
          <span style={{ color: "var(--success)", fontFamily: "'IBM Plex Mono', monospace" }}>↑ +3,8% · 30d</span>
          <span style={{ color: "var(--text-muted)" }}>vs. USD 398,20 promedio</span>
        </div>
      </div>

      <Button variant="primary" size="lg" style={{ marginTop: 18, width: "100%" }}>
        Ver detalle en Mulligan
      </Button>

      <p style={{ marginTop: 18, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
        <em style={{ fontStyle: "normal" }}>Tradeit TCG no entrega asesoría financiera ni recomendaciones de compra. Los precios son referenciales y provienen de TCGPlayer y PriceCharting.</em>
      </p>
    </>
  );
}

function WelcomeBody() {
  return (
    <>
      <p style={{ margin: 0 }}>Hola, Carlos.</p>
      <p style={{ marginTop: 14 }}>
        Tu cuenta está lista. Ya puedes seguir cartas, ver sus históricos y configurar alertas para que no te pierdas un movimiento de mercado.
      </p>
      <p style={{ marginTop: 14 }}>
        Para empezar, te sugerimos agregar a tu watchlist las cartas que más te interesen.
      </p>

      <Button variant="primary" size="lg" style={{ marginTop: 16, width: "100%" }}>
        Explorar el catálogo
      </Button>

      <p style={{ marginTop: 22 }}>
        ¿Vas a vender? Verificá tu identidad desde Configuración y publicá tus primeras cartas en minutos.
      </p>
    </>
  );
}

function ListingBody() {
  return (
    <>
      <p style={{ margin: 0 }}>Hola, Camila.</p>
      <p style={{ marginTop: 14 }}>
        Tu publicación de <strong style={{ fontWeight: 500 }}>Mewtwo VMAX (LP)</strong> recibió <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>12 vistas</span> en las últimas 24h y <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>3 watchlists</span> nuevas, pero todavía sin compradores.
      </p>

      <div style={{
        marginTop: 16, padding: 14,
        background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "var(--text-secondary)" }}>Tu precio</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>USD 165,00</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "var(--text-secondary)" }}>Promedio del mercado</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>USD 145,30</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid var(--bg-secondary)" }}>
          <span style={{ color: "var(--text-secondary)" }}>Diferencia</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--warning)" }}>+13,6% sobre mercado</span>
        </div>
      </div>

      <Button variant="primary" size="lg" style={{ marginTop: 18, width: "100%" }}>
        Ajustar precio
      </Button>
    </>
  );
}

window.EmailPreviewScreen = EmailPreviewScreen;
