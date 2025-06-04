import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyWorkAbroad from '../components/WhyWorkAbroad';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyWorkAbroad />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home; 