
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';

const ProjectItem = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="aspect-square relative">
        <img 
          src="/placeholder.svg" 
          alt="Project" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <h3 className="text-white font-bold text-xl mb-2">Project Title</h3>
            <p className="text-gray-300 text-sm">Short description of the project</p>
          </div>
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
      
      {/* Hero Section with Purple Wave */}
      <div className="pt-32 pb-24 bg-gradient-to-b from-tech-purple/80 to-tech-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path fill="#080808" fillOpacity="1" d="M0,224L80,224C160,224,320,224,480,224C640,224,800,224,960,234.7C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Projects Section */}
      <div className="bg-tech-dark py-20 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-tech-purple/20 filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-tech-blue/20 filter blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 animate-on-scroll">
            <h2 className="service-gradient font-medium text-xl mb-4">// Project</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Discover And See Some Of Our Projects Done
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            <ProjectItem className="md:col-span-1" />
            <ProjectItem className="md:col-span-1" />
            <ProjectItem className="md:col-span-1 md:col-start-2 md:row-start-2" />
            <ProjectItem className="md:col-span-1" />
            <ProjectItem className="md:col-span-1" />
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-b from-[#e6ffef] to-white relative">
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#080808" fillOpacity="1" d="M0,192L60,186.7C120,181,240,171,360,170.7C480,171,600,181,720,176C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-24 flex flex-col items-center">
          <div className="flex gap-4 mt-8">
            <button className="bg-tech-neon text-black px-6 py-3 rounded-full font-medium hover:shadow-[0_0_15px_rgba(0,255,140,0.5)] transition-all">
              SEE OUR WORK
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-50 transition-all">
              STACK EXCHANGE
            </button>
          </div>
        </div>
      </div>
      
      {/* Team Section with Image */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/ec8f4a41-7c5d-4d0e-9d33-f169823be8e8.png" 
              alt="Team collaboration"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
