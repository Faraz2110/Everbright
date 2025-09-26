import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTools, FaBolt, FaRegSmileBeam, FaHandshake, FaClock } from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

function About() {
  const [mainLoaded, setMainLoaded] = useState(false);

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-12 sm:py-16 lg:py-24 px-4 md:px-[8%] bg-black flex flex-col lg:flex-row items-center gap-10 lg:gap-12 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase mb-4"
          variants={fadeUpVariant}
          custom={0}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-6"
          variants={fadeUpVariant}
          custom={0.1}
        >
          Professional Aircon & Electrical Services You Can Trust
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4"
          variants={fadeUpVariant}
          custom={0.2}
        >
          Your Comfort, Our Priority
        </motion.h2>
        <motion.p className="mb-4" variants={fadeUpVariant} custom={0.3}>
          At <span className="text-cyan-400 font-semibold">Kita Pasang</span>, we specialize in delivering reliable <span className="text-cyan-400">air conditioning</span> and <span className="text-cyan-400">electrical solutions</span> that make homes and offices safer, cooler, and energy-efficient. With years of experience, we’ve built a reputation for honesty, quality, and expert service.
        </motion.p>
        <motion.p className="mb-6" variants={fadeUpVariant} custom={0.4}>
          Whether it’s <span className="text-cyan-400">AC installation</span>, <span className="text-cyan-400">electrical repair</span>, or <span className="text-cyan-400">lighting upgrades</span>, we approach every job with precision and care.
        </motion.p>

        {/* Why Choose Us Card */}
        <motion.div
          className="bg-black/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500 transition duration-300 max-w-md"
          variants={fadeUpVariant}
          custom={0.5}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-5">
            Why Choose Kita Pasang?
          </h3>
          <ul className="space-y-4 text-gray-300">
            {[
              { icon: <FaTools />, text: "Skilled Technicians with Years of Experience" },
              { icon: <FaBolt />, text: "Safe, Efficient & Energy-Saving Solutions" },
              { icon: <FaRegSmileBeam />, text: "Friendly Service & Honest Recommendations" },
              { icon: <FaHandshake />, text: "Transparent Pricing – No Hidden Charges" },
              { icon: <FaClock />, text: "On-Time Service & Long-Term Support" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                {React.cloneElement(item.icon, { className: "text-cyan-400 text-lg" })}
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="flex-1 relative w-full max-w-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden"
          variants={fadeUpVariant}
          custom={0.6}
        >
          {/* Main Image */}
          <motion.div
            className="absolute inset-0 rounded-3xl shadow-2xl border border-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/about_illustration_main.png"
              alt="Main Illustration"
              fill
              className="object-cover"
              priority
              onLoadingComplete={() => setMainLoaded(true)}
            />
          </motion.div>

          {/* Secondary Image */}
          {mainLoaded && (
            <motion.div
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-2xl shadow-lg border border-cyan-500 overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <Image
                src="/about_illustration.png"
                alt="Secondary Illustration"
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
