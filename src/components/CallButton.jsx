import { useState } from 'react';

const CallButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouch = () => {
    setIsHovered(!isHovered); // Toggle on tap
  };

  return (
    <button
      className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 -mx-4 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouch} // For mobile devices
    >
      <span
        className={`block transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Book Your Call
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        +91-9101306796
      </span>
    </button>
  );
};

export default CallButton;
