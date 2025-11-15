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
  // LEFT → RIGHT SLIDE ANIMATION
  const slide = (index) => ({
    initial: { opacity: 0, x: index % 2 === 0 ? -120 : 120, filter: "blur(6px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true },
  });

  const gradients = [
    "from-blue-400 to-indigo-500",
    "from-pink-400 to-red-500",
    "from-yellow-400 to-orange-500",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[350px] h-[350px] bg-blue-200/30 blur-3xl rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-100/30 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* 🌟 FLOATING BUBBLES ANIMATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 500, opacity: 0 }}
            animate={{
              y: -200,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
            className="absolute bottom-0 bg-blue-300/20 rounded-full blur-xl"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ⭐ UPDATED HEADING (HALF BLUE + HALF PURPLE) ⭐ */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          <span className="text-blue-700">Our Industry </span>
          <span className="text-purple-700">Excellence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-16"
        >
          Delivering next-generation digital solutions built for performance,
          security, scalability, and enterprise excellence.
        </motion.p>

        {/* ===================== MAIN CARDS ===================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[ 
            {
              icon: <FaHospital />,
              title: "Healthcare",
              desc: "Advanced healthcare systems for hospitals & clinical operations.",
              list: [
                "EMAR Software",
                "Pharmacy Platforms",
                "Patient Tracking",
                "Inventory Systems",
                "Staff Coordination",
                "HIPAA & HL7 Compliant",
              ],
            },
            {
              icon: <FaShoppingCart />,
              title: "eCommerce",
              desc: "High-conversion commerce platforms for scaling businesses.",
              list: [
                "Shopify / WooCommerce",
                "AI Search & Recommendation",
                "Payment Integration",
                "Inventory / Orders",
                "Mobile App Support",
              ],
            },
            {
              icon: <FaBuilding />,
              title: "Enterprise Solutions",
              desc: "Modern enterprise-grade platforms for seamless operations.",
              list: [
                "CRM / HRMS / ATS",
                "Automation Systems",
                "Learning Platforms",
                "B2B & B2C Portals",
                "Fitness & Wellness Apps",
              ],
            },
          ].map((item, index) => (
            <motion.div key={index} {...slide(index)} className="relative card overflow-visible">
              {/* FLOATING ICON */}
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16
                bg-gradient-to-br ${gradients[index]}
                rounded-full shadow-xl flex items-center justify-center`}
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
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

        {/* ===================== WHY CHOOSE US ===================== */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-extrabold text-center mb-12"
          >
            <span className="text-blue-700">Why Businesses </span>
            <span className="text-purple-700">Choose CustomTech Lab?</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <FaShieldAlt />, title: "High Security", desc: "Enterprise-level security and encrypted workflows." },
              { icon: <FaCloud />, title: "Cloud Ready", desc: "Fully scalable cloud deployments (AWS, Azure, DO)." },
              { icon: <FaTools />, title: "Custom Solutions", desc: "Highly tailored systems built to your business needs." },
              { icon: <FaUsers />, title: "User Friendly", desc: "Beautiful UI/UX for a smooth user experience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...slide(i)}
                className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-xl transition"
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
    </section>
  );
}
