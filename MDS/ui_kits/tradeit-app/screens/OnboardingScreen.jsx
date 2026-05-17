// OnboardingScreen.jsx — 4 onboarding cards + role selection.
// Per content.md §4.8, §4.9. Stays in app shell with progress dots, no top bar.

function OnboardingScreen({ onFinish }) {
  const slides = [
    {
      icon: "ph-heart",
      title: "Sigue las cartas que te importan.",
      body: "Agrega cartas a tu watchlist y mira cómo se mueven en el mercado.",
    },
    {
      icon: "ph-chart-line-up",
      title: "Datos como los de un trader.",
      body: "Precios, tendencias e históricos consolidados de fuentes oficiales.",
    },
    {
      icon: "ph-camera",
      title: "Identifica cartas en segundos.",
      body: "Apuntá con la cámara y te decimos qué carta es y cuánto vale.",
    },
    {
      icon: "ph-handshake",
      title: "Compra o vende cuando estés listo.",
      body: "Publicá tus cartas o explorá las que otros publicaron.",
    },
  ];

  const [step, setStep] = React.useState(0);
  const [roles, setRoles] = React.useState([]);
  const isRoleStep = step === slides.length;

  const toggleRole = r => setRoles(s => s.includes(r) ? s.filter(x => x !== r) : [...s, r]);

  if (isRoleStep) {
    return (
      <div style={{ flex: 1, padding: "32px 22px 24px", background: "var(--bg-page)", display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-muted)" }}>Paso 5 de 5</span>
        <div style={{ fontSize: 24, fontWeight: 500, marginTop: 14, color: "var(--text-primary)", letterSpacing: -0.01, lineHeight: 1.25 }}>
          ¿Cómo vas a usar Tradeit?
        </div>
        <div style={{ fontSize: 13.5, color: "var(--text-secondary)", marginTop: 8, lineHeight: 1.5 }}>
          Elegí uno o varios perfiles. Podés cambiar esto cuando quieras desde Configuración.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 22, flex: 1 }}>
          {[
            { id: "watcher", icon: "ph-chart-line-up", title: "Sigo cartas y precios", subtitle: "Comprador / inversor" },
            { id: "buyer",   icon: "ph-shopping-cart", title: "Compro cartas a otros usuarios", subtitle: "Comprador" },
            { id: "seller",  icon: "ph-tag",           title: "Vendo cartas propias", subtitle: "Vendedor" },
            { id: "both",    icon: "ph-arrows-left-right", title: "Hago ambas cosas", subtitle: "Híbrido" },
          ].map(opt => {
            const on = roles.includes(opt.id);
            return (
              <button key={opt.id} onClick={() => toggleRole(opt.id)} style={{
                display: "grid", gridTemplateColumns: "40px 1fr 20px",
                gap: 14, padding: 14,
                background: "var(--bg-primary)",
                border: `1px solid ${on ? "var(--interactive)" : "var(--border)"}`,
                borderRadius: 12, cursor: "pointer", textAlign: "left",
                boxShadow: on ? "0 0 0 2px rgba(26,111,181,.15)" : "none",
                transition: "border-color 100ms ease-out, box-shadow 100ms ease-out",
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: on ? "var(--interactive)" : "var(--bg-secondary)",
                  color: on ? "var(--on-interactive)" : "var(--text-secondary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <i className={"ph " + opt.icon} style={{ fontSize: 20 }}/>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{opt.title}</div>
                  <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 2 }}>{opt.subtitle}</div>
                </div>
                <div style={{
                  width: 18, height: 18, borderRadius: 4,
                  border: `1.5px solid ${on ? "var(--interactive)" : "var(--border-em)"}`,
                  background: on ? "var(--interactive)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {on && <i className="ph ph-check" style={{ fontSize: 12, color: "var(--on-interactive)" }}/>}
                </div>
              </button>
            );
          })}
        </div>

        <Button variant="primary" size="lg" disabled={roles.length === 0} onClick={onFinish}>
          Continuar
        </Button>
      </div>
    );
  }

  const s = slides[step];
  return (
    <div style={{ flex: 1, background: "var(--bg-page)", display: "flex", flexDirection: "column", padding: "20px 22px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.08, color: "var(--text-muted)" }}>
          Paso {step + 1} de 5
        </span>
        <button onClick={onFinish} style={{
          background: "transparent", border: "none", color: "var(--text-secondary)",
          fontSize: 13, fontWeight: 500, cursor: "pointer", padding: 6,
        }}>Saltar</button>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 6px" }}>
        <div style={{
          width: 96, height: 96, borderRadius: 24,
          background: "var(--bg-primary)", border: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--interactive)", marginBottom: 28,
          boxShadow: "0 4px 16px rgba(0,0,0,.04)",
        }}>
          <i className={"ph " + s.icon} style={{ fontSize: 44 }}/>
        </div>
        <div style={{ fontSize: 26, fontWeight: 300, color: "var(--text-primary)", letterSpacing: -0.02, lineHeight: 1.2, maxWidth: 280 }}>{s.title}</div>
        <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 14, lineHeight: 1.6, maxWidth: 300 }}>{s.body}</div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 18 }}>
        {slides.map((_, i) => (
          <span key={i} style={{
            width: i === step ? 22 : 6, height: 6, borderRadius: 3,
            background: i === step ? "var(--interactive)" : "var(--border)",
            transition: "width 200ms ease-out",
          }}/>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {step > 0 && <Button variant="secondary" size="lg" onClick={() => setStep(step - 1)} style={{ flex: 1 }}>Atrás</Button>}
        <Button variant="primary" size="lg" onClick={() => setStep(step + 1)} style={{ flex: 1.4 }}>
          {step < slides.length - 1 ? "Siguiente" : "Empezar"}
        </Button>
      </div>
    </div>
  );
}

window.OnboardingScreen = OnboardingScreen;
