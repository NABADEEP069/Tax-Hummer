import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import GetStartedPageComponent from '../components/GetStartedPageComponen'

const GetStarted = () => {
  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center min-h-screen  px-4 sm:px-6 py-10">
     <GetStartedPageComponent/>
    </div>
    <Footer/>
    </>
  )
}

export default GetStarted