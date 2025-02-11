import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const FounderSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-50 py-16 px-6 sm:px-12 lg:px-24 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        {/* Founder Image */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 bg-purple-300 rounded-full overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="founderimage.webp" // Replace with actual image URL
            alt="Bikash Pandey"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center sm:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4 font-sans">Meet Our Founder</h2>
          <p className="text-lg text-gray-800 leading-relaxed font-sans">
            <span className="font-semibold text-purple-700 font-sans">Tax Hummer</span> was founded by Bikash Pandey, a taxation expert with over 7 years of experience in the field. 
            His deep understanding of the complexities of tax filing inspired him to build a cutting-edge AI-driven platform that simplifies the process using voice technology. 
            Passionate about innovation and accessibility, Bikash’s vision is to make tax filing faster, easier, and stress-free for everyone.  
            His mission is to lead India into a smarter, tech-driven future for tax compliance, placing Tax Hummer at the forefront of the digital tax revolution.
          </p>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-gray-700 text-lg font-sans">
            <a
              href="mailto:Ceo@taxhummer.in"
              className="flex items-center gap-2 hover:text-purple-800 transition"
            >
              <FaEnvelope className="text-purple-600" /> Ceo@taxhummer.in
            </a>
            <a
              href="https://www.linkedin.com/in/bikash-pandey-601b3519a/"
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

export default FounderSection;
