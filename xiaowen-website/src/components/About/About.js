import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="w-80 h-80 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-8xl text-red-500">👩‍🏫</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Dr. Jane Smith</h2>
              <h3 className="text-2xl text-red-600 font-semibold mb-3">Professor of Computer Science</h3>
              <p className="text-xl text-gray-600 font-medium">University of Technology</p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Dr. Jane Smith is a distinguished Professor of Computer Science with over 15 years of experience 
                in artificial intelligence, machine learning, and data science. She earned her Ph.D. from MIT and 
                has been a faculty member at the University of Technology since 2010.
              </p>
              
              <p>
                Her research focuses on developing innovative AI solutions for real-world problems, with particular 
                emphasis on healthcare applications and ethical AI. She has published over 80 peer-reviewed papers 
                and has been recognized with numerous awards for her contributions to the field.
              </p>

              <p>
                Beyond research, Dr. Smith is passionate about education and mentoring the next generation of 
                computer scientists. She has supervised over 25 graduate students and is known for her engaging 
                teaching style and commitment to student success.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">80+</div>
                <div className="text-sm text-gray-600 font-medium">Publications</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-sm text-gray-600 font-medium">PhD Students</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">15</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">5</div>
                <div className="text-sm text-gray-600 font-medium">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;