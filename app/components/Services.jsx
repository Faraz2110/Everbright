import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "Aircon Installation", description: "Professional AC installation for homes & offices.", price: 1200 },
  { name: "Aircon Chemical Service", description: "Deep cleaning & chemical treatment for ACs.", price: 300 },
  { name: "Aircon Overhaul Chemical Service", description: "Full chemical overhaul for older AC units.", price: 500 },
  { name: "Aircon Repair Service", description: "Expert repair for all types of AC issues.", price: 400 },
  { name: "Aircon Gas Refill Service", description: "Refill AC gas for optimal cooling performance.", price: 350 },
];

// Container animation for staggering children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // each card delayed by 0.15s
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Heading animation
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceCards() {
  return (
    <motion.section
      id="services"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 md:px-[8%] bg-black overflow-hidden"
      initial="hidden"
      animate="show"
      variants={containerVariants} // parent container for staggered animation
    >
      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        variants={headingVariants} // heading animation
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
          Affordable & Reliable Air Conditioning Solutions
        </p>
      </motion.div>

      {/* Cards container needs to be motion.div to enable stagger */}
      <motion.div
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants} // apply stagger here
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // each card animates
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src="/image.png"
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="text-yellow-400 font-bold text-lg mb-2 truncate">
                {service.name}
              </h3>
              <p className="text-white text-sm mb-4 line-clamp-3">
                {service.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-yellow-400 font-bold text-lg">
                  RM {service.price}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ backgroundColor: "#0891b2" }}
                  className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold transition"
                >
                  Book
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
