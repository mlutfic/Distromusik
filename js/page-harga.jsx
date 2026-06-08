/* page-harga.jsx — Halaman Harga */

const CMP_ROWS = [
  ["Rilis aktif", "1", "Tak terbatas", "Tak terbatas"],
  ["Platform tujuan", "50", "150+", "150+"],
  ["Royalti milikmu", "100%", "100%", "100%"],
  ["Analitik real-time", "Dasar", "Lengkap", "Lengkap"],
  ["Pre-save & smart links", "no", "ck", "ck"],
  ["Split royalti kolaborator", "no", "ck", "ck"],
  ["Pencairan instan", "no", "ck", "ck"],
  ["Multi-artis & sub-akun", "no", "no", "ck"],
  ["Akses API distribusi", "no", "no", "ck"],
  ["Manajer akun khusus", "no", "no", "ck"],
];

const HARGA_FAQ = [
  ["Apakah benar-benar gratis untuk mulai?", "Ya. Paket Penjelajah gratis selamanya untuk 1 rilis aktif, tanpa kartu kredit. Kamu hanya upgrade saat butuh fitur lebih."],
  ["Apa beda ditagih bulanan vs tahunan?", "Tagihan tahunan memberi diskon hingga 20% dibanding bulanan. Kamu bisa pindah paket atau berhenti kapan saja."],
  ["Apakah Putar memotong royalti saya?", "Tidak. Di semua paket, 100% royalti adalah milikmu. Kami hanya mengenakan biaya langganan paket, bukan potongan per stream."],
  ["Metode pembayaran apa yang didukung?", "Kartu kredit/debit, transfer bank, dan e-wallet lokal (OVO, GoPay, DANA). Pencairan royalti juga mendukung semua metode tersebut."],
  ["Bisakah saya turun paket?", "Tentu. Kamu bisa downgrade kapan saja; perubahan berlaku pada siklus tagihan berikutnya."],
];

function HargaPage() {
  return (
    <React.Fragment>
      <PageHeader tone="accent" eyebrow="Harga" title="Pilih iramamu."
        sub="Mulai gratis, naik level saat karyamu tumbuh. Tanpa biaya tersembunyi, royalti 100% milikmu." >
        <div className="page-head-aside"><Vinyl size={200} label="HARGA" /></div>
      </PageHeader>

      {/* reused pricing cards */}
      <Pricing />

      <section className="section-pad">
        <div className="wrap">
          <div className="sec-head sec-head--center">
            <span className="eyebrow">Bandingkan Paket</span>
            <h2 className="display sec-title">Detail tiap paket.</h2>
          </div>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th className="center">Penjelajah</th>
                  <th className="center pop">Pemutar</th>
                  <th className="center">Label</th>
                </tr>
              </thead>
              <tbody>
                {CMP_ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td className="feat">{r[0]}</td>
                    {r.slice(1).map((c, i) => (
                      <td className="center" key={i}>
                        {c === "ck" ? <span className="ck">✓</span> : c === "no" ? <span className="no">—</span> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--paper-card)", borderTop: "2.5px solid var(--ink)" }}>
        <div className="wrap">
          <div className="sec-head sec-head--center">
            <span className="eyebrow">Pertanyaan Umum</span>
            <h2 className="display sec-title">Soal tagihan.</h2>
          </div>
          <FAQ items={HARGA_FAQ} />
        </div>
      </section>
    </React.Fragment>
  );
}

mountPage(<HargaPage />, "harga");
