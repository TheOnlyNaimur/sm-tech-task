import { useEffect, useRef } from 'react';

const portfolioItems = [
  {
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5.webp',
    categories: ['BRANDING', 'UX'],
    name: 'ALDAN BRANDING',
    year: '2025',
  },
  {
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1.jpg',
    categories: ['BRANDING', 'UX'],
    name: 'ALDAN BRANDING',
    year: '2025',
  },
  {
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3.webp',
    categories: ['BRANDING', 'MODULE', 'PRODUCT', 'UX', 'WEBSITE'],
    name: 'ALDAN BRANDING',
    year: '2025',
    wide: true,
  },
  {
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2.webp',
    categories: ['BRANDING', 'UX'],
    name: 'ALDAN BRANDING',
    year: '2025',
  },
  {
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1.webp',
    categories: ['BRANDING', 'PRODUCT', 'UX'],
    name: 'ALDAN BRANDING',
    year: '2025',
  },
];

export default function PortfolioGrid() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('anim-visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-14 pb-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Portfolio</p>
          <hr className="border-gray-300 mb-10" />
          <h2 ref={headingRef} className="slide-from-right text-right text-[1.8rem] sm:text-[2.4rem] md:text-[3.2rem] lg:text-[3rem] font-light leading-[1.1] text-black" style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300, paddingTop:9, paddingBottom:9 }}>
            Strategy to build powerful digital solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 ${item.wide ? 'md:col-span-2' : ''}`}
            >
              {/* Image card */}
              <div
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  item.wide ? 'h-[250px] sm:h-[350px] md:h-[400px]' : 'h-[220px] sm:h-[300px] md:h-[350px]'
                }`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
                  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) img.style.transform = `scale(1.12) translate(${x}px, ${y}px)`;
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1) translate(0px, 0px)';
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  style={{ transform: 'scale(1) translate(0px, 0px)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.categories.map((cat) => (
                      <span key={cat} className="text-[10px] text-white/80 uppercase tracking-wider">
                        {cat}{item.categories.indexOf(cat) < item.categories.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Label card */}
              <div className="bg-white rounded-xl px-5 pb-4 pt-5 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-black tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>{item.name}</span>
                <span className="text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            MORE WORKS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}
