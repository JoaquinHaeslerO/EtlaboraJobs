import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import ForCompanies from './pages/ForCompanies';
import WhatsAppFloating from './components/WhatsAppFloating';
import CookieConsent from './components/CookieConsent';

function App() {
  // Mover foco a <main> en cambio de ruta para accesibilidad
  useEffect(() => {
    const handleHashChange = () => {
      const main = document.getElementById('main-content');
      if (main) {
        main.focus();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black p-2 rounded">Saltar al contenido</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/for-companies" element={<ForCompanies />} />
        </Routes>
      </main>
      <WhatsAppFloating />
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default App; 