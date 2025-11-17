import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaCloud,
  FaPenNib,
  FaShieldAlt,
  FaRocket,
  FaPuzzlePiece,
} from "react-icons/fa";

export default function Services() {
  /* Smooth Animations */
  /* Smooth Animations (More Premium & Slow + Feather Soft) */
const smoothUp = {
  initial: { opacity: 0, y: 60, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-140px" },
};

const smoothLeft = {
  initial: { opacity: 0, x: -60, filter: "blur(4px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-140px" },
};

const smoothRight = {
  initial: { opacity: 0, x: 60, filter: "blur(4px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-140px" },
};


  return (
    <section className="relative bg-white overflow-hidden">

      {/* ===========================
          🎥 HERO TOP SECTION WITH VIDEO
      ============================ */}
      <div className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.pixabay.com/video/2016/09/21/5497-184226939_medium.mp4"
          className="absolute inset-0 w-full h-full object-cover blur-[3px]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* HERO CONTENT */}
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
            Our Professional Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 text-lg max-w-2xl mx-auto"
          >
            Scalable, secure and future-ready digital solutions for every business.
          </motion.p>
        </motion.div>
      </div>

      {/* ==================================
          MAIN SERVICES CONTENT SECTION
      =================================== */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* SERVICE CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {[
            {
              icon: <FaLaptopCode />,
              title: "Web App Development",
              desc: "High-performance web platforms built for enterprise reliability.",
              list: ["Full-stack", "Dashboards", "Payments", "Security"],
              gradient: "from-blue-400 to-indigo-500",
            },
            {
              icon: <FaMobileAlt />,
              title: "Mobile App Development",
              desc: "Modern Android & iOS apps built for performance.",
              list: ["Hybrid", "Backend", "Notifications", "Deployment"],
              gradient: "from-pink-400 to-rose-500",
            },
            {
              icon: <FaBrain />,
              title: "AI & Automation",
              desc: "AI-driven workflows that scale your business.",
              list: ["Chatbots", "Prediction engines", "AI Automation", "NLP"],
              gradient: "from-green-400 to-emerald-500",
            },
            {
              icon: <FaCloud />,
              title: "Cloud & DevOps",
              desc: "Cloud-native, scalable and reliable infra systems.",
              list: ["AWS/Azure", "CI/CD", "Backups", "Zero downtime"],
              gradient: "from-purple-400 to-fuchsia-500",
            },
            {
              icon: <FaPenNib />,
              title: "UI/UX Design",
              desc: "Clean, modern & engaging user interfaces.",
              list: ["Wireframes", "Motion", "Design Systems", "Prototypes"],
              gradient: "from-amber-400 to-orange-500",
            },
            {
              icon: <FaShieldAlt />,
              title: "Security & Maintenance",
              desc: "Continuous monitoring + security protection.",
              list: ["Audit", "Patches", "Monitoring", "Fixes"],
              gradient: "from-red-400 to-red-600",
            },
          ].map((item, index) => {
            const animation = index % 2 === 0 ? smoothLeft : smoothRight;

            return (
              <motion.div
                key={index}
                {...animation}
                className="service-card relative bg-white rounded-2xl p-10 shadow-lg border border-blue-100"
              >
                {/* ICON */}
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 
                  bg-gradient-to-br ${item.gradient} rounded-full shadow-xl 
                  flex items-center justify-center`}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-white text-2xl"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="mt-10 text-center">
                  <h3 className="text-lg font-bold text-blue-700">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-3 px-2">{item.desc}</p>

                  <ul className="text-gray-600 space-y-2 text-sm">
                    {item.list.map((l, idx) => (
                      <li key={idx}>✔ {l}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          {/* EXPLORE CARD */}
          <motion.div
            {...smoothUp}
            className="service-card bg-white rounded-2xl p-10 shadow-lg border border-blue-200 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-blue-700">Explore More Services</h3>
              <span className="text-blue-700 text-3xl font-bold">→</span>
            </div>

            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              Discover advanced digital solutions built for automation and cloud systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CARD HOVER STYLE */}
      <style>{`
        .service-card {
          transition: 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
