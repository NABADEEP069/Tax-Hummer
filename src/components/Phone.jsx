import React from 'react';
import { Bell, User, Search, Home, FileText, ClipboardList, Sparkles, Wallet, TrendingUp, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import TaxHummerLogo from './TaxHummerLogo';
import { useNavigate } from 'react-router-dom';

const TaxApp = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 lg:w-1/2 flex justify-center items-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-300 overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
          <div className="w-40 h-6 bg-black rounded-b-2xl"></div>
        </div>

        {/* Main Content Area */}
        <div className="h-full overflow-y-auto scrollbar-hide px-4 pb-20">
          {/* Header */}
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="pt-8 flex justify-between items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <TaxHummerLogo/>
            </motion.div>
            <div className="flex space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 20 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Bell className="text-purple-600 w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <User className="text-purple-600 w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mt-4"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-4 bg-gray-100 rounded-lg text-gray-600 transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Search className="absolute right-3 top-2.5 text-purple-600 w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Cards Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 space-y-3"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-purple-100 p-4 rounded-xl relative overflow-hidden"
            >
              <motion.div
                className="absolute right-2 top-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
              </motion.div>
              
              <h2 className="text-lg font-semibold font-sans">Simplify Your Taxes</h2>
              <p className="text-sm text-gray-600 mb-2 font-sans">File in Minutes with Ease!</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 text-white px-4 py-1.5 rounded-lg text-sm font-sans cursor-pointer" onClick={() => navigate('/itrfiling')}
              >
                Start Filing
              </motion.button>
              
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-purple-100 p-4 rounded-xl relative overflow-hidden"
            >
              <motion.div
                className="absolute right-2 top-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
              </motion.div>
              
              <h2 className="text-lg font-semibold font-sans">Tax Calculator</h2>
              <p className="text-sm text-gray-600 mb-2 font-sans">Calculate your tax with Ease!</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 text-white px-4 py-1.5 rounded-lg text-sm font-sans cursor-pointer" onClick={() => navigate('/taxcalculator')}
              >
                Calculate
              </motion.button>
              
            </motion.div>
            

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-purple-200 p-4 rounded-xl relative"
            >
              
              <motion.div
                className="absolute right-2 top-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Wallet className="w-4 h-4 text-purple-600 opacity-50" />
                
              </motion.div>
              <h2 className="text-lg font-semibold font-sans">Hire Financial Advisor</h2>
              <p className="text-sm text-gray-600 mb-2 font-sans">Start investing in mutual funds for saving tax</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-4 py-1.5 rounded-lg text-sm font-sans"
                onClick={() => navigate("/plans")}
              >
                Book Advisor
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-purple-200 p-4 rounded-xl"
              >
                <TrendingUp className="w-4 h-4 text-purple-600 mb-2" />
                <h3 className="text-base font-semibold font-sans">Top mutual funds</h3>
                <p className="text-xs text-gray-600 font-sans">Axis bank small cap funds</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100 p-4 rounded-xl"
              >
                <BookOpen className="w-4 h-4 text-purple-600 mb-2" />
                <h3 className="text-base font-semibold font-sans">Blogs</h3>
                <p className="text-xs text-gray-600 font-sans">Continue Reading...</p>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-purple-100 p-4 rounded-xl"
            >
              <h3 className="text-base font-semibold font-sans">Your Tax Summary</h3>
              <p className="text-xs text-gray-600 font-sans">See Now</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-purple-200 p-4 rounded-xl"
            >
              <h2 className="text-lg font-semibold font-sans">Investment To Save</h2>
              <p className="text-sm text-gray-600 mb-2 font-sans">Start investing in mutual funds for saving tax</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-4 py-1.5 rounded-lg text-sm font-sans"
              >
                Start Investing
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <motion.div 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 w-full bg-purple-100 border-t border-purple-200 rounded-b-[2rem] pb-4"
        >
          <div className="flex justify-around py-2">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-purple-600"
            >
              <Home className="w-5 h-5" />
              <span className="text-xs font-sans">Home</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-purple-400"
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs font-sans">Tax</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center -mt-6 shadow-md"
              >
                <span className="text-white text-xl">+</span>
              </motion.div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-purple-400"
            >
              <ClipboardList className="w-5 h-5" />
              <span className="text-xs font-sans">Orders</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-purple-400"
            >
              <User className="w-5 h-5" />
              <span className="text-xs font-sans">Profile</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TaxApp;