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
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">

      {/* GLOW EFFECT */}
      <div className="absolute w-[350px] h-[350px] bg-blue-200/25 blur-3xl rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-100/20 blur-3xl bottom-0 right-0"></div>

      {/* BUBBLE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => <div key={i} className="bubble"></div>)}
      </div>

      <style>{`
        .bubble {
          position: absolute;
          bottom: -120px;
          width: 22px;
          height: 22px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          animation: bubbleFloat 20s infinite ease-in-out;
        }
        @keyframes bubbleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-130vh) scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ⭐ UPDATED GRADIENT TITLE ⭐ */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-extrabold text-center mb-6
            bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
            bg-clip-text text-transparent drop-shadow-sm
          "
        >
          Our Professional <span className="text-purple-700">Services</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-16"
        >
          We create powerful, scalable and futuristic digital systems tailored 
          to your business needs — with unmatched engineering quality.
        </motion.p>

        {/* SERVICE CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {[
            { icon: <FaLaptopCode />, title: "Web App Development", desc: "High-performance web platforms built for speed and enterprise reliability.", list: ["Full-stack development", "Dashboards & analytics", "Payment APIs", "Enterprise security"], gradient: "from-blue-400 to-indigo-500" },

            { icon: <FaMobileAlt />, title: "Mobile App Development", desc: "Modern Android & iOS apps built for performance.", list: ["Hybrid/native apps", "Secure backend", "Notifications", "Deployment"], gradient: "from-pink-400 to-rose-500" },

            { icon: <FaBrain />, title: "AI & Automation", desc: "AI-driven workflows that scale your business.", list: ["Chatbots", "Prediction engines", "AI Automation", "NLP systems"], gradient: "from-green-400 to-emerald-500" },

            { icon: <FaCloud />, title: "Cloud & DevOps", desc: "Cloud-native, scalable and reliable infra systems.", list: ["AWS/Azure/DO", "CI/CD pipelines", "Auto backups", "Zero downtime"], gradient: "from-purple-400 to-fuchsia-500" },

            { icon: <FaPenNib />, title: "UI/UX Design", desc: "Modern UI with a user-centered design approach.", list: ["Wireframes", "Motion Design", "Design Systems", "Prototypes"], gradient: "from-amber-400 to-orange-500" },

            { icon: <FaShieldAlt />, title: "Security & Maintenance", desc: "Continuous monitoring + security protection.", list: ["Bug fixes", "Security audits", "Patch updates", "Monitoring"], gradient: "from-red-400 to-red-600" },

            { icon: <FaRocket />, title: "Startup MVP Development", desc: "Launch your idea fast with scale-ready MVPs.", list: ["Fast prototyping", "Investor-ready", "Scalable backend", "Rapid delivery"], gradient: "from-teal-400 to-cyan-500" },

            { icon: <FaPuzzlePiece />, title: "API Integration", desc: "Connect external systems & apps effortlessly.", list: ["Payment APIs", "SMS/Email", "CRM Integration", "AI APIs"], gradient: "from-yellow-400 to-lime-500" },
          ].map((item, index) => {

            const direction = index % 2 === 0 ? -120 : 120;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: direction,
                  filter: "blur(6px)"
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)"
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="service-card relative overflow-visible"
              >

                {/* FLOATING ICON */}
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
                <div className="mt-12">
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-desc">{item.desc}</p>

                  <ul className="service-list">
                    {item.list.map((l, idx) => (
                      <li key={idx}>✔ {l}</li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}

          {/* EXPLORE MORE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="service-card explore-card cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-blue-700">Explore More Services</h3>
              <span className="text-blue-700 text-3xl font-bold">→</span>
            </div>

            <p className="text-black text-sm mt-3 leading-relaxed">
              Discover advanced digital solutions built for automation,
              AI workflows, cloud systems and more.
            </p>
          </motion.div>

        </div>
      </div>

      {/* CARD STYLE */}
      <style>{`
        .service-card {
          padding: 40px 25px 30px 25px;
          background: white;
          border-radius: 20px;
          border: 1px solid #dbeafe;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(59,130,246,0.25);
        }
      `}</style>

    </section>
  );
}
