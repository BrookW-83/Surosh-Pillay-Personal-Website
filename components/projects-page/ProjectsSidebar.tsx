'use client';

import { useState } from 'react';
import { DetailedProject } from '@/data/projects';

interface ProjectsSidebarProps {
  projects: DetailedProject[];
  activeProjectId: string;
  onProjectSelect: (projectId: string) => void;
}

export default function ProjectsSidebar({
  projects,
  activeProjectId,
  onProjectSelect,
}: ProjectsSidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const activeProject = projects.find(p => p.id === activeProjectId);

  const handleProjectSelect = (projectId: string) => {
    onProjectSelect(projectId);
    setIsDropdownOpen(false);
  };

  return (
    <aside className="w-full lg:w-80 lg:pr-8 animate-fadeInLeft">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-noto font-bold mb-6 lg:mb-8 text-navy text-center lg:text-left">
        Previous <span className="relative inline-block">
          <span className="relative z-10 bg-gold text-navy px-3 py-1 text-white">Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-navy/20"></span>
        </span>
      </h2>

      {/* Mobile Dropdown */}
      <div className="lg:hidden relative mb-6">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white border-2 border-navy rounded-2xl px-5 py-4 flex items-center justify-between gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="flex items-center gap-3 min-w-0 flex-1">
            <span className="h-3 w-3 rounded-full bg-gold flex-shrink-0"></span>
            <span className="font-noto font-bold text-navy truncate">
              {activeProject?.title || 'Select a project'}
            </span>
          </span>
          <span className="flex-shrink-0 flex items-center bg-navy/10 rounded-full px-2 py-1">
            <svg
              className={`w-5 h-5 text-navy transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-white border-2 border-navy/20 rounded-2xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${
            isDropdownOpen
              ? 'opacity-100 scale-y-100 translate-y-0'
              : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleProjectSelect(project.id)}
                className={`w-full text-left px-5 py-4 font-noto transition-all duration-200 flex items-center gap-3 ${
                  project.id === activeProjectId
                    ? 'bg-navy text-white font-bold'
                    : 'text-foreground hover:bg-gold/10 hover:pl-7'
                }`}
                style={{
                  animationDelay: `${index * 30}ms`,
                }}
              >
                <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 transition-all ${
                  project.id === activeProjectId ? 'bg-gold' : 'bg-navy/30'
                }`}></span>
                <span className="truncate">{project.title}</span>
                {project.id === activeProjectId && (
                  <svg className="w-5 h-5 ml-auto flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Backdrop */}
        {isDropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:block space-y-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => onProjectSelect(project.id)}
            className={`w-full text-left px-6 py-4 rounded-xl font-noto transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              project.id === activeProjectId
                ? 'bg-navy text-white font-bold shadow-xl'
                : 'bg-white/50 backdrop-blur-sm text-foreground hover:bg-white border border-navy/10'
            }`}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <span className="flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full transition-all ${
                project.id === activeProjectId ? 'bg-gold' : 'bg-navy/30'
              }`}></span>
              {project.title}
            </span>
          </button>
        ))}
      </nav>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out;
        }
      `}</style>
    </aside>
  );
}
