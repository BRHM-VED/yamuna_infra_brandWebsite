import React from 'react';
import LegalDocumentBody from './LegalDocumentBody';
import LegalDocumentHeader from './LegalDocumentHeader';

export type LegalDocumentPageProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({ title, lastUpdated, children }) => (
  <section className="px-4 md:px-[60px]">
    <div className="max-w-[980px] mx-auto">
      <LegalDocumentHeader title={title} lastUpdated={lastUpdated} />
      <LegalDocumentBody>{children}</LegalDocumentBody>
    </div>
  </section>
);

export default LegalDocumentPage;
