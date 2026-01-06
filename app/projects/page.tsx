import { Suspense } from 'react';
import ProjectsPage from '@/components/projects-page/ProjectsPage';

function ProjectsPageLoader() {
  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center">
      <div className="animate-pulse text-navy font-noto text-xl">Loading...</div>
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<ProjectsPageLoader />}>
      <ProjectsPage />
    </Suspense>
  );
}
