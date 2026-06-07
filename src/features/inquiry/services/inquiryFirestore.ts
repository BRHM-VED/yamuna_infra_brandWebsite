import type { InquiryFormState } from '../types/inquiry';

export async function saveInquiryToFirestore(form: InquiryFormState) {
  const endpoint = `${import.meta.env.VITE_APP_API_BASE_URL}/syi-leads`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name,
      phoneNumber: form.phoneNumber,
      message: form.message,
      purpose: form.purpose,
    }),
  });

  if (res.status !== 201) {
    throw new Error('Failed to submit inquiry');
  }
}

