import type { ReactNode } from 'react';

type Industry = {
  title: string;
  description: string;
  icon: ReactNode;
};

const industries: Industry[] = [
  {
    title: 'Government Institutions',
    description: 'Reliable supply for ministries, public agencies, and parastatals with compliant procurement processes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: 'Corporate Businesses',
    description: 'Full-spectrum office and IT supply for SMEs and large corporations across Tanzania.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Construction Companies',
    description: 'Timely delivery of building materials, safety gear, and site equipment to active construction projects.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'NGOs & Nonprofits',
    description: 'Cost-efficient supply solutions with flexible procurement terms for non-governmental organizations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Educational Institutions',
    description: 'Schools, colleges, and universities supplied with stationery, IT equipment, and administrative materials.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
            Who We Serve
            <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-[#6B7280]">
            Our supply solutions span multiple sectors, each with dedicated service
            and industry-specific expertise.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-gray-100 shadow-sm p-6 flex gap-4 hover:border-[#252F73]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#EEF0FC] flex items-center justify-center text-[#252F73]">
                {industry.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">{industry.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}

          {/* Explore CTA Card */}
          <div className="bg-[#252F73] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Your Industry Not Listed?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                We work across many sectors. Contact us to discuss your specific supply requirements.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#252F73] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors self-start"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
