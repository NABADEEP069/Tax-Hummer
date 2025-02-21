import React, { useState } from 'react';

const WhyChooseUsAIEnd = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track image loading state

  // Handle the image onLoad event to mark it as loaded
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-full space-y-8 sm:space-y-0">
        {/* Left Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left -my-10 lg:-my-10">
          <div className="transform transition-all duration-500 ease-out translate-x-0 opacity-100">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-6 leading-relaxed md:font-semibold md:max-w-3xl font-sans">
              <span className="font-semibold text-purple-800">
              End-to-End Financial Ecosystem – 
              </span>{' '}
              <span className="font-normal">
              One Platform, Complete Solutions
              Tax Hummer is more than a tax filing service—it’s a comprehensive financial ecosystem designed to simplify financial operations for individuals and businesses. From tax filing and compliance to banking, inventory management, and financial planning, our platform integrates everything in one place, ensuring convenience and efficiency.
              </span>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div 
          className="w-full sm:w-1/2 justify-center overflow-hidden hidden sm:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`transform transition-all duration-300 ease-in-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          >
            {/* Show a loader until the image is loaded */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white opacity-75 z-10">
                <div className="animate-spin rounded-full border-t-4 border-purple-600 w-8 h-8"></div>
              </div>
            )}

            <img
              src="endtoend.webp"
              alt="End-to-end Tax Solution"
              className="w-full max-w-md mx-auto object-contain lg:-my-10 lg:mx-10"
              width={400}
              height={320}
              loading="lazy"
              decoding="async"
              onLoad={handleImageLoad} // Call this function when image is loaded
              onError={(e) => {
                e.currentTarget.style.display = 'none'; // Hide the image on error
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsAIEnd;
