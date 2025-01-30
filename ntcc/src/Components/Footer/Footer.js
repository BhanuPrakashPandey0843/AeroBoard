import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
      {/* Main Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 animate-fadeIn">
        {/* Left Section: Branding */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold animate-pulse tracking-wide">
           
            AERO_BOARD®
          </h1>
        </div>

        {/* Right Section: "Book Now" button */}
        <div className="text-right md:ml-auto">
          <a
            href="/"
            className="text-xl font-semibold text-white border-b-4 border-transparent hover:border-white transition-all duration-300 hover:scale-110 transform"
          >
            Book Now
          </a>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      {/* Middle Section: Sitemap, Community, Social */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        <div>
          <h3 className="text-3xl font-bold mb-4">Sitemap</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">About</a></li>
            <li><a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">How it Works</a></li>
            <li><a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">Features
            </a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Community</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">FAQ</a></li>
            <li><a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">Twitter</a></li>
            <li><a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Social</h3>
          <ul className="space-y-3 text-lg flex flex-col items-center md:items-start">
            <li className="flex items-center space-x-3">
              <FaInstagram className="text-2xl" />
              <a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaTwitter className="text-2xl" />
              <a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">Github</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaFacebook className="text-2xl" />
              <a href="/" className="hover:text-gray-400 transition duration-300 hover:scale-105 transform">Gmail</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-center animate-fadeIn">
        <p className="text-xl">&copy; 
        AeroBoard® 2025</p>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            scrollToTop(); // Call the scrollToTop function
          }}
          className="text-lg hover:text-gray-400 transition duration-300 mt-4 md:mt-0 hover:animate-bounce hover:underline"
        >
          Back To Top &uarr;
        </a>
      </div>
    </footer>
  );
};

export default Footer;
