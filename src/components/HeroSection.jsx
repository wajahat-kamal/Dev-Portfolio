import { ArrowDown, Github, Linkedin } from "lucide-react";
import TypingEffect from "./TypingEffect";
import portfolioImg from "../assets/portfolioimg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 text-gray-900"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 z-10">
        {/* -------- Left Content -------- */}
        <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-4xl md:text-[46px] font-extrabold tracking-tight leading-snug">
            <span className="block opacity-0 animate-fade-in text-gray-700 dark:text-gray-300 text-lg sm:text-xl md:text-2xl">
              Hey, I'm
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-wide animate-fade-in-delay-1">
              Wajahat Kamal
            </span>
          </h1>

          {/* Typing Effect */}
          <div
            className="flex justify-center lg:justify-start
                       text-lg sm:text-2xl md:text-3xl font-bold
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
                       bg-clip-text text-transparent tracking-wide
                       opacity-0 animate-fade-in-delay-2"
          >
            <TypingEffect />
          </div>

          {/* Action Buttons & Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#">
              <button className="cosmic-button flex items-center justify-center text-sm sm:text-base font-medium gap-2 px-4 py-2 rounded-full w-full sm:w-auto transition-all duration-300 hover:scale-105">
                Download CV
              </button>
            </a>

            <a
              target="_blank"
              href="https://github.com/wajahat-kamal"
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] hover:scale-110"
            >
              <Github className="w-5 h-5 text-gray-200" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com"
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-gray-200" />
            </a>
          </div>
        </div>

        {/* -------- Right Content: Profile Image -------- */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={portfolioImg}
            alt="Wajahat Kamal"
            className="w-40 sm:w-52 md:w-64 lg:w-80 rounded-full shadow-2xl border-4 border-primary/80 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-transform duration-500"
          />
        </div>
      </div>

      {/* -------- Scroll Down Indicator -------- */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
