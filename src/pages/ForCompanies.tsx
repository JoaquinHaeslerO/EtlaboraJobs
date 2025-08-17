import React from 'react';
import { useTranslation } from 'react-i18next';
import CompanyContactForm from '../components/CompanyContactForm';

const ForCompanies = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" role="document">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {t('companies.title')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {t('companies.subtitle')}
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('companies.benefits.talent.title')}</h3>
            <p className="text-gray-600">
              {t('companies.benefits.talent.desc')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('companies.benefits.process.title')}</h3>
            <p className="text-gray-600">
              {t('companies.benefits.process.desc')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('companies.benefits.speed.title')}</h3>
            <p className="text-gray-600">
              {t('companies.benefits.speed.desc')}
            </p>
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center mb-8">
                {t('companies.contact.title')}
              </h2>
              <CompanyContactForm />
            </div>
          </div>
        </div>

        {/* Imagen contextual armonizada (debajo del formulario) */}
        <figure className="rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 w-full h-40 md:h-56 max-w-3xl mx-auto mt-16">
          <img
            src="/images/shipyard.jpg"
            alt="Astillero al atardecer, símbolo de industria y cooperación"
            className="w-full h-full object-cover object-top saturate-105 contrast-105"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  );
};

export default ForCompanies; 