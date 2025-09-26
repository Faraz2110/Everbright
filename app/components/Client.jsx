import React from "react";
import { motion } from "framer-motion";

const clients = [
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
  },
  { 
    name: "Facebook", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
  },
  { 
    name: "Netflix", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
  },
];


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Clients() {
  return (
    <motion.section
      id="clients"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 md:px-[8%] bg-black overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          Our Clients
        </h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
          Proudly worked with industry-leading companies
        </p>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        variants={containerVariants}
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-6 cursor-pointer"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
