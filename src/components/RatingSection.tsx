export default function RatingSection() {
  return (
    <section className="bg-[#1a1a1a] rounded-3xl py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Rating */}
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4">4.9/5</h2>
            <p className="text-gray-400 text-base max-w-sm mb-8">
              We offer end-to-end creative solutions that make brands unforgettable.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              HIRE US NOW
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Center: Stats */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-500 text-sm mb-2">Worldwide base around the world</p>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">1+</h3>
            <h4 className="text-2xl md:text-3xl font-bold text-white">HAPPY USERS</h4>
            <p className="text-gray-500 text-xs mt-4">©2025 CASE-THEMES™ STUDIO</p>
          </div>

          {/* Right: Play Reel */}
          <div className="flex flex-col items-center lg:items-end">
            <a
              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white text-sm font-semibold tracking-wider">PLAY REEL</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
