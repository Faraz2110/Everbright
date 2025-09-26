import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const stats = [
  { number: 15, suffix: "+", label: "Different Brands", description: "We work with 15+ top brands to install and service quality air conditioning systems." },
  { number: 300, suffix: "+", label: "Loyal Customers", description: "Over 300 customers trust us for reliable air conditioning solutions and support." },
  { number: 2000, suffix: "+", label: "ACs Installed", description: "We have installed over 2,000 air conditioning units in homes and businesses of all sizes." },
];

function AnimatedNumber({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // only animate when in view

    let start = 0;
    const end = value;
    const duration = 1500; // ms
    const increment = end / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatsSection() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true }); // trigger only once

  return (
    <section ref={ref} className="relative py-20 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Achievements
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-black border border-gray-800 shadow-lg p-8 text-center hover:border-cyan-500/70 hover:shadow-cyan-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <h3 className="text-4xl font-extrabold text-cyan-400 drop-shadow-sm">
                <AnimatedNumber value={item.number} suffix={item.suffix} inView={inView} />
              </h3>
              <p className="mt-2 text-xl font-semibold text-white">{item.label}</p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
