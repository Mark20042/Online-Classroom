import React from "react";
import { motion } from "framer-motion";
import { STUDENT_FEATURES, TEACHER_FEATURES } from "../../../constants";

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white ">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <span className="font-mono font-bold text-sm tracking-widest text-[#FF5F5F] uppercase bg-black px-2 py-1 transform -rotate-2">
            Why Choose Us?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight font-sans">
            Built for the{" "}
            <span className="underline decoration-4 decoration-[#F3E8C9] underline-offset-4">
              Modern Classroom
            </span>
            .
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-medium">
            Skwelastic replaces clunky legacy software with a fast, intuitive,
            and powerful toolkit that teachers actually enjoy using.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-gray-900 font-sans inline-block border-b-4 border-[#3A5A40] pb-2">
                For Teachers
              </h3>
            </div>

            {TEACHER_FEATURES.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="
                  group flex md:flex-row flex-col items-center md:items-start gap-6 
                  bg-white p-6 rounded-xl border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F3E8C9]/30
                  transition-all duration-200
                "
              >
                <div
                  className={`
                    shrink-0 w-16 h-16 ${item.color} border-2 border-black rounded-lg
                    flex items-center justify-center 
                    shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
                    group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 
                    transition-all
                  `}
                >
                  <div className={item.iconColor || "text-black"}>
                    {item.icon}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="text-xl font-black text-gray-900 mb-2 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-gray-900 font-sans inline-block border-b-4 border-[#A78BFA] pb-2">
                For Students
              </h3>
            </div>

            {STUDENT_FEATURES.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="
                  group flex md:flex-row flex-col items-center md:items-start gap-6 
                  bg-white p-6 rounded-xl border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#E0E7FF]/50
                  transition-all duration-200
                "
              >
                <div
                  className={`
                    shrink-0 w-16 h-16 ${item.color} border-2 border-black rounded-lg
                    flex items-center justify-center 
                    shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
                    group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 
                    transition-all
                  `}
                >
                  <div className={item.iconColor || "text-black"}>
                    {item.icon}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="text-xl font-black text-gray-900 mb-2 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
