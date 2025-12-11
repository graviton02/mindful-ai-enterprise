import React from 'react';

const ApproachSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach to Mindful and Intelligent Enterprise AI</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <img
            src="/our-approach.png"
            alt="Our Approach to Mindful and Intelligent Enterprise AI - 5 step process from AI Discovery and Blueprinting through Trusted Data Foundations, Unified Intelligence Infrastructure, Secure and Outcome Engineered AI System, to Enterprise Adoption and Value Realization"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
