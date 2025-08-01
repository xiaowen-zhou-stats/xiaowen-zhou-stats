import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-24"> {/* Increased vertical padding */}
        <div className="grid lg:grid-cols-2 gap-20 items-center"> {/* Increased gap */}
          
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-96 h-96 flex items-center justify-center">
                <img 
                  src="/xiaowen.png" 
                  alt="Xiaowen" 
                  className="w-[360px] h-[360px] rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact Icons */}
            <div className="flex gap-6">
              <a 
                href="mailto:xiaowen.zhou@concordia.ca"
                className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group"
                title="Email: xiaowen.zhou@concordia.ca"
              >
                <Mail className="w-7 h-7 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
              </a>
              
              <a 
                href="https://www.researchgate.net/profile/Xiaowen-Zhou-4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group"
                title="ResearchGate Profile"
              >
                <ExternalLink className="w-7 h-7 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-10"> {/* Increased vertical spacing */}
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-4">Dr. Xiaowen Zhou</h2> {/* Increased text size */}
              <h3 className="text-3xl text-red-600 font-semibold mb-3">Professor of Mathematics and Statistics</h3> {/* Increased text size */}
              <p className="text-2xl text-gray-600 font-medium">University of Concordia</p> {/* Increased text size */}
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed text-xl"> {/* Increased text size and spacing */}
              <p>
                I am a Professor of Mathematics and Statistics with over 30 years of experience 
                in statistics and probabilities. I earned my Ph.D. from University of California at Berkeley and 
                have been a faculty member at the University of Concordia since 2001.
              </p>
              
              <p>
                My research focuses on Stochastic processes and applications, namely the Levy process. I have 
                published over 130 peer-reviewed papers and has been recognized for his contributions to the field.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center"> {/* Increased gap */}
              <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200"> {/* Increased padding */}
                <div className="text-4xl font-bold text-red-600 mb-2">130+</div> {/* Increased text size */}
                <div className="text-base text-gray-600 font-medium">Publications</div> {/* Increased text size */}
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200"> {/* Increased padding */}
                <div className="text-4xl font-bold text-red-600 mb-2">4</div> {/* Increased text size */}
                <div className="text-base text-gray-600 font-medium">PhD Students</div> {/* Increased text size */}
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200"> {/* Increased padding */}
                <div className="text-4xl font-bold text-red-600 mb-2">30</div> {/* Increased text size */}
                <div className="text-base text-gray-600 font-medium">Years Experience</div> {/* Increased text size */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;