import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        {/* Illustration */}
        <motion.div
          className="w-24 h-24 sm:w-28 sm:h-28 bg-white-200 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="mission.webp" alt="Mission & Vision" className="lg:w-50 h-70 sm:w-24 sm:h-24 object-contain" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-xl font-semibold text-purple-800 mb-4 font-sans">Our Mission & Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold font-sans">
            <span className ="font-normal">
            Our goal is to empower every taxpayer and business in India with hassle-free, accurate, and tech-driven financial solutions.  
            By making tax filing simple and accessible, we contribute to a smarter, digital India. We envision building a $1 billion fintech ecosystem, 
            integrating tax filing, GST compliance, and financial management into a unified platform. Our commitment is to make financial services more efficient, affordable, and accessible for everyone in India.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
