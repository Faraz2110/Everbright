import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTools, FaBolt, FaRegSmileBeam, FaHandshake, FaClock } from "react-icons/fa";

function About() {
  return (
    <motion.section
      id="about"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 md:px-[8%] bg-black flex flex-col lg:flex-row items-center gap-12 overflow-visible"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-gray-300"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Professional Aircon & Electrical Services You Can Trust
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
          Your Comfort, Our Priority
        </h2>
        <p className="mb-4">
          At <span className="text-cyan-400 font-semibold">Kita Pasang</span>, we specialize in delivering reliable <span className="text-cyan-400">air conditioning</span> and <span className="text-cyan-400">electrical solutions</span> that make homes and offices safer, cooler, and energy-efficient. With years of experience, we’ve built a reputation for honesty, quality, and expert service.
        </p>
        <p className="mb-6">
          Whether it’s <span className="text-cyan-400">AC installation</span>, <span className="text-cyan-400">electrical repair</span>, or <span className="text-cyan-400">lighting upgrades</span>, we approach every job with precision and care.
        </p>

        {/* Why Choose Us Card */}
        <motion.div
          className="bg-black/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500 transition duration-300 max-w-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-5">
            Why Choose Kita Pasang?
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 hover:text-cyan-400 transition">
              <FaTools className="text-cyan-400 text-lg" />
              Skilled Technicians with Years of Experience
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-400 transition">
              <FaBolt className="text-cyan-400 text-lg" />
              Safe, Efficient & Energy-Saving Solutions
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-400 transition">
              <FaRegSmileBeam className="text-cyan-400 text-lg" />
              Friendly Service & Honest Recommendations
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-400 transition">
              <FaHandshake className="text-cyan-400 text-lg" />
              Transparent Pricing – No Hidden Charges
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-400 transition">
              <FaClock className="text-cyan-400 text-lg" />
              On-Time Service & Long-Term Support
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Right Illustration with two images */}
      <motion.div
        className="flex-1 relative w-full max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="relative w-full aspect-[16/9]">
          {/* Main Image */}
          <motion.div
            className="absolute inset-0 rounded-3xl overflow-visible shadow-2xl border border-gray-800"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/about_illustration.png "
              alt="Main Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Secondary Image (floating) */}
          <motion.div
            className="absolute -top-12 -right-12 w-36 h-36 rounded-2xl shadow-lg border border-cyan-500 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/about_illustration_main.png"
              alt="Secondary Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
