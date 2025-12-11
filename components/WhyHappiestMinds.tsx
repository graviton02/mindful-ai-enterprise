import React from 'react';
import { Settings, Users, Zap, Server, Shield, Building2, UserCheck, Brain } from 'lucide-react';

const WhyHappiestMinds: React.FC = () => {
  const capabilities = [
    {
      icon: Settings,
      title: 'Mindful AI Engineering',
      description: 'AI that aligns with your business - not hype. Every solution is built with purpose, people-centric design, and measurable value.',
    },
    {
      icon: Users,
      title: 'Deep GenAI & Agentic AI Specialization',
      description: '400+ specialists trained on LLM/Agentic architectures, 20+ live production deployments, and 8+ reusable AI accelerators delivered across industries.',
    },
    {
      icon: Zap,
      title: 'Reusable Frameworks & Faster Time-to-Market',
      description: '30% faster rollout using pre-built patterns, orchestration layers, and automation blueprints - accelerating PoCs and scaling with confidence.',
    },
    {
      icon: Server,
      title: 'Enterprise-Grade Platforms',
      description: 'Built on Microsoft Semantic Kernel, Azure AI, AWS Bedrock, LangGraph, and leading open-source agent frameworks. Secure, scalable & cloud-agnostic.',
    },
    {
      icon: Shield,
      title: 'Human-in-the-Loop Governance',
      description: 'Auditability, safe failovers, policy-led guardrails, and explainability built into every system to ensure safe autonomy at scale.',
    },
  ];

  const stats = [
    {
      icon: Building2,
      number: '6,500+',
      label: 'Happiest Minds across 43 global offices',
    },
    {
      icon: UserCheck,
      number: '280+',
      label: 'customers, including 85+ billion-dollar enterprises',
    },
    {
      icon: Brain,
      number: '40+',
      label: 'GenAI & Agentic AI projects delivered across BFSI, Retail, Manufacturing, Healthcare & EdTech',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-1.5 h-16 bg-brand-green rounded-full"></div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">What Makes Happiest Minds the Right Partner</h2>
              <p className="text-lg text-gray-600 italic">We're not just another AI vendor - we're your Enterprise AI transformation partner.</p>
            </div>
          </div>
        </div>

        {/* What It Means for You */}
        <div className="bg-gray-100 rounded-lg px-6 py-3 mb-12 text-center">
          <h3 className="text-lg font-semibold text-gray-800">What It Means for You</h3>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Icon with connecting dots */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-brand-green flex items-center justify-center bg-white group-hover:bg-brand-lightGreen transition-colors">
                  <cap.icon className="w-7 h-7 text-brand-green" />
                </div>
                {/* Connecting dots */}
                {index < capabilities.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 left-full transform -translate-y-1/2 items-center">
                    <div className="flex gap-1.5 px-2">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    </div>
                  </div>
                )}
              </div>

              <h4 className="text-sm font-bold text-gray-900 mb-3 leading-tight">{cap.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Backed by Experience Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-brand-green">Backed by Experience, Scale & Trust</h3>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-brand-green to-brand-darkGreen rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-bold">{stat.number}</span>
                  <p className="text-sm text-white/90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHappiestMinds;
