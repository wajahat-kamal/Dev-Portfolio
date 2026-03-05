import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true },
});

export const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -36, filter: "blur(6px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true },
});

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mt-10">
        <motion.div
          className="w-[90%] text-center space-y-4 mb-6"
          {...fadeLeft(0.1)}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-center relative mb-4 fira-code"
            {...fadeLeft(0.15)}
          >
            <span className="text-primary tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
              About Me
            </span>
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-1 left-1/2 md:left-78.5 -translate-x-1/2 md:translate-x-0 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "11rem", opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <motion.p
            className="text-gray-300 text-[11px] sm:text-[15px] leading-relaxed fira-code"
            {...fadeUp(0.25)}
          >
            Hey! I'm{" "}
            <span className="font-semibold text-primary">Wajahat Kamal</span>,
            a passionate Full Stack Developer who loves building modern,
            responsive, and high-performance web applications using the MERN
            Stack and Next.js. I enjoy turning ideas into interactive digital
            experiences that are both visually appealing and user-friendly. My
            goal is to write clean, efficient code and keep learning new
            technologies to grow as a developer.
          </motion.p>
        </motion.div>
      </div>

      {/* ====== Skills Section ====== */}
      <motion.div
        className="pt-2 w-[93%] md:w-[80%] lg:w-[71%] border-t border-gray-700/30"
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-center text-sm text-gray-400 fira-code"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Technologies I work with:
        </motion.h3>
        <SkillsSection />
      </motion.div>
    </motion.section>
  );
};