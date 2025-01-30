import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is AeroBoard and how does it work?",
      answer:
        "AeroBoard is an innovative touch-free interaction system designed to provide users with an intuitive way to input text, control a virtual mouse, and perform other functions solely using hand gestures. The system utilizes advanced technologies like gesture recognition and motion tracking, which detect hand movements to simulate the functionality of traditional input devices such as a keyboard and mouse. Users can write in the air to type, control on-screen elements, and navigate their devices without physically touching anything. This technology is particularly beneficial in environments where traditional input devices are inconvenient or impractical, such as for individuals with mobility limitations or in sterile medical environments. AeroBoard's core features include an air-based virtual keyboard, a gesture-controlled mouse, and a customizable interface that adapts to the user's specific needs.",
    },
    {
      question: "What are the benefits of using AeroBoard’s virtual keyboard?",
      answer:
        "The virtual keyboard offered by AeroBoard allows users to input text by writing gestures in the air, removing the need for a physical keyboard. This is particularly useful for people with mobility impairments or in environments where physical contact with traditional devices is discouraged, such as hospitals, clean rooms, or while wearing protective gloves. The system tracks hand movements and converts them into characters, enabling seamless text input without touching any surface. Additionally, the virtual keyboard can be customized to suit individual preferences, and it’s adaptable to various languages and character sets. The flexibility and accessibility of AeroBoard’s virtual keyboard provide users with a comfortable, convenient alternative to traditional input methods.",
    },
    {
      question: "How does AeroBoard control the cursor with gestures?",
      answer:
        "AeroBoard enables users to control the cursor through hand gestures. The system utilizes advanced motion tracking technology to detect the user's hand movements in real-time, translating them into cursor movements on the screen. This allows for a highly responsive, touch-free way to interact with digital devices. The system's gesture recognition software is designed to detect a variety of hand shapes, positions, and motions, which are mapped to corresponding actions like moving the cursor, clicking, and scrolling. AeroBoard’s gesture-based cursor control eliminates the need for a physical mouse, making it ideal for situations where conventional devices are impractical or infeasible, such as for people with disabilities or in sterile environments where touching a mouse or keyboard is not allowed.",
    },
    {
      question: "Can AeroBoard be customized to fit different user needs?",
      answer:
        "Yes, AeroBoard is highly customizable to meet the needs of different users. The virtual keyboard layout, gesture recognition settings, and cursor control functions can all be adjusted based on user preferences. For instance, users can change the size and arrangement of the virtual keys, enabling a more personalized typing experience. Gesture controls can also be customized to accommodate different hand sizes or mobility limitations, ensuring that the system is accessible to as many people as possible. Whether the user is in a professional setting, a healthcare environment, or at home, AeroBoard’s adaptable interface makes it an ideal solution for various use cases and user requirements",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 transition-all duration-300 hover:text-blue-600">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-700 mb-4">Find answers to your questions below.</p>
          <motion.a
            href="/"
            className="text-lg text-blue-600 hover:text-blue-800 font-semibold transition duration-300 flex items-center justify-center mt-4"
            whileHover={{ scale: 1.05 }}
          >
            See More
            <FaChevronRight className="ml-2 text-sm" />
          </motion.a>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index}>
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex justify-between items-center p-4 cursor-pointer transition-all duration-300 rounded-lg ${
                  activeIndex === index ? "bg-blue-100 shadow-lg" : "hover:bg-gray-100"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}. {item.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronDown className="text-lg text-blue-600 transition-transform duration-300 transform rotate-180" />
                ) : (
                  <FaChevronRight className="text-lg text-gray-600 transition-transform duration-300" />
                )}
              </motion.div>

              {/* Answer Section */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden p-4 text-gray-600 text-md md:text-lg rounded-b-lg ${
                  activeIndex === index ? "bg-blue-50" : ""
                }`}
              >
                <p>{item.answer}</p>
              </motion.div>

              {/* Line Separator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activeIndex === index ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200"
              />
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <motion.a
            href="/"
            className="inline-block text-lg font-semibold text-white bg-black hover:bg-gray-800 transition duration-300 px-6 py-2 rounded-lg shadow-md transform hover:scale-105"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Read Terms &rarr;
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
