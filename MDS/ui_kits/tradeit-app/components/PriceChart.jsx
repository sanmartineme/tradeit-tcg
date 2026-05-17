// PriceChart.jsx — Hand-rolled SVG line chart for price history.
// Carbon-flat: thin line, grid hidden, dot on hover, period selector.

function PriceChart({ data, periods = ["1m", "3m", "9m", "12m"], active = "3m", onPeriod }) {
  // Each `data` is keyed by period and is an array of [ts, price].
  const series = data?.[active] || [];

  const w = 320, h = 160, padL = 8, padR = 8, padT = 12, padB = 22;
  const innerW = w - padL - padR, innerH = h - padT - padB;

  const xs = series.map((_, i) => padL + (i / Math.max(series.length - 1, 1)) * innerW);
  const ys_raw = series.map(d => d[1]);
  const min = Math.min(...ys_raw), max = Math.max(...ys_raw);
  const range = Math.max(max - min, 0.01);
  const ys = ys_raw.map(v => padT + innerH - ((v - min) / range) * innerH);

  const path = xs.map((x, i) => (i === 0 ? "M" : "L") + x + "," + ys[i]).join(" ");
  const areaPath = path + ` L${xs[xs.length - 1]},${padT + innerH} L${xs[0]},${padT + innerH} Z`;

  // Last point — highlight
  const lastX = xs[xs.length - 1], lastY = ys[ys.length - 1];
  const firstPrice = ys_raw[0], lastPrice = ys_raw[ys_raw.length - 1];
  const trendUp = lastPrice >= firstPrice;
  const stroke = trendUp ? "var(--success)" : "var(--danger)";
  const fillStart = trendUp ? "rgba(45,166,126,.14)" : "rgba(217,70,70,.14)";

  return (
    <div style={{
      background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 12, padding: 16,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>Historial de precios</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}>
            Últimos {active === "1m" ? "30 días" : active === "3m" ? "3 meses" : active === "9m" ? "9 meses" : "12 meses"}
          </div>
        </div>
        <div style={{ display: "inline-flex", background: "var(--bg-secondary)", borderRadius: 6, padding: 2 }}>
          {periods.map(p => {
            const isAct = p === active;
            return (
              <button key={p} onClick={() => onPeriod?.(p)} style={{
                padding: "4px 10px",
                border: isAct ? "1px solid var(--border)" : "1px solid transparent",
                background: isAct ? "var(--bg-primary)" : "transparent",
                color: isAct ? "var(--text-primary)" : "var(--text-secondary)", fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11, fontWeight: 500, borderRadius: 4, cursor: "pointer",
                boxShadow: isAct ? "0 1px 4px rgba(0,0,0,.06)" : "none",
              }}>{p}</button>
            );
          })}
        </div>
      </div>

      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="160" style={{ display: "block" }}>
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fillStart}/>
            <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
          </linearGradient>
        </defs>

        {/* baseline gridlines (very subtle) */}
        {[0.25, 0.5, 0.75].map(p => (
          <line key={p} x1={padL} x2={w - padR} y1={padT + innerH * p} y2={padT + innerH * p}
                stroke="var(--bg-secondary)" strokeWidth="1"/>
        ))}

        <path d={areaPath} fill="url(#cg)"/>
        <path d={path} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>

        {/* last dot */}
        <circle cx={lastX} cy={lastY} r="3.5" fill="var(--bg-primary)" stroke={stroke} strokeWidth="2"/>

        {/* x-axis tick labels (3 evenly spaced) */}
        {series.length > 2 && [0, Math.floor(series.length / 2), series.length - 1].map(i => (
          <text key={i} x={xs[i]} y={h - 4} fill="var(--text-muted)"
                fontSize="10" fontFamily="IBM Plex Mono, monospace"
                textAnchor={i === 0 ? "start" : i === series.length - 1 ? "end" : "middle"}>
            {series[i][0]}
          </text>
        ))}
      </svg>

      <div style={{
        marginTop: 8, fontSize: 11, color: "var(--text-muted)",
        fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.4,
      }}>
        Datos consolidados de TCGPlayer y PriceCharting. Última sincronización: hace 12 min.
      </div>
    </div>
  );
}

// Mock generator
function generatePriceSeries() {
  function gen(n, start, drift, vol, labels) {
    const out = []; let v = start;
    for (let i = 0; i < n; i++) {
      v = v + drift + (Math.sin(i * 0.7) * vol * 0.6) + ((i * 91 % 13 - 6) / 6) * vol * 0.4;
      out.push([labels[Math.floor(i / n * labels.length)] || "", Math.max(v, start * 0.6)]);
    }
    return out;
  }
  return {
    "1m":  gen(30, 380, 1.1,  6, ["−30d", "−15d", "hoy"]),
    "3m":  gen(60, 350, 1.05, 12, ["−3m", "−2m", "−1m", "hoy"]),
    "9m":  gen(90, 290, 1.5,  18, ["−9m", "−6m", "−3m", "hoy"]),
    "12m": gen(120, 240, 1.6, 24, ["−12m", "−9m", "−6m", "−3m", "hoy"]),
  };
}

window.PriceChart = PriceChart;
window.generatePriceSeries = generatePriceSeries;
