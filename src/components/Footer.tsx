import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" }
  ];

  const legalLinks = [
    { text: t('footer.legal'), href: "#" },
    { text: t('footer.privacy'), href: "#" },
    { text: t('footer.contact'), href: "#contacto" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('site.name')}</h3>
            <p className="text-gray-400">
              {t('site.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/work-with-us" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.work')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('services.section.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/work-with-us" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link to="/for-companies" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.companies')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.email')}: info@etlabora.com</li>
              <li>{t('footer.phone')}: +34 900 123 456</li>
              <li>{t('footer.address.value')}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6 mb-4">
            <p className="text-gray-400 mr-2">{t('footer.social.follow')}:</p>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-400">
            <p>{t('footer.rights')}</p>
            <div className="flex justify-center space-x-4 mt-2">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 