// Overlays.jsx — Modal · BottomSheet · Skeleton primitives.

function Modal({ open, onClose, title, summary, children, primaryLabel, onPrimary, primaryVariant = "primary", secondaryLabel = "Cancelar" }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 40,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 18,
      animation: "fadeIn 200ms ease-out both",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "100%", maxWidth: 360,
        background: "var(--bg-primary)", color: "var(--text-primary)",
        borderRadius: 16, overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,.12)",
        animation: "modalIn 300ms ease-in-out both",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px 6px" }}>
          <div style={{ fontSize: 17, fontWeight: 500 }}>{title}</div>
          <button onClick={onClose} aria-label="Cerrar" style={{
            width: 32, height: 32, borderRadius: 8, border: "none",
            background: "transparent", color: "var(--text-secondary)", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <i className="ph ph-x" style={{ fontSize: 18 }}/>
          </button>
        </div>
        <div style={{ padding: "4px 20px 14px", fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.55 }}>
          {children}
          {summary && (
            <div style={{
              marginTop: 12, padding: "10px 12px",
              border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg-page)",
              fontSize: 12.5, color: "var(--text-primary)",
            }}>{summary}</div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "10px 16px 16px", borderTop: "1px solid var(--bg-secondary)" }}>
          <Button variant="secondary" onClick={onClose}>{secondaryLabel}</Button>
          {primaryLabel && <Button variant={primaryVariant} onClick={onPrimary}>{primaryLabel}</Button>}
        </div>
      </div>
    </div>
  );
}

function BottomSheet({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", zIndex: 35,
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      animation: "fadeIn 200ms ease-out both",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--bg-primary)", color: "var(--text-primary)",
        borderRadius: "16px 16px 0 0",
        borderTop: "1px solid var(--border)",
        boxShadow: "0 -4px 24px rgba(0,0,0,.16)",
        padding: "8px 0 18px",
        maxHeight: "85%", display: "flex", flexDirection: "column",
        animation: "sheetIn 300ms ease-out both",
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--border)", margin: "8px auto 14px", flexShrink: 0 }}/>
        {title && (
          <div style={{ padding: "0 20px 12px", borderBottom: "1px solid var(--bg-secondary)", fontSize: 16, fontWeight: 500, flexShrink: 0 }}>
            {title}
          </div>
        )}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
          {children}
        </div>
        {footer && (
          <div style={{ padding: "12px 20px 0", display: "flex", gap: 8, flexShrink: 0, borderTop: "1px solid var(--bg-secondary)" }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// Skeleton primitive — drop-in placeholder during loading
function Skeleton({ w = "100%", h = 12, radius = 4, style = {} }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: radius,
      background: "linear-gradient(90deg, var(--bg-secondary) 25%, var(--bg-page) 50%, var(--bg-secondary) 75%)",
      backgroundSize: "1200px",
      animation: "shimmer 1.4s ease-in-out infinite",
      ...style,
    }}/>
  );
}

// Skeleton card matching TcgCard dimensions
function CardSkeleton({ tonal = "single" }) {
  const bg = {
    single: "linear-gradient(135deg, #EBF2FB 0%, #C5DAEF 100%)",
    graded: "linear-gradient(135deg, #FAF0D8 0%, #F5D68C 100%)",
    sealed: "linear-gradient(135deg, #F0EFEC 0%, #D6D4CE 100%)",
  }[tonal];
  return (
    <div style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12,
      overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.06)",
    }}>
      <div style={{ height: 130, background: bg }}/>
      <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 6 }}>
        <Skeleton w="70%" h={12}/>
        <Skeleton w="90%" h={10}/>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <Skeleton w={32} h={20} radius={10}/>
          <Skeleton w={62} h={12}/>
        </div>
      </div>
    </div>
  );
}

function Spinner({ size = 36, accent = "var(--interactive)" }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      border: `${Math.max(2, size / 12)}px solid var(--bg-secondary)`,
      borderTopColor: accent,
      animation: "spin 800ms linear infinite",
    }}/>
  );
}

Object.assign(window, { Modal, BottomSheet, Skeleton, CardSkeleton, Spinner });
