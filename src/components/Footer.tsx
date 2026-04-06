export default function Footer() {
  const navLinks = ['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers'];

  const socials = [
    { label: 'f', title: 'Facebook' },
    { label: '𝕏', title: 'X' },
    { label: 'in', title: 'LinkedIn' },
    { label: 'Bē', title: 'Behance' },
  ];

  return (
    <footer className="bg-[#111] rounded-t-[2rem] overflow-hidden">

      {/* Top: "Let's talk now" hero */}
      <div className="relative flex flex-col items-center justify-center py-16 sm:py-28 md:py-40 px-4 sm:px-6">
        <h2
          className="text-center text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.95] tracking-tight"
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 530,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's<br />talk now
        </h2>

        {/* Spinning "GET IN TOUCH" circle with arrow */}
        <a href="#contact" className="group mt-8 relative w-24 h-24 flex items-center justify-center">
          <svg className="animate-spin-slow absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circlePath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text fill="rgba(255,255,255,0.5)" fontSize="10" letterSpacing="4" fontFamily="Inter, sans-serif">
              <textPath href="#circlePath">GET IN TOUCH · GET IN TOUCH · </textPath>
            </text>
          </svg>
          <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Bottom: Footer content */}
      <div className="px-4 sm:px-6 md:px-12 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pt-4">

            {/* Left: Image with logo overlay */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[280px] sm:h-[350px] md:h-[400px]">
                <img
                  src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-645x500.jpg"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle – top-right of image */}
              {/* <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              </div> */}
              {/* White F logo overlay – centered on image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28">
                <img
                  src="https://floka.casethemes.net/wp-content/uploads/2025/06/footer-logo.svg"
                  alt="Floka logo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              {/* Giant "Floka" watermark */}
              <p
                className="text-[6rem] md:text-[8rem] leading-none text-white/[0.06] mt-2 -mb-4"
                style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 700 }}
              >
                Floka
              </p>
            </div>

            {/* Center: Nav links */}
            <nav className="flex flex-col gap-6 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={link === 'Get In Touch' ? '#contact' : '#'}
                  className="text-white text-2xl sm:text-3xl md:text-4xl relative w-fit group !text-white"
                  style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 400, color: '#ffffff' }}
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Right: Description + contact info + social icons */}
            <div className="flex flex-col gap-8">
              <p className="text-gray-400 text-sm leading-relaxed">
                At <span className="text-white font-semibold">Floka</span>, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
              </p>

              <div className="flex flex-col gap-1.5">
                <a href="mailto:info@floka-design.com" style={{ color: '#ffffff' }} className="text-sm relative w-fit group">
                  info@floka-design.com
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </a>
                <a href="tel:+12345678900" style={{ color: '#ffffff' }} className="text-sm relative w-fit group">
                  +123 (456 789 00)
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </a>
                <span style={{ color: '#ffffff' }} className="text-sm relative w-fit group">
                  12/A, Booston Tower, NYC
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    title={s.title}
                    className="w-10 h-10 rounded-full border border-white/50 bg-[#1a1a1a] flex items-center justify-center text-xs font-semibold hover:bg-white transition-all duration-300 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-white group-hover:text-black transition-colors duration-300">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright bar */}

        </div>
      </div>

      <div className="border-t border-white/10 py-6 flex items-center justify-center">
        <p className="text-gray-500 text-sm">Copyright © 2025 Case-Themes</p>
      </div>

    </footer>
  );
}
