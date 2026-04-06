import { useState } from 'react';

const logos = [
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon8.svg',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon9.svg',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon10.svg',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon11.svg',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon12.svg',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon13.svg',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon14.svg',
];

export default function HappyUsers() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

        {/* Header */}
        <div className="pb-4 border-b border-gray-200 mb-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Happy Users
          </p>
        </div>

        {/* Card 1: Logo grid */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center py-12 px-8 border-b border-r border-gray-100 last:border-r-0"
                style={{
                  borderRight: (i + 1) % 4 === 0 ? 'none' : undefined,
                }}
              >
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  onError={(e) => {
                    // Fallback: show text placeholder if SVG fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('span')) {
                      const span = document.createElement('span');
                      span.className = 'text-xl font-bold text-gray-800 flex items-center gap-2';
                      const colors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-blue-400', 'text-yellow-600', 'text-red-500', 'text-red-400'];
                      span.innerHTML = `<span class="${colors[i]}">◆</span> Logoipsum`;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
            {/* Last cell: CTA */}
            <div className="flex flex-col items-center justify-center py-12 px-8 border-b border-gray-100">
              <p className="text-gray-400 text-sm tracking-wide mb-2">NEXT CAN BE YOU.</p>
              <a
                href="#contact"
                className="text-black text-sm font-semibold tracking-wide hover:underline underline-offset-4 transition-all"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Play Reel image */}
        <div
          className="relative rounded-2xl overflow-hidden cursor-pointer"
          style={{ height: 'clamp(400px, 50vw, 700px)' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background image */}
          <img
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp"
            alt="Team reel"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
            style={{
              filter: hovered ? 'blur(8px) brightness(0.6)' : 'blur(0) brightness(1)',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />

          {/* Play Reel button */}
          <div
            className="absolute z-10 transition-all duration-700 ease-out"
            style={{
              bottom: hovered ? '50%' : '32px',
              left: hovered ? '50%' : '32px',
              transform: hovered ? 'translate(-50%, 50%)' : 'translate(0, 0)',
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span
                className="text-black text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Play Reel
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
