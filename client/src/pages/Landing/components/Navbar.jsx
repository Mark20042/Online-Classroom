import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, User, UserPlus, Menu } from "lucide-react";
import { NAV_LINKS, MOBILE_LINKS } from "../../../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f3e4c3] px-6 md:px-12 py-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-[#FF5F5F] p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
            <BookOpen className="text-white w-6 h-6" strokeWidth={3} />
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#3A5A40] font-sans">
            SKWELASTIC
          </span>
        </div>

        {/* 2. Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9 font-bold text-sm tracking-wide text-gray-900 font-sans">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={index}
              icon={link.icon}
              text={link.text}
              href={link.href}
            />
          ))}
        </div>

        {/* 3. Action Buttons - PRIORITY SWAPPED */}
        <div className="hidden md:flex items-center gap-4">
          {/* LOG IN (Now Primary/Highlighted) */}
          <Link
            to="/login"
            className="
            flex items-center gap-2 
            font-bold text-sm font-mono tracking-wider
            px-6 py-2.5 
            bg-[#FF5F5F] text-white 
            border-2 border-black 
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] /* Heavy Shadow = Catchy */
            hover:bg-[#ff4040]
            active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
            transition-all duration-100
            cursor-pointer
          "
          >
            {/* New Catchy User Icon */}
            <User size={18} strokeWidth={2.5} />
            LOG IN
          </Link>
          <Link
            to="/register"
            className="
            font-black text-sm font-mono gap-3 tracking-widest whitespace-nowrap text-black  flex
            bg-transparent border-0 shadow-none
            hover:text-[#FF5F5F] hover:underline decoration-2 underline-offset-4 
            transition-all cursor-pointer
            px-4 py-2.0
          "
          >
            <UserPlus size={18} strokeWidth={2.5} />
            SIGN UP
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-black"
        >
          <Menu strokeWidth={3} />
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F3E8C9] border-b-2 border-black p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {MOBILE_LINKS.map((link, index) => (
            <MobileLink key={index} icon={link.icon} text={link.text} />
          ))}
          <hr className="border-black opacity-20 my-2" />

          {/* Mobile Buttons */}
          <Link
            to="/login"
            className="w-full text-center py-3 bg-white border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            LOG IN
          </Link>
          <Link
            to="/register"
            className="w-full text-center py-3 bg-[#FF5F5F] text-white border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      )}
    </nav>
  );
};

// Helper Component for Desktop Links
const NavLink = ({ icon, text, href }) => (
  <a
    href={href}
    className="flex items-center gap-2 hover:text-[#FF5F5F] transition-colors group"
  >
    <span className="text-gray-600 group-hover:text-[#FF5F5F] transition-colors">
      {icon}
    </span>
    <span className="hover:underline decoration-2 underline-offset-4 decoration-[#FF5F5F]">
      {text}
    </span>
  </a>
);

// Helper Component for Mobile Links
const MobileLink = ({ icon, text }) => (
  <a
    href="#"
    className="flex items-center gap-3 font-bold text-lg p-2 hover:bg-white border-2 border-transparent hover:border-black transition-all"
  >
    <span className="text-[#FF5F5F]">{icon}</span>
    {text}
  </a>
);

export default Navbar;
