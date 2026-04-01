import React, { useCallback, useMemo, useState } from 'react';
import InquiryDialog from './components/InquiryDialog';
import { InquiryContext } from './inquiry-context';

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openInquiry = useCallback(() => setOpen(true), []);
  const closeInquiry = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openInquiry, closeInquiry }), [openInquiry, closeInquiry]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryDialog open={open} onClose={closeInquiry} />
    </InquiryContext.Provider>
  );
}
