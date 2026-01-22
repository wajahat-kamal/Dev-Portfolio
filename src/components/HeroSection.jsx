"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[91dvh] items-center justify-center overflow-hidden py-28"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/25 via-cyan-400/25 to-purple-500/25 blur-3xl" />
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 text-center">
        {/* Availability badge */}
        <span
          className="inline-flex items-center rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 px-4 py-2 text-sm text-zinc-100"
          style={{
            boxShadow: "0 0 32px rgba(168, 85, 247, 0.42)",
          }}
        >
        
          Available for Freelance Work
        </span>

        {/* Intro */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-6 text-xl tracking-widest text-zinc-100"
        >
          Hey, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight sm:text-7xl"
        >
          <span
            className="bg-gradient-to-r from-[#BB86FC] via-[#53DAFA] to-[#3471EB] bg-clip-text text-transparent"
            // style={{
            //   textShadow:
            //     "0 2px 12px rgba(187,134,252,.55), 0 6px 28px rgba(83,218,250,.35)",
            // }}
          >
            Wajahat Kamal
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-4 text-2xl font-medium text-zinc-600 dark:text-zinc-400 md:text-5xl"
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
          transition={{ delay: 0.4 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300"
        >
          I build clean, modern, and high-performance web interfaces using MERN
          stack and Next.js. Focused on user experience and scalable
          architecture.
        </motion.p>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.05] hover:shadow-xl"
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
    </section>
  );
}
