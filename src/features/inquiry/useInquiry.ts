import { useContext } from 'react';
import { InquiryContext } from './inquiry-context';

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) {
    throw new Error('useInquiry must be used within InquiryProvider');
  }
  return ctx;
}
