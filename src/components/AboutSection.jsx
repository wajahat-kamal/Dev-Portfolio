"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";
import liLogo from "../assets/icons/linkedin-logo.png";
import giLogo from "../assets/icons/github-logo.png";
import { ExternalLink } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ====== Image + Text Container ====== */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-full max-w-4xl mt-10">
        {/* ====== Text Content ====== */}
        <motion.div
          className="md:max-w-xl lg:max-w-[650px] w-full text-center md:text-left space-y-4 px-3 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center md:text-start relative mb-4 fira-code">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
              About Me
            </span>
            <span className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-44 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          </h2>

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
        </motion.div>

        {/* ====== Profile Card ====== */}
        <motion.div
          className="w-[200px] sm:w-[160px] rounded-2xl bg-zinc-900/90 backdrop-blur border border-zinc-700 shadow-xl p-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-3 flex items-center justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <ExternalLink className="w-4 h-4" />
            Profiles
          </h1>

          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/wajahat-kamal/"
              target="_blank"
              className="group w-full h-10 rounded-lg bg-zinc-800 border border-zinc-700 shadow-sm flex items-center justify-center hover:-translate-y-0.5 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <img
                src={liLogo}
                alt="LinkedIn"
                className="h-10 md:w-[80%] w-[55%] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            <a
              href="https://github.com/wajahat-kamal"
              target="_blank"
              className="group w-full h-10 rounded-lg bg-zinc-800 border border-zinc-700 shadow-sm flex items-center justify-center hover:-translate-y-0.5 hover:border-zinc-500 hover:shadow-zinc-500/20 transition-all duration-300"
            >
              <img
                src={giLogo}
                alt="GitHub"
                className="h-12 w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ====== Skills Section ====== */}
      <motion.div
        className="mt-5 w-[93%] md:w-[80%] lg:w-[71%] border-t border-gray-700/30 pt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-center text-sm text-gray-400 fira-code">
          Technologies I work with:
        </h3>
        <SkillsSection />
      </motion.div>
    </motion.section>
  );
};
