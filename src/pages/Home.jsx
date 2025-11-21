import Hero from "../components/Hero";
import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logo.png";

import {
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaHospital,
  FaShoppingCart,
  FaBuilding,
  FaCogs,
  FaHeartbeat,
  FaBook,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  // 🚀 FIXED BUTTER-SMOOTH ANIMATION SYSTEM
  // 🧈 SUPER SMOOTH ANIMATION SYSTEM – BUTTERY CLEAN
  // 🧈 ULTRA BUTTER-SMOOTH ANIMATION ENGINE
  const smooth = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      mass: 0.3,
      damping: 12
    },
    viewport: { margin: "-80px", once: false },
  };

  const smoothLeft = {
    initial: { opacity: 0, x: -18 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      mass: 0.3,
      damping: 12
    },
    viewport: { margin: "-80px", once: false },
  };

  const smoothRight = {
    initial: { opacity: 0, x: 18 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      mass: 0.3,
      damping: 12
    },
    viewport: { margin: "-80px", once: false },
  };

  const smoothDown = {
    initial: { opacity: 0, y: -18 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      mass: 0.3,
      damping: 12
    },
    viewport: { margin: "-80px", once: false },
  };



  const gradients = [
    "from-blue-500 to-indigo-600",
    "from-pink-500 to-rose-500",
    "from-green-500 to-emerald-600",
    "from-purple-500 to-fuchsia-600",
    "from-amber-500 to-orange-600",
    "from-teal-500 to-cyan-600",
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* BG EFFECT */}
      <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-purple-400/20 blur-[110px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[340px] h-[340px] bg-gradient-to-tr from-indigo-300/30 via-blue-300/20 to-purple-300/20 blur-[110px] rounded-full bottom-0 right-0"></div>

      {/* BUBBLE EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <style>{`
        .bubble {
          position: absolute;
          bottom: -100px;
          width: 26px;
          height: 26px;
          background: radial-gradient(circle at 30% 30%, rgba(99, 158, 255, 0.45), rgba(59, 130, 246, 0.15));
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
          animation: floatUp 16s infinite ease-in-out;
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-120vh) scale(1.4); opacity: 0; }
        }
      `}</style>

      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <motion.h3 {...smoothDown} className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent text-center">
          About CustomTech Lab USA
        </motion.h3>

        <motion.div {...smoothDown} className="w-24 h-1 bg-blue-400 mx-auto mb-10 rounded-full" />

        <motion.p {...smooth} className="text-gray-700 leading-relaxed mb-4 text-lg text-center max-w-4xl mx-auto">
          CustomTech Lab USA has been empowering businesses with digital innovation since 2017...
        </motion.p>

        <motion.p {...smooth} className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
          Our expert engineers and designers help companies bring digital ideas to life...
        </motion.p>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 relative z-10">
        {[
          { num: "150+", label: "Projects Delivered", icon: <FaProjectDiagram /> },
          { num: "50+", label: "Global Clients", icon: <FaUsers /> },
          { num: "7+ Years", label: "Industry Experience", icon: <FaClock /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            {...(index % 2 === 0 ? smoothLeft : smoothRight)}
            className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-white p-8 rounded-2xl">
              <h2 className="text-3xl font-extrabold text-blue-700 flex items-center gap-2 justify-center">
                <span className="text-2xl">{item.icon}</span> {item.num}
              </h2>
              <p className="mt-2 text-gray-600 text-center">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.h3 {...smoothDown} className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent text-center">
          Industries We Serve
        </motion.h3>

        <motion.div {...smoothDown} className="w-24 h-1 bg-blue-400 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Healthcare",
              icon: <FaHospital />,
              desc: "Medical-grade digital systems built with precision.",
              list: ["EMAR Software", "Pharmacy Systems", "Appointment Tools", "Inventory Platforms", "HIPAA Compliant"],
            },
            {
              title: "eCommerce",
              icon: <FaShoppingCart />,
              desc: "High-performance online stores optimized for conversions.",
              list: [ "AI Recommendations", "Payment Gateways", "Order Dashboard", "Mobile Integration"],
            },
            {
              title: "Enterprise Solutions",
              icon: <FaBuilding />,
              desc: "Large-scale workflow automation for scaling companies.",
              list: [ "Cloud Integrations", "Automation Tools", "Dashboards", "Role-Based Access"],
            },
          ].map((industry, i) => (
            <motion.div
              key={i}
              {...(i % 2 === 0 ? smooth : smoothDown)}
              className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 shadow-lg hover:-translate-y-2 transition-all"
            >
              <div className="bg-white rounded-2xl p-10 relative">
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${
                    gradients[i % gradients.length]
                  } rounded-full shadow-xl flex items-center justify-center`}
                >
                  <motion.div animate={{ rotate: [0, 6, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-white text-2xl">
                    {industry.icon}
                  </motion.div>
                </div>

                <div className="mt-12 text-center">
                  <h4 className="text-2xl font-bold text-blue-700 mb-3">{industry.title}</h4>
                  <p className="text-gray-700 mb-4">{industry.desc}</p>

                  <ul className="text-gray-600 space-y-2 text-sm">
                    {industry.list.map((l, idx) => (
                      <li key={idx}>✔ {l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPECIALIZED SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.h3 {...smoothDown} className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent text-center">
          Our Specialized Digital Solutions
        </motion.h3>

        <motion.div {...smoothDown} className="w-24 h-1 bg-blue-400 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            
            { title: "Wellness & Fitness Apps", icon: <FaHeartbeat />, desc: "Engaging lifestyle apps with progress tracking.", list: ["Activity Tracking", "Diet Plans", "Analytics"] },
            { title: "Learning Platforms", icon: <FaBook />, desc: "Gamified learning systems for education.", list: ["Gamified Quizzes", "Course Manager", "Progress Charts"] },
            { title: "B2B & B2C Portals", icon: <FaChartLine />, desc: "Scalable multi-layered marketplaces.", list: ["Vendor Panels", "Order Workflows", "Payments"] },
            { title: "Automation Tools", icon: <FaCogs />, desc: "Workflow automation for high efficiency.", list: ["Process Automation", "Monitoring", "API Integrations"] },
          ].map((item, index) => {
            const anims = [smoothLeft, smoothRight, smooth, smoothDown];
            return (
              <motion.div
                key={index}
                {...anims[index % 4]}
                className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 shadow-lg hover:-translate-y-2 transition-all"
              >
                <div className="bg-white rounded-2xl p-8 relative">
                  <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } rounded-full shadow-xl flex items-center justify-center`}
                  >
                    <motion.div animate={{ rotate: [0, 6, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-white text-2xl">
                      {item.icon}
                    </motion.div>
                  </div>

                  <div className="mt-12 text-center">
                    <h4 className="text-2xl font-bold text-blue-700 mb-3">{item.title}</h4>
                    <p className="text-gray-700 mb-4">{item.desc}</p>

                    <ul className="text-gray-600 space-y-2 text-sm">
                      {item.list.map((l, i) => (
                        <li key={i}>✔ {l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        {...smooth}
        className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-center mt-20 shadow-inner"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>

        <p className="text-lg opacity-90 mb-8">Let's build something powerful, scalable, and future-ready—together.</p>

        <motion.button whileHover={{ scale: 1.08 }} className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}
