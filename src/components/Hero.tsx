export default function Hero() {
  return (
    <section className="relative rounded-3xl w-full min-h-[80vh] md:min-h-[120vh] overflow-hidden bg-[#111]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />

      {/* Floka Studio — bottom left */}
      <div className="absolute bottom-32 sm:bottom-10 left-4 sm:left-10 md:left-16 z-10 leading-none select-none">
        <h1
          className="text-white text-[18vw] sm:text-[14vw] md:text-[16vw] leading-[0.82] tracking-[-0.02em]"
          style={{ fontFamily: "'Funnel Display', sans-serif", fontStretch: 'expanded', fontWeight: 400 }}
        >
          Floka
        </h1>
        <span
          className="block text-[9vw] sm:text-[7vw] md:text-[6vw] text-white/25 tracking-[-0.01em]"
          style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300, marginLeft: '62%', marginTop: '1vw' }}
        >
          Studio
        </span>
      </div>

      {/* Right side — card + description stacked */}
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-auto right-4 sm:right-10 md:right-16 z-10 flex flex-col items-start gap-3 sm:gap-5">
        {/* Profile Card */}
        <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-2xl p-3 sm:p-5 w-full sm:w-[380px] md:w-[440px] flex items-stretch gap-3 sm:gap-4">
          <img
            src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide.jpg"
            alt="Almond D. Nelsi"
            className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-[10px] sm:rounded-[14px] object-cover shrink-0"
          />
          
          <div className="flex flex-col justify-between flex-1">
            <div>
              <p className="text-[11px] sm:text-[14px] font-semibold text-gray-400 uppercase tracking-[0.22em] leading-none">
                HEAD OF IDEA
              </p>
              <h3 className="text-[15px] sm:text-[18px] font-bold text-black leading-tight mt-1 sm:mt-2" style={{ marginTop: '6px' }}>
                Almond D. Nelsi
              </h3>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <span className="text-[13px] sm:text-[15px] font-bold text-black tracking-[0.06em]">LET'S TALK</span>
            </div>
          </div>
        </div>

        {/* Description text below card */}
        <div className="max-w-[400px] hidden sm:block">
          <p className="text-white text-[16px] md:text-[20px] font-semibold leading-snug">
            No cookie-cutter websites. No fluff.
          </p>
          <p className="text-white/50 text-[15px] md:text-[19px] leading-relaxed mt-1">
            Just real tools and smart strategies to grow your business and elevate your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
