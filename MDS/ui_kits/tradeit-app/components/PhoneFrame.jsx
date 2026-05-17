// PhoneFrame.jsx — Minimal Android-ish bezel styled for Mulligan.
// Status bar (time + status icons) and gesture-pill nav.
// Content fills the rest; the app brings its own top app bar.

function PhoneStatusBar({ time = "9:41", dark = false }) {
  const c = dark ? "#F0EFEC" : "#131210";
  return (
    <div style={{
      height: 34, padding: "0 18px 0 22px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      fontSize: 13, fontWeight: 500, color: c, letterSpacing: 0.1,
      flexShrink: 0,
    }}>
      <span>{time}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        {/* signal */}
        <svg width="14" height="10" viewBox="0 0 14 10">
          <rect x="0" y="7" width="2" height="3" rx="0.5" fill={c}/>
          <rect x="3" y="5" width="2" height="5" rx="0.5" fill={c}/>
          <rect x="6" y="3" width="2" height="7" rx="0.5" fill={c}/>
          <rect x="9" y="1" width="2" height="9" rx="0.5" fill={c}/>
        </svg>
        {/* wifi */}
        <svg width="13" height="10" viewBox="0 0 14 10">
          <path d="M7 9.5 L8.8 7.7 A 2.5 2.5 0 0 0 5.2 7.7 Z" fill={c}/>
          <path d="M7 6 L10.1 2.9 A 4.4 4.4 0 0 0 3.9 2.9 Z" fill={c} opacity="0.6"/>
        </svg>
        {/* battery */}
        <svg width="22" height="10" viewBox="0 0 22 10">
          <rect x="0.5" y="0.5" width="19" height="9" rx="2" fill="none" stroke={c} strokeOpacity="0.5"/>
          <rect x="2" y="2" width="14" height="6" rx="1" fill={c}/>
          <rect x="20" y="3.5" width="1.5" height="3" rx="0.5" fill={c} opacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}

function PhoneNavPill({ dark = false }) {
  return (
    <div style={{
      height: 22, display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <div style={{
        width: 124, height: 4, borderRadius: 2,
        background: dark ? "#F0EFEC" : "#131210", opacity: 0.4,
      }}/>
    </div>
  );
}

function PhoneFrame({ children, width = 390, height = 820, dark = false, time = "9:41" }) {
  return (
    <div className={dark ? "dark mulligan-phone" : "mulligan-phone"} style={{
      width, height, borderRadius: 44, overflow: "hidden",
      background: "var(--bg-page)",
      border: "10px solid #2E2D2A",
      outline: "1px solid #1a1a1a",
      boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.12)",
      display: "flex", flexDirection: "column",
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      color: "var(--text-primary)",
      position: "relative",
    }}>
      <PhoneStatusBar dark={dark} time={time}/>
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
      <PhoneNavPill dark={dark}/>
    </div>
  );
}

window.PhoneFrame = PhoneFrame;
