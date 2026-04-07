import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../../layouts/Navbar";
import FooterSection from "../../home/components/FooterSection";
import ProjectListItem, { type ProjectListItemData } from "./ProjectListItem";
import { DownloadDetailsDialog } from "../../inquiry/components/DownloadDetailsDialog";
import { useBrochureDownloadForm } from "../../inquiry/hooks/useBrochureDownloadForm";
import { InquiryThankYouPanel } from "../../inquiry/components/InquiryThankYouPanel";
import { useProjectsFirestore } from "../hooks/useProjectsFirestore";

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

  const [downloadOpen, setDownloadOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [selected, setSelected] = useState<{ projectName: string; brochureLink: string } | null>(null);

  const brochureForm = useBrochureDownloadForm(selected?.projectName ?? '');

  const { projects: firestoreProjects, isLoading } = useProjectsFirestore();

  const projects: ProjectListItemData[] = useMemo(() => {
    const bySlug = Object.fromEntries(firestoreProjects.map((p) => [p.slug, p]));
    const ordered = ORDERED_SLUGS.map((s) => bySlug[s]).filter(Boolean);
    return ordered.map((detail) => {
      const priceNum = detail.priceNum ?? "48.5";
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
          ? () => {
              setSelected({ projectName: detail.heroTitle, brochureLink });
              brochureForm.reset();
              setThankYouOpen(false);
              setDownloadOpen(true);
            }
          : undefined,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firestoreProjects]);

  if (isLoading) return null;

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar mobileVariant="light" showNewProjectBanner mobileCollapsibleBanner />
      </header>

      <main className="pt-[100px] md:pt-[93px] pb-16 md:pb-24">
        <div className="w-full">
          {projects.map((p) => (
            <ProjectListItem key={p.id} data={p} />
          ))}
        </div>
      </main>

      <FooterSection />

      <DownloadDetailsDialog
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        name={brochureForm.form.name}
        phoneNumber={brochureForm.form.phoneNumber}
        onChangeName={(v) => brochureForm.updateField('name', v)}
        onChangePhoneNumber={(v) => brochureForm.updateField('phoneNumber', v)}
        onSubmit={async () => {
          if (!selected) return;
          const ok = await brochureForm.submit();
          if (!ok) return;
          setDownloadOpen(false);
          setThankYouOpen(true);
          downloadBrochure(selected.brochureLink);
        }}
        isSubmitting={brochureForm.isSubmitting}
        error={brochureForm.error}
      />

      {thankYouOpen ? (
        <div className="fixed inset-0 z-100">
          <button
            type="button"
            aria-label="Close download thank you dialog"
            onClick={() => {
              setThankYouOpen(false);
              setSelected(null);
            }}
            className="absolute inset-0 bg-black/60"
          />

          {/* Desktop */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center px-6">
            <InquiryThankYouPanel
              layout="desktop"
              onDone={() => {
                setThankYouOpen(false);
                setSelected(null);
              }}
            />
          </div>

          {/* Mobile */}
          <div className="absolute inset-0 flex md:hidden items-end">
            <InquiryThankYouPanel
              layout="mobile"
              onDone={() => {
                setThankYouOpen(false);
                setSelected(null);
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AllProjectsPage;
