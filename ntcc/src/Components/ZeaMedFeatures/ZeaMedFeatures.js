import React from 'react';
import { FaKeyboard, FaHandPointer, FaMousePointer, FaUniversalAccess, FaPalette, FaHandsHelping } from 'react-icons/fa';

const ZeaMedFeatures = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#F0FFF4] to-[#E0F7FA] text-black py-16 px-6">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-[#333333]">
                AeroBoard Features
            </h2>
            <p className="text-lg mb-16 text-center text-gray-600 max-w-3xl mx-auto">
                AeroBoard is an advanced touch-free interaction system that allows users to input text,
                control a virtual keyboard, and navigate with a virtual mouse through intuitive hand gestures in mid-air.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Left Column - Feature List */}
                <div className="space-y-8">
                    <Feature icon={<FaKeyboard />} title="Air-Based Text Input" description="Users can input text by writing in the air using hand gestures. This allows for a completely touch-free experience, simulating a virtual keyboard in mid-air." />
                    <Feature icon={<FaHandPointer />} title="Virtual Keyboard and Mouse Functionality" description="AeroBoard offers a virtual keyboard and mouse interface that can be controlled by hand gestures, replacing the need for traditional input devices." />
                    <Feature icon={<FaMousePointer />} title="Gesture-Based Cursor Control" description="Tracks hand movements to enable seamless control of the on-screen cursor, allowing users to perform essential cursor functions without a physical mouse." />
                </div>

                {/* Center Column - Mockup Image */}
                <div className="flex justify-center items-center">
                    <img
                        src="https://businessanalystmentor.com/wp-content/uploads/2023/07/47323337_m_normal_none.jpg"
                        alt="AI Dashboard Mockup"
                        className="shadow-2xl rounded-3xl transition-transform transform hover:scale-105 duration-300"
                    />
                </div>

                {/* Right Column - Feature List */}
                <div className="space-y-8">
                    <Feature icon={<FaUniversalAccess />} title="Enhanced Accessibility" description=" Designed to improve accessibility, especially for users with mobility limitations, providing an intuitive way to interact with digital devices." />
                    <Feature icon={<FaPalette />} title="Customizable Interface" description="Allows users to tailor the virtual keyboard layout and gesture controls to their personal preferences, making it adaptable for different use cases and needs." />
                    <Feature icon={<FaHandsHelping />} title="Touch-Free Human-Computer Interaction" description=" Enables a fully touchless experience, which can be particularly useful in environments where traditional devices are inconvenient or impractical, like medical facilities or for individuals with certain disabilities." />
                </div>
            </div>
        </div>
    );
};

// Feature Component with enhanced styling, gradient background, and icon
const Feature = ({ icon, title, description }) => {
    return (
        <div className="p-8 rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-[#f0f8ff] hover:from-[#e3ffe3] hover:to-[#ccf2f4] hover:shadow-2xl">
            <div className="flex items-center space-x-4">
                <span className="text-[#00ff80] text-4xl">{icon}</span>
                <h3 className="text-xl font-bold text-[#00ff80] hover:text-[#32cd32] transition-colors duration-200">{title}</h3>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
        </div>
    );
};

export default ZeaMedFeatures;
