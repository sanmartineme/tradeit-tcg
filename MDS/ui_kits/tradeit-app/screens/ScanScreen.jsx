// ScanScreen.jsx — Camera-style scan screen.

function ScanScreen({ onClose, onResult }) {
  const [scanning, setScanning] = React.useState(true);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    if (!scanning) return;
    const t = setTimeout(() => {
      setResult(CATALOG[0]); setScanning(false);
    }, 3000);
    return () => clearTimeout(t);
  }, [scanning]);

  return (
    <div style={{ flex: 1, background: "#131210", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      {/* Pseudo viewfinder */}
      <div style={{
        flex: 1, position: "relative",
        background: "radial-gradient(ellipse at center, #252421 0%, #131210 60%, #050504 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Frame guides */}
        <div style={{
          width: 240, height: 336, position: "relative",
          borderRadius: 8,
        }}>
          {/* Corner brackets */}
          {[
            { t: 0, l: 0, br: "8px 0 0 0", borders: "tl" },
            { t: 0, r: 0, br: "0 8px 0 0", borders: "tr" },
            { b: 0, l: 0, br: "0 0 0 8px", borders: "bl" },
            { b: 0, r: 0, br: "0 0 8px 0", borders: "br" },
          ].map((c, i) => {
            const style = {
              position: "absolute", width: 28, height: 28,
              top: c.t, left: c.l, right: c.r, bottom: c.b,
              borderColor: scanning ? "#6AAAD8" : "#2DA67E",
              borderStyle: "solid", borderWidth: 0,
              borderRadius: c.br,
            };
            if (c.borders === "tl") { style.borderTopWidth = 3; style.borderLeftWidth = 3;}
            if (c.borders === "tr") { style.borderTopWidth = 3; style.borderRightWidth = 3;}
            if (c.borders === "bl") { style.borderBottomWidth = 3; style.borderLeftWidth = 3;}
            if (c.borders === "br") { style.borderBottomWidth = 3; style.borderRightWidth = 3;}
            return <div key={i} style={style}/>;
          })}

          {/* Detected card preview */}
          {result && (
            <div style={{
              position: "absolute", inset: 12, borderRadius: 4,
              background: artColorFor(result.name),
              boxShadow: "0 4px 16px rgba(0,0,0,.4)",
              animation: "scanReveal 600ms ease-out",
            }}/>
          )}

          {/* Scanning line */}
          {scanning && (
            <div style={{
              position: "absolute", left: 0, right: 0,
              height: 2, background: "#6AAAD8",
              boxShadow: "0 0 12px #6AAAD8",
              animation: "scanLine 2s ease-in-out infinite",
              top: 12,
            }}/>
          )}
        </div>

        <div style={{
          position: "absolute", top: 20, left: 14, right: 14,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button onClick={onClose} style={{
            width: 40, height: 40, borderRadius: 20,
            background: "rgba(0,0,0,.4)", border: "1px solid rgba(255,255,255,.15)",
            color: "#F0EFEC", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <i className="ph ph-x" style={{ fontSize: 20 }}/>
          </button>
          <button style={{
            width: 40, height: 40, borderRadius: 20,
            background: "rgba(0,0,0,.4)", border: "1px solid rgba(255,255,255,.15)",
            color: "#F0EFEC", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <i className="ph ph-lightning" style={{ fontSize: 20 }}/>
          </button>
        </div>

        <div style={{
          position: "absolute", bottom: 110, left: 0, right: 0, textAlign: "center",
          color: "#F0EFEC", fontFamily: "'IBM Plex Sans', sans-serif",
        }}>
          {scanning ? (
            <>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Enmarca la carta</div>
              <div style={{ fontSize: 12, color: "#9B9892" }}>Reconocimiento automático en curso…</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Carta identificada</div>
              <div style={{ fontSize: 12, color: "#9B9892" }}>Confianza 97% · OCR + image matching</div>
            </>
          )}
        </div>
      </div>

      {/* Result panel */}
      <div style={{
        background: "#1E1D1A", borderTop: "1px solid #2E2D2A",
        padding: 16, color: "#F0EFEC", flexShrink: 0,
      }}>
        {result ? (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 60, borderRadius: 4,
              background: artColorFor(result.name),
            }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{result.name}</div>
              <div style={{ fontSize: 11, color: "#9B9892" }}>{result.number} · {result.set}</div>
              <div style={{ marginTop: 4 }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontVariantNumeric: "tabular-nums",
                  fontSize: 14, fontWeight: 500, color: "#F0EFEC",
                }}>USD {result.price.toFixed(2).replace(".", ",")}</span>
                <span style={{ marginLeft: 8, color: "#2DA67E", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>↑ +{result.delta.toFixed(1).replace(".", ",")}%</span>
              </div>
            </div>
            <button onClick={() => onResult?.(result.id)} style={{
              height: 36, padding: "0 14px", borderRadius: 8,
              background: "#6AAAD8", color: "#131210", border: "none",
              fontWeight: 500, fontSize: 13, cursor: "pointer",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}>Ver detalle</button>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 24, height: 24, borderRadius: "50%",
              border: "2px solid #2E2D2A", borderTopColor: "#6AAAD8",
              animation: "spin 800ms linear infinite",
            }}/>
            <span style={{ fontSize: 13, color: "#9B9892" }}>OCR sobre nombre + número de carta + set symbol…</span>
          </div>
        )}
      </div>
    </div>
  );
}

window.ScanScreen = ScanScreen;
