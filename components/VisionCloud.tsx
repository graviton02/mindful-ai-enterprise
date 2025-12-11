import React from 'react';

const VisionCloud: React.FC = () => {
  const principles = [
    { text: 'Governed Autonomy', color: 'text-brand-green' },
    { text: 'Human–AI Co-Decisioning', color: 'text-orange-500' },
    { text: 'Intelligence with Purpose', color: 'text-brand-darkGreen' },
    { text: 'Outcome-Driven Measurement', color: 'text-orange-500' },
    { text: 'Trust as the Foundation', color: 'text-brand-darkGreen' },
    { text: 'Embedded Intelligence in Everyday Work', color: 'text-orange-500' },
    { text: 'Resilient Data and Platform Foundations', color: 'text-brand-darkGreen' },
    { text: 'Enterprise-Wide Participation', color: 'text-brand-green' },
    { text: 'Continuous Learning and Adaptation', color: 'text-brand-darkGreen' },
    { text: 'Responsible Innovation', color: 'text-orange-500' },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guiding Principles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in intelligence with purpose. Our framework ensures every AI initiative contributes to a cohesive, trusted, and resilient ecosystem.
          </p>
        </div>

        {/* Grid of principles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-center min-h-[140px] hover:bg-gray-100 transition-colors duration-300 hover:shadow-md"
            >
              <p className={`text-center font-bold text-lg leading-tight ${principle.color}`}>
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionCloud;
