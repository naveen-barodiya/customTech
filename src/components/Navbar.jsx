import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/industries", label: "Industries" },
    { path: "/services", label: "Services" },
    { path: "/solutions", label: "Solutions" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO + HEADING CLICKABLE TO HERO SECTION */}
        <Link 
          to="/#hero"
          className="flex items-center gap-2 cursor-pointer"
        >
          <img 
            src={logo}
            alt="Logo" 
            className="w-20 h-10 object-contain"
          />

          <h1
            className="
              text-xl font-extrabold 
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
              bg-clip-text text-transparent
            "
          >
            CustomTech Lab
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative py-1"
            >
              <span className="hover:text-blue-500">{item.label}</span>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                ${location.pathname === item.path ? "w-full" : "w-0 hover:w-full"}`}
              ></span>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU ICON */}
        <button 
          className="md:hidden text-2xl text-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-lg relative"
            >
              {item.label}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300
                ${location.pathname === item.path ? "w-full" : "w-0 hover:w-full"}`}
              ></span>
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}
