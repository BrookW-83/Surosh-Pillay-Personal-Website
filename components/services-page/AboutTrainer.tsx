'use client';

import Image from 'next/image';
import { trainerInfo } from '@/data/services';

export default function AboutTrainer() {
  return (
    <section className="relative bg-background py-20 overflow-hidden">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, #122940 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative Blob */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 animate-zoomIn">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
              {/* <Image
                src={trainerInfo.image}
                alt={trainerInfo.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-gold rounded-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-navy rounded-3xl -z-10"></div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 animate-slideInRight">
            <h2 className="text-4xl md:text-5xl font-bold font-noto text-navy">
              About the <span className="relative inline-block">
                <span className="relative z-10 bg-gold text-navy px-4 py-1">{trainerInfo.title}</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-navy/20"></span>
              </span>
            </h2>

            <div className="space-y-6">
              {trainerInfo.bio.split('\n\n').map((paragraph, index) => (
                <div
                  key={index}
                  className="text-foreground leading-relaxed font-noto bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-navy/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg animate-fadeInUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.8s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
