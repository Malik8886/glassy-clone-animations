
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
      className="p-8 rounded-full bg-white opacity-0 translate-y-10 transition-all duration-700 flex items-center gap-6"
    >
      {image && (
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1">
        <div className="relative">
          <div className="absolute -top-10 -right-6 text-6xl text-gray-300">"</div>
          <p className="text-gray-700 mb-6">
            {testimonial}
          </p>
          <h4 className="font-bold text-2xl text-gray-800">
            {name}
          </h4>
          {position && (
            <p className="text-gray-600">
              {position}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
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
      testimonial: "Lorem ipsum dolor sit amet consectetur. Mauris aliquam urna diam vulputat sed. Tortor suspendisse pretium in hendrerit tellus. Morbi aenean diam magna a ornare integer sit eu. Quis enim mauris consequat sit augue."
    }
  ];

  return (
    <div className="py-20 relative bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className="mb-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="service-gradient font-medium text-xl mb-4">// Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            What They Say About Us?
          </h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
