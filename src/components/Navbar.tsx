import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Get Started', path: '/get-started' },
    { name: 'DNA Scan', path: '/dna-scan' },
    { name: 'Profile', path: '/profile', icon: <User size={16} className="ml-1" /> },
  ];
  
  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled 
        ? "py-3 glass-panel shadow-lg" 
        : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Ayur<span className="gradient-text">Genie</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-ayur-blue after:transition-all hover:after:w-full flex items-center"
            >
              {item.name} {item.icon}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 rounded-md"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-ayur-darker/95 glass-panel z-40 pt-20 px-4 transition-all duration-300 transform",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-xl text-white/90 hover:text-white transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name} {item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
