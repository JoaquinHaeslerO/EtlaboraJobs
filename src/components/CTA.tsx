import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import { IMAGES } from '../assets/images';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.BACKGROUNDS.CITY})`,
          filter: 'contrast(1) brightness(0.95)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
            {t('cta.title')}
          </h2>
          <p className="text-sm md:text-base mb-5">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work-with-us#candidate-form"
              className="bg-white text-primary font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {t('cta.register')}
            </a>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-accent text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-accent-light transition-colors duration-200"
            >
              {t('cta.contact')}
            </button>
          </div>
        </div>
      </div>
      
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-md" role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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