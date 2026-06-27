import type { ReactNode } from 'react';

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
};

const features: Feature[] = [
  {
    title: 'Reliable Delivery',
    description:
      'We honour every commitment. Our logistics network ensures your orders arrive on time, every time — no exceptions.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#252F73]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Fast Response',
    description:
      'Get quotes and order confirmations within hours. Our team is responsive, proactive, and always available.',
    iconBg: 'bg-red-50',
    iconColor: 'text-[#F81420]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    description:
      'We source only from verified suppliers and conduct thorough quality checks before delivery to your premises.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Pricing',
    description:
      'Our supplier network and procurement expertise translate into the best market prices without compromising quality.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
              Our Advantage
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-5">
              Why Choose Provision Partners
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              We are more than a supplier — we are a strategic partner committed to
              keeping your operations running smoothly. Here is what sets us apart.
            </p>
            <div className="flex items-center gap-4 p-5 bg-[#F6F8FF] border border-blue-100">
              <div className="w-12 h-12 bg-[#252F73] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#111827]">Dedicated Account Management</p>
                <p className="text-sm text-[#6B7280] mt-0.5">
                  Every client has a dedicated point of contact for seamless communication.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#252F73]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-12 h-12 ${feature.iconBg} flex items-center justify-center ${feature.iconColor} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
