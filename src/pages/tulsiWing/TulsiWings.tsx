import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from '../../layouts/Navbar';
import FooterSection from '../../features/home/components/FooterSection';
import TulsiHeroSection from '../../features/tulsiWings/components/TulsiHeroSection';
const TulsiOverviewSection = lazy(() => import('../../features/tulsiWings/components/TulsiOverviewSection'));
const TulsiLocationSection = lazy(() => import('../../features/tulsiWings/components/TulsiLocationSection'));
const TulsiFeaturesSection = lazy(() => import('../../features/tulsiWings/components/TulsiFeaturesSection'));
const TulsiConfigurationsSection = lazy(() => import('../../features/tulsiWings/components/TulsiConfigurationsSection'));
const TulsiPaymentPlans = lazy(() => import('../../features/tulsiWings/components/TulsiPaymentPlans'));
const TulsiTimeline = lazy(() => import('../../features/tulsiWings/components/TulsiTimeline'));
const TulsiFaqs = lazy(() => import('../../features/tulsiWings/components/TulsiFaqs'));
const TulsiFooterFormSection = lazy(() => import('../../features/tulsiWings/components/TulsiFooterFormSection'));
import { colors } from '../../utils';

// Inquiry components and hooks
import InquiryDialog from '../../features/inquiry/components/InquiryDialog';
import { DownloadDetailsDialog } from '../../features/inquiry/components/DownloadDetailsDialog';
import { DownloadThankYouDialog } from '../../features/inquiry/components/DownloadThankYouDialog';
import { useBrochureDownloadForm } from '../../features/inquiry/hooks/useBrochureDownloadForm';

export const TulsiWings: React.FC = () => {
  // Page entry animations & scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Popup Dialog States
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);

  // Tracks which button triggered the inquiry dialog
  const [inquiryConfig, setInquiryConfig] = useState<{
    title: string;
    subtitle: string;
    buttonText: string;
  }>({
    title: 'Have questions?',
    subtitle: 'Get in touch!',
    buttonText: 'Submit',
  });

  // Brochure Download Form Hook
  const brochureForm = useBrochureDownloadForm('TULSI WINGS APARTMENTS');

  // Trigger site visit popup
  const handleBookSiteVisit = () => {
    setInquiryConfig({ title: 'Have questions?', subtitle: 'Get in touch!', buttonText: 'Submit' });
    setInquiryOpen(true);
  };

  // Trigger check eligibility popup
  const handleCheckEligibility = () => {
    setInquiryConfig({ title: 'Check Loan', subtitle: 'Eligibility!', buttonText: 'Check Eligibility' });
    setInquiryOpen(true);
  };

  // Trigger general contact/expert popup
  const handleContactExpert = () => {
    setInquiryConfig({ title: 'Have questions?', subtitle: 'Get in touch!', buttonText: 'Submit' });
    setInquiryOpen(true);
  };

  // Tracks which button triggered the download dialog
  const [downloadConfig, setDownloadConfig] = useState<{
    title: string;
    buttonText: string;
    defaultPurpose: 'Site visit' | 'Purchase' | 'Due diligence' | 'About Vrindavan' | 'Payment plans';
    shouldDownload?: boolean;
  }>({
    title: 'Brochure just a step away',
    buttonText: 'Get the Brochure',
    defaultPurpose: 'Site visit',
    shouldDownload: true,
  });

  // Trigger brochure popup
  const handleGetBrochure = () => {
    brochureForm.reset();
    setThankYouOpen(false);
    setDownloadConfig({
      title: 'Brochure just\na step away',
      buttonText: 'Get the Brochure',
      defaultPurpose: 'Site visit',
      shouldDownload: true,
    });
    setDownloadOpen(true);
  };

  // Trigger "Get a call back" popup (configurations section)
  const handleGetCallback = () => {
    brochureForm.reset();
    setThankYouOpen(false);
    setDownloadConfig({
      title: 'Get a call back',
      buttonText: 'Submit',
      defaultPurpose: 'Purchase',
      shouldDownload: false,
    });
    setDownloadOpen(true);
  };

  // Trigger "Get a call back" popup (payment plans section — Calculate return)
  const handleGetPaymentCallback = () => {
    brochureForm.reset();
    setThankYouOpen(false);
    setDownloadConfig({
      title: 'Get a call back',
      buttonText: 'Submit',
      defaultPurpose: 'Payment plans',
      shouldDownload: false,
    });
    setDownloadOpen(true);
  };

  // Trigger "Download Payment Plan" popup (payment plans section — Download button)
  const handleGetPaymentDownload = () => {
    brochureForm.reset();
    setThankYouOpen(false);
    setDownloadConfig({
      title: 'Get a call back',
      buttonText: 'Submit',
      defaultPurpose: 'Payment plans',
      shouldDownload: true,
    });
    setDownloadOpen(true);
  };

  // Handle brochure submission from popup
  const handleBrochureSubmit = async () => {
    const ok = await brochureForm.submit();
    if (ok) {
      setDownloadOpen(false);
      setThankYouOpen(true);
      
      if (downloadConfig.shouldDownload) {
        // Download brochure file
        const anchor = document.createElement("a");
        anchor.href = "/assets/brochure.pdf"; // Default fallback brochure path
        anchor.setAttribute("download", "tulsi-wings-brochure.pdf");
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.tulsiWings.bgCream }}>
      {/* Header Overlay */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-black/5 md:border-b-0 transition-colors">
        <Navbar mobileVariant="light" showNewProjectBanner={false} />
      </header>

      {/* Main Sections */}
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <TulsiHeroSection onBookSiteVisit={handleBookSiteVisit} />

        <Suspense fallback={null}>
          {/* Overview Banner & Why Vrindavan */}
          <TulsiOverviewSection 
            onGetBrochure={handleGetBrochure}
            onContactExpert={handleContactExpert}
          />

          {/* Location Advantage Map & Hubs */}
          <TulsiLocationSection />

          {/* Stands Apart Carousel & World Class Amenities */}
          <TulsiFeaturesSection />

          {/* Apartment Configurations (Floor plans) */}
          <TulsiConfigurationsSection onGetCallback={handleGetCallback} />

          {/* Payment Schedules */}
          <TulsiPaymentPlans 
            onDownloadDetails={handleGetPaymentDownload} 
            onCalculateReturn={handleGetPaymentCallback}
            onCheckEligibility={handleCheckEligibility}
            onContactExpert={handleContactExpert}
          />

          {/* Future Growth Timeline */}
          <TulsiTimeline />

          {/* FAQ Accordion */}
          <TulsiFaqs />

          <TulsiFooterFormSection />
        </Suspense>

        {/* Global Footer Area */}
        <FooterSection />
      </main>

      {/* Popups & Dialogs */}
      <InquiryDialog
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        title={inquiryConfig.title}
        subtitle={inquiryConfig.subtitle}
        buttonText={inquiryConfig.buttonText}
        defaultPurpose="Site visit"
      />

      <DownloadDetailsDialog
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        name={brochureForm.form.name}
        phoneNumber={brochureForm.form.phoneNumber}
        purpose={brochureForm.form.purpose}
        onChangeName={(v) => brochureForm.updateField('name', v)}
        onChangePhoneNumber={(v) => brochureForm.updateField('phoneNumber', v)}
        onChangePurpose={(v) => brochureForm.updateField('purpose', v)}
        onSubmit={handleBrochureSubmit}
        isSubmitting={brochureForm.isSubmitting}
        error={brochureForm.error}
        title={downloadConfig.title}
        buttonText={downloadConfig.buttonText}
        defaultPurpose={downloadConfig.defaultPurpose}
      />

      <DownloadThankYouDialog
        open={thankYouOpen}
        onClose={() => setThankYouOpen(false)}
      />
    </div>
  );
};

export default TulsiWings;
