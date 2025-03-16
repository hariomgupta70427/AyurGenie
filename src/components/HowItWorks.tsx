import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { FileInput, ScanFace, Brain, Activity } from 'lucide-react';

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const steps = stepsRef.current?.querySelectorAll('.step-item');
    if (!steps) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    steps.forEach((step) => {
      observer.observe(step);
    });
    
    return () => {
      steps.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);
  
  const steps = [
    {
      icon: <FileInput className="w-8 h-8" />,
      title: "User Data Collection",
      description: "We collect your personal data, lifestyle habits, and DNA-based traits to create your comprehensive Ayurvedic profile.",
      color: "blue",
      animation: { y: [20, 0], opacity: [0, 1] }
    },
    {
      icon: <ScanFace className="w-8 h-8" />,
      title: "Ayurvedic Dosha Analysis",
      description: "Our AI analyzes your DNA and lifestyle data to determine your unique dosha balance and Ayurvedic constitution.",
      color: "teal",
      animation: { y: [20, 0], opacity: [0, 1], transition: { delay: 0.2 } }
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalized AI Recommendations",
      description: "Based on your profile, our AI generates personalized Ayurvedic diet, TAC product recommendations, and wellness routines.",
      color: "gold",
      animation: { y: [20, 0], opacity: [0, 1], transition: { delay: 0.4 } }
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Continuous Health Monitoring",
      description: "Your profile is continuously updated with real-time health insights and new recommendations as your needs evolve.",
      color: "blue",
      animation: { y: [20, 0], opacity: [0, 1], transition: { delay: 0.6 } }
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-ayur-blue/10 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            AyurGenie combines cutting-edge DNA analysis with ancient Ayurvedic wisdom
            through our simple 4-step process.
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical line connecting steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ayur-blue via-ayur-teal to-ayur-gold"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "step-item relative flex md:items-center mb-12 last:mb-0 opacity-0 transition-all duration-700 transform translate-y-8",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center z-10",
                  step.color === "blue" ? "bg-ayur-blue" : 
                  step.color === "teal" ? "bg-ayur-teal" : 
                  "bg-ayur-gold"
                )}>
                  {step.icon}
                </div>
              </div>
              
              {/* Content box */}
              <div className={cn(
                "md:w-5/12 glass-panel rounded-xl p-6 md:p-8 ml-14 md:ml-0 hover:-translate-y-2 transition-all duration-300",
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              )}>
                {/* Mobile dot */}
                <div className={cn(
                  "md:hidden absolute left-0 top-2 w-10 h-10 rounded-full flex items-center justify-center",
                  step.color === "blue" ? "bg-ayur-blue" : 
                  step.color === "teal" ? "bg-ayur-teal" : 
                  "bg-ayur-gold"
                )}>
                  {step.icon}
                </div>
                
                <span className={cn(
                  "inline-block text-xs font-bold px-3 py-1 rounded-full mb-3",
                  step.color === "blue" ? "bg-ayur-blue/20 text-ayur-blue" : 
                  step.color === "teal" ? "bg-ayur-teal/20 text-ayur-teal" : 
                  "bg-ayur-gold/20 text-ayur-gold"
                )}>
                  Step {index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/profile" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-ayur-blue to-ayur-teal rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-ayur-blue/30 transform hover:-translate-y-1"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
