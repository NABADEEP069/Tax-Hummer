import React from 'react';
import { motion } from 'framer-motion';
import Phone from './Phone';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] px-4 py-16 overflow-hidden gap-5 lg:gap-2 lg:mt-10 my-7">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50" />
        
        {/* Animated Circles */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-indigo-200 opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      {/* Content Section */}
      <motion.div 
        className="relative z-10 lg:w-[45%] text-center lg:text-left px-4 lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative Element */}
        <motion.div 
          className="absolute -left-4 top-20 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <h1 className="space-y-3">
          <motion.span 
            className="block text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mt-20 lg:mt-5 text-black leading-tight font-sans"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Smart file and Save money  
            <span className="italic font-roboto text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 relative">
            in  
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.span>
          <motion.span 
            className="block text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-black leading-tight font-sans"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            three  
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-roboto">
            simple
            </span>
            steps
          </motion.span>
        </h1>
        
        <motion.p 
          className="mt-6 text-lg lg:text-xl xl:text-2xl font-medium text-black max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="font-semibold text-black relative inline-block">
            India's first
            <motion.div 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </span>
          {' '}AI-Powered tax and financial services software platform
        </motion.p>
        
        
        <div className="absolute -right-10 bottom-0 w-20 h-20 opacity-10">
          <motion.div 
            className="w-4 h-4 rounded-full bg-purple-500 absolute"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-indigo-500 absolute left-10"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
   
      {/* Dual Phone Mockup Container */}
      <div className="relative lg:w-[50%] flex items-center justify-center mt-6 lg:mt-0 lg:">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
 
        {/* <div className="relative w-full max-w-md lg:max-w-[600px] xl:max-w-[700px]">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <Phone />
          </motion.div> */}

          {/* Second Phone - Adjusted positioning for larger screens */}
          {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute lg:left-[10%] top-[10%] z-10 transform 
            scale-[1.1] opacity-[0.9] lg:scale-[1.15] lg:opacity-[0.95] xl:scale-[1.2] xl:left-[15%] xl:top-[12%]"
        >
            <Phone />
          </motion.div> */}
          <Phone/>
        </div>
      </div>
    
  );
};

export default HeroSection;
