"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Let's Talk</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help! Reach out to us and we’ll respond as soon as we can.
          </p>
          <div className="mt-8">
            <img
              src="/assets/icons/contact-us-animate.svg"
              alt="Contact Illustration"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-3"><Mail className="w-5" /> support@medicareapp.com</p>
            <p className="flex items-center gap-3"><Phone className="w-5" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><MapPin className="w-5" /> 42 Health Street, New Delhi</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
