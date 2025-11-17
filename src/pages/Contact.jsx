import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  /* 🚀 BUTTER-SMOOTH ANIMATION SYSTEM (FIXED — no transform conflict) */
  const smoothUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: false, margin: "-120px" },
  };

  const smoothDown = {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: false, margin: "-120px" },
  };

  const smoothLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: false, margin: "-120px" },
  };

  const smoothRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: false, margin: "-120px" },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTimeout(() => setShowPopup(false), 3500);
  };

  const gradients = [
    "from-blue-500 via-indigo-600 to-purple-600",
    "from-pink-500 via-rose-500 to-red-500",
    "from-green-500 via-teal-500 to-blue-600",
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[360px] h-[360px] bg-blue-400/25 blur-[120px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-300/20 blur-[130px] rounded-full bottom-0 right-0"></div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          {...smoothDown}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 
          bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent drop-shadow-md"
        >
          Contact <span className="text-purple-700">Us</span>
        </motion.h2>

        <motion.p
          {...smoothUp}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-20 text-lg"
        >
          Have a project in mind? Our team is excited to bring your vision to life.
        </motion.p>

        {/* TEAM CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            { name: "Naveen Sharma", role: "Project Manager", email: "naveen@example.com" },
            { name: "Rahul Mehta", role: "Lead Developer", email: "rahul@example.com" },
            { name: "Simran Singh", role: "UI/UX Designer", email: "simran@example.com" },
          ].map((member, i) => (
            <motion.div
              key={i}
              {...(i % 2 === 0 ? smoothLeft : smoothRight)}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 pt-16 shadow-xl border border-blue-100 
              hover:-translate-y-2 hover:shadow-blue-300/40 transition-all overflow-visible"
            >
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16
                rounded-full bg-gradient-to-br ${gradients[i]} shadow-xl shadow-blue-600/40 flex items-center justify-center`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-white text-3xl drop-shadow"
                >
                  <FaUserTie />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-blue-700 text-center mt-6">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>

              <p className="text-blue-700 text-center mt-3 text-sm flex justify-center items-center gap-2">
                <FaEnvelope /> {member.email}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-5">
                <FaInstagram className="text-pink-500 text-xl hover:scale-110 hover:drop-shadow transition cursor-pointer" />
                <FaLinkedin className="text-blue-600 text-xl hover:scale-110 hover:drop-shadow transition cursor-pointer" />
                <FaFacebook className="text-blue-700 text-xl hover:scale-110 hover:drop-shadow transition cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONTACT FORM */}
        <motion.div
          {...smoothUp}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200 p-12 max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-extrabold mb-10 text-center 
            bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent drop-shadow">
            Send Us a Message
          </h3>

          <form className="grid md:grid-cols-2 gap-10" onSubmit={handleSubmit}>

            {/* LEFT COLUMN */}
            <div className="space-y-8">
              <div className="relative">
                <FaUserTie className="absolute left-4 top-4 text-blue-500 text-xl" />
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-lg bg-white outline-none
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-blue-500 text-xl" />
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-lg bg-white outline-none
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-4 text-blue-500 text-xl" />
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-lg bg-white outline-none
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div className="relative">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full pl-4 pr-4 py-3 border border-blue-300 rounded-lg bg-white outline-none
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                ></textarea>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="md:col-span-2 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-4 text-white text-lg font-semibold rounded-xl shadow-lg
                bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition"
              >
                Send Message
              </motion.button>
            </div>

          </form>
        </motion.div>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white/90 backdrop-blur-xl p-10 rounded-[30px] border border-blue-300 
              shadow-2xl max-w-sm w-full text-center"
            >
              <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-2xl font-bold text-blue-700">Thank You!</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Your message has been sent successfully.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
