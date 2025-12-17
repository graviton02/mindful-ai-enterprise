import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-hero-gradient pt-16 pb-24 overflow-hidden border-b border-gray-100">
      {/* Abstract Background Tech Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <svg className="absolute top-[-20%] left-[-10%] w-[60%] h-[160%] text-blue-100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
             <div className="text-sm font-semibold text-gray-500 mb-6 tracking-wide">
              Services &gt; <span className="text-brand-dark">Mindful AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-brand-dark">
              {HERO_TITLE}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {HERO_SUBTITLE}
            </p>
          </div>

          {/* Illustration/Graphic */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src="/hero-ai.jpg"
                alt="AI robot hand with chip"
                className="w-full h-auto filter drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;