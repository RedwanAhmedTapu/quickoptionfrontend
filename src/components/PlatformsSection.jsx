 const PlatformsSection = () => (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Web application for any device</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-lg font-semibold mb-4">{platform.name}</h3>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                {platform.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    export default PlatformsSection;