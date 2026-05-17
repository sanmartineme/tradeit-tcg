// KYCScreen.jsx — Light KYC for sellers (phone verification by SMS code).
// Per PRD §6.1 RF-1.4.

function KYCScreen({ onBack, onVerified }) {
  const [step, setStep] = React.useState("phone"); // phone | code | done
  const [phone, setPhone] = React.useState("+56 9 ");
  const [code, setCode] = React.useState(["", "", "", ""]);
  const [resendIn, setResendIn] = React.useState(0);
  const refs = [React.useRef(), React.useRef(), React.useRef(), React.useRef()];

  React.useEffect(() => {
    if (step === "code" && resendIn === 0) {
      const t = setInterval(() => setResendIn(r => r > 0 ? r - 1 : 0), 1000);
      setResendIn(30);
      return () => clearInterval(t);
    }
  }, [step]);

  const setDigit = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[i] = val;
    setCode(next);
    if (val && i < 3) refs[i + 1].current?.focus();
    if (next.every(d => d)) setTimeout(() => setStep("done"), 350);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-page)" }}>
      <TopBar variant="back" title="Verificación" onBack={onBack} right={<div/>} />

      <div style={{ flex: 1, padding: "20px 22px 24px", display: "flex", flexDirection: "column" }}>
        {step === "phone" && (
          <>
            <div style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.25 }}>
              Verificá tu número
            </div>
            <div style={{ fontSize: 13.5, color: "var(--text-secondary)", marginTop: 8, lineHeight: 1.55 }}>
              Para publicar productos necesitamos confirmar tu identidad. Te enviaremos un código de 4 dígitos por SMS.
            </div>

            <div style={{ marginTop: 28 }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)" }}>Teléfono</span>
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+56 9 5432 1098"
                style={{
                  marginTop: 6, width: "100%", height: 48,
                  padding: "0 16px", fontSize: 18, fontFamily: "'IBM Plex Mono', monospace",
                  background: "var(--bg-primary)", color: "var(--text-primary)",
                  border: "1px solid var(--border-em)", borderRadius: 8,
                  boxSizing: "border-box",
                }}
              />
              <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 6 }}>
                Solo lo usamos para verificar tu cuenta y notificarte sobre tus listings.
              </div>
            </div>

            <div style={{ flex: 1 }}/>

            <Button variant="primary" size="lg" onClick={() => setStep("code")} style={{ width: "100%" }}>
              Enviar código
            </Button>
            <div style={{
              fontSize: 11, color: "var(--text-muted)", marginTop: 14, textAlign: "center",
              fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.5,
            }}>
              Al continuar aceptás los Términos y la<br/>Política de Privacidad de Tradeit TCG.
            </div>
          </>
        )}

        {step === "code" && (
          <>
            <div style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.25 }}>
              Ingresá el código
            </div>
            <div style={{ fontSize: 13.5, color: "var(--text-secondary)", marginTop: 8, lineHeight: 1.55 }}>
              Te enviamos un SMS a <strong style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-primary)" }}>{phone}</strong>.
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 28, justifyContent: "center" }}>
              {code.map((d, i) => (
                <input
                  key={i}
                  ref={refs[i]}
                  value={d}
                  onChange={e => setDigit(i, e.target.value)}
                  inputMode="numeric"
                  maxLength={1}
                  style={{
                    width: 56, height: 64, textAlign: "center",
                    fontFamily: "'IBM Plex Mono', monospace", fontSize: 28, fontWeight: 400,
                    background: "var(--bg-primary)", color: "var(--text-primary)",
                    border: `1px solid ${d ? "var(--interactive)" : "var(--border-em)"}`,
                    borderRadius: 8, boxSizing: "border-box",
                    boxShadow: d ? "0 0 0 2px rgba(26,111,181,.15)" : "none",
                    transition: "border-color 100ms ease-out, box-shadow 100ms ease-out",
                  }}
                />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 22 }}>
              {resendIn > 0 ? (
                <span style={{ fontSize: 12.5, color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Reenviar código en {resendIn}s
                </span>
              ) : (
                <button onClick={() => setResendIn(30)} style={{
                  background: "transparent", border: "none", color: "var(--interactive)",
                  fontSize: 13, fontWeight: 500, cursor: "pointer",
                }}>Reenviar código</button>
              )}
            </div>

            <div style={{ flex: 1 }}/>

            <button onClick={() => setStep("phone")} style={{
              background: "transparent", border: "none", color: "var(--text-secondary)",
              fontSize: 13, fontWeight: 500, cursor: "pointer", padding: 12,
            }}>Cambiar número</button>
          </>
        )}

        {step === "done" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{
              width: 88, height: 88, borderRadius: 44,
              background: "var(--success)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 22, boxShadow: "0 8px 24px rgba(45,166,126,.32)",
              animation: "modalIn 400ms ease-out both",
            }}>
              <i className="ph-fill ph ph-check" style={{ fontSize: 44 }}/>
            </div>
            <div style={{ fontSize: 22, fontWeight: 500, color: "var(--text-primary)" }}>Cuenta verificada</div>
            <div style={{ fontSize: 13.5, color: "var(--text-secondary)", marginTop: 8, maxWidth: 270, lineHeight: 1.55 }}>
              Ya podés publicar productos. Activamos también las alertas sobre tus listings.
            </div>
            <Button variant="primary" size="lg" onClick={onVerified} style={{ marginTop: 36, minWidth: 220 }}>
              Empezar a publicar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

window.KYCScreen = KYCScreen;
