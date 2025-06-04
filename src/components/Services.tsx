import React from 'react';
import { FaUserTie, FaHandshake, FaGlobeEurope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <FaUserTie className="w-12 h-12 text-primary" />,
      title: t('services.recruitment.title'),
      description: t('services.recruitment.description')
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-primary" />,
      title: t('services.advisory.title'),
      description: t('services.advisory.description')
    },
    {
      icon: <FaGlobeEurope className="w-12 h-12 text-primary" />,
      title: t('services.integration.title'),
      description: t('services.integration.description')
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('services.section.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.section.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 