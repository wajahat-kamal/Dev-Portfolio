import { ArrowDown, Github, Linkedin } from "lucide-react";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 py-8 text-gray-900"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-4 justify-between z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1 space-y-2 md:space-y-4 w-full">
          {/* Heading */}
          <h1 className="text-[22px] sm:text-3xl md:text-[42px] font-extrabold tracking-tight leading-snug">
            <span className="block opacity-0 animate-fade-in text-foreground/80 text-center lg:text-left text-lg sm:text-xl md:text-2xl">
              Hey, I'm
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-wide animate-fade-in-delay-1 text-center lg:text-left">
              Wajahat Kamal
            </span>
          </h1>

          {/* Typing Text */}
          <div
            className="
              flex justify-center lg:justify-start
              text-base sm:text-xl md:text-2xl lg:text-3xl font-bold
              bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
              bg-clip-text text-transparent tracking-wide
              opacity-0 animate-fade-in-delay-2
            "
          >
            <TypingEffect />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 opacity-0 animate-fade-in-delay-4">
            <a href="#">
              <button className="cosmic-button flex items-center justify-center text-xs sm:text-sm md:text-base font-semibold gap-2 px-3 py-1.5 w-full sm:w-auto">
                Download CV
              </button>
            </a>

            <a
              target="_blank"
              href="https://github.com/wajahat-kamal"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:scale-105"
            >
              <Github className="w-4 h-4 text-gray-200" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-gray-200" />
            </a>
          </div>
        </div>

        {/* Right Content: Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/portfolioimg.jpg"
            alt="Wajahat Kamal"
            className="w-36 sm:w-44 md:w-56 lg:w-72 rounded-full opacity-90 shadow-xl border-4 border-primary hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[10px] sm:text-xs text-muted-foreground mb-1">
          Scroll
        </span>
        <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
