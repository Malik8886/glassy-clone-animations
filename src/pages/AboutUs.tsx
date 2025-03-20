
import React, { useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Wand2, Layers } from 'lucide-react';

const AboutUs = () => {
  const { theme } = useTheme();
  
  // Refs for animation
  const statsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const refs = [statsRef, storyRef, whyChooseRef, testimonialsRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'light' : ''}`}>
      <Navbar />
      
      {/* Hero Section with Purple Background */}
      <div className="bg-[#6E59A5] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            ABOUT US
          </h1>
        </div>
        
        {/* Background curves */}
        <div className="absolute top-0 right-0 w-[40%] h-full">
          <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0,800 C100,600 300,400 200,0 L0,0 Z" 
              fill="#9b87f5" 
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="text-[#9b87f5] font-medium">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold">
                We Are The Best Solution For You.
              </h2>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
              
              {/* Glowing circle decoration */}
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#9b87f5]/20 blur-xl"></div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-400 text-sm">Project Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-400 text-sm">Our Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">135+</div>
              <div className="text-gray-400 text-sm">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-400 text-sm">Happy Client</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Story Section */}
      <div className="bg-black text-white pb-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={storyRef}
            className="relative bg-white rounded-t-[60px] pt-16 pb-24 px-8 md:px-12 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-[#9b87f5] font-medium mb-6">// Success Story</div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Our Journey To Become The Leading AI And Web Development Agency.
            </h2>
            <div className="w-full h-px bg-gray-200 mb-8"></div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">2025 - Become Rapidly Growing</h3>
                <p className="text-gray-700">
                  Our journey to becoming a leader in the AI and Development Agency has been one of
                  dedication, innovation, and continuous growth. Starting as a small team with a big vision,
                  we have grown from a talented team in the industry, delivering cutting-edge solutions to
                  businesses worldwide.
                </p>
              </div>
            </div>
            
            {/* Green circle decoration */}
            <div className="absolute bottom-12 right-12">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-pulse-slow"></div>
                <div className="absolute inset-2 rounded-full border-2 border-emerald-400 opacity-50"></div>
                <div className="absolute inset-4 rounded-full border-2 border-emerald-400 opacity-30"></div>
                <div className="absolute inset-6 rounded-full border-2 border-emerald-400 opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-black text-white py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={whyChooseRef}
            className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">End-To-End Expertise</h3>
                  <p className="text-gray-400">
                    From strategy development to AI implementation, we combine decades of expertise with your business goals.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Tailored Solutions</h3>
                  <p className="text-gray-400">
                    We design bespoke solutions for specific marketplace, strategy, or quality attributes that help you exceed customer needs.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Unmatched Security & Compliance</h3>
                  <p className="text-gray-400">
                    Military-level development standards, end-to-end encryptions, and meticulous testing at global standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glowing circle decorations */}
        <div className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full bg-[#9b87f5]/10 blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-[300px] h-[300px] rounded-full bg-[#9b87f5]/10 blur-xl"></div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={testimonialsRef}
            className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-[#9b87f5] font-medium mb-4">// Testimonials</div>
            <h2 className="text-3xl font-bold mb-12">What They Say About Us?</h2>
            
            <div className="bg-white text-black rounded-xl p-8 relative">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    "Extraordinary service, extraordinary results! Our project was delivered with surgical precision and attention to detail. Their talent in our business sector is top-notch. They listened, advised, and executed flawlessly."
                  </p>
                  <div className="font-bold">— Sarah L. Operations Manager</div>
                  <div className="text-gray-500">At DataPro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
