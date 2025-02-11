import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaRegQuestionCircle } from 'react-icons/fa';
import { MdOutlineAttachMoney, MdOutlineSecurity, MdOutlineMic, MdOutlineSupportAgent } from 'react-icons/md';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const faqData = [
  {
    question: 'What are the ITR filing plans available with Tax Hummer?',
    answer: (
      <>
        Tax Hummer offers four tailored ITR filing plans:
        <ul className="list-disc ml-5 mt-2 text-purple-700">
          <li>💼 <strong>Salary Individual</strong> – For salaried individuals with standard income sources.</li>
          <li>📊 <strong>Salary Individual Pro</strong> – For salaried individuals with additional deductions and exemptions.</li>
          <li>🏡 <strong>Capital Gain Tax</strong> – For individuals with capital gains from stocks, real estate, or other assets.</li>
          <li>🌍 <strong>Foreign Tax</strong> – For individuals with foreign income or NRI taxation needs.</li>
        </ul>
        <br />
        <strong>✨ Filing Methods:</strong>
        <ul className="list-disc ml-5 text-pink-600">
          <li>📄 <strong>Form 16 Upload</strong> – Auto-fill with ease.</li>
          <li>📝 <strong>Manual Entry</strong> – Enter details manually.</li>
          <li>🎙️ <strong>AI Voice Filing</strong> – Use voice commands to file!</li>
        </ul>
      </>
    ),
    icon: <MdOutlineAttachMoney className="text-pink-500 text-xl" />,
  },
  {
    question: 'Does Tax Hummer offer CA-assisted income tax filing?',
    answer:
      'Currently, Tax Hummer focuses on an AI-driven tax filing process. However, if needed, our team can guide you step-by-step through the filing journey.',
    icon: <MdOutlineSupportAgent className="text-purple-500 text-xl" />,
  },
  {
    question: 'What are the benefits of using Tax Hummer for my ITR filing?',
    answer: (
      <ul className="list-disc ml-5 text-purple-700">
        <li>⚡ <strong>Fast & Easy</strong> – File your ITR in minutes.</li>
        <li>🎙️ <strong>AI Voice Filing</strong> – File taxes using voice commands!</li>
        <li>✅ <strong>Accuracy Guaranteed</strong> – Automated error-checking ensures precision.</li>
        <li>🔒 <strong>Secure & Reliable</strong> – Advanced security for data protection.</li>
      </ul>
    ),
    icon: <MdOutlineSecurity className="text-pink-500 text-xl" />,
  },
  {
    question: 'Can we file ITR without a CA?',
    answer:
      'Yes! With Tax Hummer’s AI-powered system, you don’t need a CA. Our intelligent platform ensures accuracy and compliance for hassle-free filing.',
    icon: <MdOutlineMic className="text-purple-500 text-xl" />,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 my-20">
      <AnimatedBackground className="z-10"/>

      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12 border border-purple-300/40">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-10">
          <FaRegQuestionCircle className="inline-block mr-2 text-pink-500" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 shadow-md rounded-xl border-l-4 border-purple-500 transition-transform transform hover:scale-105"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-3">
                  {faq.icon}
                  <h3 className="text-xl font-semibold text-purple-800">{faq.question}</h3>
                </div>
                {openIndex === index ? (
                  <FaChevronUp className="text-pink-500" />
                ) : (
                  <FaChevronDown className="text-purple-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-5 text-gray-700 bg-purple-50 rounded-b-xl">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default FAQSection;
