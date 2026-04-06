import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setVisible(scrollTop > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fillDeg = progress * 360;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-8 z-[9998] flex items-center justify-center rounded-full"
      style={{
        width: 52,
        height: 52,
        background: `conic-gradient(#111 ${fillDeg}deg, rgba(255,255,255,0.18) ${fillDeg}deg 360deg)`,
        transition: 'background 0.1s linear, opacity 0.3s ease, transform 0.3s ease',
        padding: 4,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'scale(1)' : 'scale(0.7)',
      }}
      aria-label="Scroll to top"
    >
      {/* Inner circle with arrow */}
      <div className="w-full h-full rounded-full bg-[#0d1b2a] flex items-center justify-center">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </button>
  );
}
