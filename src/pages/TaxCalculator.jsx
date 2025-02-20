import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorComponent from "../components/Calculator";
import CalculatorContent from "../components/CalculatorContent";

function TaxCalculator() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <NavBar />

      <div className="relative w-full">
        <img
          src="/WhatsApp Image 2025-02-12 at 12.17.51_94f9194a.jpg"
          alt="Tax Calculator"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-purple-500 bg-opacity-50 flex flex-col justify-center items-center text-white p-4 text-center">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2 mt-5">
            Income Tax Calculator - FY 2025-2026
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-4 px-2">
            Plan your taxes efficiently with our updated calculator
          </p>
          <button
            onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition duration-300"
          >
            Calculate Now
          </button>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="flex justify-center my-4 sm:my-6 px-4 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          <Link to="/" className="text-purple-600 hover:underline">HOME</Link>
          <span className="mx-1 sm:mx-2">&gt;</span>
          <Link to="/taxcalculator" className="text-purple-600 hover:underline">CALCULATORS</Link>
          <span className="mx-1 sm:mx-2">&gt;</span>
          <span className="text-gray-900">INCOME TAX CALCULATOR - FY 2025-2026</span>
        </p>
      </nav>

      {/* Update Notice */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 px-4 text-center animate-pulse">
        
        <span className="mt-2 sm:mt-0 sm:ml-4 rounded-full bg-orange-100 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-700 shadow-lg animate-bounce">
        Updated as per the  Latest Budget on <strong>1st Feb, 2025</strong>.
        </span>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mb-12">
        <div id="calculator" className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 text-center sm:text-left">
            Calculate Your Income Tax
          </h2>
          <CalculatorComponent />
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 text-center sm:text-left">
            Understanding Income Tax
          </h2>
          <CalculatorContent />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TaxCalculator;
