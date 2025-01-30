import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PromoSection.css';

const PromoSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to the signup page or any other route
  };

  return (
    <div className="relative overflow-hidden text-center py-36 px-8 md:py-48 lg:px-20 bg-gradient-to-b from-white to-green-600">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animation z-0"></div>

      {/* White Shade on Top */}
      <div className="absolute inset-0 bg-white-overlay z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide mb-4 animate-fadeIn">
          START CREATING NOW.
        </h2>
        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 animate-bounce">
          Start your free AeroBoard trial today.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fadeIn delay-150">
          Experience the future of Human computer interaction with our cutting-edge technology. 
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-black text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 animate-fadeIn delay-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PromoSection;
