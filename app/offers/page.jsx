"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";

// Posters array
const posters = [
  { id: 1, title: "Special Sale Offer 🎉", image: "/emas.png" },
  { id: 2, title: "Weekend Discount 🔥", image: "/emas.png" },
  { id: 3, title: "Aircon Service Deal ❄️", image: "/emas.png" },
];

export default function SalesOffer() {
  return (
    <motion.section
      id="sales-offer"
      className="relative min-h-screen flex flex-col items-center px-4 md:px-8 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Home Icon */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg transition"
      >
        <Home size={22} />
      </Link>

      {/* Page Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase tracking-wide drop-shadow-lg">
          ✨ New Promo
        </h1>
        <p className="mt-3 text-gray-300 text-lg max-w-2xl mx-auto">
          Check out our latest promotions. Updated daily for the best deals!
        </p>
      </motion.div>

      {/* Poster Cards */}
      <div className="w-full flex flex-col items-center gap-8">
        {posters.map((poster) => (
          <motion.div
            key={poster.id}
            className="w-full max-w-md bg-gradient-to-tr from-gray-800/70 via-black/50 to-gray-800/70 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Poster Image */}
            <div className="w-full">
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Poster Title */}
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold text-cyan-300 drop-shadow-md">
                {poster.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
