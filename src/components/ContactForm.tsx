import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { submitContactForm, ContactFormData } from '../services/mockStorage';

// Esquema de validación
const schema = yup.object().shape({
  companyName: yup.string().required('El nombre de la empresa es obligatorio'),
  email: yup
    .string()
    .email('Introduce un email válido')
    .required('El email es obligatorio'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{9,}$/, 'Introduce un número de teléfono válido')
    .required('El teléfono es obligatorio'),
  message: yup
    .string()
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .required('El mensaje es obligatorio'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(data);
      toast.success('¡Formulario enviado con éxito! Nos pondremos en contacto pronto.');
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Contacta con nosotros</h2>
          <p className="mt-2 text-sm text-gray-600">
            Cuéntanos tus necesidades de personal y te ayudaremos a encontrar el talento adecuado
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Nombre de la empresa
            </label>
            <div className="mt-1">
              <input
                id="companyName"
                {...register('companyName')}
                type="text"
                placeholder="Ej: Empresa S.L."
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.companyName ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                aria-invalid={!!errors.companyName}
                aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                required
              />
              {errors.companyName && (
                <p id="companyName-error" role="alert" className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input id="privacy-emp" type="checkbox" required className="mt-1" />
            <label htmlFor="privacy-emp" className="text-sm text-gray-700">
              He leído y acepto la <a href="/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Política de Privacidad</a>.
            </label>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                id="email"
                {...register('email')}
                type="email"
                placeholder="contacto@empresa.com"
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <div className="mt-1">
              <input
                id="phone"
                {...register('phone')}
                type="tel"
                placeholder="+34 600 000 000"
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                required
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                placeholder="Describe las posiciones que necesitas cubrir, requisitos específicos y cualquier información relevante..."
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactForm; 