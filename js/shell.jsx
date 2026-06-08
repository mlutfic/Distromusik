/* shell.jsx — shared Nav, Footer, page header/CTA bands, accent + bootstrap */

const HOME = "index.html";
const NAV_LINKS = [
  ["Fitur", "Fitur.html", "fitur"],
  ["Cara Kerja", "Cara Kerja.html", "cara"],
  ["Harga", "Harga.html", "harga"],
  ["Artis", "Artis.html", "artis"],
];

/* ---- Accent theme (shared with Tweaks) ---- */
const ACCENTS = [
  ["#d2562a", "#a83c1c", "#fff4e6"], // burnt orange
  ["#2f7d6c", "#1f574b", "#f1fbf7"], // vintage teal
  ["#d4971c", "#a06d0c", "#2a1f0e"], // mustard gold
  ["#b6402a", "#86291a", "#fff1ec"], // faded rust red
  ["#8a4a72", "#5f2f4c", "#fdeef7"], // plum berry
  ["#3a5a9a", "#27406f", "#eef3ff"], // ink blue
];
function applyAccent(arr) {
  if (!Array.isArray(arr)) return;
  const r = document.documentElement;
  r.style.setProperty("--accent", arr[0]);
  r.style.setProperty("--accent-deep", arr[1]);
  r.style.setProperty("--accent-ink", arr[2]);
}

/* ---- Nav ---- */
function Nav({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <div className="wrap nav-inner">
        <a href={HOME} className="brand">
          <span className="brand-disc" />
          PUTAR
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(([t, h, k]) => (
            <a key={t} href={h} className={active === k ? "is-active" : ""}>{t}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="Masuk.html" className="nav-login">Masuk</a>
          <a href="Daftar.html" className="btn btn-primary nav-btn">Mulai Gratis</a>
        </div>
      </div>
    </header>
  );
}

/* ---- Page header band ---- */
function PageHeader({ eyebrow, title, sub, tone = "paper", children }) {
  return (
    <section className={"page-head page-head--" + tone}>
      <div className="page-head-grain" />
      <div className="wrap page-head-inner">
        <div className="page-head-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display page-head-title">{title}</h1>
          {sub && <p className="page-head-sub">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---- CTA band ---- */
function CTABand({ kicker = "Gratis untuk rilis pertama", title = "Saatnya dunia dengar musikmu." }) {
  return (
    <section className="cta-band">
      <div className="cta-band-burst"><Starburst size={160} color="var(--cream-hi)" /></div>
      <div className="wrap cta-band-inner">
        <span className="tape">{kicker}</span>
        <h2 className="display cta-band-h">{title}</h2>
        <div className="cta-band-actions">
          <a href="Daftar.html" className="btn btn-primary cta-band-btn">▶ Mulai Rilis Gratis</a>
          <a href="Harga.html" className="btn btn-ghost cta-band-ghost">Lihat Harga</a>
        </div>
      </div>
    </section>
  );
}

/* ---- Footer ---- */
function Footer() {
  const cols = [
    ["Produk", [["Distribusi", "Fitur.html"], ["Cara Kerja", "Cara Kerja.html"], ["Smart Links", "Fitur.html"], ["Harga", "Harga.html"]]],
    ["Sumber", [["Pusat Bantuan", "#"], ["Blog Artis", "Artis.html"], ["Panduan Rilis", "Cara Kerja.html"], ["Status", "#"]]],
    ["Perusahaan", [["Tentang", "#"], ["Karier", "#"], ["Kontak", "#"], ["Press Kit", "#"]]],
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href={HOME} className="brand footer-logo"><span className="brand-disc" />PUTAR</a>
            <p>Distribusi musik untuk semua. Dibuat dengan ♪ di Indonesia.</p>
            <div className="footer-social">
              {["IG", "TT", "YT", "X"].map((s) => <span key={s} className="soc">{s}</span>)}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div className="footer-col" key={h}>
              <h4>{h}</h4>
              {items.map(([it, href]) => <a key={it} href={href}>{it}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bar">
          <span>© 2026 Putar Audio Nusantara</span>
          <span className="footer-mono">SIDE B · 33⅓ RPM · MADE IN ID</span>
          <div className="footer-legal"><a href="#">Privasi</a><a href="#">Ketentuan</a></div>
        </div>
      </div>
    </footer>
  );
}

/* ---- FAQ accordion ---- */
function FAQ({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div className={"faq-item" + (open === i ? " is-open" : "")} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            {q}<span className="faq-ico">+</span>
          </button>
          <div className="faq-a"><p>{a}</p></div>
        </div>
      ))}
    </div>
  );
}

/* ---- Page bootstrap: Nav + content + Footer + accent Tweaks ---- */
const PAGE_TWEAK_DEFAULTS = { "accent": ACCENTS[0] };

function PageRoot({ content, active, withCTA = true }) {
  const [t, setTweak] = useTweaks(PAGE_TWEAK_DEFAULTS);
  React.useEffect(() => { applyAccent(t.accent); }, [t.accent]);
  return (
    <React.Fragment>
      <Nav active={active} />
      {content}
      {withCTA && <CTABand />}
      <Footer />
      <TweaksPanel>
        <TweakSection label="Tema Warna" />
        <TweakColor label="Warna aksen" value={t.accent} options={ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

function mountPage(content, active, opts = {}) {
  ReactDOM.createRoot(document.getElementById("root"))
    .render(<PageRoot content={content} active={active} withCTA={opts.withCTA !== false} />);
}

Object.assign(window, {
  HOME, NAV_LINKS, ACCENTS, applyAccent,
  Nav, Footer, PageHeader, CTABand, FAQ, PageRoot, mountPage, PAGE_TWEAK_DEFAULTS,
});
