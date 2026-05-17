// App.jsx — Root for the tradeit-web companion kit.

function WebApp() {
  const [screen, setScreen] = React.useState("landing"); // landing | detail
  const [dark, setDark] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <WebToolbar screen={screen} setScreen={setScreen} dark={dark} setDark={setDark}/>
      <ChromeWindow
        tabs={[{ title: "Tradeit TCG · Mulligan" }]}
        activeIndex={0}
        url={screen === "landing" ? "tradeit.tcg" : "tradeit.tcg/c/charizard-ex-sv151"}
        width={1180}
        height={760}
      >
        <div className={dark ? "dark" : ""} style={{ minHeight: "100%", display: "flex", flexDirection: "column", background: "var(--bg-page)" }}>
          <WebTopBar
            onSignIn={() => setScreen("landing")}
            onSignUp={() => setScreen("landing")}
          />
          <main style={{ flex: 1 }}>
            {screen === "landing" && <Landing onOpenDetail={() => setScreen("detail")}/>}
            {screen === "detail"  && <DesktopCardDetail onBack={() => setScreen("landing")}/>}
          </main>
          <WebFooter/>
        </div>
      </ChromeWindow>
    </div>
  );
}

function WebToolbar({ screen, setScreen, dark, setDark }) {
  const screens = [
    { id: "landing", label: "Homepage marketing", icon: "ph-flag" },
    { id: "detail",  label: "Ficha de carta",      icon: "ph-cards" },
  ];
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
      padding: "10px 14px", background: "#FFFFFF",
      border: "1px solid #D6D4CE", borderRadius: 999,
      boxShadow: "0 1px 4px rgba(0,0,0,.06)",
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      {screens.map(s => {
        const isActive = screen === s.id;
        return (
          <button key={s.id} onClick={() => setScreen(s.id)} style={{
            height: 30, padding: "0 14px", borderRadius: 999,
            background: isActive ? "#1A6FB5" : "transparent",
            color: isActive ? "#fff" : "#131210",
            border: "none", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12.5, fontWeight: 500,
          }}>
            <i className={"ph " + s.icon} style={{ fontSize: 14 }}/>
            {s.label}
          </button>
        );
      })}
      <span style={{ width: 1, height: 18, background: "#D6D4CE", margin: "0 4px" }}/>
      <button onClick={() => setDark(d => !d)} style={{
        height: 30, padding: "0 12px", borderRadius: 999,
        background: dark ? "#131210" : "transparent",
        color: dark ? "#F0EFEC" : "#131210",
        border: "1px solid " + (dark ? "#131210" : "#D6D4CE"),
        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 12.5, fontWeight: 500,
      }}>
        <i className={"ph " + (dark ? "ph-fill ph-moon" : "ph-sun")} style={{ fontSize: 14 }}/>
        {dark ? "Dark" : "Light"}
      </button>
    </div>
  );
}

window.WebApp = WebApp;
