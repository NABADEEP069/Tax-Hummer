import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorComponent from "../components/Calculator";
import CalculatorContent from "../components/CalculatorContent";

function TaxCalculator() {
  return (
    <>
      <NavBar />
      <br />
      <br />

      {/* Image Section */}
      <div className="flex justify-center my-10 px-4">
        <img
          src="/WhatsApp Image 2025-02-12 at 12.17.51_94f9194a.jpg"
          alt="Tax Calculator"
          className="h-auto max-w-full sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] shadow-lg"
        />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="flex justify-center my-4 px-4 text-center">
        <p className="text-sm sm:text-md md:text-lg text-gray-600 font-medium">
          <Link to="/" className="text-gray-900">HOME</Link>
          <span className="mx-1">&gt;</span>
          <Link to="/taxcalculators" className="text-gray-900">CALCULATORS</Link>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-900">INCOME TAX CALCULATOR - FY 2025-2026</span>
        </p>
      </nav>

      {/* Heading */}
      <h1 className="flex justify-center text-center my-4 font-bold text-3xl sm:text-4xl md:text-5xl text-purple-700 px-4">
        Income Tax Calculator - FY 2025-2026
      </h1>

      {/* Update Notice */}
      <div className="flex flex-col sm:flex-row items-center justify-center my-4 px-4 text-center">
        <span className="text-xs sm:text-sm text-gray-600">
          Updated as per the latest budget on <strong>1st Feb, 2025</strong>.
        </span>
        <span className="mt-2 sm:mt-0 sm:ml-4 rounded bg-orange-100 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-700">
          Latest Budget
        </span>
      </div>

      {/* Calculator Components */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        <CalculatorComponent />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        <CalculatorContent />
      </div>

      <Footer />
    </>
  );
}

export default TaxCalculator;
