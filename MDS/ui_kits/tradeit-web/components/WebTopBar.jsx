// WebTopBar.jsx — Desktop top navigation bar.
// 48px sticky · logo left · search center · auth / avatar right.

function WebTopBar({ user = null, onSignIn, onSignUp }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      height: 48, background: "var(--bg-primary)",
      borderBottom: "1px solid var(--border)",
      display: "grid", gridTemplateColumns: "auto 1fr auto",
      alignItems: "center", padding: "0 24px", gap: 24,
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      {/* Brand */}
      <a href="#home" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "var(--text-primary)" }}>
        <div style={{
          width: 24, height: 24, borderRadius: 6,
          background: "var(--interactive)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="18" height="18" viewBox="0 0 28 28">
            <path d="M 6 22 L 6 8 L 11 8 L 14 13 L 17 8 L 22 8 L 22 22 L 19 22 L 19 12 L 16 17 L 12 17 L 9 12 L 9 22 Z" fill="var(--on-interactive)"/>
          </svg>
        </div>
        <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: -0.01 }}>Mulligan</span>
        <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace", marginLeft: 4 }}>· Tradeit TCG</span>
      </a>

      {/* Search */}
      <label style={{
        display: "flex", alignItems: "center", gap: 8,
        height: 32, padding: "0 12px",
        background: "var(--bg-secondary)", borderRadius: 4,
        maxWidth: 420, justifySelf: "center", width: "100%",
        color: "var(--text-primary)",
      }}>
        <i className="ph ph-magnifying-glass" style={{ fontSize: 16, color: "var(--text-muted)" }}/>
        <input placeholder="Busca una carta, set o vendedor" style={{
          flex: 1, border: "none", background: "transparent", outline: "none",
          fontSize: 13, color: "var(--text-primary)", fontFamily: "'IBM Plex Sans', sans-serif",
        }}/>
        <kbd style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, padding: "1px 6px",
          background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 4,
          color: "var(--text-muted)",
        }}>⌘ K</kbd>
      </label>

      {/* Nav links + Auth */}
      <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <a style={navLink}>Catálogo</a>
        <a style={navLink}>Mercado</a>
        <a style={navLink}>Precios</a>
        <span style={{ width: 1, height: 22, background: "var(--border)", margin: "0 8px" }}/>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button style={iconBtnWeb()} aria-label="Notificaciones">
              <i className="ph ph-bell" style={{ fontSize: 18 }}/>
              <span style={{ position: "absolute", top: 4, right: 4, width: 6, height: 6, borderRadius: "50%", background: "var(--danger)" }}/>
            </button>
            <Avatar name={user} size="sm"/>
          </div>
        ) : (
          <>
            <button onClick={onSignIn} style={{ ...btnReset, ...navLink, padding: "0 12px" }}>Iniciar sesión</button>
            <button onClick={onSignUp} style={{
              ...btnReset,
              height: 32, padding: "0 14px", borderRadius: 8,
              background: "var(--interactive)", color: "var(--on-interactive)",
              fontWeight: 500, fontSize: 13,
            }}>Crear cuenta</button>
          </>
        )}
      </nav>
    </header>
  );
}

const navLink = {
  display: "inline-flex", alignItems: "center",
  height: 32, padding: "0 10px",
  fontSize: 13, color: "var(--text-secondary)",
  textDecoration: "none", borderRadius: 6,
  cursor: "pointer",
};
const btnReset = {
  border: "none", background: "transparent",
  fontFamily: "'IBM Plex Sans', sans-serif", cursor: "pointer",
};
function iconBtnWeb() {
  return {
    width: 32, height: 32, border: "none", background: "transparent",
    color: "var(--text-primary)", cursor: "pointer", borderRadius: 6,
    display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
  };
}

Object.assign(window, { WebTopBar, navLink, btnReset, iconBtnWeb });
