/* page-cara-kerja.jsx — Halaman Cara Kerja */

const TL = [
  ["1", "Unggah master kamu", "Tarik file WAV, FLAC, atau MP3 berkualitas tinggi. Tambahkan sampul rilis — Putar memeriksa kualitas audio otomatis."],
  ["2", "Isi detail rilis", "Judul, artis, genre, tanggal rilis, dan kredit kolaborator. Kami buatkan ISRC & UPC secara otomatis."],
  ["3", "Pilih platform & jadwal", "Centang toko tujuan dari 150+ pilihan, atur tanggal tayang, lalu kirim. Rilis biasanya live dalam 1–5 hari."],
  ["4", "Pantau royalti & tarik dana", "Lihat streams dan pendapatan real-time. Tarik royalti kapan saja ke bank atau e-wallet tanpa minimum."],
];

const CARA_FAQ = [
  ["Berapa lama lagu saya tayang?", "Sebagian besar platform menampilkan rilismu dalam 1–5 hari kerja. Kamu bisa menjadwalkan tanggal rilis lebih awal agar tayang serempak di semua toko."],
  ["Apakah saya tetap memiliki hak cipta?", "Ya, 100%. Putar hanya mendistribusikan — semua hak cipta dan master tetap milikmu sepenuhnya, selamanya."],
  ["Bagaimana cara menerima royalti?", "Royalti masuk ke saldo akunmu dan bisa dicairkan kapan saja ke rekening bank lokal atau e-wallet (OVO, GoPay, DANA) tanpa jumlah minimum."],
  ["Bisakah saya mengubah rilis setelah tayang?", "Bisa. Kamu dapat memperbarui metadata, sampul, atau menarik rilis dari platform tertentu langsung dari dasbor."],
  ["Apakah ada batasan jumlah rilis?", "Paket gratis mencakup 1 rilis aktif. Paket Pemutar dan Label memberi rilis tak terbatas."],
];

function CaraKerjaPage() {
  return (
    <React.Fragment>
      <PageHeader tone="paper" eyebrow="Cara Kerja" title="Rilis dalam 4 langkah."
        sub="Alur yang sama persis seperti di dasbor Putar. Sederhana, transparan, dan cepat." >
        <div className="page-head-aside"><Cassette title="HOW-TO" sub="SIDE A · PANDUAN" /></div>
      </PageHeader>

      <section className="section-pad">
        <div className="wrap">
          <div className="sec-head sec-head--center">
            <span className="eyebrow">Alur Rilis</span>
            <h2 className="display sec-title">Dari kamar ke dunia.</h2>
          </div>
          <div className="timeline">
            {TL.map(([n, t, b]) => (
              <div className="tl-item" key={n}>
                <span className="tl-dot">{n}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* reused interactive widget */}
      <UploadFlow />

      <section className="section-pad" style={{ background: "var(--paper-card)", borderTop: "2.5px solid var(--ink)" }}>
        <div className="wrap">
          <div className="sec-head sec-head--center">
            <span className="eyebrow">Pertanyaan Umum</span>
            <h2 className="display sec-title">Masih ragu?</h2>
          </div>
          <FAQ items={CARA_FAQ} />
        </div>
      </section>
    </React.Fragment>
  );
}

mountPage(<CaraKerjaPage />, "cara");
