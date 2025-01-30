// ContactUs.jsx

import React from 'react';

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 flex items-center justify-center">
      {/* Main Container */}
      <div className="container mx-auto max-w-6xl">
        {/* Image and Header Section */}
        <div className="relative mb-10">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/263/984/non_2x/contact-us-concept-free-photo.jpg" // Placeholder image
            alt="Contact Us Header"
            className="w-full h-64 object-cover rounded-lg shadow-2xl transition-transform duration-500 transform hover:scale-105"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white bg-black/60 px-6 py-3 rounded-lg shadow-2xl hover:bg-green-600 transition-colors duration-300">
            Catch up with us, Contact Information and more
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information Card */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Feel free to visit our nearest office for a face-to-face conversation</h2>
            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium">Mumbai</h3>
                <p>Western Business Center, Andheri East</p>
                <p>Contact: +91 98765 43210</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium">Delhi</h3>
                <p>Connaught Place, New Delhi</p>
                <p>Contact: +91 87654 32109</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium">Bengaluru</h3>
                <p>Electronics City, Hosur Road</p>
                <p>Contact: +91 76543 21098</p>
              </div>
            </div>
            <div className="mt-8 text-gray-700">
              <h3 className="text-xl font-semibold">Working Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat - Sun: Closed</p>
            </div>
            {/* Social Media Icons */}
            <div className="mt-6 flex gap-4 text-gray-600 text-2xl">
              <a href="/" className="hover:text-blue-600 transition-transform duration-300 transform hover:scale-125">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="hover:text-blue-400 transition-transform duration-300 transform hover:scale-125">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="hover:text-blue-700 transition-transform duration-300 transform hover:scale-125">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Please don’t hesitate to complete the contact form below</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 text-lg font-medium">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Bhanu Prakash"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="bhanu.prakash@example.com"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 91234 56789"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-medium">Project Brief</label>
                <textarea
                  placeholder="Describe your project"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow duration-300"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-green-600 transition-transform duration-300"
              >
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
