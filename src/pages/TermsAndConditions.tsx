import React from 'react';
import LegalDocumentPage from '../features/legal/components/LegalDocumentPage';
import LegalPageLayout from '../features/legal/components/LegalPageLayout';
import TermsAndConditionsContent from '../features/legal/termAndCondition/TermsAndConditionsContent';

const TermsAndConditions: React.FC = () => (
  <LegalPageLayout>
    <LegalDocumentPage title="Terms & Conditions" lastUpdated="January 2026">
      <TermsAndConditionsContent />
    </LegalDocumentPage>
  </LegalPageLayout>
);

export default TermsAndConditions;
