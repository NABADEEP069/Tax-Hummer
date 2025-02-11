import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const CoFounderComponent = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to bg-purple-100 py-16 px-6 sm:px-12 lg:px-24 rounded-2xl shadow-lg my-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        {/* Founder Image */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 bg-purple-300 rounded-full overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="CoFounder.jpeg" // Replace with actual image URL
            alt="debashish kumar (DKD) deka"
            
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center sm:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4 font-sans">Meet our Co-founder and Director</h2>
          <p className="text-lg text-gray-800 leading-relaxed font-sans">
          Debashish brings years of experience building diverse businesses, driven by a core philosophy that emphasizes idea validation, cultivating high-performing and diverse teams, learning from setbacks, prioritizing customer feedback, optimizing operational processes, and maintaining a healthy work-life balance.  He believes strongly in adaptability and resilience as crucial elements for success.  Debashish's vision is to build businesses that bring organization and efficiency to previously unorganized sectors.
          </p>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-gray-700 text-lg font-sans">
          
            <a
              href="https://www.linkedin.com/in/debashish-kumar-deka-b5a889a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-800 transition"
            >
              <FaLinkedin className="text-purple-600" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoFounderComponent;
