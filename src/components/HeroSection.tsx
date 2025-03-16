import React from 'react';
import { Link } from 'react-router-dom';
import DnaHelix from './DnaHelix';
import GlassmorphismCard from './ui/GlassmorphismCard';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-bg pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Hero Text */}
        <div className="lg:w-1/2 z-10 mb-12 lg:mb-0 text-center lg:text-left">
          <div 
            className="inline-block px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-ayur-blue animate-fade-in"
          >
            <span className="text-sm font-medium">AI-Powered Ayurveda</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Genes. <br/>
            Your <span className="gradient-text">Ayurveda</span>. <br/>
            Your <span className="text-ayur-blue text-glow">Health Revolution</span>!
          </h1>
          
          <p className="text-lg text-white/70 mb-8 max-w-xl animate-fade-in animate-delayed">
            Discover the future of wellness with AyurGenie's personalized Ayurvedic solutions, 
            powered by cutting-edge DNA analysis and intelligent AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in animate-delayed-more">
            <Link to="/profile" className="relative group px-6 py-3 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
              <span className="relative flex items-center justify-center">
                Get Your Ayurvedic Gene Profile 
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            <Link to="/get-started" className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300">
              Learn How It Works
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center items-center relative animate-fade-in">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-ayur-blue/20 to-transparent rounded-full animate-pulse-glow"></div>
            <DnaHelix className="z-10" />
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "DNA-Based Analysis", 
              description: "Our advanced AI analyzes your genetic makeup to identify your unique Ayurvedic constitution.",
              color: "blue"
            },
            {
              title: "Personalized Remedies", 
              description: "Receive tailored Ayurvedic recommendations specific to your dosha balance and genetic predispositions.",
              color: "teal"
            },
            {
              title: "Real-time Health Tracking", 
              description: "Monitor your wellness metrics with AI-powered insights that adapt to your changing health conditions.",
              color: "gold"
            }
          ].map((feature, index) => (
            <GlassmorphismCard 
              key={index} 
              className="p-8 transform transition-transform duration-500 hover:scale-105"
              glowColor={feature.color as "blue" | "teal" | "gold"}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-6",
                feature.color === "blue" ? "text-ayur-blue" : 
                feature.color === "teal" ? "text-ayur-teal" : 
                "text-ayur-gold"
              )}>
                <div className={cn(
                  "w-full h-full rounded-full",
                  feature.color === "blue" ? "bg-ayur-blue/20" : 
                  feature.color === "teal" ? "bg-ayur-teal/20" : 
                  "bg-ayur-gold/20"
                )}></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
