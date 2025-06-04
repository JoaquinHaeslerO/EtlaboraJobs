import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  companyName: string;
  email: string;
  phone: string;
  positions: string;
  message: string;
}

const CompanyContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    phone: '',
    positions: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          {t('form.company.name')} *
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          required
          placeholder={t('form.company.name.placeholder')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('form.email.corporate')} *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder={t('form.email.placeholder')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          {t('form.phone')}
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder={t('form.phone.placeholder')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="positions" className="block text-sm font-medium text-gray-700">
          {t('form.positions')} *
        </label>
        <textarea
          name="positions"
          id="positions"
          required
          rows={3}
          placeholder={t('form.positions.placeholder')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.positions}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          {t('form.message')}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder={t('form.message.placeholder')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {t('form.submit')}
        </button>
      </div>
    </form>
  );
};

export default CompanyContactForm; 