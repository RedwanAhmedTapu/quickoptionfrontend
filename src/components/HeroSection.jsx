// HeroSection.jsx
import React from "react";
import { Globe, Menu } from "lucide-react";
// Import images
import LaptopImage from "../assets/imgs/header-bg-3_2.avif";
import MobileImage from "../assets/imgs/header-bg-2.avif";
import CenterImage from "../assets/imgs/header-bg-1.avif";
import Star from "../assets/imgs/Star x2.svg";

const HeroSection = () => {
  return (
    <section
      className="relative top-0 left-0 right-0 text-white min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #003b72, #00264a 50%, #00264a)",
      }}
    >
      {/* Mobile Image */}
      <img
        src={MobileImage}
        alt="Mobile trading"
        className="w-36 md:w-44 lg:w-96 absolute left-0 top-20 transform translate-x-[-40%] translate-y-[10%] drop-shadow-2xl z-10"
      />

      {/* Center Image */}
      <img
        src={CenterImage}
        alt="Trading graph"
        className="w-40 md:w-96 scale-150 lg:w-[100%] absolute -top-20 left-0 z-20 drop-shadow-2xl"
      />

      {/* Right Laptop Image - Positioned absolutely for better control */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-3/5 overflow-hidden ">
        <img
          src={LaptopImage}
          alt="Laptop trading"
          className="h-full w-auto object-cover absolute -right-52 top-0 drop-shadow-2xl transform  scale-125  "
          style={{
            minWidth: "120%",
            transformOrigin: "center center",
          }}
        />
      </div>

      <div className="container ml-2 px-8 flex flex-col md:flex-row items-center gap-12  mt-20 relative z-30">
        {/* Left Text Section - Enhanced */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.125rem] leading-[3.2rem] md:leading-[3.85rem] font-semibold tracking-[0.25rem] uppercase mb-6 text-white">
            THE RIGHT PLACE
            <br className="hidden md:block" />
            FOR ONLINE TRADING
            <br className="hidden md:block" />
            <span className="whitespace-nowrap">ON FINANCIAL MARKETS</span>
          </h1>

          <p className="mt-6 text-gray-100 font-medium text-lg">
            <span className="font-bold text-white">
              The most user-friendly interface
            </span>{" "}
            <br className="hidden sm:block" />
            Get access to trade over 100 global trading assets
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-6">
            <button className="bg-blue-600 w-full sm:w-80 h-12 hover:bg-blue-700 flex justify-center items-center text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200">
              REGISTRATION
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center text-xl gap-2">
              <a href="#" className="text-white underline transition-colors">
                Log In
              </a>
              <span className="text-gray-400 hidden sm:inline mx-2">or</span>
              <a href="#" className="text-white underline transition-colors">
                Start in one click
              </a>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-3 text-xl font-bold text-white">
            <img src={Star} className="w-8 h-8" alt="Star rating" />
            <span className="text-white font-semibold">4.5 ★</span>
            <span>on Traders Union</span>
          </div>
        </div>

        {/* Spacer for right side to maintain layout */}
        <div className="flex-1 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;
