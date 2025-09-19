import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OffersSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slides with real image links from your <picture> tags
  const slides = [
    {
      id: 1,
      title: "APPS FOR ANY DEVICE",
      image:
        "https://m.pocketoption.com/themes/2017-09/img/offers-slider/app_s@2x.png",
    },
    {
      id: 2,
      title: "WHY PEOPLE CHOOSE US",
      image:
        "https://m.pocketoption.com/themes/2017-09/img/offers-slider/why_s@2x.png",
    },
    {
      id: 3,
      title: "TECHNICAL ANALYSIS TOOLS",
      image:
        "https://m.pocketoption.com/themes/2017-09/img/offers-slider/analytics_s@2x.png",
    },
    {
      id: 4,
      title: "SIGNALS",
      image:
        "https://m.pocketoption.com/themes/2017-09/img/offers-slider/signals_s@2x.png",
    },
    {
      id: 5,
      title: "SOCIAL TRADING",
      image:
        "https://m.pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.png",
    },
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
    <div className="bg-gradient-to-br from-[#0B2E63] via-[#0A2A58] to-[#0B2E63] py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-blue-800/70 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-blue-200" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-blue-800/70 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-blue-200" />
          </button>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-none w-1/4 px-4">
                <div className="bg-[#0E3A77] rounded-xl p-6 h-96 flex flex-col items-center justify-between text-center border border-blue-700/40 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden">
                  {/* Glow Behind Icon */}
                  <div className="absolute top-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

                  {/* Top Icon */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-28 h-28 object-contain mb-6 relative z-10"
                  />

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight relative z-10">
                    {slide.title}
                  </h3>

                  {/* More Button */}
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-md relative z-10">
                    MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
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
        </div>
      </div>
    </div>
  );
};

export default OffersSlider;
