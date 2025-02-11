import React from "react";
import { motion } from "framer-motion";
import { Mic, BookCopy, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedBackground from "../components/AnimatedBackground";

const ITRFiling = () => {
  const sections = [
    { name: "Form 16 Filing", icon: <BookCopy className="w-8 h-8" />, path: "/get-started" },
    { name: "Manual Filing", icon: <Edit className="w-8 h-8" />, path: "/get-started" },
    { name: "Voice Filing", icon: <Mic className="w-8 h-8" />, path: "/get-started" },
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <NavBar />
      <div className="py-10 px-4 sm:px-6 md:px-12 my-10">
        <div className="flex flex-col justify-center items-center p-4 sm:p-6">
          <AnimatedHeading/>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl justify-center items-center min-h-screen px-4 sm:px-6 py-10">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-xl border border-gray-200/50 text-center transition-all cursor-pointer hover:shadow-2xl min-h-[250px] flex flex-col justify-between"
              >
                <Link to={section.path} className="flex flex-col items-center space-y-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-white/80 rounded-full shadow-md text-purple-800"
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-lg sm:text-xl font-bold font-sans text-gray-900">{section.name}</h2>
                  <p className="text-sm text-gray-600 px-2 font-sans font-bold">
                    {section.name === "AI Filing"
                      ? "Fast and smart AI-assisted tax filing."
                      : section.name === "Manual Filing"
                      ? "Complete control with manual input."
                      : "File taxes with your voice effortlessly."}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all shadow-lg w-full sm:w-auto font-bold font-sans"
                  >
                    Get Started →
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITRFiling;