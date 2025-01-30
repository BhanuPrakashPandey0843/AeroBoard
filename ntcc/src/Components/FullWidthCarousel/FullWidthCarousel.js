import React, { useEffect, useState } from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg'; 
import image4 from './image4.jpg'; 
import image5 from './image5.jpg'; 
import image6 from './image6.jpg'; 
import image7 from './image7.jpg'; 
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';

// Full width carousel component
const FullWidthCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, image2, image3 , image4 , image5, image6, image7 , image8, image9, image10];

    // Update the slide index with wrap-around effect
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set up the interval in useEffect, with currentIndex as a dependency
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change images every 3 seconds
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [currentIndex]); // Add currentIndex to dependency array

    return (
        <div className="relative w-full h-64 md:h-96 lg:h-screen overflow-hidden">
            <div
                className="carousel flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full">
                        <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            {/* Carousel controls */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none transition-transform transform hover:scale-110"
                    onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none transition-transform transform hover:scale-110"
                    onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FullWidthCarousel;
