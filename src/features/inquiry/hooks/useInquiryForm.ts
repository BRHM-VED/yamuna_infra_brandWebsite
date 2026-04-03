import { useState } from 'react';
import type { InquiryFormState, InquiryPurpose } from '../types/inquiry';
import { saveInquiryToFirestore } from '../services/inquiryFirestore';

export const useInquiryForm = () => {
    const [form, setForm] = useState<InquiryFormState>({
        name: '',
        phoneNumber: '',
        message: '',
        purpose: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateField = (field: keyof InquiryFormState, value: string | InquiryPurpose) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const submitForm = async (): Promise<boolean> => {
        setIsSubmitting(true);
        setError(null);
        try {
            await saveInquiryToFirestore(form);
            setForm({
                name: '',
                phoneNumber: '',
                message: '',
                purpose: ''
            });
            setIsSubmitting(false);
            return true;
        } catch {
            setError('Failed to submit form. Please try again.');
            setIsSubmitting(false);
            return false;
        }
    };

    return {
        form,
        updateField,
        submitForm,
        isSubmitting,
        error
    };
};
