import React from 'react';

const Teaching = () => {
  const courses = [
    {
      code: "STAT250",
      title: "Statistics",
      level: "Undergraduate",
      description: "This course is an introduction to the theoretical basis of core statistics topics. Topics include point and interval estimation; hypothesis testing; likelihood function; Neyman Pearson Lemma and likelihood ratio tests.",
      semester: "Fall 2025"
    },
    {
      code: "MAST 679V",
      title: "Levy Processes",
      level: "Graduate",
      description: "Levy Processes explores stochastic processes with stationary and independent increments, focusing on their theory, construction, and applications in areas like finance and queueing theory.",
      semester: "Fall 2025"
    },
  ];

  return (
    <section id="teaching" className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Teaching</h2>
        </div>

        {/* Current Courses */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{course.code}</h4>
                    <h5 className="text-xl font-semibold text-red-600 mb-3 text-left">{course.title}</h5>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    course.level === 'Graduate' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg flex-grow text-left">{course.description}</p>
                
                <div className="mt-6">
                  <span className="text-gray-500 font-medium">📅 {course.semester}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;