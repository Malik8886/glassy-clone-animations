
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Initial visibility check and setup observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  // Reset visibility state if already in viewport after theme change
  useEffect(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        setIsVisible(true);
      }
    }
  }, [theme]);

  return (
    <div 
      ref={heroRef}
      className={`min-h-screen w-full hero-grid pt-24 pb-16 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${theme === 'light' ? 'light' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-xl space-y-6">
              <h2 className={`service-gradient font-medium text-xl ${isVisible ? 'opacity-100 animate-fade-in animate-delay-100' : 'opacity-0'}`}>
                // PROFESSIONAL SERVICES
              </h2>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isVisible ? 'opacity-100 animate-fade-in animate-delay-200' : 'opacity-0'} ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                <span className="block">IOT SERVICES</span>
                <span className="block">EMBEDDED DESIGN</span>
                <span className="block">SOFTWARE DEVELOPMENT</span>
              </h1>
              
              <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-lg ${isVisible ? 'opacity-100 animate-fade-in animate-delay-300' : 'opacity-0'}`}>
                Techure Solutions is your experienced development partner
                when it comes to the technological edge of latest IoT
                technologies & use cases.
              </p>
              
              <div className={`flex flex-wrap gap-4 ${isVisible ? 'opacity-100 animate-fade-in animate-delay-400' : 'opacity-0'}`}>
                <button className="btn-primary">SEE OUR WORK</button>
                <button className="btn-secondary">EXPLORE</button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative grid grid-cols-3 gap-4">
            <div className="col-span-2 h-1/2 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070" 
                alt="Circuit board"
                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${isVisible ? 'opacity-100 animate-fade-in animate-delay-200' : 'opacity-0'}`}
              />
            </div>
            <div className="h-full flex flex-col gap-4">
              <div className="h-1/2 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070" 
                  alt="IoT Connectivity"
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${isVisible ? 'opacity-100 animate-fade-in animate-delay-300' : 'opacity-0'}`}
                />
              </div>
              <div className="h-1/2 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1936" 
                  alt="Digital network"
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${isVisible ? 'opacity-100 animate-fade-in animate-delay-400' : 'opacity-0'}`}
                />
              </div>
            </div>
            <div className="col-span-2 h-1/2 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069" 
                alt="Developer coding"
                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${isVisible ? 'opacity-100 animate-fade-in animate-delay-500' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
