import React from "react";
import { FaHandPaper, FaKeyboard, FaMousePointer, FaUniversalAccess, FaCog, FaHandsHelping } from "react-icons/fa";

const AeroBoardFeatures = () => {
  const features = [
    { 
      icon: <FaHandPaper />, 
      title: "Air-based Text Input", 
      description: "Allows users to input text by writing in the air using hand gestures, eliminating the need for physical keyboards." 
    },
    { 
      icon: <FaKeyboard />, 
      title: "Virtual Keyboard and Mouse", 
      description: "Provides a virtual keyboard and mouse controlled by hand gestures, enabling touch-free interaction with digital devices." 
    },
    { 
      icon: <FaMousePointer />, 
      title: "Seamless Cursor Control", 
      description: "Tracks hand movements to control the on-screen cursor, allowing users to perform basic cursor functions with gestures." 
    },
    { 
      icon: <FaUniversalAccess />, 
      title: "Enhanced Accessibility", 
      description: "Offers an intuitive and accessible interaction method, particularly helpful for individuals with mobility limitations." 
    },
    { 
      icon: <FaCog />, 
      title: "Customizable Interface", 
      description: "Adapts to user preferences with customizable layouts, making the virtual keyboard and gesture recognition versatile across different applications." 
    },
    { 
      icon: <FaHandsHelping />, 
      title: "Touchless HCI Experience", 
      description: "Delivers a fully touch-free human-computer interaction experience, suitable for environments where traditional input devices may be inconvenient or impractical." 
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-400 mb-12 tracking-wide">
          What can AeroBoard do?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg transition duration-300 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:from-green-700 hover:via-green-800 hover:to-green-900 shadow-lg hover:shadow-2xl text-center"
              style={{
                boxShadow: "0px 4px 12px rgba(0, 255, 128, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-green-400 rounded-lg blur-md"></div>
              <div className="relative flex flex-col items-center">
                <div className="text-5xl mb-4 text-green-300 group-hover:text-white transition-transform transform group-hover:scale-125">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300 group-hover:text-white transition duration-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AeroBoardFeatures;
