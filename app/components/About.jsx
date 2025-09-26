"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaTools,
  FaBolt,
  FaRegSmileBeam,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const images = [
    "/about_illustration_main.png",
    "/about_illustration.png",
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
  };

  return (
    <section
      id="about"
      className="bg-black scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 md:px-[8%] flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
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
          At <span className="text-cyan-400 font-semibold">Kita Pasang</span>, we
          specialize in delivering reliable <span className="text-cyan-400">air
          conditioning</span> and <span className="text-cyan-400">electrical
          solutions</span> that make homes and offices safer, cooler, and
          energy-efficient.
        </motion.p>

        <motion.p className="mb-6" variants={fadeUpVariant} custom={0.4}>
          Whether it’s <span className="text-cyan-400">AC installation</span>,{" "}
          <span className="text-cyan-400">electrical repair</span>, or{" "}
          <span className="text-cyan-400">lighting upgrades</span>, we approach
          every job with precision and care.
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

      {/* Right Carousel */}
      <motion.div className="flex-1 w-full max-w-xl relative">
        {/* Desktop Carousel */}
        <div className="hidden sm:flex relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border border-gray-800">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`About ${current + 1}`}
                fill
                className="object-cover object-center rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current ? "bg-cyan-500 scale-125" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden w-full h-64 relative overflow-hidden rounded-2xl shadow-xl border border-gray-800">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`About ${current + 1}`}
                fill
                className="object-cover object-center rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? "bg-cyan-500 scale-125" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
