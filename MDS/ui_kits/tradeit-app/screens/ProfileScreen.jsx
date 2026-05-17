// ProfileScreen.jsx — Perfil del usuario.

function ProfileScreen({ userName = "Carlos San Martín", role = "Híbrido" }) {
  return (
    <div style={{ flex: 1, overflowY: "auto", background: "var(--bg-page)" }}>
      <div style={{
        background: "var(--bg-primary)", borderBottom: "1px solid var(--border)",
        padding: "24px 18px",
        display: "flex", alignItems: "center", gap: 16,
      }}>
        <Avatar name={userName} size="lg"/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: 500, color: "var(--text-primary)" }}>{userName}</span>
            <i className="ph ph-seal-check" style={{ fontSize: 16, color: "var(--success)" }}/>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Perfil {role.toLowerCase()} · Santiago, CL</div>
          <div style={{ marginTop: 8 }}><Badge variant="info">Cuenta verificada</Badge></div>
        </div>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
        <Section title="Mi cuenta" rows={[
          { icon: "ph-user-circle", label: "Datos personales" },
          { icon: "ph-shield-check", label: "Verificación de identidad", trailing: "Completa", trailingColor: "#0F6E56" },
          { icon: "ph-currency-circle-dollar", label: "Moneda de visualización", trailing: "USD" },
        ]}/>

        <Section title="Preferencias" rows={[
          { icon: "ph-bell", label: "Notificaciones" },
          { icon: "ph-translate", label: "Idioma", trailing: "Español (LatAm)" },
          { icon: "ph-moon", label: "Apariencia", trailing: "Automática" },
        ]}/>

        <Section title="Operaciones" rows={[
          { icon: "ph-tag", label: "Activar perfil vendedor", trailing: "Activado", trailingColor: "#0F6E56" },
          { icon: "ph-list-checks", label: "Sets favoritos", trailing: "4" },
          { icon: "ph-file-text", label: "Exportar mis datos" },
        ]}/>

        <Section title="Ayuda" rows={[
          { icon: "ph-question", label: "Centro de ayuda" },
          { icon: "ph-info", label: "Términos y política" },
          { icon: "ph-sign-out", label: "Cerrar sesión", danger: true },
        ]}/>

        <div style={{
          padding: 14, fontSize: 10.5, color: "var(--text-muted)",
          fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.5, textAlign: "center",
        }}>
          Mulligan v1.0 · Tradeit TCG · build 2026.05
        </div>
      </div>
    </div>
  );
}

function Section({ title, rows }) {
  return (
    <div>
      <div style={{ ...labelUp, padding: "0 4px 8px" }}>{title}</div>
      <div style={{
        background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 10,
        overflow: "hidden",
      }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "20px 1fr auto", gap: 14, alignItems: "center",
            padding: "14px 16px",
            borderBottom: i < rows.length - 1 ? "1px solid var(--bg-secondary)" : "none",
            cursor: "pointer",
          }}>
            <i className={"ph " + r.icon} style={{ fontSize: 18, color: r.danger ? "#A02C2C" : "var(--text-secondary)" }}/>
            <span style={{ fontSize: 14, color: r.danger ? "#A02C2C" : "var(--text-primary)" }}>{r.label}</span>
            <span style={{ fontSize: 12, color: r.trailingColor || "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              {r.trailing}
              {!r.danger && <i className="ph ph-caret-right" style={{ fontSize: 14, color: "var(--text-muted)" }}/>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.ProfileScreen = ProfileScreen;
