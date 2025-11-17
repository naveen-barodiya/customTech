import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaHeartbeat,
  FaBook,
  FaBuilding,
  FaShieldAlt,
  FaCloud,
  FaChartPie,
} from "react-icons/fa";

export default function Solutions() {

  /* Smooth Animations */
  const smoothUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: false, margin: "-120px" },
  };

  const smoothDown = {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: false, margin: "-120px" },
  };

  return (
    <section className="relative bg-white overflow-hidden">

      {/* 🎥 HERO VIDEO SECTION */}
      <div className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://media.istockphoto.com/id/884005050/video/chief-industrial-engineer-has-meeting-with-management-and-executives-in-the-heavy-industry.mp4?s=mp4-640x640-is&k=20&c=J8Q_EAcGsoSqhFlajk6QVd-BX53V6sL7u7t1koxOKiQ="
          className="absolute inset-0 w-full h-full object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="
              text-4xl md:text-5xl font-extrabold mb-4
              bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200
              bg-clip-text text-transparent
            "
          >
            Our Digital Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 text-lg max-w-2xl mx-auto"
          >
            Scalable, automated & intelligent ecosystems built for modern businesses.
          </motion.p>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* TITLE BLOCK */}
        <motion.div
          {...smoothUp}
          className="rounded-3xl p-10 mb-16 shadow-lg bg-gradient-to-br from-blue-100 to-indigo-200"
        >
          <h2
            className="
              text-4xl md:text-5xl font-extrabold text-center mb-6
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              bg-clip-text text-transparent
            "
          >
            Digital <span className="text-purple-700">Ecosystem</span> Engineering
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
            Powerful, scalable systems built with automation and cloud-native architecture.
          </p>
        </motion.div>

        {/* SMALL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {[
            { icon: <FaCogs />, title: "CRM & HRMS", desc: "Automated enterprise logic." },
            { icon: <FaHeartbeat />, title: "Wellness Apps", desc: "Fitness & lifestyle platforms." },
            { icon: <FaBook />, title: "Learning Systems", desc: "Gamified learning ecosystem." },
            { icon: <FaBuilding />, title: "B2B / B2C Platforms", desc: "Vendor & marketplace systems." },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...smoothUp}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition-all"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-blue-700 mb-3">
                <span className="text-blue-600 text-2xl">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* LARGE CONTENT */}
        <motion.div
          {...smoothUp}
          className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100 mb-20"
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            End-to-End Digital Engineering
          </h3>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Automation, cloud-driven architecture & real-time business intelligence.
          </p>

          <ul className="space-y-2 text-gray-700 text-lg leading-tight">
            <li>✔ Real-time analytics dashboards</li>
            <li>✔ Workflow automation engines</li>
            <li>✔ Modular, cloud-native systems</li>
            <li>✔ Multi-device optimized experiences</li>
            <li>✔ Secure authentication & roles</li>
          </ul>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div {...smoothUp} className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              icon: <FaShieldAlt />,
              gradient: "from-red-400 via-pink-500 to-rose-500",
              title: "Security First",
              desc: "Encrypted workflows & enterprise compliance."
            },
            {
              icon: <FaCloud />,
              gradient: "from-blue-400 via-indigo-500 to-purple-500",
              title: "Cloud Optimized",
              desc: "Auto-scaling & high availability."
            },
            {
              icon: <FaChartPie />,
              gradient: "from-green-400 via-teal-500 to-cyan-500",
              title: "Analytics Driven",
              desc: "Real-time KPIs & insight dashboards."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              {...smoothUp}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100 relative hover:-translate-y-2 transition"
            >
              {/* Floating Icon */}
              <motion.div
                initial={{ scale: 0.8, y: -10, opacity: 0 }}
                whileInView={{ scale: 1, y: -18, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`absolute -top-6 left-1/2 -translate-x-1/2 
                  w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient}
                  flex items-center justify-center shadow-xl`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-white text-xl"
                >
                  {item.icon}
                </motion.div>
              </motion.div>

              <div className="mt-12 text-center">
                <h4 className="text-xl font-bold text-blue-700 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BUSINESS PROCESS AUTOMATION */}
      <motion.div {...smoothUp} className="mt-10 px-6 pb-28">

        <motion.h2
          {...smoothDown}
          className="
            text-4xl md:text-5xl font-extrabold text-center mb-10
            bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
            bg-clip-text text-transparent
          "
        >
          Business Process Automation
        </motion.h2>

        <motion.p
          {...smoothUp}
          transition={{ delay: 0.1 }}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-16 text-lg"
        >
          Automate workflows & boost operational efficiency.
        </motion.p>

        {/* FIXED CARDS (Overflow Issue Solved) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {[
            {
              icon: <FaCogs />,
              gradient: "from-blue-400 via-indigo-500 to-purple-500",
              title: "Workflow Automation",
              desc: "Automate tasks with multi-step workflows.",
              list: ["Task Scheduling", "Auto-Notifications", "Triggers"],
            },
            {
              icon: <FaHeartbeat />,
              gradient: "from-pink-400 via-rose-500 to-red-500",
              title: "AI Decisions",
              desc: "Predictive & intelligent automation.",
              list: ["Recommendations", "Prediction Models", "Auto Checks"],
            },
            {
              icon: <FaChartPie />,
              gradient: "from-green-400 via-teal-500 to-cyan-500",
              title: "Analytics Automation",
              desc: "Real-time auto-generated dashboards.",
              list: ["Auto Sync", "Insights", "KPI Monitoring"],
            },
            {
              icon: <FaBuilding />,
              gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
              title: "Enterprise Integrations",
              desc: "Integrate ERPs, HRMS, CRM & more.",
              list: ["Secure API", "Cloud Sync", "Role-Based Access"],
            },
            {
              icon: <FaCloud />,
              gradient: "from-blue-400 via-sky-500 to-cyan-500",
              title: "Cloud Automation",
              desc: "Smart cloud scaling & uptime",
              list: ["Scaling", "Backups", "Load Balancing"],
            },
            {
              icon: <FaShieldAlt />,
              gradient: "from-red-400 via-rose-500 to-indigo-600",
              title: "Security Automation",
              desc: "Threat detection & encrypted workflows.",
              list: ["Alerts", "Permissions", "Encryption"],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              {...smoothUp}
              transition={{ delay: index * 0.12 }}
              className="bg-white p-8 py-10 rounded-3xl shadow-lg border border-blue-100 
                          relative hover:-translate-y-2 transition-all"
            >
              {/* Floating Icon */}
              <motion.div
                initial={{ scale: 0.8, y: -10, opacity: 0 }}
                whileInView={{ scale: 1, y: -18, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`absolute -top-6 left-1/2 -translate-x-1/2 
                  w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient}
                  flex items-center justify-center shadow-xl`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-white text-xl"
                >
                  {item.icon}
                </motion.div>
              </motion.div>

              <div className="mt-12 text-center">
                <h4 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h4>

                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <ul className="text-gray-600 space-y-1.5 text-sm leading-tight">
                  {item.list.map((l, i) => (
                    <li key={i}>✔ {l}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
