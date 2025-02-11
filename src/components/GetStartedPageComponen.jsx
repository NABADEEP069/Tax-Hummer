import React from "react";
import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GetStartedPageComponent = () => {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-10 mt-16 md:mt-0">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center w-full max-w-6xl"
      >
        {/* Large Enterprises */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-purple-300 to-purple-200 rounded-3xl shadow-xl p-6 md:p-10 w-full md:w-[500px] h-auto md:h-[400px] border border-purple-300 hover:shadow-3xl transition-all transform hover:scale-105"
        >
          {/* Icon */}
          <div className="w-16 h-16 md:w-24 md:h-24 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-lg mb-4 sm:mb-0 flex-shrink-0">
            <Briefcase size={32} className="md:w-12 md:h-12" />
          </div>

          {/* Text Content */}
          <div className="sm:ml-6 text-center sm:text-left flex-grow">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Large Enterprises</h2>
            <p className="text-gray-700 mt-2 text-base md:text-lg">Access your business solutions</p>
            <ul className="mt-4 space-y-2 text-gray-800 text-base md:text-lg">
              <li>✔ GST</li>
              <li>✔ Max ITC</li>
              <li>✔ Accounts Payable</li>
              <li>✔ e-Invoicing & More</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto mt-5 px-6 py-3 text-base md:text-lg bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition cursor-pointer"
              onClick={navigateToContact}
            >
              Request a demo
            </motion.button>
          </div>
        </motion.div>

        {/* Individuals */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-pink-400 to-pink-200 rounded-3xl shadow-xl p-6 md:p-10 w-full md:w-[500px] h-auto md:h-[400px] border border-pink-300 hover:shadow-3xl transition-all transform hover:scale-105"
        >
          {/* Icon */}
          <div className="w-16 h-16 md:w-24 md:h-24 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg mb-4 sm:mb-0 flex-shrink-0">
            <User size={32} className="md:w-12 md:h-12" />
          </div>

          {/* Text Content */}
          <div className="sm:ml-6 text-center sm:text-left flex-grow">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-800">Individuals</h2>
            <p className="text-gray-700 mt-2 text-base md:text-lg">Access your ITR filing</p>
            <ul className="mt-4 space-y-2 text-gray-800 text-base md:text-lg">
              <li>✔ ITR Filing</li>
              <li>✔ Get expert assistance</li>
              <li>✔ Revise your filing</li>
              <li>✔ File belated Return</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto mt-5 px-6 py-3 text-base md:text-lg bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition cursor-pointer"
              onClick={navigateToContact}
            >
              File now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetStartedPageComponent;