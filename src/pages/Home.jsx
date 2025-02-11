import React, { lazy, Suspense, useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground'; 
import { Mouse } from 'lucide-react';
import ExpertService from '../components/ExpertService';

// Lazy Loading Components
const HeroSection = lazy(() => import('../components/Hero'));
const Cards = lazy(() => import('../components/Cards'));
const ProductsForEveryone = lazy(() => import('../components/ProductsForEveryone'));
const ReadyToGetStarted = lazy(() => import('../components/ReadyToGetStarted'));
const IncomeTaxFAQ = lazy(() => import('../components/IncomeTaxFAQ'));

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      {/* <AnimatedBackground /> */}

      {/* Foreground Content */}
      <NavBar />
      <HeroSection />

      <div className="relative py-16 px-4 sm:px-6 md:px-12">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Cards />
          <ProductsForEveryone/>
          <ExpertService/>
          <IncomeTaxFAQ />
          
          <ReadyToGetStarted />
        </Suspense>

        {/* Scroll to Top Button */}
        {showScroll && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50"
          >
            <Mouse/>
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
