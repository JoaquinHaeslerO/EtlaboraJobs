import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import esFlag from '../assets/flags/es.svg';
import enFlag from '../assets/flags/en.svg';
import deFlag from '../assets/flags/de.svg';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: esFlag },
    { code: 'en', name: 'English', flag: enFlag },
    { code: 'de', name: 'Deutsch', flag: deFlag }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <img 
          src={currentLanguage.flag} 
          alt={`${currentLanguage.name} flag`} 
          className="w-6 h-4 object-cover rounded shadow-sm"
        />
        <span className="font-medium">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                i18n.changeLanguage(language.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center space-x-3
                ${language.code === currentLanguage.code ? 'bg-gray-50' : ''}`}
            >
              <img 
                src={language.flag} 
                alt={`${language.name} flag`} 
                className="w-6 h-4 object-cover rounded shadow-sm"
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 