
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 bg-ayur-darker overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ayur-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Ayur<span className="gradient-text">Genie</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              The ultimate fusion of ancient Ayurvedic wisdom and cutting-edge AI technology
              for truly personalized wellness solutions tailored to your unique genetic profile.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Features', 'How It Works', 'Pricing', 'DNA Testing', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-ayur-blue mr-3 mt-1" />
                <span className="text-white/70">
                  Delhi, India <br />
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-ayur-teal mr-3" />
                <span className="text-white/70">+91 9673322465</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-ayur-gold mr-3" />
                <span className="text-white/70">info@ayurgenie.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AyurGenie. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
