import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Industries', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Happiest Minds" 
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  // Fallback if local image is missing
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold text-gray-800">happiest minds</span>';
                }}
              />
            </div>
            <div className="mt-1 text-[10px] text-gray-600 font-medium tracking-wide border-t border-gray-200 pt-1 w-full pl-1">
              Born <span className="font-bold text-black">Digital</span> . Born <span className="font-bold text-black">Agile</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 text-sm font-medium hover:text-brand-green transition-colors flex items-center gap-1"
              >
                {link.name}
                {['Services', 'Industries', 'Solutions', 'Resources', 'About Us'].includes(link.name) && (
                  <ChevronDown size={14} className="mt-0.5" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-brand-green"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 lg:hidden flex flex-col gap-4 border-t border-gray-100">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-800 font-medium hover:text-brand-green flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {['Services', 'Industries', 'Solutions', 'Resources', 'About Us'].includes(link.name) && (
                  <ChevronDown size={16} />
              )}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;