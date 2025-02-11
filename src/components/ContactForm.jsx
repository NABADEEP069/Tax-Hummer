import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";  // ✅ Import EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceID = "service_oktgntk";       // ✅ Replace with your Service ID
    const templateID = "template_e1w7olu";     // ✅ Replace with your Template ID
    const publicKey = "5er9h3pWmffDPspVO";     // ✅ Replace with your Public Key

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 px-4 sm:px-6 py-10">
        <motion.div
          className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-purple-300 my-10 sm:my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 text-center mb-4 sm:mb-6">
            Get in Touch 🚀
          </h2>

          {submitted && (
            <motion.div
              className="bg-green-100 text-green-700 py-2 px-4 rounded-md text-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🎉 Thank you! We'll get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-3 text-purple-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-purple-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-purple-500" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-purple-500" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all h-24 sm:h-28 resize-none text-sm sm:text-base"
              />
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full p-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all focus:ring-4 focus:ring-purple-300 flex justify-center items-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      
    </>
  );
};

export default ContactForm;
