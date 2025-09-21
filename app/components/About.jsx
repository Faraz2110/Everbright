import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaBolt, FaRegSmileBeam, FaHandshake, FaClock } from "react-icons/fa";

function About() {
  return (
    <motion.section
      id="about"
      className="relative scroll-mt-24 min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-16 md:px-[8%] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          About Us
        </h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
          Professional Aircon & Electrical Services You Can Trust
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 grid gap-10 md:grid-cols-2 items-center max-w-6xl">
        {/* Left Content */}
        <motion.div
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
            Your Comfort, Our Priority
          </h2>
          <p className="mb-4">
            At <span className="text-cyan-400 font-semibold">Kita Pasang</span>, 
            we specialize in delivering reliable <span className="text-cyan-400">air conditioning</span> 
            and <span className="text-cyan-400">electrical solutions</span> that make homes and offices safer, cooler, and more energy-efficient. 
            With years of hands-on experience, we’ve built a reputation for honesty, quality, and expert service.
          </p>
          <p className="mb-4">
            Whether it’s <span className="text-cyan-400">AC installation</span>, 
            <span className="text-cyan-400">electrical repair</span>, or 
            <span className="text-cyan-400">upgrading your lighting</span>, 
            we approach every job with precision and care.
          </p>
          <p>
            We believe in <span className="text-cyan-400 font-semibold">affordable solutions</span> 
            without compromising quality — that’s why hundreds of clients trust us to keep their spaces running smoothly.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="bg-black/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500 transition duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">
            Why Choose Kita Pasang?
          </h3>
          <ul className="space-y-5 text-gray-300">
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
      </div>
    </motion.section>
  );
}

export default About;
