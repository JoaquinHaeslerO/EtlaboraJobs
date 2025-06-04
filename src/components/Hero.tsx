import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../assets/images';

// Definir los keyframes para las animaciones
const styles = `
  @keyframes wave {
    0%, 100% { transform: rotate(-12deg); }
    50% { transform: rotate(12deg); }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .wave-animation {
    animation: wave 15s ease-in-out infinite;
    transform-origin: center;
  }

  .float-animation {
    animation: float 6s ease-in-out infinite;
  }

  .pulse-animation {
    animation: pulse 2s infinite;
  }

  .hero-gradient {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.6) 0%, rgba(26, 54, 93, 0.5) 100%);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // Inyectar los estilos
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Fondo con imágenes */}
      <div className="absolute inset-0">
        {/* Collage de imágenes */}
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000 hover:scale-110"
            style={{
              backgroundImage: `url(${IMAGES.LOGISTICS.WAREHOUSE})`,
              filter: 'contrast(1.2) brightness(0.9)'
            }}
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center transform scale-105 transition-transform duration-1000 hover:scale-110"
            style={{
              backgroundImage: `url(${IMAGES.LOGISTICS.FORKLIFT})`,
              opacity: 0.9,
              filter: 'contrast(1.2) brightness(0.9)'
            }}
          />
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-cover bg-center transform scale-105 transition-transform duration-1000 hover:scale-110"
            style={{
              backgroundImage: `url(${IMAGES.LOGISTICS.CONTAINERS})`,
              opacity: 0.9,
              filter: 'contrast(1.2) brightness(0.9)'
            }}
          />
        </div>

        {/* Patrón de fondo con efecto de movimiento */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80" />
        
        {/* Banderas con efecto de ondeo */}
        <div className="absolute top-0 right-0 w-full h-full">
          {/* Bandera de Alemania */}
          <div className="absolute top-8 right-8 w-40 h-24 wave-animation opacity-60">
            <img src={IMAGES.FLAGS.GERMANY} alt="Bandera de Alemania" className="w-full h-full filter drop-shadow-lg" />
          </div>
          
          {/* Bandera de Holanda */}
          <div className="absolute top-32 right-32 w-40 h-24 wave-animation opacity-60" style={{ animationDelay: '-7s' }}>
            <img src={IMAGES.FLAGS.NETHERLANDS} alt="Bandera de Holanda" className="w-full h-full filter drop-shadow-lg" />
          </div>
        </div>

        {/* Overlay gradiente más suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-primary/30" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight float-animation drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-100 drop-shadow-md">
            {t('hero.subtitle')}
          </p>
          <Link
            to="/work-with-us"
            className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg pulse-animation"
          >
            {t('hero.cta')}
          </Link>
        </div>

        {/* Estadísticas con efecto glassmorphism mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
          <div className="text-center text-white glass-card rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold mb-1 float-animation drop-shadow-lg">500+</div>
            <div className="text-sm text-gray-100">{t('hero.stats.placements')}</div>
          </div>
          <div className="text-center text-white glass-card rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold mb-1 float-animation drop-shadow-lg" style={{ animationDelay: '-2s' }}>50+</div>
            <div className="text-sm text-gray-100">{t('hero.stats.companies')}</div>
          </div>
          <div className="text-center text-white glass-card rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold mb-1 float-animation drop-shadow-lg" style={{ animationDelay: '-4s' }}>2</div>
            <div className="text-sm text-gray-100">{t('hero.stats.countries')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 