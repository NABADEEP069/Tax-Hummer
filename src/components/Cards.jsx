import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ imageSrc, title, description, buttonText, hoverContent, iconBgColor, hoverBgColor, isActive, onTouch, onButtonClick, variant }) => {
  const handleTouch = (e) => {
    e.preventDefault();
    onTouch();
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    onButtonClick();
  };

  // Map variants to specific background classes
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'purple':
        return `${isActive ? 'bg-gradient-to-br from-purple-200 to-purple-100' : ''} hover:bg-gradient-to-br hover:from-purple-200 hover:to-purple-100`;
      case 'blue':
        return `${isActive ? 'bg-gradient-to-br from-blue-200 to-blue-100' : ''} hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-100`;
      case 'green':
        return `${isActive ? 'bg-gradient-to-br from-green-200 to-green-100' : ''} hover:bg-gradient-to-br hover:from-green-200 hover:to-green-100`;
      default:
        return '';
    }
  };

  return (
    <div 
      className={`relative ${isActive ? 'is-active' : ''} group h-[320px] cursor-pointer`}
      onTouchStart={handleTouch}
      role="button"
      tabIndex={0}
    >
      <div className={`absolute inset-0 transition-all duration-300 -py-10 rounded-2xl hover:shadow-xl ${getBackgroundClasses()}`}>
        <div
          className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 ${iconBgColor} 
          flex items-center justify-center transition-all duration-300 
          group-hover:scale-110 group-hover:shadow-lg 
          ${isActive ? 'scale-110 shadow-lg' : ''} 
          rounded-2xl`}
        >
          <img src={imageSrc} alt="service icon" className="w-8 h-8" />
        </div>

        <div className="mt-12 p-6 text-center">
          <h2 className={`text-2xl font-extrabold text-gray-800 mb-3 
            transition-opacity duration-300
            ${isActive ? 'opacity-0' : ''} 
            group-hover:opacity-0`}
          >
            {title}
          </h2>
          <p className={`font-bold font-[Gilroy] mb-6 
            transition-opacity duration-300
            ${isActive ? 'opacity-0' : ''} 
            group-hover:opacity-0 
            text-gray-400`}
          >
            {description}
          </p>

          <div
            className={`absolute inset-x-6 top-32 transition-all duration-300
              ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'} 
              group-hover:opacity-100 group-hover:visible`}
          >
            <div className="space-y-3">
              <p className="text-gray-600 font-bold text-sm leading-relaxed -my-10 font-[Gilroy]">
                {hoverContent.join(' ')}
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={handleButtonClick}
          className="absolute bottom-6 left-6 right-6 bg-purple-500 text-white py-3 px-6 
            transition-all duration-300 hover:bg-purple-600 shadow-md"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      if (!window.matchMedia('(max-width: 768px)').matches) {
        setActiveCardIndex(null);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      imageSrc: 'itr.webp',
      title: 'ITR File',
      description: 'Easily file your Income Tax Returns with our intuitive platform.',
      buttonText: 'See product',
      iconBgColor: 'bg-purple-600',
      variant: 'purple',
      onButtonClick: () => {
        navigate('/plans');
      },
      hoverContent: [
        'Automated tax calculation system',
        'Real-time financial monitoring',
        'Compliance tracking dashboard',
        'Advanced reporting features',
      ],
    },
    {
      imageSrc: 'gst.webp',
      title: 'GST Filing',
      description: 'Our connected finance ecosystem is enabling new paths to efficiency.',
      buttonText: 'Explore more',
      iconBgColor: 'bg-blue-100',
      variant: 'blue',
      onButtonClick: () => {
        navigate('/gst-services');
      },
      hoverContent: [
        'Integrated financial systems',
        'Seamless data synchronization',
        'Automated reconciliation',
        'Enhanced security protocols',
      ],
    },
    {
      imageSrc: 'calculator.webp',
      title: 'Calculate Tax Liability',
      description: 'Know your Tax liability as per the latest budget 2025 updates.',
      buttonText: 'Calculate Now',
      iconBgColor: 'bg-green-100',
      variant: 'green',
      onButtonClick: () => {
        navigate('/taxcalculator');
      },
      hoverContent: [
        'Latest tax regulations',
        'Custom tax scenarios',
        'Budget impact analysis',
        'Tax saving recommendations',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            {...service} 
            isActive={isMobile && activeCardIndex === index}
            onTouch={() => {
              if (isMobile) {
                setActiveCardIndex(activeCardIndex === index ? null : index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;