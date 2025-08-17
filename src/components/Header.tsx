import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4" aria-label="Principal">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" aria-label={t('site.name')}>
            <img
              src="/images/logo-dark.png"
              alt={t('site.name')}
              className="h-8 w-auto md:h-10"
              decoding="async"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/work-with-us" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.work')}
            </Link>
            <Link to="/for-companies" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.companies')}
            </Link>
            <LanguageSelector />
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls="primary-menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div id="primary-menu" className="md:hidden mt-4 py-4 border-t border-gray-100" role="menu">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/work-with-us"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.work')}
              </Link>
              <Link
                to="/for-companies"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.companies')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 