"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaUser, FaCommentDots, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("⚠️ Please fill in all fields.");
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("⚠️ Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.section
      id="contact"
      className="bg-black scroll-mt-24 py-16 sm:py-20 lg:py-24 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full max-w-3xl bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col justify-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Have a question, need a service, or want a free quote?  
            Fill in the form and we’ll get back to you.
          </p>
        </div>

        {submitted ? (
          <motion.div
            className="text-center space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400">✅ Message Sent!</h2>
            <p className="text-gray-300">Thank you for reaching out. We’ll contact you shortly.</p>
            <button
              className="mt-4 px-5 py-2 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-600 transition"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-500 text-sm" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-500 text-sm" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-3.5 text-gray-500 text-sm" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full pl-10 pr-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-3.5 text-gray-500 text-sm" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Contact;
