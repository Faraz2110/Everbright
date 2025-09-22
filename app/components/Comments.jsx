import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ali Raza",
    role: "Homeowner",
    comment:
      "Kita Pasang installed my AC perfectly! The technicians were professional and friendly. Highly recommend!",
  },
  {
    name: "Sara Khan",
    role: "Office Manager",
    comment:
      "Reliable service with no hidden charges. Our office lighting and AC system now works flawlessly.",
  },
  {
    name: "Usman Ahmed",
    role: "Shop Owner",
    comment:
      "Fast and efficient electrical solutions. I love their honesty and precision in every job!",
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center px-4 md:px-[8%] bg-black"
    >
      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-500 uppercase">
          What Our Clients Say
        </h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
          Real feedback from people who trust Kita Pasang for their AC & electrical needs
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 p-3 md:p-4 bg-cyan-500/70 hover:bg-cyan-500 text-black rounded-full shadow-lg transition flex items-center justify-center"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Carousel Card */}
        <AnimatePresence>
          {testimonials.map(
            (testimonial, index) =>
              index === current && (
                <motion.div
                  key={index}
                  className="relative w-full p-8 bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 mx-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start gap-3 text-cyan-400 mb-4">
                    <FaQuoteLeft size={24} />
                    <p className="text-gray-300">{testimonial.comment}</p>
                    <FaQuoteRight size={24} />
                  </div>
                  <p className="text-cyan-400 font-semibold mt-4">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 p-3 md:p-4 bg-cyan-500/70 hover:bg-cyan-500 text-black rounded-full shadow-lg transition flex items-center justify-center"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === current ? "bg-cyan-500" : "bg-gray-600"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
