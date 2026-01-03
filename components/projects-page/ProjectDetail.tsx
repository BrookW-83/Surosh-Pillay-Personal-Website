import Image from 'next/image';
import { DetailedProject } from '@/data/projects';

interface ProjectDetailProps {
  project: DetailedProject;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function ProjectDetail({
  project,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ProjectDetailProps) {
  return (
    <div className="flex-1 animate-fadeInRight">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-noto font-bold text-navy mb-8 relative inline-block">
        {project.title}
        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gold"></span>
      </h1>

      {/* Project Image */}
      <div
        key={project.id}
        className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5 shadow-2xl group"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 animate-slideUp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Project Description */}
      <div className="prose prose-lg max-w-none">
        <p
          className="text-slate-900 font-noto text-lg leading-relaxed mb-8 p-6 rounded-3xl border border-slate-300/50 shadow-lg"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(24px)',
            background: 'rgba(163, 170, 180, 0.12)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          }}
        >
          {project.description}
        </p>

        {/* Additional Sections */}
        <div
          className="p-6 rounded-3xl border border-slate-300/50 shadow-lg hover:shadow-xl hover:border-slate-400/60 transition-all duration-500"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(24px)',
            background: 'rgba(163, 170, 180, 0.12)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          }}
        >
          {project.sections.map((section, index) => (
            <div key={index} className={index > 0 ? "mt-6" : ""}>
              {section.title && (
                <h3 className="text-2xl font-noto font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="h-1 w-8 bg-gold"></span>
                  {section.title}
                </h3>
              )}
              <p className="text-slate-900 font-noto leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-navy/10">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="group flex items-center gap-2 text-navy font-noto font-bold hover:text-gold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:gap-3"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          Previous Project
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="group flex items-center gap-2 text-navy font-noto font-bold hover:text-gold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:gap-3"
        >
          Next Project
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
