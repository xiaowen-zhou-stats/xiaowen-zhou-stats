import React, { useState } from 'react';

const Contact = () => {
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
                    1400 de Maisonneuve Blvd. West<br />
                    Concordia University<br />
                    Montreal, QC, Canada
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-5 text-red-600">📧</span>
                    <h4 className="text-xl font-bold text-gray-900">Email</h4>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <a href="mailto:xiaowen.zhou@concordia.ca" className="text-gray-600 hover:underline font-semibold">
                      xiaowen.zhou@concordia.ca
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-5 text-red-600">🕒</span>
                    <h4 className="text-xl font-bold text-gray-900">Office Hours</h4>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    By appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Location</h3>
            
            <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.0894444444444!2d-73.57854968437504!3d45.49719997910155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a5aa4b0a437%3A0x7177161b71121a0a!2s1400%20Bd%20de%20Maisonneuve%20O%2C%20Montr%C3%A9al%2C%20QC%20H3G%201M8%2C%20Canada!5e0!3m2!1sen!2sus!4v1643234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Concordia University Location"
              ></iframe>
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-lg">
                <span className="font-bold">🚇 Transit:</span> Guy-Concordia Metro Station (Green Line) - 
                2 minute walk from the university campus.
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