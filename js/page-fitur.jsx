/* page-fitur.jsx — Halaman Fitur */

const FITUR_PLATFORMS = [
  "Spotify", "Apple Music", "YouTube Music", "TikTok", "Amazon Music",
  "Deezer", "JOOX", "Tidal", "Instagram",
];

function PlatMosaic() {
  return (
    <div className="plat-mosaic">
      {FITUR_PLATFORMS.map((p) => (
        <div className="plat-tile" key={p}><span className="pt-disc" /><b>{p}</b></div>
      ))}
    </div>
  );
}

function MiniBars() {
  const vals = [40, 65, 52, 80, 95, 72, 88];
  const max = Math.max(...vals);
  return (
    <div className="fg-card">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-faint)" }}>Royalti · 7 hari</span>
        <b style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>Rp 4,2 jt</b>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120 }}>
        {vals.map((v, i) => (
          <div key={i} style={{ flex: 1, height: `${(v / max) * 100}%`, background: "linear-gradient(var(--accent), var(--accent-deep))", borderRadius: "5px 5px 0 0" }} />
        ))}
      </div>
    </div>
  );
}

function SmartCard() {
  return (
    <div className="fg-card">
      <span className="tape" style={{ marginBottom: 14 }}>SMART LINK</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 10 }}>
        {["Spotify", "Apple Music", "YouTube Music", "TikTok"].map((l) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", border: "2px solid var(--ink)", borderRadius: 9, background: "var(--cream-hi)" }}>
            <span style={{ width: 20, height: 20, borderRadius: 6, background: "var(--ink)" }} />
            <b style={{ flex: 1, fontSize: 14 }}>{l}</b>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--accent)", color: "var(--accent-ink)", padding: "4px 10px", borderRadius: 100 }}>Putar</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CatalogCard() {
  const rows = [["Senja di Kamar", "Single", "Live"], ["Lampu Kota EP", "EP · 4 lagu", "Live"], ["Demo Reel '79", "Album", "Draf"]];
  return (
    <div className="fg-card">
      {rows.map(([t, m, s], i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none" }}>
          <span style={{ width: 38, height: 38, borderRadius: 8, background: "repeating-radial-gradient(circle,#1a1410 0 2px,#34291d 3px 4px)", boxShadow: "inset 0 0 0 6px var(--accent)", flex: "none" }} />
          <div style={{ flex: 1 }}>
            <b style={{ display: "block", fontSize: 15 }}>{t}</b>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-faint)" }}>{m}</span>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "4px 10px", borderRadius: 100, border: "2px solid var(--ink)", background: s === "Live" ? "var(--teal)" : "transparent", color: s === "Live" ? "#fff" : "var(--ink)" }}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function ShieldCard() {
  return (
    <div className="fg-card" style={{ textAlign: "center", padding: 34 }}>
      <div style={{ width: 90, height: 90, margin: "0 auto 16px", borderRadius: "50%", background: "var(--ink)", display: "grid", placeItems: "center", color: "var(--mustard)", fontFamily: "var(--font-display)", fontSize: 40 }}>©</div>
      <b style={{ fontFamily: "var(--font-display)", fontSize: 26, textTransform: "uppercase", display: "block" }}>Content ID Aktif</b>
      <p style={{ color: "var(--ink-soft)", marginTop: 8 }}>Karya kamu dipantau & dimonetisasi otomatis di YouTube dan platform UGC.</p>
    </div>
  );
}

const FROWS = [
  { n: "FITUR 01", t: "Distribusi ke 150+ platform", b: "Satu unggahan, tayang di mana-mana. Putar menyalurkan rilismu ke seluruh toko digital & layanan streaming utama di dunia — termasuk platform lokal Indonesia.", list: ["Pengiriman ke 150+ toko & DSP", "Rilis tayang dalam 1–5 hari", "Kontrol tanggal & wilayah rilis"], art: <PlatMosaic /> },
  { n: "FITUR 02", t: "Royalti & analitik real-time", b: "Pantau streams, pendengar, dan pendapatan dari satu dasbor. Tarik royalti kapan saja ke bank lokal atau e-wallet — tanpa minimum, tanpa potongan tersembunyi.", list: ["Laporan harian per lagu & platform", "Split royalti otomatis ke kolaborator", "Pencairan ke bank & e-wallet ID"], art: <MiniBars /> },
  { n: "FITUR 03", t: "Pre-save & smart links", b: "Bangun antusiasme sebelum rilis dengan halaman pre-save, lalu bagikan satu tautan pintar yang menampung semua platform sekaligus.", list: ["Halaman pre-save kustom", "Smart link untuk semua DSP", "Data fans untuk kampanye"], art: <SmartCard /> },
  { n: "FITUR 04", t: "Manajemen katalog & label", b: "Kelola single, EP, dan album dalam satu tempat. Undang kolaborator, atur sub-akun artis, dan jalankan label kecilmu seperti profesional.", list: ["Katalog single / EP / album", "Sub-akun multi-artis (paket Label)", "Metadata & ISRC otomatis"], art: <CatalogCard /> },
  { n: "FITUR 05", t: "Lindungi karyamu", b: "Putar mendaftarkan karyamu ke Content ID dan sistem pemantauan hak cipta, supaya setiap penggunaan ulang tetap menghasilkan untukmu.", list: ["YouTube Content ID", "Klaim royalti UGC otomatis", "Dukungan takedown"], art: <ShieldCard /> },
];

function FiturPage() {
  return (
    <React.Fragment>
      <PageHeader tone="ink" eyebrow="Fitur" title="Semua yang kamu butuh untuk rilis."
        sub="Dari unggah pertama sampai royalti masuk rekening — Putar menangani seluruh rantai distribusi musikmu." >
        <div className="page-head-aside"><Vinyl size={210} /></div>
      </PageHeader>

      {FROWS.map((f) => (
        <section className="frow" key={f.n}>
          <div className="wrap frow-inner">
            <div className="frow-copy">
              <span className="frow-num">{f.n}</span>
              <h2 className="frow-title">{f.t}</h2>
              <p className="frow-body">{f.b}</p>
              <ul className="frow-list">
                {f.list.map((x) => <li key={x}><span className="tick">✓</span>{x}</li>)}
              </ul>
            </div>
            <div className="frow-art">{f.art}</div>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
}

mountPage(<FiturPage />, "fitur");
