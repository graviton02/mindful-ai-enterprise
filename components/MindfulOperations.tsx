import React from 'react';

const MindfulOperations: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mindful & Intelligent Enterprise AI Operations</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <img
            src="/mindful-operations.png"
            alt="Mindful and Intelligent Enterprise AI Operations - showing the challenge of fragmented data and silos, the solution of unified AI operating fabric, and the outcome of one mindful and intelligent enterprise operations"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MindfulOperations;
