export type InquiryPurpose = 'Site visit' | 'Purchase' | 'Due diligence' | 'About Vrindavan' | '';

export interface InquiryFormState {
  name: string;
  phoneNumber: string;
  message: string;
  purpose: InquiryPurpose;
}
