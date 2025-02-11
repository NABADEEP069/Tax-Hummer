import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeadingWithIllustration = () => {
  const [isHovered, setIsHovered] = useState(false);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.1,
      color: '#8b5cf6',
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const breakTextIntoWords = (text) => {
    return text.split(' ').map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={index}
        className="inline-block mr-1 md:mr-2"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <div
      className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden my-17"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 max-w-full overflow-hidden">
        {/* Left Section with Text */}
        <div className="w-full sm:w-1/2 max-w-2xl text-center sm:text-left">
          {/* Animated Heading with Word-by-Word Hover */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 leading-tight font-sans text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
          >
            {breakTextIntoWords('Clear & Connected Finances for Indian Taxpayers')}
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-4 md:mb-8 font-sans"
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
              },
            }}
          >
            {breakTextIntoWords('Revolutionizing Tax Filing with AI & Voice Technology')}
          </motion.p>

          {/* Animated Underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-4 md:mb-6 w-full lg:w-3/4"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5 }}
          />
        </div>

        {/* Right Section with Interactive Illustration */}
        <motion.div
          className="w-full sm:w-1/2 flex justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.5 },
          }}
        >
          {/* Display illustration on all screens but adjust its size */}
          <picture>
            {/* Add multiple formats for compatibility */}
            <source srcSet="tax.webp 600w, tax.webp 1200w, tax.webp 1800w" sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px" type="image/webp" />
            <img
              src="tax.jpg" // Fallback to a regular image if WebP isn't supported
              alt="Tax Illustration"
              className="w-full sm:max-w-md object-contain sm:block lg:-my-10"
              loading="lazy" // Enable lazy loading for the image
              style={{
                pointerEvents: 'none', // Prevents interfering with hover area
                maxWidth: '100%', // Ensure it doesn’t overflow container
                maxHeight: '100%', // Prevents the image from going outside its container
              }}
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.0,
                transition: { duration: 0.3 },
              }}
            />
          </picture>
        </motion.div>
      </div>
    </div>
  );
};

export default HeadingWithIllustration;
