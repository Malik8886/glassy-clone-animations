
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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
      className={`flex flex-col md:flex-row gap-6 md:gap-10 mb-16 opacity-0 translate-y-10 transition-all duration-700 card-hover ${theme === 'light' ? 'light' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`w-full md:w-1/3 glass-card overflow-hidden p-6 flex items-center justify-center aspect-square md:aspect-auto rounded-xl ${theme === 'light' ? 'light' : ''}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-contain max-h-52"
        />
      </div>
      
      <div className="w-full md:w-2/3 py-4">
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h3>
        
        <div className="flex items-start space-x-4">
          <div className={`mt-1 rounded-full p-1`}>
            <CheckCircle className="text-emerald-400 h-5 w-5" />
          </div>
          <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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

  const services = [
    {
      title: "IOT Service:",
      description: "Refer to a range of services designed to help businesses and organizations implement, manage, and optimize IoT-based systems and solutions",
      image: "https://cdn-icons-png.flaticon.com/512/9495/9495816.png"
    },
    {
      title: "AI Development",
      description: "Generative AI involves creating new content (text, images, videos) using models trained on large datasets.",
      image: "https://cdn-icons-png.flaticon.com/512/644/644667.png"
    },
    {
      title: "Web Development",
      description: "Web development is a fast-evolving field that combines creativity, technical expertise, and strategic thinking.",
      image: "https://cdn-icons-png.flaticon.com/512/2010/2010990.png"
    }
  ];

  return (
    <div className={`py-20 relative ${theme === 'light' ? 'light' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="service-gradient font-medium text-xl mb-4">// Services</h2>
          <h3 className={`text-3xl md:text-4xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Our Professional Services</h3>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
