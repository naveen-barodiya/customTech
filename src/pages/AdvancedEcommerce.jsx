import React from "react";
import { motion } from "framer-motion";

export default function AdvancedEcommerce() {
  // Global animation preset
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: false, margin: "-80px" },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: false, margin: "-80px" },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: false, margin: "-80px" },
  };

  return (
    <section className="bg-white min-h-screen overflow-hidden">

      {/* ===================================
          HERO SECTION (MODERN)
      =================================== */}
      <div className="relative h-[60vh] flex items-center justify-center select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.pixabay.com/video/2025/08/03/295166_large.mp4"
          className="absolute inset-0 w-full h-full object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-xl">
            Advanced eCommerce Development
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed"
          >
            Scalable • Intelligent • Future-Ready digital commerce experiences engineered for growth.
          </motion.p>
        </motion.div>
      </div>

      {/* ===================================
          MAIN CONTENT
      =================================== */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* ================================
            SECTION 1 — Modern Boxes
        ================================= */}
        <motion.div {...fadeUp} className="">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Custom eCommerce Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT IMAGE */}
            <motion.div {...fadeLeft}>
              <img
                src="https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg"
                className="rounded-2xl shadow-xl"
                alt="ecommerce"
              />
            </motion.div>

            {/* RIGHT CONTENT BOX */}
            <motion.div
              {...fadeRight}
              className="bg-white/80 backdrop-blur-xl shadow-xl border border-blue-100 rounded-3xl p-8"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                We create fast, scalable, and fully customized eCommerce platforms designed for high conversion.
                From AI search to secure payments and mobile integrations—every module is engineered for performance.
              </p>

              <ul className="mt-5 space-y-2 text-gray-700 font-medium">
                <li>✔ Smart product search</li>
                <li>✔ Secure payment systems</li>
                <li>✔ Mobile app connectivity</li>
                <li>✔ CRM • Influencer tools • WMS • Custom admin panel</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* ================================
            SECTION 2 — Grid Cards
        ================================= */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">
            Advanced eCommerce Development
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <motion.div
              {...fadeUp}
              className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 border hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Core Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔ AI product search</li>
                <li>✔ Multi-currency payments</li>
                <li>✔ Inventory & orders</li>
                <li>✔ Subscription management</li>
                <li>✔ iOS + Android integration</li>
              </ul>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              {...fadeUp}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl rounded-3xl p-8 text-white hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-3">Smart Automation</h3>
              <ul className="space-y-2">
                <li>✔ Chatbots & AI</li>
                <li>✔ Automated marketing</li>
                <li>✔ Dynamic product recommendations</li>
                <li>✔ CRM sync</li>
              </ul>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              {...fadeUp}
              className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 border hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Modules</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔ WMS (Warehouse)</li>
                <li>✔ Affiliate system</li>
                <li>✔ Rewards & Wallet</li>
                <li>✔ Role-based Admin</li>
                <li>✔ Multi-vendor capabilities</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* ================================
            SECTION 3 — Corporate Style
        ================================= */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
            Enterprise eCommerce Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* TEXT BOX */}
            <motion.div
              {...fadeLeft}
              className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-3xl p-8"
            >
              <p className="text-gray-700 leading-relaxed">
                High-performance platforms with enterprise-grade infrastructure,
                engineered for long-term scalability and efficiency.
              </p>

              <ul className="mt-5 space-y-2 text-gray-700 font-medium">
                <li>✔ Secure global payment gateway</li>
                <li>✔ Inventory + logistics automation</li>
                <li>✔ Analytics-powered admin panel</li>
                <li>✔ Loyalty, wallet & reward ecosystem</li>
                <li>✔ B2B • B2C • Multi-Vendor architectures</li>
              </ul>
            </motion.div>

            {/* IMAGE */}
            <motion.div {...fadeRight}>
              <img
                src="https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg"
                className="rounded-2xl shadow-xl w-full"
                alt="dashboard"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
