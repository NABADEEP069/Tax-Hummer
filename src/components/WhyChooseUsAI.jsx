import React, { useState, useMemo } from 'react';

const WhyChooseUsAI = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track image loading state

  // Memoize floating points to prevent unnecessary recalculations
  const floatingPoints = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      color: ['red', 'blue', 'green', 'yellow', 'purple'][Math.floor(Math.random() * 5)],
      duration: `${Math.random() * 6 + 4}s`,
      delay: `${Math.random() * 2}s`,
    }));
  }, []);

  // Handle the image onLoad event to mark it as loaded
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Optimized Floating Points */}
      {floatingPoints.map(({ id, top, left, color, duration, delay }) => (
        <div
          key={id}
          className="absolute rounded-full w-4 h-4 opacity-75 animate-float"
          style={{
            top,
            left,
            backgroundColor: color,
            animationDuration: duration,
            animationDelay: delay,
          }}
        />
      ))}

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
            {/* Show a loader until the image is loaded */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white opacity-75 z-10">
                <div className="animate-spin rounded-full border-t-4 border-purple-600 w-8 h-8"></div>
              </div>
            )}

            <img
              src="AI.webp"
              alt="AI Tax Assistant"
              className="w-full max-w-md mx-auto object-contain lg:-my-10 lg:-mx-10"
              width={400}
              height={320}
              loading="lazy"
              decoding="async"
              onLoad={handleImageLoad} // Call this function when image is loaded
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left -my-10 lg:-my-10">
          <div className="transform transition-all duration-500 ease-out translate-x-0">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-6 leading-relaxed md:font-semibold md:max-w-3xl font-sans">
              <span className="font-semibold text-purple-800">
              AI-Powered Tax Compliance – 
              </span>{' '}
              Smart, Accurate, and Hassle-Free
              Keeping up with tax regulations can be overwhelming, but our AI-driven tax compliance system ensures that users stay ahead. From real-time tracking of tax laws to automated calculations and filing, Tax Hummer minimizes human errors and maximizes compliance efficiency. Whether it’s ITR, GST, or business taxation, our intelligent system guarantees precision and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsAI;
