import React from 'react';
import { JOURNEY_STEPS } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 5-Step Mindful AI Enablement Journey</h2>
          <p className="text-gray-600">
            Every successful AI transformation follows a disciplined, enterprise-ready journey—grounded in governance, safety, engineering precision, and measurable business value. Mindful AI structures this journey end to end.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {JOURNEY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`relative flex flex-col md:flex-row gap-8 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Number Badge */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-10">
                    {step.id}
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm font-semibold text-brand-green mb-3 uppercase tracking-wider">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continuous Optimization Bar */}
          <div className="mt-20 bg-brand-dark text-white p-8 rounded-lg shadow-xl relative overflow-hidden border-t-4 border-brand-green">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-brand-green rounded-full flex-shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Continuous Optimization & Governance</h3>
                <p className="text-gray-400">
                  Continuous optimization and governance operate across all five stages—ensuring drift detection, performance monitoring, cost governance, security oversight, and trustworthy AI behavior throughout the lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;