import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BookOpen, User, LogOut, Menu, X, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check auth state on mount and location change
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("authToken");
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const getDashboardRoute = () => {
    if (!user) return "/";
    switch (user.role) {
      case "ADMIN":
        return "/admin";
      case "TEACHER":
        return "/teacher";
      case "STUDENT":
        return "/student";
      default:
        return "/";
    }
  };

  const getDashboardLabel = () => {
    if (!user) return "Dashboard";
    switch (user.role) {
      case "ADMIN":
        return "Admin Console";
      case "TEACHER":
        return "Teacher Portal";
      case "STUDENT":
        return "Student Portal";
      default:
        return "Dashboard";
    }
  };

  return (
    <nav className="bg-[#f3e4c3] px-6 py-4 sticky top-0 z-50">
      <div className="w-full max-w-9xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-[#FF5F5F] p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
            <BookOpen className="text-white w-6 h-6" strokeWidth={3} />
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-black font-sans uppercase transform group-hover:-rotate-2 transition-transform">
            SKWELASTIC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <>
              {/* Logged In View */}
              {location.pathname === getDashboardRoute() ? (
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full select-none">
                  <div className="bg-[#FF5F5F] text-white p-1.5 rounded-xl border-2 border-black">
                    <User size={20} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col leading-none gap-0.5">
                    <span className="font-black text-sm uppercase text-black tracking-tight">
                      {user.name || "User"}
                    </span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      {user.role}
                    </span>
                  </div>
                </div>
              ) : (
                <Link
                  to={getDashboardRoute()}
                  className="flex items-center gap-2 font-black text-lg text-gray-900 hover:text-[#FF5F5F] transition-colors uppercase tracking-tight"
                >
                  <LayoutDashboard size={20} strokeWidth={3} />
                  {getDashboardLabel()}
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 font-black px-6 py-2 bg-[#FFC94D] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
              >
                <LogOut size={20} strokeWidth={3} />
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Guest View */}
              <Link
                to="/login"
                className="font-black text-lg hover:underline decoration-2 underline-offset-4 decoration-black"
              >
                LOG IN
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 font-black px-6 py-2 bg-[#FF5F5F] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff4040] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
              >
                <User size={20} strokeWidth={3} />
                GET STARTED
              </Link>
            </>
          )}
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
          {user ? (
            <>
              <Link
                to={getDashboardRoute()}
                className="flex items-center gap-3 font-black text-xl p-4 bg-gray-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard size={24} />
                {getDashboardLabel()}
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 font-black text-xl p-4 bg-[#FF5F5F] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all w-full justify-start uppercase"
              >
                <LogOut size={24} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center justify-center gap-3 font-black text-xl p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="flex items-center justify-center gap-3 font-black text-xl p-4 bg-[#FF5F5F] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
