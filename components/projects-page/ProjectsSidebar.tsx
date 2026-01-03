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
  return (
    <aside className="w-full lg:w-80 lg:pr-8 animate-fadeInLeft">
      <h2 className="text-3xl md:text-4xl font-noto font-bold mb-8 text-navy whitespace-nowrap">
        Previous <span className="relative inline-block">
          <span className="relative z-10 bg-gold text-navy px-3 py-1 text-white">Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-navy/20"></span>
        </span>
      </h2>

      <nav className="space-y-3">
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
