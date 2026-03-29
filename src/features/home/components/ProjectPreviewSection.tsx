import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { useNavigate } from 'react-router-dom';
const tulsiImg = '/assets/images/TulsiThirdEye.svg';
const brijImg = '/assets/images/BrijBhumi.svg';

const ProjectPreviewSection: React.FC = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: strings.projects.project1,
      subtitle: strings.projects.project1Subtitle,
      img: tulsiImg,
    },
    {
      title: strings.projects.project2,
      subtitle: strings.projects.project2Subtitle,
      img: brijImg,
    },
  ];

  return (
    <section className="w-full bg-white pt-20 pb-16 px-4 md:px-16">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Side: Text and CTA */}
        <div className="flex flex-col justify-between py-4 lg:w-[350px]">
          <div>
            <h2
              className="text-[48px] md:text-[64px] font-normal leading-[1.05] tracking-tight mb-12"
              style={{ fontFamily: fonts.heading, color: colors.secondary }}
            >
              Latest <br /> Projects
            </h2>
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-3 px-6 py-4 w-fit rounded-[1px] transition-all hover:opacity-90"
            style={{ backgroundColor: '#F3E5D8', fontFamily: fonts.body }}
          >
            <span className="text-[14px] font-medium text-[#1B1B1B]">Explore projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Right Side: Project Cards */}
        <div className="flex-1 relative">
          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto no-scrollbar pb-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => navigate('/projects')}
                className="flex-shrink-0 w-full md:w-[460px] lg:w-[480px] bg-white group cursor-pointer"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div className="relative h-[300px] md:h-[380px] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[14px] font-semibold uppercase tracking-wider"
                      style={{ fontFamily: fonts.body, color: colors.accent }}
                    >
                      {project.title}
                    </span>
                    <span
                      className="text-[18px] md:text-[20px] font-normal"
                      style={{ fontFamily: fonts.body, color: colors.secondary }}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  <div
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-[-45deg]">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex justify-end gap-3 mt-4">
            <button className="w-[60px] h-[60px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-[60px] h-[60px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectPreviewSection;
