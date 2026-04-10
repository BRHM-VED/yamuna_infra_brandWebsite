import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import FooterSection from '../features/home/components/FooterSection';
import ProjectPageView from '../features/projects/components/ProjectPageView';
import { useProjectFirestore } from '../features/projects/hooks/useProjectFirestore';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { project, isLoading } = useProjectFirestore(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading || !project) return null;

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar mobileVariant="light" />
      </header>

      <main className="pt-[52px] md:pt-[93px]">
        <ProjectPageView project={project} />
      </main>

      <FooterSection />
    </div>
  );
};

export default ProjectPage;
