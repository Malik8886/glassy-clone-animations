
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'light' ? 'bg-gray-100' : 'bg-black'} py-16`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#" className="flex items-center gap-1 mb-6">
              <span className={`${theme === 'light' ? 'text-tech-purple' : 'text-tech-purple'} font-bold text-2xl`}>LO</span>
              <span className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl`}>GO</span>
            </a>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} max-w-xs`}>
              Managed by
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className={`${theme === 'light' ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="#" className={`${theme === 'light' ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`${theme === 'light' ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href="#" className={`${theme === 'light' ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={`${theme === 'light' ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Github size={20} />
              </a>
            </div>
            <p className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-500'} text-sm mt-8`}>
              © 2023. Techsolutions. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} font-semibold mb-4`}>Get Connected</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Collection</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Events</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Press</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Blog</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} font-semibold mb-4`}>Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Clients</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Media Kit</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Careers</a></li>
                <li><a href="#" className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'} transition-colors`}>Disclaimer</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} font-semibold mb-4`}>EN</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
