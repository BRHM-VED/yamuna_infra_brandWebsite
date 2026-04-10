import React from 'react';
import LegalDocumentPage from '../features/legal/components/LegalDocumentPage';
import LegalPageLayout from '../features/legal/components/LegalPageLayout';
import DisclaimerContent from '../features/legal/disclaimer/DisclaimerContent';

const Disclaimer: React.FC = () => (
  <LegalPageLayout>
    <LegalDocumentPage title="Disclaimer" lastUpdated="January 2026">
      <DisclaimerContent />
    </LegalDocumentPage>
  </LegalPageLayout>
);

export default Disclaimer;
