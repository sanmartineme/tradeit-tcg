// Atoms.jsx — Button, Badge, Avatar, Chip, EmptyState
// All styled with Mulligan tokens (inline since no shared sheet inside JSX).

const M = {
  blue60: "var(--interactive)", blue80: "var(--interactive-hover)", blue10: "#EBF2FB", blue100: "#042D55",
  gray0: "var(--bg-page)", gray10: "var(--bg-secondary)", gray20: "var(--border)", gray40: "var(--text-muted)",
  gray60: "var(--text-secondary)", gray80: "#2E2D2A", gray100: "var(--text-primary)",
  teal10: "#E0F4EF", teal40: "var(--success)", teal60: "#0F6E56",
  amber10: "#FAF0D8", amber40: "var(--warning)", amber60: "#9B6510",
  red10: "#FCEAEA", red40: "var(--danger)", red60: "#A02C2C",
};
window.M = M;

function Button({ children, variant = "primary", size = "md", onClick, icon, style = {}, disabled }) {
  const base = {
    border: "1px solid transparent", borderRadius: 8, fontWeight: 500,
    fontFamily: "'IBM Plex Sans', sans-serif", cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    transition: "background 100ms ease-out, transform 100ms ease-out, border-color 100ms ease-out",
    opacity: disabled ? 0.4 : 1, whiteSpace: "nowrap",
  };
  const sizes = {
    sm: { height: 32, padding: "0 12px", fontSize: 13 },
    md: { height: 40, padding: "0 16px", fontSize: 14 },
    lg: { height: 48, padding: "0 20px", fontSize: 15 },
  };
  const variants = {
    primary: { background: "var(--interactive)", color: "var(--on-interactive)" },
    secondary: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border)" },
    ghost: { background: "transparent", color: "var(--interactive)" },
    danger: { background: "var(--danger)", color: "var(--on-danger)" },
  };
  return (
    <button
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onClick={disabled ? undefined : onClick}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
      disabled={disabled}
    >
      {icon && <i className={"ph " + icon} style={{ fontSize: size === "lg" ? 20 : 16 }}/>}
      {children}
    </button>
  );
}

function Badge({ children, variant = "info" }) {
  const styles = {
    info:    { bg: M.blue10, fg: M.blue100 },
    success: { bg: M.teal10, fg: M.teal60 },
    warning: { bg: M.amber10, fg: M.amber60 },
    danger:  { bg: M.red10,  fg: M.red60 },
    neutral: { bg: "var(--bg-secondary)", fg: "var(--text-secondary)" },
    grading: { bg: "var(--text-primary)", fg: "var(--bg-secondary)" },
  };
  const s = styles[variant];
  return (
    <span style={{
      height: 20, padding: "0 8px", borderRadius: 999,
      background: s.bg, color: s.fg,
      fontSize: 11, fontWeight: 500, lineHeight: "20px",
      display: "inline-flex", alignItems: "center", letterSpacing: variant === "grading" ? 0.04 : 0,
      fontFamily: variant === "grading" ? "'IBM Plex Mono', monospace" : "inherit",
    }}>{children}</span>
  );
}

// Condition badge map — TCG canonical
function ConditionBadge({ code }) {
  const map = {
    M: "success", NM: "info", LP: "warning", MP: "warning",
    HP: "danger", DMG: "danger",
  };
  return <Badge variant={map[code] || "neutral"}>{code}</Badge>;
}

function Chip({ children, active, onClick, icon }) {
  return (
    <button onClick={onClick} style={{
      height: 28, padding: "0 12px", borderRadius: 14,
      background: active ? "var(--interactive)" : "transparent",
      border: `1px solid ${active ? "var(--interactive)" : "var(--border)"}`,
      color: active ? "var(--on-interactive)" : "var(--text-secondary)",
      fontSize: 12, fontWeight: 500, cursor: "pointer",
      display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "'IBM Plex Sans', sans-serif", flexShrink: 0,
    }}>
      {icon && <i className={"ph " + icon} style={{ fontSize: 12 }}/>}
      {children}
    </button>
  );
}

// Deterministic avatar color from username hash — raw hex, not theme-bound.
function avColor(name) {
  const palette = ["#1A6FB5", "#0D4A80", "#0F6E56", "#9B6510", "#A02C2C", "#2E2D2A", "#042D55"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return palette[Math.abs(h) % palette.length];
}

function Avatar({ name = "U", size = "sm" }) {
  const sizes = { sm: { d: 28, fs: 10 }, md: { d: 40, fs: 14 }, lg: { d: 56, fs: 18 } };
  const s = sizes[size];
  const initials = name.split(/\s+/).map(p => p[0]).join("").slice(0, 2).toUpperCase();
  return (
    <span style={{
      width: s.d, height: s.d, borderRadius: "50%",
      background: avColor(name), color: "#fff",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 500, fontSize: s.fs,
      flexShrink: 0,
    }}>{initials}</span>
  );
}

function EmptyState({ icon = "ph-magnifying-glass", title, desc, cta, onCta }) {
  return (
    <div style={{
      padding: "32px 24px", display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center", gap: 10,
    }}>
      <i className={"ph " + icon} style={{ fontSize: 40, color: "var(--text-muted)" }}/>
      <div style={{ fontSize: 16, fontWeight: 500, color: "var(--text-primary)" }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 280 }}>{desc}</div>
      {cta && <Button onClick={onCta} style={{ marginTop: 6 }}>{cta}</Button>}
    </div>
  );
}

// Tendency arrow + delta
function Delta({ value, period = "30d", size = "sm" }) {
  if (value == null) return <span style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>– · {period}</span>;
  const up = value >= 0;
  const fs = { sm: 11, md: 13, lg: 14 }[size];
  return (
    <span style={{
      color: up ? "var(--success)" : "var(--danger)",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: fs, fontVariantNumeric: "tabular-nums",
      display: "inline-flex", alignItems: "baseline", gap: 4,
    }}>
      <span>{up ? "↑" : "↓"}</span>
      <span>{up ? "+" : "−"}{Math.abs(value).toFixed(1).replace(".", ",")}%</span>
      <span style={{ color: "var(--text-muted)", fontSize: fs - 1, marginLeft: 4 }}>· {period}</span>
    </span>
  );
}

// Price text
function Price({ value, currency = "USD", size = "md" }) {
  const sizes = {
    sm: { fs: 13, fw: 500 },
    md: { fs: 18, fw: 500 },
    lg: { fs: 28, fw: 400 },
    xl: { fs: 36, fw: 300 },
  };
  const s = sizes[size];
  // LatAm format: thousands with dot, decimals with comma. 12450.5 → "12.450,50"
  const [intPart, decPart] = value.toFixed(2).split(".");
  const intGrouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const formatted = intGrouped + "," + decPart;
  return (
    <span style={{
      fontFamily: "'IBM Plex Mono', monospace",
      fontVariantNumeric: "tabular-nums",
      fontSize: s.fs, fontWeight: s.fw,
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
    }}>{currency} {formatted}</span>
  );
}

Object.assign(window, { Button, Badge, ConditionBadge, Chip, Avatar, EmptyState, Delta, Price, avColor });
