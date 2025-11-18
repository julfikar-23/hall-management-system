import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const user = isAuthenticated ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const closeAllMenus = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    closeAllMenus();
    navigate('/');
    window.location.reload();
  };

  // Check if current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-bold text-[#00df9a] whitespace-nowrap"
          onClick={closeAllMenus}
        >
          SUST Hall Management
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {isAuthenticated && user ? (
            <>
              {/* Dashboard Link */}
              <Link 
                to="/dashboard" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/dashboard') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                Dashboard
              </Link>

              {/* Meal Link */}
              <Link 
                to="/meal" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/meal') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                Meal
              </Link>

              {/* Complaint Link */}
              <Link 
                to="/complaint" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/complaint') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                Complaint
              </Link>

              {/* Notification Link */}
              <Link 
                to="/notification" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/notification') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                Notification
              </Link>

              {/* User Info & Logout */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 text-sm">Welcome, {user.name}</span>
                  <span className="bg-[#00df9a] text-black px-2 py-1 rounded text-xs font-semibold">
                    {user.role}
                  </span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="border border-red-500 text-red-500 px-3 py-1 rounded-md font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Public Navigation */}
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/about') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActiveRoute('/contact') 
                    ? 'bg-[#00df9a] text-black' 
                    : 'hover:text-[#00df9a]'
                }`}
              >
                Hall Administration
              </Link>

              {/* Auth Buttons */}
              <div className="flex items-center gap-3 ml-4">
                <Link 
                  to="/login" 
                  className="bg-[#00df9a] text-black px-4 py-2 rounded-md font-semibold hover:bg-white transition-colors duration-200 text-sm"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="border border-[#00df9a] px-4 py-2 rounded-md font-semibold hover:bg-[#00df9a] hover:text-black transition-colors duration-200 text-sm"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </nav>

        {/* Mobile toggle button */}
        <button 
          className="lg:hidden text-2xl p-2 hover:bg-gray-800 rounded-md transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {isAuthenticated && user ? (
              <>
                {/* Authenticated Mobile Menu */}
                <div className="text-center text-gray-300 py-2 border-b border-gray-800">
                  Welcome, {user.name}
                  <span className="bg-[#00df9a] text-black px-2 py-1 rounded text-xs font-semibold ml-2">
                    {user.role}
                  </span>
                </div>

                <Link 
                  to="/dashboard" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/dashboard') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  Dashboard
                </Link>

                <Link 
                  to="/meal" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/meal') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  Meal
                </Link>

                <Link 
                  to="/complaint" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/complaint') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  Complaint
                </Link>

                <Link 
                  to="/notification" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/notification') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  Notification
                </Link>

                <button 
                  onClick={handleLogout}
                  className="border border-red-500 text-red-500 px-4 py-3 rounded-md font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200 text-center mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Public Mobile Menu */}
                <Link 
                  to="/" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  Home
                </Link>
                
                <Link 
                  to="/about" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/about') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  About
                </Link>

                <Link 
                  to="/contact" 
                  className={`py-3 px-2 rounded-md transition-colors duration-200 border-b border-gray-800 ${
                    isActiveRoute('/contact') 
                      ? 'bg-[#00df9a] text-black font-semibold' 
                      : 'hover:text-[#00df9a]'
                  }`}
                  onClick={closeAllMenus}
                >
                  Hall Administration
                </Link>

                <div className="flex flex-col gap-3 pt-2">
                  <Link 
                    to="/login" 
                    className="bg-[#00df9a] text-black px-4 py-3 rounded-md font-semibold hover:bg-white transition-colors duration-200 text-center"
                    onClick={closeAllMenus}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="border border-[#00df9a] px-4 py-3 rounded-md font-semibold hover:bg-[#00df9a] hover:text-black transition-colors duration-200 text-center"
                    onClick={closeAllMenus}
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;