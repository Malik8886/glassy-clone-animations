
import React, { useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface IndustryCardProps {
  image: string;
  index: number;
  title: string;
}

const IndustryCard = ({ image, index, title }: IndustryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
      className={`overflow-hidden rounded-lg opacity-0 translate-y-10 transition-all duration-700 card-hover ${theme === 'light' ? 'light' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={`Industry ${index}`}
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className={`p-4 text-xl font-bold ${theme === 'light' ? 'text-white' : 'text-white'}`}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const industries = [
    {
      title: "Fintech Solutions",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032"
    },
    {
      title: "Healthcare Technology",
      image: "https://images.unsplash.com/photo-1611266359650-bb0805095c3b?q=80&w=1974"
    },
    {
      title: "Smart Manufacturing",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1972"
    },
    {
      title: "Sustainable Energy",
      image: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className={`py-20 ${theme === 'light' ? 'bg-gradient-to-br from-tech-purple/20 to-emerald-400/30 light' : 'bg-gradient-to-br from-emerald-500/60 to-green-400/60'} opacity-0 transition-opacity duration-1000`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-black'} mb-4`}>Industries We Empower</h2>
          <p className={`${theme === 'light' ? 'text-gray-700' : 'text-black/80'} text-lg max-w-2xl mx-auto`}>
            We provide cutting-edge solutions to transform and optimize various industries:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              image={industry.image} 
              index={index} 
              title={industry.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
