import React from "react";
import HeroSection from "../components/HeroSection";
import TradingStats from "../components/TradingStats";
import WhyChooseSection from "../components/WhyChoosenSection";
import OffersSlider from "../components/OffersSlider";
import EmailSection from "../components/EmailSection";
import PlatformsSection from "../components/PlatformSection";
import ReviewsSection from "../components/ReviewsSection";
import PaymentMethods from "../components/PaymentMethods";
import WebApps from "../components/WebApps";
import IMFS from "../components/IMFS";
import RiskDisclosure from "../components/RiskDisclosure";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TradingStats />
      <WhyChooseSection />
      <OffersSlider />
      <EmailSection />
      <PlatformsSection />
      <ReviewsSection />
      <PaymentMethods />
     
      <WebApps />
      <IMFS />
      <RiskDisclosure />
    </>
  );
};

export default HomePage;
