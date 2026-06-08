/* dashboard.jsx — royalty & analytics preview */

const CHART = [
  { m: "Jan", v: 42 }, { m: "Feb", v: 55 }, { m: "Mar", v: 48 },
  { m: "Apr", v: 70 }, { m: "Mei", v: 82 }, { m: "Jun", v: 76 },
  { m: "Jul", v: 95 }, { m: "Agu", v: 88 },
];
const TRACKS = [
  { t: "Senja di Kamar", a: "Rana Kelana", s: "1.284.902", pct: 92 },
  { t: "Lampu Kota", a: "Hujan Sore", s: "842.110", pct: 64 },
  { t: "Kabel & Kaset", a: "Analog Anak", s: "613.448", pct: 47 },
  { t: "Pulang", a: "Rana Kelana", s: "401.227", pct: 31 },
];

function Dashboard() {
  const max = Math.max(...CHART.map((c) => c.v));
  return (
    <section className="section-pad dash-sec">
      <div className="wrap">
        <div className="dash-grid">
          <div className="dash-copy">
            <span className="eyebrow">Royalti & Analitik</span>
            <h2 className="display sec-title">Lihat uangmu<br/>tumbuh.</h2>
            <p className="dash-lead">
              Dasbor real-time menyatukan streams, pendengar, dan pendapatan dari semua
              platform. Tarik royalti ke rekeningmu kapan saja — tanpa minimum, tanpa potongan tersembunyi.
            </p>
            <ul className="dash-list">
              <li><span className="dash-bullet" style={{ background: "var(--accent)" }} />Laporan harian per lagu & per platform</li>
              <li><span className="dash-bullet" style={{ background: "var(--teal)" }} />Split royalti otomatis ke kolaborator</li>
              <li><span className="dash-bullet" style={{ background: "var(--mustard)" }} />Pencairan ke bank lokal & e-wallet</li>
            </ul>
          </div>

          <div className="dash-card card">
            <div className="dash-card-top">
              <div>
                <span className="dash-card-label">Total Royalti · 12 bln</span>
                <b className="dash-card-num">Rp 184.920.500</b>
                <span className="dash-card-delta">▲ 23,8% vs tahun lalu</span>
              </div>
              <Equalizer bars={5} h={28} color="var(--teal)" />
            </div>

            <div className="dash-chart">
              {CHART.map((c) => (
                <div className="bar-col" key={c.m}>
                  <div className="bar" style={{ height: `${(c.v / max) * 100}%` }}>
                    <span className="bar-tip">{c.v}rb</span>
                  </div>
                  <span className="bar-m">{c.m}</span>
                </div>
              ))}
            </div>

            <div className="dash-tracks">
              <div className="dash-tracks-head">
                <span>Lagu teratas</span><span>Streams</span>
              </div>
              {TRACKS.map((t, i) => (
                <div className="trk" key={t.t}>
                  <span className="trk-rank">{i + 1}</span>
                  <span className="trk-disc" />
                  <div className="trk-meta">
                    <b>{t.t}</b>
                    <span>{t.a}</span>
                    <div className="trk-bar"><i style={{ width: t.pct + "%" }} /></div>
                  </div>
                  <span className="trk-streams">{t.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Dashboard });
