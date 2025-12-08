import React from 'react';
import { OFFERINGS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Offerings: React.FC = () => {
  return (
    <section className="py-20 bg-brand-lightGreen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our AI Offerings</h2>
          <p className="text-brand-green font-semibold uppercase tracking-widest">AI for Enterprise-Grade Intelligence and Execution</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {OFFERINGS.map((offering, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-brand-green group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-green-50 text-brand-green rounded-lg group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <offering.icon size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px]">{offering.title}</h3>
              <p className="text-gray-600 mb-6 italic">{offering.summary}</p>
              
              <ul className="space-y-3">
                {offering.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;