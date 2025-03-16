
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  particleSize?: number;
  particleColors?: string[];
  speed?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className,
  particleCount = 50,
  particleSize = 2,
  particleColors = ['#0EA5E9', '#0D9488', '#EAB308'],
  speed = 0.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
      angle: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = (Math.random() * particleSize) + 0.5;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        this.speed = (Math.random() * speed) + 0.1;
        this.angle = Math.random() * 360;
      }
      
      update() {
        // Move in a slightly random direction
        this.angle += (Math.random() - 0.5) * 0.5;
        const radian = (this.angle * Math.PI) / 180;
        this.x += Math.cos(radian) * this.speed;
        this.y += Math.sin(radian) * this.speed;
        
        // Wrap around the screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = 0.3; // Semi-transparent
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }
    
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleSize, particleColors, speed]);
  
  return (
    <canvas 
      ref={canvasRef}
      className={cn("fixed inset-0 -z-10 opacity-40", className)}
    />
  );
};

export default AnimatedBackground;
