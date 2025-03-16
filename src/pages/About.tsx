import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">AyurGenie</span>
              </h1>
              <p className="text-white/70 max-w-3xl mx-auto text-lg">
                Discover how we're revolutionizing personalized wellness by combining 
                ancient Ayurvedic wisdom with cutting-edge DNA analysis and AI technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Our <span className="text-ayur-blue">Mission</span></h2>
                <p className="text-white/70 mb-6">
                  At AyurGenie, we believe that true wellness comes from understanding your unique genetic makeup
                  and how it relates to ancient Ayurvedic principles. Our mission is to make personalized
                  Ayurvedic wellness accessible to everyone through the power of modern science and AI.
                </p>
                <p className="text-white/70 mb-6">
                  We're dedicated to bridging the gap between modern genetic science and the 5,000-year-old 
                  wisdom of Ayurveda to create truly personalized wellness solutions that work in harmony with
                  your unique biological makeup.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="glass-panel rounded-xl p-6 border border-ayur-blue/20 relative overflow-hidden max-w-md">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-ayur-blue/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-ayur-teal/10 rounded-full blur-3xl"></div>
                  <h3 className="text-xl font-semibold mb-4 text-ayur-blue">Our Core Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-ayur-blue/20 flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-ayur-blue"></div>
                      </div>
                      <p className="text-white/80"><span className="font-medium text-white">Personalization:</span> We believe that no two individuals are alike, and your wellness plan shouldn't be either.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-ayur-teal/20 flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-ayur-teal"></div>
                      </div>
                      <p className="text-white/80"><span className="font-medium text-white">Scientific Rigor:</span> We combine ancient wisdom with cutting-edge research and technology.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-ayur-gold/20 flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-ayur-gold"></div>
                      </div>
                      <p className="text-white/80"><span className="font-medium text-white">Holistic Approach:</span> We consider all aspects of your health and lifestyle for true wellness.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-8 mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center">Our <span className="gradient-text">Technology</span></h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-ayur-blue/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 rounded-full bg-ayur-blue/50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-ayur-blue"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Advanced DNA Analysis</h3>
                  <p className="text-white/70">
                    Our proprietary DNA analysis identifies genetic markers 
                    specifically related to your Ayurvedic constitution.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-ayur-teal/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 rounded-full bg-ayur-teal/50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-ayur-teal"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI-Powered Platform</h3>
                  <p className="text-white/70">
                    Our sophisticated AI algorithms analyze and cross-reference your 
                    genetic data with Ayurvedic principles.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-ayur-gold/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 rounded-full bg-ayur-gold/50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-ayur-gold"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real-time Health Monitoring</h3>
                  <p className="text-white/70">
                    Continuous adaptation based on your health metrics for always-relevant 
                    Ayurvedic recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-6">The Team Behind <span className="gradient-text">AyurGenie</span></h2>
              <p className="text-white/70 max-w-3xl mx-auto mb-12">
                Our diverse team brings together experts in genetics, artificial intelligence, 
                and traditional Ayurvedic medicine to create a revolutionary wellness platform.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="glass-panel rounded-xl p-6 transform transition-all hover:-translate-y-2 duration-300 group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-ayur-blue to-ayur-teal mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-ayur-blue/30 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Aisha Patel</h3>
                  <p className="text-ayur-blue mb-3">Chief Scientific Officer</p>
                  <p className="text-white/70">
                    Geneticist with over 15 years of experience in genomic research and personalized medicine.
                  </p>
                </div>
                <div className="glass-panel rounded-xl p-6 transform transition-all hover:-translate-y-2 duration-300 group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-ayur-teal to-ayur-gold mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-ayur-teal/30 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Rajiv Sharma</h3>
                  <p className="text-ayur-teal mb-3">Ayurvedic Director</p>
                  <p className="text-white/70">
                    Fifth-generation Ayurvedic practitioner with a PhD in integrative medicine.
                  </p>
                </div>
                <div className="glass-panel rounded-xl p-6 transform transition-all hover:-translate-y-2 duration-300 group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-ayur-gold to-ayur-blue mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-ayur-gold/30 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold mb-1">Maya Chen</h3>
                  <p className="text-ayur-gold mb-3">AI Research Lead</p>
                  <p className="text-white/70">
                    Former Google AI researcher specializing in health applications of machine learning.
                  </p>
                </div>
                <div className="glass-panel rounded-xl p-6 transform transition-all hover:-translate-y-2 duration-300 group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-ayur-blue to-ayur-gold mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-ayur-blue/30 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold mb-1">Vikram Mehta</h3>
                  <p className="text-ayur-blue mb-3">Product Development</p>
                  <p className="text-white/70">
                    E-commerce expert with extensive experience in TAC product integration and digital wellness platforms.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your <span className="gradient-text">Journey?</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Take the first step toward personalized Ayurvedic wellness with our 
                revolutionary DNA analysis and AI-powered recommendations.
              </p>
              <Link to="/profile" className="relative group px-8 py-4 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1 inline-block">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                <span className="relative flex items-center justify-center">
                  Get Started Now 
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

export default About;
