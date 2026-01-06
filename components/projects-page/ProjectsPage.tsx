'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ProjectsSidebar from './ProjectsSidebar';
import ProjectDetail from './ProjectDetail';
import { detailedProjects } from '@/data/projects';

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const projectParam = searchParams.get('project');

  // Find the project from URL params, or default to Voice Biometrics
  const getInitialProject = () => {
    if (projectParam) {
      const found = detailedProjects.find((p) => p.id === projectParam);
      if (found) return found.id;
    }
    return detailedProjects[4].id; // Default to Voice Biometrics
  };

  const [activeProjectId, setActiveProjectId] = useState(getInitialProject);

  // Update active project when URL params change
  useEffect(() => {
    if (projectParam) {
      const found = detailedProjects.find((p) => p.id === projectParam);
      if (found) {
        setActiveProjectId(found.id);
      }
    }
  }, [projectParam]);

  const activeProject = detailedProjects.find((p) => p.id === activeProjectId) || detailedProjects[0];
  const currentIndex = detailedProjects.findIndex((p) => p.id === activeProjectId);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveProjectId(detailedProjects[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < detailedProjects.length - 1) {
      setActiveProjectId(detailedProjects[currentIndex + 1].id);
    }
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-light-bg overflow-hidden">
        {/* Dot Pattern Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #122940 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-navy/5 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-tl-full"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-navy/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <ProjectsSidebar
              projects={detailedProjects}
              activeProjectId={activeProjectId}
              onProjectSelect={setActiveProjectId}
            />

            {/* Main Content */}
            <ProjectDetail
              project={activeProject}
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={currentIndex > 0}
              hasNext={currentIndex < detailedProjects.length - 1}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

