import React from 'react';
import {useNavigate} from 'react-router-dom';

const ReadyToGetStarted = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/plans');
  }

  return (
   
      <div className="w-full max-w-4xl mx-auto my-25 px-4 sm:px-6 lg:px-8 relative
      ">
        {/* Single Block for Text, Button, and Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 w-full max-w-4xl space-y-6 lg:space-y-0 lg:space-x-8 overflow-hidden -my-10">
          {/* Text Section */}
          <div className="text-center lg:text-left text-black space-y-6">
            <h2 className="text-3xl font-semibold font-sans">
              Ready to Get Started?
            </h2>
            <button className="bg-purple-600 text-white py-2 px-6  text-lg font-medium hover:bg-purple-700 shadow-lg transition-all duration-300 font-sans w-full sm:w-auto cursor-pointer hover:scale-105" onClick={handleClick}>
           View Our Plans
          </button>
          </div>

          {/* Image Section without border */}
          <div className="relative w-full max-w-sm lg:max-w-md flex justify-center">
            <img
              src="illu1.webp" 
              alt="Illustration"
              className="w-full h-auto rounded-lg" // Center the image
            />
          </div>
        </div>
      </div>
   
  );
};

export default ReadyToGetStarted;
