
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';
import { Card } from "@/components/ui/card";

const ProjectItem = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
  return (
    <div 
      className={`overflow-hidden transition-all duration-300 ${className}`}
      style={style}
    >
      <div className="aspect-square relative">
        <div className="w-full h-full bg-white/20 rounded-xl overflow-hidden">
          <img 
            src={`https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1488590528505-98d2b5aba04b' : '1487058792275-0ad4aaf24ca7'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
            alt="Project" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'light' : ''}`}>
      <Navbar />
      
      {/* Simple Purple Box Header */}
      <div className="bg-[#9b87f5] h-[200px] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Our Projects</h1>
      </div>
      
      {/* Projects Section */}
      <div className="bg-black py-12 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-tech-purple/20 filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-tech-blue/20 filter blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-10">
            <h2 className="service-gradient font-medium text-xl mb-4">// Project</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Discover And See Some Of Our Projects Done
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 mb-16">
            {/* Custom layout based on the image */}
            <div className="col-span-1 md:col-span-4">
              <ProjectItem />
            </div>
            <div className="col-span-1 md:col-span-4 md:col-start-9">
              <ProjectItem />
            </div>
            <div className="col-span-1 md:col-span-4 md:col-start-5 md:row-start-2">
              <ProjectItem />
            </div>
            <div className="col-span-1 md:col-span-4 md:row-start-3">
              <ProjectItem />
            </div>
            <div className="col-span-1 md:col-span-4 md:col-start-9 md:row-start-3">
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-12 bg-[#e6ffef] relative overflow-hidden">
        {/* Wave-like shapes */}
        <div className="absolute top-0 left-0 w-full h-96 rounded-[50%] bg-[#e6ffef] transform translate-x-[-30%] translate-y-[-75%]"></div>
        <div className="absolute top-0 right-0 w-full h-96 rounded-[50%] bg-[#e6ffef] transform translate-x-[30%] translate-y-[-75%]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          <div className="flex gap-4 mt-8">
            <button className="bg-tech-neon text-black px-6 py-2 rounded-full font-medium hover:shadow-[0_0_15px_rgba(0,255,140,0.5)] transition-all text-sm">
              SEE OUR WORK
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium border border-gray-300 hover:bg-gray-50 transition-all text-sm">
              STACK EXCHANGE
            </button>
          </div>
        </div>
      </div>
      
      {/* Full-width Tech People Working Image */}
      <div className="w-full">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Tech team working together"
          className="w-full h-auto object-cover"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
