import { ArrowDown, Github, Linkedin } from "lucide-react";
import TypingEffect from "./TypingEffect";
import portfolioImg from "../assets/portfolioimg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        {/* ---------- Left Content ---------- */}
        <div className="flex-1 text-center lg:text-left space-y-2 md:space-y-4">
          {/* Heading */}
          <h1 className="text-[26px] sm:text-4xl md:text-[48px] font-extrabold tracking-tight leading-snug">
            <span className="block text-gray-600 dark:text-gray-400 text-lg sm:text-xl md:text-2xl mb-1">
              👋 Hey, I'm
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-wide animate-gradient-move">
              Wajahat Kamal
            </span>
          </h1>

          {/* Typing Effect */}
          <div
            className="flex justify-center lg:justify-start
                       text-lg sm:text-2xl md:text-3xl font-bold
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
                       bg-clip-text text-transparent tracking-wide"
          >
            <TypingEffect />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
            {/* Download CV Button */}
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative text-white group-hover:tracking-wider transition-all duration-300">
                Download CV
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-2.5 sm:gap-3">
              <a
                target="_blank"
                href="https://github.com/wajahat-kamal"
                aria-label="GitHub"
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100" />
              </a>

              <a
                target="_blank"
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------- Right Content: Profile Image ---------- */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={portfolioImg}
              alt="Wajahat Kamal"
              className="relative w-40 sm:w-52 md:w-64 lg:w-80 rounded-full shadow-2xl border-4 border-purple-500/50 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* ---------- Scroll Down Indicator ---------- */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
      </div>
    </section>
  );
};

export default HeroSection;
