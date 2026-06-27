'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Slide = {
  label: string;
  description: string;
  icon: ReactNode;
};

const slides: Slide[] = [
  {
    label: 'IT Equipment',
    description: 'Laptops, desktops, printers & networking gear sourced to your specification.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    label: 'Office Supplies',
    description: 'Stationery, furniture & consumables for every type of workspace.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    label: 'Networking Equipment',
    description: 'Routers, managed switches & structured cabling solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    label: 'Construction Materials',
    description: 'Cement, steel reinforcements, hardware & building consumables.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: 'Safety Equipment',
    description: 'PPE, helmets, hi-visibility gear & site safety consumables.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: 'Procurement Solutions',
    description: 'End-to-end vendor sourcing, negotiation & delivery coordination.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Column */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-5">
              <span className="w-8 h-0.5 bg-[#F81420] inline-block"></span>
              Trusted Supply Partner
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15] mb-6">
              Reliable Supply Solutions For Modern Businesses
            </h1>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Office Supplies, Construction Materials, IT Equipment &amp; Procurement
              Services — all sourced and delivered by a single trusted partner in Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-[#252F73] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-[#1e2660] transition-colors duration-150 text-sm"
              >
                Request a Quote
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-[#252F73] text-[#252F73] font-semibold px-8 py-3.5 rounded-md hover:bg-[#252F73] hover:text-white transition-colors duration-150 text-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
              <div>
                <p className="text-2xl font-bold text-[#252F73]">200+</p>
                <p className="text-sm text-[#6B7280]">Clients Served</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-[#252F73]">4</p>
                <p className="text-sm text-[#6B7280]">Service Sectors</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-[#252F73]">100%</p>
                <p className="text-sm text-[#6B7280]">Delivery Commitment</p>
              </div>
            </div>
          </div>

          {/* Visual Column — rotating showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2d3a8c] via-[#252F73] to-[#1a2055] p-6 lg:p-8">

              {/* Slide content — key forces remount → CSS animation restarts */}
              <div className="min-h-[300px] flex flex-col">
                <div
                  key={active}
                  className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 animate-fade-slide-in"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {/* Counter */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-sm font-bold text-[#F81420]">
                      {String(active + 1).padStart(2, '0')}
                    </span>
                    <span className="w-10 h-px bg-white/20 block"></span>
                    <span className="text-xs text-white/40 tracking-widest">
                      {String(slides.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon — square, sharp */}
                  <div className="w-20 h-20 bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white">
                    {slides[active].icon}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                    {slides[active].label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-blue-200/80 leading-relaxed max-w-[240px]">
                    {slides[active].description}
                  </p>
                </div>

                {/* Dot / pill navigation */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/10">
                  {slides.map((slide, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={slide.label}
                      aria-current={i === active ? 'true' : undefined}
                      className={`transition-all duration-300 ${
                        i === active
                          ? 'w-6 h-1.5 bg-[#F81420]'
                          : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-[#F81420] opacity-10 rounded-full -z-10 pointer-events-none"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#252F73] opacity-10 rounded-full -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
