import SkillsSection from "./SkillsSection";
import { Rocket } from "lucide-react";
import portfolioImg from "../assets/portfolioimg.jpg";


export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-3 sm:px-6 flex items-center justify-center flex-col gap-10"
    >
      <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
            About Me
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
        </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-">
        <div>
          <img src={portfolioImg} alt="Wajahat Kamal"
              className="relative w-40 sm:w-52 md:w-64 lg:w-80 rounded-full shadow-2xl border-4 border-purple-500/50 hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="max-w-xl">
          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed tracking-wide">
            I’m a full stack developer with hands-on experience building
            full-stack web applications using MongoDB, Express.js, React, and
            Node.js. I specialize in creating scalable backends, interactive
            frontends, and delivering clean, maintainable code.
          </p>
          <div className="max-w-xs flex items-start justify-start flex-col md:flex-row gap-1">
            <button className="cosmic-button w-fit flex items-center mx-auto gap-2">
              Contact Me
            </button>

            <button className="cosmic-button w-fit flex items-center mx-auto gap-2">
              Download CV
            </button>
          </div>
        </div>
      </div>
      </div>

      <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
            Skills
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
        </h2>
      </div>
      <div>
         <SkillsSection/>
      </div>

    </section>
  );
};
