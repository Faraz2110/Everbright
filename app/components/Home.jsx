import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      id="home"
      className="relative scroll-mt-26 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 pt-10 sm:pt-12 md:pt-24 pb-10 md:px-[8%] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.6 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url('/971.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0"></div>

      {/* Top Center Heading */}
      {/* <div className="absolute top-25 left-1/2 -translate-x-1/2 z-20 text-center">
       <h1
  className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg uppercase font-[Montserrat]"
>
  Kita Pasang Aircon and Electrical Services
</h1>

      </div> */}

      {/* Left Content */}
      <motion.div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          Kita Pasang Aircon and Electrical Services
        </h2>

        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
          SERVICES YOU CAN TRUST
        </h2>

        <h1 className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-200">
          Expert installation, repair, and maintenance for all your air
          conditioning and electrical needs.
        </h1>

        <div className="mt-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
