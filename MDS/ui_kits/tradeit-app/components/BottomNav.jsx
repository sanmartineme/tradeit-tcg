// BottomNav.jsx — 4-tab bottom nav per MULLIGAN spec.
// Theme-aware via CSS variables.

function BottomNav({ active = "search", onChange }) {
  const tabs = [
    { id: "home",    label: "Inicio",  icon: "ph-house" },
    { id: "search",  label: "Buscar",  icon: "ph-magnifying-glass" },
    { id: "ops",     label: "Operaciones", icon: "ph-list-bullets" },
    { id: "profile", label: "Perfil",  icon: "ph-user" },
  ];

  return (
    <div style={{
      height: 64, background: "var(--bg-primary)",
      borderTop: "1px solid var(--border)",
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      flexShrink: 0,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange?.(t.id)} style={{
            border: "none", background: "transparent",
            color: isActive ? "var(--interactive)" : "var(--text-muted)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 2, cursor: "pointer", padding: "8px 4px",
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}>
            <i className={"ph " + (isActive ? "ph-fill ph-" + t.icon.replace("ph-", "") : t.icon)} style={{ fontSize: 22 }}/>
            <span style={{ fontSize: 10, fontWeight: isActive ? 500 : 400 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

window.BottomNav = BottomNav;
