"use client";

import { useEffect, useState } from "react";

export default function ElectricScroll() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // Track scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);

    // Generate random sparks
    const sparkCount = 6;
    const sparkArr = [];
    for (let i = 0; i < sparkCount; i++) {
      sparkArr.push({
        id: i,
        delay: Math.random() * 1, // seconds
        duration: 0.8 + Math.random() * 0.8, // seconds
      });
    }
    setSparks(sparkArr);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="electric-scroll"
      style={{ height: `${scrollPercent}%` }}
    >
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            animationDuration: `${spark.duration}s`,
            animationDelay: `${spark.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
