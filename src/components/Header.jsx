import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Smartphone, Download, Monitor, Bot } from "lucide-react";
import PocketoptionLogo from "../assets/imgs/image-removebg-preview.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // After 100ms, make content visible
      const timer = setTimeout(() => setContentVisible(true), 100);
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
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white text-gray-800 shadow-sm' 
        : 'bg-transparent text-white'
    }`}>
      {/* Top Header */}
      <div className="w-full max-w-6xl  flex justify-between items-center px-6 py-4 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={PocketoptionLogo} className="w-14 h-14" alt="PocketOption Logo" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-[#2193b0]' : 'text-white'}`}>
            <span className="text-[#6dd5ed]">Quick</span>Option
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-24 text-base font-medium">
          <a href="#" className={isScrolled ? 'hover:text-[#2193b0]' : 'hover:text-[#6dd5ed]'}>Quick start</a>
          <a href="#" className={isScrolled ? 'hover:text-[#2193b0]' : 'hover:text-[#6dd5ed]'}>Free demo</a>
          <a href="#" className={isScrolled ? 'hover:text-[#2193b0]' : 'hover:text-[#6dd5ed]'}>About us</a>
          <a href="#" className={isScrolled ? 'hover:text-[#2193b0]' : 'hover:text-[#6dd5ed]'}>Pocket Option Blog</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <button className={`hidden sm:flex items-center gap-2 text-base ${isScrolled ? 'hover:text-[#2193b0]' : 'hover:text-[#6dd5ed]'}`}>
            <Globe size={20} />
            <span>English</span>
          </button>

          {/* Toggle Menu / Close */}
          <button
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-[#2193b0]/30'}`}
          >
            {menuOpen ? <X size={32} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (below header) */}
      {menuOpen && (
        <div
          className="absolute left-0 w-full h-screen bg-gradient-to-b from-[#2193b0] via-[#6dd5ed] to-[#2193b0] text-white shadow-lg px-8 py-8 transition-all duration-300 ease-in-out"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(-5px)"
          }}
        >
          {/* Menu Title */}
          <h1
            className="text-5xl font-black mb-10 tracking-wide text-white"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateX(0)" : "translateX(100px)",
              transition: "all 0.5s ease-in-out 0.1s",
            }}
          >
            MENU
          </h1>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto text-base">
            {/* How it works + Why Pocket Option */}
            <div className="flex flex-col space-y-8">
              <div 
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateX(0)" : "translateX(100px)",
                  transition: "all 0.5s ease-in-out 0.2s",
                }}
              >
                <h3 className="font-semibold text-lg mb-5 text-white">HOW IT WORKS</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Free demo</a></li>
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Quick start</a></li>
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Education</a></li>
                </ul>
              </div>

              <div 
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateX(0)" : "translateX(100px)",
                  transition: "all 0.5s ease-in-out 0.3s",
                }}
              >
                <h3 className="font-semibold text-lg mb-5 text-white">WHY POCKET OPTION</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">100+ instruments</a></li>
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Instant Deposits</a></li>
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Promo & Bonuses</a></li>
                  <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Social Trading</a></li>
                </ul>
              </div>
            </div>

            {/* About Us */}
            <div 
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateX(0)" : "translateX(100px)",
                transition: "all 0.5s ease-in-out 0.4s",
              }}
            >
              <h3 className="font-semibold text-lg mb-5 text-white">ABOUT US</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">About the Company</a></li>
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Contacts</a></li>
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-blue-100 text-lg transition-colors">Policies</a></li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div 
                className="flex space-x-4"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateX(0)" : "translateX(100px)",
                  transition: "all 0.5s ease-in-out 0.5s",
                }}
              >
                <button className="w-full bg-[#2193b0] hover:bg-[#1a7a95] text-white px-6 py-4 rounded-xl font-semibold text-base transition-colors">
                  REGISTRATION
                </button>
                <button className="w-full bg-white hover:bg-gray-100 text-[#2193b0] px-6 py-4 rounded-xl font-semibold text-base transition-colors">
                  LOGIN
                </button>
              </div>

              <div 
                className="bg-white/95 text-[#2193b0] p-6 rounded-xl border border-white/30"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateX(0)" : "translateX(100px)",
                  transition: "all 0.5s ease-in-out 0.6s",
                }}
              >
                <h3 className="font-semibold text-lg mb-5">PLATFORMS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-lg hover:text-[#1a7a95] transition-colors">
                    <Smartphone size={20} className="text-[#6dd5ed]" />
                    <span>Android</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-[#1a7a95] transition-colors">
                    <Download size={20} className="text-[#6dd5ed]" />
                    <span>Apk</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-[#1a7a95] transition-colors">
                    <Monitor size={20} className="text-[#6dd5ed]" />
                    <span>Web App</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-[#1a7a95] transition-colors">
                    <Bot size={20} className="text-[#6dd5ed]" />
                    <span>Telegram bot</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;