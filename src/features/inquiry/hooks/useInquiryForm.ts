import { useState } from 'react';
import type { InquiryFormState, InquiryPurpose } from '../types/inquiry';

export const useInquiryForm = () => {
    const [form, setForm] = useState<InquiryFormState>({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
        purpose: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateField = (field: keyof InquiryFormState, value: string | InquiryPurpose) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const submitForm = async () => {
        setIsSubmitting(true);
        setError(null);
        try {
            // Mock API call
            console.log('Form data being submitted:', form);
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Inquiry form submitted successfully!');
            // Reset form if needed
        } catch (e) {
            setError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
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
