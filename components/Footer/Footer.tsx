"use client";

import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[#AFCBD8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Overview */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DrConnect</h2>
          <p className="text-sm leading-6">
            DrConnect is your digital health partner providing access to qualified dermatologists, teleconsultation, and appointment scheduling – all from the comfort of your home.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#00C2CB] transition">Online Consultations</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Book Appointments</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Skin Health Tips</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Prescription Upload</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Chat with Experts</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#00C2CB] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Doctors</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#00C2CB] transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 hover:text-[#00C2CB] transition">
              <Phone className="w-4 h-4" /> +91 9876543210
            </p>
            <p className="flex items-center gap-2 hover:text-[#00C2CB] transition">
              <Mail className="w-4 h-4" /> support@DrConnect.com
            </p>
            <p className="flex items-center gap-2 hover:text-[#00C2CB] transition">
              <MapPin className="w-4 h-4" /> 2nd Floor, Tech Park, Udaipur, India
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white mt-6 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-[#7A9AB0]">
            <a href="#" className="hover:text-[#00C2CB] transition"><Facebook /></a>
            <a href="#" className="hover:text-[#00C2CB] transition"><Twitter /></a>
            <a href="#" className="hover:text-[#00C2CB] transition"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-[#1B2A3A] pt-6 px-6 text-center text-sm text-[#7A9AB0]">
        <p>© {new Date().getFullYear()} DrConnect. All rights reserved.</p>
        <p className="mt-1">Crafted with ❤️ for your health & wellness.</p>
      </div>
    </footer>
  );
}
