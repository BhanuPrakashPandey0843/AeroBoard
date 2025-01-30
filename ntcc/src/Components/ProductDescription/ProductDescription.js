import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductDescription = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,    // Animation happens only once
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Introductory Section */}
      <div className="text-center space-y-6" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-gray-800">Introducing Our Product</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the features that make our product unique, essential, and transformative. Experience innovation like never before.
        </p>
      </div>

      {/* Feature Sections */}
      {/* Section 1: Image on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8" data-aos="fade-right">
        <img
          src="https://th.bing.com/th/id/OIP.yrTMITCurzHUHHgPfHbXJgHaD5?rs=1&pid=ImgDetMain"
          alt="Product Feature 1"
          className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="mt-6 md:mt-0 text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Virtual Canvas</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          The Virtual Canvas reimagines digital creativity, offering a limitless workspace for users to visualize, design, and refine ideas in real time. Featuring a user-friendly interface and extensive toolsets, it provides seamless collaboration capabilities, making it a preferred choice for creative teams and professionals alike. With support for various media formats and advanced customization options, the Virtual Canvas enables users to transform concepts into polished projects with ease and precision, adapting to a range of creative workflows.
          </p>
        </div>
      </div>

      {/* Section 2: Text on the left, image on the right */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8" data-aos="fade-left">
        <div className="md:w-1/2 text-center md:text-right space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Virtual Keyboard</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Our Virtual Keyboard enhances typing efficiency with responsive, adaptive layouts that cater to individual styles and preferences. Equipped with predictive text, multilingual support, and customizable themes, it transforms the typing experience into one that is both personal and productive. The keyboard is compatible across multiple devices and platforms, ensuring fluid input, reduced errors, and quick access to commonly used symbols and commands, making it an essential tool for both professional and personal use.
          </p>
        </div>
        <img
          src="https://thecodacus.com/static/a82fb457f9275cc5ce568a3e9c3557b2/4a9ee/guesture-recognition-technology-blog-feature-image.jpg"
          alt="Product Feature 2"
          className="w-full md:w-1/2 rounded-lg shadow-lg mt-6 md:mt-0 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Section 3: Image on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8" data-aos="fade-right">
        <img
          src="https://cdn.windowsreport.com/wp-content/uploads/2021/04/virtual-keyboard.jpg"
          alt="Product Feature 3"
          className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="mt-6 md:mt-0 text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Virtual Mouse</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          The Virtual Mouse elevates digital navigation through high-precision tracking and advanced gesture controls. Ideal for detailed tasks like graphic design as well as general browsing, it offers a highly ergonomic, adaptive experience that reduces strain and enhances control. With customizable button layouts, multi-surface compatibility, and seamless cross-platform support, the Virtual Mouse becomes an intuitive extension of your hand, bringing efficiency and comfort to any digital environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
