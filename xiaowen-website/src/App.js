import React from 'react';
import About from './components/About/About';
import Teaching from './components/Teaching/Teaching';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900">Dr. Xiaowen Zhou</h1>
              <p className="text-sm text-red-600 font-medium">Professor of Mathematics and Statistics</p>
            </div>
            <div className="hidden md:flex space-x-10">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('teaching')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg cursor-pointer"
              >
                Teaching
              </button>
              <button 
                onClick={() => scrollToSection('publications')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg cursor-pointer"
              >
                Publications
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <About />
        <Teaching />
        <Publications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-300 text-lg">
            © 2025 Dr. Xiaowen Zhou. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;