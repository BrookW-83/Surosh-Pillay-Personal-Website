'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WorkshopOverview from './WorkshopOverview';
import AboutTrainer from './AboutTrainer';
import { workshops } from '@/data/services';
import Image from 'next/image';

export default function ServicesPage() {
  const workshop1 = workshops[0]; // Data Storytelling workshop
  const workshop2 = workshops[1]; // AI Products workshop

  return (
    <>
      <Header />
      <main className="relative bg-navy">
        {/* Hero Section - Diagonal Split Design */}
        <section className="relative mt-16 overflow-hidden">
          {/* Diagonal Background Split */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gold transform -skew-y-6 origin-top-left"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-navy transform skew-y-3"></div>
          </div>

          {/* Dot Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center">
            <div className="max-w-4xl animate-slideUpFade">
              <div className="inline-block mb-6">
                <span className="bg-navy text-white px-6 py-2.5 font-noto font-medium text-sm tracking-widest uppercase">
                  Featured Workshops
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-noto font-bold text-navy mb-6 leading-tight tracking-tight">
                Workshop <span className="text-white">Overview</span>
              </h1>
              <p className="text-xl font-noto text-white/90 max-w-2xl leading-relaxed">
                Transform your skills with expert-led workshops designed for real-world impact
              </p>

              {/* Decorative Arrow */}
              <div className="mt-12 flex items-center gap-4 animate-bounceRight">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-0.5 bg-navy"></div>
                  <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <span className="text-sm font-noto font-medium text-navy">Scroll to explore</span>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes slideUpFade {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes bounceRight {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(10px);
              }
            }
            .animate-slideUpFade {
              animation: slideUpFade 1s ease-out;
            }
            .animate-bounceRight {
              animation: bounceRight 2s ease-in-out infinite;
            }
          `}</style>
        </section>

        {/* Workshop 1 */}
        <WorkshopOverview workshop={workshop1} />

        {/* Workshop 2 */}
        <section className="relative bg-navy py-24">
          <div className="absolute top-10 left-10 text-[20rem] font-noto font-bold text-white/5 select-none">
            02
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image & Description */}
              <div className="space-y-8">
                <div className="relative aspect-video bg-gold/10 p-8">
                </div>

                <div className="bg-white/5 backdrop-blur-sm border-2 border-gold p-8">
                  <p className="text-white font-noto text-lg leading-relaxed">
                    {workshop2.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gold font-noto text-lg">{workshop2.problem}</p>
                  <p className="text-white/80 font-noto text-lg">{workshop2.solution}</p>
                </div>
              </div>

              {/* Right Column - Title & Outcomes */}
              <div className="space-y-10">
                <div className="border-l-8 border-gold pl-6">
                  <h2 className="text-5xl md:text-6xl font-noto font-bold text-white leading-tight">
                    {workshop2.title}
                  </h2>
                </div>

                <div className="relative bg-gold text-navy p-8">
                  <p className="text-2xl font-noto font-bold leading-relaxed">
                    {workshop2.tagline}
                  </p>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm border-2 border-white/20 p-10">
                  <div className="mb-6">
                    <h3 className="font-noto font-bold text-2xl text-gold mb-2">
                      TRAINING OBJECTIVES
                    </h3>
                    <p className="font-noto text-white/90 font-semibold">
                      By the end, participants will be able to:
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {workshop2.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-gold text-navy flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="text-white font-noto leading-relaxed flex-1">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gold text-navy px-8 py-6 font-noto font-bold text-xl hover:bg-white transition-all duration-300 border-4 border-gold hover:border-white">
                  APPLY NOW →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
