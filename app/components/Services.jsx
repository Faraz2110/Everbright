import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function Services() {
  const categories = [
    {
      title: "Aircon Services",
      description:
        "Expert installation, maintenance, and repair of air conditioning units to keep your space cool and comfortable.",
      subServices: [
        "Aircon Installation",
        "Aircon Chemical Service",
        "Aircon Overhaul Chemical Service",
        "Aircon Repair Service",
        "Aircon Gas Refill Service",
        "Aircon Replacement Service",
      ],
    },
    {
      title: "Electrical Services",
      description:
        "Professional electrical installation and maintenance for homes, offices, and businesses.",
      subServices: [
        "Installation of Water Heater",
        "Installation of Fans",
        "Installation of Fancy Lights",
        "Installation of Simple Lights",
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 flex flex-col items-center px-4 md:px-[8%] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
          Explore the full range of services we provide
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 w-full max-w-6xl">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-black/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500/80 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              {category.title}
            </h3>
            <p className="text-gray-300 text-sm mb-5">{category.description}</p>
            <ul className="space-y-3">
              {category.subServices.map((sub, subIndex) => (
                <li
                  key={subIndex}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition cursor-pointer"
                >
                  <FaCheckCircle className="text-cyan-400 text-sm" />
                  {sub}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
