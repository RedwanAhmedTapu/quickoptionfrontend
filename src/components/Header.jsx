import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Smartphone, Download, Monitor, Bot } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => setContentVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [menuOpen]);

  const closeMenu = () => {
    setContentVisible(false);
    setTimeout(() => setMenuOpen(false), 300);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#001e3c] text-white">
      {/* Top Header */}
      <div className="max-w-6xl flex ml-4 justify-between items-center px-2 py-3 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-7 h-7 rounded-md flex items-center justify-center font-bold text-white text-sm">
            P
          </div>
          <span className="text-lg font-bold">
            <span className="text-blue-400">Pocket</span>Option
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-300 transition-colors">Quick start</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Free demo</a>
          <a href="#" className="hover:text-blue-300 transition-colors">About us</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Blog</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1 text-sm hover:text-blue-300">
            <Globe size={16} />
            <span>English</span>
          </button>

          {/* Toggle Menu / Close */}
          <button
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (below header) */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-gradient-to-br from-[#0f2847] via-[#1e3a5f] to-[#2c5282] text-white shadow-lg px-6 py-6 transition-all duration-500 ease-in-out ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          {/* Menu Title */}
          <h1
            className="text-4xl font-black mb-8 tracking-wide"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.5s ease-in-out",
            }}
          >
            MENU
          </h1>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full max-w-6xl text-sm">
            {/* How it works + Why Pocket Option */}
            <div className="flex flex-col space-y-6">
              <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                <h3 className="font-semibold text-base mb-4 text-gray-300">HOW IT WORKS</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-300">Free demo</a></li>
                  <li><a href="#" className="hover:text-blue-300">Quick start</a></li>
                  <li><a href="#" className="hover:text-blue-300">Education</a></li>
                </ul>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                <h3 className="font-semibold text-base mb-4 text-gray-300">WHY POCKET OPTION</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-300">100+ instruments</a></li>
                  <li><a href="#" className="hover:text-blue-300">Instant Deposits</a></li>
                  <li><a href="#" className="hover:text-blue-300">Promo & Bonuses</a></li>
                  <li><a href="#" className="hover:text-blue-300">Social Trading</a></li>
                </ul>
              </div>
            </div>

            {/* About Us */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-5">
              <h3 className="font-semibold text-base mb-4 text-gray-300">ABOUT US</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">About the Company</a></li>
                <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-300">Contacts</a></li>
                <li><a href="#" className="hover:text-blue-300">Reviews</a></li>
                <li><a href="#" className="hover:text-blue-300">Support</a></li>
                <li><a href="#" className="hover:text-blue-300">Terms</a></li>
                <li><a href="#" className="hover:text-blue-300">Policies</a></li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex space-x-3">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm">
                  TRADE NOW
                </button>
                <button className="w-full bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-lg font-semibold text-sm">
                  DEPOSIT
                </button>
              </div>

              <div className="bg-white/90 text-blue-900 p-5 rounded-xl">
                <h3 className="font-semibold text-base mb-4">PLATFORMS</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Smartphone size={16} /><span>Android</span></li>
                  <li className="flex items-center gap-2"><Download size={16} /><span>Apk</span></li>
                  <li className="flex items-center gap-2"><Monitor size={16} /><span>Web App</span></li>
                  <li className="flex items-center gap-2"><Bot size={16} /><span>Telegram bot</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-10 text-left text-sm">
            <div className="flex items-center gap-2 font-semibold text-white/80">
              <span>4.5</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                    <path d="m12,2l3.09,6.26L22,9.27l-5,4.87 1.18,6.88L12,17.77l-6.18,3.25L7,14.14 2,9.27l6.91-1.01L12,2Z"/>
                  </svg>
                ))}
              </div>
              <span className="ml-1">on Traders Union</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
