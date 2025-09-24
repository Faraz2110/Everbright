import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="relative scroll-mt-24 bg-black text-gray-300 px-6 sm:px-8 md:px-[8%] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand with Logo */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:min-w-[250px]">
          <Image
            src="/favicon.png"
            alt="EverBright Logo"
            width={60}
            height={60}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0"
            priority
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              EverBright
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 tracking-wide">
              Multiple Resources
            </h3>
            <span className="text-yellow-500 font-medium text-sm sm:text-base">
              Sdn. Bhd
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center md:text-left">
            Quick Links
          </h3>
          <ul className="flex flex-col items-center md:items-start gap-2">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-cyan-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-cyan-400 transition">
                Admin
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center md:text-left">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-cyan-400" /> +60 19‐871 7647
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-cyan-400" />{" "}
              everbrightmultipleresouressdn@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-cyan-400" /> Kuala Lumpur, Malaysia
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            <a href="#" className="hover:text-cyan-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm sm:text-base text-gray-500">
        © {new Date().getFullYear()} EverBright Multiple Resources Sdn. Bhd. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
