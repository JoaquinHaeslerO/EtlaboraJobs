import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">{t('about.title')}</h1>
        </header>

        <section className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h2>
          <p className="text-gray-700 mb-4">{t('about.mission.p1')}</p>
          <p className="text-gray-700 mb-4">{t('about.mission.p2')}</p>
          <p className="text-gray-700 mb-4">{t('about.mission.p3')}</p>
        </section>

        <figure className="rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 w-full h-40 md:h-48 max-w-3xl mx-auto">
          <img src="/images/warehouse.jpg" alt="Pasillo de almacén con racks altos" className="w-full h-full object-cover saturate-105 contrast-105" loading="lazy" />
        </figure>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('about.values.title')}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>{t('about.values.transparency')}</li>
            <li>{t('about.values.commitment')}</li>
            <li>{t('about.values.innovation')}</li>
            <li>{t('about.values.respect')}</li>
          </ul>
        </section>

        {null}

        <figure className="max-w-2xl mx-auto text-center">
          <blockquote className="relative text-lg md:text-xl italic text-gray-800 leading-relaxed px-6 py-5">
            <span className="absolute -left-0 top-0 text-5xl text-blue-900/20 select-none">“</span>
            {t('about.quote.text')}
            <span className="absolute -right-0 bottom-0 text-5xl text-blue-900/20 select-none">”</span>
          </blockquote>
          <figcaption className="text-sm text-gray-500">— {t('about.quote.author')}</figcaption>
        </figure>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('about.why.title')}</h2>
          <p className="text-gray-700">{t('about.why.desc')}</p>
        </section>

        <figure className="rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 w-full h-32 md:h-40 max-w-xl mx-auto">
          <img src="/images/wareman.jpg" alt="Equipo en almacén trabajando coordinadamente" className="w-full h-full object-cover saturate-105 contrast-105" loading="lazy" />
        </figure>
      </article>
    </main>
  );
};

export default About; 