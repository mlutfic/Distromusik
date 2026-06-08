/* sections-top.jsx — Hero, Platform marquee, Features */

function Hero({ headline }) {
  const def = "Rilis musikmu ke semua platform dunia.";
  const h = headline || def;
  const renderH = () => {
    if (h === def) {
      return (<>Rilis musikmu<br/>ke <span className="hero-mark">semua</span><br/>platform dunia.</>);
    }
    // custom headline: highlight the word "semua" if present, else plain
    const parts = h.split(/(semua)/i);
    return parts.map((p, i) =>
      p.toLowerCase() === "semua"
        ? <span className="hero-mark" key={i}>{p}</span>
        : <React.Fragment key={i}>{p}</React.Fragment>
    );
  };
  return (
    <section className="hero" id="top">
      <div className="hero-grain" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="tape hero-tape">★ Distribusi Musik Independen</span>
          <h1 className="display hero-h1">
            {renderH()}
          </h1>
          <p className="hero-sub">
            Putar mendistribusikan lagumu ke Spotify, Apple Music, TikTok, dan
            <strong> 150+ platform</strong> lainnya. Simpan <strong>100% royalti</strong> &
            hak ciptamu — selamanya.
          </p>
          <div className="hero-actions">
            <a href="#mulai" className="btn btn-primary">▶ Mulai Rilis Gratis</a>
            <a href="#harga" className="btn btn-ghost">Lihat Harga</a>
          </div>
          <div className="hero-stats">
            <div><b>8,4 jt+</b><span>lagu terdistribusi</span></div>
            <div><b>150+</b><span>platform & toko</span></div>
            <div><b>Rp0</b><span>biaya per rilis*</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-burst"><Starburst size={150} /></div>
          <Vinyl size={430} />
          <div className="hero-needle" />
          <span className="tape hero-art-tape">NOW SPINNING</span>
        </div>
      </div>
      <PlatformMarquee />
    </section>
  );
}

const PLATFORMS = [
  "Spotify", "Apple Music", "YouTube Music", "TikTok", "Amazon Music",
  "Deezer", "Tidal", "JOOX", "Instagram", "SoundCloud", "Pandora",
  "Anghami", "Boomplay", "iHeartRadio", "Napster", "Resso", "Shazam",
];

function PlatformMarquee() {
  const row = [...PLATFORMS, ...PLATFORMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((p, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />{p}
          </span>
        ))}
      </div>
    </div>
  );
}

const FEATURES = [
  {
    n: "01", tag: "Jangkauan",
    title: "Distribusi ke 150+ platform",
    body: "Satu kali unggah, lagumu tampil di Spotify, Apple Music, TikTok, JOOX, dan ratusan toko digital di seluruh dunia.",
    color: "var(--accent)",
  },
  {
    n: "02", tag: "Royalti",
    title: "Royalti & analitik real-time",
    body: "Pantau streams, pendengar, dan pendapatan dari satu dasbor. Tarik royalti kapan saja tanpa potongan tersembunyi.",
    color: "var(--teal)",
  },
  {
    n: "03", tag: "Promosi",
    title: "Pre-save & smart links",
    body: "Bangun antusiasme sebelum rilis dengan halaman pre-save, dan satu tautan pintar untuk semua platform.",
    color: "var(--mustard)",
  },
  {
    n: "04", tag: "Katalog",
    title: "Manajemen katalog & label",
    body: "Kelola single, EP, dan album, undang kolaborator, dan atur split royalti per kontributor dengan rapi.",
    color: "var(--rust)",
  },
];

function Features() {
  return (
    <section className="section-pad features" id="fitur">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Kenapa Putar</span>
          <h2 className="display sec-title">Semua yang kamu<br/>butuh untuk rilis.</h2>
        </div>
        <div className="feat-grid">
          {FEATURES.map((f) => (
            <article className="feat-card" key={f.n}>
              <div className="feat-top">
                <span className="feat-n" style={{ color: f.color }}>{f.n}</span>
                <span className="feat-tag">{f.tag}</span>
              </div>
              <span className="feat-bar" style={{ background: f.color }} />
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-body">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, PlatformMarquee, Features });
