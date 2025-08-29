import { ArrowDown } from "lucide-react";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-15 py-10 text-gray-900"
    >
      <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 justify-between z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1 space-y-3 md:space-y-5 w-full">
          {/* Heading */}
          <h1 className="text-[26px] sm:text-4xl md:text-[55px] lg:text-[65px] font-extrabold tracking-tight leading-snug">
            <span className="block opacity-0 animate-fade-in text-foreground/80 text-center lg:text-left text-xl sm:text-2xl md:text-3xl">
              Hey, I'm
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-wide animate-fade-in-delay-1 text-center lg:text-left">
              Wajahat Kamal
            </span>
          </h1>

          {/* Typing Text */}
          <p className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent text-center lg:text-left font-bold text-lg sm:text-2xl md:text-4xl lg:text-[45px] tracking-wide opacity-0 animate-fade-in-delay-2 flex flex-row items-center justify-center lg:justify-start">
            <TypingEffect />
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 opacity-0 animate-fade-in-delay-4">
            {/* CV Button */}
            <a href="#">
              <button className="cosmic-button flex items-center justify-center text-base sm:text-lg font-semibold gap-2 w-full sm:w-auto">
                Download CV
              </button>
            </a>

            {/* GitHub Button */}
            <a
              target="_blank"
              href="https://github.com/wajahat-kamal"
              className="cosmic-button flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.303
                  3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                  0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C5.422
                  17.07 4.633 16.7 4.633 16.7c-1.087-.744.083-.729.083-.729
                  1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809
                  1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93
                  0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                  0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005
                  2.045.138 3 .405 2.28-1.552 3.285-1.23
                  3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
                  1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
                  5.92.42.36.81 1.096.81 2.21 0 1.595-.015 2.88-.015
                  3.27 0 .315.21.69.825.57C20.565 21.795 24
                  17.295 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              target="_blank"
              href="https://www.linkedin.com"
              className="cosmic-button flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
              >
                <path
                  d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761
                  2.239 5 5 5h14c2.761 0 5-2.239
                  5-5V5c0-2.761-2.239-5-5-5zM7.12 20.452H3.56V9h3.56v11.452zM5.34
                  7.433c-1.144 0-2.067-.93-2.067-2.078 0-1.147.923-2.078
                  2.067-2.078s2.067.931 2.067 2.078c0 1.148-.923
                  2.078-2.067 2.078zM20.452 20.452h-3.558v-5.563c0-1.327-.027-3.036-1.849-3.036-1.851
                  0-2.134 1.447-2.134 2.942v5.657h-3.558V9h3.415v1.561h.049c.475-.898
                  1.637-1.849 3.368-1.849 3.601 0 4.268 2.368 4.268 5.448v6.292z"
                />
              </svg>
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
