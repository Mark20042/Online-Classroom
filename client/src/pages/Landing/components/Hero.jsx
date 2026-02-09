import React from "react";
import heroImage from "@/assets/karton.png";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-6 py-12 md:py-0 min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-8">
          <div className="relative">
            <p className="text-xl md:text-3xl font-medium text-gray-900 max-w-2xl leading-relaxed font-sans">
              <span className="text-[#3A5A40]  text-2xl md:text-5xl font-black tracking-tighter mr-4 bg-[#F3E8C9] ">
                SKWELASTIC
              </span>
              centralizes grading, attendance, and analytics into one powerful
              platform—giving you total control over your academic workflow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
            <button
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5F5F] text-white font-bold text-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
          transition-all
           cursor-pointer"
              onClick={() => navigate("/register")}
            >
              JOIN FOR FREE
              <ArrowRight size={22} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/*  Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative group w-full max-w-2xl">
            <div className="relative overflow-hidden p-2">
              <img
                src={heroImage}
                alt="Student having online class"
                className="w-full aspect-5/4 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
