export default function SkillsSection() {
  const socials = [
    { name: 'DRIBBBLE', href: '#' },
    { name: 'BEHANCE', href: '#' },
    { name: 'LINKEDIN', href: '#' },
    { name: 'X', href: '#' },
    { name: 'XING', href: '#' },
  ];

  const skills = [
    { label: 'Solutions', value: 100 },
    { label: 'UI/UX', value: 90 },
    { label: 'Explore', value: 72 },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Social Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Follow us</p>
            <h3 className="text-lg font-semibold text-black mb-6">For check updates</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Impressions</p>
            <div className="flex flex-col gap-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-semibold text-black">{skill.label}</h4>
                    <span className="text-sm text-gray-500">{skill.value}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full transition-all duration-1000"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
