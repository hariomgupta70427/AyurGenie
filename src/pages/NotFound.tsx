
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add a class to body to ensure dark styling
    document.body.classList.add('bg-ayur-dark');
    
    return () => {
      document.body.classList.remove('bg-ayur-dark');
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-6">
      <AnimatedBackground />
      
      <div className={cn(
        "glass-panel rounded-2xl p-8 md:p-12 text-center max-w-lg",
        "animate-scale-up shadow-xl"
      )}>
        <div className="text-9xl font-bold gradient-text mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ayur-blue to-ayur-teal rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-ayur-blue/20 transform hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
