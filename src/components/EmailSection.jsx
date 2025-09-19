import Gift from "../assets/imgs/gift.png";

const EmailSection = () => (
  <section className="bg-transparent h-72 -mt-16 relative z-10">
    <div className="container px-6 h-full">
      <div className="max-w-7xl h-full flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-8 border border-gray-200 bg-left bg-no-repeat bg-contain"
           style={{backgroundImage: `url(${Gift})`}}>
        
        {/* Left side - Text content */}
        <div className="md:w-1/2 mb-8 md:mb-0 pl-40">
          <div>
            <h2 className="text-5xl font-bold mb-4 text-[#1e385b]">
              Test Your <br/>Luck!
            </h2>
            <p className="text-[#515151] text-base leading-relaxed">
              Enter your email address and get a special offer from Pocket Option. 
              If luck is on your side, you will receive a free gift!
            </p>
          </div>
        </div>

        {/* Right side - Email Form */}
        <div className="md:w-1/2 md:pl-12 flex justify-center">
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-100 rounded-l-lg text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white px-6 py-3 rounded-r-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              CHECK IT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EmailSection;