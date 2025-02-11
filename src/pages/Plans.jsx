import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BusinessModel from '../components/BusinessModel'
import StillConfused from '../components/StillConfused'

const Plans = () => {
  return (
    <>
    <Navbar />
    
    <div className="relative bg-gradient-to-r from-gray-50 to-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
    <BusinessModel />
    <StillConfused/>
    </div>
    <Footer/>
    </>
  )
}

export default Plans