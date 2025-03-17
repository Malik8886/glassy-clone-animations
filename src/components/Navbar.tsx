
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'py-3 bg-black/60 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-1">
          <span className="text-tech-purple font-bold text-2xl">LO</span>
          <span className="text-white font-bold text-2xl">GO</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <button className="hidden md:block btn-primary">
          LET'S TALK
        </button>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#" className="text-white py-2 px-4 hover:bg-white/5 rounded">Home</a>
          <a href="#about" className="text-white py-2 px-4 hover:bg-white/5 rounded">About</a>
          <a href="#services" className="text-white py-2 px-4 hover:bg-white/5 rounded">Skills</a>
          <a href="#projects" className="text-white py-2 px-4 hover:bg-white/5 rounded">Projects</a>
          <a href="#team" className="text-white py-2 px-4 hover:bg-white/5 rounded">Team</a>
          <a href="#contact" className="text-white py-2 px-4 hover:bg-white/5 rounded">Contact</a>
          <button className="btn-primary self-start my-2">LET'S TALK</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
