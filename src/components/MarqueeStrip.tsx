interface MarqueeStripProps {
  text: string;
  dark?: boolean;
}

export default function MarqueeStrip({ text, dark = false }: MarqueeStripProps) {
  const bg = dark ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]';
  const textColor = dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)';
  const fadeColor = dark ? '#1a1a1a' : '#f5f5f5';

  return (
    <div className={`${bg} py-4 sm:py-6 px-4 sm:px-12 overflow-hidden relative pb-4 sm:pb-5`}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

      <div className="marquee-track flex whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl tracking-tight mx-4 sm:mx-10 shrink-0" style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300, color: textColor }}>
            {text}
            <span className="inline-block mx-8 opacity-30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
