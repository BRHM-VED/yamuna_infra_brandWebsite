import React, { useEffect } from 'react';
import Navbar from '../../../layouts/Navbar';
import FooterSection from '../../home/components/FooterSection';
import ProjectListItem, { type ProjectListItemData } from './ProjectListItem';

const PROJECTS: ProjectListItemData[] = [
  {
    id: 'vrinda-apartments',
    title: 'VRINDA APARTMENTS',
    subtitle: 'Live Where Faith Feels at Home',
    imageSrc: '/assets/projects/vrindaApartments.svg',
    priceNum: '80',
    priceText: 'LAKHS',
  },
  {
    id: 'tulsi-wings-apartments',
    title: 'TULSI WINGS APARTMENTS',
    subtitle: 'Live Where Faith Feels at Home',
    imageSrc: '/assets/projects/TulsiWings.svg',
    priceNum: '80',
    priceText: 'LAKHS',
  },
  {
    id: 'shri-braj-rani-apartments',
    title: 'SHRI BRAJ RANI APARTMENTS',
    subtitle: 'Live Where Faith Feels at Home',
    imageSrc: '/assets/projects/ShriBrajrani.svg',
    priceNum: '80',
    priceText: 'LAKHS',
  },
  {
    id: 'kanha-tulsi-heights',
    title: 'KANHA TULSI HEIGHTS',
    subtitle: 'Live Where Faith Feels at Home',
    imageSrc: '/assets/projects/KanhaTulsiHeights.svg',
    priceNum: '80',
    priceText: 'LAKHS',
  },
];

const AllProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Navbar />
      </header>

      <main className="pt-[52px] md:pt-[93px] pb-16 md:pb-24">
        <div className="w-full">
          {PROJECTS.map((p) => (
            <ProjectListItem key={p.id} data={p} />
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default AllProjectsPage;

