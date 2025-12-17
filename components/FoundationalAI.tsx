import React from 'react';
import {
  Eye,
  Mic,
  MessageSquare,
  Radio,
  Cpu,
  Clock,
  Gauge,
  Settings,
  Shield,
  Scale,
  Server,
  Database,
  Globe,
  GitMerge,
  Boxes,
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';

const FoundationalAI: React.FC = () => {
  const aiTypes = [
    { title: 'Vision AI', icon: Eye, color: 'bg-green-100', iconColor: 'text-green-600' },
    { title: 'Audio & Speech AI', icon: Mic, color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
    { title: 'Language AI', icon: MessageSquare, color: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    { title: 'Sensor & Signal AI', icon: Radio, color: 'bg-lime-100', iconColor: 'text-lime-600' },
  ];

  const edgeFeatures = [
    { label: 'Real-time Processing', icon: Clock },
    { label: 'Low Latency', icon: Gauge },
    { label: 'Edge Optimization', icon: Settings },
    { label: 'Data Privacy', icon: Shield },
  ];

  const cloudFeatures = [
    { label: 'Scalability', icon: Scale },
    { label: 'High Compute Power', icon: Server },
    { label: 'Large-scale Data Storage', icon: Database },
    { label: 'Global Access', icon: Globe },
  ];

  const hybridFeatures = [
    { label: 'Hybrid Processing', icon: GitMerge },
    { label: 'Flexible Deployment', icon: Boxes },
    { label: 'Optimized Resource Use', icon: SlidersHorizontal },
    { label: 'Seamless Sync', icon: RefreshCw },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Foundational AI Technologies
          </h2>
          <p className="text-xl text-gray-600">
            Building Blocks for Intelligent Systems
          </p>
        </div>

        {/* Multimodal AI Section */}
        <div className="bg-brand-lightGreen rounded-2xl p-8 mb-8 border border-green-200">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-brand-green flex items-center justify-center">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Multimodal AI
              <span className="block text-sm font-normal text-gray-600 mt-1">
                Fusing Vision, Audio, Language, and Signals
              </span>
            </h3>
          </div>
        </div>

        {/* Four AI Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {aiTypes.map((ai, index) => (
            <div
              key={index}
              className={`${ai.color} rounded-xl p-6 text-center transform hover:scale-105 transition-transform shadow-sm border border-gray-100`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ai.icon className={`w-8 h-8 ${ai.iconColor}`} />
              </div>
              <h4 className="text-gray-800 font-bold text-lg">
                {index + 1}. {ai.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Deployment Section */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-brand-green py-4 px-6 text-center">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              Enabled at: Edge, Cloud, and Edge-Cloud
            </h3>
          </div>

          {/* Deployment Types */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Edge Deployment */}
            <div className="p-6">
              <h4 className="text-gray-900 font-bold text-center mb-4">Edge Deployment</h4>
              <div className="grid grid-cols-2 gap-3">
                {edgeFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                      <feature.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-gray-600 text-xs">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Deployment */}
            <div className="p-6">
              <h4 className="text-gray-900 font-bold text-center mb-4">Cloud Deployment</h4>
              <div className="grid grid-cols-2 gap-3">
                {cloudFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                      <feature.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-gray-600 text-xs">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Edge-Cloud Hybrid */}
            <div className="p-6">
              <h4 className="text-gray-900 font-bold text-center mb-4">Edge-Cloud (Hybrid)</h4>
              <div className="grid grid-cols-2 gap-3">
                {hybridFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                      <feature.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-gray-600 text-xs">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationalAI;
