export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-black" />
      {/* Subtle gold gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(184, 134, 11, 0.15) 50%, transparent 100%)',
        }}
      />
      {/* Gold accent lines - diagonal */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="lines" width="120" height="120" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="120" y2="120" stroke="#B8860B" strokeWidth="0.5" />
            <line x1="60" y1="0" x2="180" y2="120" stroke="#B8860B" strokeWidth="0.5" />
            <line x1="120" y1="0" x2="240" y2="120" stroke="#B8860B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
      {/* Soft vignette */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
}
