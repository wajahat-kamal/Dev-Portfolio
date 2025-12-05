"use client";
import React from "react";
import SkillsSection from "./SkillsSection";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12"
    >
      {/* ====== Image + Text Container ====== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl mt-10">
        {/* ====== Text Content ====== */}
        <div className="md:max-w-xl lg:max-w-[650px] w-full text-center md:text-left space-y-4 px-2 sm:px-4">
          {/* ====== Heading ====== */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center md:text-start relative mb-4 fira-code">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
              About Me
            </span>
            <span className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-44 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          </h2>

          {/* ====== Paragraph ====== */}
          <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed fira-code">
            Hey! I'm{" "}
            <span className="font-semibold text-cyan-400">Wajahat Kamal</span>,
            a passionate{" "}
            <span className="text-purple-400">Full Stack Developer</span> who
            loves building modern, responsive, and high-performance web
            applications using the MERN Stack. I enjoy turning ideas into
            interactive digital experiences that are both visually appealing and
            user-friendly. My goal is to write clean, efficient code and keep
            learning new technologies to grow as a developer.
          </p>
        </div>
      </div>

      {/* ====== Full-Width Skills Section Below ====== */}
      <div className="mt-5 w-[93%] md:w-[80%] lg:w-[55%] border-t border-gray-700/30 pt-4">
        <h3 className="text-center text-sm text-gray-400 fira-code">
          Technologies I work with:
        </h3>
        <SkillsSection />
      </div>
    </section>
  );
};
