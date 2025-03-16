
import React from 'react';
import GlassmorphismCard from './ui/GlassmorphismCard';
import { Sparkles, Activity, Gem, Fingerprint, Infinity, Pill } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Dosha Analysis",
      description: "Our advanced algorithms analyze your unique genetic profile to determine your dominant doshas and create personalized wellness plans.",
      color: "blue"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Health Monitoring",
      description: "Track your dosha balance and health metrics in real-time with seamless integration to wearable devices and health apps.",
      color: "teal"
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Precision Ayurveda Formulations",
      description: "Receive personalized Ayurvedic formulations and remedy recommendations tailored to your specific genetic makeup.",
      color: "gold"
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Unique Genetic Profiling",
      description: "Our DNA-based approach identifies subtle genetic variations that influence your Ayurvedic constitution and health predispositions.",
      color: "blue"
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Continuous Adaptive Learning",
      description: "Our AI continuously learns from your data, adapting recommendations as your health status and environment change.",
      color: "teal"
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Tailored Supplement Regimen",
      description: "Get scientifically-backed, dosha-specific supplement recommendations to enhance your overall well-being.",
      color: "gold"
    }
  ];
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced <span className="gradient-text">Features</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Discover how AyurGenie combines ancient Ayurvedic wisdom with cutting-edge technology
            to deliver a truly personalized wellness experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlassmorphismCard
                glowColor={feature.color as "blue" | "teal" | "gold"}
                className="h-full"
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-6",
                  feature.color === "blue" ? "text-ayur-blue bg-ayur-blue/10" : 
                  feature.color === "teal" ? "text-ayur-teal bg-ayur-teal/10" : 
                  "text-ayur-gold bg-ayur-gold/10"
                )}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </GlassmorphismCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
