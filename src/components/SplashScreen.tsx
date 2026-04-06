import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const interval = 16;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      const t = Math.min(elapsed / duration, 1);
      // ease-out quad for smooth deceleration
      const eased = 1 - (1 - t) * (1 - t);
      setProgress(eased * 100);
      if (t >= 1) {
        clearInterval(timer);
        setFadeOut(true);
        setTimeout(onComplete, 500);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      {/* Logo text */}
      <p
        className="text-white/80 text-sm tracking-[0.3em] uppercase mb-8"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Floka Studio
      </p>

      {/* Loading bar track */}
      <div className="w-full h-[2px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
