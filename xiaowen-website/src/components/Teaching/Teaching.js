import React, { useState } from 'react';

const Teaching = () => {
  const [showCurrent, setShowCurrent] = useState(true);

  const currentCourses = [
    {
      code: "To Be Determined",
      level: "TBD",
      description: "Course schedules and assignments for the Winter 2026 semester will be finalized and announced soon. Please check back for updates.",
      semester: "Winter 2026",
      isTBD: true
    }
  ]; 

  const pastCourses = [
    {
      code: "STAT250",
      title: "Statistics",
      level: "Undergraduate",
      description: "This course is an introduction to the theoretical basis of core statistics topics. Topics include point and interval estimation; hypothesis testing; likelihood function; Neyman Pearson Lemma and likelihood ratio tests.",
    },
    {
      code: "STAT249",
      title: "Probability 1",
      level: "Undergraduate",
      description: "This course is an introduction to rigorous basis of probability theory. Students learn about the axiomatic approach to probability; combinatorial probability; random sampling and sampling distributions; discrete and continuous distributions; expectation; variances; joint variables and their distributions, conditional distributions, conditional expectation",
    },
    {
      code: "MAST 679V",
      title: "Levy Processes",
      level: "Graduate",
      description: "Levy Processes explores stochastic processes with stationary and independent increments, focusing on their theory, construction, and applications in areas like finance and queueing theory.",
    },
  ];

  const displayedCourses = showCurrent ? currentCourses : pastCourses;
   return (
    <section id="teaching" className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Teaching</h2>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setShowCurrent(true)}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  showCurrent
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Current Courses
              </button>
              <button
                onClick={() => setShowCurrent(false)}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  !showCurrent
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Past Courses
              </button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div>
          <div className={`grid gap-8 ${
            displayedCourses.length === 1 && displayedCourses[0].isTBD 
              ? 'justify-center' 
              : 'lg:grid-cols-2'
          }`}>
            {displayedCourses.map((course, index) => (
              <div key={index} className={`border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col ${
                course.isTBD 
                  ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 max-w-md mx-auto' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className={`text-2xl font-bold ${course.isTBD ? 'text-gray-700' : 'text-gray-900'}`}>
                      {course.code}
                    </h4>
                    <h5 className={`text-xl font-semibold mb-3 text-left ${
                      course.isTBD ? 'text-gray-600' : 'text-red-600'
                    }`}>
                      {course.title}
                    </h5>
                  </div>
                  {!course.isTBD && (
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      course.level === 'Graduate' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {course.level}
                    </span>
                  )}
                </div>
                
                <p className={`leading-relaxed text-lg flex-grow text-left ${
                  course.isTBD ? 'text-gray-600 italic' : 'text-gray-600'
                }`}>
                  {course.description}
                </p>
                
                <div className="mt-6">
                  {course.semester && (
                    <span className={`font-medium ${course.isTBD ? 'text-gray-500' : 'text-gray-500'}`}>
                      📅 {course.semester}
                    </span>
                  )}
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