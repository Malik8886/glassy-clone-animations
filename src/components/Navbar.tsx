
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      } ${theme === 'light' ? 'light' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-1">
          <span className={`${theme === 'light' ? 'text-tech-purple' : 'text-tech-purple'} font-bold text-2xl`}>LO</span>
          <span className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl`}>GO</span>
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
        
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-200'} transition-colors`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="btn-primary">
            LET'S TALK
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-200'} transition-colors`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full ${theme === 'light' ? 'bg-white/90' : 'bg-black/90'} backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#" className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} py-2 px-4 hover:bg-white/5 rounded`}>Home</a>
          <a href="#about" className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} py-2 px-4 hover:bg-white/5 rounded`}>About</a>
          <a href="#services" className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} py-2 px-4 hover:bg-white/5 rounded`}>Skills</a>
          <a href="#projects" className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} py-2 px-4 hover:bg-white/5 rounded`}>Projects</a>
          <a href="#team" className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} py-2 px-4 hover:bg-white/5 rounded`}>Team</a>
          <a href="#contact" className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} py-2 px-4 hover:bg-white/5 rounded`}>Contact</a>
          <button className="btn-primary self-start my-2">LET'S TALK</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
