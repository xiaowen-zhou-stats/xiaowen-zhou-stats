import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I welcome opportunities for collaboration, research discussions, and academic inquiries. 
            Feel free to reach out to me through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-5 text-red-600">🏢</span>
                    <h4 className="text-xl font-bold text-gray-900">Office</h4>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Room 304, Computer Science Building<br />
                    University of Technology<br />
                    123 University Ave, Tech City, TC 12345
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-5 text-red-600">📧</span>
                    <h4 className="text-xl font-bold text-gray-900">Email</h4>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <a href="mailto:j.smith@university.edu" className="text-gray-600 hover:underline font-semibold">
                      j.smith@university.edu
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-5 text-red-600">📞</span>
                    <h4 className="text-xl font-bold text-gray-900">Phone</h4>
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-5 text-red-600">🕒</span>
                    <h4 className="text-xl font-bold text-gray-900">Office Hours</h4>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Tuesday & Thursday: 2:00 PM - 4:00 PM<br />
                    Or by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Connect Online</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-red-600 text-white p-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg">
                  <span className="text-2xl">🔗</span>
                </a>
                <a href="#" className="bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-900 transition-colors shadow-lg">
                  <span className="text-2xl">🐙</span>
                </a>
                <a href="#" className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg">
                  <span className="text-2xl">🐦</span>
                </a>
                <a href="#" className="bg-red-600 text-white p-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg">
                  <span className="text-2xl">🎓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-10 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-lg"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-semibold text-gray-700 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-lg"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical text-lg"
                  placeholder="Please describe your inquiry or message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-8 rounded-lg font-bold hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-lg"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 text-lg">
                <span className="font-bold">💡 Tip:</span> For research collaboration inquiries, 
                please include details about your research interests and proposed timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 grid lg:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎓</span>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Students</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Prospective graduate students are welcome to reach out to discuss research opportunities.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Collaborators</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Interested in collaboration? Let's discuss how we can work together on cutting-edge research.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📰</span>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Media</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Press inquiries and speaking engagements are welcome. Please provide event details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;