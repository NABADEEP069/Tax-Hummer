import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import AnimatedSocialIcons from './AnimatedSocialIcons';
import {Link} from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="bg-purple-500 text-white font-sans font-medium">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Logo & Description Space */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 px-3">
            <div>
            
            </div>
            <h2 className="
            text-4xl 
            font-extrabold
            bg-clip-text 
            text-white
            animate-gradient-x 
            hover:scale-105 
            transition-transform 
            duration-300 
            cursor-pointer 
            select-none
            tracking-wide
            drop-shadow-lg
            hover:text-white
            italic
            font-[Helvetica]
            ">
            Tax Hummer
            </h2>
          </div>
          <p className="text-white px-7 font-sans hover:text-white">
            Simplifying tax management and financial guidance for individuals and businesses.
          </p>
          {/* Illustration Space */}
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7 font-sans text-white hover:text-white cursor-pointer">
            Quick Links
          </h3>
      
          <nav className="space-y-2 px-7">
            <Link to="/" className="block hover:text-lavender-200 transition-colors font-sans text-white hover:text-white">Home</Link>
            <Link to="/services" className="block hover:text-lavender-200 transition-colors font-sans text-white  hover:text-white">Services</Link>
            <Link to="/resources" className="block hover:text-lavender-200 transition-colors font-sans text-white hover:text-white">Resources</Link>
            <Link to="/about" className="block hover:text-lavender-200 transition-colors font-sans text-white  hover:text-white">About</Link>
            <Link to="/contact" className="block hover:text-lavender-200 transition-colors font-sans text-white  hover:text-white">Contact</Link>
          </nav>
      
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7 font-sans  text-white  hover:text-white">
            Contact Us
          </h3>
          <div className="space-y-3 px-7">
            <div className="flex items-center space-x-3">
              <MapPin className=" text-white  hover:text-white" />
              <span className="font-sans  text-white  hover:text-white">Guwahati, assam, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className=" text-white  hover:text-white" />
              <span className="font-sans  text-white  hover:text-white">+91-9101306796</span>
            </div>
            <div className="flex items-center space-x-3  hover:text-white">
              <Mail className=" text-white  hover:text-white" />
              <span className="font-sans  text-white  hover:text-white">support@taxhummer.in</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7 font-sans  text-white  hover:text-white">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <AnimatedSocialIcons/>
          </div>
          
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="bg-purple-800 text-center py-4">
        <p className="text-sm text-white font-sans  hover:text-white">
          © 2025 Tax Hummer. All Rights Reserved | 
          <a href="#" className="ml-2 hover:text-lavender-200  hover:text-white ">
            Privacy Policy
          </a> | 
          <a href="#" className="ml-2 hover:text-lavender-200  hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;