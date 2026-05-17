// Toast.jsx — minimal app-level toast.

function Toast({ message, visible }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "absolute", bottom: 84, left: "50%", transform: "translateX(-50%)",
      background: "#131210", color: "#F0EFEC",
      padding: "10px 16px", borderRadius: 8, fontSize: 13,
      boxShadow: "0 8px 32px rgba(0,0,0,.20)",
      maxWidth: "84%", textAlign: "center",
      zIndex: 50, fontFamily: "'IBM Plex Sans', sans-serif",
      animation: "toastIn 200ms ease-out both",
    }}>
      {message}
    </div>
  );
}

window.Toast = Toast;
