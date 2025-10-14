"use client";
import React from "react";
import SkillsSection from "./SkillsSection";
import portfolioImg from "../assets/portfolioimg.jpg";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-16"
    >
      {/* ====== Image Left / Text Right ====== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-6xl">
        {/* ====== Image Section ====== */}
        <div
          className="hidden lg:flex justify-center items-center w-full md:w-72 h-80 bg-[#F2ECE0] rounded-xl border-4 border-purple-500/40  shadow-lg shadow-purple-500/30 transition-all duration-500 
                 hover:scale-105 hover:shadow-purple-500/50 group"
        >
          <div className="relative">
            <img
              src={portfolioImg}
              alt="Wajahat Kamal"
              className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto
                "
            />

            {/* Gradient Glow Overlay */}
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/20 to-blue-400/20 
                    opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            ></div>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center w-full sm:w-80 md:w-72 lg:w-80 h-auto bg-[#F2ECE0] rounded-xl border-4 border-purple-500/40 shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 group">
          <div className="relative">
            <img
              src={portfolioImg}
              alt="Wajahat Kamal"
              className="w-52 sm:w-60 md:w-64 lg:w-72 h-auto rounded-lg object-cover transition-transform duration-500"
            />
            {/* Gradient Glow Overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </div>
        </div>

        {/* ====== Text Content ====== */}
        <div className="max-w-xl w-full text-center md:text-left space-y-4 px-2 sm:px-4">
          {/* ====== Heading ====== */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center md:text-start relative mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
              About Me
            </span>
            <span className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-32 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          </h2>

          {/* ====== Paragraph ====== */}
          <p className="text-gray-300 text-[16px] sm:text-[17px] leading-relaxed tracking-wide">
            Hello! I'm{" "}
            <span className="font-semibold text-cyan-400">Wajahat Kamal</span>,
            a passionate{" "}
            <span className="text-purple-400">Full Stack Developer</span> who
            loves building modern, responsive, and high-performance web
            applications using the{" "}
            <span className="text-blue-400">MERN Stack</span>. I enjoy turning
            ideas into interactive digital experiences that are both visually
            appealing and user-friendly. My goal is to write clean, efficient
            code and keep learning new technologies to grow as a developer.
          </p>

          {/* ====== Skills Section ====== */}
          <div className="mt-6 w-full">
            <p className="text-sm text-gray-400">Technologies I work with:</p>
            <div className="flex justify-center md:justify-start">
              <SkillsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
