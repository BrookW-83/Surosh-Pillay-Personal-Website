import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = project.slug ? `/projects?project=${project.slug}` : '/projects';

  return (
    <Link href={href} className="block h-full">
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* View Project button that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="bg-white text-navy px-6 py-3 rounded-full font-noto font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              View Project →
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col gap-3 bg-gradient-to-b from-white to-slate-50 flex-grow">
          <h3 className="text-xl font-noto font-bold text-navy group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-slate-600 font-noto text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          )}

          {/* Bottom accent line */}
          <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold to-navy transition-all duration-500 rounded-full"></div>
        </div>
      </div>
    </Link>
  );
}
