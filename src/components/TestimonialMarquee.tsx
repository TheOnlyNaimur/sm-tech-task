export default function TestimonialMarquee() {
  const testimonials = [
    'Great in UI/UX',
    'Best design communicator',
    '10/10 well recommended',
    'Super speedy website designer',
  ];

  return (
    <section className="py-8 overflow-hidden bg-[#f5f5f5]">
      <div className="marquee-track flex whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, setIdx) =>
          testimonials.map((text, i) => (
            <span
              key={`${setIdx}-${i}`}
              className="inline-flex items-center mx-6 shrink-0 text-lg md:text-xl font-medium text-black"
            >
              <span className="text-yellow-500 mr-3">"</span>
              {text}
              <span className="text-yellow-500 ml-3">"</span>
              <span className="inline-block mx-8 w-2 h-2 rounded-full bg-black/20" />
            </span>
          ))
        )}
      </div>
    </section>
  );
}
