"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react"; // ✅ home icon

export default function SalesOffer() {
  return (
    <motion.section
      id="sales-offer"
      className="relative scroll-mt-24 min-h-screen flex flex-col items-center justify-center px-6 py-16 md:px-[8%] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* ✅ Home Icon (fixed position) */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg transition"
      >
        <Home size={22} />
      </Link>

      {/* Offer Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-500 uppercase">
          Special Sale Offer 🎉
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Grab our limited-time discounts on Aircon & Electrical Services.  
          Reliable, affordable, and professional service at your doorstep.
        </p>
      </motion.div>

      {/* Offer Card */}
      <motion.div
        className="bg-black/70 backdrop-blur-md border border-cyan-500 p-8 rounded-2xl shadow-lg max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Aircon Chemical Service
        </h2>
        <p className="text-gray-300 mb-6">
          Deep clean your aircon unit to maximize cooling and extend its life.  
          Includes chemical wash, filter cleaning, and performance check.
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="text-3xl font-extrabold text-white line-through">
            $120
          </span>
          <span className="text-4xl font-extrabold text-cyan-500">
            $85 Only!
          </span>
        </div>
        <button className="mt-6 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl shadow-lg transition">
          Book Now
        </button>
      </motion.div>
    </motion.section>
  );
}
