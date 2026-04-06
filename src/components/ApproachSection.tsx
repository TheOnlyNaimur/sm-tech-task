import React from 'react';

export default function ApproachSection() {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const els: (HTMLElement | null)[] = [headingRef.current, imageRef.current];
    const observers = els.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('anim-visible');
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const socials = [
    { name: 'DRIBBBLE', href: '#' },
    { name: 'BEHANCE', href: '#' },
    { name: 'LINKEDIN', href: '#' },
    { name: 'X', href: '#' },
    { name: 'XING', href: '#' },
  ];

  const skills = [
    { label: 'Solutions', value: 100, highlight: false },
    { label: 'UI/UX', value: 90, highlight: true },
    { label: 'Explore', value: 72, highlight: false },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* ============================================
             TOP SECTION — Spinning F badge (left) + 
             "Our approach..." heading (right)
             All in one flex row
        ============================================ */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-30 mb-12 md:mb-20 pb-8 md:pb-12 px-0 md:pl-16 md:pr-15">
          {/* LEFT: Spinning F badge + subtitle text below it */}
          <div className="flex flex-col items-center md:items-start shrink-0 w-full md:w-[220px]">
            <div className="relative w-[100px] h-[100px]">
              {/* Rotating circle text */}
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                <defs>
                  <path id="circlePathBig" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
                </defs>
                <text
                  fill="#aaaaaa"
                  fontSize="19"
                  fontWeight="400"
                  fontFamily="Inter, sans-serif"
                  letterSpacing="3"
                >
                  <textPath href="#circlePathBig">
                    • FLOKA DESIGN • FLOKA LEARRNING 
                  </textPath>
                </text>
              </svg>
              {/* Center F logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="4" width="28" height="6" rx="1" fill="black"/>
                  <rect x="4" y="4" width="6" height="28" rx="1" fill="black"/>
                  <rect x="4" y="15" width="20" height="6" rx="1" fill="black"/>
                </svg>
              </div>
            </div>
            <p className="text-[16px] text-gray-400 leading-relaxed mt-5 pl-5">
              We design every project with long-term success in mind.
            </p>
          </div>

          {/* RIGHT: "Our approach..." large heading */}
          <div className="flex-1 overflow-hidden">
            <h2
              ref={headingRef}
              className="slide-from-right text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] font-light leading-[1.08] text-black text-center md:text-left"
              style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
            >
              Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions.
            </h2>
          </div>
        </div>

        {/* ============================================
             BOTTOM SECTION — 4 Cards in a grid
             [Stats card] [CEO image card] [Social card + Skills card]
        ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[350px_1fr_350px] gap-4 items-stretch overflow-visible">

          {/* CARD 1 — Left: 25+ stats, divider, description, avatars */}
          <div className="bg-white rounded-[20px] p-8 flex flex-col justify-between min-h-[460px]">
            {/* Top: number */}
            <div>
              <div className="flex items-start leading-none">
                <span className="text-[100px] font-medium text-black leading-none tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>25</span>
                <span className="text-[78px] font-light text-gray-300 leading-none mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>+</span>
              </div>
              <p className="text-[15px] text-gray-400 mt-1 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Years of experience</p>
              <hr className="border-gray-200 mt-6 mb-6" />
            </div>

            {/* Middle: description */}
            <p className="text-[18px] text-gray-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore how we transform ideas into extraordinary digital experiences.
            </p>

            {/* Bottom: avatars + label */}
            <div className="mt-8">
              <div className="flex items-center -space-x-3 mb-3">
                {[11, 12, 13, 14].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i}`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-[13px] font-medium" style={{ fontFamily: 'Inter, sans-serif'}}>1200+ happy users review</p>  
            </div>
          </div>

          {/* CARD 2 — Center: CEO portrait floating above + award badges + quote */}
          <div className="bg-[#111] rounded-[20px] overflow-visible flex flex-col relative md:col-span-2 lg:col-span-1" >
            {/* Image — floats above the card, overflowing the top */}
            <img
              ref={imageRef}
              src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
              alt="Merizo H. Yelso"
              className="slide-from-top absolute left-1/2 -translate-x-1/2 object-cover rounded-t-[20px]"
              style={{ top: '-20px', height: 'clamp(280px, 40vw, 360px)', width: 'clamp(220px, 30vw, 280px)', objectPosition: '10% 9%' }}
            />

            {/* Award badges — right side within image area */}
            <div className="absolute flex flex-col gap-5 items-center" style={{ top: '20px', right: '20px' }}>
                {/* ULTRA PRESTIGIOUS */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="white" opacity="0.8"><path d="M2 13C1 10 0 7 1 4c1-2 3-3 4-3-1 2-2 5-1 8"/><path d="M3 13C3 10 2 7 3 4" stroke="white" strokeWidth="0.5" fill="none"/></svg>
                    <span className="text-white text-[10px] font-black uppercase tracking-wider">ULTRA</span>
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="white" opacity="0.8" style={{transform:'scaleX(-1)'}}><path d="M2 13C1 10 0 7 1 4c1-2 3-3 4-3-1 2-2 5-1 8"/><path d="M3 13C3 10 2 7 3 4" stroke="white" strokeWidth="0.5" fill="none"/></svg>
                  </div>
                  <p className="text-white/80 text-[8px] uppercase tracking-[0.15em] font-semibold leading-tight">Prestigious</p>
                  <p className="text-white/50 text-[7px] uppercase tracking-wider leading-tight">Best of the World</p>
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-1.5 h-1.5" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    ))}
                  </div>
                  <p className="text-white text-[8px] font-bold uppercase mt-0.5 tracking-widest">Winner</p>
                </div>

                {/* HYPER BEST */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="white" opacity="0.8"><path d="M2 13C1 10 0 7 1 4c1-2 3-3 4-3-1 2-2 5-1 8"/><path d="M3 13C3 10 2 7 3 4" stroke="white" strokeWidth="0.5" fill="none"/></svg>
                    <span className="text-white text-[10px] font-black uppercase tracking-wider">HYPER</span>
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="white" opacity="0.8" style={{transform:'scaleX(-1)'}}><path d="M2 13C1 10 0 7 1 4c1-2 3-3 4-3-1 2-2 5-1 8"/><path d="M3 13C3 10 2 7 3 4" stroke="white" strokeWidth="0.5" fill="none"/></svg>
                  </div>
                  <p className="text-white text-[11px] font-black uppercase tracking-wide leading-tight">Best</p>
                  <p className="text-white/50 text-[7px] uppercase tracking-wider leading-tight">Award Winning</p>
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-1.5 h-1.5" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    ))}
                  </div>
                </div>
            </div>

            {/* Spacer to push quote below the image */}
            <div className="h-[240px] sm:h-[280px] md:h-[310px]" />

            {/* Quote area */}
            <div className="p-7">
              <p className="text-white text-[18px] md:text-[20px] font-semibold leading-snug" style={{ fontFamily: 'inter, sans-serif' }}>
                " At Floka, we merge strategy, creativity, and technology to shape brands that people love. "
              </p>
              <p className="mt-4 text-white text-[13px] font-semibold">
                Merizo H. Yelso <span className="text-white/40 font-normal">/CEO</span>
              </p>
            </div>
          </div>

          {/* CARDS 3 & 4 — Right column: stacked */}
          <div className="flex flex-col gap-4">

            {/* CARD 3 — Follow us + social pills */}
            <div className="bg-white rounded-[20px] p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">Follow us</p>
              <h3 className="text-[18px] font-semibold text-black mb-5">For check updates</h3>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="px-4 py-1.5 border border-gray-200 rounded-full text-[12px] font-semibold text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 tracking-wide"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CARD 4 — Impressions / skill rows */}
            <div className="bg-white rounded-[20px] p-7 flex-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-4">Impressions</p>
              <div className="flex flex-col gap-1">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className={`flex items-center justify-between px-5 py-3 rounded-full ${
                      skill.highlight ? 'bg-[#1a1a1a] text-white' : 'text-black'
                    }`}
                  >
                    <span className="text-[14px] font-semibold">{skill.label}</span>
                    <span className="text-[14px] font-bold">{skill.value}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
