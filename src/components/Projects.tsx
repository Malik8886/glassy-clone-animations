
import React, { useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  delay?: number;
}

const ProjectCard = ({ image, title, category, delay = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
        <div className="h-60 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <div className="p-6">
          <span className="service-gradient text-sm font-medium">{category}</span>
          <h3 className="text-white text-xl font-bold mt-2">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  // Sample project data
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "AI Data Analytics",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Smart Home System",
      category: "IoT Solution",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Cloud Migration",
      category: "Enterprise Solution",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="py-20 relative bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-500/20 filter blur-3xl -mr-48 -mb-48 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-800/20 filter blur-3xl -ml-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={titleRef}
          className="mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="service-gradient font-medium text-xl mb-4">// Project</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Discover And See Some Of Our Projects Done
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Custom grid layout to match the image pattern */}
          <div className="md:col-span-1">
            <ProjectCard 
              image={projects[0].image}
              title={projects[0].title}
              category={projects[0].category}
              delay={100}
            />
          </div>
          <div className="md:col-span-1">
            <ProjectCard 
              image={projects[1].image}
              title={projects[1].title}
              category={projects[1].category}
              delay={200}
            />
          </div>
          <div className="md:col-span-1 md:col-start-2 md:row-start-2">
            <ProjectCard 
              image={projects[2].image}
              title={projects[2].title}
              category={projects[2].category}
              delay={300}
            />
          </div>
          <div className="md:col-span-1 md:col-start-1 md:row-start-3">
            <ProjectCard 
              image={projects[3].image}
              title={projects[3].title}
              category={projects[3].category}
              delay={400}
            />
          </div>
          <div className="md:col-span-1 md:col-start-3 md:row-start-3">
            <ProjectCard 
              image={projects[4].image}
              title={projects[4].title}
              category={projects[4].category}
              delay={500}
            />
          </div>
        </div>
        
        <div className="mt-20 flex justify-center items-center gap-4">
          <a href="#" className="btn-primary">SEE OUR WORK</a>
          <a href="#" className="btn-secondary">STACK EXCHANGE</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
