import React, { useState } from "react";

const TradingSidebar = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    promoCode: "",
    agreeToTerms: false,
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", registerData);
  };

  // Floating input component
  const FloatingInput = ({
    label,
    type,
    name,
    value,
    onChange,
    required = false,
  }) => (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full border-b border-blue-300/50 bg-transparent text-white px-1 pt-5 pb-2 outline-none 
                   focus:border-white transition-all duration-300 placeholder-blue-100/50"
      />
      <label
        className="absolute left-1 top-2 text-blue-100 text-sm transition-all duration-300 
                   peer-placeholder-shown:top-5 peer-placeholder-shown:text-blue-200 peer-placeholder-shown:text-base
                   peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  );

  // Google Button
  const GoogleButton = () => (
    <button
      type="button"
      className="w-full py-3 rounded-lg border border-blue-300/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Official multicolor Google G */}
      <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
        <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.4H272v95.3h146.9c-6.3 34-25 62.9-53.3 82.2v68h85.9c50.3-46.4 81-114.9 81-195.1z"/>
        <path fill="#34A853" d="M272 544.3c72.6 0 133.4-24 177.9-65.4l-85.9-68c-23.9 16-54.6 25.5-92 25.5-70.7 0-130.6-47.7-152.1-111.8H28.2v70.3c44.9 88.4 137.5 149.4 243.8 149.4z"/>
        <path fill="#FBBC05" d="M119.9 324.6c-11-32.8-11-68.1 0-100.9V153.4H28.2c-37.8 75.6-37.8 161.9 0 237.5l91.7-66.3z"/>
        <path fill="#EA4335" d="M272 107.7c39.6 0 75.2 13.6 103.3 40.2l77.4-77.4C405.3 24 344.6 0 272 0 165.7 0 73.1 61 28.2 149.4l91.7 70.3C141.4 155.4 201.3 107.7 272 107.7z"/>
      </svg>
      <span>Continue with Google</span>
    </button>
  );

  return (
    <div 
      className="fixed hidden baseocean  lg:block h-screen top-0 right-0 bottom-0 w-80 z-50"
      
    >
      {/* Tabs */}
      <div className="flex">
        <button
          className={`flex-1 py-4 font-semibold text-lg transition-all duration-300 ${
            activeTab === "login"
              ? "text-white bg-[#2193b0] shadow-inner"
              : "text-blue-100 bg-[#6dd5ed]/30 hover:bg-[#6dd5ed]/50"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Log In
        </button>
        <button
          className={`flex-1 py-4 font-semibold text-lg transition-all duration-300 ${
            activeTab === "register"
              ? "text-white bg-[#2193b0] shadow-inner"
              : "text-blue-100 bg-[#6dd5ed]/30 hover:bg-[#6dd5ed]/50"
          }`}
          onClick={() => setActiveTab("register")}
        >
          Registration
        </button>
      </div>

      {/* Forms */}
      <div className="p-8 space-y-6">
        {activeTab === "login" && (
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <FloatingInput
              label="Email"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <FloatingInput
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />

            <div className="flex items-center justify-between text-sm text-blue-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                  className="w-4 h-4 bg-white/20 border-blue-300 text-[#2193b0] rounded focus:ring-2 focus:ring-white"
                />
                Remember me
              </label>
              <a href="#" className="text-white hover:text-blue-100 underline text-sm">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-[#2193b0] hover:bg-gray-100 hover:scale-[1.02] font-bold text-lg transition-all duration-300 shadow-lg border-2 border-white/30"
            >
              LOG IN
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-blue-300/50"></div>
              <span className="flex-shrink mx-4 text-blue-100 text-sm">
                Or login with
              </span>
              <div className="flex-grow border-t border-blue-300/50"></div>
            </div>

            <GoogleButton />
          </form>
        )}

        {activeTab === "register" && (
          <form className="space-y-6" onSubmit={handleRegisterSubmit}>
            <FloatingInput
              label="Email"
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <FloatingInput
              label="Password"
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <FloatingInput
              label="Promo Code"
              type="text"
              name="promoCode"
              value={registerData.promoCode}
              onChange={handleRegisterChange}
            />

            <label className="flex items-start gap-2 text-sm text-blue-100 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={registerData.agreeToTerms}
                onChange={handleRegisterChange}
                className="w-4 h-4 mt-0.5 bg-white/20 border-blue-300 text-[#2193b0] rounded focus:ring-2 focus:ring-white"
                required
              />
              I have read and accepted the following agreement: Public offer agreement
            </label>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-[#2193b0] hover:bg-gray-100 hover:scale-[1.02] font-bold text-lg transition-all duration-300 shadow-lg border-2 border-white/30"
            >
              SIGN UP
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-blue-300/50"></div>
              <span className="flex-shrink mx-4 text-blue-100 text-sm">
                Or sign up with
              </span>
              <div className="flex-grow border-t border-blue-300/50"></div>
            </div>

            <GoogleButton />
          </form>
        )}
      </div>
    </div>
  );
};

export default TradingSidebar;