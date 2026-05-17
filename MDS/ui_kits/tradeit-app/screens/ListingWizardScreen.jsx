// ListingWizardScreen.jsx — Multi-step wizard to publish a card.
// Per PRD §6.6 RF-6.2: identify → variant → condition → price → publish.

function ListingWizardScreen({ onClose, onPublish }) {
  const STEPS = ["Carta", "Variante", "Estado", "Precio"];
  const [step, setStep] = React.useState(0);
  const [card, setCard] = React.useState(null);
  const [variant, setVariant] = React.useState(null);
  const [condition, setCondition] = React.useState(null);
  const [price, setPrice] = React.useState("");

  const canNext = [
    !!card,
    !!variant,
    !!condition,
    !!price && parseFloat(price.replace(",", ".")) > 0,
  ][step];

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else onPublish?.({ card, variant, condition, price });
  };

  const market = card?.price || 0;
  const priceNum = parseFloat(price.replace(",", ".")) || 0;
  const overMarket = market > 0 && priceNum > market * 1.5;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-page)" }}>
      <TopBar variant="back" title="Publicar producto" onBack={onClose} right={<div/>}/>

      {/* Stepper */}
      <div style={{
        background: "var(--bg-primary)", borderBottom: "1px solid var(--border)",
        padding: "12px 18px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {STEPS.map((label, i) => (
            <React.Fragment key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 11,
                  background: i < step ? "var(--success)" : i === step ? "var(--interactive)" : "var(--bg-secondary)",
                  color: i <= step ? "var(--on-interactive)" : "var(--text-muted)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 500, fontFamily: "'IBM Plex Mono', monospace",
                }}>
                  {i < step ? <i className="ph ph-check" style={{ fontSize: 13 }}/> : i + 1}
                </div>
                <span style={{
                  fontSize: 12, fontWeight: i === step ? 500 : 400,
                  color: i === step ? "var(--text-primary)" : "var(--text-muted)",
                }}>{label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: 1, background: i < step ? "var(--success)" : "var(--border)" }}/>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {step === 0 && <StepIdentify selected={card} onSelect={setCard}/>}
        {step === 1 && <StepVariant card={card} selected={variant} onSelect={setVariant}/>}
        {step === 2 && <StepCondition selected={condition} onSelect={setCondition}/>}
        {step === 3 && <StepPrice value={price} onChange={setPrice} market={market} variant={variant} overMarket={overMarket}/>}
      </div>

      <div style={{
        padding: "12px 16px",
        background: "var(--bg-primary)", borderTop: "1px solid var(--border)",
        display: "flex", gap: 8, flexShrink: 0,
      }}>
        {step > 0 && <Button variant="secondary" onClick={() => setStep(step - 1)} style={{ flex: 1 }}>Atrás</Button>}
        <Button variant="primary" onClick={next} disabled={!canNext} style={{ flex: 1.5 }}>
          {step < STEPS.length - 1 ? "Siguiente" : "Publicar"}
        </Button>
      </div>
    </div>
  );
}

function StepIdentify({ selected, onSelect }) {
  const [q, setQ] = React.useState("");
  const matches = CATALOG.filter(c => !q || c.name.toLowerCase().includes(q.toLowerCase())).slice(0, 6);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <span style={labelUp}>¿Qué carta vas a publicar?</span>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
          Buscá por nombre o usá el scan para identificarla automáticamente.
        </div>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <label style={{
          flex: 1, display: "flex", alignItems: "center", gap: 8,
          height: 40, padding: "0 14px",
          background: "var(--bg-primary)", border: "1px solid var(--border)",
          borderRadius: 8, color: "var(--text-primary)",
        }}>
          <i className="ph ph-magnifying-glass" style={{ fontSize: 16, color: "var(--text-muted)" }}/>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Busca una carta o set" style={{
            flex: 1, border: "none", background: "transparent", outline: "none", fontSize: 13.5,
            color: "var(--text-primary)", fontFamily: "'IBM Plex Sans', sans-serif",
          }}/>
        </label>
        <Button variant="secondary" icon="ph-camera">Scan</Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {matches.map(c => {
          const on = selected?.id === c.id;
          return (
            <button key={c.id} onClick={() => onSelect(c)} style={{
              display: "grid", gridTemplateColumns: "36px 1fr auto",
              gap: 12, padding: 12, alignItems: "center",
              background: "var(--bg-primary)",
              border: `1px solid ${on ? "var(--interactive)" : "var(--border)"}`,
              borderRadius: 10, cursor: "pointer", textAlign: "left",
              boxShadow: on ? "0 0 0 2px rgba(26,111,181,.15)" : "none",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}>
              <div style={{
                width: 36, height: 50, borderRadius: 4,
                background: artColorFor(c.name),
              }}/>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text-primary)" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{c.setShort || c.set}</div>
              </div>
              <Price value={c.price} size="sm"/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepVariant({ card, selected, onSelect }) {
  const variants = card?.variants || [
    { label: "Holo regular", price: card?.price || 0, delta: 0 },
    { label: "Reverse Holo", price: (card?.price || 0) * 0.6, delta: -2.1 },
    { label: "Full Art", price: (card?.price || 0) * 1.4, delta: 5.1 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <span style={labelUp}>Elegí la variante</span>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
          Algunas cartas tienen versiones distintas (holo, full art, alt art). El precio cambia según la variante.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {variants.map(v => {
          const on = selected?.label === v.label;
          return (
            <button key={v.label} onClick={() => onSelect(v)} style={{
              display: "grid", gridTemplateColumns: "1fr auto auto",
              gap: 12, padding: 14, alignItems: "baseline",
              background: "var(--bg-primary)",
              border: `1px solid ${on ? "var(--interactive)" : "var(--border)"}`,
              borderRadius: 10, cursor: "pointer", textAlign: "left",
              boxShadow: on ? "0 0 0 2px rgba(26,111,181,.15)" : "none",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}>
              <span style={{ fontSize: 14, color: "var(--text-primary)" }}>{v.label}</span>
              <Price value={v.price} size="sm"/>
              <Delta value={v.delta} period="30d" size="sm"/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepCondition({ selected, onSelect }) {
  const conds = [
    { code: "M",   label: "Mint",              desc: "Perfecta. Recién sacada del sobre." },
    { code: "NM",  label: "Near Mint",         desc: "Casi perfecta. Leves marcas de mazo." },
    { code: "LP",  label: "Lightly Played",    desc: "Ligeramente usada. Marcas visibles de cerca." },
    { code: "MP",  label: "Moderately Played", desc: "Marcas claras en bordes y superficie." },
    { code: "HP",  label: "Heavily Played",    desc: "Desgaste muy visible. Solo juego casual." },
    { code: "DMG", label: "Damaged",           desc: "Doblada, rasgada o daño estructural." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <span style={labelUp}>Condición declarada</span>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
          Sé honesto: los compradores comparan la condición con las fotos.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {conds.map(c => {
          const on = selected?.code === c.code;
          return (
            <button key={c.code} onClick={() => onSelect(c)} style={{
              display: "grid", gridTemplateColumns: "48px 1fr 18px",
              gap: 14, padding: 14, alignItems: "center",
              background: "var(--bg-primary)",
              border: `1px solid ${on ? "var(--interactive)" : "var(--border)"}`,
              borderRadius: 10, cursor: "pointer", textAlign: "left",
              boxShadow: on ? "0 0 0 2px rgba(26,111,181,.15)" : "none",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}>
              <ConditionBadge code={c.code}/>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text-primary)" }}>{c.label}</div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 2 }}>{c.desc}</div>
              </div>
              <div style={{
                width: 18, height: 18, borderRadius: "50%",
                border: `1.5px solid ${on ? "var(--interactive)" : "var(--border-em)"}`,
                background: on ? "var(--interactive)" : "transparent",
              }}>
                {on && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--on-interactive)", margin: "5px auto" }}/>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepPrice({ value, onChange, market, variant, overMarket }) {
  const refPrice = variant?.price || market;
  const suggLow = (refPrice * 0.9).toFixed(2).replace(".", ",");
  const suggHigh = (refPrice * 1.1).toFixed(2).replace(".", ",");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <span style={labelUp}>Fijá un precio</span>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
          Te sugerimos un rango basado en el mercado actual.
        </div>
      </div>

      <div>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)" }}>Precio · USD</span>
        <div style={{
          marginTop: 6, display: "flex", alignItems: "center", gap: 10,
          background: "var(--bg-primary)", border: `1px solid ${overMarket ? "var(--warning)" : "var(--border-em)"}`,
          borderRadius: 8, padding: "0 16px", height: 56,
          boxShadow: overMarket ? "0 0 0 2px rgba(230,154,32,.15)" : undefined,
        }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-muted)", fontSize: 18 }}>USD</span>
          <input
            value={value}
            onChange={e => onChange(e.target.value.replace(/[^0-9,.]/g, ""))}
            placeholder="0,00"
            inputMode="decimal"
            style={{
              flex: 1, border: "none", background: "transparent", outline: "none",
              fontFamily: "'IBM Plex Mono', monospace", fontVariantNumeric: "tabular-nums",
              fontSize: 26, fontWeight: 400, color: "var(--text-primary)",
            }}
          />
        </div>
        {overMarket && (
          <div style={{ fontSize: 12, color: "var(--warning)", marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <i className="ph ph-warning" style={{ fontSize: 14 }}/>
            Tu precio está más de 50% sobre el promedio del mercado.
          </div>
        )}
      </div>

      <div style={{
        background: "var(--bg-primary)", border: "1px solid var(--border)",
        borderRadius: 10, padding: 14,
      }}>
        <span style={labelUp}>Referencia de mercado</span>
        <div style={{
          marginTop: 8, display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 6, columnGap: 16,
          fontSize: 13, color: "var(--text-secondary)",
        }}>
          <span>Promedio 30d</span><Price value={refPrice} size="sm"/>
          <span>Rango sugerido</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-primary)" }}>USD {suggLow} – {suggHigh}</span>
        </div>
      </div>
    </div>
  );
}

window.ListingWizardScreen = ListingWizardScreen;
