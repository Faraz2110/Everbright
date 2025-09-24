"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link"; // ✅ use Next.js Link

const LatestSaleButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
      >
        <Link
          href="/promo" // ✅ change to your service page route
          className="relative px-5 py-2 rounded-xl shadow-lg flex items-center gap-2 font-semibold
                     bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white border border-yellow-200
                     hover:shadow-[0_0_20px_4px_rgba(255,200,0,0.7)] transition-all duration-300
                     text-sm sm:text-base"
        >
          <Zap
            size={20}
            className="text-white animate-pulse drop-shadow-[0_0_6px_#FFD700]"
          />
          <span className="tracking-wide">New Promo</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default LatestSaleButton;
