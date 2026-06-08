/* page-artis.jsx — Halaman Artis */

const ARTISTS = [
  { n: "Rana Kelana", g: "Lo-fi · Jakarta", c: "var(--accent)", q: "Royalti pertamaku cukup buat beli MIDI controller baru.", s: [["1,2 jt", "streams"], ["38", "negara"]] },
  { n: "Hujan Sore", g: "Indie · Bandung", c: "var(--teal)", q: "Dari kamar kos jadi line-up festival kampus.", s: [["860 rb", "streams"], ["12", "rilis"]] },
  { n: "Analog Anak", g: "Dream Pop · Yogya", c: "var(--mustard)", q: "Smart link-nya bikin pre-save kami meledak hari pertama.", s: [["540 rb", "streams"], ["4", "EP"]] },
  { n: "Selasar Records", g: "Label · Surabaya", c: "var(--rust)", q: "Kelola 14 artis dari satu dasbor. Tertib dan transparan.", s: [["14", "artis"], ["120+", "rilis"]] },
  { n: "Kirana", g: "R&B · Medan", c: "var(--teal)", q: "Pencairan ke e-wallet bikin semuanya terasa nyata.", s: [["410 rb", "streams"], ["9", "single"]] },
  { n: "Pulau Biru", g: "Folk · Bali", c: "var(--accent)", q: "Akhirnya musik kami terdengar di luar pulau.", s: [["290 rb", "streams"], ["6", "rilis"]] },
];

const STATS = [
  ["8,4 jt+", "Lagu terdistribusi"], ["120 rb+", "Artis & label"],
  ["150+", "Platform & toko"], ["Rp 380 M+", "Royalti dibayarkan"],
];

function ArtisPage() {
  return (
    <React.Fragment>
      <PageHeader tone="ink" eyebrow="Dipakai Para Artis" title="Suara dari studio mereka."
        sub="Dari bedroom producer sampai label independen — ribuan kreator Indonesia merilis lewat Putar." >
        <div className="page-head-aside"><Vinyl size={200} label="ARTIS" /></div>
      </PageHeader>

      <section className="stat-band">
        <div className="wrap">
          <div className="stat-band-grid">
            {STATS.map(([b, s]) => (
              <div key={s}><b>{b}</b><span>{s}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="sec-head sec-head--center">
            <span className="eyebrow">Komunitas Putar</span>
            <h2 className="display sec-title">Mereka memutar di sini.</h2>
          </div>
          <div className="artist-grid">
            {ARTISTS.map((a) => (
              <article className="artist-card" key={a.n}>
                <div className="artist-disc"><i style={{ background: a.c }} /></div>
                <h3>{a.n}</h3>
                <span className="ac-genre">{a.g}</span>
                <p className="ac-quote">“{a.q}”</p>
                <div className="ac-stats">
                  {a.s.map(([b, l]) => <div key={l}><b>{b}</b><span>{l}</span></div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--paper-2)", borderTop: "2.5px solid var(--ink)", borderBottom: "2.5px solid var(--ink)" }}>
        <div className="wrap">
          <div className="story">
            <div className="story-art">
              <Vinyl size={230} label="RANA" />
            </div>
            <div>
              <span className="tape" style={{ marginBottom: 18 }}>CERITA ARTIS</span>
              <h2 className="display" style={{ fontSize: "clamp(30px,4vw,52px)", margin: "8px 0 18px" }}>
                Dari demo kamar<br/>ke 1 juta streams.
              </h2>
              <p style={{ fontSize: 19, color: "var(--ink-soft)", marginBottom: 16, textWrap: "pretty" }}>
                Rana Kelana mengunggah “Senja di Kamar” pada malam tanpa rencana besar.
                Tiga hari kemudian lagunya tayang di Spotify, masuk playlist editorial lokal,
                dan royalti pertamanya cair ke e-wallet.
              </p>
              <p style={{ fontSize: 19, color: "var(--ink-soft)", textWrap: "pretty" }}>
                “Aku nggak perlu label, nggak perlu modal. Putar yang urus distribusinya,
                aku fokus bikin lagu berikutnya,” katanya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* reused testimonials */}
      <Testimonials />
    </React.Fragment>
  );
}

mountPage(<ArtisPage />, "artis");
