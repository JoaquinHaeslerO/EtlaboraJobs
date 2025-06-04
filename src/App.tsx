import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import ForCompanies from './pages/ForCompanies';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/for-companies" element={<ForCompanies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 