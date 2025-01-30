import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import referee from './imagee.png';
import boxing from './image.png';
import redcard from './imageee.png';

const CarrerHero = () => {
  const navigate = useNavigate();

  // Function to run virtual mouse script
  const handleApplyNowMouse = async () => {
    try {
      const response = await axios.post('http://localhost:5000/run-mouse-script');
      console.log(response.data.message);
    } catch (error) {
      console.error("Error running the mouse script:", error);
    }
  };

  // Function to run virtual keyboard script
  const handleApplyNowKeyboard = async () => {
    try {
      const response = await axios.post('http://localhost:5000/run-keyboard-script');
      console.log(response.data.message);
    } catch (error) {
      console.error("Error running the keyboard script:", error);
    }
  };

  // Function to run virtual canvas script
  const handleApplyNowCanvas = async () => {
    try {
      const response = await axios.post('http://localhost:5000/run-canvas-script');
      console.log(response.data.message);
    } catch (error) {
      console.error("Error running the canvas script:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#4ade80] to-[#e0ffe6] min-h-screen text-gray-900 py-16 px-4">
      <div className="text-center mb-12 animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
          <span className="text-white">Try</span> Our Product
        </h1>
        <p className="text-lg md:text-xl mt-2 font-light max-w-2xl mx-auto leading-relaxed text-gray-200">
          Embark on a journey of learning, mentorship, and growth with us.
        </p>
        <p className="text-md md:text-lg font-light mt-2 text-gray-100">
          Collaborate with some of the best mentors on the planet.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4">
        {/* Virtual Keyboard Card */}
        <div className="transform hover:-translate-y-2 transition duration-300 bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:border-gray-300">
          <div className="flex justify-center mb-6">
            <img src={referee} alt="Referee" className="w-36 h-36 rounded-full shadow-xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center text-[#4ade80]">Virtual Keyboard</h3>
          <p className="text-md text-gray-700 text-center mb-4 font-medium">
            Touch • Feel  • Text
          </p>
          <p className="text-sm text-gray-500 text-center mb-6">
          Experience touch-free typing with AeroBoard's virtual keyboard—just write in the air!
          </p>
          <div className="flex justify-center">
            <button
              className="bg-[#4ade80] hover:bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleApplyNowKeyboard}
            >
              Try Now
            </button>
          </div>
        </div>

        {/* Virtual Mouse Card */}
        <div className="transform hover:-translate-y-2 transition duration-300 bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:border-gray-300">
          <div className="flex justify-center mb-6">
            <img src={boxing} alt="Boxer" className="w-36 h-36 rounded-full shadow-xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center text-[#4ade80]">Virtual Mouse</h3>
          <p className="text-md text-gray-700 text-center mb-4 font-medium">
            Scroll • Right click • Left Click
          </p>
          <p className="text-sm text-gray-500 text-center mb-6">
          Navigate effortlessly with our virtual mouse, controlled solely by hand movements.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-[#4ade80] hover:bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleApplyNowMouse}
            >
              Try Now
            </button>
          </div>
        </div>

        {/* Virtual Canvas Card */}
        <div className="transform hover:-translate-y-2 transition duration-300 bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:border-gray-300">
          <div className="flex justify-center mb-6">
            <img src={redcard} alt="Judge" className="w-36 h-36 rounded-full shadow-xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center text-[#4ade80]">Virtual Canvas</h3>
          <p className="text-md text-gray-700 text-center mb-4 font-medium">
            Canvas • Write • Magic
          </p>
          <p className="text-sm text-gray-500 text-center mb-6">
          Draw and create in mid-air with AeroBoard's Air Canvas, bringing your ideas to life without a single touch.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-[#4ade80] hover:bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleApplyNowCanvas}
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerHero;
