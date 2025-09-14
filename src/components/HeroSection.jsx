import { ArrowDown, Github, Linkedin } from "lucide-react";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-15 py-10 text-gray-900"
    >
      <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-0 justify-between z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1 space-y-3 md:space-y-5 w-full">
          {/* Heading */}
          <h1 className="text-[26px] sm:text-4xl md:text-[55px]  font-extrabold tracking-tight leading-snug">
            <span className="block opacity-0 animate-fade-in text-foreground/80 text-center lg:text-left text-xl sm:text-2xl md:text-3xl">
              Hey, I'm
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-wide animate-fade-in-delay-1 text-center lg:text-left">
              Wajahat Kamal
            </span>
          </h1>

          {/* Typing Text */}
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent text-center lg:text-left font-bold text-lg sm:text-2xl md:text-4xl lg:text-[40px] tracking-wide opacity-0 animate-fade-in-delay-2 flex flex-row items-center justify-center lg:justify-start">
            <TypingEffect />
          </span>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#">
              <button className="cosmic-button flex items-center justify-center text-sm sm:text-base md:text-lg font-semibold gap-2 px-4 py-2 w-full sm:w-auto">
                Download CV
              </button>
            </a>

            <a
              target="_blank"
              href="https://github.com/wajahat-kamal"
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:scale-105"
            >
              <Github className="w-5 h-5 text-gray-200" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com"
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-gray-200" />
            </a>
          </div>
        </div>

        {/* Right Content: Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/portfolioimg.jpg"
            alt="Wajahat Kamal"
            className="w-48 sm:w-56 md:w-[280px] lg:w-[360px] rounded-full opacity-90 shadow-xl border-4 border-primary hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
