"use client";
import React from "react";
import SkillsSection from "./SkillsSection";
import portfolioImg from "../assets/portfolioimg.jpg";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-16"
    >
      {/* ====== Heading ====== */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 relative">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
          About Me
        </span>
        <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
      </h2>

      {/* ====== Image Left / Text Right ====== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* ====== Image Section ====== */}
        <div className="flex justify-center w-full md:w-80">
          <img
            src={portfolioImg}
            alt="Wajahat Kamal"
            className="w-40 sm:w-52 md:w-64 lg:w-80 rounded-full shadow-2xl border-4 border-purple-500/50 hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          />
        </div>

        {/* ====== Text Content ====== */}
        <div className="max-w-xl w-full text-center md:text-left space-y-5 md:w-1/2">
          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed tracking-wide">
            I’m <span className="font-semibold text-cyan-400">Wajahat Kamal</span>, 
            a passionate <span className="text-purple-400">Full Stack Developer</span> 
            who builds fast, scalable, and visually engaging web applications using the{" "}
            <span className="text-blue-400">MERN stack</span>. I focus on creating seamless 
            digital experiences that combine functionality with modern design. 
            I love solving real-world problems, learning new technologies, and writing 
            clean, maintainable code.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <button className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300">
              Contact Me
            </button>

            <button className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base border border-purple-500 text-purple-300 hover:bg-purple-600/20 hover:scale-105 transition-transform duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* ====== Skills Section ====== */}
      <div className="mt-10 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
            Skills
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
        </h2>

        <div className="flex justify-center">
          <SkillsSection />
        </div>
      </div>
    </section>
  );
};
