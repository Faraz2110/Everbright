"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/ourworker/2.jpeg",
  "/ourworker/3.jpeg",
  "/ourworker/4.jpeg",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurWork() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide for mobile carousel
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    };
    timeoutRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  // Handle drag manually
  const handleDragEnd = (event, info) => {
    clearInterval(timeoutRef.current); // temporarily stop auto-slide
    if (info.offset.x < -50) {
      // swipe left
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    } else if (info.offset.x > 50) {
      // swipe right
      setCurrent((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.section
      id="our-work"
      className="bg-black scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 md:px-[8%]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          Our Work
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          See our electricians in action, installing, repairing, and maintaining AC & electrical systems.
        </p>
      </motion.div>

      {/* Gallery */}
      <motion.div className="grid gap-6" variants={containerVariants}>
        {/* Mobile Carousel */}
        <div className="sm:hidden w-full relative h-64 overflow-hidden rounded-2xl shadow-xl border border-gray-800">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full h-full cursor-grab"
            >
              <Image
                src={galleryImages[current]}
                alt={`Gallery ${current + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? "bg-cyan-500 scale-125" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>

          {/* Swipe Hint */}
          <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 text-xs animate-bounce">
            Swipe →
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-800 relative"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img}
                alt={`Gallery ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-2xl"
                priority={idx < 3}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
