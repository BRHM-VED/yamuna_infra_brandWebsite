import type { InquiryFormState } from '../types/inquiry';

export type BrochureDownloadRecord = {
  name: string;
  phoneNumber: string;
  projectName: string;
  purpose?: string;
};

const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

async function postLead(endpoint: string, body: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to submit lead to ${endpoint}`);
  }
  return res;
}

/**
 * Saves brochure download/callback lead data via the backend API.
 */
export async function saveBrochureDownloadLead(input: BrochureDownloadRecord) {
  await postLead('/syi-download-lead', {
    name: input.name,
    phoneNumber: input.phoneNumber,
    purpose: input.purpose || '',
    projectName: input.projectName,
  });
}

/**
 * Saves general inquiry lead data via the backend API.
 */
export async function saveInquiryLead(form: InquiryFormState) {
  await postLead('/syi-leads', {
    name: form.name,
    phoneNumber: form.phoneNumber,
    message: form.message || '',
    purpose: form.purpose || '',
  });
}
