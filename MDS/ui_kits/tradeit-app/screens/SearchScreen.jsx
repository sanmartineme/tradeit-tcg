// SearchScreen.jsx — Buscar tab: search bar + filter chips + 2-col grid.

function SearchScreen({ onOpenCard, onScan, shellVariant = "A" }) {
  const [query, setQuery] = React.useState("");
  const [productType, setProductType] = React.useState("all");

  const filtered = CATALOG.filter(c => {
    if (productType !== "all" && c.productType !== productType) return false;
    if (query && !c.name.toLowerCase().includes(query.toLowerCase()) && !c.set.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-page)", overflow: "hidden" }}>
      <SearchBar value={query} onChange={setQuery}/>

      <div style={{
        padding: "10px 14px", background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border)",
        display: "flex", gap: 6, overflowX: "auto", flexShrink: 0,
      }}>
        <Chip active={productType === "all"} onClick={() => setProductType("all")}>Todo</Chip>
        <Chip active={productType === "single"} onClick={() => setProductType("single")}>Single Card</Chip>
        <Chip active={productType === "sealed"} onClick={() => setProductType("sealed")}>Sealed</Chip>
        <Chip active={productType === "graded"} onClick={() => setProductType("graded")}>Graded</Chip>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 20px" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 10,
        }}>
          <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-primary)", fontWeight: 500 }}>{filtered.length}</span> resultados
          </span>
          <button style={{
            background: "transparent", border: "none", color: "var(--interactive)",
            fontSize: 12, fontWeight: 500, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 4,
          }}>
            Relevancia <i className="ph ph-caret-down" style={{ fontSize: 12 }}/>
          </button>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon="ph-magnifying-glass"
            title="No encontramos cartas con esos filtros"
            desc="Probá quitar un filtro o usar el scan para identificar una carta física."
            cta="Escanear carta"
            onCta={onScan}
          />
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {filtered.map(c => (
              <TcgCard key={c.id} card={c} onClick={() => onOpenCard(c.id)} shellVariant={shellVariant}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

window.SearchScreen = SearchScreen;
