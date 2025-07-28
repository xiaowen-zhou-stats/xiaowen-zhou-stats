import React, { useState } from 'react';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const publications = [
    {
      title: "Ethical AI Framework for Healthcare Applications",
      authors: "Smith, J., Johnson, M., Lee, K.",
      journal: "Nature Machine Intelligence",
      year: "2024",
      category: "journal",
      citations: 45,
      abstract: "This paper presents a comprehensive framework for implementing ethical AI systems in healthcare settings, addressing bias, transparency, and patient privacy concerns."
    },
    {
      title: "Deep Learning Approaches to Medical Image Analysis",
      authors: "Smith, J., Patel, R., Williams, S.",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2024",
      category: "journal",
      citations: 62,
      abstract: "Novel convolutional neural network architectures for improved accuracy in medical image diagnosis and analysis."
    },
    {
      title: "Federated Learning for Privacy-Preserving Healthcare AI",
      authors: "Smith, J., Zhang, L., Brown, A.",
      journal: "Proceedings of ICML 2023",
      year: "2023",
      category: "conference",
      citations: 38,
      abstract: "A federated learning approach that enables collaborative AI model training while preserving patient data privacy."
    },
    {
      title: "Bias Detection and Mitigation in Machine Learning Models",
      authors: "Smith, J., Davis, T.",
      journal: "ACM Computing Surveys",
      year: "2023",
      category: "journal",
      citations: 89,
      abstract: "Comprehensive survey of bias detection methods and mitigation strategies in machine learning systems."
    },
    {
      title: "Interpretable AI for Clinical Decision Support",
      authors: "Smith, J., Miller, J., Chen, X.",
      journal: "Proceedings of NeurIPS 2023",
      year: "2023",
      category: "conference",
      citations: 27,
      abstract: "Methods for creating interpretable AI systems that can provide explanations for clinical decision support."
    },
    {
      title: "AI in Education: Personalized Learning Systems",
      authors: "Smith, J., Taylor, K., Wilson, M.",
      journal: "Journal of Educational Technology",
      year: "2022",
      category: "journal",
      citations: 73,
      abstract: "Development and evaluation of AI-powered personalized learning systems for improved educational outcomes."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Publications', count: publications.length },
    { id: 'journal', label: 'Journal Articles', count: publications.filter(p => p.category === 'journal').length },
    { id: 'conference', label: 'Conference Papers', count: publications.filter(p => p.category === 'conference').length }
  ];

  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(p => p.category === selectedCategory);

  return (
    <section id="publications" className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Publications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My research contributes to the advancement of statistics, with a focus on Stochastic processes and applications.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">130+</div>
            <div className="text-slate-600 font-medium">Total Publications</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">1,817</div>
            <div className="text-slate-600 font-medium">Citations</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">11,208</div>
            <div className="text-slate-600 font-medium">Reads</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">50</div>
            <div className="text-slate-600 font-medium">Collaborators</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-blue-50 shadow-sm border border-slate-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 mb-2">
                    <span className="font-medium">{pub.authors}</span>
                  </p>
                  <p className="text-red-600 font-medium mb-3">
                    {pub.journal} ({pub.year})
                  </p>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                    pub.category === 'journal' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {pub.category === 'journal' ? 'Journal' : 'Conference'}
                  </span>
                  <div className="text-sm text-slate-500">
                    📊 {pub.citations} citations
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                {pub.abstract}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <button className="text-red-600 hover:text-red-800 font-medium text-sm hover:underline">
                    📄 Read Paper
                  </button>
                  <button className="text-slate-500 hover:text-slate-700 font-medium text-sm hover:underline">
                    📝 Cite
                  </button>
                </div>
                <div className="text-sm text-slate-400">
                  Published {pub.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Stochastic Modeling', 'Risk Modeling', 'Stochastic Processes', 'Probability Theory', 
              'Option Pricing', 'Probability Theory'].map((interest, index) => (
              <span key={index} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;