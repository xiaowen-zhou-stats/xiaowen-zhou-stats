import React from 'react';
import './App.css';
import About from './components/About/About';
import Teaching from './components/Teaching/Teaching';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';

function App() {
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
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">About</a>
              <a href="#teaching" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">Teaching</a>
              <a href="#publications" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">Publications</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">Contact</a>
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
            © 2025 Dr. Jane Smith. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;