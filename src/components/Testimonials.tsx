
import React, { useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  image?: string;
  position?: string;
}

const TestimonialCard = ({ name, testimonial, image, position }: TestimonialCardProps) => {
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
      className={`p-8 rounded-3xl bg-white/10 backdrop-blur-md opacity-0 translate-y-10 transition-all duration-700 ${
        theme === 'light' ? 'bg-white/80 shadow-lg' : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="flex gap-4 items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="text-6xl text-gray-300 dark:text-gray-600">"</div>
        </div>
        <div>
          <p className={`mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            {testimonial}
          </p>
          
          <div className="flex items-center gap-4">
            {image && (
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <h4 className={`font-bold text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                {name}
              </h4>
              {position && (
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {position}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "John Thomas",
      position: "CTO at TechFirm",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Mauris aliquam urna diam vulputate elit. Tortor suspendisse pretium in hendrerit tellus. Morbi aliquet diam magna a orare integer et eu. Quis enim mauris consequat et augue."
    }
  ];

  return (
    <div className={`py-20 relative ${theme === 'light' ? 'light' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="mb-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="service-gradient font-medium text-xl mb-4">// Testimonials</h2>
          <h3 className={`text-3xl md:text-4xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            What They Say About Us?
          </h3>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
