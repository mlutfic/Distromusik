/* upload-flow.jsx — interactive "Rilis Lagu" multi-step widget */

const STEPS = ["Unggah", "Detail", "Platform", "Terbit"];
const FLOW_PLATFORMS = [
  "Spotify", "Apple Music", "YouTube Music", "TikTok", "Amazon Music",
  "Deezer", "JOOX", "Tidal", "Instagram", "SoundCloud",
];
const GENRES = ["Pop", "Indie", "Hip-Hop", "Lo-fi", "Dangdut", "Jazz", "Elektronik", "Rock"];

function UploadFlow() {
  const [step, setStep] = React.useState(0);
  const [uploaded, setUploaded] = React.useState(false);
  const [prog, setProg] = React.useState(0);
  const [title, setTitle] = React.useState("Senja di Kamar");
  const [artist, setArtist] = React.useState("Rana Kelana");
  const [genre, setGenre] = React.useState("Lo-fi");
  const [sel, setSel] = React.useState(() => new Set(FLOW_PLATFORMS.slice(0, 6)));

  const startUpload = () => {
    if (uploaded) return;
    setProg(0);
    const id = setInterval(() => {
      setProg((p) => {
        if (p >= 100) { clearInterval(id); setUploaded(true); return 100; }
        return p + 4;
      });
    }, 40);
  };

  const toggle = (p) => {
    setSel((s) => {
      const n = new Set(s);
      n.has(p) ? n.delete(p) : n.add(p);
      return n;
    });
  };

  const canNext = step === 0 ? uploaded : step === 1 ? title && artist : true;
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const restart = () => {
    setStep(0); setUploaded(false); setProg(0);
    setSel(new Set(FLOW_PLATFORMS.slice(0, 6)));
  };

  return (
    <section className="section-pad flow-sec" id="cara-kerja">
      <div className="wrap">
        <div className="sec-head flow-head">
          <span className="eyebrow">Cara Kerja</span>
          <h2 className="display sec-title">Rilis dalam<br/>4 langkah.</h2>
          <p className="flow-intro">Coba sendiri — alurnya persis seperti di dasbor Putar yang asli.</p>
        </div>

        <div className="flow-widget card">
          {/* progress rail */}
          <div className="flow-rail">
            {STEPS.map((s, i) => (
              <div className={"flow-node" + (i === step ? " is-active" : "") + (i < step ? " is-done" : "")} key={s}>
                <span className="flow-node-dot">{i < step ? "✓" : i + 1}</span>
                <span className="flow-node-label">{s}</span>
              </div>
            ))}
            <div className="flow-rail-line"><i style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} /></div>
          </div>

          <div className="flow-body">
            {/* STEP 0 — UPLOAD */}
            {step === 0 && (
              <div className="flow-pane">
                <div className={"dropzone" + (uploaded ? " is-done" : "")} onClick={startUpload}>
                  {!uploaded && prog === 0 && (
                    <>
                      <div className="dz-ico">＋</div>
                      <b>Seret file audio ke sini</b>
                      <span>WAV / FLAC / MP3 · maks 200 MB · klik untuk simulasi</span>
                    </>
                  )}
                  {prog > 0 && !uploaded && (
                    <>
                      <Equalizer bars={9} h={40} />
                      <b style={{ marginTop: 14 }}>Mengunggah… {prog}%</b>
                      <div className="dz-prog"><i style={{ width: prog + "%" }} /></div>
                    </>
                  )}
                  {uploaded && (
                    <>
                      <div className="dz-file">
                        <span className="dz-wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></span>
                        <div className="dz-meta">
                          <b>senja-di-kamar_master.wav</b>
                          <span>24-bit · 44.1kHz · 3:42 · 38,2 MB</span>
                        </div>
                        <span className="dz-check">✓</span>
                      </div>
                      <span className="dz-hint">File siap. Lanjut isi detail rilis →</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* STEP 1 — DETAIL */}
            {step === 1 && (
              <div className="flow-pane flow-detail">
                <div className="detail-fields">
                  <label className="fld">
                    <span>Judul lagu</span>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul rilis" />
                  </label>
                  <label className="fld">
                    <span>Nama artis</span>
                    <input value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Nama artis" />
                  </label>
                  <div className="fld">
                    <span>Genre</span>
                    <div className="genre-chips">
                      {GENRES.map((g) => (
                        <button key={g} className={"chip" + (genre === g ? " is-on" : "")} onClick={() => setGenre(g)}>{g}</button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="detail-preview">
                  <span className="tape">PREVIEW SAMPUL</span>
                  <div className="cover-art">
                    <div className="cover-disc" />
                    <div className="cover-text">
                      <b>{title || "Judul Lagu"}</b>
                      <span>{artist || "Nama Artis"}</span>
                    </div>
                    <span className="cover-genre">{genre}</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 — PLATFORM */}
            {step === 2 && (
              <div className="flow-pane">
                <div className="plat-head">
                  <b>Pilih platform tujuan</b>
                  <span>{sel.size} dari {FLOW_PLATFORMS.length} dipilih</span>
                </div>
                <div className="plat-grid">
                  {FLOW_PLATFORMS.map((p) => (
                    <button key={p} className={"plat-chip" + (sel.has(p) ? " is-on" : "")} onClick={() => toggle(p)}>
                      <span className="plat-tick">{sel.has(p) ? "✓" : "+"}</span>{p}
                    </button>
                  ))}
                </div>
                <button className="plat-all" onClick={() => setSel(new Set(FLOW_PLATFORMS))}>Pilih semua platform</button>
              </div>
            )}

            {/* STEP 3 — PUBLISH */}
            {step === 3 && (
              <div className="flow-pane flow-publish">
                <div className="pub-burst"><Starburst size={120} color="var(--mustard)" /></div>
                <div className="pub-vinyl"><Vinyl size={120} label="LIVE" /></div>
                <h3 className="pub-title display">Rilis terjadwal!</h3>
                <p className="pub-sub">
                  <b>"{title}"</b> oleh <b>{artist}</b> akan tayang di <b>{sel.size} platform</b> pada
                  <b> Jumat, 19 Jun 2026</b>.
                </p>
                <div className="pub-tags">
                  {[...sel].slice(0, 6).map((p) => <span key={p} className="pub-tag">{p}</span>)}
                  {sel.size > 6 && <span className="pub-tag pub-more">+{sel.size - 6}</span>}
                </div>
                <button className="btn btn-ghost pub-restart" onClick={restart}>↺ Coba lagi</button>
              </div>
            )}
          </div>

          {/* footer nav */}
          {step < 3 && (
            <div className="flow-foot">
              <button className="flow-back" onClick={back} disabled={step === 0}>← Kembali</button>
              <button className="btn btn-primary flow-next" onClick={next} disabled={!canNext}>
                {step === 2 ? "Jadwalkan Rilis →" : "Lanjut →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { UploadFlow });
