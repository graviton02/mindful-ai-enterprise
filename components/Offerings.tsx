import React from 'react';
import { Brain, Database, MessageSquare, Bot, Cog } from 'lucide-react';

const Offerings: React.FC = () => {
  const architectures = [
    {
      number: '01',
      icon: Cog,
      title: 'Intelligent Automation',
      description: 'Forms the execution backbone for AI by combining RPA, Process Intelligence, Rules, and Embedded AI.',
      accentColor: 'blue',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500',
      lineColor: 'bg-blue-500',
    },
    {
      number: '02',
      icon: Brain,
      title: 'Predictive, Prescriptive & Decision Intelligence',
      description: 'LLM + ML + rules + agentic reasoning = enterprise-grade decisions.',
      accentColor: 'yellow',
      borderColor: 'border-yellow-400',
      bgColor: 'bg-yellow-400',
      lineColor: 'bg-yellow-500',
    },
    {
      number: '03',
      icon: Database,
      title: 'RAG-Powered Enterprise Intelligence',
      description: 'Turn your enterprise knowledge into a live, query-ready intelligence fabric.',
      accentColor: 'green',
      borderColor: 'border-brand-green',
      bgColor: 'bg-brand-green',
      lineColor: 'bg-brand-green',
    },
    {
      number: '04',
      icon: MessageSquare,
      title: 'GenAI-Powered Copilots',
      description: 'Role-based, workflow-embedded assistants that amplify productivity across the enterprise.',
      accentColor: 'gray',
      borderColor: 'border-gray-400',
      bgColor: 'bg-gray-400',
      lineColor: 'bg-gray-400',
    },
    {
      number: '05',
      icon: Bot,
      title: 'Agentic AI',
      description: 'Multi-agent systems that coordinate tasks, tools, and decisions with guardrails.',
      accentColor: 'teal',
      borderColor: 'border-teal-700',
      bgColor: 'bg-teal-700',
      lineColor: 'bg-teal-700',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Secure & Outcome-Engineered AI Systems</h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <p className="text-brand-green font-semibold text-lg">Our Five Foundational AI Architectures</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
          {architectures.map((arch, index) => (
            <div key={index} className="relative h-full">
              {/* Corner accent - top left */}
              <div className={`absolute -top-2 -left-2 w-12 h-12 ${arch.bgColor} transform rotate-0 z-0`}
                   style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

              {/* Main card */}
              <div className={`relative bg-white rounded-lg border-2 ${arch.borderColor} shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden z-10 h-full flex flex-col`}>
                {/* Card content */}
                <div className="p-6 pt-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <arch.icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center font-bold text-gray-900 text-lg mb-4 min-h-[72px] flex items-center justify-center">
                    {arch.title}
                  </h3>

                  {/* Divider line */}
                  <div className={`w-full h-1 ${arch.lineColor} mb-4`} />

                  {/* Description */}
                  <p className="text-center text-gray-600 text-sm leading-relaxed flex-1">
                    {arch.description}
                  </p>
                </div>

                {/* Bottom corner with number */}
                <div className="relative h-12 mt-auto">
                  <div className={`absolute bottom-0 right-0 w-16 h-16 ${arch.bgColor}`}
                       style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
                  <span className="absolute bottom-2 right-3 text-white font-bold text-lg z-10">
                    {arch.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
