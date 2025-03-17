
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className={`min-h-screen w-full hero-grid pt-24 pb-16 opacity-0 transition-opacity duration-1000 ${theme === 'light' ? 'light' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-xl space-y-6">
              <h2 className={`${theme === 'light' ? 'text-tech-purple' : 'text-tech-neon'} font-medium text-xl opacity-0 animate-fade-in animate-delay-100`}>
                // PROFESSIONAL SERVICES
              </h2>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in animate-delay-200 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                <span className="block">IOT SERVICES</span>
                <span className="block">EMBEDDED DESIGN</span>
                <span className="block">SOFTWARE DEVELOPMENT</span>
              </h1>
              
              <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-lg opacity-0 animate-fade-in animate-delay-300`}>
                Techure Solutions is your experienced development partner
                when it comes to the technological edge of latest IoT
                technologies & use cases.
              </p>
              
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
                <button className="btn-primary">SEE OUR WORK</button>
                <button className="btn-secondary">STACK EXCHANGE</button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative grid grid-cols-2 gap-4">
            <div className="h-full flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg h-1/2 opacity-0 animate-fade-in animate-delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070" 
                  alt="Circuit board"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-1/2 opacity-0 animate-fade-in animate-delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070" 
                  alt="IoT Connectivity"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="h-full flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg h-3/5 opacity-0 animate-fade-in animate-delay-400">
                <img 
                  src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1936" 
                  alt="Digital network"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-2/5 opacity-0 animate-fade-in animate-delay-500">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069" 
                  alt="Developer coding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
