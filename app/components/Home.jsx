import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-[8%] text-center md:text-left bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Image (Desktop only) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('/971.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 max-w-3xl"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase leading-tight drop-shadow-lg">
          Kita Pasang Aircon and Electrical Services
        </h2>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug drop-shadow-md">
          SERVICES YOU CAN TRUST
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed drop-shadow-sm">
          Expert installation, repair, and maintenance for all your air
          conditioning and electrical needs.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg hover:opacity-90 transition text-sm sm:text-base"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Image for Small Devices */}
        <div className="mt-10 md:hidden flex justify-center">
          <img
            src="/hometop.png"
            alt="Home Illustration"
            className="max-w-xs sm:max-w-sm w-full drop-shadow-xl rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Illustration (Right Side for Desktop) */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        {/* You can place desktop illustration/image here */}
      </motion.div>
    </motion.section>
  );
}

export default Home;
