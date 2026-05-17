// TcgCard.jsx — Card de carta per MULLIGAN Atoms spec.
// Shell: 12px radius, image area, 10px body.
// Product types: single · sealed · graded
// Shell variants (visual treatment of the image area):
//   A · canonical tonal (default) — soft 2-stop gradient by product type
//   B · muted neutral — bg-secondary with a 4px accent stripe on the left
//   C · saturated — deeper, more directional gradient
//   D · dark base — radial dark glow (designed for dark mode)
//   E · paper texture — flat tint + faint diagonal hatching

const TCG_SHELLS = {
  A: {
    single: { background: "linear-gradient(135deg, #EBF2FB 0%, #C5DAEF 100%)" },
    graded: { background: "linear-gradient(135deg, #FAF0D8 0%, #F5D68C 100%)" },
    sealed: { background: "linear-gradient(135deg, #F0EFEC 0%, #D6D4CE 100%)" },
  },
  B: {
    single: { background: "#F8F8F6", borderLeft: "4px solid #1A6FB5" },
    graded: { background: "#F8F8F6", borderLeft: "4px solid #E69A20" },
    sealed: { background: "#F8F8F6", borderLeft: "4px solid #5C5A56" },
  },
  C: {
    single: { background: "linear-gradient(160deg, #C5DAEF 0%, #6AAAD8 100%)" },
    graded: { background: "linear-gradient(160deg, #F5D68C 0%, #E69A20 100%)" },
    sealed: { background: "linear-gradient(160deg, #D6D4CE 0%, #9B9892 100%)" },
  },
  D: {
    single: { background: "radial-gradient(ellipse at top, #042D55 0%, #131210 80%)" },
    graded: { background: "radial-gradient(ellipse at top, #5E3B06 0%, #131210 80%)" },
    sealed: { background: "radial-gradient(ellipse at top, #2E2D2A 0%, #131210 80%)" },
  },
  E: {
    single: {
      backgroundColor: "#EBF2FB",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,.025) 0, rgba(0,0,0,.025) 1px, transparent 1px, transparent 6px)",
    },
    graded: {
      backgroundColor: "#FAF0D8",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,.025) 0, rgba(0,0,0,.025) 1px, transparent 1px, transparent 6px)",
    },
    sealed: {
      backgroundColor: "#F0EFEC",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,.025) 0, rgba(0,0,0,.025) 1px, transparent 1px, transparent 6px)",
    },
  },
};

function TcgCard({ card, onClick, shellVariant = "A" }) {
  const {
    name, set, number, rarity, condition, price, delta, period = "30d",
    productType = "single", grading,
  } = card;

  const shellStyle = (TCG_SHELLS[shellVariant] || TCG_SHELLS.A)[productType];
  const isDarkShell = shellVariant === "D";

  // Placeholder art — deterministic saturated color per card name.
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  const palette = ["#D94646", "#1A6FB5", "#E69A20", "#2DA67E", "#0D4A80", "#9B6510", "#5C5A56", "#A02C2C"];
  const artColor = palette[Math.abs(h) % palette.length];

  // On dark shells the in-shell rarity badge needs inverted styling.
  const rarityBg = isDarkShell ? "rgba(255,255,255,.10)" : "rgba(255,255,255,.85)";
  const rarityFg = isDarkShell ? "#F0EFEC" : "#131210";

  return (
    <button onClick={onClick} style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,.06)",
      display: "flex", flexDirection: "column",
      padding: 0, cursor: "pointer", textAlign: "left",
      fontFamily: "'IBM Plex Sans', sans-serif",
      transition: "border-color 100ms ease-out, transform 100ms ease-out",
      width: "100%",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-em)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
    >
      <div style={{
        height: 130, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        ...shellStyle,
      }}>
        <div style={{
          width: productType === "sealed" ? 90 : 76,
          height: productType === "sealed" ? 84 : 108,
          borderRadius: productType === "sealed" ? 8 : 6,
          background: artColor,
          boxShadow: "0 4px 12px rgba(0,0,0,.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(255,255,255,.55)", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace",
        }}>{productType === "sealed" ? "ETB" : "art"}</div>

        {productType === "graded" && grading ? (
          <span style={{
            position: "absolute", top: 8, right: 8,
            background: "#131210", color: "#F0EFEC",
            height: 20, padding: "0 8px", lineHeight: "20px",
            borderRadius: 4, fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500,
            letterSpacing: 0.04,
          }}>{grading}</span>
        ) : rarity ? (
          <span style={{
            position: "absolute", top: 8, right: 8,
            background: rarityBg, color: rarityFg,
            height: 20, padding: "0 8px", lineHeight: "20px",
            borderRadius: 999, fontSize: 10.5, fontWeight: 500,
            backdropFilter: isDarkShell ? "blur(8px)" : "none",
          }}>{rarity}</span>
        ) : null}
      </div>

      <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{
          fontSize: 13, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.3,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{name}</div>
        <div style={{
          fontSize: 11, color: "var(--text-muted)",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{number ? `${number} · ${set}` : set}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
          {condition ? <ConditionBadge code={condition}/> : <span style={{
            height: 20, display: "inline-flex", alignItems: "center", padding: "0 8px",
            borderRadius: 999, background: "var(--bg-secondary)", color: "var(--text-secondary)",
            fontSize: 11, fontWeight: 500,
          }}>{productType === "sealed" ? "Sealed" : productType === "graded" ? "Graded" : "—"}</span>}
          <Price value={price} size="sm"/>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}>{period}</span>
          <Delta value={delta} period={period} size="sm"/>
        </div>
      </div>
    </button>
  );
}

window.TcgCard = TcgCard;
window.TCG_SHELLS = TCG_SHELLS;
