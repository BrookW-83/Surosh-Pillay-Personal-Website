'use client';

import { useState } from 'react';
import { projectsData } from '@/data/home';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex < projectsData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      {/* Background Pattern */}
      {/* <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(#122940 1px, transparent 1px),
            linear-gradient(90deg, #122940 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} */}
      {/* /> */}

      {/* Decorative gradient blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-noto font-bold text-navy mb-4">
            <span className="relative inline-block">
              Previous Projects
              <span className="absolute bottom-1 left-0 w-full h-3 bg-gold/30 -rotate-1"></span>
            </span>
          </h2>
          <p className="text-lg font-noto text-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful deliveries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 bg-navy text-white rounded-full p-4 shadow-xl disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110 hover:bg-dark-navy transition-all duration-300"
            aria-label="Previous projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= projectsData.length - itemsPerPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 bg-navy text-white rounded-full p-4 shadow-xl disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110 hover:bg-dark-navy transition-all duration-300"
            aria-label="Next projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Grid with Stagger Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projectsData.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group relative border-2 border-navy text-navy px-10 py-4 rounded-full font-noto font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View All Projects
            </span>
            <span className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
