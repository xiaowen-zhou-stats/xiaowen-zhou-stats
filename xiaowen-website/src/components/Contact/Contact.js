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
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I welcome opportunities for collaboration, research discussions, and academic inquiries. 
            Feel free to reach out to me through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-4">🏢</span>
                    <h4 className="text-lg font-semibold text-slate-800">Office</h4>
                  </div>
                  <p className="text-slate-700">
                    Room 304, Computer Science Building<br />
                    University of Technology<br />
                    123 University Ave, Tech City, TC 12345
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-4">📧</span>
                    <h4 className="text-lg font-semibold text-slate-800">Email</h4>
                  </div>
                  <p className="text-slate-700">
                    <a href="mailto:j.smith@university.edu" className="text-blue-600 hover:underline">
                      j.smith@university.edu
                    </a>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-4">📞</span>
                    <h4 className="text-lg font-semibold text-slate-800">Phone</h4>
                  </div>
                  <p className="text-slate-700">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-4">🕒</span>
                    <h4 className="text-lg font-semibold text-slate-800">Office Hours</h4>
                  </div>
                  <p className="text-slate-700">
                    Tuesday & Thursday: 2:00 PM - 4:00 PM<br />
                    Or by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect Online</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <span className="text-xl">🔗</span>
                </a>
                <a href="#" className="bg-slate-800 text-white p-3 rounded-full hover:bg-slate-900 transition-colors">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                  <span className="text-xl">🎓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  placeholder="Please describe your inquiry or message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <span className="font-medium">💡 Tip:</span> For research collaboration inquiries, 
                please include details about your research interests and proposed timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Students</h4>
            <p className="text-slate-600">
              Prospective graduate students are welcome to reach out to discuss research opportunities.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Collaborators</h4>
            <p className="text-slate-600">
              Interested in collaboration? Let's discuss how we can work together on cutting-edge research.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📰</span>
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Media</h4>
            <p className="text-slate-600">
              Press inquiries and speaking engagements are welcome. Please provide event details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;