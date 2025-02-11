import React, { useRef } from 'react';
import { FaUserTie, FaGlobeAmericas, FaBuilding, FaChartLine, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';

const plans = [
  {
    title: 'Salary Individual',
    price: '₹999',
    features: ['Link your PAN', 'Upload Form 16', 'File ITR'],
    icon: <FaUserTie className="text-purple-500 text-4xl" />,
    color: 'border-purple-500',
  },
  {
    title: 'Salary Individual Pro',
    price: '₹1,439',
    features: [
      'Get Expert Assistance',
      'Multiple Form 16',
      'Director in Company',
      'Salary More Than 50L',
    ],
    icon: <FaBuilding className="text-pink-500 text-4xl" />,
    color: 'border-pink-500',
  },
  {
    title: 'Capital Gain Tax',
    price: '₹2,429',
    features: [
      'Capital from Stocks',
      'Capital from Property',
      'Gain from Lottery',
      'Easy to File',
    ],
    icon: <FaChartLine className="text-green-500 text-4xl" />,
    color: 'border-green-500',
  },
  {
    title: 'Foreign Tax',
    price: '₹3,419',
    features: [
      'Global Income',
      'International Reporting',
      'NRE/NRO A/C Income',
      'Maximize Benefits',
    ],
    icon: <FaGlobeAmericas className="text-blue-500 text-4xl" />,
    color: 'border-blue-500',
  },
];

const BusinessModel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Adjust the scroll distance
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Adjust the scroll distance
      behavior: 'smooth',
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative my-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-10">
        💼 Our Plans
      </h2>

      {/* Horizontal Scroll Plans */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 scrollbar-hide"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`min-w-[280px] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border-t-4 ${plan.color}`}
          >
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center">{plan.title}</h3>
            <p className="text-3xl font-bold text-center text-purple-600 mt-2">{plan.price}</p>
            <p className="text-sm text-center text-gray-500 mb-4">One-Time Payment ✅</p>

            <ul className="space-y-2 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <MdOutlineDone className="text-green-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>

            <button className="w-full mt-6 bg-purple-600 hover:bg-pink-500 text-white py-2 px-4 rounded-full font-semibold transition-all duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Scroll Buttons Below Plans */}
      <div className="flex justify-center gap-4 mt-6 sm:hidden">
        <button
          onClick={scrollLeft}
          className="bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-pink-500 transition-all"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          className="bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-pink-500 transition-all"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BusinessModel;
