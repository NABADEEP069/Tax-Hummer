import React, { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mouse } from 'lucide-react';


// Lazy Load Components
const HeadingWithIllustration = lazy(() => import("../components/HeadingWithIllustration"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const WhyChooseUsAI = lazy(() => import("../components/WhyChooseUsAI"));
const WhyChooseUsAIEnd = lazy(() => import("../components/WhyChooseUsEnd"));
const WhyChooseUsUser = lazy(() => import("../components/WhyChooseUsUser"));
const MissionVision = lazy(() => import("../components/MissionVision"));
const FounderSection = lazy(() => import("../components/FounderSection"));
const WhoWeAre = lazy(() => import("../components/WhoWeAre"));

// Floating Color Points Animation
const FloatingPoints = () => {
  useEffect(() => {
    const points = document.querySelectorAll(".floating-point");
    points.forEach((point) => {
      point.style.top = `${Math.random() * 100}vh`;
      point.style.left = `${Math.random() * 100}vw`;
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute floating-point rounded-full w-4 h-4 opacity-50 animate-float"
          style={{
            backgroundColor: ["#E63946", "#457B9D", "#1D3557", "#F4A261", "#2A9D8F"][Math.floor(Math.random() * 5)],
            animationDuration: `${Math.random() * 6 + 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-r from-gray-50 to-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        <FloatingPoints />

        {/* Smooth Scroll Button */}
        <button
          onClick={() => scroll.scrollToTop({ smooth: "easeInOutQuad", duration: 800 })}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all z-10"
        >
          <Mouse/>
        </button>

        {/* Suspense for Lazy Loading */}
        <Suspense fallback={<div className="text-center text-purple-600">Loading...</div>}>
          <HeadingWithIllustration />
          <WhoWeAre />

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 leading-tight font-serif text-center py-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            Why Choose Us?
          </motion.h2>

          <WhyChooseUs />
          <WhyChooseUsAI />
          <WhyChooseUsAIEnd />
          <WhyChooseUsUser />
          <MissionVision />
          <FounderSection />
          
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsSection;
