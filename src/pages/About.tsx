import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">{t('about.title')}</h1>
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('about.mission.p1')}
          </p>
          <p className="text-gray-700 mb-4">
            {t('about.mission.p2')}
          </p>
          <p className="text-gray-700 mb-4">
            {t('about.mission.p3')}
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('about.values.title')}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>{t('about.values.transparency')}</li>
            <li>{t('about.values.commitment')}</li>
            <li>{t('about.values.innovation')}</li>
            <li>{t('about.values.respect')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('about.why.title')}</h2>
          <p className="text-gray-700">
            {t('about.why.desc')}
          </p>
        </section>
      </div>
    </main>
  );
};

export default About; 