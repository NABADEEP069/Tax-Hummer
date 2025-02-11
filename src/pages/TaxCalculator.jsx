import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import CalculatorComponent from '../components/Calculator'
import CalculatorContent from '../components/CalculatorContent'

const TaxCalculator = () => {
  return (
    <>
    <NavBar/>
    <h1 className="my-30 text-center font-extrabold text-4xl text-purple-700 animate-fade-in-up transition-transform duration-700 ease-in-out hover:scale-105 hover:text-purple-900">
  Income Tax Calculator: <span className="text-purple-800">Calculate Your Tax Liability Easily</span>
</h1>

<CalculatorComponent/>
<CalculatorContent/>
   <Footer/>
    </>
  )
}

export default TaxCalculator