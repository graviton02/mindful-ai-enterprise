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
  Lightbulb,
  BarChart3,
  Bot,
  Layers,
  Globe,
  Sparkles,
  Server
} from 'lucide-react';

const MindfulOperations: React.FC = () => {
  const solutionItems = [
    { icon: Cloud, label: 'Cloud-Native AI' },
    { icon: Layers, label: 'Foundation Models' },
    { icon: Settings, label: 'Custom AI Models' },
    { icon: Bot, label: 'Agentic AI' },
    { icon: Cpu, label: 'Cognitive APIs' },
    { icon: Server, label: 'Edge AI' },
    { icon: Sparkles, label: 'Generative AI' },
    { icon: Globe, label: 'AI Platforms' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Mindful & Intelligent Enterprise AI Operations</h2>
        </div>

        {/* Three Columns */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">

          {/* Column 1: The Challenge */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-green to-brand-darkGreen p-5 text-center relative">
              <div className="flex justify-center mb-2">
                <BarChart3 className="w-8 h-8 text-white/80" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                The Challenge: Fragmented<br/>Data and Silos
              </h3>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-center">
              {/* Gray bars with labels inside - top section */}
              <div className="flex gap-2 mb-3">
                <div className="flex-1 h-24 bg-gray-300 rounded-lg flex items-center justify-center p-3">
                  <span className="text-xs text-gray-700 font-semibold text-center leading-tight">Enterprise Knowledge Sources</span>
                </div>
                <div className="flex-1 h-24 bg-gray-400 rounded-lg flex items-center justify-center p-3">
                  <span className="text-xs text-gray-700 font-semibold text-center leading-tight">Operational Data Sources</span>
                </div>
                <div className="flex-1 h-24 bg-gray-300 rounded-lg flex items-center justify-center p-3">
                  <span className="text-xs text-gray-700 font-semibold text-center leading-tight">Specialized Data Repositories</span>
                </div>
              </div>

              {/* System boxes - equal width grid */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="bg-brand-green text-white text-center py-4 rounded-lg font-bold text-sm">
                  ERP
                </div>
                <div className="bg-brand-green text-white text-center py-4 rounded-lg font-bold text-sm">
                  ITSM
                </div>
                <div className="bg-brand-green text-white text-center py-4 rounded-lg font-bold text-sm">
                  HRIS / HCM
                </div>
                <div className="bg-brand-green text-white text-center py-4 rounded-lg font-bold text-sm">
                  CRM
                </div>
              </div>

              {/* Arrow pointing down to Unified by AI Fabric */}
              <div className="flex flex-col items-center gap-2 mb-3">
                <span className="text-yellow-500 text-2xl">↓</span>
                <div className="flex items-center gap-3 bg-yellow-50 px-6 py-4 rounded-xl border border-yellow-200 w-full justify-center">
                  <Database className="w-12 h-12 text-yellow-500" />
                  <span className="text-base text-gray-700 font-bold">Unified by AI Fabric</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="text-sm text-gray-700 space-y-2 pt-3 border-t border-gray-100 mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span>Disconnected systems & data sources.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span>Manual, inefficient workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span>Limited visibility & insights.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: The Solution */}
          <div className="bg-white rounded-2xl border-2 border-brand-green overflow-hidden shadow-sm flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-green to-teal-500 p-5 text-center relative">
              <div className="flex justify-center mb-2">
                <Lightbulb className="w-8 h-8 text-white/80" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                The Solution: Unified AI<br/>Operating Fabric
              </h3>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Grid of solution items */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {solutionItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-semibold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Enables text */}
              <div className="flex items-center gap-3 bg-green-50 px-6 py-4 rounded-xl border border-green-200 w-full justify-center mb-4">
                <Workflow className="w-10 h-10 text-brand-green" />
                <span className="text-base text-brand-green font-bold">Enables Intelligent Operations</span>
              </div>

              {/* Bullet points */}
              <ul className="text-sm text-gray-700 space-y-2 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span>Integrates all data & functions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span>Orchestrates intelligent workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span>Provides governance & scalability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: The Outcome */}
          <div className="bg-white rounded-2xl border-2 border-brand-green overflow-hidden shadow-sm flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-green to-teal-500 p-5 text-center relative">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-white/80" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                The Outcome: One Mindful and<br/>Intelligent Enterprise Operations
              </h3>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              {/* Circular diagram - Two columns with center */}
              <div className="flex items-center justify-between gap-4 flex-1">
                {/* Left column */}
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mb-2">
                      <Workflow className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium leading-tight">AI-Orchestrated<br/>Workflows</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium leading-tight">Multi-Agent<br/>Collaboration</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mb-2">
                      <Eye className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium leading-tight">Real Time Clarity<br/>and Insight</span>
                  </div>
                </div>

                {/* Center circle */}
                <div className="flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full border-4 border-yellow-400 bg-gradient-to-br from-brand-green to-brand-darkGreen flex items-center justify-center shadow-lg">
                    <div className="text-center text-white text-xs font-bold leading-tight">
                      Mindful<br/>and<br/>Intelligent<br/>Operations
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium leading-tight">Policy-Driven<br/>Autonomy</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium leading-tight">Human-Looped<br/>Governance</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium leading-tight">Continuous<br/>Improvement</span>
                  </div>
                </div>
              </div>

              {/* Key definitions */}
              <ul className="text-sm text-gray-700 space-y-2 mt-6 pt-4 border-t border-gray-100">
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span><strong className="text-gray-900">Mindful:</strong> Ethical, trusted, high-quality data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
                  <span><strong className="text-gray-900">Intelligent:</strong> Insight-driven, secure, KPI-linked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 font-bold">•</span>
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
