import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, User, LogOut, Menu, X } from "lucide-react";

const StudentNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    // Redirect to Landing Page
    navigate("/");
  };

  return (
    <nav className="bg-[#f3e4c3] border-b-4 border-black px-6 py-4 sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-[#FF5F5F] p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
            <BookOpen className="text-white w-6 h-6" strokeWidth={3} />
          </div>
          <span className="text-3xl font-black tracking-tighter text-black font-sans uppercase transform group-hover:-rotate-2 transition-transform">
            SKWELASTIC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/student"
            className="font-black text-lg text-gray-900 hover:text-[#FF5F5F] transition-colors flex items-center gap-2 uppercase tracking-tight"
          >
            <User size={24} strokeWidth={3} />
            Dashboard
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-black px-6 py-2 bg-[#FFC94D] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
          >
            <LogOut size={20} strokeWidth={3} />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FFC94D] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            {isMenuOpen ? (
              <X size={28} strokeWidth={3} />
            ) : (
              <Menu size={28} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black p-6 flex flex-col gap-4 shadow-xl z-50">
          <Link
            to="/student"
            className="flex items-center gap-3 font-black text-xl p-4 bg-gray-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            <User size={24} />
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 font-black text-xl p-4 bg-[#FF5F5F] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all w-full justify-start uppercase"
          >
            <LogOut size={24} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default StudentNavbar;
