import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <section
      className="
        relative h-[90vh] flex items-center justify-center text-center px-6
        overflow-hidden cursor-default
      "
    >
      {/* ===========================
          VIDEO BACKGROUND
      ============================ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-[3px]"
        src="https://cdn.pixabay.com/video/2023/05/03/161515-823603558_large.mp4"
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* ===========================
          MAIN CONTENT (same animation)
      ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h2
          className="
            text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl
            bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300
            bg-clip-text text-transparent
          "
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforming Ideas Into  
          <span className="block text-purple-200">Digital Reality</span>
        </motion.h2>

        <motion.p
          className="
            text-gray-200 max-w-2xl mx-auto text-lg md:text-xl
            leading-relaxed drop-shadow-sm
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We build scalable, secure, and beautiful custom web & mobile applications  
          that help businesses innovate, grow, and stay ahead of the competition.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button
            className="
              px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600
              text-white rounded-lg shadow-lg 
              hover:shadow-blue-500/40 hover:scale-105 transition-all
            "
          >
            Explore Services
          </button>

          <button
            className="
              px-6 py-3 bg-white/20 backdrop-blur-md border border-white/40 
              text-white rounded-lg shadow hover:bg-white/30 
              hover:shadow-blue-300/40 hover:scale-105 transition-all
            "
          >
            Get a Quote
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
