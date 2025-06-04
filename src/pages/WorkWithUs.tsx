import React from 'react';
import CandidateForm from '../components/CandidateForm';
import { useTranslation } from 'react-i18next';

const WorkWithUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrón de fondo */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundColor: '#1a365d',
            backgroundImage: `linear-gradient(30deg, #234876 12%, transparent 12.5%, transparent 87%, #234876 87.5%, #234876),
              linear-gradient(150deg, #234876 12%, transparent 12.5%, transparent 87%, #234876 87.5%, #234876),
              linear-gradient(30deg, #234876 12%, transparent 12.5%, transparent 87%, #234876 87.5%, #234876),
              linear-gradient(150deg, #234876 12%, transparent 12.5%, transparent 87%, #234876 87.5%, #234876),
              linear-gradient(60deg, #234876 25%, transparent 25.5%, transparent 75%, #234876 75%, #234876),
              linear-gradient(60deg, #234876 25%, transparent 25.5%, transparent 75%, #234876 75%, #234876)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
          }}
        />
        
        {/* Banderas con efecto de ondeo */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          {/* Bandera de Alemania */}
          <div className="absolute top-0 right-0 w-32 h-24 -rotate-12" style={{ animation: 'wave 15s ease-in-out infinite' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-full h-full">
              <rect width="5" height="3" y="0" x="0" fill="#000"/>
              <rect width="5" height="2" y="1" x="0" fill="#DD0000"/>
              <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
            </svg>
          </div>
          
          {/* Bandera de Holanda */}
          <div className="absolute top-20 right-24 w-32 h-24 rotate-12" style={{ animation: 'wave 18s ease-in-out infinite' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" className="w-full h-full">
              <rect width="9" height="6" fill="#21468B"/>
              <rect width="9" height="4" fill="#FFF"/>
              <rect width="9" height="2" fill="#AE1C28"/>
            </svg>
          </div>
        </div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-gray-50/90 to-gray-50/80" />
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {t('work.title')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {t('work.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden mb-12 transition-all duration-300 hover:bg-white/90">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                <div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('work.opportunities.title')}</h3>
                  <p className="mt-2 text-sm text-gray-500">{t('work.opportunities.desc')}</p>
                </div>

                <div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('work.process.title')}</h3>
                  <p className="mt-2 text-sm text-gray-500">{t('work.process.desc')}</p>
                </div>

                <div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('work.relocation.title')}</h3>
                  <p className="mt-2 text-sm text-gray-500">{t('work.relocation.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:bg-white/95">
            <CandidateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs; 