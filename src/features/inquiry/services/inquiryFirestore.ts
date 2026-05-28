import type { InquiryFormState } from '../types/inquiry';

export async function saveInquiryToFirestore(form: InquiryFormState) {
  const endpoint = 'https://flutter-backend-ram.onrender.com/api/syi-leads';

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

