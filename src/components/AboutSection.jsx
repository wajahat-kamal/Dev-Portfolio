"use client";
import React from "react";
import SkillsSection from "./SkillsSection";
import portfolioImg from "../assets/portfolioimg.jpg";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-16 py-20 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl">
        {/* ====== Image Section ====== */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="relative group rounded-xl border-4 border-purple-500/30 overflow-hidden shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50">
            <img
              src={portfolioImg}
              alt="Wajahat Kamal"
              className="w-60 sm:w-64 md:w-72 lg:w-80 h-auto rounded-xl object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </div>
        </div>

        {/* ====== Text Section ====== */}
        <div className="max-w-xl md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
              About Me
            </span>
            <span className="absolute bottom-[-10px] left-0 w-28 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          </h2>

          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed tracking-wide">
            I’m <span className="font-semibold text-cyan-400">Wajahat Kamal</span>, a
            passionate <span className="text-purple-400">Full Stack Developer</span> who
            builds fast, scalable, and visually engaging web applications using the{" "}
            <span className="text-blue-400">MERN stack</span>. I focus on creating seamless
            digital experiences that combine functionality with design excellence.
          </p>

          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">
              Technologies I work with:
            </p>
            <SkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
};
