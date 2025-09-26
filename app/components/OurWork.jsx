"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace these with your actual images in /public/images
const galleryImages = [
  "/ourworker/2.jpeg",
  "/ourworker/3.jpeg",
  "/ourworker/4.jpeg",
];

// Container animation to stagger children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurWork() {
  return (
    <motion.section
      id="our-work"
      className="bg-black scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 md:px-[8%]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // animate each time it's in view
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

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg border border-gray-800 relative"
            variants={cardVariants} // card animation
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img}
              alt={`Gallery ${idx + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-2xl"
              priority={idx < 3} // preloads first 3 images
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
