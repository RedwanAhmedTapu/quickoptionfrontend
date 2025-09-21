import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, Play, Shield, TrendingUp, Users, Award, Smartphone, Globe, ChevronRight, ChevronLeft } from 'lucide-react';

const PocketOptionLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Ahmad Abu. B.",
      uid: "72918831",
      country: "Nigeria",
      rating: 5,
      date: "2025-09-13",
      text: "this is the best binary platform, at first i had my doubts, but after spending time to navigate through its features, i fell in love with the platform. Take daily free tournament for example, which platform does that?. I strongly recommend this platform"
    },
    {
      id: 2,
      name: "Noorshiba. O.",
      uid: "79430609",
      country: "Philippines",
      rating: 5,
      date: "2025-09-12",
      text: "Great and one of the best trading platform in my own opinion, very user friendly even though your just a newbie incase. This is a highly recommended platform if someone wants to learn and trade."
    },
    {
      id: 3,
      name: "Mohammed H.",
      uid: "102584599",
      country: "Iraq",
      rating: 5,
      date: "2025-09-12",
      text: "I like spending time on this platform because it's easy to understand and works without problems. The achievements give me motivation to keep using it, which makes it more enjoyable"
    }
  ];

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

  const platforms = [
    { name: "Android", icon: "📱", link: "#", action: "Download" },
    { name: "Apk Download", icon: "📦", link: "#", action: "Download" },
    { name: "Web App", icon: "🌐", link: "#", action: "Open" },
    { name: "Telegram bot", icon: "💬", link: "#", action: "Subscribe" }
  ];

  const whyChooseUs = [
    {
      title: "Flexible Trading",
      subtitle: "Latest trends: quick and digital trading, express trades, pending trades, copy trading. Payouts of up to 218%.",
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Comprehensive Education",
      subtitle: "Our help section contains tutorials, guides and various trading strategies.",
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Diverse Trading Instruments",
      subtitle: "Assets suitable for any trader: currency, commodities, stocks",
      icon: <Globe className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Demo Account",
      subtitle: "Try all platform benefits on the Demo account using virtual money. No investment needed, no risks involved.",
      icon: <Play className="w-12 h-12 text-blue-500" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const Header = () => (
    <header className="bg-gray-900 text-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-400">PocketOption</div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Optimized charts rendering engine reduces loading time and increases battery life up to 25%.</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Quick start</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Free demo</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About us</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Blog</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block hover:text-blue-400">Quick start</a>
            <a href="#" className="block hover:text-blue-400">Free demo</a>
            <a href="#" className="block hover:text-blue-400">About us</a>
            <a href="#" className="block hover:text-blue-400">Blog</a>
            <div className="pt-4 border-t border-gray-700">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full mb-2">Registration</button>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-lg w-full">Log In</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );

  
 
 

 

 

  

 

 

 

  

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ConditionsSection />
        <WhyChooseSection />
        <OffersSlider />
        <EmailSection />
        <PlatformsSection />
        <ReviewsSection />
        <PaymentMethods />
        <RiskDisclosure />
      </main>
      <Footer />
    </div>
  );
};

export default PocketOptionLanding;