import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Submit Requirements',
    description:
      'Tell us what you need — quantities, specifications, delivery timelines, and any special requirements.',
  },
  {
    number: '02',
    title: 'Receive Quote',
    description:
      'We prepare a detailed, competitive quotation tailored to your exact needs, usually within 24 hours.',
  },
  {
    number: '03',
    title: 'Confirm Order',
    description:
      'Review and approve the quote. We handle all logistics, sourcing, and coordination from this point forward.',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Your order is delivered to your location on schedule, with full documentation and quality verification.',
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#252F73] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
            Our Process
            <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-blue-200">
            A simple, transparent four-step process designed to make procurement
            effortless for your organisation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] h-px bg-blue-400 opacity-30 -translate-y-px"></div>
              )}

              <div className="text-center">
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full border-2 border-blue-400 bg-[#1e2660] flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F81420] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-[#d41020] transition-colors text-sm"
          >
            Start the Process
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L9.19 8 6.22 5.28a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
