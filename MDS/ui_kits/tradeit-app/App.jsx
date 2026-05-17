// App.jsx — Root with flow selector + main app + dark mode toggle.

function App() {
  const [flow, setFlow] = React.useState("main");
  const [dark, setDark] = React.useState(false);
  const [shellVariant, setShellVariant] = React.useState("A");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <FlowToolbar flow={flow} setFlow={setFlow} dark={dark} setDark={setDark}
                   shellVariant={shellVariant} setShellVariant={setShellVariant}/>
      <PhoneFrame dark={dark}>
        {flow === "main"       && <MainApp onJumpTo={setFlow} shellVariant={shellVariant}/>}
        {flow === "onboarding" && <OnboardingScreen onFinish={() => setFlow("main")}/>}
        {flow === "kyc"        && <KYCScreen onBack={() => setFlow("main")} onVerified={() => setFlow("main")}/>}
        {flow === "wizard"     && <ListingWizardScreen onClose={() => setFlow("main")} onPublish={() => setFlow("main")}/>}
        {flow === "push"       && <PushAlertScreen onOpen={() => setFlow("main")} onDismiss={() => setFlow("main")}/>}
        {flow === "email"      && <EmailPreviewScreen onClose={() => setFlow("main")}/>}
      </PhoneFrame>
    </div>
  );
}

function FlowToolbar({ flow, setFlow, dark, setDark, shellVariant, setShellVariant }) {
  const flows = [
    { id: "main",       label: "App principal",  icon: "ph-house" },
    { id: "onboarding", label: "Onboarding",     icon: "ph-flag" },
    { id: "kyc",        label: "Verificación",   icon: "ph-shield-check" },
    { id: "wizard",     label: "Publicar",       icon: "ph-tag" },
    { id: "push",       label: "Push alert",     icon: "ph-bell" },
    { id: "email",      label: "Email",          icon: "ph-envelope" },
  ];
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
      padding: "10px 14px", background: "#FFFFFF",
      border: "1px solid #D6D4CE", borderRadius: 999,
      boxShadow: "0 1px 4px rgba(0,0,0,.06)",
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      {flows.map(f => {
        const isActive = flow === f.id;
        return (
          <button key={f.id} onClick={() => setFlow(f.id)} style={{
            height: 30, padding: "0 14px", borderRadius: 999,
            background: isActive ? "#1A6FB5" : "transparent",
            color: isActive ? "#fff" : "#131210",
            border: "none", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12.5, fontWeight: 500,
          }}>
            <i className={"ph " + f.icon} style={{ fontSize: 14 }}/>
            {f.label}
          </button>
        );
      })}
      <span style={{ width: 1, height: 18, background: "#D6D4CE", margin: "0 4px" }}/>

      <label style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#5C5A56" }}>
        <i className="ph ph-stack" style={{ fontSize: 14 }}/>
        Shell
        <select value={shellVariant} onChange={e => setShellVariant(e.target.value)} style={{
          height: 28, padding: "0 8px",
          border: "1px solid #D6D4CE", borderRadius: 6,
          background: "#fff", color: "#131210",
          fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12.5, fontWeight: 500,
          cursor: "pointer",
        }}>
          <option value="A">A · Canonical</option>
          <option value="B">B · Muted</option>
          <option value="C">C · Saturated</option>
          <option value="D">D · Dark base</option>
          <option value="E">E · Paper</option>
        </select>
      </label>

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

function MainApp({ onJumpTo, shellVariant = "A" }) {
  const [tab, setTab] = React.useState("home");
  const [cardId, setCardId] = React.useState(null);
  const [scanning, setScanning] = React.useState(false);
  const [watchlist, setWatchlist] = React.useState(["charizard-ex", "umbreon-vmax", "pikachu-illustrator"]);
  const [toast, setToast] = React.useState(null);
  const [confirmRemove, setConfirmRemove] = React.useState(null);

  const flash = msg => { setToast(msg); setTimeout(() => setToast(null), 2400); };

  const openCard = (id) => { setCardId(id); setScanning(false); };
  const closeCard = () => setCardId(null);
  const requestRemove = (id) => {
    if (watchlist.includes(id)) setConfirmRemove(id);
    else { setWatchlist([...watchlist, id]); flash("Carta agregada a tu watchlist."); }
  };
  const confirmRemoveYes = () => {
    setWatchlist(watchlist.filter(x => x !== confirmRemove));
    flash("Carta retirada de tu watchlist.");
    setConfirmRemove(null);
  };

  const inSubScreen = cardId || scanning;
  const removingCard = confirmRemove ? CATALOG.find(c => c.id === confirmRemove) : null;

  return (
    <>
      {scanning ? (
        <ScanScreen
          onClose={() => setScanning(false)}
          onResult={(id) => { setScanning(false); openCard(id); }}
        />
      ) : cardId ? (
        <CardDetail
          cardId={cardId}
          shellVariant={shellVariant}
          onBack={closeCard}
          isInWatchlist={watchlist.includes(cardId)}
          onToggleWatchlist={() => requestRemove(cardId)}
          onCreateAlert={() => flash("Alerta creada. Te avisamos cuando el precio cruce USD 400.")}
        />
      ) : (
        <>
          <TopBar variant="home" rightCount={2}/>
          {tab === "home" && (
            <HomeScreen
              shellVariant={shellVariant}
              watchlistIds={watchlist}
              onOpenCard={openCard}
              onScan={() => setScanning(true)}
            />
          )}
          {tab === "search" && (
            <SearchScreen
              shellVariant={shellVariant}
              onOpenCard={openCard}
              onScan={() => setScanning(true)}
            />
          )}
          {tab === "ops"     && <OpsScreen onPublish={() => onJumpTo("wizard")}/>}
          {tab === "profile" && <ProfileScreen/>}
        </>
      )}

      {!inSubScreen && <BottomNav active={tab} onChange={setTab}/>}

      <Toast message={toast} visible={!!toast}/>

      <Modal
        open={!!removingCard}
        onClose={() => setConfirmRemove(null)}
        title="Retirar de watchlist"
        primaryLabel="Retirar"
        primaryVariant="danger"
        onPrimary={confirmRemoveYes}
        summary={removingCard ? `${removingCard.name} · ${removingCard.set}` : null}
      >
        Dejarás de recibir alertas de esta carta. Podés volver a agregarla cuando quieras.
      </Modal>
    </>
  );
}

window.App = App;
