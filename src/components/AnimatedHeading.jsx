import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = () => {
  const words = "Smart ITR Filing".split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative my-10">
      {/* Decorative elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-6 -left-6 w-12 h-12 bg-purple-200 rounded-full blur-lg my-10"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-200 rounded-full blur-lg"
      />
      
      {/* Main heading */}
      <motion.div
        className="relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap justify-center gap-x-4 text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={child}
              className="inline-block"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Underline effect */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
      />
      
      {/* Subtle floating animation */}
      <motion.div
        animate={{
          y: ['-2px', '2px', '-2px'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -z-10 inset-0 opacity-50"
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-100/20 to-blue-100/20 blur-xl" />
      </motion.div>
    </div>
  );
};

export default AnimatedHeading;