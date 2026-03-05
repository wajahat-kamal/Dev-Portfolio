"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import ReactTypingEffect from "react-typing-effect";

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[91dvh] items-center justify-center overflow-hidden py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(168,85,247,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto mt-15 max-w-6xl px-6 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span
            className="inline-flex items-center rounded-full border border-border-blue-400/20 bg-blue-500/20 px-6 py-1.5 text-sm text-primary"
            style={{ boxShadow: "0 0 32px rgba(168, 85, 247, 0.42)" }}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-2 h-4 w-4 text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
              />
            </svg>
            Available for Work
          </span>
        </motion.div>

        {/* Intro */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-xl tracking-widest text-zinc-100"
        >
          Hey, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold tracking-tight sm:text-7xl"
        >
          <span className="text-primary">
            Wajahat Kamal
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-2xl sm:text-4xl font-medium text-zinc-600 dark:text-zinc-400 md:text-5xl"
        >
          <TypingEffect
            text={["Full Stack Developer"]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2000}
            initialDelay={500}
            loop
            showCursor
            cursorCharacter="|"
            cursorClassName="text-blue-400"
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-sm md:max-w-xl text-sm leading-relaxed text-zinc-300"
        >
          <span className="hidden md:block text-zinc-300">
            I build clean, modern, and fast web interfaces using MERN stack and Next.js,
            focusing on user experience and making apps easy to scale.
          </span>
          <span className="block md:hidden text-zinc-300">
            I build fast, modern web apps with MERN & Next.js, focusing on user experience and scalability.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 flex flex-wrap justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-primary
               px-6 py-3 text-sm font-semibold text-white transition-all duration-300 
               hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ ["--tw-shadow-color"]: "rgba(168,85,247,0.35)" }}
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl border border-zinc-300 
               px-6 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 
               hover:bg-zinc-100 hover:scale-105 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 
               focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
          >
            Contact Me
            <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}