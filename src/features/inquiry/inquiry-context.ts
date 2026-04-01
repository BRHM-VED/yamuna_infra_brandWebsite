import { createContext } from 'react';

export type InquiryContextValue = {
  openInquiry: () => void;
  closeInquiry: () => void;
};

export const InquiryContext = createContext<InquiryContextValue | null>(null);
