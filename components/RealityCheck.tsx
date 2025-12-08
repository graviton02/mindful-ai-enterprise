import React from 'react';
import { CHALLENGES } from '../constants';
import { BrainCircuit, Activity, Zap, AlertTriangle, TrendingDown } from 'lucide-react';

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
          
          {/* Left Column: Stats & Message */}
          <div className="lg:w-1/2 space-y-6">
             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                {/* Large Stat Display */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="text-7xl md:text-8xl font-black text-brand-yellow leading-none">80%</div>
                    <div className="text-sm font-semibold text-brand-yellow/80 uppercase tracking-wider mt-1">Initiatives Stalled</div>
                  </div>
                  <div className="h-20 w-px bg-white/30"></div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed opacity-90">
                      of GenAI and Agentic AI initiatives <span className="font-bold text-white">never reach</span> full-scale production.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="leading-relaxed opacity-90 font-semibold text-lg">
                    The limitation is not the technology—it is the enterprise operating model.
                  </p>
                </div>
             </div>

             {/* Additional Stats Row */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 flex items-center gap-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <AlertTriangle className="text-red-300" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">87%</div>
                    <div className="text-xs opacity-70">Fail to scale beyond pilots</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 flex items-center gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <TrendingDown className="text-amber-300" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$2.5T</div>
                    <div className="text-xs opacity-70">Potential value at risk</div>
                  </div>
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