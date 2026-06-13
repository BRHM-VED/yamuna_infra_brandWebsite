import { useMemo, useState } from 'react';
import { saveBrochureDownloadLead } from '../services/formStoreService';

type State = {
  name: string;
  phoneNumber: string;
  purpose: string;
};

export function useBrochureDownloadForm(projectName: string) {
  const [form, setForm] = useState<State>({ name: '', phoneNumber: '', purpose: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof State, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const submit = async (): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);
    try {
      if (!form.name.trim() || form.phoneNumber.trim().length < 10) {
        setError('Please enter your name and a valid phone number.');
        setIsSubmitting(false);
        return false;
      }

      await saveBrochureDownloadLead({
        name: form.name.trim(),
        phoneNumber: form.phoneNumber.trim(),
        purpose: form.purpose || undefined,
        projectName,
      });
      setIsSubmitting(false);
      return true;
    } catch {
      setError('Failed to submit. Please try again.');
      setIsSubmitting(false);
      return false;
    }
  };

  return useMemo(
    () => ({
      form,
      updateField,
      submit,
      isSubmitting,
      error,
      reset: () => setForm({ name: '', phoneNumber: '', purpose: '' }),
    }),
    [form, isSubmitting, error],
  );
}

