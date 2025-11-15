import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
           <ScrollToTop />
      <Navbar />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
