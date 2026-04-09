import React from "react";
import { colors, fonts, strings } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import PagerNavButton from "../../../components/common/PagerNavButton";
import { useProjectsFirestore } from "../../projects/hooks/useProjectsFirestore";

const ProjectPreviewSection: React.FC = () => {
  const navigate = useNavigate();
  const desktopListRef = useRef<HTMLDivElement | null>(null);
  const { projects: firestoreProjects, isLoading } = useProjectsFirestore();
  const bhkNumeric = strings.projects.bhkOptions.filter((b) => !(b as any).isText).slice(0, 2);
  const bhkText = strings.projects.bhkOptions.find((b) => (b as any).isText);

  const featured = firestoreProjects.find((p) => p.slug === "vrinda-apartments");
  const listProjects = firestoreProjects.filter((p) => p.slug !== "vrinda-apartments");

  const scrollDesktopProjects = (direction: "previous" | "next") => {
    const container = desktopListRef.current;

    if (!container) return;

    const offset = container.clientWidth;

    container.scrollBy({
      left: direction === "previous" ? -offset : offset,
      behavior: "smooth",
    });
  };

  if (isLoading || !featured) return null;

  return (
    // Developer note: Desktop node 705:379, Mobile node 749:2389
    <section className="w-full bg-white pt-0 pb-16">
      {/* Featured project hero */}
      <div className="w-full relative">
        <div
          className="relative w-full h-[420px] md:h-[800px] overflow-hidden"
          style={{ backgroundColor: colors.surfaceMuted }}
        >
          <img
            src={featured.heroImageSrc}
            alt="Featured project"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        {/* Bottom info strip (Desktop: overlays image) */}
        <div className="hidden md:block absolute inset-x-10 bottom-10">
          <div
            className="w-full h-[100px] rounded-[1.54px] overflow-hidden border flex items-center justify-between px-[24px]"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border.projectSoft,
            }}
          >
            {/* Left title */}
            <div className="flex flex-col items-start">
              <p
                style={{ fontFamily: fonts.body, color: colors.accent }}
                className="text-[18px] font-medium leading-[1.6]"
              >
                {featured.heroTitle}
              </p>
              <p
                style={{ fontFamily: fonts.heading, color: colors.secondary }}
                className="text-[28px] font-normal leading-[1.3] tracking-[-0.54px]"
              >
                {featured.listingSubtitle ?? ''}
              </p>
            </div>

            {/* Desktop meta row */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-start gap-2">
                <p
                  style={{
                    fontFamily: fonts.body,
                    color: colors.realityCheck.emphasisBrown,
                  }}
                  className="text-[16px] font-medium leading-none opacity-70"
                >
                  {strings.projects.unitsAvailable}
                </p>
                <div className="flex items-end gap-4 mt-1">
                  {bhkNumeric.map((b) => (
                    <div key={b.val} className="flex items-end gap-1">
                      <span
                        style={{
                          fontFamily: fonts.body,
                          color: colors.secondary,
                        }}
                        className="text-[36px] leading-none font-normal"
                      >
                        {b.val}
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.body,
                          color: colors.secondary,
                        }}
                        className="text-[14px] leading-none uppercase opacity-70 relative -top-0.5"
                      >
                        {b.label}
                      </span>
                    </div>
                  ))}
                  {bhkText ? (
                    <div className="flex flex-col items-start leading-none opacity-70 relative -top-1">
                      <span
                        style={{
                          fontFamily: fonts.body,
                          color: colors.secondary,
                        }}
                        className="text-[14px] leading-none"
                      >
                        {bhkText.val}
                        <br />
                        {bhkText.label}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>

              <div
                className="w-px h-[60px]"
                style={{ backgroundColor: colors.border.projectSoft }}
              />

              <div className="flex flex-col items-start">
                <p
                  style={{
                    fontFamily: fonts.body,
                    color: colors.realityCheck.emphasisBrown,
                  }}
                  className="text-[16px] leading-none opacity-70"
                >
                  {strings.projects.startingFrom}
                </p>
                <div className="flex items-end gap-1 mt-3">
                  <span
                    style={{ fontFamily: fonts.body, color: colors.secondary }}
                    className="text-[36px] leading-none"
                  >
                  {featured.priceNum ?? ''}
                  </span>
                  <span
                    style={{ fontFamily: fonts.body, color: colors.secondary }}
                    className="text-[14px] leading-none uppercase opacity-70 pb-1 relative -top-0.5"
                  >
                    {featured.priceText ?? ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop CTA circle */}
            <button
              aria-label="Open project"
            onClick={() => navigate("/projects/vrinda-apartments")}
              className="shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.accent }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke={colors.text.onAccent}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom info strip (Mobile: below image, full width) */}
      <div className="md:hidden w-full">
        <div
          className="w-full rounded-[1.54px] overflow-hidden border cursor-pointer"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.border.projectSoft,
          }}
          onClick={() => navigate("/projects/vrinda-apartments")}
        >
          <div className="px-[19px] pt-[19px] pb-[16px]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col items-start gap-[14px]">
                <p
                  style={{ fontFamily: fonts.body, color: colors.accent }}
                  className="text-[12px] font-medium leading-[1.6]"
                >
                  {strings.projects.project1}
                </p>
                <p
                  style={{ fontFamily: fonts.heading, color: colors.secondary }}
                  className="text-[14px] font-normal leading-[1.3] tracking-[-0.54px]"
                >
                  {strings.projects.project1Subtitle}
                </p>
              </div>

              <button
                type="button"
                aria-label="Open project"
                onClick={() => navigate("/projects/vrinda-apartments")}
                className="mt-[2px] shrink-0 size-[14px] flex items-center justify-center"
              >
                <span
                  style={{ color: colors.accent }}
                  className="text-[18px] leading-none"
                >
                  ›
                </span>
              </button>
            </div>

            <div className="mt-[18px] flex items-center gap-[16px]">
              <div className="flex flex-col items-start gap-[12px] w-[167px]">
                <p
                  style={{
                    fontFamily: fonts.body,
                    color: colors.destinationTag,
                  }}
                  className="text-[13px] font-medium leading-[1.6]"
                >
                  {strings.projects.unitsAvailable}
                </p>
                <div
                  className="flex items-end gap-[14px]"
                  style={{
                    fontFamily: fonts.body,
                    color: colors.text.tertiary,
                  }}
                >
                  {bhkNumeric.map((b) => (
                    <div key={b.val} className="flex items-end gap-[4.62px]">
                      <span className="text-[28px] leading-none font-normal">
                        {b.val}
                      </span>
                      <span className="text-[12px] leading-none uppercase relative -top-1">
                        {b.label}
                      </span>
                    </div>
                  ))}
                  {bhkText ? (
                    <div className="flex items-end">
                      <div
                        className="text-[12px] leading-[1.08] relative -top-0"
                        style={{ fontFamily: fonts.body }}
                      >
                        <div>{bhkText.val}</div>
                        <div>{bhkText.label}</div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div
                className="w-px h-[46px]"
                style={{ backgroundColor: colors.border.projectSoft }}
              />

              <div className="flex flex-col items-start gap-[12px]">
                <p
                  style={{
                    fontFamily: fonts.body,
                    color: colors.destinationTag,
                  }}
                  className="text-[13px] font-medium leading-[1.6]"
                >
                  {strings.projects.startingFrom}
                </p>
                <div
                  className="flex items-end gap-[4.62px]"
                  style={{
                    fontFamily: fonts.body,
                    color: colors.text.tertiary,
                  }}
                >
                  <span className="text-[28px] leading-none font-normal">
                    {strings.projects.priceNum}
                  </span>
                  <span className="text-[12px] leading-none uppercase relative -top-1">
                    {strings.projects.priceText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:max-w-none md:mx-0 md:pl-[40px] md:pr-0 pt-10 md:pt-14">
        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-between gap-30">
          <div className="w-[320px] flex flex-col justify-between min-h-[400px]">
            <p
              style={{ fontFamily: fonts.body, color: colors.text.primary }}
              className="text-[64px] font-normal leading-none tracking-[-1.92px]"
            >
              {strings.projects.latestTitle}
            </p>
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="mt-10 flex items-center gap-3 px-6 py-4 w-fit rounded-[1px] transition-all hover:opacity-90"
              style={{
                backgroundColor: colors.background,
                fontFamily: fonts.body,
                color: colors.text.primary,
              }}
            >
              <span className="text-[14px] font-medium">
                {strings.common.exploreProjects}
              </span>
              <span className="text-[16px] leading-none">→</span>
            </button>
          </div>
          <div className="flex-1 max-w-none ml-auto pr-0">
            <div
              ref={desktopListRef}
              className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
            >
              {listProjects.map((project) => (
                <div
                  key={project.slug}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="cursor-pointer flex-none w-[calc(48%-8px)]"
                >
                  <div
                    className="h-[240px] overflow-hidden border"
                    style={{
                      backgroundColor: colors.surfaceMuted,
                      borderColor: colors.border.projectSoft,
                    }}
                  >
                    <img
                      src={project.heroImageSrc}
                      alt={project.heroTitle}
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="h-[72px] border flex items-center justify-between px-[13px]"
                    style={{
                      backgroundColor: colors.background,
                      borderColor: colors.border.projectSoft,
                    }}
                  >
                    <div className="flex flex-col gap-[6px]">
                      <p
                        style={{ fontFamily: fonts.body, color: colors.accent }}
                        className="text-[12px] font-medium leading-[1.6]"
                      >
                        {project.heroTitle}
                      </p>
                      <p
                        style={{
                          fontFamily: fonts.heading,
                          color: colors.secondary,
                        }}
                        className="text-[18px] font-normal leading-[1.3] tracking-[-0.54px]"
                      >
                        {project.listingSubtitle ?? ''}
                      </p>
                    </div>
                    <div
                      className="size-[36px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke={colors.text.onAccent}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop navigation (Figma-like) */}
            <div className="flex justify-end gap-3 mt-10 pr-[40px]">
              <PagerNavButton
                direction="prev"
                size="lg"
                aria-label="Previous projects"
                onClick={() => scrollDesktopProjects("previous")}
              />
              <PagerNavButton
                direction="next"
                size="lg"
                aria-label="Next projects"
                onClick={() => scrollDesktopProjects("next")}
              />
            </div>
          </div>
        </div>

        {/* Mobile layout (Figma 749:2389) */}
        <div className="md:hidden flex flex-col gap-[24px]">
          <p
            style={{ fontFamily: fonts.body, color: colors.text.primary }}
            className="text-[24px] font-normal leading-[1.19]"
          >
            Latest Projects
          </p>
          <div className="flex flex-col gap-[20px]">
            {listProjects.map((project) => (
              <div
                key={project.slug}
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="w-full cursor-pointer"
              >
                <div
                  className="h-[240px] overflow-hidden border"
                  style={{
                    backgroundColor: colors.surfaceMuted,
                    borderColor: colors.border.projectSoft,
                  }}
                >
                  <img
                    src={project.heroImageSrc}
                    alt={project.heroTitle}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <div
                  className="border flex flex-col gap-[6px] px-[13px] py-[10px]"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border.projectSoft,
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <p
                      style={{ fontFamily: fonts.body, color: colors.accent }}
                      className="text-[12px] font-medium leading-[1.6]"
                    >
                      {project.heroTitle}
                    </p>
                    <span
                      style={{ color: colors.accent, fontSize: '22px', lineHeight: 1 }}
                    >
                      ›
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: fonts.heading,
                      color: colors.secondary,
                    }}
                    className="text-[16px] font-normal leading-[1.3] tracking-[-0.45px]"
                  >
                    {project.listingSubtitle ?? ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreviewSection;
