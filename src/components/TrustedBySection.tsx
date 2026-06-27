const clients = [
  'Ministry of Finance',
  'TANESCO',
  'CRDB Bank',
  'NMB Bank',
  'NHIF',
  'Vodacom Tanzania',
  'Airtel Tanzania',
  'PPRA',
];

function LogoCard({ name, hidden }: { name: string; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden ? 'true' : undefined}
      className="flex-shrink-0 w-48 h-14 mr-6 bg-white border border-gray-200 flex items-center justify-center px-4"
    >
      <span className="text-xs font-semibold text-[#6B7280] text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section className="bg-gray-50 py-12 border-y border-gray-100">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold text-[#6B7280] tracking-widest uppercase">
          Trusted By Leading Organizations
        </p>
      </div>

      {/* Infinite carousel — pure CSS, no JS */}
      <div className="marquee-container overflow-hidden relative">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee flex"
          style={{ width: 'max-content' }}
        >
          {/* First set */}
          {clients.map((client) => (
            <LogoCard key={client} name={client} />
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <LogoCard key={`dup-${client}`} name={client} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
