import React from 'react';
import CallButton from './CallButton';


const StillConfused = () => {
  return (
    <div className="py-12 mt-16 bg-gradient-to-r from-purple-200 to bg-purple-300 rounded-2xl shadow-lg">

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Container Div for everything */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-12">

          {/* Left Section: Heading and Description */}

          <div className="w-full sm:w-2/3 text-center sm:text-left">
            <h2 className="text-4xl font-bold text-purple-700 mb-4 animate__animated animate__fadeInUp">
              Still confused? Talk to our expert!
            </h2>
            <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              Get a 45-minute telephonic session with our experts to solve any queries on tax, finance, or compliance.
            </p>

            {/* Three Points Below Description */}
            <div className="text-left text-gray-700 mb-6">
              <ul className="list-disc pl-5">
                <li className="mb-2 list-none">✅Personalized advice based on your needs.</li>
                <li className="mb-2 list-none">✅Clarify any confusion about taxes, finance, or compliance.</li>
                <li className="mb-2 list-none">✅Access to industry-leading experts with years of experience.</li>
              </ul>
            </div>

            {/* Book a Call Section */}
            <div className="p-6 transition-all duration-300 mb-6 animate__animated animate__fadeInUp animate__delay-2s">

              <h3 className="text-2xl font-semibold text-gray-800 -mx-4">Book a 45-Minute Call</h3>
              <p className="text-gray-500 mt-2 mb-4 -mx-4">
                Speak directly with our expert for a one-on-one session to clarify your concerns and get the guidance you need.
              </p>
              <CallButton />

            </div>
          </div>

          {/* Right Section: Illustration for Larger Screens */}
          <div className="hidden sm:block w-1/3">
            {/* <a href="https://www.freepik.com/search">Icon by Sumitsaengtong</a> */}
            <img src="talk.jpg" alt="Consultation Illustration" className="w-full h-auto transform transition-all duration-300" />
          </div>
        </div>

        {/* Centered layout for smaller screens */}
        <div className="sm:hidden mt-8 text-center">
          {/* Only for small screens */}
          <img src="talk.jpg" alt="Consultation Illustration" className="w-72 h-auto mx-auto mb-6 transform transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default StillConfused;
