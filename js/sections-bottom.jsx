/* sections-bottom.jsx — Pricing, Testimonials, SmartLink, CTA, Footer */

const TIERS = [
  {
    name: "Penjelajah", tagline: "Mulai tanpa biaya",
    mo: 0, yr: 0, color: "var(--teal)",
    feats: ["1 rilis aktif", "Distribusi ke 50 platform", "Royalti 100% milikmu", "Analitik dasar", "Dukungan komunitas"],
    cta: "Mulai Gratis",
  },
  {
    name: "Pemutar", tagline: "Untuk artis aktif", popular: true,
    mo: 49, yr: 39, color: "var(--accent)",
    feats: ["Rilis tak terbatas", "150+ platform & toko", "Pre-save & smart links", "Analitik real-time lengkap", "Split royalti kolaborator", "Pencairan instan"],
    cta: "Pilih Pemutar",
  },
  {
    name: "Label", tagline: "Untuk label & tim",
    mo: 149, yr: 119, color: "var(--rust)",
    feats: ["Semua fitur Pemutar", "Multi-artis & sub-akun", "Katalog & royalti per label", "Manajer akun khusus", "Akses API distribusi", "Laporan pajak otomatis"],
    cta: "Hubungi Sales",
  },
];

function Pricing() {
  const [yr, setYr] = React.useState(true);
  return (
    <section className="section-pad pricing" id="harga">
      <div className="wrap">
        <div className="sec-head pricing-head">
          <span className="eyebrow">Harga</span>
          <h2 className="display sec-title">Pilih iramamu.</h2>
          <div className="bill-toggle">
            <span className={!yr ? "is-on" : ""}>Bulanan</span>
            <button className={"switch" + (yr ? " yr" : "")} onClick={() => setYr((v) => !v)} aria-label="toggle billing">
              <span className="switch-knob" />
            </button>
            <span className={yr ? "is-on" : ""}>Tahunan <i className="save-pill">hemat 20%</i></span>
          </div>
        </div>

        <div className="tier-grid">
          {TIERS.map((t) => (
            <article className={"tier card" + (t.popular ? " tier--pop" : "")} key={t.name}>
              {t.popular && <span className="tier-flag tape">Paling Populer</span>}
              <h3 className="tier-name display" style={{ color: t.color }}>{t.name}</h3>
              <span className="tier-tagline">{t.tagline}</span>
              <div className="tier-price">
                <span className="tier-cur">Rp</span>
                <span className="tier-num">{(yr ? t.yr : t.mo) === 0 ? "0" : (yr ? t.yr : t.mo)}</span>
                <span className="tier-per">.000/bln</span>
              </div>
              <span className="tier-billed">{t.mo === 0 ? "selamanya gratis" : yr ? "ditagih tahunan" : "ditagih bulanan"}</span>
              <a href="#mulai" className={"btn tier-btn " + (t.popular ? "btn-primary" : "btn-ghost")}>{t.cta}</a>
              <ul className="tier-feats">
                {t.feats.map((f) => (
                  <li key={f}><span className="tier-check" style={{ color: t.color }}>✓</span>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  { q: "Lagu pertamaku tayang di Spotify dalam 2 hari. Royaltinya langsung masuk e-wallet — nggak nyangka segampang ini.", n: "Rana Kelana", r: "Lo-fi Producer · 1,2 jt streams", c: "var(--accent)" },
  { q: "Dari band indie kamar jadi tur kota. Putar yang urus semua distribusi, kami fokus bikin musik.", n: "Hujan Sore", r: "Indie Band · Bandung", c: "var(--teal)" },
  { q: "Sebagai label kecil, fitur split royalti & sub-akunnya juara. Semua artis kami kelola dari satu dasbor.", n: "Selasar Records", r: "Independent Label", c: "var(--mustard)" },
];

function Testimonials() {
  return (
    <section className="section-pad testi" id="artis">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Dipakai Para Artis</span>
          <h2 className="display sec-title">Suara dari<br/>studio mereka.</h2>
        </div>
        <div className="testi-grid">
          {QUOTES.map((q) => (
            <figure className="testi-card card" key={q.n}>
              <span className="testi-quote" style={{ color: q.c }}>“</span>
              <blockquote>{q.q}</blockquote>
              <figcaption>
                <span className="testi-disc" style={{ background: q.c }} />
                <div><b>{q.n}</b><span>{q.r}</span></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartLink() {
  const links = ["Spotify", "Apple Music", "YouTube Music", "TikTok"];
  return (
    <section className="section-pad smart-sec">
      <div className="wrap smart-grid">
        <div className="smart-copy">
          <span className="eyebrow">Pre-save & Smart Links</span>
          <h2 className="display sec-title">Satu tautan,<br/>semua platform.</h2>
          <p className="dash-lead">
            Bagikan satu smart link ke fans. Mereka memilih platform favoritnya, kamu dapat
            data pre-save untuk dorongan rilis hari pertama.
          </p>
          <a href="#mulai" className="btn btn-primary">Buat Smart Link</a>
        </div>
        <div className="smart-phone">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="sl-cover"><div className="sl-cover-disc" /></div>
              <b className="sl-title">Senja di Kamar</b>
              <span className="sl-artist">Rana Kelana</span>
              <div className="sl-links">
                {links.map((l) => (
                  <div className="sl-row" key={l}>
                    <span className="sl-ico" />
                    <span className="sl-name">{l}</span>
                    <span className="sl-play">Putar</span>
                  </div>
                ))}
              </div>
              <span className="sl-foot">◉ disalurkan oleh PUTAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" id="mulai">
      <div className="wrap final-inner">
        <div className="final-burst"><Starburst size={180} color="var(--mustard)" /></div>
        <span className="tape">Gratis untuk rilis pertama</span>
        <h2 className="display final-h">Saatnya dunia<br/>dengar musikmu.</h2>
        <p className="final-sub">Buat akun dalam 60 detik. Tanpa kartu kredit, tanpa biaya tersembunyi.</p>
        <div className="final-actions">
          <a href="#" className="btn btn-primary final-btn">▶ Mulai Rilis Gratis</a>
          <a href="#harga" className="btn btn-ghost final-ghost">Lihat Harga</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing, Testimonials, SmartLink, FinalCTA });
