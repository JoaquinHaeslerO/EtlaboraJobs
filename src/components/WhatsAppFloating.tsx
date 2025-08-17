import React from 'react';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../config';

const WhatsAppFloating: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg ring-1 ring-black/5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <img
        src="/images/What.png"
        alt="WhatsApp"
        className="w-8 h-8 md:w-9 md:h-9 object-contain pointer-events-none"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/whatsapp.svg'; }}
      />
    </a>
  );
};

export default WhatsAppFloating;


