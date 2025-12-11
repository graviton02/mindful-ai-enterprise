import React from 'react';
import {
  ShieldCheck,
  Users,
  Target,
  BarChart3,
  Heart,
  Cpu,
  Database,
  Globe,
  RefreshCw,
  Lightbulb
} from 'lucide-react';

const VisionCloud: React.FC = () => {
  const principles = [
    { text: 'Governed Autonomy', icon: ShieldCheck },
    { text: 'Human–AI Co-Decisioning', icon: Users },
    { text: 'Intelligence with Purpose', icon: Target },
    { text: 'Outcome-Driven Measurement', icon: BarChart3 },
    { text: 'Trust as the Foundation', icon: Heart },
    { text: 'Embedded Intelligence in Everyday Work', icon: Cpu },
    { text: 'Resilient Data and Platform Foundations', icon: Database },
    { text: 'Enterprise-Wide Participation', icon: Globe },
    { text: 'Continuous Learning and Adaptation', icon: RefreshCw },
    { text: 'Responsible Innovation', icon: Lightbulb },
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
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] hover:bg-gray-100 transition-colors duration-300 hover:shadow-md"
              >
                <Icon className="w-8 h-8 text-brand-green mb-3" strokeWidth={1.5} />
                <p className="text-center font-bold text-lg leading-tight text-brand-darkGreen">
                  {principle.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionCloud;
