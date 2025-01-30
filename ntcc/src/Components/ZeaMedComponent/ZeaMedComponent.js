import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

function ZeaMedComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white-500 to-green-100 overflow-hidden relative">
      {/* Heading at the Top */}
      <div className="w-full p-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-5xl md:text-6xl font-extrabold text-green-800 drop-shadow-lg mb-4"
        >
          <FaRocket className="inline-block text-6xl mb-2 animate-bounce" />
          Empower Your Ideas with AeroBoard's Innovation
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Transform your projects and collaborate effortlessly with AeroBoard's advanced tools and AI-powered insights!
        </p>
      </div>

      {/* Feature Section */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl relative z-10 mt-12">
        {/* AI Insights Box */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
          className="relative bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 border-l-4 border-green-600 transform hover:shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-3 flex items-center">
            <FaLightbulb className="mr-3 text-green-600" /> AI-Powered Insights
          </h2>
          <h3 className="text-4xl font-extrabold text-green-800 mb-4">Work Smarter!</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            AeroBoard's AI-driven tools provide actionable insights, helping teams to make smarter decisions and streamline workflows.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4CAF50", boxShadow: "0px 0px 20px rgba(76, 175, 80, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 font-bold"
          >
            Explore Insights
          </motion.button>
        </motion.div>

        {/* Collaboration Tools Box */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
          className="relative bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 border-l-4 border-green-600 transform hover:shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-3 flex items-center">
            <FaUsers className="mr-3 text-green-600" /> Team Collaboration
          </h2>
          <div className="bg-green-600 text-white p-4 rounded-lg mt-4 shadow-md">
            <p className="font-semibold text-yellow-300">Connect & Collaborate</p>
            <p className="text-sm">
              Seamlessly collaborate with your team, share updates, and stay aligned with AeroBoard's real-time collaboration tools.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4CAF50", boxShadow: "0px 0px 20px rgba(76, 175, 80, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 font-bold"
          >
            Collaborate Now
          </motion.button>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center z-10">
        <h2 className="text-4xl font-extrabold text-green-800">Join the AeroBoard Movement!</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Experience the future of teamwork and project management. Get started with AeroBoard and elevate your productivity!
        </p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#4CAF50", boxShadow: "0px 0px 20px rgba(76, 175, 80, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 font-bold"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}

export default ZeaMedComponent;
