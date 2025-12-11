import React from 'react';

const SecureOutcome: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure & Outcome-Engineered AI Systems</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <img
            src="/secure-outcome.png"
            alt="Secure and Outcome-Engineered AI Systems - Four foundational AI architectures including Predictive Prescriptive and Decision Intelligence, RAG-Powered Enterprise Intelligence, GenAI-Powered Copilots, and Agentic AI"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SecureOutcome;
