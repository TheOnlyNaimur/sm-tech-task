import { useRef, useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <nav className="bg-[#f5f5f5] border-b border-gray-100 px-4 sm:px-6 md:px-9">
      <div className="h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img 
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png" 
            alt="Floka Logo"
            className="h-8 md:h-9 w-auto"
          />
        </a>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-10 lg:gap-16 xl:gap-55">
            <li>
              <a href="#" className="font-inter text-[16px] lg:text-[18px] font-medium text-gray-800 hover:text-black transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="font-inter text-[16px] lg:text-[18px] font-medium text-gray-800 hover:text-black transition-colors">Pages</a>
            </li>
            <li>
              <a href="#" className="font-inter text-[16px] lg:text-[18px] font-medium text-gray-800 hover:text-black transition-colors">Portfolio</a>
            </li>
            <li>
              <a href="#" className="font-inter text-[16px] lg:text-[18px] font-medium text-gray-800 hover:text-black transition-colors">Blog</a>
            </li>
          </ul>
        </div>

        {/* Right Section — Desktop */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="mailto:info@floka.com"
            className="text-[16px] lg:text-[18px] font-medium text-gray-800 hover:text-black transition-colors"
          >
            info@floka.com
          </a>
          <span className="w-px h-5 bg-gray-300" aria-hidden="true" />
          <button
            className="flex items-center justify-center p-1 text-black hover:opacity-60 transition-opacity"
            aria-label="Menu"
            onClick={() => {
              if (timerRef.current) return;
              setActive(true);
              timerRef.current = setTimeout(() => {
                setActive(false);
                timerRef.current = null;
              }, 420);
            }}
          >
            <svg className="w-4 h-4 overflow-visible" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <circle cx="7" r="1.5" style={{ cy: active ? 7 : 1.5, transition: 'cy 0.35s cubic-bezier(0.34,1.56,0.64,1)' }} />
              <circle cy="7" r="1.5" style={{ cx: active ? 7 : 1.5, transition: 'cx 0.35s cubic-bezier(0.34,1.56,0.64,1)' }} />
              <circle cx="7" cy="7" r="1.5" />
              <circle cy="7" r="1.5" style={{ cx: active ? 7 : 12.5, transition: 'cx 0.35s cubic-bezier(0.34,1.56,0.64,1)' }} />
              <circle cx="7" r="1.5" style={{ cy: active ? 7 : 12.5, transition: 'cy 0.35s cubic-bezier(0.34,1.56,0.64,1)' }} />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] p-2"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-[2.5px] bg-black rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[8.5px]' : ''}`} />
          <span className={`block w-6 h-[2.5px] bg-black rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2.5px] bg-black rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[8.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 py-6 border-t border-gray-200">
          {['Home', 'Pages', 'Portfolio', 'Blog'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[18px] font-medium text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:info@floka.com"
            className="text-[16px] font-medium text-gray-500 mt-2"
          >
            info@floka.com
          </a>
        </div>
      </div>
    </nav>
  )
}
