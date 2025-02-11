import React from "react";
import { Link } from "react-router-dom"; 


const TaxHummerLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 cursor-pointer ">
      <div className="flex-shrink-0">
        <img
          src="logoTaxHummer.webp"
          alt="TaxHummer"
          className="hover:opacity-80 transition-opacity w-10 h-8"
        />
      </div>
      <h1
        className="
          text-xl 
          italic 
          text-lavender-600 
          tracking-wide 
          hover:tracking-wider 
          transition-all 
          duration-300 
          select-none 
          leading-8 
          font-semibold
          text-purple-700
          font-[Helvetica]
        "
      >
        Tax Hummer
      </h1>
    </Link>
  );
};

export default TaxHummerLogo;
