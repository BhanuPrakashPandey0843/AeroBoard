// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-white font-extrabold text-2xl cursor-pointer"
        >
          <div className="bg-white text-green-600 font-bold p-2 rounded-md shadow-md">AB</div>
          <span>AeroBoard</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {['Home', 'Features', 'How it Works', 'Presentation', 'Video'].map((item) => (
            <li
              key={item}
              className="relative hover:text-green-200 transition duration-300 cursor-pointer group"
            >
              <Link to={`/${item.replace(/\s+/g, '-').toLowerCase()}`} className="relative z-10">{item}</Link>
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-green-200 w-0 group-hover:w-full transition-all duration-300"
              ></motion.span>
            </li>
          ))}
          {/* Enhanced "Contact Us" Button */}
          <li>
            <Link
              to="/contact"
              className="relative bg-white text-green-600 py-1 px-4 rounded-full shadow-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ opacity: 0.3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 60%)',
                }}
              ></motion.div>
            </Link>
          </li>
          {/* Enhanced "Developer" Button */}
          <li>
            <Link
              to="/development"
              className="relative bg-green-800 text-white py-1 px-4 rounded-full shadow-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Developer
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ opacity: 0.3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 60%)',
                }}
              ></motion.div>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-green-500 to-green-600 text-white transform shadow-lg md:hidden"
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col items-start p-6 space-y-6 text-lg font-semibold">
          {['Home', 'Features', 'How it Works', 'Presentation', 'Video'].map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={toggleSidebar}
                className="block w-full py-3 text-center transition-all duration-300 text-white font-semibold hover:text-green-200"
              >
                {item}
              </Link>
            </li>
          ))}
          {/* Enhanced "Contact Us" Button in Mobile Menu */}
          <li className="w-full">
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className="relative block w-full py-3 text-center transition-all duration-300 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105"
            >
              Contact Us
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ opacity: 0.3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 60%)',
                }}
              ></motion.div>
            </Link>
          </li>
          {/* Enhanced "Developer" Button in Mobile Menu */}
          <li className="w-full">
            <Link
              to="/development"
              onClick={toggleSidebar}
              className="relative block w-full py-3 text-center transition-all duration-300 bg-green-800 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105"
            >
              Developer
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ opacity: 0.3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 60%)',
                }}
              ></motion.div>
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
