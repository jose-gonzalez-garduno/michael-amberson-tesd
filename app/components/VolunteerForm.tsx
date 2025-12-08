'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import type { VolunteerPayload } from '@/types';
import { trackVolunteerSignup } from '@/utils/analytics';

interface VolunteerFormProps {
  locale: string;
}

export default function VolunteerForm({ locale }: VolunteerFormProps) {
  const t = useTranslations('volunteer');
  const [formData, setFormData] = useState<VolunteerPayload>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredLanguage: locale as 'en' | 'es',
    address: '',
    comments: '',
    consent: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const successMessageRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) return t('errors.firstName');
    if (!formData.lastName.trim()) return t('errors.lastName');
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      return t('errors.email');
    }
    if (!formData.phone.trim()) return t('errors.phone');
    if (!formData.consent) return t('errors.consent');
    return null;
  };
  
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Submit to API
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || t('errors.submission'));
      }
      
      // Track event in dataLayer
      trackVolunteerSignup(
        formData.preferredLanguage,
        'website',
        'volunteer_form'
      );
      
      // Success - show message and reset form
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredLanguage: locale as 'en' | 'es',
        address: '',
        comments: '',
        consent: false,
      });
      
      // Focus on success message for accessibility
      setTimeout(() => {
        successMessageRef.current?.focus();
      }, 100);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : t('errors.submission')
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div
          ref={successMessageRef}
          tabIndex={-1}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md"
          role="alert"
          aria-live="polite"
        >
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {t('success.title')}
          </h3>
          <p className="text-green-700">{t('success.message')}</p>
        </div>
      )}
      
      {/* Error Message */}
      {submitStatus === 'error' && errorMessage && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md"
          role="alert"
          aria-live="assertive"
        >
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            {t('errors.title')}
          </h3>
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.firstName')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
            aria-required="true"
          />
        </div>
        
        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.lastName')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
            aria-required="true"
          />
        </div>
        
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
            aria-required="true"
          />
        </div>
        
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.phone')} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
            aria-required="true"
          />
        </div>
        
        {/* Preferred Language */}
        <div>
          <label
            htmlFor="preferredLanguage"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.preferredLanguage')} <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
            aria-required="true"
          >
            <option value="en">{t('fields.languageOptions.en')}</option>
            <option value="es">{t('fields.languageOptions.es')}</option>
          </select>
        </div>
        
        {/* Address (Optional) */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.address')} {t('fields.optional')}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
          />
        </div>
        
        {/* Comments (Optional) */}
        <div>
          <label
            htmlFor="comments"
            className="block text-sm font-medium text-campaign-text-dark mb-2"
          >
            {t('fields.comments')} {t('fields.optional')}
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-campaign-primary focus:border-campaign-primary"
          />
        </div>
        
        {/* Consent Checkbox */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-campaign-primary text-campaign-primary"
              aria-required="true"
            />
          </div>
          <label
            htmlFor="consent"
            className="ml-3 text-sm text-campaign-text-dark"
          >
            {t('fields.consent')} <span className="text-red-500">*</span>
          </label>
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-campaign-accent hover:bg-campaign-secondary text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t('submitting') : t('submit')}
          </button>
        </div>
      </form>
    </div>
  );
}
