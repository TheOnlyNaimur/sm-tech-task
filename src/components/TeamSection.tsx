import { useState } from 'react';

const designTeam = [
  { name: 'Sarah M.', role: 'Lead Designer', image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8.webp' },
  { name: 'James K.', role: 'UI Designer', image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9.webp' },
  { name: 'Emma L.', role: 'UX Researcher', image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img10.webp' },
];

const devTeam = [
  { name: 'Michael R.', role: 'Lead Developer', image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8.webp' },
  { name: 'Anna W.', role: 'Frontend Dev', image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9.webp' },
  { name: 'David C.', role: 'Backend Dev', image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img10.webp' },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<'design' | 'dev'>('design');
  const team = activeTab === 'design' ? designTeam : devTeam;

  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">OUR AVENGERS</p>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.2em] leading-relaxed text-black mb-6">
          Meet with our team member
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveTab('design')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'design' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            DESIGN TEAM
          </button>
          <button
            onClick={() => setActiveTab('dev')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'dev' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            DEVELOPMENT TEAM
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-base max-w-lg mb-12">
          What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden h-[280px] sm:h-[320px] md:h-[350px] bg-gray-200 cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          JOIN WITH US
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
