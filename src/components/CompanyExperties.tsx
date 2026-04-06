import { useState } from 'react';

const services = [
  {
    title: 'User Interface & Experience Design',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…',
    tags: ['BRANDING', 'MAGAZINE', 'PRODUCT'],
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-accordion-img1.webp',
  },
  {
    title: 'Web Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…',
    tags: ['BRANDING', 'MODULE', 'PRODUCT', 'UX'],
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1.webp',
  },
  {
    title: 'Search Engine Optimization',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…',
    tags: ['BRANDING', 'PRODUCT', 'UX'],
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2.webp',
  },
  {
    title: 'Low-Code Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…',
    tags: ['BRANDING', 'UX'],
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3.webp',
  },
];

export default function CompanyExperties() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="bg-black relative z-10 rounded-t-[2rem] -mt-8 pt-16 md:pt-36 pb-0 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Giant centered heading */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="leading-[0.95]" style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}>
            <span className="block text-white text-[2.5rem] sm:text-[4rem] md:text-[7rem] lg:text-[9rem]">Company</span>
            <span className="block text-[2.5rem] sm:text-[4rem] md:text-[7rem] lg:text-[9rem]" style={{ color: 'rgba(255,255,255,0.15)' }}>expertise</span>
          </h2>
        </div>

        {/* Accordion Services */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={index} className="border-t border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center gap-4 sm:gap-8 py-5 sm:py-7 text-left group cursor-pointer pl-0 sm:pl-4 md:pl-[220px]"
              >
                {/* +/- icon */}
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white text-lg transition-colors group-hover:border-white/50">
                  {openIndex === index ? '−' : '+'}
                </span>
                <h3 className="text-white text-base sm:text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.title}
                </h3>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 pl-0 sm:pl-4 md:pl-[278px]">
                  <div className="flex-1">
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 border border-white/20 rounded-full text-[11px] font-semibold text-white tracking-wider hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Hire Us Today button */}
        <div className="mt-10 md:mt-14 mb-9 pl-0 sm:pl-4 md:pl-[220px]">
          <a href="#" className="inline-flex items-center gap-4 group">
            <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-xl font-light group-hover:scale-110 transition-transform">+</span>
            <span className="text-white text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Hire Us Today</span>
          </a>
        </div>
      </div>

      {/* Testimonial Marquee — inside the black section */}
      <div className="overflow-hidden pt-12 pb-10 border-t border-white/10">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, setIdx) =>
            [
              { avatar: 'https://i.pravatar.cc/80?img=32', text: 'Great in UI/UX' },
              { avatar: 'https://i.pravatar.cc/80?img=47', text: 'Best design communicator' },
              { avatar: 'https://i.pravatar.cc/80?img=12', text: '10/10 well recommanded' },
              { avatar: 'https://i.pravatar.cc/80?img=56', text: 'Super speedy website designer' },
            ].map((item, i) => (
              <span
                key={`${setIdx}-${i}`}
                className="inline-flex items-center gap-8 mx-16 shrink-0"
              >
                <span className="text-white/80 text-base md:text-lg italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  " {item.text} "
                </span>
                <img src={item.avatar} alt="" className="w-9 h-9 rounded-full object-cover shrink-0 opacity-80" />
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
