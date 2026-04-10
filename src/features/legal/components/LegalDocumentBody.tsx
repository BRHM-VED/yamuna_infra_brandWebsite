import React from 'react';

type LegalDocumentBodyProps = {
  children: React.ReactNode;
};

const LegalDocumentBody: React.FC<LegalDocumentBodyProps> = ({ children }) => (
  <div className="rounded-none shadow-none md:rounded-[2px] md:shadow-[0_10px_60px_rgba(0,0,0,0.05)]">
    <div className="px-0 py-6 md:px-8 md:py-10">{children}</div>
  </div>
);

export default LegalDocumentBody;
