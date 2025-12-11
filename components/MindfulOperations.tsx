import React from 'react';
import {
  Database,
  Cloud,
  Brain,
  Cpu,
  Network,
  Workflow,
  Settings,
  Users,
  Shield,
  Eye,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

const MindfulOperations: React.FC = () => {
  const solutionItems = [
    { icon: Cloud, label: 'Cloud-Native AI' },
    { icon: Brain, label: 'Foundation Models' },
    { icon: Cpu, label: 'Custom AI Models' },
    { icon: Network, label: 'Agentic AI' },
    { icon: Settings, label: 'Cognitive APIs' },
    { icon: Workflow, label: 'Edge AI' },
    { icon: Lightbulb, label: 'Generative AI' },
    { icon: Database, label: 'AI Platforms' },
  ];

  const outcomeItems = [
    { icon: Workflow, label: 'AI-Orchestrated Workflows', position: 'top-left' },
    { icon: Shield, label: 'Policy-Driven Autonomy', position: 'top-right' },
    { icon: Users, label: 'Multi-Agent Collaboration', position: 'left' },
    { icon: Users, label: 'Human-Looped Governance', position: 'right' },
    { icon: Eye, label: 'Real Time Clarity and Insight', position: 'bottom-left' },
    { icon: TrendingUp, label: 'Continuous Improvement', position: 'bottom-right' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Mindful & Intelligent Enterprise AI Operations</h2>
        </div>

        {/* Three Columns */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* Column 1: The Challenge */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-green to-brand-darkGreen p-4 text-center relative">
              <div className="absolute top-3 right-3">
                <Settings className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-white font-bold text-lg">The Challenge: Fragmented</h3>
              <p className="text-white font-bold text-lg">Data and Silos</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex gap-4 mb-6">
                {/* Gray bars representing data silos */}
                <div className="flex items-end gap-1">
                  <div className="w-8 h-32 bg-gray-300 rounded-t-sm relative">
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-gray-600 whitespace-nowrap origin-center">Enterprise Knowledge Sources</span>
                  </div>
                  <div className="w-8 h-28 bg-gray-400 rounded-t-sm relative">
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-gray-600 whitespace-nowrap origin-center">Operational Data Sources</span>
                  </div>
                  <div className="w-8 h-36 bg-gray-300 rounded-t-sm relative">
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-gray-600 whitespace-nowrap origin-center">Specialized Data Repositories</span>
                  </div>
                </div>

                {/* System boxes */}
                <div className="flex flex-col gap-2 flex-1">
                  {['ERP', 'ITSM', 'HRIS / HCM', 'CRM'].map((system) => (
                    <div key={system} className="bg-brand-green text-white text-center py-2 px-4 rounded font-semibold text-sm">
                      {system}
                    </div>
                  ))}
                </div>

                {/* Arrow and Database */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="text-xs text-gray-600 text-center">Unified<br/>by AI<br/>Fabric</div>
                  <Database className="w-10 h-10 text-gray-800" />
                </div>
              </div>

              {/* Bullet points */}
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Disconnected systems & data sources.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Manual, inefficient workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Limited visibility & insights.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: The Solution */}
          <div className="bg-white rounded-2xl border-2 border-brand-green overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-400 to-teal-500 p-4 text-center relative">
              <div className="absolute top-3 right-3">
                <Lightbulb className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-white font-bold text-lg">The Solution: Unified AI</h3>
              <p className="text-white font-bold text-lg">Operating Fabric</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Grid of solution items */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {solutionItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span className="text-xs text-gray-700 text-center font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="text-center text-brand-green font-semibold text-sm mb-4">
                Enables<br/>Intelligent<br/>Operations →
              </div>

              {/* Bullet points */}
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Integrates all data & functions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Orchestrates intelligent workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Provides governance & scalability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: The Outcome */}
          <div className="bg-white rounded-2xl border-2 border-brand-green overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-green to-teal-500 p-4 text-center relative">
              <div className="absolute top-3 right-3">
                <TrendingUp className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-white font-bold text-lg">The Outcome: One Mindful and</h3>
              <p className="text-white font-bold text-lg">Intelligent Enterprise Operations</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Circular diagram */}
              <div className="relative w-full h-48 mb-6">
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-yellow-400 bg-gradient-to-br from-brand-green to-brand-darkGreen flex items-center justify-center">
                  <div className="text-center text-white text-xs font-semibold leading-tight">
                    Mindful<br/>and<br/>Intelligent<br/>Operations
                  </div>
                </div>

                {/* Surrounding items */}
                <div className="absolute top-0 left-4 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <Workflow className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-gray-600 text-center w-16">AI-Orchestrated Workflows</span>
                </div>

                <div className="absolute top-0 right-4 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <Shield className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-gray-600 text-center w-16">Policy-Driven Autonomy</span>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-gray-600 text-center w-16">Multi-Agent Collaboration</span>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-gray-600 text-center w-16">Human-Looped Governance</span>
                </div>

                <div className="absolute bottom-0 left-4 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <Eye className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-gray-600 text-center w-16">Real Time Clarity and Insight</span>
                </div>

                <div className="absolute bottom-0 right-4 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-gray-600 text-center w-16">Continuous Improvement</span>
                </div>
              </div>

              {/* Key definitions */}
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span><strong className="text-gray-900">Mindful:</strong> Ethical, trusted, high-quality data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span><strong className="text-gray-900">Intelligent:</strong> Insight-driven, secure, KPI-linked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span><strong className="text-gray-900">Business Value:</strong> Faster decisions, personalized experiences, generative design.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulOperations;
