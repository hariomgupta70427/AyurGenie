import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import HowItWorks from '../components/HowItWorks';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-10 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get <span className="gradient-text">Started</span>
              </h1>
              <p className="text-white/70 max-w-3xl mx-auto text-lg">
                Begin your personalized Ayurvedic wellness journey with AyurGenie in just a few simple steps.
              </p>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-panel rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Choose Your <span className="gradient-text">Plan</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-panel rounded-xl p-6 border border-white/20 transform transition-all hover:-translate-y-2 duration-300">
                  <div className="text-ayur-blue text-lg font-semibold mb-2">Basic</div>
                  <h3 className="text-2xl font-bold mb-4">Free</h3>
                  <p className="text-white/70 mb-6">
                    Perfect for those beginning their Ayurvedic wellness journey.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">DNA Data Collection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Basic Dosha Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Dietary Recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Basic Digital Dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">AI-based TAC Product Recommendations</span>
                    </li>
                  </ul>
                  <Link to="/profile" className="w-full py-3 rounded-lg border border-ayur-blue/50 hover:border-ayur-blue text-white font-medium transition-all duration-300 hover:bg-ayur-blue/10 block text-center">
                    Select Plan
                  </Link>
                </div>
                
                <div className="glass-panel rounded-xl p-6 border border-ayur-blue/30 relative transform transition-all hover:-translate-y-2 duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ayur-blue to-ayur-teal text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                  <div className="text-ayur-teal text-lg font-semibold mb-2">Premium</div>
                  <h3 className="text-2xl font-bold mb-4">₹99</h3>
                  <p className="text-white/70 mb-6">
                    Our comprehensive package for personalized wellness.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Advanced DNA Collection Kit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Comprehensive Dosha Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Detailed Nutrition Plan</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Personalized Exercise Regimen</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Full Access Digital Dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">1 Month Health Monitoring</span>
                    </li>
                  </ul>
                  <Link to="/profile" className="w-full py-3 rounded-lg bg-gradient-to-r from-ayur-blue to-ayur-teal text-white font-medium transition-all duration-300 transform hover:scale-105 block text-center">
                    Select Plan
                  </Link>
                </div>
                
                <div className="glass-panel rounded-xl p-6 border border-white/20 transform transition-all hover:-translate-y-2 duration-300">
                  <div className="text-ayur-gold text-lg font-semibold mb-2">Ultimate</div>
                  <h3 className="text-2xl font-bold mb-4">₹199</h3>
                  <p className="text-white/70 mb-6">
                    The complete AyurGenie experience with premium benefits.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Premium DNA Collection Kit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Elite Genetic & Dosha Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Customized Wellness Program</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Personalized Herbal Supplements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">VIP Digital Dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">1 Year Health Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">2 Consultation Sessions</span>
                    </li>
                  </ul>
                  <Link to="/profile" className="w-full py-3 rounded-lg border border-ayur-gold/50 hover:border-ayur-gold text-white font-medium transition-all duration-300 hover:bg-ayur-gold/10 block text-center">
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="glass-panel rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">How does the DNA collection process work?</h3>
                  <p className="text-white/70">
                    Our DNA collection kit includes a simple cheek swab that you can use at home. Just follow the
                    instructions in the kit, seal your sample in the provided envelope, and send it back to our lab
                    using the prepaid shipping label.
                  </p>
                </div>
                
                <div className="glass-panel rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">How long does it take to receive my results?</h3>
                  <p className="text-white/70">
                    Once your DNA sample arrives at our lab, it typically takes 2-3 weeks to process your results
                    and create your personalized Ayurvedic profile. You'll receive an email notification when
                    your results are ready to view in your dashboard.
                  </p>
                </div>
                
                <div className="glass-panel rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Is my genetic data kept private and secure?</h3>
                  <p className="text-white/70">
                    Absolutely. We take your privacy very seriously. All your genetic information is stored securely
                    using industry-standard encryption. We never share or sell your genetic data to third parties
                    without your explicit consent.
                  </p>
                </div>
                
                <div className="glass-panel rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Can I upgrade my plan later?</h3>
                  <p className="text-white/70">
                    Yes, you can upgrade your plan at any time from your account dashboard. When you upgrade,
                    you'll only pay the difference between your current plan and the new one.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your <span className="gradient-text">Journey?</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Take the first step toward personalized Ayurvedic wellness with our 
                revolutionary DNA analysis and AI-powered recommendations.
              </p>
              <Link to="/profile" className="relative group px-8 py-4 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1 inline-block">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                <span className="relative flex items-center justify-center">
                  Get Your DNA Kit 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
