"use client";

import React from "react";
import { motion } from "framer-motion";

// Clients array (all using same logo)
const clients = [
  { id: 1, name: "Client One", logo: "/client.png" },
  { id: 1, name: "Client One", logo: "/client.png" },

  { id: 1, name: "Client One", logo: "/client.png" },

  { id: 1, name: "Client One", logo: "/client.png" },

];

export default function Clients() {
  return (
    <motion.section
      id="clients"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 flex flex-col items-center px-4 md:px-[8%] bg-black"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          Our Clients
        </h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
          Trusted by these amazing companies and partners
        </p>
      </motion.div>

      {/* Logos Container */}
      <motion.div
        className="relative z-10 w-full flex flex-wrap justify-center items-center gap-8 max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            className="flex justify-center items-center bg-gray-900/70 border border-gray-800 rounded-2xl shadow-lg p-4 hover:border-cyan-500 transition duration-300"
            style={{ width: "160px", height: "120px" }} // fixed card size
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
