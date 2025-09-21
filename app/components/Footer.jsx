import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300 px-6 md:px-[8%] py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-500">Kita Pasang</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Aircon & Electrical Services you can trust.  
            Providing reliable solutions for homes and businesses with expert installation, repair, and maintenance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-cyan-400" /> +60 19‐871
7647
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" /> everbrightmultipleresouressdn@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" /> Kuala Lumpur, Malaysia
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-cyan-400 transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kita Pasang. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
