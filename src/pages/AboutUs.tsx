
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
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
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
            className="grid grid-cols-4 gap-6 py-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-gray-400 text-sm">Project Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-gray-400 text-sm">Our Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">135+</div>
              <div className="text-gray-400 text-sm">Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-gray-400 text-sm">Happy Client</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Story Section */}
      <div className="bg-black text-white pb-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={storyRef}
            className="relative bg-black pt-16 pb-24 px-8 md:px-12 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-[#9b87f5] font-medium mb-6">// Success Story</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Our Journey To Become The Leading AI And Web Development Agency.
            </h2>
            <div className="w-full h-px bg-gray-800 mb-8"></div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">2025 - Become Rapidly Growing</h3>
                <p className="text-gray-400">
                  Our journey to becoming a leading AI and Web Development Agency has been one of
                  passion, innovation, and relentless dedication. What started as a small team with a big vision
                  has grown into a trusted name in the industry, delivering cutting-edge digital solutions to
                  businesses worldwide.
                </p>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
                
                {/* Circle decoration */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-20 h-20 rounded-full bg-[#00ff8c] flex items-center justify-center text-xs text-black font-medium p-1">
                    <div className="w-full h-full rounded-full border border-black flex items-center justify-center">
                      <div className="text-center leading-tight">
                        RAPIDLY<br/>GROWING
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* White curve separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100S111.83,30,321.39,56.44Z" fill="white" opacity="0.1"></path>
          </svg>
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
                <div className="w-16 h-16 rounded-lg bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">End-To-End Expertise</h3>
                  <p className="text-gray-400">
                    From device integration to AI-driven analytics, we architect scalable
                    IoT ecosystems that grow with your business.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-lg bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Tailored Solutions</h3>
                  <p className="text-gray-400">
                    We design bespoke systems for predictive maintenance, energy
                    efficiency, or real-time insights—no cookie-cutter fixes.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-lg bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Unmatched Security & Compliance</h3>
                  <p className="text-gray-400">
                    Sleep easy with enterprise-grade encryption, zero-trust frameworks,
                    and adherence to global standards.
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
      <div className="bg-[#222222] text-white py-16 rounded-t-[40px]">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={testimonialsRef}
            className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="text-[#9b87f5] font-medium mb-4">// Testimonials</div>
            <h2 className="text-3xl font-bold mb-12">What They Say About Us?</h2>
            
            <div className="bg-white text-black rounded-3xl p-8 relative flex gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Client" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  "Outstanding service and exceptional results! The team developed a sleek, responsive website for our business, tailored perfectly to our needs. Their attention to detail, fast turnaround."
                </p>
                <div className="font-bold">— Sarah L., Operations Manager</div>
                <div className="text-gray-500">At DataPro</div>
              </div>
              <div className="absolute top-6 right-6 text-gray-300 text-6xl font-serif">"</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
