const EmailSection = () => (
  <section className="bg-[#eef2f9] py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-[#1e385b]">Test Your Luck!</h2>
          <p className="text-[#515151]">Enter your email address and get a special offer from Pocket Option. If luck is on your side, you will receive a free gift!</p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Check it now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EmailSection;