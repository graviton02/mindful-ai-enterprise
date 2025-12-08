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
            <div className="relative w-full max-w-lg aspect-square">
               {/* Abstract Tech Illustration placeholder - mimicking the "cloud/devices" graphic */}
               <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-xl">
                  {/* Central Cloud Node */}
                  <circle cx="200" cy="200" r="60" fill="white" stroke="#43A047" strokeWidth="2" />
                  <path d="M185,200 Q190,185 200,185 T215,200 T230,210 L170,210 Z" fill="#43A047" />
                  
                  {/* Orbiting Nodes */}
                  <g className="animate-spin-slow" style={{ transformOrigin: '200px 200px' }}>
                     <circle cx="200" cy="80" r="30" fill="#2E7D32" opacity="0.9" />
                     <path d="M200,140 L200,110" stroke="#43A047" strokeWidth="2" strokeDasharray="4 4" />
                     
                     <circle cx="320" cy="200" r="30" fill="#1565C0" opacity="0.9" />
                     <path d="M260,200 L290,200" stroke="#43A047" strokeWidth="2" strokeDasharray="4 4" />

                     <circle cx="200" cy="320" r="30" fill="#FFD600" opacity="0.9" />
                     <path d="M200,260 L200,290" stroke="#43A047" strokeWidth="2" strokeDasharray="4 4" />

                     <circle cx="80" cy="200" r="30" fill="#0288D1" opacity="0.9" />
                     <path d="M140,200 L110,200" stroke="#43A047" strokeWidth="2" strokeDasharray="4 4" />
                  </g>
                  
                  {/* Connecting Arc */}
                  <path d="M80,200 A120,120 0 0,1 320,200" fill="none" stroke="#E0F7FA" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
                  <path d="M80,200 A120,120 0 0,0 320,200" fill="none" stroke="#E0F7FA" strokeWidth="20" strokeLinecap="round" opacity="0.5" />

               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;