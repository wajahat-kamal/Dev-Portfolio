"use client";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

export default function HeroSection() {
  return (
    <section id='home' className="relative overflow-hidden py-28 min-h-[91dvh] flex justify-center items-center">
      {/* Background gradient blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center mt-25">

        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30 text-sm" style={{ boxShadow: "0px 0px 31.4384px rgba(168, 85, 247, 0.42)" }}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-2 text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path>
          </svg>
          Available for Freelance Work
        </span>
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl  tracking-widest text-zinc-100"
        >
          Hey, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight sm:text-7xl"
        >
          <span className="bg-gradient-to-r from-[#BB86FC] via-[#53DAFA] to-[#3471EB] bg-clip-text text-transparent">
            Wajahat Kamal
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-2xl md:text-5xl font-medium text-zinc-600 dark:text-zinc-400"
        >
          {/* Typing Effect */}
          <TypingEffect
            text={["Full Stack Developer"]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2000}
            initialDelay={500}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-blue-400"
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300"
        >
          I build clean, modern, and high-performance web interfaces using MERN
          stack and Next.js. Focused on user experience and scalable
          architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Contact Me
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section >
  );
}
