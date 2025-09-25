import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaTools, FaBolt, FaRegSmileBeam, FaHandshake, FaClock } from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  const [mainLoaded, setMainLoaded] = useState(false);

  // Section ref for animation trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-12 sm:py-16 lg:py-24 px-4 md:px-[8%] bg-black flex flex-col lg:flex-row items-center gap-10 lg:gap-12 overflow-hidden"
      ref={ref}
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-gray-300"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase mb-4" variants={fadeUpVariant}>
          About Us
        </motion.h1>
        <motion.p className="text-lg text-gray-300 mb-6" variants={fadeUpVariant}>
          Professional Aircon & Electrical Services You Can Trust
        </motion.p>

        <motion.h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4" variants={fadeUpVariant}>
          Your Comfort, Our Priority
        </motion.h2>
        <motion.p className="mb-4" variants={fadeUpVariant}>
          At <span className="text-cyan-400 font-semibold">Kita Pasang</span>, we specialize in reliable <span className="text-cyan-400">air conditioning</span> and <span className="text-cyan-400">electrical solutions</span>. We make homes and offices safer, cooler, and energy-efficient.
        </motion.p>
        <motion.p className="mb-6" variants={fadeUpVariant}>
          Whether it’s <span className="text-cyan-400">AC installation</span>, <span className="text-cyan-400">electrical repair</span>, or <span className="text-cyan-400">lighting upgrades</span>, we approach every job with precision and care.
        </motion.p>

        <motion.div
          className="bg-black/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500 transition duration-300 max-w-md"
          variants={fadeUpVariant}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-5">
            Why Choose Kita Pasang?
          </h3>
          <ul className="space-y-4 text-gray-300">
            {[
              { icon: <FaTools />, text: "Skilled Technicians with Years of Experience" },
              { icon: <FaBolt />, text: "Safe, Efficient & Energy-Saving Solutions" },
              { icon: <FaRegSmileBeam />, text: "Friendly Service & Honest Recommendations" },
              { icon: <FaHandshake />, text: "Transparent Pricing – No Hidden Charges" },
              { icon: <FaClock />, text: "On-Time Service & Long-Term Support" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-3 hover:text-cyan-400 transition"
                variants={fadeUpVariant}
              >
                {React.cloneElement(item.icon, { className: "text-cyan-400 text-lg" })}
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div className="flex-1 relative w-full max-w-xl">
        {/* Main Image with fade-in */}
        <motion.div
          className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/about_illustration_main.png"
            alt="Main Illustration"
            fill
            className="object-cover"
            priority
            onLoadingComplete={() => setMainLoaded(true)}
          />
        </motion.div>

        {/* Secondary Image with fade + slight pop */}
        {mainLoaded && (
          <motion.div
            className="absolute top-0 right-0 sm:top-2 sm:right-2 md:top-[-2rem] md:right-[-2rem] w-20 sm:w-24 md:w-36 h-20 sm:h-24 md:h-36 rounded-2xl shadow-lg border border-cyan-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/about_illustration.png"
              alt="Secondary Illustration"
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
