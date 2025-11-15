import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-20 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-72 h-72 bg-purple-600/10 blur-[130px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm mb-4">
            CustomTech Lab
          </h2>

          <p className="text-sm leading-6 text-gray-400">
            Building modern, scalable, and high-performance digital products.
            Expertly engineered with clean UI & optimized functionalities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl text-blue-400">
            <FaFacebook className="hover:scale-110 hover:text-blue-500 transition cursor-pointer hover:drop-shadow-md" />
            <FaLinkedin className="hover:scale-110 hover:text-blue-500 transition cursor-pointer hover:drop-shadow-md" />
            <FaInstagram className="hover:scale-110 hover:text-blue-500 transition cursor-pointer hover:drop-shadow-md" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Navigation
          </h2>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "Industries", link: "/industries" },
              { name: "Services", link: "/services" },
              { name: "Solutions", link: "/solutions" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="flex items-center gap-2 hover:text-blue-400 group transition"
                >
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 text-lg drop-shadow-sm" />
              support@customtechlab.com
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400 text-lg drop-shadow-sm" />
              +1 (000) 123-4567
            </li>

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400 text-lg drop-shadow-sm" />
              USA
            </li>

            <li className="flex items-center gap-3">
              <FaClock className="text-blue-400 text-lg drop-shadow-sm" />
              Mon – Sat: 10 AM – 7 PM
            </li>
          </ul>
        </div>

        {/* Quick CTA Box */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 shadow-lg">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="font-bold text-lg text-blue-400 mb-2">
              Need a Custom Project?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Let’s build your next digital product with top-tier engineering.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-blue-500/30 transition"
            >
              Contact Now
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT — Line Removed, Modern Style Added */}
      <div className="text-center py-6 mt-12 text-sm text-gray-400 bg-gray-900/70 backdrop-blur-sm">
        © {new Date().getFullYear()} CustomTech Lab USA – All Rights Reserved
      </div>
    </footer>
  );
}
