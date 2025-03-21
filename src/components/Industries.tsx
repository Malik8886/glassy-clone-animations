
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
      className="overflow-hidden rounded-lg opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={`Industry ${index}`}
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
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
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const industries = [
    {
      title: "Sustainable Agriculture",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032"
    },
    {
      title: "Automotive Technology",
      image: "https://images.unsplash.com/photo-1611266359650-bb0805095c3b?q=80&w=1974"
    },
    {
      title: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1972"
    },
    {
      title: "Smart Cities",
      image: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="py-20 bg-purple-900 opacity-0 transition-opacity duration-1000 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="text-center mb-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Empower</h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
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
        
        <div className="mt-12 text-center">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full uppercase tracking-wide text-sm">
            Get in touch with us
          </button>
        </div>
      </div>
      
      {/* Large circular decorations in the background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-800/50"></div>
      <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] rounded-full bg-purple-800/50"></div>
    </div>
  );
};

export default Industries;
