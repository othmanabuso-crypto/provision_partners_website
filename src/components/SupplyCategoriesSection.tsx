import Link from 'next/link';

const categories = [
  {
    title: 'Office Equipment',
    subtitle: 'Printers, Copiers & Furniture',
    gradient: 'from-[#252F73] to-[#3d4fa0]',
  },
  {
    title: 'Stationery',
    subtitle: 'Paper, Pens, Files & More',
    gradient: 'from-[#1a6b5c] to-[#2a9f8a]',
  },
  {
    title: 'Networking Equipment',
    subtitle: 'Routers, Switches & Cables',
    gradient: 'from-[#7c3aed] to-[#a855f7]',
  },
  {
    title: 'Building Materials',
    subtitle: 'Cement, Steel & Hardware',
    gradient: 'from-[#b45309] to-[#d97706]',
  },
  {
    title: 'Safety Equipment',
    subtitle: 'PPE, Helmets & Hi-Vis',
    gradient: 'from-[#be123c] to-[#e11d48]',
  },
];

export default function SupplyCategoriesSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-2">
              <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
              Supply Range
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              Featured Supply Categories
            </h2>
          </div>
          <Link
            href="#services"
            className="text-sm font-semibold text-[#252F73] hover:text-[#F81420] transition-colors whitespace-nowrap"
          >
            View All Categories →
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Featured large card */}
          <div
            className={`col-span-2 lg:col-span-2 bg-gradient-to-br ${categories[0].gradient} p-8 flex flex-col justify-end min-h-[220px]`}
          >
            <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
              {categories[0].subtitle}
            </span>
            <h3 className="text-white text-2xl font-bold">{categories[0].title}</h3>
          </div>

          {/* Remaining cards */}
          <div className="col-span-2 lg:col-span-3 grid grid-cols-2 gap-4">
            {categories.slice(1).map((cat) => (
              <div
                key={cat.title}
                className={`bg-gradient-to-br ${cat.gradient} p-6 flex flex-col justify-end min-h-[140px]`}
              >
                <span className="text-white text-xs font-medium opacity-70 mb-1">{cat.subtitle}</span>
                <h3 className="text-white font-bold text-base lg:text-lg">{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#252F73] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#1e2660] transition-colors"
          >
            Request Supply Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
