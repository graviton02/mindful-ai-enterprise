import React from 'react';
import { JOURNEY_STEPS } from '../constants';

interface JourneyProps {
  startStep?: number;
  endStep?: number;
  showHeader?: boolean;
}

const Journey: React.FC<JourneyProps> = ({ startStep = 1, endStep = 6, showHeader = true }) => {
  const filteredSteps = JOURNEY_STEPS.filter(step => step.id >= startStep && step.id <= endStep);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {showHeader && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 6-Step Mindful AI Enablement Journey</h2>
            <p className="text-gray-600">
              Every successful AI transformation follows a disciplined, enterprise-ready journey—grounded in governance, safety, engineering precision, and measurable business value. Mindful AI structures this journey end to end.
            </p>
          </div>
        )}

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {filteredSteps.map((step) => {
              const isEven = (step.id - 1) % 2 === 0;
              const IconComponent = step.icon;
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
                    <div className={`flex items-center gap-3 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className={`w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center ${isEven ? 'md:order-2' : ''}`}>
                        <IconComponent className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm font-semibold text-brand-green mb-3 uppercase tracking-wider">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
