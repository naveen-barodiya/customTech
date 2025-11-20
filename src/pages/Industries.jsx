import React from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaShoppingCart,
  FaBuilding,
  FaShieldAlt,
  FaCloud,
  FaTools,
  FaUsers,
} from "react-icons/fa";

export default function Industries() {

  /* 🚀 Perfect Smooth Motion (same across all pages) */
 /* 🚀 Perfect Smooth Motion (fixed) */
const smoothLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-150px" },
};

const smoothRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-150px" },
};

const smoothUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-150px" },
};

const smoothDown = {
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: false, margin: "-150px" },
};


  const gradients = [
    "from-blue-400 to-indigo-500",
    "from-pink-400 to-red-500",
    "from-yellow-400 to-orange-500",
  ];

  return (
    <section className="relative overflow-hidden bg-white">

      {/* =========================
          🎥 VIDEO HERO SECTION
      ========================== */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">

        {/* VIDEO BG */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.pixabay.com/video/2023/04/15/159021-818026286_large.mp4"
          className="absolute inset-0 w-full h-full object-cover "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6 text-center"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent"
          >
            Our Industry Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-gray-200 max-w-2xl mx-auto text-lg"
          >
            Delivering innovation across every major industry with precision & advanced engineering.
          </motion.p>
        </motion.div>
      </div>

      {/* =========================
          🌟 MAIN CONTENT SECTION
      ========================== */}
      <div className="relative overflow-hidden bg-white py-24 px-6">

        {/* BG GLOW */}
        <div className="absolute w-[350px] h-[350px] bg-blue-200/25 blur-3xl rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-100/25 blur-3xl rounded-full bottom-0 right-0"></div>

        {/* BUBBLES */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: -200, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 bg-blue-300/20 rounded-full blur-xl"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADING */}
          <motion.h2
            {...smoothDown}
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
          >
            <span className="text-blue-700">Industries </span>
            <span className="text-purple-700">We Serve</span>
          </motion.h2>

          <motion.p
            {...smoothUp}
            className="text-gray-700 text-center max-w-3xl mx-auto mb-16"
          >
            Innovative digital systems designed for security, performance, and large-scale enterprise use.
          </motion.p>

          {/* MAIN CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[ 
              {
                icon: <FaHospital />,
                title: "Healthcare",
                desc: "Smart digital solutions for hospitals & medical networks.",
                list: [
                  "EMAR Systems",
                  "Pharmacy Tracking",
                  "Patient Records",
                  "Medical Inventory",
                  "Staff Management",
                ],
              },
              {
                icon: <FaShoppingCart />,
                title: "eCommerce",
                desc: "Modern commerce platforms built for conversion & growth.",
                list: [
                  "Product Dashboard",
                  "AI Search Engine",
                  "Payment Gateways",
                  "Order Tracking",
                  "Mobile App Ready",
                ],
              },
              {
                icon: <FaBuilding />,
                title: "Enterprise Systems",
                desc: "Enterprise-grade workflow automation platforms.",
                list: [
                  "Automation Systems",
                  "Role-Based Access",
                  "B2B / B2C Platforms",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...(index % 2 === 0 ? smoothLeft : smoothRight)}
                className="relative card overflow-visible"
              >
                {/* Floating Icon */}
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 
                  bg-gradient-to-br ${gradients[index]} 
                  rounded-full shadow-xl flex items-center justify-center`}
                >
                  <motion.div
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-white text-2xl"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* CARD CONTENT */}
                <div className="mt-14">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <ul className="card-list">
                    {item.list.map((l, i) => (
                      <li key={i}>✔ {l}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WHY CHOOSE US */}
          <div className="mt-24">
            <motion.h3
              {...smoothDown}
              className="text-3xl font-extrabold text-center mb-12"
            >
              <span className="text-blue-700">Why Brands </span>
              <span className="text-purple-700">Trust Us?</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[ 
                {
                  icon: <FaShieldAlt />,
                  title: "High Security",
                  desc: "Enterprise-grade data protection.",
                },
                {
                  icon: <FaCloud />,
                  title: "Cloud Optimized",
                  desc: "Designed for AWS, Azure, DigitalOcean.",
                },
                {
                  icon: <FaTools />,
                  title: "Custom Solutions",
                  desc: "Tailored to your exact business needs.",
                },
                {
                  icon: <FaUsers />,
                  title: "User Friendly",
                  desc: "Modern UI/UX with seamless interactions.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...(i % 2 === 0 ? smoothUp : smoothDown)}
                  className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition"
                >
                  <div className="text-blue-700 text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD STYLE */}
        <style>{`
          .card {
            padding: 28px;
            background: white;
            border-radius: 20px;
            border: 1px solid #dbeafe;
            box-shadow: 0 3px 12px rgba(0,0,0,0.08);
            transition: 0.3s;
          }
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 30px rgba(59,130,246,0.25);
          }
          .card-title {
            font-size: 22px;
            color: #1d4ed8;
            font-weight: bold;
            margin-bottom: 10px;
            text-align: center;
          }
          .card-desc {
            color: #4b5563;
            text-align: center;
            margin-bottom: 14px;
          }
          .card-list li {
            color: #4b5563;
            margin-bottom: 6px;
          }
        `}</style>

      </div>
    </section>
  );
}
