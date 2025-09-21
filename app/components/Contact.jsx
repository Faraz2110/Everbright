"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    const serviceID = "service_7q46svp";
    const templateID = "template_u549e6m";
    const publicKey = "738K8UXIAL06q35Bv";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError("❌ Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen scroll-mt-24 bg-black flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}  
    >
      <motion.div
        className="max-w-3xl w-full bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-lg p-8 sm:p-12"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }} 
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Have a question, need a service, or want a free quote?  
            Fill in the form and we’ll get back to you.
          </p>
        </div>

        {submitted ? (
          <motion.div
            className="text-center space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-green-500 font-medium text-lg">
              ✅ Thank you! Your message has been sent.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block bg-cyan-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-cyan-600 transition"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}  
          >
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm flex items-center gap-2">
                <FaUser className="text-cyan-400" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm flex items-center gap-2">
                <FaCommentDots className="text-cyan-400" /> Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Contact;
