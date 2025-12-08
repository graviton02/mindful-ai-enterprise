import React from 'react';
import { PiggyBank, Rocket, Layers, ShieldCheck, Blocks } from 'lucide-react';

const outcomes = [
  {
    barColor: 'from-brand-green to-emerald-400',
    bgGlow: 'group-hover:shadow-green-200',
    iconBg: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
    icon: PiggyBank,
    stat: '30–50%',
    title: 'Lower Cost of Building & Running AI',
    description: 'Reusable templates, pre-built pipelines, and optimized LLMOps for efficiency.',
    benefit: 'Lower build cost, reduced model spend, and no duplication.'
  },
  {
    barColor: 'from-slate-500 to-slate-400',
    bgGlow: 'group-hover:shadow-slate-200',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    icon: Rocket,
    stat: '40–60%',
    title: 'Faster Time-to-Value',
    description: 'Ready accelerators and 100+ enterprise-grade integrations.',
    benefit: 'AI solutions move from concept to production in weeks.'
  },
  {
    barColor: 'from-teal-500 to-cyan-400',
    bgGlow: 'group-hover:shadow-teal-200',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    icon: Layers,
    stat: 'Lower',
    title: 'Total Cost of Ownership (TCO)',
    description: 'Shared orchestration backbone and cloud-neutral architecture.',
    benefit: 'One AI foundation, simplifying operations.'
  },
  {
    barColor: 'from-emerald-500 to-green-400',
    bgGlow: 'group-hover:shadow-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    icon: ShieldCheck,
    stat: 'Reduced',
    title: 'Operational & Compliance Risk',
    description: 'Built-in Responsible AI guardrails and audit-ready governance.',
    benefit: 'AI that is secure, compliant, and ready for enterprise adoption.'
  },
  {
    barColor: 'from-brand-yellow to-amber-300',
    bgGlow: 'group-hover:shadow-yellow-200',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    icon: Blocks,
    stat: 'Future-Ready',
    title: 'Scalable AI Architecture',
    description: 'Extensible agent frameworks and full lifecycle management.',
    benefit: 'New use-cases plug in rapidly, keeping AI scalable and flexible.'
  }
];

const EnterpriseOutcomes: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-teal-500 to-brand-yellow"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">Measurable Impact</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Outcomes Enabled by Our{' '}
            <span className="text-brand-green">Mindful AI</span> Approach
          </h2>
          <p className="text-gray-600 text-lg">
            Real, measurable value delivered through scalable, governed, cost-efficient AI systems.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl ${outcome.bgGlow} transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1`}
              >
                {/* Gradient bar on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${outcome.barColor} rounded-t-2xl`}></div>

                {/* Icon */}
                <div className={`w-12 h-12 ${outcome.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={outcome.iconColor} size={24} />
                </div>

                {/* Stat Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 bg-gradient-to-r ${outcome.barColor} text-white shadow-sm`}>
                  {outcome.stat}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
                  {outcome.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {outcome.description}
                </p>

                {/* Benefit */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-500 text-sm italic leading-relaxed">
                    {outcome.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseOutcomes;
