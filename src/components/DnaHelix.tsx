
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DnaHelixProps {
  className?: string;
}

const DnaHelix: React.FC<DnaHelixProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width = 400;
    const height = canvas.height = 400;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const numBases = 10;
    const helixRadius = 60;
    const baseSize = 4;
    const verticalSpacing = 15;
    
    let animationFrame: number;
    let rotation = 0;
    
    const colors = {
      strand1: '#0EA5E9', // Blue
      strand2: '#0D9488', // Teal
      base1: '#EAB308',   // Gold
      base2: '#FFFFFF'    // White
    };
    
    const drawHelix = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Calculate the size factor for responsive scaling
      const sizeFactor = Math.min(width, height) / 400;
      
      for (let i = 0; i < numBases; i++) {
        const y = centerY - (numBases * verticalSpacing) / 2 + i * verticalSpacing;
        
        // Calculate the x positions for the strands using sin function for rotation
        const angle1 = (i * 0.5) + rotation;
        const angle2 = (i * 0.5) + Math.PI + rotation;
        
        const x1 = centerX + Math.sin(angle1) * helixRadius * sizeFactor;
        const x2 = centerX + Math.sin(angle2) * helixRadius * sizeFactor;
        
        // Draw strand 1
        ctx.beginPath();
        ctx.arc(x1, y, baseSize * sizeFactor, 0, Math.PI * 2);
        ctx.fillStyle = colors.strand1;
        ctx.fill();
        
        // Add glow effect to strand 1
        ctx.shadowBlur = 10 * sizeFactor;
        ctx.shadowColor = colors.strand1;
        ctx.beginPath();
        ctx.arc(x1, y, baseSize * sizeFactor, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw strand 2
        ctx.beginPath();
        ctx.arc(x2, y, baseSize * sizeFactor, 0, Math.PI * 2);
        ctx.fillStyle = colors.strand2;
        ctx.fill();
        
        // Add glow effect to strand 2
        ctx.shadowBlur = 10 * sizeFactor;
        ctx.shadowColor = colors.strand2;
        ctx.beginPath();
        ctx.arc(x2, y, baseSize * sizeFactor, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw base connection
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = i % 2 === 0 ? colors.base1 : colors.base2;
        ctx.lineWidth = 1.5 * sizeFactor;
        ctx.stroke();
      }
      
      // Slowly animate the rotation
      rotation += 0.01;
      
      animationFrame = requestAnimationFrame(drawHelix);
    };
    
    drawHelix();
    
    // Handle window resize
    const handleResize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
      canvas.width = containerWidth;
      canvas.height = containerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={cn("w-full h-full max-w-[400px] max-h-[400px]", className)}
    />
  );
};

export default DnaHelix;
