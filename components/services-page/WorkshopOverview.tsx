'use client';

import Image from 'next/image';
import { Workshop } from '@/data/services';

interface WorkshopOverviewProps {
  workshop: Workshop;
}

export default function WorkshopOverview({ workshop }: WorkshopOverviewProps) {
  return (
    <section className="relative bg-white py-24">
      {/* Large Number Background */}
      <div className="absolute top-2 md:top-10 right-4 md:right-10 text-[8rem] md:text-[20rem] font-noto font-bold text-gold/5 select-none">
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-10 animate-slideInLeft">
            {/* Title with Side Accent */}
            <div className="border-l-8 border-gold pl-6">
              <h2 className="text-5xl md:text-6xl font-noto font-bold text-navy leading-tight">
                {workshop.title}
              </h2>
            </div>

            {/* Tagline - Featured */}
            <div className="relative bg-navy text-white p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-2xl font-noto font-bold leading-relaxed">
                {workshop.tagline}
              </p>
              <div className="absolute top-2 right-2 w-16 h-16 border-4 border-gold"></div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-6">
              {[workshop.description, workshop.problem, workshop.solution].map((text, index) => (
                <div
                  key={index}
                  className="relative pl-12 py-4 group animate-fadeInSequence"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold group-hover:w-4 transition-all"></div>
                  <p className="text-foreground font-noto text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Outcomes */}
          <div className="flex flex-col gap-10 animate-slideInRight">
            {/* Workshop Image with Overlay Frame */}
            <div className="relative">
              <div className="relative aspect-video overflow-hidden group">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-8 border-navy group-hover:border-gold transition-colors duration-500"></div>
              </div>
              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy"></div>
            </div>

            {/* Outcomes - Bold Box Design */}
            <div className="relative bg-light-bg border-4 border-navy p-10">
              <div className="absolute -top-4 -left-4 bg-gold px-6 py-2">
                <h3 className="font-noto font-bold text-xl text-navy">
                  OUTCOMES
                </h3>
              </div>

              <p className="font-noto text-foreground mb-6 font-bold text-lg mt-6">
                By the end, participants will be able to:
              </p>

              <ul className="space-y-5">
                {workshop.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 animate-popIn"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-navy text-gold flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground font-noto leading-relaxed flex-1">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button - Bold Style */}
            <button className="group relative w-full bg-gold text-navy px-8 py-6 font-noto font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-4 border-navy">
              <span className="relative z-10 group-hover:text-white transition-colors">
                APPLY NOW →
              </span>
              <span className="absolute inset-0 bg-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInSequence {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-slideInRight {
          animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fadeInSequence {
          animation: fadeInSequence 0.8s ease-out both;
        }
        .animate-popIn {
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>
    </section>
  );
}
