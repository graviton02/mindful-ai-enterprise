import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
                <div className="bg-white p-3 rounded-lg inline-block">
                  <img 
                    src="/logo.png" 
                    alt="Happiest Minds" 
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      // Fallback if local image is missing
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-gray-900">happiest minds</span>';
                    }}
                  />
                </div>
            </div>
            
            <div className="flex gap-8 text-sm font-semibold">
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">Industries</a>
                <a href="#" className="hover:text-white transition-colors">Solutions</a>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
           <p className="mb-4 md:mb-0">
             © {new Date().getFullYear()} Happiest Minds Technologies. All rights reserved.
           </p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;