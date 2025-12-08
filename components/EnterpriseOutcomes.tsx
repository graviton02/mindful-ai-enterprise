import React from 'react';

const outcomes = [
  {
    barColor: 'bg-brand-green',
    title: '30–50% Lower Cost of Building & Running AI',
    description: 'Reusable templates, pre-built pipelines, and optimized LLMOps for efficiency.',
    benefit: 'Lower build cost, reduced model spend, and no duplication.'
  },
  {
    barColor: 'bg-gray-400',
    title: '40–60% Faster Time-to-Value',
    description: 'Ready accelerators and 100+ enterprise-grade integrations.',
    benefit: 'AI solutions move from concept to production in weeks.'
  },
  {
    barColor: 'bg-teal-500',
    title: 'Lower Total Cost of Ownership (TCO)',
    description: 'Shared orchestration backbone and cloud-neutral architecture.',
    benefit: 'One AI foundation, simplifying operations.'
  },
  {
    barColor: 'bg-brand-green',
    title: 'Reduced Operational & Compliance Risk',
    description: 'Built-in Responsible AI guardrails and audit-ready governance.',
    benefit: 'AI that is secure, compliant, and ready for enterprise adoption.'
  },
  {
    barColor: 'bg-brand-yellow',
    title: 'Future-Ready, Scalable AI Architecture',
    description: 'Extensible agent frameworks and full lifecycle management.',
    benefit: 'New use-cases plug in rapidly, keeping AI scalable and flexible.'
  }
];

const EnterpriseOutcomes: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-1.5 h-16 bg-brand-green flex-shrink-0"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Enterprise Outcomes Enabled by Our Mindful AI Approach
              </h2>
            </div>
          </div>
          <p className="text-gray-600 italic ml-6">
            Real, measurable value delivered through scalable, governed, cost-efficient AI systems.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex flex-col">
              {/* Colored Bar */}
              <div className={`h-3 ${outcome.barColor} rounded-sm mb-6 w-3/4`}></div>

              {/* Title */}
              <h3 className="text-lg font-bold text-brand-green mb-4 leading-tight">
                {outcome.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {outcome.description}
              </p>

              {/* Benefit (Italic) */}
              <p className="text-gray-600 text-sm italic mt-auto leading-relaxed">
                {outcome.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Border */}
        <div className="mt-16 h-2 bg-gradient-to-r from-brand-green via-teal-500 to-brand-yellow rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default EnterpriseOutcomes;
