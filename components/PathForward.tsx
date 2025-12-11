import React from 'react';
import { Search, BookOpen, Route, Rocket, TrendingUp } from 'lucide-react';

const PathForward: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Discovery & Alignment',
      description: 'A short session to validate priorities, business goals, and the maturity level required to activate GenAI and Agentic AI programs.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
    },
    {
      number: 2,
      icon: BookOpen,
      title: 'Use Case & Data Readiness Workshop',
      description: 'Deep-dive on high-value use cases, data dependencies, governance requirements, and deployment constraints.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      number: 3,
      icon: Route,
      title: 'Pilot Pathway Selection',
      description: 'Agreement on one priority pilot for Copilot, RAG Intelligence, or Agentic automation with clear success metrics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      number: 4,
      icon: Rocket,
      title: '4-6 Week Fast PoC Execution',
      description: 'A fixed-scope implementation cycle to validate feasibility, business value, and integration requirements.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    },
    {
      number: 5,
      icon: TrendingUp,
      title: 'Scale-Up Plan',
      description: 'Roadmap for enterprise deployment, governance setup, cross-functional rollout, and required accelerators.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-1.5 h-20 bg-brand-green rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">The Path Forward: From Exploration to Enterprise-Scale AI</h2>
              <p className="text-lg text-brand-green italic max-w-4xl">
                A structured, outcome-led engagement approach that aligns strategy, data, and execution - ensuring every step strengthens your readiness for AI
              </p>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Number Badge */}
              <div className="flex justify-center -mt-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-darkGreen text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-3 text-center">
                <h3 className="text-sm font-bold text-brand-green mb-3 leading-tight min-h-[40px] flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-brand-green italic font-medium">
            This process is not about rushing into AI - it's about building the clarity, confidence, and foundation needed to scale it responsibly and repeatedly across the enterprise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PathForward;
