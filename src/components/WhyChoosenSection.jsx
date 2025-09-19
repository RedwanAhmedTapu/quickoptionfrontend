import { 
  TrendingUp, 
  GraduationCap, 
  DollarSign, 
  Monitor, 
  CreditCard, 
  Star, 
  Shield, 
  BarChart3 
} from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "FLEXIBLE TRADING",
      description: "Latest trends: quick and digital trading, express trades, pending trades, copy trading. Payouts of up to 218%."
    },
    {
      id: 2,
      icon: <GraduationCap className="w-12 h-12 text-blue-400" />,
      title: "COMPREHENSIVE EDUCATION",
      description: "Our help section contains tutorials, guides and various trading strategies."
    },
    {
      id: 3,
      icon: <DollarSign className="w-12 h-12 text-blue-400" />,
      title: "DIVERSE TRADING INSTRUMENTS",
      description: "Assets suitable for any trader: currency, commodities, stocks"
    },
    {
      id: 4,
      icon: <Monitor className="w-12 h-12 text-blue-400" />,
      title: "DEMO ACCOUNT",
      description: "Try all platform benefits on the Demo account using virtual money. No investment needed, no risks involved."
    },
    {
      id: 5,
      icon: <CreditCard className="w-12 h-12 text-blue-400" />,
      title: "EASY DEPOSITS AND WITHDRAWALS",
      description: "Use the most convenient payment method for hassle-free deposits and withdrawals."
    },
    {
      id: 6,
      icon: <Star className="w-12 h-12 text-blue-400" />,
      title: "HIGH CUSTOMER LOYALTY",
      description: "Trading tournaments, regular bonuses, gifts, promo codes and contests are available to any trader."
    },
    {
      id: 7,
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "TRADING ADVANTAGES",
      description: "Use cashback and other advantages for a more comfortable trading experience with minimal risks."
    },
    {
      id: 8,
      icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
      title: "INDICATORS AND SIGNALS",
      description: "Everything you need for a top-tier trading experience including popular indicators and signals."
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl ml-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-700 mb-4">
            Why choose us?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-6">
              {/* Icon */}
              <div className="flex justify-start">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 leading-tight">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
          {/* Trade in one click text */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-700">
              Trade in one click
            </h3>
          </div>

          {/* Start Trading Button */}
          <button 
            className="px-8 py-4 text-white font-bold text-lg rounded-lg hover:opacity-90 transition-opacity duration-300"
            style={{
              background: "linear-gradient(79deg,#0099fa,#002ed9 )",
            }}
          >
            START TRADING
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;