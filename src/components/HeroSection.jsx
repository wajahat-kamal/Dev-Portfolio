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

        {/* Socials */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/wajahat-kamal"
            target="_blank"
            className="text-zinc-500 transition hover:text-black dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/wajahat-kamal"
            target="_blank"
            className="text-zinc-500 transition hover:text-black dark:hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
