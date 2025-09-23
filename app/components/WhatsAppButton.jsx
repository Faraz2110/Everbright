"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Waves */}
      <motion.span
        className="absolute w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-green-500 opacity-20 sm:opacity-20"
        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.05, 0.2] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 opacity-15 sm:opacity-20"
        animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0.05, 0.15] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* WhatsApp button */}
      <motion.a
        href="https://wa.me/+60198717647"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
