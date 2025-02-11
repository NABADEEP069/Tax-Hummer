import React, { useState, useMemo } from 'react';

const WhyChooseUs = () => {
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
        {/* Left Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left -my-10 lg:-my-10">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed md:font-semibold md:max-w-3xl font-sans font-semibold">
            <span className="font-semibold text-purple-800 font-sans">
              Voice-Based ITR Filing – 
            </span>{' '}
            Taxes at the Speed of Speech
            Filing Income Tax Returns has never been simpler. With Tax Hummer’s voice-enabled ITR filing, users can effortlessly file their taxes by speaking their details.
            Our advanced AI processes the information, eliminating the need for manual data entry. No forms, no complexities—just seamless tax filing at your convenience.
          </p>
        </div>

        {/* Optimized Right Illustration */}
        <div 
          className="w-full sm:w-1/2 justify-center overflow-hidden hidden sm:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`transform transition-transform duration-300 ease-in-out ${
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
              srcSet="voice.webp 400w, voice.webp 800w, voice.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
              src="voice-800w.webp"  // Fallback image if `srcSet` fails
              alt="Tax Illustration"
              className="w-full max-w-md mx-auto object-contain lg:-my-10 lg:mx-10"
              width={400}
              height={320}
              loading="lazy" // Enable lazy loading for the image
              decoding="async"
              onLoad={handleImageLoad} // Call this function when image is loaded
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
