// TopBar.jsx — App top app bar for Mulligan/Tradeit mobile.
// Theme-aware via CSS variables — light/dark toggled at the .dark wrapper.

function TopBar({ variant = "home", title, onBack, right, rightCount }) {
  return (
    <div style={{
      height: 52, padding: "0 12px",
      display: "flex", alignItems: "center", gap: 8,
      borderBottom: "1px solid var(--border)",
      background: "var(--bg-primary)",
      color: "var(--text-primary)",
      flexShrink: 0,
    }}>
      {variant === "back" ? (
        <button onClick={onBack} style={iconBtn()} aria-label="Volver">
          <i className="ph ph-arrow-left" style={{ fontSize: 22 }}/>
        </button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 4px" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: "var(--interactive)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 28 28">
              <path d="M 6 22 L 6 8 L 11 8 L 14 13 L 17 8 L 22 8 L 22 22 L 19 22 L 19 12 L 16 17 L 12 17 L 9 12 L 9 22 Z" fill="var(--bg-page)"/>
            </svg>
          </div>
          <span style={{ fontSize: 17, fontWeight: 500, letterSpacing: -0.01 }}>Mulligan</span>
        </div>
      )}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        {variant === "back" && title && (
          <span style={{ fontSize: 17, fontWeight: 500 }}>{title}</span>
        )}
      </div>
      {right || (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <button style={iconBtn()} aria-label="Notificaciones">
            <i className="ph ph-bell" style={{ fontSize: 22 }}/>
            {rightCount > 0 && <span style={{
              position: "absolute", top: 6, right: 6,
              width: 8, height: 8, borderRadius: "50%", background: "var(--danger)",
            }}/>}
          </button>
        </div>
      )}
    </div>
  );
}

function iconBtn() {
  return {
    width: 40, height: 40, border: "none", background: "transparent",
    color: "var(--text-primary)", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    borderRadius: 8, position: "relative",
  };
}

window.TopBar = TopBar;
window.iconBtn = iconBtn;
