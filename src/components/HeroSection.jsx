import { ArrowDown, FileText, Send } from "lucide-react";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        {/* ---------- Left Content ---------- */}
        <div className="flex-1 text-center space-y-2 md:space-y-4">
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
            className="flex justify-center 
             text-base sm:text-xl md:text-3xl lg:text-4xl font-bold 
             font-mono tracking-wide"
          >
            <TypingEffect
              text={[
                "Full Stack Developer",
                // "React Enthusiast",
                // "JavaScript Coder",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {/* View My Resume */}
            <a
              href="/resume"
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
              href="https://www.linkedin.com/in/wajahat-kamal/"
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white 
             rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 shadow-md 
             hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 fira-code"
            >
              <Send className="w-4 h-4" />
              Connect on
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  d="M2,0H32a2,2,0,0,1,2,2V32a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z"
                  fill="#0A66C2"
                />
                <path
                  d="M8,13H12V27H8ZM10,7A2.3,2.3,0,1,1,7.7,9.3,2.29,2.29,0,0,1,10,7ZM14,13h4v1.9h0.1a4.41,4.41,0,0,1,4-2.1c4.3,0,5.1,2.7,5.1,6.2V27H23V19.3c0-1.8,0-4.1-2.5-4.1s-2.9,1.9-2.9,3.9V27H14Z"
                  fill="#fff"
                />
              </svg>
            </a>
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
