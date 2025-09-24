// Carousel.jsx
import React, { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80",
      title: "Aircon Service",
      subtitle: "Stay cool with professional cooling solutions",
    },
    {
      url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1920&q=80",
      title: "Electrical Work",
      subtitle: "Safe, reliable, and expert installations",
    },
    {
      url: "https://images.unsplash.com/photo-1606221343612-25d7dbd5b2b3?auto=format&fit=crop&w=1920&q=80",
      title: "Cooling Solutions",
      subtitle: "Energy-efficient options for every space",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative bg-gradient-to-b from-[#0a0a0a] via-[#001f2d] to-[#0a0a0a]">
      <div className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {/* Slide */}
        <div className="relative w-full">
          <img
            src={slides[current].url}
            alt={slides[current].title}
            className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] object-cover transition-opacity duration-1000 ease-in-out"
          />

          {/* Gradient Overlay to blend with bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#001f2d]/40 to-[#0a0a0a]/80"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-lg">
              {slides[current].title}
            </h2>
            <p className="text-gray-200 text-sm md:text-lg mt-2 drop-shadow-md max-w-lg">
              {slides[current].subtitle}
            </p>
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-2xl p-3 rounded-full backdrop-blur-md shadow-lg transition"
        >
          ❮
        </button>

        {/* Next button */}
        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-2xl p-3 rounded-full backdrop-blur-md shadow-lg transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 w-full flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition transform ${
                current === index
                  ? "bg-cyan-400 scale-125 shadow-md"
                  : "bg-white/60 hover:bg-cyan-300"
              }`}
            ></button>
          ))}
        </div>

        {/* Smooth Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
            className="w-full h-[45px] md:h-[65px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.77,-50.00 500.00,49.98 L500.00,80 L0.00,80 Z"
              className="fill-[#0a0a0a]"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
