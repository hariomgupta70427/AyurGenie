
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import FeaturesSection from '../components/FeaturesSection';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-10 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Features</span>
              </h1>
              <p className="text-white/70 max-w-3xl mx-auto text-lg">
                Discover how AyurGenie combines ancient Ayurvedic wisdom with cutting-edge technology
                to deliver a truly personalized wellness experience.
              </p>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-panel rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Advanced <span className="gradient-text">AI Technology</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden glass-panel border border-ayur-blue/30 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 relative">
                      <div className="absolute inset-0 bg-gradient-radial from-ayur-blue/30 to-transparent rounded-full animate-pulse-glow"></div>
                      <div className="w-full h-full rounded-full border-4 border-dashed border-ayur-blue/50 animate-rotate-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white">AI</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">State-of-the-Art Machine Learning</h3>
                  <p className="text-white/70 mb-6">
                    Our proprietary AI algorithms analyze thousands of genetic markers and cross-reference them
                    with the ancient principles of Ayurveda. This revolutionary approach allows us to provide
                    you with highly personalized wellness recommendations that are backed by both modern science
                    and traditional wisdom.
                  </p>
                  <p className="text-white/70 mb-8">
                    The AyurGenie AI continuously learns from new research, your feedback, and your health data
                    to refine and improve its recommendations over time, ensuring that your wellness journey
                    is always optimized for your unique needs.
                  </p>
                  <button className="px-6 py-3 rounded-lg border border-ayur-teal/50 hover:border-ayur-teal text-white font-medium transition-all duration-300 hover:bg-ayur-teal/10">
                    Learn About Our Technology
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">
                Personalized <span className="gradient-text">Experience</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-panel rounded-xl p-6 border border-ayur-blue/20 transform transition-all hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 rounded-full bg-ayur-blue/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-ayur-blue/60"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Custom Nutrition Plans</h3>
                  <p className="text-white/70">
                    Receive diet recommendations tailored to your unique dosha profile 
                    and genetic predispositions.
                  </p>
                </div>
                <div className="glass-panel rounded-xl p-6 border border-ayur-teal/20 transform transition-all hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 rounded-full bg-ayur-teal/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-ayur-teal/60"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tailored Exercise Regimen</h3>
                  <p className="text-white/70">
                    Discover the physical activities that work best with your body type
                    and energetic constitution.
                  </p>
                </div>
                <div className="glass-panel rounded-xl p-6 border border-ayur-gold/20 transform transition-all hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 rounded-full bg-ayur-gold/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-ayur-gold/60"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Personalized Supplements</h3>
                  <p className="text-white/70">
                    Get recommendations for herbal supplements and formulations
                    specifically selected for your genetic profile.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Experience the <span className="gradient-text">Difference</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Join thousands of people who have transformed their wellness journey with AyurGenie's
                personalized Ayurvedic approach.
              </p>
              <button className="relative group px-8 py-4 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                <span className="relative flex items-center justify-center">
                  Get Started Today 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
