import { 
  User, 
  CreditCard, 
  ArrowUpDown, 
  Bell, 
  MessageCircle, 
  Newspaper, 
  Settings, 
  LogOut,
  Wallet
} from "lucide-react";

export default function TradingSidebar() {
  return (
    <div className="fixed right-0 top-0 z-50 h-screen w-72  bg-[#001e3c] text-white shadow-2xl">
      {/* Header Section */}
      <div className="p-6 border-b border-blue-700/50">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 relative">
              {/* SVG Border */}
              <svg className="absolute inset-0 w-full h-full text-green-500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="profile-level__icon-group profile-level__icon-group--notify">
                  <path fillRule="evenodd" clipRule="evenodd" d="M183.004 139.728C188.77 127.702 192 114.228 192 100C192 85.7719 188.77 72.2981 183.004 60.2719C185.409 58.9928 187.632 57.4157 189.622 55.5899C196.265 68.9698 200 84.0488 200 100C200 115.951 196.265 131.03 189.622 144.41C187.632 142.584 185.409 141.007 183.004 139.728ZM139.728 183.004C127.702 188.77 114.228 192 100 192C49.1898 192 8 150.81 8 100C8 49.1898 49.1898 8 100 8C114.228 8 127.702 11.2299 139.728 16.9964C141.007 14.5911 142.584 12.3685 144.41 10.3776C131.03 3.73478 115.951 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C115.951 200 131.03 196.265 144.41 189.622C142.584 187.632 141.007 185.409 139.728 183.004Z" fill="currentColor" />
                </g>
                <g className="profile-level__icon-group profile-level__icon-group--status">
                  <path d="M192 100C192 150.81 150.81 192 100 192C49.1898 192 8 150.81 8 100C8 49.1898 49.1898 8 100 8C114.228 8 127.702 11.2299 139.728 16.9964C141.007 14.5911 142.584 12.3685 144.41 10.3776C131.03 3.73478 115.951 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100C200 84.0488 196.265 68.9698 189.622 55.5899C187.632 57.4157 185.409 58.9928 183.004 60.2719C188.77 72.2981 192 85.7719 192 100Z" fill="currentColor" />
                </g>
              </svg>
              
              {/* Avatar */}
              <div className="absolute inset-2 bg-gray-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-300" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <ArrowUpDown className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Unknown client</h2>
            <p className="text-sm text-blue-200">id 111604275</p>
            <p className="text-sm text-blue-200">redwa_@gmail.com</p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-blue-800/50 rounded-lg p-4 mb-4 border border-blue-600/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold text-white">0₸</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-white text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
            DEPOSIT
          </button>
          <button className="flex-1 bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-500 transition-colors">
            TRADE NOW
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        <div className="space-y-1">
          <NavItem icon={<User className="w-5 h-5" />} text="Profile" />
          <NavItem icon={<CreditCard className="w-5 h-5" />} text="Deposit" />
          <NavItem icon={<CreditCard className="w-5 h-5" />} text="Withdrawal" />
          <NavItem icon={<Bell className="w-5 h-5" />} text="Notifications" />
          <NavItem icon={<MessageCircle className="w-5 h-5" />} text="Support" />
          <NavItem icon={<Newspaper className="w-5 h-5" />} text="News" />
          <NavItem icon={<Settings className="w-5 h-5" />} text="Settings" />
        </div>
        
        {/* Logout at bottom */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <NavItem icon={<LogOut className="w-5 h-5" />} text="Logout" />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, text }) {
  return (
    <button className="w-full flex items-center space-x-4 px-6 py-3 text-blue-100 hover:bg-blue-700/30 hover:text-white transition-all duration-200">
      <span className="text-blue-200">{icon}</span>
      <span className="font-medium">{text}</span>
    </button>
  );
}