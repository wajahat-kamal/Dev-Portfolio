import {
  ArrowDown,
  Download,
  FileText,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
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
        <div className="flex-1 text-center lg:text-start space-y-2 md:space-y-4">
          {/* Heading */}
          <h1 className="text-[26px] sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-snug">
            <span className="block text-gray-600 dark:text-gray-400 text-lg sm:text-xl md:text-3xl">
              👋 Hey, I'm
            </span>
            <span
              className="
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code tracking-wide animate-gradient-move"
            >
              Wajahat Kamal
            </span>
          </h1>

          {/* Typing Effect */}
          <div
            className="flex justify-center lg:justify-start 
             text-base sm:text-xl md:text-3xl lg:text-4xl font-bold 
             font-mono tracking-wide"
          >
            <TypingEffect
              text={[
                "Full Stack Developer",
                "React Enthusiast",
                "JavaScript Coder",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
            {/* View My Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white 
                   rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 shadow-md 
                   hover:shadow-purple-500/30
                   transition-all duration-300 hover:scale-105 fira-code"
            >
              <FileText className="w-4 h-4" />
              View My Resume
            </a>

            {/* Let's Connect */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white 
                   rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 shadow-md 
                   hover:shadow-purple-500/30 
                   transition-all duration-300 hover:scale-105 fira-code"
            >
              <Send className="w-4 h-4" />
              Let’s Connect
            </a>
          </div>
        </div>
        <div
          className="hidden lg:flex justify-center items-center w-full md:w-72 h-80 bg-[#F2ECE0] rounded-xl border-4 border-purple-500/40  shadow-lg shadow-purple-500/30 transition-all duration-500 
                 hover:scale-105 hover:shadow-purple-500/50 group"
        >
          <div className="relative">
            <img
              src={portfolioImg}
              alt="Wajahat Kamal"
              className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto
                "
            />

            {/* Gradient Glow Overlay */}
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/20 to-blue-400/20 
                    opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            ></div>
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center w-full sm:w-80 md:w-72 lg:w-80 h-auto bg-[#F2ECE0] rounded-xl border-4 border-purple-500/40 shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 group">
          <div className="relative">
            <img
              src={portfolioImg}
              alt="Wajahat Kamal"
              className="w-52 sm:w-60 md:w-64 lg:w-72 h-auto rounded-lg object-cover transition-transform duration-500"
            />
            {/* Gradient Glow Overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
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
