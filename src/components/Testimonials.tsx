import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'María P.',
      role: 'Camarera en Rotterdam',
      content:
        'Sentí que había un equipo detrás de mí en todo momento. En menos de un mes estaba trabajando y con alojamiento. Me explicaron cada paso sin letra pequeña.',
      rating: 5,
    },
    {
      name: 'Diego R.',
      role: 'Operario logístico en Múnich',
      content:
        'Me ayudaron con el CV y las entrevistas. El proceso fue claro y honesto, y ya estoy aprendiendo alemán con el apoyo de la empresa.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          {t('testimonials.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-soft"
            >
              <div className="flex mb-4" aria-label={`Valoración: ${testimonial.rating} de 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 