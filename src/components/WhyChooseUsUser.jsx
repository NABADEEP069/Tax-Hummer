import React, { useState } from 'react';

const WhyChooseUsUser = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-full space-y-8 sm:space-y-0">
        {/* Left Image Section */}
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
            <img
              src="user.webp"
              alt="User-friendly Tax Interface"
              className="w-full max-w-md mx-auto object-contain lg:-my-10 lg:-mx-10"
              width={400}
              height={320}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left -my-10 lg:-my-10">
          <div className="transform transition-all duration-500 ease-out translate-x-0">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold font-sans mb-6 leading-relaxed md:font-semibold md:max-w-3xl">
              <span className="font-semibold text-purple-800">
              User-Friendly & Secure – 
              </span>{' '}
              A Platform You Can Trust
              Security and ease of use are at the core of Tax Hummer. Built with state-of-the-art encryption technology, the platform ensures that user data remains confidential and protected. The intuitive interface is designed for effortless navigation, making tax filing and financial management accessible to everyone, from individuals to enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsUser;