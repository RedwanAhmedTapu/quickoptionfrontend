const Footer = () => (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-4">
            All materials and services provided on this site are subject to copyright and belong to "Infinite Trade LLC". Any use of materials of this website must be approved by an official representative of "Infinite Trade LLC", and contain a link to the original resource.
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Infinite Trade LLC does not provide service to residents of the EEA countries, USA, Israel, UK, Philippines, Japan and Brazil.
          </p>
          <p className="text-sm text-gray-400">
            Infinite Trade LLC is registered at Republic Of Costa Rica, San Jose- San Jose Mata Redonda, Neighborhood Las Vegas, Blue Building Diagonal To La Salle High School with the registration number 4062001303240.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
          <a href="#" className="text-gray-400 hover:text-white">Contacts</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms and Conditions</a>
          <a href="#" className="text-gray-400 hover:text-white">AML and KYC policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Payment policy</a>
          <a href="#" className="text-gray-400 hover:text-white">One-Click Payment Policy</a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-2xl font-bold text-blue-400 mb-4 md:mb-0">PocketOption</div>
          <p className="text-sm text-gray-400">Copyright ©2025 Pocket Option</p>
        </div>
      </div>
    </footer>
  );
  export default Footer;