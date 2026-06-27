import Link from 'next/link';
import type { ReactNode } from 'react';

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
};

const services: Service[] = [
  {
    title: 'Office Supplies',
    description:
      'Comprehensive office stationery, furniture, and consumables for all business types — from small offices to large corporate environments.',
    gradient: 'from-blue-50 to-indigo-100',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    title: 'Construction Materials',
    description:
      'Cement, steel, hardware, safety equipment, and general building materials supplied reliably to construction sites and contractors.',
    gradient: 'from-orange-50 to-amber-100',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75" />
      </svg>
    ),
  },
  {
    title: 'IT Equipment & Accessories',
    description:
      'Laptops, computers, printers, networking gear, and accessories from trusted brands — sourced and delivered to your specification.',
    gradient: 'from-teal-50 to-cyan-100',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: 'Procurement Services',
    description:
      'End-to-end procurement management — from vendor sourcing and negotiation to order tracking and delivery coordination.',
    gradient: 'from-purple-50 to-violet-100',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
            What We Do
            <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-[#6B7280]">
            We deliver tailored supply solutions across four key sectors, built on
            reliability, speed, and quality assurance.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#252F73]/20 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Card Image Placeholder */}
              <div className={`bg-gradient-to-br ${service.gradient} h-36 flex items-center justify-center`}>
                <div className="w-16 h-16 bg-white flex items-center justify-center shadow-sm text-[#252F73]">
                  {service.icon}
                </div>
              </div>
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#111827] mb-2">{service.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed flex-1">{service.description}</p>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#252F73] hover:text-[#F81420] transition-colors"
                >
                  Learn More
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L9.19 8 6.22 5.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
