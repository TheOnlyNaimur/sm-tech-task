import { useState } from 'react';

const faqs = [
  {
    question: 'What is artificial intelligence (AI)?',
    answer: 'Artificial intelligence refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses various technologies including machine learning, natural language processing, and computer vision.',
  },
  {
    question: 'How does AI improve business efficiency?',
    answer: 'AI improves business efficiency by automating repetitive tasks, providing data-driven insights, enhancing customer experiences through personalization, and optimizing workflows across departments.',
  },
  {
    question: 'How long does AI implementation take?',
    answer: 'Implementation timelines vary based on project complexity. Simple integrations may take weeks, while comprehensive AI solutions can take several months to fully deploy and optimize.',
  },
  {
    question: 'What industries can benefit from AI?',
    answer: 'Virtually every industry can benefit from AI, including healthcare, finance, retail, manufacturing, education, and technology. Each sector has unique applications and opportunities for AI integration.',
  },
  {
    question: 'What are the costs of AI solutions?',
    answer: 'Costs depend on factors like project scope, data requirements, integration complexity, and ongoing maintenance. We offer flexible pricing models to accommodate different budgets and needs.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">FAQ & GET ANSWER</p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.2em] leading-relaxed text-black mb-4">
            Have more questions? We've answers.
          </h2>
          <p className="text-gray-500">
            Don't find anything yet. Feel free to ask anything.{' '}
            <a href="#contact" className="text-black font-semibold underline">Let's Talk</a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image + CTA */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden h-[500px] mb-6">
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15.jpg"
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-8 flex items-start gap-4">
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6.webp"
                alt=""
                className="w-32 h-20 rounded-xl object-cover shrink-0"
              />
              <div>
                <p className="text-gray-400 text-sm mb-3">
                  Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.
                </p>
                <a href="#contact" className="text-white text-sm font-semibold hover:underline">
                  GET IN TOUCH →
                </a>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="flex flex-col divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-base md:text-lg font-semibold text-black pr-4 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </h3>
                  <span className={`text-xl text-black shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openIndex === index ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
