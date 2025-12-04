"use client";
import React from "react";
import SkillsSection from "./SkillsSection";
import { Github, Instagram, Linkedin } from "lucide-react";

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
          <p className="text-gray-300 text-[14px] sm:text-[17px] leading-relaxed tracking-wide fira-code">
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

        {/* ====== Social Links + Email ====== */}
        <div className="flex flex-col justify-center items-center gap-3 pb-16">
          <div className="flex flex-row items-center space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/wajahat-kamal"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
            >
              <Github className="w-6 h-6 cursor-pointer" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/wajahat-kamal/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6 cursor-pointer" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <Instagram className="w-6 h-6 cursor-pointer" />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:wajahatkamal3.0@gmail.com"
            className="text-gray-400 mr-4 hover:text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code tracking-wider text-[13px] transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-semibold">
              wajahatkamal3.0
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code">
                @
              </span>
              gmail
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code">
                .com
              </span>
            </span>
          </a>
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
