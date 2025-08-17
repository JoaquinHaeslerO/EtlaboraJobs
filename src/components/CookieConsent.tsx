import React from 'react';

type Consent = {
  necessary: boolean;
  analytics: boolean;
};

const STORAGE_KEY = 'etlabora_cookie_consent_v1';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-2xl bg-white shadow-lg ring-1 ring-black/10 overflow-hidden">
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="text-sm text-gray-700">
            Usamos cookies esenciales para el funcionamiento del sitio y, con tu permiso, cookies analíticas para mejorar la experiencia. Puedes cambiar tu decisión en cualquier momento.
            Consulta nuestra <a href="/legal/cookies" className="text-blue-700 underline">Política de Cookies</a> y <a href="/legal/privacy" className="text-blue-700 underline">Privacidad</a>.
          </div>
          <div className="flex gap-2 sm:ml-auto">
            <button onClick={() => save({ necessary: true, analytics: false })} className="px-3 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200">Rechazar</button>
            <button onClick={() => save({ necessary: true, analytics: true })} className="px-3 py-2 rounded-md text-sm text-white bg-blue-600 hover:bg-blue-700">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;


