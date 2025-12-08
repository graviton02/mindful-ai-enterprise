import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CHALLENGES } from '../constants';
import { StatData } from '../types';
import { BrainCircuit, Activity, Zap } from 'lucide-react';

// Updated colors for better contrast on green background
const data: StatData[] = [
  { name: 'Initiatives Stalled/Failed', value: 80, fill: '#FF5252' }, // Bright Red/Coral
  { name: 'Successful Production', value: 20, fill: '#FFFFFF' }, // White
];

const RealityCheck: React.FC = () => {
  return (
    <section className="py-24 bg-section-green text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
         <div className="absolute left-0 top-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-brand-yellow pl-4">
          The Reality of Enterprise AI Today
        </h2>

        {/* Top Section: Split View */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          
          {/* Left Column: Text & Pie Chart */}
          <div className="lg:w-1/2 space-y-8">
             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                <p className="leading-relaxed opacity-90 mb-4 text-lg">
                  Despite unprecedented momentum, nearly <span className="font-bold text-white">80%</span> of GenAI and Agentic AI initiatives never reach full-scale production.
                </p>
                <p className="leading-relaxed opacity-90 font-semibold mb-6">
                  The limitation is not the technology—it is the enterprise operating model.
                </p>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', color: '#333', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        itemStyle={{ color: '#333', fontWeight: 600 }}
                      />
                      <Legend 
                        verticalAlign="middle" 
                        align="right" 
                        layout="vertical" 
                        iconType="circle"
                        formatter={(value) => <span className="text-white font-medium ml-2">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>

          {/* Right Column: Visual Comparison */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-brand-dark h-full">
                {/* Header Graphic */}
                <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100">
                    <div className="text-center w-1/2 border-r border-gray-100 pr-4">
                        <div className="text-brand-gray font-bold text-lg mb-1">Traditional AI</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Predictive & Generative</div>
                    </div>
                    <div className="text-center w-1/2 pl-4">
                        <div className="text-brand-green font-bold text-lg mb-1">Mindful AI</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Autonomous + Purposeful</div>
                    </div>
                </div>

                {/* Comparison Rows */}
                <div className="space-y-6">
                    {/* Row 1 */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-50 p-4 rounded-lg text-center font-medium border border-gray-100 text-sm md:text-base">
                            Reactive
                        </div>
                        <div className="flex-shrink-0 bg-white border-2 border-brand-green rounded-full p-2 text-brand-green">
                           <BrainCircuit size={24} />
                        </div>
                        <div className="flex-1 bg-green-50 p-4 rounded-lg text-center font-medium text-brand-darkGreen border border-green-100 text-sm md:text-base">
                            Proactive & Autonomous
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-50 p-4 rounded-lg text-center font-medium border border-gray-100 text-sm md:text-base">
                            Output-Focused
                        </div>
                        <div className="flex-shrink-0 bg-white border-2 border-brand-green rounded-full p-2 text-brand-green">
                           <Activity size={24} />
                        </div>
                        <div className="flex-1 bg-green-50 p-4 rounded-lg text-center font-medium text-brand-darkGreen border border-green-100 text-sm md:text-base">
                            Action-Focused
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-50 p-4 rounded-lg text-center font-medium border border-gray-100 text-sm md:text-base">
                            Siloed
                        </div>
                        <div className="flex-shrink-0 bg-white border-2 border-brand-green rounded-full p-2 text-brand-green">
                           <Zap size={24} />
                        </div>
                        <div className="flex-1 bg-green-50 p-4 rounded-lg text-center font-medium text-brand-darkGreen border border-green-100 text-sm md:text-base">
                            Orchestrated
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Challenges (Spread across viewport) */}
        <div className="w-full">
            <h3 className="text-2xl font-bold text-center mb-10">What’s Holding Enterprises Back</h3>
            {/* Grid layout ensures items are spread across the width on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {CHALLENGES.map((c, i) => (
                    <div key={i} className="flex flex-col items-start p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group h-full">
                        <div className="mb-4 p-3 bg-white/10 rounded-lg text-brand-yellow group-hover:scale-110 transition-transform shadow-inner">
                            <c.icon size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-3 leading-tight min-h-[3rem]">{c.title}</h4>
                            <p className="text-sm opacity-80 leading-relaxed">{c.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default RealityCheck;