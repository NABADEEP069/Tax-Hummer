import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsForEveryone = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const cards = [
    { 
      title: "Salary Individual(₹999)", 
      baseDescription: "For salaried individuals with straightforward income sources", 
      fullDescription: "This plan is for salaried individuals with straightforward income sources such as salary, bank interest, and savings. It simplifies tax filing for employees by considering deductions under various sections like 80C, 80D, and standard deductions.",
      mobileDescription: "For salaried individuals with basic income sources. Includes standard deductions and basic tax filing.",
      illustration: "627.jpg",
      hoverGradient: "bg-blue-400",
      path: "/plans"
    },
    { 
      title: "Salary Individual Pro(₹1439)", 
      baseDescription: "Advanced plan for salaried individuals with multiple income sources",
      fullDescription: "A more advanced version of the Salary Individual plan, this option is for salaried individuals with additional income sources, such as rental income, business side income, or capital gains from investments. It offers a more detailed tax optimization strategy.",
      mobileDescription: "Advanced plan for multiple income sources, including rental and business income.",
      illustration: "54740.jpg",
      hoverGradient: "bg-orange-400",
      path: "/plans"
    },
    { 
      title: "Capital Gain Pro(₹2429)", 
      baseDescription: "Specialized plan for investment-based income",
      fullDescription: "Designed for individuals earning from the sale of stocks, mutual funds, real estate, or other capital assets, this plan helps in computing long-term and short-term capital gains, indexation benefits, and applicable exemptions under Income Tax laws.",
      mobileDescription: "For stock, mutual fund & real estate gains. Includes capital gains calculation.",
      illustration: "5334521.jpg",
      hoverGradient: "bg-green-400",
      path: "/plans"
    },
    { 
      title: "Foreign Income(₹3419)", 
      baseDescription: "Comprehensive plan for international income sources",
      fullDescription: "This plan is for individuals with foreign income, including NRIs, freelancers with international clients, or those receiving foreign dividends. It ensures DTAA compliance and helps claim foreign tax credits.",
      mobileDescription: "For NRIs & foreign income. Includes DTAA compliance & tax credits.",
      illustration: "10075609.jpg",
      hoverGradient: "bg-purple-400",
      path: "/plans"
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-8 items-start hidden sm:grid">
        {/* Left Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative aspect-square p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.path)}
            >
              {/* Base Content */}
              <div className={`transition-opacity duration-300 h-full flex flex-col justify-between ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex-1 flex justify-center items-center mb-4">
                  <img src={card.illustration} alt={`Illustration for ${card.title}`} className="max-h-40 w-auto object-contain" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold font-[sans]">{card.title}</h3>
                  <span className="text-xl">→</span>
                </div>
              </div>

              {/* Hover Content */}
              <div 
                className={`absolute inset-0 p-6 bg-gradient-to-br ${card.hoverGradient} transition-opacity duration-300 
                ${hoveredCard === index ? 'opacity-100' : 'opacity-0'} pointer-events-none rounded-md flex items-center`}
              >
                <p className="text-white font-medium leading-relaxed">
                  {card.fullDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Heading Section */}
        <div className="text-left lg:pl-8 sticky top-8">
          <h2 className="text-5xl font-extrabold text-purple-700 font-sans">Plans Overview</h2>
          <p className="text-gray-600 mt-4">
            Tax Hummer offers four tax filing plans designed to cater to different taxpayer categories. 
            Each plan provides tailored solutions for accurate and hassle-free tax filing.
          </p>
        </div>
      </div>

      {/* Mobile Layout - Unchanged */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-3 mt-6 sm:hidden -my-10">
        <h2 className="text-3xl font-extrabold col-span-2 text-purple-700">Plans Overview</h2>
        <p className="text-gray-600 mt-1 col-span-2 text-xs">
          Choose from our specialized tax filing plans for your needs.
        </p>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-3 transition-all duration-300 flex flex-col justify-between rounded-md cursor-pointer shadow-md
              ${hoveredCard === index ? `bg-gradient-to-br ${card.hoverGradient} transform scale-105` : 'bg-white'}`}
            onClick={() => {
              if (hoveredCard === index) {
                handleCardClick(card.path);
              } else {
                setHoveredCard(hoveredCard === index ? null : index);
              }
            }}
          >
            {hoveredCard !== index ? (
              <>
                <div className="h-16 flex justify-center items-center mb-2">
                  <img src={card.illustration} alt={`Illustration for ${card.title}`} className="h-14 w-14 object-contain" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold">{card.title}</h3>
                  <span className="text-sm">→</span>
                </div>
              </>
            ) : (
              <div className="p-1">
                <p className={`text-1xs font-[sans] leading-tight ${card.hoverGradient.includes('from-') ? 'text-gray-700' : 'text-white'}`}>
                  {card.mobileDescription}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsForEveryone;