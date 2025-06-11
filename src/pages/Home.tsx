import React from 'react';
import Hero from '../components/home/Hero';
import Steps from '../components/home/Steps';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Services />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;