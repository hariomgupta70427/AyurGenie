
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'blue' | 'teal' | 'gold' | 'none';
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = 'blue'
}) => {
  const glowClasses = {
    blue: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    teal: 'hover:shadow-[0_0_20px_rgba(13,148,136,0.3)]',
    gold: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]',
    none: ''
  };
  
  return (
    <div 
      className={cn(
        "glass-panel backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300",
        hoverEffect && "hover:bg-white/10 transform hover:-translate-y-1",
        glowColor !== 'none' && glowClasses[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;
