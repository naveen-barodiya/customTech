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
import { Link } from "react-router-dom";


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
          <Link to="/advanced-ecommerce">
            <motion.div
              {...buttery}
              className="
      service-card 
      relative
      bg-gradient-to-br from-blue-700 to-indigo-700 
      rounded-3xl 
      p-12 
      shadow-2xl 
      border border-blue-300/50 
      cursor-pointer
      min-h-[230px]
      flex flex-col items-center justify-center
      overflow-hidden
      group
      hover:scale-105
      transition-all duration-300

    "
            >

              {/* GLOW BACKGROUND CIRCLE */}
              <div
                className="
        absolute w-56 h-56 rounded-full 
        bg-blue-400/20 blur-3xl 
        -top-10 -left-10 
        group-hover:scale-125 transition-all duration-500
      "
              ></div>

              <div
                className="
        absolute w-56 h-56 rounded-full 
        bg-purple-500/20 blur-3xl 
        -bottom-10 -right-10 
        group-hover:scale-125 transition-all duration-500
      "
              ></div>

              {/* TOP BADGE */}

              {/* MAIN TEXT */}
              <h3
                className="
        text-2xl 
        md:text-3xl 
        font-extrabold 
        text-white text-center
        drop-shadow-lg
      "
              >
                Explore Advanced
                <br /> eCommerce Services →
              </h3>

              {/* SUBTEXT */}
              <p
                className="
        text-white/90 text-sm mt-4 text-center 
        max-w-xs leading-relaxed
      "
              >
                Unlock next-gen automation, intelligence, multi-vendor systems & more.
              </p>

              {/* HOVER EFFECT */}
              <div
                className="
        absolute inset-0 rounded-3xl 
        border border-white/20 
        opacity-0 group-hover:opacity-100 
        transition duration-500
      "
              ></div>
            </motion.div>
          </Link>


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
