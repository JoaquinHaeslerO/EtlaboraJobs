import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const CandidateForm: React.FC = () => {
  const { t } = useTranslation();

  // Esquema de validación
  const schema = yup.object().shape({
    fullName: yup.string().required(t('candidate.form.validation.required')),
    email: yup
      .string()
      .email(t('candidate.form.validation.email'))
      .required(t('candidate.form.validation.required')),
    phone: yup
      .string()
      .matches(/^\+?[0-9]{9,}$/, t('candidate.form.validation.phone'))
      .required(t('candidate.form.validation.required')),
    profession: yup.string().required(t('candidate.form.validation.required')),
    experience: yup.string().required(t('candidate.form.validation.required')),
    preferredLocation: yup.string().required(t('candidate.form.validation.required')),
    message: yup
      .string()
      .min(50, t('candidate.form.validation.message.min'))
      .required(t('candidate.form.validation.required')),
    cv: yup
      .mixed<FileList>()
      .test('fileSize', 'El archivo no debe superar 5MB', (value) => {
        if (!value || value.length === 0) return true;
        return value[0].size <= 5 * 1024 * 1024;
      })
      .test('fileType', 'Formato no permitido (PDF, DOC, DOCX)', (value) => {
        if (!value || value.length === 0) return true;
        const file = value[0];
        const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const extOk = /\.(pdf|doc|docx)$/i.test(file.name);
        return allowed.includes(file.type) || extOk;
      }),
    privacyAccepted: yup
      .boolean()
      .oneOf([true], 'Debes aceptar la Política de Privacidad')
      .required('Debes aceptar la Política de Privacidad'),
  });

  type CandidateFormData = {
    fullName: string;
    email: string;
    phone: string;
    profession: string;
    experience: string;
    preferredLocation: string;
    message: string;
    cv?: FileList;
    privacyAccepted: boolean;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CandidateFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: CandidateFormData) => {
    setIsSubmitting(true);
    try {
      // Aquí simularemos el envío, empaquetando los datos
      const payload = new FormData();
      Object.entries({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        profession: data.profession,
        experience: data.experience,
        preferredLocation: data.preferredLocation,
        message: data.message,
      }).forEach(([k, v]) => payload.append(k, v as string));
      if (data.cv && data.cv.length > 0) {
        payload.append('cv', data.cv[0]);
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Formulario candidato (FormData)', payload);
      toast.success('¡Formulario enviado con éxito! Revisaremos tu perfil y nos pondremos en contacto contigo.');
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="candidate-form" className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn scroll-mt-24">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">{t('candidate.title')}</h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('candidate.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              {t('candidate.form.fullName')}
            </label>
            <div className="mt-1">
              <input
                id="fullName"
                {...register('fullName')}
                type="text"
                placeholder={t('candidate.form.fullName.placeholder')}
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.fullName ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                required
              />
              {errors.fullName && (
                <p id="fullName-error" role="alert" className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('candidate.form.email')}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder={t('candidate.form.email.placeholder')}
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
                {t('candidate.form.phone')}
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  {...register('phone')}
                  type="tel"
                  placeholder={t('candidate.form.phone.placeholder')}
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                {t('candidate.form.profession')}
              </label>
              <div className="mt-1">
                <input
                  id="profession"
                  {...register('profession')}
                  type="text"
                  placeholder={t('candidate.form.profession.placeholder')}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.profession ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                  aria-invalid={!!errors.profession}
                  aria-describedby={errors.profession ? 'profession-error' : undefined}
                  required
                />
                {errors.profession && (
                  <p id="profession-error" role="alert" className="mt-1 text-sm text-red-600">{errors.profession.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                {t('candidate.form.experience')}
              </label>
              <div className="mt-1">
                <select
                  id="experience"
                  {...register('experience')}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.experience ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                  aria-invalid={!!errors.experience}
                  aria-describedby={errors.experience ? 'experience-error' : undefined}
                  required
                >
                  <option value="">{t('candidate.form.experience.select')}</option>
                  <option value="0-1">{t('candidate.form.experience.lessThan1')}</option>
                  <option value="1-3">{t('candidate.form.experience.1to3')}</option>
                  <option value="3-5">{t('candidate.form.experience.3to5')}</option>
                  <option value="5+">{t('candidate.form.experience.moreThan5')}</option>
                </select>
                {errors.experience && (
                  <p id="experience-error" role="alert" className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700">
                {t('candidate.form.country')}
              </label>
              <div className="mt-1">
                <select
                  id="preferredLocation"
                  {...register('preferredLocation')}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.preferredLocation ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                  aria-invalid={!!errors.preferredLocation}
                  aria-describedby={errors.preferredLocation ? 'preferredLocation-error' : undefined}
                  required
                >
                  <option value="">{t('candidate.form.country.select')}</option>
                  <option value="Alemania">{t('candidate.form.country.germany')}</option>
                  <option value="Holanda">{t('candidate.form.country.netherlands')}</option>
                  <option value="Cualquiera">{t('candidate.form.country.any')}</option>
                </select>
                {errors.preferredLocation && (
                  <p id="preferredLocation-error" role="alert" className="mt-1 text-sm text-red-600">{errors.preferredLocation.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {t('candidate.form.message')}
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                placeholder={t('candidate.form.message.placeholder')}
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
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
              Adjuntar CV (PDF, DOC o DOCX)
            </label>
            <div className="mt-1">
              <input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                {...register('cv')}
                className={`block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark ${
                  errors.cv ? 'border border-red-300 rounded' : ''
                }`}
                aria-invalid={!!errors.cv}
                aria-describedby={errors.cv ? 'cv-error' : undefined}
              />
              {errors.cv && (
                <p id="cv-error" role="alert" className="mt-1 text-sm text-red-600">{String(errors.cv.message)}</p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              id="privacyAccepted"
              type="checkbox"
              {...register('privacyAccepted')}
              className="mt-1"
              aria-invalid={!!errors.privacyAccepted}
              aria-describedby={errors.privacyAccepted ? 'privacyAccepted-error' : undefined}
            />
            <label htmlFor="privacyAccepted" className="text-sm text-gray-700">
              He leído y acepto la <a href="/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Política de Privacidad</a>.
            </label>
          </div>
          {errors.privacyAccepted && (
            <p id="privacyAccepted-error" role="alert" className="mt-1 text-sm text-red-600">{String(errors.privacyAccepted.message)}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CandidateForm; 