import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 px-6 sm:px-12 md:px-20 rounded-3xl shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-300 font-sans"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Who We Are
        </motion.h2>

        {/* Content */}
        <motion.p
          className="text-lg sm:text-xl leading-relaxed text-gray-200 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          At <span className="font-semibold text-yellow-400 font-sans">Tax Hummer</span>, we are on a mission to simplify finances, save time, 
          and help millions of Indian businesses and individuals manage their 
          financial lives more efficiently. As a technology-driven company, we 
          create trusted, insightful, and user-friendly platforms that empower 
          our clients to take control of their finances.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl leading-relaxed text-gray-200 mt-4 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          We are dedicated to building solutions that make tax compliance and 
          financial management <span className="font-semibold text-yellow-400">simpler, faster, and more accessible</span>. 
          By leveraging <span className="font-semibold text-yellow-400">AI and voice technology</span>, we aim to 
          revolutionize the way India handles taxes, ensuring a seamless 
          and hassle-free experience for everyone.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl leading-relaxed text-gray-200 mt-4 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          Our vision is to <span className="font-semibold text-yellow-400">transform the financial ecosystem</span> of India, helping 
          our clients build a healthier relationship with money while saving 
          both time and resources.
        </motion.p>
      </div>
    </section>
  );
};


export default WhoWeAre;
