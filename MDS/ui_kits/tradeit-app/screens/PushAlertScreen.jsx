// PushAlertScreen.jsx — Lock-screen-style push notification preview.

function PushAlertScreen({ onOpen, onDismiss }) {
  return (
    <div style={{
      flex: 1, background: "linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)",
      display: "flex", flexDirection: "column",
      color: "#F0EFEC", padding: "60px 20px 24px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Faux time + date */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ fontSize: 16, fontWeight: 500, opacity: 0.7, letterSpacing: 1 }}>Sábado, 16 de mayo</div>
        <div style={{ fontSize: 92, fontWeight: 200, letterSpacing: -0.04, lineHeight: 1, marginTop: 4 }}>9:41</div>
      </div>

      {/* Push group */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <PushCard
          appName="Mulligan"
          time="ahora"
          title="Charizard ex sube 8,2%"
          body="Pasó de USD 380 a USD 412 en las últimas 24h. Tocá para ver detalle."
          onClick={onOpen}
        />
        <PushCard
          appName="Mulligan"
          time="hace 12 min"
          title="Nuevo listing en tu watchlist"
          body="Pikachu VMAX (NM) publicado a USD 145."
          dimmed
        />
        <PushCard
          appName="Mulligan"
          time="hace 2h"
          title="Umbreon VMAX cruzó USD 500"
          body="Tu alerta de precio se activó. Promedio 30d: USD 478."
          dimmed
        />
      </div>

      <div style={{ flex: 1 }}/>

      <div style={{
        background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 16, padding: "14px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontSize: 12, color: "rgba(240,239,236,.65)",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}>
        <span><i className="ph ph-flashlight" style={{ fontSize: 16, verticalAlign: -2, marginRight: 6 }}/>Linterna</span>
        <span><i className="ph ph-camera" style={{ fontSize: 16, verticalAlign: -2, marginRight: 6 }}/>Cámara</span>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={onDismiss} style={{
          flex: 1, height: 40, borderRadius: 8,
          background: "rgba(255,255,255,0.08)", color: "#F0EFEC",
          border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer",
          fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, fontWeight: 500,
        }}>Cerrar lock screen</button>
        <button onClick={onOpen} style={{
          flex: 1, height: 40, borderRadius: 8,
          background: "#6AAAD8", color: "#131210",
          border: "none", cursor: "pointer",
          fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, fontWeight: 500,
        }}>Abrir Mulligan</button>
      </div>
    </div>
  );
}

function PushCard({ appName, time, title, body, dimmed, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: dimmed ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.16)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderRadius: 14, padding: "12px 14px",
      display: "flex", gap: 12, cursor: onClick ? "pointer" : "default",
      transform: dimmed ? "scale(0.96)" : "scale(1)",
      opacity: dimmed ? 0.85 : 1,
      transition: "transform 200ms ease, opacity 200ms ease",
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: "#1A6FB5",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 28 28">
          <path d="M 6 22 L 6 8 L 11 8 L 14 13 L 17 8 L 22 8 L 22 22 L 19 22 L 19 12 L 16 17 L 12 17 L 9 12 L 9 22 Z" fill="#F8F8F6"/>
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          fontSize: 11, opacity: 0.75, textTransform: "uppercase", letterSpacing: 0.05,
        }}>
          <span>{appName}</span><span>{time}</span>
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 2 }}>{title}</div>
        <div style={{ fontSize: 12.5, opacity: 0.85, marginTop: 2, lineHeight: 1.45 }}>{body}</div>
      </div>
    </div>
  );
}

window.PushAlertScreen = PushAlertScreen;
