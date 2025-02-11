import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import {FaXTwitter} from "react-icons/fa6";

const AnimatedSocialIcons = () => {
  const socialLinks = [
    { 
      Icon: FaXTwitter, 
      href: "https://x.com/taxhummer?s=21", 
      color: "hover:text-black",
      hoverEffect: "group hover:rotate-12 hover:scale-110 hover:bg-blue-50/20 rounded-full p-2  text-white"
    },
    { 
      Icon: Facebook, 
      href: "https://www.facebook.com/share/1ECf1XdgmB/?mibextid=wwXIfr", 
      color: "hover:text-blue-600",
      hoverEffect: "group hover:rotate-6 hover:scale-110 hover:bg-blue-50/20 rounded-full p-2  text-white"
    },
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/company/tax-hummer/?viewAsMember=true", 
      color: "hover:text-blue-700",
      hoverEffect: "group hover:-rotate-12 hover:scale-110 hover:bg-blue-50/20 rounded-full p-2  text-white"
    },
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/taxhummer/?igsh=ZDJvMGMzMGdyOW14&utm_source=qr#", 
      color: "hover:text-pink-500",
      hoverEffect: "group hover:rotate-6 hover:scale-110 hover:bg-pink-50/20 rounded-full p-2  text-white"
    }
  ];

  return (
    <div className="flex space-x-4 px-7 items-center justify-center">
      {socialLinks.map(({ Icon, href, color, hoverEffect }) => (
        <a 
          key={href} 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className={`
            transition-all duration-300 ease-in-out 
            ${color} 
            ${hoverEffect}
            transform hover:shadow-lg
          `}
        >
          <Icon 
            size={28} 
            className="transition-transform duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default AnimatedSocialIcons;