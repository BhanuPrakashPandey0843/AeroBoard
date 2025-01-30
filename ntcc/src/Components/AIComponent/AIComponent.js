import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaMousePointer, FaKeyboard } from 'react-icons/fa';

// Dummy components for each virtual tool
const VirtualCanvas = () => <div className="text-center text-white">Virtual Canvas is Open!</div>;
const VirtualMouse = () => <div className="text-center text-white">Virtual Mouse is Active!</div>;
const VirtualKeyboard = () => <div className="text-center text-white">Virtual Keyboard is Ready!</div>;

function AIComponent() {
  const [activeTool, setActiveTool] = useState(null);

  // Function to call Flask API endpoints
  const runScript = async (scriptType) => {
    let endpoint = '';

    // Set the endpoint based on the scriptType
    if (scriptType === 'canvas') endpoint = '/run-canvas-script';
    else if (scriptType === 'mouse') endpoint = '/run-mouse-script';
    else if (scriptType === 'keyboard') endpoint = '/run-keyboard-script';

    try {
      const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setActiveTool(scriptType);
      } else {
        console.error('Failed to start script');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-700 to-green-400 p-6">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-white mb-8 text-center drop-shadow-lg"
      >
        Where creativity takes flight, with <br /> <span className="text-gray-900">Aero Board</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-2xl text-white mb-12 text-center max-w-2xl drop-shadow-md"
      >
        In sight, crafting dreams in colors bright.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="mb-16 bg-black text-white py-3 px-10 rounded-full text-lg shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out"
      >
        Get Started
      </motion.button>

      {/* Improved Transparent Cards Section */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        
        {/* Left Card - Canvas */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          className="relative bg-white bg-opacity-70 rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:shadow-2xl backdrop-blur-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-transparent to-green-600 opacity-30 rounded-lg"></div>
          <div className="relative z-10 flex items-center justify-center mb-6">
            <FaPaintBrush className="text-6xl text-green-500 drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Virtual Canvas</h3>
          <p className="text-gray-600 mb-6 text-center">Draw, design, and unleash your creativity in a limitless digital space.</p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(72, 199, 116, 0.8)" }}
            className="relative z-10 bg-green-600 text-white py-2 px-8 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            onClick={() => runScript('canvas')}
          >
            Try Now
          </motion.button>
        </motion.div>

        {/* Center Card - Mouse */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          className="relative bg-white bg-opacity-70 rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:shadow-2xl backdrop-blur-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-transparent to-green-600 opacity-30 rounded-lg"></div>
          <div className="relative z-10 flex items-center justify-center mb-6">
            <FaMousePointer className="text-6xl text-green-500 drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Virtual Mouse</h3>
          <p className="text-gray-600 mb-6 text-center">Navigate and interact seamlessly with virtual elements at your fingertips.</p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(72, 199, 116, 0.8)" }}
            className="relative z-10 bg-green-600 text-white py-2 px-8 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            onClick={() => runScript('mouse')}
          >
            Try Now
          </motion.button>
        </motion.div>

        {/* Right Card - Keyboard */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          className="relative bg-white bg-opacity-70 rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:shadow-2xl backdrop-blur-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-transparent to-green-600 opacity-30 rounded-lg"></div>
          <div className="relative z-10 flex items-center justify-center mb-6">
            <FaKeyboard className="text-6xl text-green-500 drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Virtual Keyboard</h3>
          <p className="text-gray-600 mb-6 text-center">Type effortlessly with a responsive virtual keyboard.</p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(72, 199, 116, 0.8)" }}
            className="relative z-10 bg-green-600 text-white py-2 px-8 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            onClick={() => runScript('keyboard')}
          >
            Try Now
          </motion.button>
        </motion.div>
      </div>

      {/* Render Selected Tool */}
      <div className="mt-12">
        {activeTool === 'canvas' && <VirtualCanvas />}
        {activeTool === 'mouse' && <VirtualMouse />}
        {activeTool === 'keyboard' && <VirtualKeyboard />}
      </div>
    </div>
  );
}

export default AIComponent;
