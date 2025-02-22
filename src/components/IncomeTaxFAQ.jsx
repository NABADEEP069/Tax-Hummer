import React, { useState } from 'react';
import {
  ChevronDown, Info, Calculator, FileText, BookOpen,
  Landmark, Receipt, Shield, Wallet, Building,
  PieChart, ScrollText, HeartHandshake, Sparkles,
  PiggyBank, Clock, AlertCircle, HomeIcon, BrainCircuit
} from 'lucide-react';

const TaxFAQ = () => {
  const [activeSection, setActiveSection] = useState('income');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = {
    income: {
      title: "Income Tax",
      icon: <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 font-sans" />,
      questions: [
        {
          id: 'what-is-tax',
          question: "What is Income Tax?",
          answer: "Income tax is a direct tax imposed by the government on an individual's or entity's earnings. It is paid annually based on earnings in a financial year (April 1 – March 31).",
          icon: <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 font-sans" />
        },
        {
          id: 'who-pays',
          question: "Who needs to file Income Tax Return (ITR)?",
          answer: "You must file an ITR if:\n• Your annual income exceeds ₹2.5 lakh (for individuals below 60 years)\n• Your income exceeds ₹3 lakh (for senior citizens above 60 years)\n• Your income exceeds ₹5 lakh (for super senior citizens above 80 years)\n• You have foreign income or assets\n• You want to claim a tax refund\n• Your business turnover exceeds specified limits",
          icon: <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 font-sans" />
        },
        {
          id: 'due-dates',
          question: "What are the due dates for filing ITR?",
          answer: "• Individual taxpayers: 31st July (for non-audit cases)\n• Businesses requiring audit: 30th September",
          icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
        },
        {
          id: 'penalties',
          question: "What are the penalties for late filing?",
          answer: "• ₹1,000 for income below ₹5 lakh\n• ₹5,000 for income above ₹5 lakh (before December 31st)\n• ₹10,000 for late filing beyond December 31st",
          icon: <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 font-sans" />
        }
      ]
    },
    taxSaving: {
      title: "Tax Saving",
      icon: <PiggyBank className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
      questions: [
        {
          id: 'how-to-save',
          question: "How can I reduce my tax liability?",
          answer: "You can save taxes using these deductions:\n\n🔹 Section 80C (Up to ₹1.5 lakh deduction)\n• PPF, EPF, ELSS mutual funds\n• Tax-saving FDs, NSC, LIC premium\n• Home loan principal repayment\n\n🔹 Section 80D (Health Insurance)\n• ₹25,000 deduction for self/spouse/children\n• ₹50,000 deduction for senior citizen parents\n\n🔹 Section 80E (Education Loan Interest)\n• Interest paid on education loans is fully deductible\n\n🔹 Section 24(b) (Home Loan Interest)\n• Up to ₹2 lakh deduction on home loan interest\n\n🔹 HRA (House Rent Allowance)\n• Salaried individuals in rented houses can claim\n\n🔹 NPS – Section 80CCD(1B)\n• Additional ₹50,000 deduction",
          icon: <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 font-sans" />
        },
        {
          id: 'tax-regime',
          question: "Old vs New Tax Regime - Which is better?",
          answer: "Choose based on your situation:\n\n✅ Old Tax Regime:\n• Allows deductions (80C, 80D, HRA, etc.)\n• Better if you have high deductions\n\n✅ New Tax Regime:\n• Lower tax rates\n• No deductions allowed\n• Better if you don't claim many deductions",
          icon: <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 font-sans" />
        }
      ]
    },
    business: {
      title: "Business",
      icon: <Building className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
      questions: [
        {
          id: 'business-itr',
          question: "Do businesses need to file ITR?",
          answer: "Yes, businesses must file ITR-3, ITR-4, or ITR-5/6 based on their structure (sole proprietorship, partnership, LLP, or company).",
          icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
        },
        {
          id: 'presumptive-tax',
          question: "What is Presumptive Taxation?",
          answer: "Under Section 44AD, small businesses (turnover ≤ ₹2 crore) can declare 8% of turnover as income and pay tax on it—no need to maintain detailed books.",
          icon: <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
        },
        {
          id: 'business-deductions',
          question: "What deductions can businesses claim?",
          answer: "Businesses can claim deductions for:\n• Office rent & expenses\n• Salaries & wages paid\n• Depreciation on assets\n• Business loans & interest payments\n• Marketing & advertising costs",
          icon: <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
        }
      ]
    },

  };

  return (
    <div className="w-full my-7">
      {/* Header */}

      <div className="text-center py-6 px-4 ">
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl sm:text-3xl font-bold text-gray-800">
          {/* Image on Top (small screens) & Side (large screens) */}
          <img
            src="faq.webp"
            alt="FAQ"
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
          Tax FAQ
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mt-2 font-sans">
          Everything you need to know about taxes in India
        </p>
      </div>

      <div className="p-2 sm:p-6 ">
        {/* Section Tabs - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 sm:flex-wrap sm:justify-center no-scrollbar justify-evenly lg:gap-4 font-sans">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`
                flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium
                whitespace-nowrap transition-all duration-300 transform hover:scale-105
                ${activeSection === key
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100'}
              `}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-5 font-sans">
          {sections[activeSection].questions.map((item) => (
            <div
              key={`${activeSection}-${item.id}`}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex items-center justify-between p-3 sm:p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  {item.icon}
                  <span className="font-medium text-sm sm:text-base text-gray-800">{item.question}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300
                    ${openQuestions[item.id] ? 'rotate-180' : ''}
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openQuestions[item.id] ? 'max-h-[1000px]' : 'max-h-0'}
                `}
              >
                <div className="p-3 sm:p-4 bg-gray-50 text-xs sm:text-sm text-gray-700 whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TaxFAQ;