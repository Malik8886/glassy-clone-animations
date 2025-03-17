
import React, { useRef, useEffect } from 'react';

interface IndustryCardProps {
  image: string;
  index: number;
}

const IndustryCard = ({ image, index }: IndustryCardProps) => {
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
      className="overflow-hidden rounded-lg opacity-0 translate-y-10 transition-all duration-700 hover:shadow-lg hover:shadow-tech-neon/20"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <img 
        src={image} 
        alt={`Industry ${index}`}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032",
    "https://images.unsplash.com/photo-1611266359650-bb0805095c3b?q=80&w=1974",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1972",
    "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974"
  ];

  return (
    <div 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-emerald-500 to-green-400 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Industries We Empower</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            We provide cutting-edge solutions to transform and optimize various industries:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((image, index) => (
            <IndustryCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
