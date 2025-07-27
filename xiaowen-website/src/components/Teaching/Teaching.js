import React from 'react';

const Teaching = () => {
  const courses = [
    {
      code: "CS 101",
      title: "Introduction to Computer Science",
      level: "Undergraduate",
      description: "Fundamental concepts of programming, algorithms, and computational thinking.",
      semester: "Fall 2024"
    },
    {
      code: "CS 367",
      title: "Machine Learning Fundamentals",
      level: "Undergraduate",
      description: "Core principles of machine learning, supervised and unsupervised learning techniques.",
      semester: "Spring 2025"
    },
    {
      code: "CS 567",
      title: "Advanced Artificial Intelligence",
      level: "Graduate",
      description: "Deep learning, neural networks, and cutting-edge AI research methodologies.",
      semester: "Fall 2024"
    },
    {
      code: "CS 690",
      title: "Research Seminar in AI Ethics",
      level: "Graduate",
      description: "Exploring ethical implications of AI systems and responsible AI development.",
      semester: "Spring 2025"
    }
  ];

  return (
    <section id="teaching" className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Teaching</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I am passionate about inspiring and educating the next generation of computer scientists. 
            My teaching philosophy emphasizes hands-on learning, critical thinking, and real-world applications.
          </p>
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-red-50 rounded-xl p-10 mb-16 border border-red-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-4xl mr-4 text-red-600">💡</span>
            Teaching Philosophy
          </h3>
          <p className="text-gray-700 leading-relaxed text-xl">
            I believe in creating an inclusive and engaging learning environment where students are encouraged 
            to explore, question, and innovate. My courses blend theoretical foundations with practical 
            applications, ensuring students gain both deep understanding and practical skills.
          </p>
        </div>

        {/* Current Courses */}
        <div>
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Current Courses</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{course.code}</h4>
                    <h5 className="text-xl font-semibold text-red-600 mb-3">{course.title}</h5>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    course.level === 'Graduate' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{course.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">📅 {course.semester}</span>
                  <button className="text-red-600 hover:text-red-800 font-semibold hover:underline text-lg">
                    View Syllabus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Student Feedback</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Dr. Smith's teaching style made complex AI concepts accessible and engaging. 
                Her real-world examples really helped me understand the material."
              </p>
              <p className="text-gray-500 font-semibold">- Sarah K., CS Major</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "The research seminar challenged me to think critically about AI ethics. 
                It's shaped how I approach technology development."
              </p>
              <p className="text-gray-500 font-semibold">- Michael R., PhD Student</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Excellent mentor and professor. Always available for questions and 
                genuinely cares about student success."
              </p>
              <p className="text-gray-500 font-semibold">- Emily T., Graduate Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;