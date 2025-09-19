import { useState, useEffect } from "react";
import Monitor from "../assets/imgs/monitor@2x.webp";

const TradingStats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    minInvestment: 0,
    minTrade: 0,
    demoMoney: 0,
    paymentMethods: 0,
    commission: 0,
    assets: 0,
  });

  const targetValues = {
    minInvestment: 5,
    minTrade: 1,
    demoMoney: 50000,
    paymentMethods: 50,
    commission: 0,
    assets: 100,
  };

  useEffect(() => {
    const animateValue = (key, target, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, 16);

      return timer;
    };

    const timers = [
      setTimeout(
        () => animateValue("minInvestment", targetValues.minInvestment, 1500),
        100
      ),
      setTimeout(
        () => animateValue("minTrade", targetValues.minTrade, 1500),
        200
      ),
      setTimeout(
        () => animateValue("demoMoney", targetValues.demoMoney, 2500),
        300
      ),
      setTimeout(
        () => animateValue("paymentMethods", targetValues.paymentMethods, 2000),
        400
      ),
      setTimeout(
        () => animateValue("commission", targetValues.commission, 1000),
        500
      ),
      setTimeout(
        () => animateValue("assets", targetValues.assets, 2200),
        600
      ),
    ];

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const formatNumber = (num, prefix = "", suffix = "") => {
    if (num === 50000) {
      return `${prefix}${num.toLocaleString()}${suffix}`;
    }
    return `${prefix}${num}${suffix}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center py-8">
      <div className="max-w-7xl ml-10 flex flex-col md:flex-row items-center w-full">
        {/* Left Content - 40% */}
        <div className="w-full md:w-2/5 space-y-12">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug tracking-tight">
            Place your trades on best conditions
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
            {/* Row 1 */}
            <div>
              <div className="text-5xl font-bold text-blue-500">
                {formatNumber(animatedValues.minInvestment, "$")}
                <span className="text-blue-500">*</span>
              </div>
              <div className="text-lg text-gray-600 font-medium">
                Minimum investment amount
              </div>
            </div>

            <div>
              <div className="text-5xl font-bold text-blue-500">
                {formatNumber(animatedValues.minTrade, "$")}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                Minimum trade amount
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <div className="text-5xl font-bold text-blue-500">
                {formatNumber(animatedValues.demoMoney, "$")}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                Virtual money on your Demo account
              </div>
            </div>

            <div>
              <div className="text-5xl font-bold text-blue-500">
                {formatNumber(animatedValues.paymentMethods, "", "+")}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                Payment methods
              </div>
            </div>

            {/* Row 3 */}
            <div>
              <div className="text-5xl font-bold text-blue-500">
                {formatNumber(animatedValues.commission, "$")}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                No commission on deposit and withdrawal
              </div>
            </div>

            <div>
              <div className="text-5xl font-bold text-blue-500">
                {formatNumber(animatedValues.assets, "", "+")}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                Assets for trading
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - 60% */}
        <div className="w-full md:w-3/5 flex justify-center mt-10 md:mt-0">
          <img
            src={Monitor}
            alt="Trading Monitor"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TradingStats;
