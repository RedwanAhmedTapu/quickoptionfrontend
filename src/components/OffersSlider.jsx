import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../assets/imgs/card.avif";
import Copy from "../assets/imgs/copy.avif";
import Analytics from "../assets/imgs/analytic.avif";
import Feedback from "../assets/imgs/feedback.avif";
import Cup from "../assets/imgs/archi.avif";
import Signal from "../assets/imgs/signal.avif";
import Trade from "../assets/imgs/trade.avif";
import App from "../assets/imgs/app.avif";

const OffersSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 1, title: "APPS FOR ANY DEVICE", image: App },
    { id: 2, title: "WHY PEOPLE CHOOSE US", image: Cup },
    { id: 3, title: "TECHNICAL ANALYSIS TOOLS", image: Analytics },
    { id: 4, title: "SIGNALS", image: Signal },
    { id: 5, title: "SOCIAL TRADING", image: Copy },
    { id: 6, title: "TRADING OPTIONS", image: Trade },
    { id: 7, title: "PAYMENT METHODS", image: Card },
    { id: 8, title: "USER FEEDBACK", image: Feedback },
  ];

  const itemsPerView = 4;
  const maxSlide = Math.max(0, slides.length - itemsPerView);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <div className="bg-[#0f487c] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl  relative">
        {/* Navigation Arrows */}
        <div className="absolute -top-20 right-0 z-10 flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-8 h-8 text-blue-500" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-8 h-8 text-blue-500" />
          </button>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden mt-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-none w-80 h-auto px-4">
                <div className="bg-[#04294C] rounded-xl p-6 h-96 flex flex-col items-center justify-between text-center border border-blue-700/40 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden group">
                  {/* Radial Glow */}
                  <div
                    className="absolute top-10 w-48 h-48 bg-blue-400/50 rounded-full blur-2xl animate-pulse 
                                  group-hover:bg-blue-400/80 group-hover:scale-125 group-hover:blur-3xl transition-all duration-500"
                  ></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 transform translate-y-2 group-hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-28 h-28 scale-125 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight relative z-10">
                    {slide.title}
                  </h3>

                  {/* More Button */}
                  <button className="px-6 py-2 bg-[#0f487c] text-white font-semibold rounded-lg transition-all duration-300 shadow-md relative z-10 group-hover:bg-[#1a6cb5] group-hover:shadow-lg">
                    MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-400 scale-125"
                  : "bg-blue-600/50 hover:bg-blue-500/70"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default OffersSlider;
