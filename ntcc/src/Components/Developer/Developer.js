import React from 'react';
import profileImage from './bhanu.jpg'; // Replace with your local image path

const Developer = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/', '_blank'); // Replace with your LinkedIn URL
  };

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="rounded-t-lg h-32 overflow-hidden relative">
        <img
          className="object-cover object-top w-full transition-transform transform hover:scale-110 duration-300"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden transform hover:rotate-3">
        <img
          className="object-cover object-center w-full h-full transition-transform transform hover:scale-105 duration-300"
          src={profileImage} // Local image
          alt="Profile"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold text-gray-800">Bhanu Prakash Pandey</h2>
        <p className="text-gray-500">Freelance Web Designer</p>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 fill-current text-blue-900 transition-transform transform hover:scale-125 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <div>2k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 fill-current text-blue-900 transition-transform transform hover:scale-125 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
          </svg>
          <div>10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 fill-current text-blue-900 transition-transform transform hover:scale-125 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          <div>15</div>
        </li>
      </ul>
      <div className="p-4 border-t mx-8 mt-2">
        <button
          onClick={handleLinkedInClick}
          className="w-1/2 block mx-auto rounded-full bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 flex items-center justify-center transition-transform transform hover:scale-110 duration-300 hover:shadow-lg hover:shadow-green-400"
        >
          <svg
            className="w-4 h-4 fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-10.66 19h-3.04v-10h3.04v10zm-1.52-11.25c-.97 0-1.75-.8-1.75-1.75s.78-1.75 1.75-1.75 1.75.8 1.75 1.75-.78 1.75-1.75 1.75zm13.18 11.25h-3.04v-5.6c0-1.33-.47-2.25-1.64-2.25-.89 0-1.42.6-1.65 1.18-.08.2-.1.49-.1.78v5.89h-3.04v-10h3.04v1.36c.4-.62 1.12-1.36 2.72-1.36 1.99 0 3.48 1.3 3.48 4.08v6.92z"/>
          </svg>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Developer;
