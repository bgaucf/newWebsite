export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden bg-black box-border"
      style={{ border: '1px solid rgba(184, 134, 11, 0.25)' }}
    >
      {/* Top-down spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(184, 134, 11, 0.28) 0%, rgba(184, 134, 11, 0.06) 45%, transparent 70%)',
        }}
      />
      {/* Diagonal shine band */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(115deg, transparent 0%, transparent 38%, rgba(184, 134, 11, 0.14) 50%, transparent 62%, transparent 100%)',
        }}
      />
      {/* Rays from top - masked so they fade at sides and don't create edge artifacts */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rayGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(25)].map((_, i) => {
            const angle = -60 + (i * 5);
            const rad = (angle * Math.PI) / 180;
            const x2 = 50 + 100 * Math.sin(rad);
            const y2 = 100;
            return (
              <line
                key={i}
                x1="50%"
                y1="-5%"
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#rayGrad)"
                strokeWidth="0.6"
              />
            );
          })}
        </svg>
      </div>
      {/* Diamond pattern - inset so pattern edges don't show on sides */}
      <div className="absolute inset-[1px] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="diamonds" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M12 0 L24 12 L12 24 L0 12 Z" fill="none" stroke="#B8860B" strokeWidth="0.4" />
              <path d="M12 0 L12 24 M0 12 L24 12" fill="none" stroke="#B8860B" strokeWidth="0.25" />
            </pattern>
          </defs>
          <rect x="-1" y="-1" width="102%" height="102%" fill="url(#diamonds)" />
        </svg>
      </div>
      {/* Herringbone-style diagonals - inset so pattern edges don't show */}
      <div className="absolute inset-[1px] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.11]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="herring" width="60" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)">
              <line x1="0" y1="0" x2="0" y2="30" stroke="#B8860B" strokeWidth="0.5" />
              <line x1="30" y1="0" x2="30" y2="30" stroke="#B8860B" strokeWidth="0.5" />
            </pattern>
            <pattern id="herring2" width="60" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(50)">
              <line x1="0" y1="0" x2="0" y2="30" stroke="#B8860B" strokeWidth="0.4" />
              <line x1="30" y1="0" x2="30" y2="30" stroke="#B8860B" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect x="-1" y="-1" width="102%" height="102%" fill="url(#herring)" />
          <rect x="-1" y="-1" width="102%" height="102%" fill="url(#herring2)" />
        </svg>
      </div>
      {/* Center glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 42%, rgba(184, 134, 11, 0.15) 0%, transparent 65%)',
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 25%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </div>
  );
}
