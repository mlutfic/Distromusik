/* auth-shared.jsx — shared layout for Masuk (login) & Daftar (signup) */

function AuthAside({ mode }) {
  return (
    <aside className="auth-aside">
      <a href={HOME} className="brand"><span className="brand-disc" />PUTAR</a>
      {mode === "login" ? (
        <div>
          <h2>Selamat<br/>datang lagi.</h2>
          <p>Masuk untuk mengelola rilis, memantau royalti, dan menjadwalkan musik berikutnya.</p>
          <blockquote className="auth-quote">
            “Aku nggak perlu label. Putar yang urus distribusinya.”
            <span>— Rana Kelana · 1,2 jt streams</span>
          </blockquote>
        </div>
      ) : (
        <div>
          <h2>Mulai<br/>memutar.</h2>
          <p>Buat akun gratis dan rilis lagu pertamamu ke 150+ platform hari ini.</p>
          <ul className="auth-bullets">
            <li><span className="tick">✓</span>Gratis untuk rilis pertama</li>
            <li><span className="tick">✓</span>Royalti 100% milikmu</li>
            <li><span className="tick">✓</span>Tanpa kartu kredit</li>
          </ul>
        </div>
      )}
      <div className="auth-aside-disc"><Vinyl size={300} /></div>
    </aside>
  );
}

function AuthForm({ mode }) {
  const [type, setType] = React.useState("artis");
  const submit = (e) => { e.preventDefault(); alert("Demo konsep — form tidak terhubung ke server."); };
  return (
    <main className="auth-main">
      <div className="auth-card">
        <span className="tape">{mode === "login" ? "MASUK" : "DAFTAR GRATIS"}</span>
        <h1 className="auth-h">{mode === "login" ? "Masuk ke Putar" : "Buat akun"}</h1>
        <p className="auth-sub">
          {mode === "login"
            ? "Belum punya akun? "
            : "Sudah punya akun? "}
          <a href={mode === "login" ? "Daftar.html" : "Masuk.html"} style={{ color: "var(--accent-deep)", fontWeight: 800 }}>
            {mode === "login" ? "Daftar gratis" : "Masuk di sini"}
          </a>
        </p>

        <form className="auth-form" onSubmit={submit}>
          {mode === "signup" && (
            <div className="auth-field">
              <label>Daftar sebagai</label>
              <div className="auth-type">
                {[["artis", "Artis"], ["label", "Label"], ["podcaster", "Podcaster"]].map(([k, l]) => (
                  <button type="button" key={k} className={type === k ? "on" : ""} onClick={() => setType(k)}>{l}</button>
                ))}
              </div>
            </div>
          )}
          {mode === "signup" && (
            <div className="auth-field">
              <label>Nama artis / label</label>
              <input type="text" placeholder="mis. Rana Kelana" required />
            </div>
          )}
          <div className="auth-field">
            <label>Email</label>
            <input type="email" placeholder="kamu@email.com" required />
          </div>
          <div className="auth-field">
            <label>Kata sandi</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          {mode === "login" ? (
            <div className="auth-row">
              <label className="auth-check"><input type="checkbox" /> Ingat saya</label>
              <a href="#">Lupa sandi?</a>
            </div>
          ) : (
            <label className="auth-check" style={{ fontSize: 13 }}>
              <input type="checkbox" required /> Saya setuju dengan Ketentuan & Kebijakan Privasi
            </label>
          )}

          <button type="submit" className="btn btn-primary auth-submit">
            {mode === "login" ? "▶ Masuk" : "▶ Buat Akun Gratis"}
          </button>
        </form>

        <div className="auth-or">atau lanjut dengan</div>
        <div className="auth-social">
          <button>Google</button>
          <button>Apple</button>
        </div>

        <p className="auth-foot">
          <a href={HOME}>← Kembali ke beranda</a>
        </p>
      </div>
    </main>
  );
}

function AuthLayout({ mode }) {
  return (
    <div className="auth">
      <AuthAside mode={mode} />
      <AuthForm mode={mode} />
    </div>
  );
}

function AuthRoot({ mode }) {
  const [t, setTweak] = useTweaks(PAGE_TWEAK_DEFAULTS);
  React.useEffect(() => { applyAccent(t.accent); }, [t.accent]);
  return (
    <React.Fragment>
      <AuthLayout mode={mode} />
      <TweaksPanel>
        <TweakSection label="Tema Warna" />
        <TweakColor label="Warna aksen" value={t.accent} options={ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

function mountAuth(mode) {
  ReactDOM.createRoot(document.getElementById("root")).render(<AuthRoot mode={mode} />);
}

Object.assign(window, { AuthLayout, AuthRoot, mountAuth });
