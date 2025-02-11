import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-purple-600 text-white py-6 px-4 sm:px-8 rounded-xl shadow-lg mb-8">
      <h3 className="text-xl font-bold text-center mb-4">📍 Contact Information</h3>
      <div className="flex flex-col sm:flex-row justify-around items-center gap-6">

        {/* Address */}
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-yellow-300" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-sm">1234 Tech Street, Innovation City</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-green-300" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm">contact@example.com</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-pink-300" />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-sm">+91 98765 43210</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
