// HeroSection.jsx
import React from "react";
import { Globe, Menu } from "lucide-react";
// Import images
import LaptopImage from "../assets/imgs/header-bg-3_2.avif";
import MobileImage from "../assets/imgs/header-bg-2.avif";
import CenterImage from "../assets/imgs/header-bg-1.avif";

const HeroSection = () => {
  return (
    <section
      className="relative top-0 left-0 right-0 text-white min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#003b72,#00264a 50%,#00264a)",
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
        className="w-40 md:w-56 lg:w-[100%] absolute top-10 left-0 z-20 drop-shadow-2xl"
      />
      
      {/* Right Laptop Image - Positioned absolutely for better control */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-3/5 overflow-hidden ">
        <img
          src={LaptopImage}
          alt="Laptop trading"
          className="h-full w-auto object-cover absolute -right-52 top-0 drop-shadow-2xl transform rotate-6 scale-125  "
          style={{ 
            minWidth: "120%",
            transformOrigin: "center center"
          }}
        />
      </div>

      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-12 mt-20 relative z-30 bg-transparent">
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            THE RIGHT PLACE <br /> FOR ONLINE TRADING ON <br /> FINANCIAL MARKETS
          </h1>
          <p className="mt-6 text-gray-300 font-medium">
            <span className="font-bold">The most user-friendly interface</span>{" "}
            <br />
            Get access to trade over 100 global trading assets
          </p>
          
          {/* Buttons */}
          <div className="mt-8 flex items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              REGISTRATION
            </button>
            <div className="flex flex-col text-sm">
              <a href="#" className="hover:underline">
                Log In
              </a>
              <span className="text-gray-400 mx-2">or</span>
              <a href="#" className="hover:underline">
                Start in one click
              </a>
            </div>
          </div>
          
          {/* Rating */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-300">
            <span className="bg-blue-600 px-2 py-1 rounded-md text-white font-semibold">
              TU
            </span>
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