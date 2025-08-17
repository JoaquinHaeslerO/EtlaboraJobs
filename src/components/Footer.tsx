import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/people/EtLabora-Jobs/61579093629716/", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://x.com/EtlaboraJobs", label: "Twitter" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/etlaborajobs/", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/etlaborajobs?igsh=MzhyZGR3NWF6MXh6", label: "Instagram" }
  ];

  const lang = (typeof window !== 'undefined' ? (window as any).i18next?.language : undefined) || (t as any).i18n?.language || 'es';
  const base = lang.startsWith('en') ? '/legal/en' : lang.startsWith('de') ? '/legal/de' : '/legal';
  const mapFile = (type: 'legal' | 'privacy' | 'cookies') => {
    if (lang.startsWith('en')) {
      if (type === 'legal') return 'imprint.html';
      if (type === 'privacy') return 'privacy.html';
      return 'cookies.html';
    }
    if (lang.startsWith('de')) {
      if (type === 'legal') return 'impressum.html';
      if (type === 'privacy') return 'datenschutz.html';
      return 'cookies.html';
    }
    // es por defecto
    if (type === 'legal') return 'aviso-legal.html';
    if (type === 'privacy') return 'privacy.html';
    return 'cookies.html';
  };

  const legalLinks = [
    { text: t('footer.legal'), href: `${base}/${mapFile('legal')}` },
    { text: t('footer.privacy'), href: `${base}/${mapFile('privacy')}` },
    { text: t('footer.cookies'), href: `${base}/${mapFile('cookies')}` }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo-light.png" alt={t('site.name')} className="h-8 w-auto mb-4" />
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
                target="_blank"
                rel="noopener noreferrer"
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