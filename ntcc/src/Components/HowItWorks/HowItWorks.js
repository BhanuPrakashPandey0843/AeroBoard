import React from 'react';

function HowItWorks() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-8 overflow-hidden">
      {/* Decorative Background - Half-Moon Shape */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-full transform -translate-y-1/2 -z-10"></div>

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-16 tracking-wide">
        How AeroBoard Works
      </h2>
      
      {/* Steps Container */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-24 relative">
        {/* Individual Step Components */}
        <Step
          number="1"
          title="Virtual Keyboard"
          description="Type effortlessly in mid-air using intuitive hand gestures, creating a touch-free typing experience with AeroBoard's virtual keyboard."
        />
        <Arrow />
        
        <Step
          number="2"
          title="Virtual Mouse"
          description="Control your on-screen cursor by moving your hand in the air, offering seamless navigation without any physical device."
        />
        <Arrow />
        
        <Step
          number="3"
          title="Air Canvas"
          description="Draw or write in the air, allowing you to create shapes, characters, or designs that appear instantly on the screen."
        />
      </div>
    </section>
  );
}

/* Step Component */
const Step = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-4 max-w-xs relative transition-transform transform hover:scale-105">
    <div className="text-6xl font-bold text-green-500 mb-2">{number}</div>
    <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

/* Arrow Component */
const Arrow = () => (
  <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-[-60px]">
    <div className="flex items-center">
      <div className="w-24 h-0.5 bg-white-500"></div>
      <div className="w-5 h-5 border-t-2 border-l-2 border-green-500 transform rotate-45 ml-2 transition-transform duration-300 hover:scale-125"></div>
    </div>
  </div>
);

export default HowItWorks;
