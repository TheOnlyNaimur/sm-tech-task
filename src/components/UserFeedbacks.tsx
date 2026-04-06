import { useEffect, useRef } from 'react';

const feedbacks = [
  {
    name: 'Nicolas K. Ellington',
    role: 'IT Specialist',
    quote: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
    tag: '" GREAT DESIGN SOLUTIONS "',
  },
  {
    name: 'Julian T. Beaumont',
    role: 'IT Specialist',
    quote: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
    tag: '" GREAT DESIGN SOLUTIONS "',
  },
  {
    name: 'Felipe D. Hawthorne',
    role: 'IT Specialist',
    quote: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
    tag: '" GREAT DESIGN SOLUTIONS "',
  },
];

function FeedbackCard({ name, role, quote, tag }: { name: string; role: string; quote: string; tag: string }) {
  return (
    <div className="group flex flex-col gap-3 cursor-pointer">
      {/* Name card — curtain rises from bottom to top */}
      <div className="relative rounded-2xl bg-white overflow-hidden px-6 py-5">
        <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-[#111] transition-all duration-500 ease-in-out" />
        <div className="relative z-10">
          <p className="text-sm font-semibold text-black group-hover:text-white transition-colors duration-300 delay-100">{name}</p>
          <p className="text-xs text-gray-400 group-hover:text-gray-400 mt-0.5 transition-colors duration-300 delay-100">{role}</p>
        </div>
      </div>

      {/* Quote card */}
      <div className="relative rounded-2xl bg-white overflow-hidden px-6 py-6 flex flex-col justify-between flex-1 min-h-[260px]">
        <div className="absolute inset-x-0 top-0 h-0 group-hover:h-full bg-[#111] transition-all duration-500 ease-in-out" />
        <div className="relative z-10 flex flex-col justify-between h-full gap-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 group-hover:text-white text-[15px] leading-relaxed flex-1 transition-colors duration-300 delay-100">{quote}</p>
          <p className="text-[10px] tracking-[0.15em] text-gray-400 group-hover:text-gray-500 uppercase transition-colors duration-300 delay-100">{tag}</p>
        </div>
      </div>
    </div>
  );
}

export default function UserFeedbacks() {
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
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-6 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            USER FEEDBACKS
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Big heading with inline avatars — top right */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-20 pb-5">
          <div /> {/* empty left */}
          <h2
            ref={headingRef}
            className="slide-from-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-[1.15]"
            style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
          >
            Accelerating growth, and unlocking new potential.{' '}
            <span className="inline-flex items-center -space-x-2 align-middle mx-1">
              {[
                'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8.webp',
                'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9.webp',
                'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img10.webp',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[#f5f5f5]" />
              ))}
            </span>{' '}
            Let's build your brand—together.
          </h2>
        </div>

        {/* 3-col staggered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {/* Col 1: starts lower */}
          <div className="md:mt-16">
            <FeedbackCard {...feedbacks[0]} />
          </div>
          {/* Col 2: top */}
          <div>
            <FeedbackCard {...feedbacks[1]} />
          </div>
          {/* Col 3: same as col 1 */}
          <div className="md:mt-16">
            <FeedbackCard {...feedbacks[2]} />
          </div>
        </div>

      </div>
    </section>
  );
}
