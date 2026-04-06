export default function ContactSection() {
  return (
    <section className="relative bg-[#0a0a0a] rounded-t-[2rem] py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden" id="contact">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text + Contact Info */}
          <div className="flex flex-col justify-between min-h-0 md:min-h-[500px]">
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] text-[#b8a06a] mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                GET IN TOUCH
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] text-white leading-[1.15]"
                style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
              >
                Tell us about your project —whether it's a website, SEO, or marketing.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-10 md:mt-16">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#b8a06a]">💬</span>
                  <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    TALK TO US
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">Work and general inquiries</p>
                <a href="tel:+12345678900" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +123 456 789 00
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#b8a06a]">📍</span>
                  <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    POST ADDRESS
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  541 Melville Ave, Palo Alto, CA<br />
                  94301, United States
                </p>
              </div>
            </div>
          </div>

          {/* Right: White Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10">
            <h3
              className="text-xl md:text-2xl text-black mb-8"
              style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 400 }}
            >
              Have a project in mind?
            </h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full px-5 py-4 bg-[#f5f5f5] rounded-xl text-xs tracking-wider text-black placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider outline-none focus:ring-2 focus:ring-black/10 transition"
                />
                <input
                  type="email"
                  placeholder="BUSINESS EMAIL"
                  className="w-full px-5 py-4 bg-[#f5f5f5] rounded-xl text-xs tracking-wider text-black placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider outline-none focus:ring-2 focus:ring-black/10 transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-black font-semibold mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>BUDGET</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 bg-[#f5f5f5] rounded-xl text-sm text-black outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-black/10 transition pr-10">
                      <option>$1000 - $5000</option>
                      <option>$5000 - $10000</option>
                      <option>$10000 - $25000</option>
                      <option>$25000+</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-black font-semibold mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>SERVICE</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 bg-[#f5f5f5] rounded-xl text-sm text-black outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-black/10 transition pr-10">
                      <option>CONSULTANCY</option>
                      <option>WEB DEVELOPMENT</option>
                      <option>UI/UX DESIGN</option>
                      <option>SEO</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="w-full px-5 py-4 bg-[#f5f5f5] rounded-xl text-xs tracking-wider text-black placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider outline-none resize-y focus:ring-2 focus:ring-black/10 transition"
              />

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg hover:scale-110 transition-transform"
                >
                  +
                </button>
                <span className="text-black text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  LET'S TALK
                </span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
