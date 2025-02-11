import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Package, 
  BookOpen, 
  Building2, 
  Users, 
  MessageSquare,  
  Laptop,
  Headphones,
  ChevronRight,
  Calculator,
} from 'lucide-react';
import TaxHummerLogo from './TaxHummerLogo';
import { FaFileInvoice, FaClipboardList,FaQuestionCircle} from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";

const menuItems = {
  products: [
    { icon: <Calculator className="w-5 h-5" />, label: 'Tax Calculator', to: '/taxcalculator' },
    { icon: <FaFileInvoice className="w-5 h-5" />, label: 'ITR Filing', to: '/itrfiling' },
    { icon: <MdHomeRepairService className="w-5 h-5" />, label: 'Tax Consulting Service', to: '/service' },
    {icon: <FaClipboardList className="w-5 h-5" />, label: 'GST Filing', to: '/gstfiling'}
  ],
  resources: [
    { icon: <BookOpen className="w-5 h-5" />, label: 'Documentation', to: '/docs' },
    { icon: <Users className="w-5 h-5" />, label: 'Community', to: '/community' },
    { icon: <Headphones className="w-5 h-5" />, label: 'Support', to: '/support' },
  ],
  company: [
    { icon: <Building2 className="w-5 h-5" />, label: 'About Us', to: '/about' },
    { icon: <Users className="w-5 h-5" />, label: 'Careers', to: '/careers' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Contact', to: '/contact' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'FAQ', to: '/faq' },
  ]
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Optimize scroll event with useCallback
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const NavLink = ({ icon, label, dropdownItems }) => (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-black hover:text-indigo-600 font-medium cursor-pointer transition duration-200">
        {icon}
        <span>{label}</span>
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </button>
      <div className="absolute left-0 pt-2 w-56 hidden group-hover:block">
        <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-2">
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-200"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-white/40 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <TaxHummerLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink icon={<Package className="w-4 h-4" />} label="Products" dropdownItems={menuItems.products} />
            <NavLink icon={<BookOpen className="w-4 h-4" />} label="Resources" dropdownItems={menuItems.resources} />
            <NavLink icon={<Building2 className="w-4 h-4" />} label="Company" dropdownItems={menuItems.company} />
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Link 
              to="/get-started"
              className="bg-purple-500 text-white px-6 py-2.5 rounded-lg hover:bg-purple-600 transition transform hover:scale-105 focus:ring-4 focus:ring-purple-400 focus:outline-none"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 md:hidden">
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              {Object.entries(menuItems).map(([section, items]) => (
                <div key={section} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => toggleSection(section)}
                    className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-indigo-600"
                  >
                    <div className="flex items-center space-x-3">
                      {section === 'products' && <Package className="w-5 h-5" />}
                      {section === 'resources' && <BookOpen className="w-5 h-5" />}
                      {section === 'company' && <Building2 className="w-5 h-5" />}
                      <span className="font-medium capitalize">{section}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${activeSection === section ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Dropdown Items */}
                  {activeSection === section && (
                    <div className="pl-4 pb-3">
                      {items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-indigo-600"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Get Started Button */}
              <div className="mt-4">
                <Link 
                  to="/get-started"
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition w-full block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
