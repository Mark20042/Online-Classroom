import React from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "../../../constants";

const HowItWorks = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#f3e4c3] font-sans ">
      <div className="max-w-8xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block bg-[#FFFEF8]  px-4 py-1 font-black text-sm tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4 -rotate-2 font-mono text-[#FF5F5F]">
            PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#3A5A40] tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-gray-700 font-bold max-w-2xl mx-auto ">
            Get started in minutes. No complex setup or training required.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 200,150 
                   C 400,150 400,150 600,150 
                   C 800,150 800,150 1000,150
                   C 1250,150 1250,550 1000,550
                   C 800,550 800,550 600,550
                   C 400,550 400,550 200,550"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="12 12"
              />

              <path
                d="M 210,540 L 190,550 L 210,560"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 gap-x-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isRow2 = index >= 3;

              let gridClasses = "";
              if (isRow2) {
                if (index === 3) gridClasses = "lg:order-3";
                if (index === 4) gridClasses = "lg:order-2";
                if (index === 5) gridClasses = "lg:order-1";
              }

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`
                  flex flex-col items-center text-center group relative
                  ${gridClasses}
                  /* Add some stagger for fun, alternate up/down slightly */
                  ${index % 2 === 1 ? "lg:mt-12" : "lg:mt-0"}
                `}
                >
                  <div className="relative mb-6 w-full max-w-87.5 aspect-4/3 flex items-center justify-center p-4 bg-[#f3e4c3] rounded-3xl z-10">
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -top-2 -right-2 w-12 h-12 bg-[#3B82F6] text-white border-2 border-black  rounded-full flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-30`}
                    >
                      {step.id}
                    </div>

                    {/* Image */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 relative z-20"
                    />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-black text-[#3A5A40] mb-3 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed max-w-xs mx-auto text-sm font-mono">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
