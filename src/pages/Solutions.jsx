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
  const fadeUp = {
    initial: { opacity: 0, y: 60, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">

      {/* BG GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-blue-200/25 blur-3xl rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-100/20 blur-3xl bottom-0 right-0"></div>

      {/* BUBBLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <style>{`
        .bubble {
          position: absolute;
          bottom: -150px;
          width: 24px;
          height: 24px;
          background: rgba(59, 130, 246, 0.15);
          border-radius: 50%;
          animation: floatUp 20s infinite ease-in-out;
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity:0.3; }
          50% { opacity:0.7; }
          100% { transform: translateY(-130vh) scale(1.4); opacity:0; }
        }
      `}</style>

      {/* MAIN START */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ⭐ UPDATED GRADIENT TITLE BLOCK ⭐ */}
        <motion.div
          {...fadeUp}
          className="rounded-3xl p-10 mb-16 shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 40%, #93c5fd 100%)",
          }}
        >
          <h2
            className="
              text-4xl md:text-5xl font-extrabold text-center mb-6
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              bg-clip-text text-transparent drop-shadow-sm
            "
          >
            Our Digital <span className="text-purple-700">Solutions</span> 
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
            We build powerful, scalable and dynamic digital ecosystems tailored
            for automation, performance, and business acceleration.
          </p>
        </motion.div>

        {/* SMALL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {[
            {
              icon: <FaCogs />,
              title: "CRM & HRMS",
              desc: "Automated workflows & business logic powered systems.",
            },
            {
              icon: <FaHeartbeat />,
              title: "Wellness Apps",
              desc: "Fitness, meditation, lifestyle & habit-building apps.",
            },
            {
              icon: <FaBook />,
              title: "Learning Systems",
              desc: "Gamified learning tools with quizzes & analytics.",
            },
            {
              icon: <FaBuilding />,
              title: "B2B / B2C Platforms",
              desc: "Vendor systems, order management & marketplaces.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
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
          {...fadeUp}
          className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100 mb-20"
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            End-to-End Digital Engineering
          </h3>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Automation, intelligent workflows, cloud-driven architecture, and
            real-time insights—our engineering ensures performance and
            scalability at every stage.
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✔ Real-time analytics dashboards</li>
            <li>✔ Workflow automation engines</li>
            <li>✔ Modular, cloud-native systems</li>
            <li>✔ Multi-device optimized experiences</li>
            <li>✔ High-security authentication & roles</li>
          </ul>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-14 mb-20">
          {[
            {
              icon: <FaShieldAlt />,
              gradient: "from-red-400 via-pink-500 to-rose-500",
              title: "Security First",
              desc: "Secure API, encrypted workflows & enterprise-grade compliance.",
            },
            {
              icon: <FaCloud />,
              gradient: "from-blue-400 via-indigo-500 to-purple-500",
              title: "Cloud Optimized",
              desc: "Auto-scaling, load-balanced & high-speed cloud performance.",
            },
            {
              icon: <FaChartPie />,
              gradient: "from-green-400 via-teal-500 to-cyan-500",
              title: "Analytics Driven",
              desc: "Real-time BI insights & reporting systems for better decisions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100 relative overflow-visible hover:-translate-y-2 transition-all"
            >
              {/* Floating Icon */}
              <motion.div
                initial={{ scale: 0.8, y: -10, opacity: 0 }}
                whileInView={{ scale: 1, y: -20, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`absolute -top-6 left-1/2 -translate-x-1/2 
                           w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient}
                           flex items-center justify-center shadow-xl`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-white text-2xl"
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
      {/* ===================== BUSINESS PROCESS AUTOMATION ===================== */}
<motion.div
  {...fadeUp}
  className="mt-24"
>

  {/* SECTION TITLE */}
  <motion.h2
    {...fadeUp}
    className="
      text-4xl md:text-5xl font-extrabold text-center mb-10
      bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
      bg-clip-text text-transparent
    "
  >
    Business Process Automation
  </motion.h2>

  <motion.p
    {...fadeUp}
    transition={{ ...fadeUp.transition, delay: 0.1 }}
    className="text-gray-700 text-center max-w-3xl mx-auto mb-16 text-lg"
  >
    Automate workflows, reduce manual work, increase accuracy, and achieve
    seamless business scalability with enterprise-grade automation.
  </motion.p>

  {/* AUTOMATION CARDS */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

    {[
      {
        icon: <FaCogs />,
        gradient: "from-blue-400 via-indigo-500 to-purple-500",
        title: "Workflow Automation",
        desc: "Remove manual work with automated multi-step workflows.",
        list: [
          "Task Scheduling",
          "Auto-Notifications",
          "Workflow Triggers",
        ],
      },
      {
        icon: <FaHeartbeat />,
        gradient: "from-pink-400 via-rose-500 to-red-500",
        title: "AI-Based Decisions",
        desc: "Automated decision-making engines powered by AI.",
        list: [
          "Smart Recommendations",
          "Predictive Models",
          "Automated Checks",
        ],
      },
      {
        icon: <FaChartPie />,
        gradient: "from-green-400 via-teal-500 to-cyan-500",
        title: "Analytics Automation",
        desc: "Real-time reporting & auto-generated business dashboards.",
        list: [
          "Auto Data Sync",
          "Business Insights",
          "KPI Monitoring",
        ],
      },
      {
        icon: <FaBuilding />,
        gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
        title: "Enterprise Integrations",
        desc: "Integrate CRMs, ERPs, HRMS & third-party platforms.",
        list: [
          "Secure API Linking",
          "Cloud Sync",
          "Role-Based Data Access",
        ],
      },
      {
        icon: <FaCloud />,
        gradient: "from-blue-400 via-sky-500 to-cyan-500",
        title: "Cloud Automation",
        desc: "Auto-scaling, smart resource management & uptime monitoring.",
        list: [
          "Auto Scaling",
          "Backup Automation",
          "Load Balancing",
        ],
      },
      {
        icon: <FaShieldAlt />,
        gradient: "from-red-400 via-rose-500 to-indigo-600",
        title: "Security Automation",
        desc: "Automated audits, monitoring & real-time threat detection.",
        list: [
          "Auto Threat Alerts",
          "Role Permissions",
          "Encrypted Workflows",
        ],
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: index * 0.15 }}
        className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100 relative overflow-visible hover:-translate-y-2 transition-all"
      >
        {/* Floating Icon */}
        <motion.div
          initial={{ scale: 0.8, y: -10, opacity: 0 }}
          whileInView={{ scale: 1, y: -20, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`absolute -top-6 left-1/2 -translate-x-1/2 
                      w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient}
                      flex items-center justify-center shadow-xl`}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-white text-2xl"
          >
            {item.icon}
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h4>
          <p className="text-gray-600 mb-4">{item.desc}</p>
          <ul className="text-gray-600 space-y-2 text-sm">
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
