import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUsSection from './pages/AboutUsSection'
import GetStarted from './pages/GetStarted'
import ITRFiling from './pages/ITRFiling'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import FAQpage from './pages/FAQpage'
import Plans from './pages/Plans'
import TaxCalculator from './pages/TaxCalculator'
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path ="/get-started" element={<GetStarted />} />
        <Route path="/itrfiling" element={<ITRFiling />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQpage />} /> 
        <Route path ="/plans" element={<Plans />} />
        <Route path="/taxcalculator" element={<TaxCalculator />} />
      </Routes>
    </Router>
  )
}

export default App