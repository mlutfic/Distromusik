/* graphics.jsx — PUTAR decorative components (vinyl, cassette, marks) */

/* Spinning vinyl record */
function Vinyl({ size = 460, label = "PUTAR", spinning = true }) {
  return (
    <div
      className="vinyl"
      style={{
        width: size, height: size,
        animation: spinning ? "spin var(--spin-dur, 8s) linear infinite" : "none",
      }}
    >
      <div className="vinyl-grooves" />
      <div className="vinyl-shine" />
      <div className="vinyl-label">
        <span className="vinyl-label-top">33⅓ RPM</span>
        <span className="vinyl-label-name">{label}</span>
        <span className="vinyl-label-sub">distribusi musik</span>
      </div>
      <div className="vinyl-hole" />
    </div>
  );
}

/* Cassette tape card */
function Cassette({ title = "DEMO REEL", sub = "SIDE A · 1979" }) {
  return (
    <div className="cassette">
      <div className="cassette-top">
        <span className="cassette-brand">PUTAR · C-60</span>
        <span className="cassette-dot" />
      </div>
      <div className="cassette-label">
        <span className="cassette-title">{title}</span>
        <span className="cassette-sub">{sub}</span>
        <div className="cassette-lines"><i/><i/><i/></div>
      </div>
      <div className="cassette-window">
        <div className="reel"><div className="reel-spokes"/></div>
        <div className="tape-bridge" />
        <div className="reel"><div className="reel-spokes"/></div>
      </div>
      <div className="cassette-holes"><span/><span/><span/><span/><span/></div>
    </div>
  );
}

/* Small starburst / sunray mark */
function Starburst({ size = 120, color = "var(--accent)" }) {
  const rays = Array.from({ length: 24 });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
      {rays.map((_, i) => (
        <rect key={i} x="49" y="2" width="2" height="22" fill={color}
          transform={`rotate(${(360 / rays.length) * i} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="20" fill="none" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

/* Equalizer bars (animated) */
function Equalizer({ bars = 7, color = "var(--accent)", h = 34 }) {
  return (
    <div className="eq" style={{ height: h }}>
      {Array.from({ length: bars }).map((_, i) => (
        <span key={i} style={{ background: color, animationDelay: `${i * 0.12}s` }} />
      ))}
    </div>
  );
}

Object.assign(window, { Vinyl, Cassette, Starburst, Equalizer });
