import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Hero() {
  const [bubbles, setBubbles] = useState([]);

  const createBubble = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const newBubble = { id: Date.now(), x, y };
    setBubbles((prev) => [...prev, newBubble]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 700);
  };

  return (
    <section
      onMouseMove={createBubble}
      className="  
        relative h-[90vh] flex items-center justify-center text-center px-6
        overflow-hidden cursor-default
        bg-gradient-to-br from-blue-100 via-white to-indigo-100 
      "
    >
      {/* Cursor Trail Bubbles */}
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 1.9, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="
            absolute w-8 h-8 
            rounded-full blur-lg pointer-events-none 
            bg-gradient-to-br from-blue-400/40 to-purple-400/40
            shadow-lg shadow-blue-500/20
          "
          style={{ left: b.x - 16, top: b.y - 16 }}
        />
      ))}

      {/* BACKGROUND GLOW EFFECTS */}
      <motion.div
        className="
          absolute w-96 h-96 rounded-full blur-[120px]
          bg-gradient-to-br from-blue-400/40 to-indigo-500/30
        "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ top: "-80px", left: "-100px" }}
      />

      <motion.div
        className="
          absolute w-96 h-96 rounded-full blur-[130px]
          bg-gradient-to-br from-purple-400/30 to-blue-300/30
        "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        style={{ bottom: "-80px", right: "-80px" }}
      />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h2
          className="
            text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl
            bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 
            bg-clip-text text-transparent
          "
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforming Ideas Into  
          <span className="block text-purple-700">Digital Reality</span>
        </motion.h2>

        <motion.p
          className="
            text-gray-700 max-w-2xl mx-auto text-lg md:text-xl
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
              px-6 py-3 bg-white border border-blue-500 text-blue-600 
              rounded-lg shadow hover:bg-blue-50 
              hover:shadow-blue-300/40 hover:scale-105 transition-all
            "
          >
            Get a Quote
          </button>
        </motion.div>
      </motion.div>

      {/* FLOATING SHAPES */}
      <motion.div
        className="
          absolute w-10 h-10 bg-blue-400/40 rounded-full blur-sm
          shadow-md shadow-blue-500/30
        "
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ top: "20%", left: "10%" }}
      />

      <motion.div
        className="
          absolute w-12 h-12 bg-purple-400/40 rounded-full blur-sm
          shadow-md shadow-purple-500/30
        "
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ bottom: "25%", right: "15%" }}
      />
    </section>
  );
}
