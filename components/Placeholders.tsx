import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PlaceholderSection: React.FC<{ title: string; colorClass: string; textColor?: string }> = ({ title, colorClass, textColor = 'text-white' }) => (
  <div className={`p-10 rounded-lg ${colorClass} ${textColor} flex flex-col items-center justify-center text-center h-64 cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1`}>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
        <ArrowUpRight size={24} />
    </div>
  </div>
);

const Placeholders: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PlaceholderSection title="Insights" colorClass="bg-brand-dark" />
          <PlaceholderSection title="Success Stories" colorClass="bg-brand-green" />
          <PlaceholderSection title="Our Frameworks" colorClass="bg-gray-100" textColor="text-gray-900" />
          <PlaceholderSection title="Our Accelerators" colorClass="bg-brand-yellow" textColor="text-brand-dark" />
        </div>
      </div>
    </section>
  );
};

export default Placeholders;