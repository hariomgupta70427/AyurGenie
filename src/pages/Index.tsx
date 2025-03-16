
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  useEffect(() => {
    // Add a class to body to ensure dark styling
    document.body.classList.add('bg-ayur-dark');
    
    return () => {
      document.body.classList.remove('bg-ayur-dark');
    };
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
