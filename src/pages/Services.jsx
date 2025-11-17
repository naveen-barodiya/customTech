import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaCloud,
  FaPenNib,
  FaShieldAlt,
} from "react-icons/fa";

export default function Services() {
  /* ================================
        BUTTER SMOOTH ANIMATIONS
     ================================ */
  const buttery = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: false, margin: "-80px" },
  };

  const butteryLeft = {
    initial: { opacity: 0, x: -12 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: false, margin: "-80px" },
  };

  const butteryRight = {
    initial: { opacity: 0, x: 12 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: false, margin: "-80px" },
  };

  return (
    <section className="relative bg-white overflow-hidden">

      {/* ======================================
          HERO SECTION WITH LIGHT VIDEO OVERLAY
      ======================================= */}
      <div className="relative h-[55vh] flex items-center justify-center">

        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.pixabay.com/video/2016/09/21/5497-184226939_medium.mp4"
          className="absolute inset-0 w-full h-full object-cover blur-[2px]"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative text-center z-10 px-6"
        >
          <motion.h2
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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
            transition={{ delay: 0.25, duration: 0.55 }}
            className="text-gray-200 text-lg max-w-2xl mx-auto"
          >
            Scalable, secure and future-ready digital solutions for every business.
          </motion.p>
        </motion.div>
      </div>

      {/* ======================================
              SERVICES CARD SECTION
      ======================================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {[
            {
              icon: <FaLaptopCode />,
              title: "Web App Development",
              desc: "High-performance scalable platforms.",
              list: ["Full-stack", "Dashboards", "Payments", "Security"],
              gradient: "from-blue-400 to-indigo-500",
            },
            {
              icon: <FaMobileAlt />,
              title: "Mobile App Development",
              desc: "Fast & modern Android/iOS apps.",
              list: ["Hybrid", "Backend", "Notifications", "Deployment"],
              gradient: "from-pink-400 to-rose-500",
            },
            {
              icon: <FaBrain />,
              title: "AI & Automation",
              desc: "AI that accelerates your business.",
              list: ["Chatbots", "Prediction", "Automation", "NLP"],
              gradient: "from-green-400 to-emerald-500",
            },
            {
              icon: <FaCloud />,
              title: "Cloud & DevOps",
              desc: "Cloud-native scalable infra.",
              list: ["AWS/Azure", "CI/CD", "Backups", "Zero downtime"],
              gradient: "from-purple-400 to-fuchsia-500",
            },
            {
              icon: <FaPenNib />,
              title: "UI/UX Design",
              desc: "Minimal modern user experience.",
              list: ["Wireframes", "Motion", "Systems", "Prototypes"],
              gradient: "from-amber-400 to-orange-500",
            },
            {
              icon: <FaShieldAlt />,
              title: "Security & Maintenance",
              desc: "Continuous protection & updates.",
              list: ["Audit", "Patches", "Monitoring", "Fixes"],
              gradient: "from-red-400 to-red-600",
            },
          ].map((item, index) => {
            const animation = index % 2 === 0 ? butteryLeft : butteryRight;

            return (
              <motion.div
                key={index}
                {...animation}
                className="service-card relative bg-white rounded-2xl p-10 shadow-lg border border-blue-100"
              >
                
                {/* Floating Icon */}
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

                <div className="mt-10 text-center">
                  <h3 className="text-lg font-bold text-blue-700">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{item.desc}</p>

                  <ul className="text-gray-600 space-y-2 text-sm">
                    {item.list.map((l, idx) => (
                      <li key={idx}>✔ {l}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          {/* Explore More Card */}
          <motion.div
            {...buttery}
            className="service-card bg-white rounded-2xl p-10 shadow-lg border border-blue-200 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-700">
              Explore More Services →
            </h3>
            <p className="text-gray-700 text-sm mt-3">
              Discover advanced automation & cloud solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ======================================
                  GPU ACCELERATION
      ======================================= */}
      <style>{`
        .service-card {
          transition: 0.3s ease;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
