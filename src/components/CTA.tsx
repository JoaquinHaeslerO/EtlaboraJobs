import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#registro"
              className="bg-white text-primary font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              {t('cta.register')}
            </a>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-accent text-white font-bold py-3 px-8 rounded-xl hover:bg-accent-light transition-colors duration-200"
            >
              {t('cta.contact')}
            </button>
          </div>
        </div>
      </div>
      
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA; 