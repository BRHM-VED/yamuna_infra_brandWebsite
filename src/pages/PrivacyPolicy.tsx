import React from 'react';
import LegalDocumentPage from '../features/legal/components/LegalDocumentPage';
import LegalPageLayout from '../features/legal/components/LegalPageLayout';
import PrivacyPolicyContent from '../features/legal/privacyPolicy/PrivacyPolicyContent';

const PrivacyPolicy: React.FC = () => (
  <LegalPageLayout>
    <LegalDocumentPage title="Privacy Policy" lastUpdated="November 2025">
      <PrivacyPolicyContent />
    </LegalDocumentPage>
  </LegalPageLayout>
);

export default PrivacyPolicy;
