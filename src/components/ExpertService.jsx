import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// If you want the animated background, uncomment and adjust as needed:
// import AnimatedBackground from './AnimatedBackground';

const ExpertService = () => {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate('/plans');
  };

  return (
    <div className="relative py-16 bg-gray-100 overflow-hidden">
      {/* If you want the animated background, uncomment: */}
      {/* <AnimatedBackground /> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Looking for expert services?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            In addition to providing software services, we also offer expert services to help you
            manage your business and legal compliances.
          </p>
        </div>

        {/* Services in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (ITR Filing Assistance) */}
          <div className="p-6 transition-transform transform hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">
              For You
            </h3>
            <p className="text-gray-700 mb-4 font-medium">
              ITR Filing Assistance
            </p>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" />
                <span>Expert-guided filing for Salaried, Self-Employed, NRIs, & Capital Gains.</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" />
                <span>Maximize deductions & avoid penalties with 100% accuracy.</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" />
                <span>File your ITR quickly with AI-powered assistance.</span>
              </div>
            </div>
          </div>

          {/* Right Column (GST Filing Made Simple) */}
          <div className="p-6 transition-transform transform hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-800 mb-4">
              For Your Business
            </h3>
            <p className="text-gray-700 mb-4 font-medium">
              GST Filing Made Simple
            </p>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <FaCheckCircle className="text-pink-600 mr-2" />
                <span>Hassle-free GST return filing for businesses of all sizes.</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-pink-600 mr-2" />
                <span>Stay compliant & avoid late fees with timely filings.</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-pink-600 mr-2" />
                <span>Expert support for accurate calculations & reporting.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-10">
          <p className="text-lg sm:text-xl font-semibold text-purple-700 mb-5">
            File with confidence — <span className="text-pink-500">Let the experts handle it!</span>
          </p>
          <button
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white text-base sm:text-lg font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            onClick={handleExploreServices}
          >
            Explore Our Services <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertService;
