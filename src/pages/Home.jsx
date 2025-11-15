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
  FaChartLine
} from "react-icons/fa";

export default function Home() {
  const slideLeft = {
    initial: { opacity: 0, x: -120, filter: "blur(6px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true }
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

      {/* BG EFFECT (UPDATED + PREMIUM) */}
      <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-purple-400/20 blur-[110px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[340px] h-[340px] bg-gradient-to-tr from-indigo-300/30 via-blue-300/20 to-purple-300/20 blur-[110px] rounded-full bottom-0 right-0"></div>

      {/* BUBBLE EFFECT (UPDATED GLOSSY) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
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
        .bubble:nth-child(1) { left: 5%; width: 18px; height: 18px; animation-duration: 22s; }
        .bubble:nth-child(2) { left: 20%; animation-duration: 10s; animation-delay: 4s; }
        .bubble:nth-child(3) { left: 40%; width: 15px; height: 15px; animation-duration: 15s; animation-delay: 2s; }
        .bubble:nth-child(4) { left: 60%; width: 30px; height: 30px; animation-duration: 12s; animation-delay: 6s; }
        .bubble:nth-child(5) { left: 70%; animation-duration: 18s; animation-delay: 1s; }
        .bubble:nth-child(6) { left: 75%; animation-duration: 12s; animation-delay: 3s; }
        .bubble:nth-child(7) { left: 80%; animation-duration: 15s; animation-delay: 3s; }
        .bubble:nth-child(8) { left: 90%; animation-duration: 20s; animation-delay: 3s; }
        .bubble:nth-child(9) { left: 100%; animation-duration: 22s; animation-delay: 3s; }

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
        <motion.h3
          {...slideLeft}
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent drop-shadow-md text-center"
        >
          About CustomTech Lab USA
        </motion.h3>

        <motion.div
          {...slideLeft}
          className="w-24 h-1 bg-blue-400 mx-auto mb-10 rounded-full"
        />

        <motion.p
          {...slideLeft}
          className="text-gray-700 leading-relaxed mb-4 text-lg text-center max-w-4xl mx-auto"
        >
          CustomTech Lab USA has been empowering businesses with digital innovation since 2017...
        </motion.p>

        <motion.p
          {...slideLeft}
          className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto"
        >
          Our expert engineers and designers help companies bring digital ideas to life across 
          Healthcare, eCommerce, CRM, HRMS, ATS platforms and more.
        </motion.p>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 relative z-10">
        {[
          { num: "150+", label: "Projects Delivered", icon: <FaProjectDiagram /> },
          { num: "50+", label: "Global Clients", icon: <FaUsers /> },
          { num: "7+ Years", label: "Industry Experience", icon: <FaClock /> }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -120, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.12 }}
            viewport={{ once: true }}
            className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-2"
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

      <div className="absolute w-[100px] h-[100px] bg-blue-600/20 rounded-full left-20 top-100 mx-20 my-0  animate-bounce hover:animate-ping"></div>
      <div className="absolute w-[100px] h-[100px] bg-blue-600/20 rounded-full right-20 top-20 mx-20 my-0  animate-bounce hover:animate-ping"></div>

      {/* INDUSTRIES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.h3
          {...slideLeft}
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent drop-shadow-md text-center"
        >
          Industries We Serve
        </motion.h3>

        <motion.div {...slideLeft} className="w-24 h-1 bg-blue-400 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-3 gap-12">
          {[ 
            {
              title: "Healthcare",
              icon: <FaHospital />,
              desc: "Medical-grade digital systems built with precision.",
              list: ["EMAR Software", "Pharmacy Systems", "Appointment Tools", "Inventory Platforms", "HIPAA Compliant"]
            },
            {
              title: "eCommerce",
              icon: <FaShoppingCart />,
              desc: "High-performance online stores optimized for conversions.",
              list: ["Shopify/WooCommerce", "AI Recommendations", "Payment Gateways", "Order Dashboard", "Mobile Integration"]
            },
            {
              title: "Enterprise Solutions",
              icon: <FaBuilding />,
              desc: "Large-scale workflow automation for scaling companies.",
              list: ["CRM, HRMS, ATS", "Cloud Integrations", "Automation Tools", "Dashboards", "Role-Based Access"]
            }
          ].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -120, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 * i + 0.06 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all"
            >
              <div className="bg-white rounded-2xl p-10 relative">
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${gradients[i % gradients.length]} rounded-full shadow-xl shadow-blue-500/30 flex items-center justify-center`}>
                  <motion.div
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-white text-2xl"
                  >
                    {industry.icon}
                  </motion.div>
                </div>

                <div className="mt-12 text-center">
                  <h4 className="text-2xl font-bold text-blue-700 mb-3">{industry.title}</h4>

                  <p className="text-gray-700 mb-4">{industry.desc}</p>

                  <ul className="text-gray-600 space-y-2 text-sm">
                    {industry.list.map((l, idx) => <li key={idx}>✔ {l}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPECIALIZED SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.h3
          {...slideLeft}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent drop-shadow-md text-center"
        >
          Our Specialized Digital Solutions
        </motion.h3>

        <motion.div {...slideLeft} className="w-24 h-1 bg-blue-400 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "CRM & HRMS Platforms", icon: <FaCogs />, desc: "Smarter employee & customer management.", list: ["Smart Dashboards", "Role-based Access", "Automation"] },
            { title: "Wellness & Fitness Apps", icon: <FaHeartbeat />, desc: "Engaging lifestyle apps with progress tracking.", list: ["Activity Tracking", "Diet Plans", "Analytics"] },
            { title: "Learning Platforms", icon: <FaBook />, desc: "Gamified learning systems for education.", list: ["Gamified Quizzes", "Course Manager", "Progress Charts"] },
            { title: "B2B & B2C Portals", icon: <FaChartLine />, desc: "Scalable multi-layered marketplaces.", list: ["Vendor Panels", "Order Workflows", "Payments"] },
            { title: "Automation Tools", icon: <FaCogs />, desc: "Workflow automation for high efficiency.", list: ["Process Automation", "Monitoring", "API Integrations"] }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -120, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.12 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 shadow-lg hover:-translate-y-2 hover:shadow-blue-500/30 transition-all"
            >
              <div className="bg-white rounded-2xl p-8 relative">
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-full shadow-xl shadow-blue-500/30 flex items-center justify-center`}>
                  <motion.div
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-white text-2xl"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                <div className="mt-12 text-center">
                  <h4 className="text-2xl font-bold text-blue-700 mb-3">{item.title}</h4>

                  <p className="text-gray-700 mb-4">{item.desc}</p>

                  <ul className="text-gray-600 space-y-2 text-sm">
                    {item.list.map((l, i) => <li key={i}>✔ {l}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, x: -120, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-center mt-20 shadow-inner"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Digital Presence?
        </h3>

        <p className="text-lg opacity-90 mb-8">
          Let's build something powerful, scalable, and future-ready—together.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </motion.section>

    </div>
  );
}
