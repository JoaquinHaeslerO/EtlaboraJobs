import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      content: t('testimonials.1.content'),
      rating: 5
    },
    {
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      content: t('testimonials.2.content'),
      rating: 5
    },
    {
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      content: t('testimonials.3.content'),
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          {t('testimonials.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-soft"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent" />
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