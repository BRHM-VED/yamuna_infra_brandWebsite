import React, { useEffect } from "react";
import Navbar from "../../../layouts/Navbar";
import FooterSection from "../../home/components/FooterSection";
import ProjectListItem, { type ProjectListItemData } from "./ProjectListItem";
import { getProjectDetail, getProjectPageSlugs } from "../data/projectDetails";

const downloadBrochure = (brochureLink: string) => {
  const anchor = document.createElement("a");
  anchor.href = brochureLink;
  anchor.setAttribute(
    "download",
    brochureLink.split("/").pop() ?? "brochure.pdf",
  );
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
};

const ORDERED_SLUGS: string[] = [
  "vrinda-apartments",
  "tulsi-wings-apartments",
  "shri-braj-rani-apartments",
  "kanha-tulsi-heights",
];

const AllProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availableSlugs = getProjectPageSlugs();
  const slugsInOrder = ORDERED_SLUGS.filter((slug) =>
    availableSlugs.includes(slug),
  );

  const projects: ProjectListItemData[] = slugsInOrder.map((slug) => {
    const detail = getProjectDetail(slug);
    const priceNum = detail.priceNum ?? "80";
    const priceText = detail.priceText ?? "LAKHS";
    const brochureLink = detail.brochureLink;

    return {
      id: detail.slug,
      title: detail.heroTitle,
      subtitle: detail.listingSubtitle ?? detail.belongingHeadingBefore + detail.belongingHeadingEmphasis,
      imageSrc: detail.heroImageSrc,
      priceNum,
      priceText,
      onBrochureClick: brochureLink
        ? () => downloadBrochure(brochureLink)
        : undefined,
    };
  });

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Navbar />
      </header>

      <main className="pt-[52px] md:pt-[93px] pb-16 md:pb-24">
        <div className="w-full">
          {projects.map((p) => (
            <ProjectListItem key={p.id} data={p} />
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default AllProjectsPage;
