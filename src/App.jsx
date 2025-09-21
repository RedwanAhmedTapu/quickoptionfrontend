import React, { useState, useEffect } from "react";
import {
  ChevronDown, Menu, X, Star, Play, Shield,
  TrendingUp, Users, Award, Smartphone, Globe,
  ChevronRight, ChevronLeft
} from "lucide-react";

import "./index.css";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChoosenSection";
import OffersSlider from "./components/OffersSlider";
import EmailSection from "./components/EmailSection";
import PlatformsSection from "./components/PlatformSection";
import ReviewsSection from "./components/ReviewsSection";
import PaymentMethods from "./components/PaymentMethods";
import RiskDisclosure from "./components/RiskDisclosure";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TradingStats from "./components/TradingStats";
import TradingSidebar from "./components/TradingSidebar";
import IMFS from "./components/IMFS";
import TopSection from "./components/about us/TopSection";
import AboutUs from "./pages/AboutUs";
import WebApps from "./components/WebApps";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    { title: "Payment methods", icon: "💳", link: "#" },
    { title: "Trading assets", icon: "📈", link: "#" },
    { title: "Achievements", icon: "🏆", link: "#" },
    { title: "Apps for any device", icon: "📱", link: "#" },
    { title: "Why people choose us", icon: "👥", link: "#" },
    { title: "Technical Analysis Tools", icon: "📊", link: "#" },
    { title: "Signals", icon: "📡", link: "#" },
    { title: "Great community", icon: "🤝", link: "#" },
    { title: "Social Trading", icon: "👨‍👩‍👧‍👦", link: "#" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [offers.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Passing props */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <HeroSection />
        <TradingStats />
        <WhyChooseSection />
        <OffersSlider />
        <EmailSection />
        <PlatformsSection />
        <ReviewsSection />
        <PaymentMethods />
        <TradingSidebar />
        <WebApps />
        <IMFS />
        <RiskDisclosure />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default App;
