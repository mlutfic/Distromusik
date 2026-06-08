/* app.jsx — compose home sections + Tweaks (Nav/Footer/ACCENTS from shell.jsx) */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#d2562a", "#a83c1c", "#fff4e6"],
  "headline": "Rilis musikmu ke semua platform dunia.",
  "fastSpin": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyAccent(t.accent); }, [t.accent]);
  React.useEffect(() => {
    document.documentElement.style.setProperty("--spin-dur", t.fastSpin ? "2.5s" : "8s");
  }, [t.fastSpin]);

  return (
    <React.Fragment>
      <Nav active="home" />
      <Hero headline={t.headline} />
      <Features />
      <UploadFlow />
      <Dashboard />
      <SmartLink />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Tema Warna" />
        <TweakColor
          label="Warna aksen"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Hero" />
        <TweakText
          label="Headline"
          value={t.headline}
          onChange={(v) => setTweak("headline", v)}
        />
        <TweakSection label="Gaya" />
        <TweakToggle
          label="Putaran cepat"
          value={t.fastSpin}
          onChange={(v) => setTweak("fastSpin", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
