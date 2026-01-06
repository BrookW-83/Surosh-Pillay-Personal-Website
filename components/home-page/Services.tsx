import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/home';

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br overflow-hidden">
      {/* Square Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-noto font-bold text-slate-900 mb-3">
            Services
          </h2>
          <p className="text-lg font-noto text-slate-600">
            Transforming leaders and organizations through strategic expertise
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group rounded-3xl shadow-lg hover:shadow-xl border border-slate-300/50 hover:border-slate-400/60 transition-all duration-500 ${
                index === 0 ? 'p-8 md:p-12' : 'p-6 md:p-8'
              }`}
              style={{
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(24px)',
                background: 'rgba(163, 170, 180, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              }}
            >
              {index === 0 ? (
                // Featured Service Card - Large with Image
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Text Side */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-noto font-bold text-slate-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg font-noto text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-noto font-semibold text-slate-500 uppercase tracking-wide">
                        Featured Topics
                      </p>
                      <Link href="/services?workshop=data-storytelling" className="flex items-center gap-3 text-slate-900 hover:text-slate-700 transition-all group/link">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-900 group-hover/link:w-8 transition-all duration-300"></span>
                        <span className="text-lg font-noto font-medium">Data storytelling for impact</span>
                        <span className="text-xl group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                      <Link href="/services?workshop=ai-products" className="flex items-center gap-3 text-slate-900 hover:text-slate-700 transition-all group/link">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-900 group-hover/link:w-8 transition-all duration-300"></span>
                        <span className="text-lg font-noto font-medium">Building AI products that actually work</span>
                        <span className="text-xl group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ) : (
                // Compact Service Cards
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl md:text-3xl font-noto font-bold text-slate-900">
                        {service.title}
                      </h3>
                      {service.comingSoon && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-noto font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1.5 rounded-full shadow-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {service.description && (
                      <p className="text-base md:text-lg font-noto text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>

                  <button
                    className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-noto font-bold transition-all duration-300 shadow-lg whitespace-nowrap ${
                      service.comingSoon
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                        : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl hover:scale-105'
                    }`}
                    disabled={service.comingSoon}
                  >
                    {service.comingSoon ? 'Stay Tuned' : 'Learn More'}
                    <span className="text-lg">→</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
