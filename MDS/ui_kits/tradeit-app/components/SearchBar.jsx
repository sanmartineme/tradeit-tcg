// SearchBar.jsx — Sticky search + filter bar used at the top of Search screen.

function SearchBar({ value, onChange, onFilter, dark = false }) {
  const bg = dark ? "#252421" : "var(--bg-secondary)";
  const fg = dark ? "var(--bg-secondary)" : "var(--text-primary)";
  const muted = dark ? "var(--text-muted)" : "var(--text-muted)";
  return (
    <div style={{
      padding: "10px 14px 10px",
      background: dark ? "#1E1D1A" : "var(--bg-primary)",
      borderBottom: `1px solid ${dark ? "#2E2D2A" : "var(--border)"}`,
      flexShrink: 0, display: "flex", gap: 8, alignItems: "center",
    }}>
      <label style={{
        flex: 1, display: "flex", alignItems: "center", gap: 8,
        height: 40, padding: "0 14px",
        background: bg, borderRadius: 8, color: fg,
      }}>
        <i className="ph ph-magnifying-glass" style={{ fontSize: 18, color: muted }}/>
        <input
          value={value || ""}
          onChange={e => onChange?.(e.target.value)}
          placeholder="Busca una carta o set"
          style={{
            flex: 1, border: "none", background: "transparent", outline: "none",
            fontSize: 14, color: fg, fontFamily: "'IBM Plex Sans', sans-serif",
          }}
        />
        {value && (
          <button onClick={() => onChange?.("")} style={{
            background: "transparent", border: "none", color: muted, cursor: "pointer", padding: 0,
          }}>
            <i className="ph ph-x-circle" style={{ fontSize: 16 }}/>
          </button>
        )}
      </label>
      <button onClick={onFilter} style={{
        width: 40, height: 40, borderRadius: 8,
        background: "transparent", border: `1px solid ${dark ? "#2E2D2A" : "var(--border)"}`,
        color: fg, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <i className="ph ph-funnel" style={{ fontSize: 20 }}/>
      </button>
    </div>
  );
}

window.SearchBar = SearchBar;
